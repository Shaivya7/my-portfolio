'use client'

import { motion } from 'framer-motion'

const timeline = [
  { year: '2025', role: 'PM – AI Agents', company: 'SquadStack', current: true },
  { year: '2022', role: 'Product Manager II', company: 'LEO1 by Financepeer', current: false },
  { year: '2022', role: 'Associate PM', company: 'Sportskeeda', current: false },
  { year: '2021', role: 'Partnerships Manager', company: 'GreedyGame', current: false },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-8 lg:px-20 bg-[#070706]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <p
            className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase mb-7"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
          >
            01 — About
          </p>
          <h2
            className="text-[#f0ede8] font-normal leading-[1.05] mb-10"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            Full-stack PM with<br />an entrepreneurial<br />mindset.
          </h2>

          <div
            className="space-y-5 text-[#7a7268] leading-[1.9] mb-12"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif', fontSize: '14px' }}
          >
            <p>
              I&apos;ve spent 4.5+ years building and scaling products across Fintech, Media,
              AI and B2B SaaS — from 0-to-1 launches to managing growth at Series-B startups.
            </p>
            <p>
              I took a deliberate career break — worked on my health, built AI side projects
              from scratch, started a food business, and traveled solo for a month. I returned
              sharper, more intentional, and ready to build what matters.
            </p>
            <p>
              Currently leading enterprise AI voice bots at SquadStack — spanning the full
              lifecycle from architecture and prompt engineering to deployment and conversion.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-all duration-300"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              LinkedIn →
            </a>
            <a
              href="mailto:shaivya7.7bora@gmail.com"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-all duration-300"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              Email →
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="lg:pt-16"
        >
          <p
            className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase mb-8"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
          >
            Career
          </p>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`flex gap-6 py-6 ${i < timeline.length - 1 ? 'border-b border-[#2a2520]' : ''} group`}
              >
                <span
                  className="text-[#3a3530] text-[11px] tracking-wide w-14 shrink-0 pt-0.5"
                  style={{ fontFamily: 'var(--font-cormorant-var), Georgia, serif' }}
                >
                  {item.year}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-[#f0ede8] text-[13px]"
                      style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                    >
                      {item.role}
                    </span>
                    {item.current && (
                      <span
                        className="text-[8px] tracking-[0.22em] uppercase text-[#c9a96e] border border-[#c9a96e]/30 px-2 py-0.5"
                        style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                      >
                        Now
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[#4a4540] text-[12px]"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    {item.company}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10 pt-8 border-t border-[#2a2520]">
            <p
              className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              Education
            </p>
            <p
              className="text-[#5a5550] text-[13px] leading-[1.7]"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              B.Tech Mechanical Engineering<br />
              <span className="text-[#3a3530] text-[11px]">LNM Institute of Information Technology, Jaipur · 2021</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
