import Link from "next/link";
import {
  Send,
  MapPin,
  Mail,
  Clock3,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#0c1b2a]">
      {/* HERO */}
      <section className="bg-[#06153a] pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-[#ff7a12] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Contact Us
            </p>

            <h1 className="mt-5 text-white text-[40px] md:text-[64px] font-black uppercase tracking-tight leading-[0.95]">
              Let&apos;s Connect
            </h1>

            <p className="mt-7 text-white/75 text-[17px] md:text-[20px] leading-[1.8] max-w-4xl">
              Have a question, partnership inquiry, or want to get involved?
              We&apos;d love to hear from you. Reach out and let&apos;s work
              together for safer roads.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="bg-[#f7f7f7] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-[#08142c] text-[28px] md:text-[42px] font-black uppercase tracking-tight">
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
            <h2 className="text-[#08142c] text-[28px] md:text-[42px] font-black uppercase tracking-tight">
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
              <h3 className="text-[#08142c] text-[20px] md:text-[26px] font-black uppercase tracking-tight">
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
          <div className="bg-white/40 min-h-[280px] md:min-h-[340px] flex items-center justify-center border border-[#eceef3]">
            <div className="text-center">
              <MapPin
                className="mx-auto text-[#aab2bf]"
                size={48}
                strokeWidth={1.8}
              />
              <p className="mt-5 text-[#8f98a6] text-[18px] md:text-[20px]">
                CVS Plaza, Lenana Road, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-[#06153a] py-20 md:py-24 text-center">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-white text-[30px] md:text-[54px] font-black uppercase tracking-tight leading-none">
            Looking To Partner With Us?
          </h2>

          <p className="mt-7 text-white/75 text-[16px] md:text-[20px] leading-[1.9] max-w-4xl mx-auto">
            We welcome partnerships with government agencies, NGOs, private
            sector organizations, and development partners committed to road
            safety and sustainable mobility.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@sumoafrica.org"
              className="bg-[#ff7a12] hover:bg-[#ef6d09] text-white px-10 py-5 min-w-[270px] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center justify-center transition"
            >
              Email Us Directly
            </a>

            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white hover:text-[#06153a] px-10 py-5 min-w-[300px] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center justify-center transition"
            >
              Connect On LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06153a] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid md:grid-cols-2 xl:grid-cols-4 gap-14">
          <div>
            <h3 className="text-[30px] md:text-[34px] font-black uppercase tracking-tight leading-none">
              SUMO AFRICA
            </h3>
            <p className="mt-3 text-[#ff7a12] text-xs md:text-[13px] font-bold uppercase tracking-[0.16em] leading-relaxed">
              Inclusive & Sustainable <br /> Mobility
            </p>

            <p className="mt-8 text-white/75 text-[16px] md:text-[17px] leading-[1.9] max-w-sm">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness, education,
              and research.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white">
                <Twitter size={18} />
              </div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white">
                <Linkedin size={18} />
              </div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white">
                <Facebook size={18} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase">
              Quick Links
            </h4>
            <div className="mt-7 space-y-4 text-white/75 text-[16px] md:text-[17px]">
              <Link href="/" className="block hover:text-[#ff7a12] transition">
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-[#ff7a12] transition"
              >
                About Us
              </Link>
              <Link
                href="/work"
                className="block hover:text-[#ff7a12] transition"
              >
                Our Work
              </Link>
              <Link
                href="/news"
                className="block hover:text-[#ff7a12] transition"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block hover:text-[#ff7a12] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase">
              Local Action Projects
            </h4>
            <div className="mt-7 space-y-4 text-white/75 text-[16px] md:text-[17px]">
              <Link
                href="/projects/drive-right"
                className="block hover:text-[#ff7a12] transition"
              >
                Drive Right
              </Link>
              <Link
                href="/projects/safe-steps-to-school"
                className="block hover:text-[#ff7a12] transition"
              >
                Safe Steps To School
              </Link>
            </div>

            <div className="mt-9 space-y-5 text-white/75 text-[15px] md:text-[16px] leading-[1.8]">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#ff7a12] mt-1 shrink-0" size={18} />
                <p>CVS Plaza, Lenana Road, 8281-00100, Nairobi, Kenya</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#ff7a12] mt-1 shrink-0" size={18} />
                <p>info@sumoafrica.org</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase">
              Stay Updated
            </h4>

            <p className="mt-7 text-white/75 text-[16px] md:text-[17px] leading-[1.9]">
              Subscribe to our newsletter for the latest updates on road safety
              and sustainable mobility.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/8 border border-white/10 px-5 py-4 text-white text-sm placeholder:text-white/35 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#ff7a12] hover:bg-[#ef6d09] text-white px-5 py-4 text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center justify-center gap-3 transition"
              >
                <Send size={16} />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/45 text-sm">
            <p>© 2026 SUMO Africa. All rights reserved.</p>
            <p>Founded August 2024 · Nairobi, Kenya</p>
          </div>
        </div>
      </footer>
    </main>
  );
}