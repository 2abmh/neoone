import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadForm } from "@/components/LeadForm";
import type { ContentPage } from "@/lib/content-pages";

type ContentPageViewProps = {
  page: ContentPage;
};

export function ContentPageView({ page }: ContentPageViewProps) {
  return (
    <main>
      <section className="growth-map">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-fern/20 bg-white/75 px-4 py-2 text-sm font-extrabold text-fern">
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-5xl font-[var(--font-display)] text-5xl font-bold leading-[1.03] text-graphite md:text-7xl">
              {page.hero}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">{page.summary}</p>
          </div>
          {page.image ? (
            <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-graphite shadow-soft">
              <Image
                src={page.image}
                alt={page.imageAlt ?? page.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 to-transparent" />
            </div>
          ) : null}
        </div>
      </section>

      {page.sections.map((section) => (
        <AnimatedSection key={`${page.slug}-${section.title}`} className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-black uppercase text-coral">{section.eyebrow}</p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold leading-tight text-graphite md:text-5xl">
                {section.title}
              </h2>
              {section.body ? <p className="mt-5 leading-8 text-ink/72">{section.body}</p> : null}
            </div>

            {section.cards ? (
              <div className="grid gap-4">
                {section.cards.map((card) => (
                  <article key={card.title} className="overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft">
                    {card.image ? (
                      <div className="relative aspect-[16/9] bg-mist">
                        <Image
                          src={card.image}
                          alt={card.imageAlt ?? card.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 48vw, 100vw"
                        />
                      </div>
                    ) : null}
                    <div className="p-6">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-black text-graphite">{card.title}</h3>
                        {card.body ? <p className="mt-3 leading-7 text-ink/72">{card.body}</p> : null}
                      </div>
                      {card.href ? (
                        <Link
                          href={card.href}
                          className="mt-1 grid size-10 shrink-0 place-items-center rounded-full bg-mist text-fern transition hover:bg-fern hover:text-white"
                          aria-label={`Open ${card.title}`}
                        >
                          <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                      ) : null}
                    </div>
                    {card.items ? (
                      <ul className="mt-5 grid gap-3">
                        {card.items.map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-ink/72">
                            <Check className="mt-1 shrink-0 text-jade" size={16} aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </AnimatedSection>
      ))}

      {page.slug === "contact" ? (
        <AnimatedSection className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <LeadForm />
        </AnimatedSection>
      ) : null}
    </main>
  );
}
