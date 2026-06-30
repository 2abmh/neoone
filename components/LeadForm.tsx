"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Send } from "lucide-react";

export function LeadForm() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    company: "",
    message: "",
    consent: false,
  });

  function update(field: keyof typeof form, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.firstName || !form.email || !form.message || !form.consent) {
      setStatus("First name, email, message and consent are required.");
      return;
    }

    const body = [
      `First name: ${form.firstName}`,
      `Last name: ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Job title: ${form.jobTitle}`,
      `Company/Organization: ${form.company}`,
      "",
      form.message,
      "",
      "Consent: I consent to neOOne storing my submitted information and contacting me about this enquiry.",
    ].join("\n");

    window.location.href = `mailto:admin@neoone.com.my?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={prepareEmail} className="rounded-lg border border-white/70 bg-white p-5 shadow-soft">
      <p className="text-sm font-black uppercase text-fern">Lead form</p>
      <h3 className="mt-2 text-2xl font-black text-graphite">Tell us what you need</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          First Name
          <input className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.firstName} onChange={(event) => update("firstName", event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Last Name
          <input className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.lastName} onChange={(event) => update("lastName", event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input type="email" className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.email} onChange={(event) => update("email", event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Phone/Mobile
          <input className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.phone} onChange={(event) => update("phone", event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Job Title
          <input className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.jobTitle} onChange={(event) => update("jobTitle", event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Company/Organization
          <input className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.company} onChange={(event) => update("company", event.target.value)} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink md:col-span-2">
          How can we help you?
          <textarea className="min-h-32 rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20" value={form.message} onChange={(event) => update("message", event.target.value)} />
        </label>
      </div>
      <label className="mt-4 flex gap-3 text-sm font-semibold leading-6 text-ink/72">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
          className="mt-1 size-4 accent-fern"
        />
        I consent to having this website store my submitted information and I agree to receive email communications from neOOne Associates.
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-graphite px-6 py-4 text-sm font-black text-white transition hover:bg-fern"
      >
        Contact US <Send size={18} aria-hidden="true" />
      </button>
      {status ? <p className="mt-3 text-sm font-semibold text-coral">{status}</p> : null}
    </form>
  );
}
