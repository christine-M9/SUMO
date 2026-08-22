import {
  MapPin,
  Mail,
  Send,
} from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

export default function JoinMovement() {
  return (
    <>
      {/* FOOTER */}
      <footer className="mt-24 bg-[#3eaef2] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6 py-16">

          {/* ABOUT */}
          <div>
            <h3 className="font-bold">SUMO AFRICA</h3>

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
            <h4 className="text-[#071521] font-semibold mb-4">
              QUICK LINKS
            </h4>

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
            <h4 className="text-[#071521] font-semibold mb-4">
              LOCAL ACTION PROJECTS
            </h4>

            <ul className="space-y-2 text-[#071521] text-sm mb-6">
              <li className="hover:text-white cursor-pointer">
                Drive Right
              </li>
              <li className="hover:text-white cursor-pointer">
                Safe Steps to School
              </li>
            </ul>

            {/* LOCATION */}
            <div className="flex gap-2 text-[#071521] text-sm mb-4">
              <MapPin
                size={16}
                className="text-[#071521] mt-1 shrink-0"
              />

              <p>
                CVS Plaza, Lenana Road <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex gap-2 text-[#071521] text-sm">
              <Mail
                size={16}
                className="text-[#071521] mt-1 shrink-0"
              />

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
    </>
  );
}