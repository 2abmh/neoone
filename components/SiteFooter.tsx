import Link from "next/link";
import { CircleDot } from "lucide-react";
import { footerLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-porcelain">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="flex items-center gap-2 text-sm font-bold text-ink/70">
          <CircleDot size={16} aria-hidden="true" /> 2026 neOOne Associates
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center rounded-full px-2 text-sm font-bold text-ink/70 hover:text-fern"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
