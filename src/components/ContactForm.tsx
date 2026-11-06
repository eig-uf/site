"use client";

import { type FormEvent } from "react";
import { contactEmail } from "@/lib/site";

const fieldClass =
  "grid grid-cols-1 border-b border-white/15 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:items-center sm:gap-3";

const labelClass = "py-3.5 text-[0.86rem] font-normal text-white/60";

const controlClass =
  "w-full bg-transparent py-3 text-base text-white outline-none placeholder:text-white/40 focus-visible:outline-none";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [
      message,
      "",
      organization ? `Organization: ${organization}` : "",
      `From: ${name} <${email}>`,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent("EIG inquiry")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={fieldClass}>
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={controlClass} />
      </div>
      <div className={fieldClass}>
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={controlClass} />
      </div>
      <div className={fieldClass}>
        <label className={labelClass} htmlFor="organization">
          Organization
        </label>
        <input id="organization" name="organization" type="text" autoComplete="organization" className={controlClass} />
      </div>
      <div className="flex flex-col border-b border-white/15">
        <label className="pt-3.5 text-[0.86rem] font-normal text-white/60" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={8}
          placeholder="Tell us what you have in mind."
          className={`${controlClass} min-h-52 resize-y`}
        />
      </div>
      <div className="flex items-center justify-between gap-4 pt-4">
        <p className="text-[0.86rem] text-white/50">* Required fields</p>
        <button
          type="submit"
          className="!rounded-full bg-[#474747] px-3 py-1 text-base font-normal text-white"
        >
          Send
        </button>
      </div>
    </form>
  );
}
