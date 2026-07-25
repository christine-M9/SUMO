import { MapPin, Mail, Send, Twitter, Linkedin, Facebook } from "lucide-react"

export default function JoinMovement() {
  return (
    <section className="bg-[#071a2f] text-white pt-24">

      {/* JOIN MOVEMENT */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="text-[#4DA8DA] tracking-widest text-sm font-semibold">
          STAY CONNECTED
        </p>

        <h2 className="text-5xl font-extrabold mt-2 mb-4">
          JOIN OUR MOVEMENT
        </h2>

      </div>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6 py-16">

          {/* ABOUT */}
          <div>
            <h3 className="font-bold text-white">SUMO AFRICA</h3>

            <p className="text-[#3eaef2] text-xs mt-1">
              INCLUSIVE & SUSTAINABLE MOBILITY
            </p>

            <p className="text-[#3eaef2] text-sm mt-4 leading-relaxed">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness,
              education, and research.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">
              <Twitter size={18} className="text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin size={18} className="text-gray-400 hover:text-white cursor-pointer" />
              <Facebook size={18} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">QUICK LINKS</h4>

            <ul className="space-y-2 text-[#3eaef2] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Work</li>
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* PROJECTS + CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-4">LOCAL ACTION PROJECTS</h4>

            <ul className="space-y-2 text-[#3eaef2] text-sm mb-6">
              <li className="hover:text-white cursor-pointer">Drive Right</li>
              <li className="hover:text-white cursor-pointer">Safe Steps to School</li>
            </ul>

            {/* LOCATION */}
            <div className="flex gap-2 text-[#3eaef2] text-sm mb-2">
              <MapPin size={16} className="text-[#4DA8DA] mt-1" />
              <p>
                CVS Plaza, Lenana Road <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex gap-2 text-[#3eaef2] text-sm">
              <Mail size={16} className="text-[#4DA8DA] mt-1" />
              <p>info@sumoafrica.org</p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-white font-semibold mb-4">STAY UPDATED</h4>

            <p className="text-[#3eaef2] text-sm mb-4">
              Subscribe to our newsletter for the latest updates
              on road safety and sustainable mobility.
            </p>

            <div className="flex flex-col gap-2">
              <input
                placeholder="Enter your email"
                className="px-4 py-3 text-[#4DA8DA] outline-none"
              />

              <button className="bg-[#4DA8DA] py-3 font-semibold hover:bg-[#3a8bc9] transition flex items-center justify-center gap-2">
                <Send size={16} />
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-sm pb-6 border-t border-white/10 pt-6">
          © 2026 SUMO Africa. All rights reserved.
        </div>
      </footer>
    </section>
  )
}