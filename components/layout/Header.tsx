"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function VRKLogo() {
  return (
    <Link href="/" className="flex items-center group py-1" aria-label="VRK Solutions – Home">
      <Image
        src="/brand/vrk-logo-light.png"
        alt="VRK Solutions"
        width={240}
        height={36}
        className="h-8 sm:h-9 w-auto object-contain"
        priority
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    // Return focus to the hamburger button
    setTimeout(() => toggleRef.current?.focus(), 100);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && drawerOpen) {
        closeDrawer();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen, closeDrawer]);

  // Focus trap
  useEffect(() => {
    if (!drawerOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function trapFocus(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    drawer.addEventListener("keydown", trapFocus);
    return () => drawer.removeEventListener("keydown", trapFocus);
  }, [drawerOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-brand-hairline bg-brand-white/95 backdrop-blur-md transition-shadow duration-200 shadow-sm"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <VRKLogo />

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${isActive(link.href)
                  ? "text-brand-orange"
                  : "text-brand-primary-text hover:text-brand-orange"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 inline-flex items-center rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-deep-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-primary-text lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={openDrawer}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 lg:hidden ${drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm h-[100dvh] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-brand-hairline px-4 sm:px-6 shrink-0">
          <VRKLogo />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-brand-primary-text hover:bg-brand-soft-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 sm:px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeDrawer}
              className={`rounded-md px-4 py-3.5 text-lg font-semibold transition-colors duration-150 flex items-center justify-between ${
                isActive(link.href)
                  ? "bg-brand-warm-ivory text-brand-orange"
                  : "text-brand-primary-text hover:bg-brand-warm-ivory hover:text-brand-orange"
              }`}
            >
              <span>{link.label}</span>
              <span className="text-xs font-mono opacity-50">→</span>
            </Link>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="border-t border-brand-hairline p-4 sm:p-6 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] shrink-0 bg-brand-soft-surface/30">
          <Link
            href="/contact"
            onClick={closeDrawer}
            className="flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-4 text-base font-bold text-white transition-colors duration-150 hover:bg-brand-deep-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 shadow-sm"
          >
            Start a Project
          </Link>
          <div className="mt-3 text-center">
            <a
              href="https://wa.me/919398845947"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-brand-secondary-text hover:text-brand-orange inline-flex items-center gap-1.5"
            >
              <span>Or WhatsApp: +91 93988 45947</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
