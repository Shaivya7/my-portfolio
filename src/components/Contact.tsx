'use client'

import { motion } from 'framer-motion'

const contactLinks = [
  { label: 'Send An Email', href: 'mailto:shaivya7.7bora@gmail.com', primary: true },
  { label: 'Connect on LinkedIn →', href: 'https://www.linkedin.com/in/shaivya7', primary: false },
]

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-8 lg:px-20 relative overflow-hidden bg-[#0a0908]">
      {/* Background grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#c9a96e]/[0.06] blur-[140px]" />

      {/* Corner accent marks */}
      <div className="pointer-events-none absolute top-8 left-8 w-8 h-8 border-t border-l border-[#c9a96e]/20" />
      <div className="pointer-events-none absolute top-8 right-8 w-8 h-8 border-t border-r border-[#c9a96e]/20" />
      <div className="pointer-events-none absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#c9a96e]/20" />
      <div className="pointer-events-none absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#c9a96e]/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <p
              className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              06 / Contact
            </p>
            <div className="h-px w-8 bg-[#c9a96e]" />
          </div>

          <h2
            className="text-[#f0ede8] font-black leading-[0.95] mb-8"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
              fontSize: 'clamp(56px, 9vw, 104px)',
            }}
          >
            Let&apos;s talk.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-px w-12 bg-[#c9a96e] mx-auto mb-12 origin-center"
          />

          <p
            className="text-[#7a7268] leading-[1.85] max-w-sm mx-auto mb-14"
            style={{
              fontFamily: 'var(--font-dm-var), Arial, sans-serif',
              fontSize: '14px',
            }}
          >
            Open to senior PM roles, advisory conversations, and interesting
            problems across AI, fintech, and 0-to-1 building.
          </p>

          {/* Stat chips above CTA */}
          <div className="flex items-center justify-center gap-4 mb-14 flex-wrap">
            {['$1M+ ARR Built', '1.5M+ Leads Managed', '100K+ Daily AI Calls'].map((stat) => (
              <span
                key={stat}
                className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase border border-[#c9a96e]/25 px-4 py-2 bg-[#c9a96e]/[0.04] font-semibold"
                style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
              >
                {stat}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:shaivya7.7bora@gmail.com"
              className="bg-[#c9a96e] text-[#0a0908] text-[10px] font-bold tracking-[0.28em] uppercase px-8 py-4 hover:bg-[#e8c98a] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Send An Email
            </a>
            <a
              href="tel:+918107667477"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-all duration-300 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              +91 81076 67477
            </a>
            <a
              href="https://www.linkedin.com/in/shaivya7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] transition-all duration-300 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Connect on LinkedIn →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="mt-32 pt-8 border-t border-[#2a2520] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto relative z-10">
        <span
          className="text-[#4a4540] text-[13px] font-bold"
          style={{ fontFamily: 'var(--font-playfair-var), Arial, sans-serif' }}
        >
          Shaivya Bora
        </span>
        <span
          className="text-[#4a4540] text-[9px] tracking-[0.25em] uppercase"
          style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
        >
          © 2026 · Noida, India
        </span>
      </div>
    </section>
  )
}
