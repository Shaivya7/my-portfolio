'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } },
}

const stats = [
  { value: '75K+', label: 'Daily AI calling minutes', note: 'at SquadStack' },
  { value: '100K+', label: 'Users scaled from zero', note: 'LEO1 Card' },
  { value: '₹15Cr+', label: 'ARR delivered', note: 'via Min-KYC integration' },
  { value: '4.5+', label: 'Years of experience', note: 'across 4 industries' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-8 lg:px-20"
    >
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full bg-[#c9a96e]/[0.05] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a96e]/[0.03] blur-[120px]" />

      {/* Vertical editorial label */}
      <div className="hidden xl:block absolute left-5 top-1/2 -translate-y-1/2">
        <span
          className="text-[#2a2520] text-[9px] tracking-[0.55em] uppercase whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-dm-var), system-ui, sans-serif',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          Noida · India · Open to opportunities
        </span>
      </div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 pt-24 pb-16">
        {/* Left: content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#c9a96e] text-[10px] tracking-[0.48em] uppercase mb-10"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
          >
            Product Manager
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="leading-[0.88] font-normal text-[#f0ede8] tracking-[-0.01em]"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(68px, 10vw, 112px)',
            }}
          >
            Shaivya
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="leading-[0.88] font-normal text-[#f0ede8] tracking-[-0.01em] mb-10"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(68px, 10vw, 112px)',
            }}
          >
            Bora.
          </motion.h1>

          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-[#c9a96e]" />
            <span
              className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              Fintech · AI · Media · B2B SaaS
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[#7a7268] leading-[1.85] max-w-[440px] mb-12"
            style={{
              fontFamily: 'var(--font-dm-var), system-ui, sans-serif',
              fontSize: '15px',
            }}
          >
            Building enterprise AI voice bots at SquadStack — 75K+ daily calling minutes.
            Previously scaled LEO1 Card from zero to 100K+ users at a Series-B fintech.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-8">
            <a
              href="#work"
              className="bg-[#c9a96e] text-[#0a0908] text-[10px] font-semibold tracking-[0.28em] uppercase px-7 py-3.5 hover:bg-[#e8c98a] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] hover:text-[#e8c98a] transition-all duration-300"
              style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right: stats panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:flex flex-col justify-center"
        >
          <div className="border border-[#2a2520] divide-y divide-[#2a2520]">
            {stats.map((s) => (
              <div key={s.value} className="p-7 group hover:bg-[#111010] transition-colors duration-400">
                <div
                  className="text-[#c9a96e] leading-none mb-2 font-light"
                  style={{
                    fontFamily: 'var(--font-cormorant-var), Georgia, serif',
                    fontSize: '52px',
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[#f0ede8] text-[12px] mb-0.5"
                  style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                >
                  {s.label}
                </div>
                <div
                  className="text-[#4a4540] text-[10px]"
                  style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                >
                  {s.note}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[#2a2520] text-[8px] tracking-[0.45em] uppercase"
          style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.8, 1.3, 0.8], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#c9a96e]/50 to-transparent origin-top"
        />
      </motion.div>
    </section>
  )
}
