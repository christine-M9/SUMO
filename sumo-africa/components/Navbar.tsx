"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
];

const projects = [
  { label: "Drive Right", href: "/projects/drive-right" },
  { label: "Safe Steps to School", href: "/projects/safe-steps-to-school" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false); // desktop dropdown
  const [menuOpen, setMenuOpen] = useState(false); // phone menu
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  // The whole navbar, so clicks inside it do not close the projects panel
  const navRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const projectsActive = pathname.startsWith("/projects");

  // Close every menu after a link is clicked
  const closeAll = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
    setMobileProjectsOpen(false);
  };

  // Deepen the shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the projects panel when clicking outside the navbar
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setProjectsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Current page gets a soft white pill behind it
  const linkClass = (active: boolean) =>
    `rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#071630] transition-colors lg:px-5 lg:text-sm ${
      active ? "bg-white/35 shadow-inner" : "hover:bg-white/20"
    }`;

  return (
    <nav ref={navRef} className="fixed inset-x-0 top-0 z-50">
      {/* Full width bar, flush with the top of the screen */}
      <div
        className={`relative w-full bg-gradient-to-r from-[#3eaef2] via-[#38a8ee] to-[#2a95dd] transition-shadow duration-300 ${
          scrolled || menuOpen || projectsOpen ? "shadow-[0_6px_24px_rgba(15,23,42,0.20)]" : "shadow-sm"
        }`}
      >
        {/* Subtle background styling, kept in its own layer so it never covers the links */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Faint dot pattern, strongest at the edges */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage: "linear-gradient(to right, black, transparent 30%, transparent 70%, black)",
              WebkitMaskImage: "linear-gradient(to right, black, transparent 30%, transparent 70%, black)",
            }}
          />
          {/* Soft light glows */}
          <div className="absolute -left-10 -top-16 h-40 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 h-40 w-80 rounded-full bg-[#1a7cc4]/30 blur-3xl" />
          {/* Faint ring at the far right */}
          <div className="absolute -right-12 -top-14 h-36 w-36 rounded-full border-[18px] border-white/10" />
        </div>

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Link href="/" onClick={closeAll} aria-label="SUMO Africa home" className="flex shrink-0 items-center">
            <Image
              src="/images/sumoafricalogo.jpeg"
              alt="SUMO Africa"
              width={180}
              height={100}
              priority
              className="h-10 w-auto rounded-lg object-contain sm:h-11 lg:h-14"
            />
          </Link>

          {/* ===== Desktop links ===== */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeAll} className={linkClass(isActive(link.href))}>
                {link.label}
              </Link>
            ))}

            {/* Projects: clicking makes the navbar grow, and the two projects
                appear one under the other, lined up below this button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProjectsOpen((o) => !o)}
                aria-expanded={projectsOpen}
                aria-controls="projects-list"
                className={`flex items-center gap-1 ${linkClass(projectsActive || projectsOpen)}`}
              >
                Projects
                <ChevronDown size={15} className={`transition-transform duration-300 ${projectsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {projectsOpen && (
                  <motion.ul
                    id="projects-list"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="absolute left-0 top-[calc(100%+22px)] space-y-1"
                  >
                    {projects.map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={closeAll}
                          className={`block whitespace-nowrap rounded-full px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#071630] transition-colors hover:bg-white/25 ${
                            pathname === href ? "bg-white/30" : ""
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              onClick={closeAll}
              className={linkClass(isActive("/contact"))}
            >
              Contact Us
            </Link>
          </div>

          {/* ===== Phone menu button ===== */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#071630] transition-colors hover:bg-white/20 lg:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ===== Desktop: extra height so the navbar grows to fit the project list ===== */}
        <AnimatePresence initial={false}>
          {projectsOpen && (
            <motion.div
              key="projects-space"
              initial={{ height: 0 }}
              animate={{ height: 84 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="hidden lg:block"
            />
          )}
        </AnimatePresence>

        {/* ===== Phone menu panel ===== */}
        {menuOpen && (
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#071630]/10 px-4 pb-5 pt-2 lg:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="flex items-center justify-between border-b border-[#071630]/10 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#071630]"
              >
                {link.label}
                {isActive(link.href) && <span className="h-2 w-2 rounded-full bg-[#071630]" />}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setMobileProjectsOpen((o) => !o)}
              aria-expanded={mobileProjectsOpen}
              className="flex w-full items-center justify-between border-b border-[#071630]/10 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#071630]"
            >
              Projects
              <ChevronDown size={18} className={`transition-transform duration-300 ${mobileProjectsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileProjectsOpen && (
              <div className="border-b border-[#071630]/10 py-2 pl-3">
                {projects.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={closeAll}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#071630] ${
                      pathname === p.href ? "bg-white/30" : ""
                    }`}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/contact"
              onClick={closeAll}
              className="flex items-center justify-between py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#071630]"
            >
              Contact Us
              {isActive("/contact") && <span className="h-2 w-2 rounded-full bg-[#071630]" />}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}