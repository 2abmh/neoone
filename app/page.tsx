import Image from "next/image";
import Link from "next/link";
import { Check, Mail, MoveRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Header } from "@/components/Header";
import { ProgramEnquiryCard } from "@/components/ProgramEnquiryCard";
import { SiteFooter } from "@/components/SiteFooter";
import { getPrograms } from "@/lib/cms";
import { impactPoints, operatingSteps, solutions } from "@/lib/site-data";

export default async function Home() {
  const programs = await getPrograms();

  return (
    <>
      <Header />
      <main>
        <section className="growth-map overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-fern/20 bg-white/75 px-4 py-2 text-sm font-extrabold text-fern">
                Training and development consultant in Malaysia
              </p>
              <h1 className="font-[var(--font-display)] text-5xl font-bold leading-[1.02] text-graphite md:text-7xl">
                Empowering growth. Unleashing potential.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/78">
                neOOne Associates believes growth is more than numbers on a chart. It is the transformation of
                people, organisations and ecosystems through learning, innovation and purposeful change.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-graphite px-6 py-4 text-sm font-black text-white shadow-soft transition hover:bg-fern focus:outline-none focus:ring-4 focus:ring-amber/40"
                >
                  Explore neOOne <MoveRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/70 px-6 py-4 text-sm font-black text-graphite transition hover:border-fern hover:text-fern focus:outline-none focus:ring-4 focus:ring-jade/20"
                >
                  View solutions
                </Link>
              </div>
            </div>

            <div className="hero-lens relative min-h-[470px] overflow-hidden rounded-lg bg-graphite shadow-soft">
              <Image
                src="https://neoone.com.my/wp-content/uploads/2025/10/Learning-and-development-consultant-768x576.jpg"
                alt="Learning and development workshop"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/86 via-graphite/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-extrabold uppercase text-amber">Growth consultancy</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["Transformation", "Innovation", "Learning", "Impact"].map((item) => (
                    <span key={item} className="rounded-md bg-white/12 px-4 py-3 text-sm font-bold backdrop-blur">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid overflow-hidden rounded-lg border border-white/70 bg-white shadow-soft md:grid-cols-4">
            {operatingSteps.map((step) => (
              <div key={step.label} className="border-b border-mist p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="text-sm font-black uppercase text-fern">{step.label}</p>
                <p className="mt-3 text-sm leading-6 text-ink/72">{step.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-coral">Three pillars of impact</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold leading-tight text-graphite md:text-5xl">
              Solutions that connect strategy with behaviour.
            </h2>
            <p className="mt-5 text-base leading-7 text-ink/72">
              The site is structured around business outcomes first, then the learning mechanics that support them.
            </p>
          </div>
          <div className="grid gap-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article key={solution.title} className="rounded-lg border border-white/70 bg-white p-6 shadow-soft">
                  <div className="flex flex-col gap-5 sm:flex-row">
                    <span className="grid size-14 shrink-0 place-items-center rounded-full bg-mist text-fern">
                      <Icon size={25} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase text-amber">{solution.marker}</p>
                      <h3 className="mt-1 text-2xl font-black text-graphite">{solution.title}</h3>
                      <p className="mt-3 leading-7 text-ink/72">{solution.description}</p>
                      <Link href="/solutions" className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full py-2 text-sm font-black text-fern">
                        Explore pillar <MoveRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="bg-graphite py-16 text-white lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_390px] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase text-amber">Programs and enquiries</p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold leading-tight md:text-5xl">
                Public programmes, certifications and learning tools.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-white/72">
                The live Neo One offer includes trainer toolkit workshops, theory and methodology programmes,
                GAMES Trainer's Play, Learning Pass, A.P.P.L.E products, HOT Project contributions and certification routes.
              </p>
              <div className="mt-8 grid gap-4">
                {programs.map((program) => (
                  <article key={program.id} className="rounded-lg border border-white/12 bg-white/8 p-5 backdrop-blur">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <p className="text-sm font-black uppercase text-jade">{program.audience}</p>
                        <h3 className="mt-1 text-2xl font-black">{program.title}</h3>
                        <p className="mt-3 max-w-2xl leading-7 text-white/72">{program.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <ProgramEnquiryCard programs={programs} />
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto grid max-w-7xl gap-9 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase text-fern">Sustainability and impact</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold leading-tight text-graphite md:text-5xl">
              Growth for good needs operating discipline.
            </h2>
            <p className="mt-5 leading-8 text-ink/72">
              Responsible practices, empowered communities and sustainable innovation are built into the way programs
              are scoped, delivered and followed through.
            </p>
          </div>
          <div className="route-line grid gap-5 pl-12">
            {impactPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="relative rounded-lg border border-white/70 bg-white p-5 shadow-soft">
                  <span className="absolute -left-[3.15rem] top-5 grid size-9 place-items-center rounded-full bg-white text-fern shadow-soft">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-black text-graphite">{point.title}</h3>
                  <p className="mt-2 leading-7 text-ink/72">{point.description}</p>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <div className="grid gap-8 rounded-lg bg-white p-6 shadow-soft lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <div>
              <p className="text-sm font-black uppercase text-coral">Contact</p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold leading-tight text-graphite">
                Tell neOOne what your team needs to grow into next.
              </h2>
              <a
                href="mailto:admin@neoone.com.my"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full py-2 font-black text-fern hover:text-graphite"
              >
                <Mail size={18} aria-hidden="true" /> admin@neoone.com.my
              </a>
            </div>
            <div className="grid gap-3">
              {[
                "Founded in 2010 by Yasmin Ahmad Mazlani and Rosihan Juara Baharuddin.",
                "Located at NEOONE Accelerated Learning Center, Taman Tun Dr Ismail, Kuala Lumpur.",
                "Enquiries are routed by email while backend registration is kept out of this phase.",
              ].map((item) => (
                <p key={item} className="flex gap-3 rounded-md bg-porcelain p-4 font-semibold text-ink">
                  <Check className="mt-1 shrink-0 text-jade" size={18} aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <SiteFooter />
    </>
  );
}
