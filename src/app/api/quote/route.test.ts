import { describe, expect, it } from "vitest";
import { isRateLimited, validateQuoteSubmission } from "./route";

// A minimal, fully valid payload shared by tests as a base to mutate from.
const validPayload = {
  service: "Aerial Mapping",
  location: "Missoula, MT",
  size: "40 acres",
  timeline: "Within 2 weeks",
  requesterType: "private" as const,
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "406-555-0100",
  message: "Need a survey of a 40-acre parcel.",
  company_website: "", // honeypot, must stay empty
  formRenderedAt: 0,
};

// formRenderedAt is in the past relative to `now` by more than MIN_SUBMIT_MS
// (3000ms), so the timing guard does not trip for the happy-path cases.
const NOW = 10_000;

describe("validateQuoteSubmission", () => {
  it("passes validation for a fully valid payload", () => {
    const result = validateQuoteSubmission(validPayload, NOW);
    expect(result).toEqual({ status: "valid" });
  });

  it("flags as spam when the honeypot field is filled in", () => {
    const result = validateQuoteSubmission(
      { ...validPayload, company_website: "http://spam.example" },
      NOW
    );
    expect(result).toEqual({ status: "spam" });
  });

  it("flags as spam when submitted faster than the timing-guard threshold", () => {
    // formRenderedAt is only 100ms before `now` — well under MIN_SUBMIT_MS.
    const result = validateQuoteSubmission(
      { ...validPayload, formRenderedAt: NOW - 100 },
      NOW
    );
    expect(result).toEqual({ status: "spam" });
  });

  it("does not flag as spam right at the timing-guard boundary and beyond", () => {
    // Elapsed time exactly equal to the threshold is not "less than" it.
    const result = validateQuoteSubmission(
      { ...validPayload, formRenderedAt: NOW - 3000 },
      NOW
    );
    expect(result).toEqual({ status: "valid" });
  });

  const requiredFieldCases: Array<{
    field: keyof typeof validPayload;
    value: unknown;
    expectedError: string;
  }> = [
    { field: "service", value: "", expectedError: "Missing service type." },
    { field: "location", value: "   ", expectedError: "Missing location." },
    { field: "timeline", value: undefined, expectedError: "Missing timeline." },
    { field: "name", value: "", expectedError: "Missing name." },
    { field: "message", value: "", expectedError: "Missing project details." },
  ];

  it.each(requiredFieldCases)(
    "returns a validation error when $field is missing",
    ({ field, value, expectedError }) => {
      const result = validateQuoteSubmission(
        { ...validPayload, [field]: value },
        NOW
      );
      expect(result).toEqual({ status: "invalid", error: expectedError });
    }
  );

  it("returns a validation error when requesterType is missing", () => {
    const result = validateQuoteSubmission(
      { ...validPayload, requesterType: undefined },
      NOW
    );
    expect(result).toEqual({
      status: "invalid",
      error: "Missing or invalid requester type.",
    });
  });

  it("returns a validation error when requesterType is an invalid value", () => {
    const result = validateQuoteSubmission(
      { ...validPayload, requesterType: "alien" as never },
      NOW
    );
    expect(result).toEqual({
      status: "invalid",
      error: "Missing or invalid requester type.",
    });
  });

  it("returns a validation error when email is missing", () => {
    const result = validateQuoteSubmission(
      { ...validPayload, email: undefined },
      NOW
    );
    expect(result).toEqual({
      status: "invalid",
      error: "Missing or invalid email.",
    });
  });

  it.each([
    "not-an-email",
    "missing-at-sign.com",
    "missing-domain@",
    "@no-local-part.com",
    "spaces in@email.com",
  ])("returns a validation error for invalid email format: %s", (email) => {
    const result = validateQuoteSubmission({ ...validPayload, email }, NOW);
    expect(result).toEqual({
      status: "invalid",
      error: "Missing or invalid email.",
    });
  });
});

describe("isRateLimited", () => {
  it("allows up to the configured max submissions within the window", () => {
    const ip = "198.51.100.1";
    let limited = false;
    for (let i = 0; i < 5; i++) {
      limited = isRateLimited(ip);
    }
    expect(limited).toBe(false);
  });

  it("rejects the submission after exceeding the configured max", () => {
    const ip = "198.51.100.2";
    for (let i = 0; i < 5; i++) {
      isRateLimited(ip);
    }
    expect(isRateLimited(ip)).toBe(true);
  });

  it("tracks different IPs independently", () => {
    const ipA = "198.51.100.3";
    const ipB = "198.51.100.4";
    for (let i = 0; i < 5; i++) {
      isRateLimited(ipA);
    }
    // ipB has made no requests yet, so it should not be rate limited.
    expect(isRateLimited(ipB)).toBe(false);
  });
});
