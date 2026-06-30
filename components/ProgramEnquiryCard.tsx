"use client";

import { useMemo, useState } from "react";
import { Mail, Send } from "lucide-react";
import type { Program } from "@/lib/cms";

type ProgramEnquiryCardProps = {
  programs: Program[];
};

export function ProgramEnquiryCard({ programs }: ProgramEnquiryCardProps) {
  const [programId, setProgramId] = useState(programs[0]?.id ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const selectedProgram = useMemo(
    () => programs.find((program) => program.id === programId) ?? programs[0],
    [programId, programs],
  );

  function prepareEnquiry() {
    if (!selectedProgram || !name || !email) {
      setStatus("Enter your name, email and selected program first.");
      return;
    }

    const subject = `Program enquiry: ${selectedProgram.title}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Program: ${selectedProgram.title}`,
      `Audience: ${selectedProgram.audience}`,
      "",
      message || "I would like to know more about this program.",
    ].join("\n");

    window.location.href = `mailto:admin@neoone.com.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="rounded-lg border border-white/70 bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-full bg-amber/20 text-graphite">
          <Mail size={22} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold uppercase text-fern">Enquiry first</p>
          <h3 className="text-2xl font-black text-graphite">Ask about a program</h3>
        </div>
      </div>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Program
          <select
            value={programId}
            onChange={(event) => setProgramId(event.target.value)}
            className="rounded-md border border-mist bg-porcelain px-4 py-3 font-semibold outline-none focus:ring-4 focus:ring-jade/20"
          >
            {programs.map((program) => (
              <option key={program.id} value={program.id}>
                {program.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Full name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20"
            autoComplete="name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20"
            autoComplete="email"
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-28 rounded-md border border-mist bg-porcelain px-4 py-3 outline-none focus:ring-4 focus:ring-jade/20"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={prepareEnquiry}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-fern px-5 py-4 text-sm font-black text-white transition hover:bg-graphite focus:outline-none focus:ring-4 focus:ring-amber/40"
      >
        Prepare enquiry <Send size={18} aria-hidden="true" />
      </button>
      {status ? <p className="mt-3 text-sm font-semibold text-coral">{status}</p> : null}
      <p className="mt-4 text-xs leading-5 text-ink/60">
        Registration flow can be added later after the programme process is confirmed.
      </p>
    </div>
  );
}
