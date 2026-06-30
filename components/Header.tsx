"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-porcelain/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" aria-label="neOOne Associates home" className="flex items-center">
          <Image
            src="https://neoone.com.my/wp-content/uploads/2025/04/neoone-2025-logo-e1744470350864-400x181.png"
            alt="neOOne Associates"
            width={156}
            height={70}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-semibold text-ink lg:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-white/75 hover:text-fern focus:outline-none focus:ring-4 focus:ring-jade/20"
              >
                {item.label}
                {item.children ? <ChevronDown size={15} aria-hidden="true" /> : null}
              </Link>
              {item.children ? (
                <div className="invisible absolute left-0 top-full z-50 min-w-72 translate-y-2 rounded-lg border border-ink/10 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <Link href={item.href} className="block rounded-md px-4 py-3 text-xs font-black uppercase text-coral hover:bg-porcelain">
                    {item.label} overview
                  </Link>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block rounded-md px-4 py-3 text-sm font-bold text-graphite hover:bg-mist hover:text-fern">
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-graphite px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-fern focus:outline-none focus:ring-4 focus:ring-amber/40 sm:inline-flex"
        >
          Start a conversation
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-ink/10 bg-white text-graphite lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>
      {isOpen ? (
        <nav id="mobile-nav" className="border-t border-ink/10 bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <div key={item.href} className="rounded-lg border border-mist bg-porcelain/70 p-1">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-black text-ink hover:bg-white"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="grid gap-1 pb-2 pl-4 pr-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-3 py-2 text-sm font-semibold text-ink/72 hover:bg-white hover:text-fern"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-graphite px-5 py-3 text-center text-sm font-bold text-white"
            >
              Start a conversation
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
