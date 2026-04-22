'use client'

import { motion } from 'framer-motion'

const groups = [
  {
    category: 'Product Management',
    skills: ['Product Strategy', 'Roadmapping', 'PRDs', 'JIRA', 'Trello', 'Stakeholder Management'],
  },
  {
    category: 'Design & Prototyping',
    skills: ['Figma', 'Balsamiq', 'Miro', 'Diagrams.net', 'Wireframing', 'UI/UX Design'],
  },
  {
    category: 'Analytics & Data',
    skills: ['SQL', 'Google Analytics 4', 'Clevertap', 'Firebase', 'AdMob', 'A/B Testing'],
  },
  {
    category: 'Domain Expertise',
    skills: ['Fintech · PPI · KYC', 'AI Voice Bots (STT/TTS)', 'Ad Monetization', 'B2B SaaS Growth', '0→1 Launches'],
  },
]

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
          <p
            className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
          >
            04 — Skills
          </p>
          <h2
            className="text-[#f0ede8] font-normal leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            The craft.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 border-t border-l border-[#2a2520]">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="border-r border-b border-[#2a2520] p-8 lg:p-10"
            >
              <p
                className="text-[#c9a96e] text-[9px] tracking-[0.38em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[#7a7268] text-[11px] border border-[#2a2520] px-3 py-1.5 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-default"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
