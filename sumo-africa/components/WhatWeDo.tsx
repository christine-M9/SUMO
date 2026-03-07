import { Shield, Users, BarChart3, BookOpen, Globe, Handshake } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-8">

        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-xs tracking-widest font-semibold mb-3">
            WHAT WE DO
          </p>

          <h2 className="text-3xl font-bold text-[#0c1b2a]">
            Our Focus Areas
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#f7f7f7] p-8 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3">Road Safety Advocacy</h3>
            <p className="text-gray-600 text-sm">
              Promoting safer roads through policy advocacy and public awareness campaigns.
            </p>
          </div>

          <div className="bg-[#f7f7f7] p-8 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3">Sustainable Transport</h3>
            <p className="text-gray-600 text-sm">
              Promoting sustainable transport systems that reduce environmental impact.
            </p>
          </div>

          <div className="bg-[#f7f7f7] p-8 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3">Research & Data</h3>
            <p className="text-gray-600 text-sm">
              Supporting evidence-based mobility solutions through research and analysis.
            </p>
          </div>

          <div className="bg-[#f7f7f7] p-8 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3">Community Engagement</h3>
            <p className="text-gray-600 text-sm">
              Working with communities to improve road safety awareness.
            </p>
          </div>

          <div className="bg-[#f7f7f7] p-8 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3">Education & Training</h3>
            <p className="text-gray-600 text-sm">
              Providing education and training programs on mobility safety.
            </p>
          </div>

          <div className="bg-[#f7f7f7] p-8 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-3">Partnership Development</h3>
            <p className="text-gray-600 text-sm">
              Collaborating with stakeholders to improve mobility solutions.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}