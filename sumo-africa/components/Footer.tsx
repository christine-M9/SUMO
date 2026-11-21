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
    <footer className="relative overflow-hidden border-t-4 border-[#3eaef2] bg-[#06132e] text-slate-300">
      {/* Soft glow */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#3eaef2]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.3fr] md:gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-lg font-extrabold tracking-wide text-white">SUMO AFRICA</p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3eaef2]">
            Inclusive &amp; Sustainable Mobility
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            A Nairobi based NGO advancing road safety and sustainable transport across Africa.
          </p>
          <div className="mt-4 flex gap-2.5">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white shadow ring-1 ring-white/20 transition-transform duration-300 hover:scale-110"
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
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#3eaef2]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white">Projects</h4>
          <ul className="space-y-2 text-sm">
            {projects.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-[#3eaef2]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#3eaef2]" />
              <span>CVS Plaza, Lenana Road, Nairobi, Kenya</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-[#3eaef2]" />
              <a href="mailto:info@sumoafrica.org" className="break-all transition-colors hover:text-[#3eaef2]">
                info@sumoafrica.org
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3eaef2] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#2a95dd]"
          >
            Contact Us
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} SUMO Africa. All rights reserved.</p>
          <p>Safe · Inclusive · Sustainable Mobility</p>
        </div>
      </div>
    </footer>
  )
}
