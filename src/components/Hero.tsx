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
  { value: '100K+', label: 'Daily AI calling minutes', note: 'SquadStack', icon: '🤖' },
  { value: '1.5M+', label: 'Leads managed via AI', note: 'SquadStack', icon: '📊' },
  { value: '$1M+', label: 'ARR built from scratch', note: 'Credit card issuer', icon: '💳' },
  { value: '100K+', label: 'Users scaled from zero', note: 'LEO1 Card', icon: '🚀' },
  { value: '4.5+', label: 'Years of experience', note: 'Across 4 industries', icon: '⚡' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden px-8 lg:px-20"
    >
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,169,110,0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient gold glows */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full bg-[#c9a96e]/[0.06] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#c9a96e]/[0.04] blur-[120px]" />

      {/* Vertical editorial label */}
      <div className="hidden xl:block absolute left-5 top-1/2 -translate-y-1/2">
        <span
          className="text-[#2a2520] text-[9px] tracking-[0.55em] uppercase whitespace-nowrap"
          style={{
            fontFamily: 'var(--font-dm-var), Arial, sans-serif',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          Noida · India · Open to Opportunities
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
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <span
              className="text-[#c9a96e] text-[11px] tracking-[0.4em] uppercase font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Product Manager
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="leading-[0.9] font-black text-[#f0ede8] tracking-tight"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
              fontSize: 'clamp(68px, 10vw, 112px)',
            }}
          >
            Shaivya
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="leading-[0.9] font-black text-[#f0ede8] tracking-tight mb-3"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
              fontSize: 'clamp(68px, 10vw, 112px)',
            }}
          >
            Bora.
          </motion.h1>

          {/* Gold accent bar under name */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-0 mb-9"
          >
            <div className="h-1 w-16 bg-[#c9a96e]" />
            <div className="h-1 w-8 bg-[#c9a96e]/40" />
            <div className="h-1 w-4 bg-[#c9a96e]/15" />
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-9">
            {['Fintech', 'AI', 'Media', 'B2B SaaS'].map((tag) => (
              <span
                key={tag}
                className="text-[#4a4540] text-[9px] tracking-[0.3em] uppercase border border-[#2a2520] px-2.5 py-1"
                style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[#7a7268] leading-[1.85] max-w-[460px] mb-12"
            style={{
              fontFamily: 'var(--font-dm-var), Arial, sans-serif',
              fontSize: '15px',
            }}
          >
            Building enterprise AI voice bots at SquadStack. 100K+ daily calling minutes, 1.5M+ leads in pipeline.
            Previously built a $1M+ ARR revenue stream from scratch at one of India&apos;s largest Credit Card Issuers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-8">
            <a
              href="#work"
              className="bg-[#c9a96e] text-[#0a0908] text-[10px] font-bold tracking-[0.28em] uppercase px-7 py-3.5 hover:bg-[#e8c98a] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-[#c9a96e] text-[10px] tracking-[0.22em] uppercase border-b border-[#c9a96e]/40 pb-px hover:border-[#c9a96e] hover:text-[#e8c98a] transition-all duration-300"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Get In Touch →
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
          <p
            className="text-[#4a4540] text-[9px] tracking-[0.38em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
          >
            Impact by numbers
          </p>
          <div className="border border-[#2a2520] divide-y divide-[#2a2520]">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
                className="px-6 py-5 group hover:bg-[#111010] transition-colors duration-300 flex items-center gap-4"
              >
                <span className="text-xl shrink-0">{s.icon}</span>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[#c9a96e] leading-none mb-1 font-black"
                    style={{
                      fontFamily: 'var(--font-cormorant-var), Arial, sans-serif',
                      fontSize: '38px',
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[#f0ede8] text-[11px] font-medium mb-0.5"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="text-[#4a4540] text-[10px]"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {s.note}
                  </div>
                </div>
                <div className="w-1 h-8 bg-[#c9a96e]/20 group-hover:bg-[#c9a96e]/50 transition-colors duration-300 rounded-full shrink-0" />
              </motion.div>
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
          style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
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
