"use client"; // ✅ Client component since we use a hook

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">

        {/* Logo */}
        <div>
          <h1 className="font-bold text-lg tracking-wide">
            SUMO AFRICA
          </h1>
          <p className="text-[11px] text-orange-500 tracking-widest">
            INCLUSIVE & SUSTAINABLE MOBILITY
          </p>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm font-semibold">
          <Link
            href="/"
            className={isActive("/") ? "text-orange-500" : ""}
          >
            HOME
          </Link>

          <Link
            href="/about"
            className={isActive("/about") ? "text-orange-500" : ""}
          >
            ABOUT
          </Link>

          <Link
            href="/work"
            className={isActive("/work") ? "text-orange-500" : ""}
          >
            OUR WORK
          </Link>

          <Link
            href="/news"
            className={isActive("/news") ? "text-orange-500" : ""}
          >
            NEWS
          </Link>

          <Link
            href="/projects"
            className={isActive("/projects") ? "text-orange-500" : ""}
          >
            PROJECTS
          </Link>

          <Link
            href="/contact"
            className={`px-5 py-3 rounded-sm ${
              isActive("/contact") ? "bg-orange-500 text-white" : "bg-[#0c1b2a] text-white"
            }`}
          >
            CONTACT US
          </Link>
        </div>

      </div>
    </nav>
  );
}