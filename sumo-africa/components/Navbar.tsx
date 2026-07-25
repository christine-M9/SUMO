"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [projectsOpen, setProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;

  const isProjectsActive =
    pathname.startsWith("/projects");

  // Close dropdown when clicking outside
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
    <nav className="w-full bg-[#071521] shadow-sm fixed top-0 z-50 border-b border-[#071521]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
        
        {/* Logo */}
        <div>
          <h1 className="font-extrabold text-[32px] leading-none tracking-tight text-[#3eaef2]">
            SUMO AFRICA
          </h1>
          <p className="text-[13px] font-semibold text-[#3eaef2] tracking-[0.18em] mt-2">
            INCLUSIVE & SUSTAINABLE MOBILITY
          </p>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-10 text-[15px] font-bold text-[#3eaef2]">
          
          <Link
            href="/"
            className={`hover:text-[#3eaef2] ${
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
            href="/work"
            className={`hover:text-orange-500 ${
              isActive("/work") ? "text-orange-500" : ""
            }`}
          >
            OUR WORK
          </Link>

          <Link
            href="/news"
            className={`hover:text-orange-500 ${
              isActive("/news") ? "text-orange-500" : ""
            }`}
          >
            NEWS
          </Link>

          {/* PROJECTS DROPDOWN (CLICK ONLY) */}
          <div className="relative" ref={dropdownRef}>
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
      </div>
    </nav>
  );
}