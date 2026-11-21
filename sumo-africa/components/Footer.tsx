import Link from "next/link"
import { MapPin, Mail, ArrowRight } from "lucide-react"
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
]

const projects = [
  { label: "Drive Right", href: "/projects/drive-right" },
  { label: "Safe Steps to School", href: "/projects/safe-steps-to-school" },
]

const socials = [
  { label: "X (Twitter)", href: "#", icon: FaXTwitter, color: "#000000" },
  { label: "LinkedIn", href: "#", icon: FaLinkedin, color: "#0A66C2" },
  { label: "Facebook", href: "#", icon: FaFacebook, color: "#1877F2" },
]

/* One footer for every page. It is added once in app/layout.tsx. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#3eaef2] via-[#2a95dd] to-[#1a7cc4] text-white/90">
      {/* Soft rings and glow */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[28px] border-white/10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 animate-spin rounded-full border-2 border-dashed border-white/20" style={{ animationDuration: "50s" }} />
      <div aria-hidden className="pointer-events-none absolute left-1/3 top-0 h-40 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-6 px-5 py-8 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.3fr] md:gap-10 md:py-10">

        {/* Brand */}
        <div className="col-span-2 flex items-center justify-between gap-4 md:col-span-1 md:block">
          <div>
          <p className="text-lg font-extrabold tracking-wide text-white">SUMO AFRICA</p>
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[10px] sm:tracking-[0.2em]">
            Inclusive &amp; Sustainable Mobility
          </p>
          <p className="mt-3 hidden max-w-xs text-sm leading-6 text-white/85 md:block">
            A Nairobi based NGO advancing road safety and sustainable transport across Africa.
          </p>
          </div>
          <div className="flex shrink-0 gap-2 md:mt-4 md:gap-2.5">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white shadow ring-2 ring-white/40 transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: color }}
              >
                {/* White logo on its own brand color, like the real app icons */}
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white md:mb-3">Quick Links</h4>
          <ul className="space-y-1.5 text-sm md:space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#06132e]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="mb-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white md:mb-3">Projects</h4>
          <ul className="space-y-1.5 text-sm md:space-y-2">
            {projects.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#06132e]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 border-t border-white/20 pt-5 md:col-span-1 md:border-0 md:pt-0">
          <div className="mb-2.5 flex items-center justify-between gap-3 md:mb-3 md:block">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Get in Touch</h4>
            {/* Phones: Contact Us sits next to the heading */}
            <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#1a7cc4] md:hidden">
              Contact Us <ArrowRight size={12} />
            </Link>
          </div>
          <ul className="space-y-2 text-sm md:space-y-2.5">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-white" />
              <span>CVS Plaza, Lenana Road, Nairobi, Kenya</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-white" />
              <a href="mailto:info@sumoafrica.org" className="break-all transition-colors hover:text-[#06132e]">
                info@sumoafrica.org
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-4 hidden items-center gap-2 rounded-full bg-white px-4 py-2 md:inline-flex text-xs font-bold uppercase tracking-wide text-[#1a7cc4] shadow transition-colors hover:bg-sky-50"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/20 bg-[#0f62a3]/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-5 py-3 text-xs text-white/80 sm:flex-row sm:px-8 sm:py-4">
          <p>© {new Date().getFullYear()} SUMO Africa. All rights reserved.</p>
          <p className="hidden sm:block">Safe · Inclusive · Sustainable Mobility</p>
        </div>
      </div>
    </footer>
  )
}
