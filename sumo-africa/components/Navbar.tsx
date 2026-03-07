import Link from "next/link"

export default function Navbar() {
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

          <Link href="/" className="text-orange-500">
            HOME
          </Link>

          <Link href="/about">
            ABOUT
          </Link>

          <Link href="/work">
            OUR WORK
          </Link>

          <Link href="/news">
            NEWS
          </Link>

          <Link href="/projects">
            PROJECTS
          </Link>

          <Link
            href="/contact"
            className="bg-[#0c1b2a] text-white px-5 py-3 rounded-sm"
          >
            CONTACT US
          </Link>

        </div>

      </div>

    </nav>
  )
}