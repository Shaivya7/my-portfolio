'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const proficiencies = [
  { label: 'Product Strategy & Roadmapping', level: 92, domain: 'Core PM' },
  { label: 'Stakeholder Management', level: 88, domain: 'Core PM' },
  { label: 'AI / LLM Product Ownership', level: 85, domain: 'AI' },
  { label: 'Fintech & KYC Flows', level: 90, domain: 'Domain' },
  { label: 'Data Analytics & A/B Testing', level: 80, domain: 'Analytics' },
  { label: 'Figma & Prototyping', level: 78, domain: 'Design' },
]

const groups = [
  {
    category: 'Product Management',
    icon: '📋',
    skills: ['Product Strategy', 'Roadmapping', 'PRDs', 'JIRA', 'Trello', 'Stakeholder Management'],
  },
  {
    category: 'Design & Prototyping',
    icon: '🎨',
    skills: ['Figma', 'Balsamiq', 'Miro', 'Diagrams.net', 'Wireframing', 'UI/UX Design'],
  },
  {
    category: 'Analytics & Data',
    icon: '📊',
    skills: ['SQL', 'Google Analytics 4', 'Clevertap', 'Firebase', 'AdMob', 'A/B Testing'],
  },
  {
    category: 'Domain Expertise',
    icon: '⚡',
    skills: ['Fintech · PPI · KYC', 'AI Voice Bots (STT/TTS)', 'Ad Monetization', 'B2B SaaS Growth', '0→1 Launches'],
  },
]

function ProficiencyBar({ label, level, domain, delay }: { label: string; level: number; domain: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div>
          <span
            className="text-[#f0ede8] text-[13px] font-semibold"
            style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
          >
            {label}
          </span>
          <span
            className="ml-2 text-[#c9a96e] text-[9px] tracking-[0.2em] uppercase border border-[#c9a96e]/25 px-1.5 py-0.5"
            style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
          >
            {domain}
          </span>
        </div>
        <span
          className="text-[#4a4540] text-[11px] font-bold"
          style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#1a1816] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#c9a96e] to-[#e8c98a] rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <p
              className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              04 — Skills
            </p>
          </div>
          <h2
            className="text-[#f0ede8] font-black leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            The craft.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Proficiency bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#4a4540] text-[9px] tracking-[0.38em] uppercase mb-8 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Core Proficiencies
            </p>
            {proficiencies.map((p, i) => (
              <ProficiencyBar key={p.label} {...p} delay={i * 0.1} />
            ))}
          </motion.div>

          {/* Skill pills grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p
              className="text-[#4a4540] text-[9px] tracking-[0.38em] uppercase mb-8 font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              Tool Belt
            </p>
            <div className="space-y-6">
              {groups.map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm">{group.icon}</span>
                    <p
                      className="text-[#c9a96e] text-[9px] tracking-[0.38em] uppercase font-semibold"
                      style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                    >
                      {group.category}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[#7a7268] text-[11px] border border-[#2a2520] px-3 py-1.5 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-default"
                        style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
