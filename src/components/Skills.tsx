'use client'

import { motion } from 'framer-motion'

const groups = [
  {
    category: 'Product Management',
    icon: '◈',
    skills: [
      'Product Strategy',
      'Roadmapping',
      'PRD Writing',
      'Stakeholder Management',
      'JIRA / Trello',
      '0 to 1 Launches',
      'User Research',
    ],
  },
  {
    category: 'AI & Building',
    icon: '◎',
    skills: [
      'AI',
      'LLM Product Ownership',
      'Prompt Engineering',
      'Claude Code',
      'Vibe Coding',
      'AI Voice Bots (STT / TTS)',
      'Bot Evaluation & QA',
    ],
  },
  {
    category: 'Analytics & Data',
    icon: '◉',
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
    icon: '◇',
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
    icon: '◆',
    skills: [
      'Fintech & KYC Flows',
      'PPI Cards',
      'Enterprise AI',
      'Ad Monetization',
      'Media & Content',
      'B2B SaaS Growth',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              className="border border-[#2a2520] p-6 hover:border-[#c9a96e]/30 transition-colors duration-500 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[#2a2520] group-hover:border-[#c9a96e]/20 transition-colors duration-500">
                <span
                  className="text-[#c9a96e]/60 text-[11px]"
                  style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                >
                  {group.icon}
                </span>
                <p
                  className="text-[#c9a96e] text-[9px] tracking-[0.38em] uppercase font-semibold"
                  style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                >
                  {group.category}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[#c0bdb8] text-[11px] border border-[#2a2520] px-2.5 py-1 hover:border-[#c9a96e]/40 hover:text-[#f0ede8] transition-all duration-300 cursor-default leading-none"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
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
