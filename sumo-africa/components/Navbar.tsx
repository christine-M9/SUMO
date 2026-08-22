"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  // Desktop projects dropdown
  const [projectsOpen, setProjectsOpen] = useState(false);

  // Mobile hamburger menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile projects dropdown
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  const isProjectsActive = pathname.startsWith("/projects");

  // Close DESKTOP dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProjectsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-[#3eaef2] shadow-sm fixed top-0 z-50 border-b border-[#071521]">

      <div
        className={`${styles.navbarContainer} max-w-7xl mx-auto flex justify-between items-center px-10 py-5`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/sumoafricalogo.jpeg"
            alt="SUMO Africa Logo"
            width={180}
            height={100}
            className={`${styles.navbarLogoImage} object-contain`}
            priority
          />

          <div className={styles.navbarBrand}>
            <h1 className="font-extrabold text-[32px] leading-none tracking-tight text-[#071521]">
              SUMO AFRICA
            </h1>

            <p className="mt-2 text-[13px] font-semibold tracking-[0.18em] text-[#071521]">
              INCLUSIVE & SUSTAINABLE MOBILITY
            </p>

            <p className={styles.mobileBrand}>
              SIAM
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div
          className={`${styles.desktopNav} items-center gap-10 text-[15px] font-bold text-[#071521]`}
        >
          <Link
            href="/"
            className={`hover:text-[#071521] ${
              isActive("/") ? "text-orange-500" : ""
            }`}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={`hover:text-orange-500 ${
              isActive("/about") ? "text-orange-500" : ""
            }`}
          >
            ABOUT
          </Link>

          <Link
            href="/news"
            className={`hover:text-orange-500 ${
              isActive("/news") ? "text-orange-500" : ""
            }`}
          >
            NEWS
          </Link>

          {/* DESKTOP PROJECTS DROPDOWN */}
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() => setProjectsOpen(!projectsOpen)}
              className={`flex items-center gap-1 hover:text-orange-500 ${
                isProjectsActive ? "text-orange-500" : ""
              }`}
            >
              PROJECTS

              {projectsOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>

            {projectsOpen && (
              <div className="absolute top-full left-0 mt-4 w-[205px] bg-white shadow-lg border border-gray-200 z-50">

                <Link
                  href="/projects/drive-right"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-6 py-5 text-[11px] font-semibold uppercase tracking-wide hover:text-orange-500"
                >
                  DRIVE RIGHT
                </Link>

                <Link
                  href="/projects/safe-steps-to-school"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-6 py-5 text-[11px] font-semibold uppercase tracking-wide hover:text-orange-500"
                >
                  SAFE STEPS TO SCHOOL
                </Link>

              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-[#3eaef2] text-white px-8 py-2 font-bold hover:bg-[#3eaef2] transition"
          >
            CONTACT US
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);

            // Close projects when hamburger closes
            if (mobileMenuOpen) {
              setMobileProjectsOpen(false);
            }
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={
              isActive("/")
                ? styles.activeMobileLink
                : ""
            }
          >
            HOME
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={
              isActive("/about")
                ? styles.activeMobileLink
                : ""
            }
          >
            ABOUT
          </Link>

          <Link
            href="/news"
            onClick={() => setMobileMenuOpen(false)}
            className={
              isActive("/news")
                ? styles.activeMobileLink
                : ""
            }
          >
            NEWS
          </Link>

          {/* MOBILE PROJECTS DROPDOWN */}
          <div className={styles.mobileProjects}>

            <button
              onClick={() =>
                setMobileProjectsOpen(!mobileProjectsOpen)
              }
              className={
                isProjectsActive
                  ? styles.activeMobileLink
                  : ""
              }
            >
              PROJECTS

              {mobileProjectsOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {mobileProjectsOpen && (
              <div className={styles.mobileProjectsDropdown}>

                <Link
                  href="/projects/drive-right"
                  onClick={() => {
                    setMobileProjectsOpen(false);
                    setMobileMenuOpen(false);
                  }}
                  className={
                    pathname === "/projects/drive-right"
                      ? styles.activeMobileLink
                      : ""
                  }
                >
                  DRIVE RIGHT
                </Link>

                <Link
                  href="/projects/safe-steps-to-school"
                  onClick={() => {
                    setMobileProjectsOpen(false);
                    setMobileMenuOpen(false);
                  }}
                  className={
                    pathname === "/projects/safe-steps-to-school"
                      ? styles.activeMobileLink
                      : ""
                  }
                >
                  SAFE STEPS TO SCHOOL
                </Link>

              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={
              isActive("/contact")
                ? styles.activeMobileLink
                : ""
            }
          >
            CONTACT US
          </Link>

        </div>
      )}
    </nav>
  );
}