'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    index: '01',
    category: 'Sports · Gaming',
    title: 'Football Face-Off',
    description:
      'A head-to-head football prediction game built during my career break. Match predictions, player comparisons, and live team stats.',
    tags: ['Side Project', 'Web App'],
    color: '#1a3a2a',
    accent: '#4ade80',
    href: 'https://faceoff-premierleague.replit.app/',
  },
  {
    index: '02',
    category: 'AI · Commerce',
    title: 'AI Quick Commerce Assistant',
    description:
      'An LLM-powered assistant for quick commerce decisions — helping users discover, compare, and order from local stores faster.',
    tags: ['AI', 'LLM', 'Commerce'],
    color: '#1a1a3a',
    accent: '#818cf8',
    href: 'https://navy-trumpet-b8c.notion.site/Smart-Quick-Commerce-Ordering-Assistant-19ef2aedcf48803c9d5efe8c7fd5d124',
  },
  {
    index: '03',
    category: 'Productivity · Chrome',
    title: 'Zen Mode Extension',
    description:
      'A focus-mode Chrome extension that removes digital clutter and blocks distractions so you can stay in deep work.',
    tags: ['Chrome Extension', 'Productivity'],
    color: '#2a1a1a',
    accent: '#fb923c',
    href: 'https://drive.google.com/file/d/1Y_5leRLfKyLXYmnCMnxLA6Dr5gbjepjB/view',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-8 lg:px-20 bg-[#070706]">
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
              03 — Side Projects
            </p>
          </div>
          <h2
            className="text-[#f0ede8] font-black leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            Things I built<br />for the love of it.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.index}
              href={project.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2a2520] p-8 group hover:border-[#4a4540] transition-all duration-500 block relative overflow-hidden"
            >
              {/* Hover gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 30% 0%, ${project.color} 0%, transparent 70%)` }}
              />

              {/* Accent line at top */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${project.accent}80, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-[#2a2520] leading-none font-black group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      fontFamily: 'var(--font-cormorant-var), Arial, sans-serif',
                      fontSize: '52px',
                    }}
                  >
                    {project.index}
                  </span>
                  <span
                    className="text-[#4a4540] group-hover:text-[#c9a96e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg"
                  >
                    ↗
                  </span>
                </div>

                <p
                  className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase mb-3 font-semibold"
                  style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-[#f0ede8] font-black mb-4 leading-tight"
                  style={{
                    fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
                    fontSize: '22px',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[#5a5550] leading-[1.8] mb-8"
                  style={{
                    fontFamily: 'var(--font-dm-var), Arial, sans-serif',
                    fontSize: '13px',
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[0.2em] uppercase border px-2.5 py-1 transition-colors duration-300"
                      style={{
                        fontFamily: 'var(--font-dm-var), Arial, sans-serif',
                        color: project.accent + '99',
                        borderColor: project.accent + '30',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
