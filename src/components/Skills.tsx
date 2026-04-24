'use client'

import { motion } from 'framer-motion'

const groups = [
  {
    category: 'Product Management',
    skills: [
      'Product Strategy',
      'Roadmapping',
      'PRD Writing',
      'Stakeholder Management',
      'JIRA / Trello',
      '0 to 1 Launches',
    ],
  },
  {
    category: 'AI & LLM',
    skills: [
      'LLM Product Ownership',
      'AI Voice Bots (STT / TTS)',
      'Prompt Engineering',
      'Bot Evaluation & QA',
      'B2B SaaS Growth',
    ],
  },
  {
    category: 'Analytics & Data',
    skills: [
      'SQL',
      'Google Analytics 4',
      'CleverTap',
      'Firebase',
      'AdMob',
      'A/B Testing',
    ],
  },
  {
    category: 'Design & Prototyping',
    skills: [
      'Figma',
      'Balsamiq',
      'Miro',
      'Wireframing',
      'UI/UX Design',
      'Diagrams.net',
    ],
  },
  {
    category: 'Domain Expertise',
    skills: [
      'Fintech & KYC Flows',
      'PPI Cards',
      'Ad Monetization',
      'Media & Content Products',
      'Enterprise AI',
    ],
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
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <p
              className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              04 / Skills
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

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-14">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <p
                className="text-[#c9a96e] text-[9px] tracking-[0.4em] uppercase font-semibold mb-5 pb-3 border-b border-[#2a2520]"
                style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
              >
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[#6a6560] text-[12px] leading-snug hover:text-[#c0bdb8] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
