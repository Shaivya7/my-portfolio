'use client'

import { motion } from 'framer-motion'

const timeline = [
  { year: '2025', role: 'PM – AI Agents', company: 'SquadStack', current: true },
  { year: '2022', role: 'Product Manager II', company: 'LEO1 by Financepeer', current: false },
  { year: '2022', role: 'Associate PM', company: 'Sportskeeda', current: false },
  { year: '2021', role: 'Partnerships Manager', company: 'GreedyGame', current: false },
]

const highlights = [
  { value: '$1M+', label: 'ARR Built' },
  { value: '1.5M+', label: 'Leads Managed' },
  { value: '4+', label: 'Industries' },
  { value: '4.5+', label: 'Years' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-8 lg:px-20 bg-[#070706] relative overflow-hidden">
      {/* Background geometric accent */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(45deg, #c9a96e 1px, transparent 1px), linear-gradient(-45deg, #c9a96e 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-28 items-start relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <p
              className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              01 — About
            </p>
          </div>
          <h2
            className="text-[#f0ede8] font-black leading-[1.1] mb-10"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            Full-stack PM with<br />an entrepreneurial<br />mindset.
          </h2>

          <div
            className="space-y-5 text-[#7a7268] leading-[1.9] mb-10"
            style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif', fontSize: '14px' }}
          >
            <p>
              I&apos;ve spent 4.5+ years building and scaling products across Fintech, Media,
              AI and B2B SaaS — from 0-to-1 launches to managing growth at Series-B startups.
            </p>
            <p>
              Built a $1M+ ARR revenue stream from scratch for one of India&apos;s largest Credit Card
              Issuers, and scaled 1.5M+ leads through an AI-driven calling engine at SquadStack.
            </p>
            <p>
              I took a deliberate career break — worked on my health, built AI side projects
              from scratch, started a food business, and traveled solo for a month. I returned
              sharper, more intentional, and ready to build what matters.
            </p>
          </div>

          {/* Mini stat highlights */}
          <div className="grid grid-cols-4 gap-3 mb-10">
            {highlights.map((h) => (
              <div key={h.label} className="border border-[#2a2520] p-3 text-center hover:border-[#c9a96e]/30 transition-colors duration-300">
                <div
                  className="text-[#c9a96e] font-black leading-none mb-1"
                  style={{ fontFamily: 'var(--font-playfair-var), Arial, sans-serif', fontSize: '22px' }}
                >
                  {h.value}
                </div>
                <div
                  className="text-[#4a4540] text-[9px] tracking-wide uppercase"
                  style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                >
                  {h.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/shaivya-bora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-all duration-300 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              LinkedIn →
            </a>
            <a
              href="mailto:shaivya7.7bora@gmail.com"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-all duration-300 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
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
            className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase mb-8 font-semibold"
            style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
          >
            Career Path
          </p>

          {/* Visual timeline */}
          <div className="relative pl-6">
            {/* Connecting line */}
            <div className="absolute left-2 top-3 bottom-3 w-px bg-gradient-to-b from-[#c9a96e] via-[#c9a96e]/40 to-[#2a2520]" />

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className={`flex gap-6 py-6 ${i < timeline.length - 1 ? 'border-b border-[#2a2520]' : ''} group relative`}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[18px] top-1/2 -translate-y-1/2">
                    {item.current ? (
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-[#c9a96e] border-2 border-[#070706]" />
                        <motion.div
                          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-[#c9a96e]"
                        />
                      </div>
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-[#4a4540] bg-[#070706] group-hover:border-[#c9a96e]/60 transition-colors duration-300" />
                    )}
                  </div>

                  <span
                    className="text-[#7a7268] text-[11px] tracking-wide w-14 shrink-0 pt-0.5 font-bold"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-[#f0ede8] text-[13px] font-semibold"
                        style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                      >
                        {item.role}
                      </span>
                      {item.current && (
                        <span
                          className="text-[8px] tracking-[0.22em] uppercase text-[#c9a96e] border border-[#c9a96e]/40 px-2 py-0.5 font-bold bg-[#c9a96e]/5"
                          style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                        >
                          Now
                        </span>
                      )}
                    </div>
                    <span
                      className="text-[#c0bdb8] text-[13px] font-medium"
                      style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                    >
                      {item.company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-10 pt-8 border-t border-[#2a2520]">
            <p
              className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase mb-4 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Education
            </p>
            <div className="flex items-start gap-3">
              <div className="w-1 h-10 bg-[#2a2520] rounded-full shrink-0 mt-0.5" />
              <p
                className="text-[#c0bdb8] text-[13px] leading-[1.7] font-medium"
                style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
              >
                B.Tech Mechanical Engineering<br />
                <span className="text-[#9a9490] text-[12px]">LNM Institute of Information Technology, Jaipur · 2021</span>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
