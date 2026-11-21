"use client";

import { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Clock3,
  Handshake,
  Heart,
  Gift,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  X,
} from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

// Every form opens the visitor's email app with the message ready to send to this address
const INBOX = "info@sumoafrica.org";

const openEmail = (subject: string, lines: [string, string][]) => {
  const body = lines.filter(([, v]) => v.trim()).map(([k, v]) => `${k}: ${v}`).join("\n\n");
  window.location.href = `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Read a named field from a submitted form
const field = (form: HTMLFormElement, name: string) => String(new FormData(form).get(name) ?? "");

/* Reusable soft background: dots, glows, rings and floating circles */
function Decor({ flip = false }: { flip?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div aria-hidden className={`pointer-events-none absolute top-10 h-80 w-80 rounded-full bg-[#3eaef2]/20 blur-3xl ${flip ? "-right-32" : "-left-32"}`} />
      <div aria-hidden className={`pointer-events-none absolute -bottom-24 h-80 w-80 rounded-full bg-[#1a7cc4]/15 blur-3xl ${flip ? "-left-32" : "-right-32"}`} />
      <div aria-hidden className={`pointer-events-none absolute -top-16 h-52 w-52 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30 ${flip ? "-left-16" : "-right-16"}`} style={{ animationDuration: "50s" }} />
      <div aria-hidden className={`pointer-events-none absolute -bottom-20 h-60 w-60 rounded-full border-[28px] border-[#3eaef2]/10 ${flip ? "-right-20" : "-left-20"}`} />
      <div aria-hidden className="pointer-events-none absolute left-[2%] top-[5%] h-4 w-4 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-[10%] right-[4%] h-9 w-9 rounded-full border-4 border-[#2a95dd]/30" />
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#071630] outline-none transition placeholder:text-slate-400 focus:border-[#3eaef2] focus:ring-4 focus:ring-[#3eaef2]/15";
const labelClass = "mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-[#071630]";
const buttonClass =
  "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3eaef2] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd]";

type Choice = "partner" | "Drive Right" | "Safe Steps to School" | "In-Kind Contribution";

const actions = [
  { key: "partner" as Choice, title: "Partner With Us", text: "Collaborate on research, projects or advocacy.", icon: Handshake },
  { key: "Drive Right" as Choice, title: "Support a Project", text: "Back Drive Right or Safe Steps to School.", icon: Heart },
  { key: "In-Kind Contribution" as Choice, title: "In-Kind Contribution", text: "Offer equipment, skills, venues or services.", icon: Gift },
];

const socials = [
  { label: "X (Twitter)", handle: "@SUMOAfrica", icon: FaXTwitter, color: "#000000" },
  { label: "LinkedIn", handle: "Sustainable Mobility Africa", icon: FaLinkedin, color: "#0A66C2" },
  { label: "Facebook", handle: "Sustainable-Mobility", icon: FaFacebook, color: "#1877F2" },
];

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [involvedSent, setInvolvedSent] = useState(false);

  const openInvolved = (c: Choice) => {
    setChoice(c);
    setInvolvedSent(false);
    setTimeout(() => document.getElementById("get-involved-form")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  const isPartner = choice === "partner";

  return (
    <main className="bg-white text-[#071630]">
      {/* =========================================================
          HERO
      ========================================================= */}
      {/* Starts below the fixed navbar and fills the rest of the screen, so the photo is not hidden */}
      <section className="relative mt-16 flex min-h-[calc(100svh-4rem)] items-center overflow-hidden sm:mt-[72px] sm:min-h-[calc(100svh-72px)] lg:mt-20 lg:min-h-[calc(100svh-5rem)]">
        {/* Positioned a little above center so people's faces stay in view */}
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('/images/sumo4.jpeg')", backgroundPosition: "center 30%" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#06132e]/80 to-[#0b3f73]/50" />
        <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />
        <div aria-hidden className="absolute -left-40 bottom-10 h-72 w-72 rounded-full bg-[#1a7cc4]/25 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-[#3eaef2]/40 bg-[#3eaef2]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7cc8f5] backdrop-blur-sm sm:text-xs">
              Contact Us
            </span>
            <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s <span className="text-[#3eaef2]">Connect</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Have a question, partnership inquiry, or want to get involved? We&apos;d love to hear
              from you. Reach out and let&apos;s work together for safer roads.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#message" className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#3eaef2] px-6 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:text-sm">
                Send a Message
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#get-involved" className="inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#3eaef2] hover:bg-[#3eaef2] sm:text-sm">
                Get Involved
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GET INVOLVED: three ways to help
      ========================================================= */}
      <section id="get-involved" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-r from-[#3eaef2] via-[#2a95dd] to-[#1a7cc4] py-12 sm:py-14">
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border-[24px] border-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 animate-spin rounded-full border-2 border-dashed border-white/25" style={{ animationDuration: "50s" }} />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase text-white sm:text-3xl">Get Involved</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {actions.map(({ key, title, text, icon: Icon }) => {
              const active = key === "partner" ? choice === "partner" : key === "In-Kind Contribution" ? choice === key : choice === "Drive Right" || choice === "Safe Steps to School";
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => openInvolved(key)}
                  className={`group flex items-start gap-4 rounded-2xl p-5 text-left ring-1 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${
                    active ? "bg-white text-[#071630] ring-white" : "bg-white/10 text-white ring-white/25 hover:bg-white/20"
                  }`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${active ? "bg-[#3eaef2] text-white" : "bg-white text-[#1a7cc4]"}`}>
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block font-bold uppercase tracking-wide">{title}</span>
                    <span className={`mt-1 block text-sm leading-6 ${active ? "text-slate-600" : "text-white/85"}`}>{text}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GET INVOLVED FORM (appears after choosing an option)
      ========================================================= */}
      {choice && (
        <section id="get-involved-form" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100/60 py-14 sm:py-16">
          <Decor flip />
          <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
            <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.10)] sm:p-8">
              <button
                type="button"
                onClick={() => setChoice(null)}
                aria-label="Close form"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:bg-sky-50 hover:text-[#3eaef2]"
              >
                <X size={18} />
              </button>

              {involvedSent ? (
                <div className="py-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3eaef2] text-white">
                    <CheckCircle2 size={26} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold uppercase text-[#3eaef2]">Almost Done!</h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                    Your email app has opened with your request. Press send there and our team will get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">Get Involved</p>
                  <h3 className="mt-2 text-xl font-bold uppercase leading-snug text-[#071630] sm:text-2xl">
                    {isPartner ? "Let's Work Together" : choice === "In-Kind Contribution" ? "Offer an In-Kind Contribution" : `Support ${choice}`}
                  </h3>

                  {/* Choose which project to support */}
                  {(choice === "Drive Right" || choice === "Safe Steps to School") && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(["Drive Right", "Safe Steps to School"] as Choice[]).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setChoice(p)}
                          className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition ${
                            choice === p ? "bg-[#3eaef2] text-white shadow" : "bg-sky-50 text-[#1a7cc4] hover:bg-sky-100"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  )}

                  <form
                    className="mt-6 space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const f = e.currentTarget;
                      openEmail(isPartner ? "Partnership request" : `Support request: ${choice}`, [
                        ["Name", field(f, "name")],
                        ["Email", field(f, "email")],
                        ["Organization", field(f, "organization")],
                        [isPartner ? "Partnership idea" : "How I would like to support", field(f, "message")],
                      ]);
                      setInvolvedSent(true);
                    }}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="gi-name" className={labelClass}>Full Name *</label>
                        <input id="gi-name" name="name" required placeholder="Your full name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="gi-email" className={labelClass}>Email *</label>
                        <input id="gi-email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="gi-org" className={labelClass}>Organization <span className="font-normal normal-case tracking-normal text-slate-400">(optional)</span></label>
                      <input id="gi-org" name="organization" placeholder="Organization or company name" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="gi-msg" className={labelClass}>{isPartner ? "How would you like to partner with us? *" : "How would you like to support? *"}</label>
                      <textarea id="gi-msg" name="message" required rows={5} placeholder="Tell us a little more..." className={`${inputClass} resize-none leading-6`} />
                    </div>
                    <button type="submit" className={buttonClass}>
                      <Send size={16} />
                      {isPartner ? "Send Partnership Request" : "Send Support Request"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          MESSAGE FORM AND CONTACT DETAILS
      ========================================================= */}
      <section id="message" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100/60 py-16 sm:py-20">
        <Decor />
        <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Message form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">Write to Us</p>
            <h2 className="mt-2 text-2xl font-bold uppercase text-[#3eaef2] sm:text-3xl">Send Us a Message</h2>

            {messageSent ? (
              <div className="mt-6 rounded-2xl bg-sky-50 p-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3eaef2] text-white">
                  <CheckCircle2 size={26} />
                </span>
                <h3 className="mt-4 text-lg font-bold uppercase text-[#3eaef2]">Almost Done!</h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
                  Your email app has opened with your message. Press send there and we&apos;ll reply as soon as we can.
                </p>
                <button type="button" onClick={() => setMessageSent(false)} className="mt-4 text-xs font-bold uppercase tracking-wide text-[#3eaef2] hover:text-[#1a7cc4]">
                  Write another message
                </button>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = e.currentTarget;
                  openEmail(field(f, "subject") || "Message from the SUMO Africa website", [
                    ["Name", field(f, "name")],
                    ["Email", field(f, "email")],
                    ["Message", field(f, "message")],
                  ]);
                  setMessageSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="m-name" className={labelClass}>Name *</label>
                    <input id="m-name" name="name" required placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="m-email" className={labelClass}>Email *</label>
                    <input id="m-email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="m-subject" className={labelClass}>Subject</label>
                  <input id="m-subject" name="subject" placeholder="What is this about?" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="m-msg" className={labelClass}>Message *</label>
                  <textarea id="m-msg" name="message" required rows={6} placeholder="Tell us how we can help..." className={`${inputClass} resize-none leading-6`} />
                </div>
                <button type="submit" className={buttonClass}>
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">Get in Touch</h2>
              <ul className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3eaef2] text-white shadow"><MapPin size={20} /></span>
                  <div>
                    <p className="font-bold text-[#071630]">Address</p>
                    <p className="mt-0.5 text-sm leading-6 text-slate-600">CVS Plaza, Lenana Road,<br />8281-00100, Nairobi, Kenya</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3eaef2] text-white shadow"><Mail size={20} /></span>
                  <div className="min-w-0">
                    <p className="font-bold text-[#071630]">Email</p>
                    <a href="mailto:info@sumoafrica.org" className="mt-0.5 block break-all text-sm text-slate-600 transition hover:text-[#3eaef2]">info@sumoafrica.org</a>
                    <a href="mailto:sustainablemobilityafrica@gmail.com" className="block break-all text-sm text-slate-600 transition hover:text-[#3eaef2]">sustainablemobilityafrica@gmail.com</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3eaef2] text-white shadow"><Clock3 size={20} /></span>
                  <div>
                    <p className="font-bold text-[#071630]">Working Hours</p>
                    <p className="mt-0.5 text-sm leading-6 text-slate-600">Monday to Friday<br />9:00 AM to 5:00 PM EAT</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">Follow Us</h2>
              <ul className="mt-5 space-y-3">
                {socials.map(({ label, handle, icon: Icon, color }) => (
                  <li key={label}>
                    <a href="#" className="group flex items-center gap-4 rounded-2xl p-2 transition hover:bg-sky-50">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white shadow" style={{ backgroundColor: color }}>
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-[#071630]">{label}</span>
                        <span className="block text-sm text-slate-500">{handle}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAP
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <Decor flip />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold uppercase text-[#3eaef2] sm:text-3xl">Find Us</h2>
          <div className="overflow-hidden rounded-3xl border-4 border-white shadow-[0_24px_50px_rgba(15,23,42,0.15)]">
            <iframe
              title="SUMO Africa office location"
              src="https://www.google.com/maps?q=CVS+Plaza+Lenana+Road+Nairobi+Kenya&output=embed"
              className="block h-[320px] w-full sm:h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
