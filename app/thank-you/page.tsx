import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-porcelain px-5">
      <section className="max-w-xl rounded-lg bg-white p-8 text-center shadow-soft">
        <CheckCircle2 className="mx-auto text-fern" size={52} aria-hidden="true" />
        <h1 className="mt-5 font-[var(--font-display)] text-4xl font-bold text-graphite">Enquiry received</h1>
        <p className="mt-4 leading-7 text-ink/72">
          Thank you. neOOne can follow up with programme details, availability and next steps.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-graphite px-6 py-3 text-sm font-black text-white hover:bg-fern"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
