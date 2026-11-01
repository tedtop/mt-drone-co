"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { companyShortName, contact } from "@/lib/siteConfig";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/government-enterprise", label: "Government & Enterprise" },
  { href: "/safety-compliance", label: "Safety & Compliance" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 text-lg font-bold text-white"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded bg-accent-500 text-sm font-black text-white"
            aria-hidden="true"
          >
            MT
          </span>
          <span>{companyShortName}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring text-sm font-medium text-slate-200 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contact.phoneHref}`}
            className="focus-ring text-sm font-medium text-slate-200 hover:text-white"
          >
            {contact.phone}
          </a>
          <Link
            href="/quote"
            className="focus-ring rounded-md bg-accent-500 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-600"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-brand-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md px-2 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="focus-ring mt-2 rounded-md bg-accent-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-accent-600"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
