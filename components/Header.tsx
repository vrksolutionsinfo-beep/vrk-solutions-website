'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const panel = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      panel.current?.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      panel.current?.close();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const links = [
    ['Services', '/services'],
    ['Our Work', '/work'],
    ['Process', '/process'],
    ['Industries', '/industries'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ];
  return (
    <header className="header">
      <Link href="/" aria-label="VRK Solutions home" className="brand">
        <Image src="/brand/monogram.svg" width="44" height="38" alt="" />
        <span>
          VRK<span className="brand-small">SOLUTIONS</span>
        </span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, url]) => (
          <Link
            key={url}
            href={url}
            aria-current={
              path === url || path.startsWith(url + '/') ? 'page' : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link className="button small header-cta" href="/get-quote">
        Start a Project <span>↗</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        aria-expanded={open}
      >
        Menu <span>☰</span>
      </button>
      <dialog
        ref={panel}
        className="mobile-nav"
        onCancel={() => setOpen(false)}
        onClose={() => {
          setOpen(false);
          toggle.current?.focus();
        }}
      >
        <button onClick={() => setOpen(false)} className="close">
          Close ×
        </button>
        <nav aria-label="Mobile navigation">
          {links.map(([label, url]) => (
            <Link key={url} href={url} onClick={() => setOpen(false)}>
              {label} ↗
            </Link>
          ))}
          <Link href="/get-quote" onClick={() => setOpen(false)}>
            Start a Project ↗
          </Link>
        </nav>
      </dialog>
    </header>
  );
}
