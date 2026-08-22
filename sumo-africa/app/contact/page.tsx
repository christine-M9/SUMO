"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Clock3,
  Twitter,
  Linkedin,
  Facebook,
  ChevronDown,
  Handshake,
  Heart,
} from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function ContactPage() {
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const [donationFormOpen, setDonationFormOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState("");
  const [donationSubmitted, setDonationSubmitted] = useState(false);

  const handlePartnerSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDonationSelection = (selection: string) => {
    setSelectedDonation(selection);
    setDonationSubmitted(false);
    setDonationFormOpen(true);
    setGetInvolvedOpen(false);
    setDonateOpen(false);
    setProjectsOpen(false);

    setTimeout(() => {
      document
        .getElementById("donation-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  return (
    <main className="bg-[#f5f5f5] text-[#0c1b2a]">

      {/* HERO */}
      <section className="bg-[#3eaef2] pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">

            <p className="text-[#ff7a12] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Contact Us
            </p>

            <h1 className="mt-5 text-white text-[40px] md:text-[60px] font-black uppercase tracking-tight leading-[0.95]">
              Let&apos;s Connect
            </h1>

            <p className="mt-7 text-white/75 text-[17px] md:text-[20px] leading-[1.8] max-w-4xl">
              Have a question, partnership inquiry, or want to get involved?
              We&apos;d love to hear from you. Reach out and let&apos;s work
              together for safer roads.
            </p>

            {/* GET INVOLVED */}
            <div className="mt-8 w-full max-w-[300px]">

              <button
                onClick={() => setGetInvolvedOpen(!getInvolvedOpen)}
                className="inline-flex items-center gap-3 rounded-full bg-[#ff7a12] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e96808] hover:shadow-lg"
              >
                Get Involved

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    getInvolvedOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* DROPDOWN CONTENT - NOW IN NORMAL PAGE FLOW */}
              {getInvolvedOpen && (
                <div className="mt-4 w-full overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">

                  {/* PARTNER WITH US */}
                  <button
                    onClick={() => {
                      setPartnerOpen(true);
                      setDonationFormOpen(false);
                      setGetInvolvedOpen(false);

                      setTimeout(() => {
                        document
                          .getElementById("partner-form")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 100);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-5 py-4 text-left text-sm font-bold text-[#06153a] transition hover:bg-[#f5f5f5] hover:text-[#ff7a12]"
                  >
                    <Handshake className="h-4 w-4" />
                    Partner With Us
                  </button>

                  {/* DONATE */}
                  <div>
                    <button
                      onClick={() => setDonateOpen(!donateOpen)}
                      className="flex w-full items-center justify-between gap-3 rounded-xl px-5 py-4 text-left text-sm font-bold text-[#06153a] transition hover:bg-[#f5f5f5] hover:text-[#ff7a12]"
                    >
                      <span className="flex items-center gap-3">
                        <Heart className="h-4 w-4" />
                        Donate
                      </span>

                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          donateOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {donateOpen && (
                      <div className="mt-1 space-y-1 px-2 pb-2">

                        {/* PROJECTS */}
                        <div>
                          <button
                            onClick={() =>
                              setProjectsOpen(!projectsOpen)
                            }
                            className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold text-[#06153a] transition hover:bg-[#f5f5f5] hover:text-[#ff7a12]"
                          >
                            <span>Projects</span>

                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                projectsOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* PROJECT OPTIONS */}
                          {projectsOpen && (
                            <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#ff7a12]/30 pl-3">

                              <button
                                onClick={() =>
                                  handleDonationSelection("Drive Right")
                                }
                                className="block w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-[#06153a] transition hover:bg-[#f5f5f5] hover:text-[#ff7a12]"
                              >
                                Drive Right
                              </button>

                              <button
                                onClick={() =>
                                  handleDonationSelection(
                                    "Safe Steps to School"
                                  )
                                }
                                className="block w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-[#06153a] transition hover:bg-[#f5f5f5] hover:text-[#ff7a12]"
                              >
                                Safe Steps to School
                              </button>

                            </div>
                          )}
                        </div>

                        {/* IN-KIND CONTRIBUTION */}
                        <button
                          onClick={() =>
                            handleDonationSelection(
                              "In-Kind Contribution"
                            )
                          }
                          className="block w-full rounded-lg px-4 py-3 text-left text-sm font-semibold text-[#06153a] transition hover:bg-[#f5f5f5] hover:text-[#ff7a12]"
                        >
                          In-Kind Contribution
                        </button>

                      </div>
                    )}
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      </section>
      {/* DONATION / CONTRIBUTION FORM */}
      {donationFormOpen && (
        <section
          id="donation-form"
          className="bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl px-6 md:px-10">
            <div className="mb-10 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ff7a12]">
                Get Involved
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#06153a] md:text-5xl">
                Support {selectedDonation}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
                Tell us how you would like to support this initiative and our
                team will get back to you.
              </p>
            </div>

            {donationSubmitted ? (
              <div className="rounded-3xl bg-[#06153a] p-10 text-center text-white shadow-xl">
                <Heart className="mx-auto mb-5 h-12 w-12 text-[#ff7a12]" />

                <h3 className="text-2xl font-bold">
                  Thank You!
                </h3>

                <p className="mt-3 text-white/70">
                  We have received your interest in supporting{" "}
                  {selectedDonation}. Our team will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDonationSubmitted(true);
                }}
                className="rounded-3xl bg-[#f5f5f5] p-7 md:p-10"
              >
                {/* SELECTED PROJECT */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-bold text-[#06153a]">
                    You are supporting
                  </label>

                  <input
                    type="text"
                    value={selectedDonation}
                    readOnly
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-[#06153a] outline-none"
                  />
                </div>

                {/* NAME */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-bold text-[#06153a]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#ff7a12]"
                  />
                </div>

                {/* EMAIL */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-bold text-[#06153a]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#ff7a12]"
                  />
                </div>

                {/* ORGANIZATION */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-bold text-[#06153a]">
                    Organization
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your organization name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#ff7a12]"
                  />
                </div>

                {/* MESSAGE */}
                <div className="mb-8">
                  <label className="mb-2 block text-sm font-bold text-[#06153a]">
                    Message
                  </label>

                  <textarea
                    required
                    rows={6}
                    placeholder="Tell us how you would like to support..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-[#ff7a12]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff7a12] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e96808] hover:shadow-lg"
                >
                  <Send className="h-4 w-4" />
                  Submit Support Request
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {/* PARTNER WITH US FORM */}
      {partnerOpen && (
        <section
          id="partner-form"
          className="bg-[#f5f5f5] py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl px-6 md:px-10">

            {!submitted ? (
              <div className="rounded-3xl bg-white p-7 shadow-[0_20px_60px_rgba(6,21,58,0.08)] md:p-10">

                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#ff7a12]">
                  Partner With Us
                </p>

                <h2 className="mt-4 text-3xl font-black text-[#06153a] md:text-4xl">
                  Let&apos;s Work Together
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Interested in partnering with us? Tell us a little about
                  yourself and how you would like to collaborate.
                </p>

                <form
                  onSubmit={handlePartnerSubmit}
                  className="mt-8 space-y-6"
                >

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="partner-name"
                      className="mb-2 block text-sm font-bold text-[#06153a]"
                    >
                      Full Name
                    </label>

                    <input
                      id="partner-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-[#06153a] outline-none transition focus:border-[#3eaef2] focus:ring-2 focus:ring-[#3eaef2]/20"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="partner-email"
                      className="mb-2 block text-sm font-bold text-[#06153a]"
                    >
                      Email Address
                    </label>

                    <input
                      id="partner-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-[#06153a] outline-none transition focus:border-[#3eaef2] focus:ring-2 focus:ring-[#3eaef2]/20"
                    />
                  </div>

                  {/* ORGANIZATION */}
                  <div>
                    <label
                      htmlFor="organization"
                      className="mb-2 block text-sm font-bold text-[#06153a]"
                    >
                      Organization
                      <span className="ml-1 text-gray-400">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder="Organization or company name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-[#06153a] outline-none transition focus:border-[#3eaef2] focus:ring-2 focus:ring-[#3eaef2]/20"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="partner-message"
                      className="mb-2 block text-sm font-bold text-[#06153a]"
                    >
                      How would you like to partner with us?
                    </label>

                    <textarea
                      id="partner-message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your partnership idea or how you would like to collaborate..."
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm leading-6 text-[#06153a] outline-none transition focus:border-[#3eaef2] focus:ring-2 focus:ring-[#3eaef2]/20"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ff7a12] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e96808] hover:shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                    Send Partnership Request
                  </button>

                </form>
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-10 text-center shadow-[0_20px_60px_rgba(6,21,58,0.08)]">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3eaef2]">
                  <Send className="h-7 w-7 text-white" />
                </div>

                <h2 className="mt-6 text-3xl font-black text-[#06153a]">
                  Thank You!
                </h2>

                <p className="mx-auto mt-4 max-w-md leading-7 text-gray-600">
                  Your partnership request has been received. We&apos;ll get
                  back to you as soon as possible.
                </p>

                <button
                  onClick={() => {
                    setPartnerOpen(false);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-full bg-[#06153a] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0c2a5a]"
                >
                  Close
                </button>

              </div>
            )}

          </div>
        </section>
      )}

      {/* FORM + CONTACT INFO */}
      <section className="bg-[#f7f7f7] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-[#08142c] text-[28px] md:text-[30px] font-black uppercase tracking-tight">
              Send Us A Message
            </h2>

            <form className="mt-10 space-y-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#08142c] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.08em] mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-transparent border-b border-[#d9dde5] pb-3 text-[#66707f] text-[15px] md:text-[16px] placeholder:text-[#a4acb8] outline-none focus:border-[#06153a] transition"
                  />
                </div>

                <div>
                  <label className="block text-[#08142c] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.08em] mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-[#d9dde5] pb-3 text-[#66707f] text-[15px] md:text-[16px] placeholder:text-[#a4acb8] outline-none focus:border-[#06153a] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#08142c] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.08em] mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full bg-transparent border-b border-[#d9dde5] pb-3 text-[#66707f] text-[15px] md:text-[16px] placeholder:text-[#a4acb8] outline-none focus:border-[#06153a] transition"
                />
              </div>

              <div>
                <label className="block text-[#08142c] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.08em] mb-3">
                  Message *
                </label>
                <textarea
                  rows={7}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-white border border-[#d9dde5] px-5 py-4 text-[#66707f] text-[15px] md:text-[16px] placeholder:text-[#a4acb8] outline-none resize-none focus:border-[#06153a] transition"
                />
              </div>

              <button
                type="submit"
                className="bg-[#06153a] hover:bg-[#0b214b] text-white px-8 md:px-10 py-4 text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center gap-3 transition"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-[#08142c] text-[28px] md:text-[30px] font-black uppercase tracking-tight">
              Get In Touch
            </h2>

            <div className="mt-10 space-y-0 border border-[#e3e6ec]">
              <div className="bg-white px-6 md:px-8 py-6 md:py-7 border-b border-[#e3e6ec] flex gap-5">
                <div className="w-14 h-14 bg-[#06153a] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#ff7a12]" size={24} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[#08142c] text-[18px] md:text-[20px] font-bold">
                    Address
                  </h3>
                  <p className="mt-2 text-[#66707f] text-[15px] md:text-[17px] leading-[1.7]">
                    CVS Plaza, Lenana Road,
                    <br />
                    8281-00100, Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="bg-white px-6 md:px-8 py-6 md:py-7 border-b border-[#e3e6ec] flex gap-5">
                <div className="w-14 h-14 bg-[#06153a] flex items-center justify-center shrink-0">
                  <Mail className="text-[#ff7a12]" size={24} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[#08142c] text-[18px] md:text-[20px] font-bold">
                    Email
                  </h3>
                  <div className="mt-2 space-y-1">
                    <a
                      href="mailto:info@sumoafrica.org"
                      className="block text-[#8d99ae] hover:text-[#06153a] text-[15px] md:text-[17px] transition"
                    >
                      info@sumoafrica.org
                    </a>
                    <a
                      href="mailto:sustainablemobilityafrica@gmail.com"
                      className="block text-[#8d99ae] hover:text-[#06153a] text-[15px] md:text-[17px] transition"
                    >
                      sustainablemobilityafrica@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white px-6 md:px-8 py-6 md:py-7 flex gap-5">
                <div className="w-14 h-14 bg-[#06153a] flex items-center justify-center shrink-0">
                  <Clock3 className="text-[#ff7a12]" size={24} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[#08142c] text-[18px] md:text-[20px] font-bold">
                    Working Hours
                  </h3>
                  <p className="mt-2 text-[#66707f] text-[15px] md:text-[17px] leading-[1.7]">
                    Monday - Friday
                    <br />
                    9:00 AM - 5:00 PM EAT
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-[#08142c] text-[20px] md:text-[24px] font-black uppercase tracking-tight">
                Follow Us
              </h3>

              <div className="mt-6 border border-[#e3e6ec]">
                <div className="bg-white px-6 md:px-8 py-5 border-b border-[#e3e6ec] flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#06153a] flex items-center justify-center shrink-0">
                    <Twitter className="text-white" size={20} strokeWidth={2.1} />
                  </div>
                  <div>
                    <h4 className="text-[#08142c] text-[17px] md:text-[19px] font-bold">
                      Twitter
                    </h4>
                    <a
                      href="#"
                      className="mt-1 block text-[#9aa3b2] hover:text-[#06153a] text-[15px] md:text-[17px] transition"
                    >
                      @SUMOAfrica
                    </a>
                  </div>
                </div>

                <div className="bg-white px-6 md:px-8 py-5 border-b border-[#e3e6ec] flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#06153a] flex items-center justify-center shrink-0">
                    <Linkedin className="text-white" size={20} strokeWidth={2.1} />
                  </div>
                  <div>
                    <h4 className="text-[#08142c] text-[17px] md:text-[19px] font-bold">
                      LinkedIn
                    </h4>
                    <a
                      href="#"
                      className="mt-1 block text-[#9aa3b2] hover:text-[#06153a] text-[15px] md:text-[17px] transition"
                    >
                      Sustainable Mobility Africa
                    </a>
                  </div>
                </div>

                <div className="bg-white px-6 md:px-8 py-5 flex gap-5 items-start">
                  <div className="w-12 h-12 bg-[#06153a] flex items-center justify-center shrink-0">
                    <Facebook className="text-white" size={20} strokeWidth={2.1} />
                  </div>
                  <div>
                    <h4 className="text-[#08142c] text-[17px] md:text-[19px] font-bold">
                      Facebook
                    </h4>
                    <a
                      href="#"
                      className="mt-1 block text-[#9aa3b2] hover:text-[#06153a] text-[15px] md:text-[17px] transition"
                    >
                      Sustainable-Mobility
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION SECTION */}
      <section className="bg-[#f5f5f5] py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=CVS+Plaza+Lenana+Road+Nairobi+Kenya&output=embed"
        width="97%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

      

      {/* FOOTER */}
      <footer className="mt-24 bg-[#3eaef2] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6 py-16">

          {/* ABOUT */}
          <div>
            <h3 className="font-bold ">SUMO AFRICA</h3>

            <p className="text-[#071521] text-xs mt-1">
              INCLUSIVE & SUSTAINABLE MOBILITY
            </p>

            <p className="text-[#071521] text-sm mt-4 leading-relaxed">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness,
              education, and research.
            </p>

           <div className="flex gap-4 mt-5 items-center">
  <a href="#" aria-label="X (Twitter)">
    <FaXTwitter
      size={24}
      className="text-black transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" aria-label="LinkedIn)">
    <FaLinkedin
      size={25}
      className="text-[#0A66C2] transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" aria-label="Facebook">
    <FaFacebook
      size={25}
      className="text-[#1877F2] transition-transform duration-300 hover:scale-110"
    />
  </a>
</div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[#071521] font-semibold mb-4">QUICK LINKS</h4>

            <ul className="space-y-2 text-[#071521] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Work</li>
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* PROJECTS + CONTACT */}
          <div>
            <h4 className="text-[#071521] font-semibold mb-4">LOCAL ACTION PROJECTS</h4>

            <ul className="space-y-2 text-[#071521] text-sm mb-6">
              <li className="hover:text-white cursor-pointer">Drive Right</li>
              <li className="hover:text-white cursor-pointer">Safe Steps to School</li>
            </ul>

            {/* LOCATION */}
            <div className="flex gap-2 text-[#071521] text-sm mb-2">
              <MapPin size={16} className="text-[#071521] mt-1" />
              <p>
                CVS Plaza, Lenana Road <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex gap-2 text-[#071521] text-sm">
              <Mail size={16} className="text-[#071521]mt-1" />
              <p>info@sumoafrica.org</p>
            </div>
          </div>
{/* GET IN TOUCH */}
<div className="min-w-0">
  <h4 className="mb-4 font-semibold text-[#071521]">
    GET IN TOUCH
  </h4>

  <p className="mb-5 text-sm leading-6 text-[#071521]">
    Have a question, partnership idea, or want to learn more about
    our work? We'd love to hear from you.
  </p>

  <a
    href="/contact"
    className="inline-flex items-center text-sm font-semibold text-[#071521] transition-colors hover:text-white"
  >
    Contact Us →
  </a>
</div>
        

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-[#071521] text-sm pb-6 border-t border-white/10 pt-6">
          © 2026 SUMO Africa. All rights reserved.
        </div>
      </footer>
    </main>
  );
}