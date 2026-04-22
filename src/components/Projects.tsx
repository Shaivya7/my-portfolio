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
    href: '#',
  },
  {
    index: '02',
    category: 'AI · Commerce',
    title: 'AI Quick Commerce Assistant',
    description:
      'An LLM-powered assistant for quick commerce decisions — helping users discover, compare, and order from local stores faster.',
    tags: ['AI', 'LLM', 'Commerce'],
    href: '#',
  },
  {
    index: '03',
    category: 'Productivity · Chrome',
    title: 'Zen Mode Extension',
    description:
      'A focus-mode Chrome extension that removes digital clutter and blocks distractions so you can stay in deep work.',
    tags: ['Chrome Extension', 'Productivity'],
    href: '#',
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
          <p
            className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
          >
            03 — Side Projects
          </p>
          <h2
            className="text-[#f0ede8] font-normal leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            Things I built<br />for the love of it.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 border-t border-l border-[#2a2520]">
          {projects.map((project, i) => (
            <motion.a
              key={project.index}
              href={project.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-r border-b border-[#2a2520] p-8 group hover:bg-[#0d0c0b] transition-colors duration-500 block"
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[#2a2520] leading-none font-light group-hover:text-[#c9a96e]/15 transition-colors duration-500"
                  style={{
                    fontFamily: 'var(--font-cormorant-var), Georgia, serif',
                    fontSize: '52px',
                  }}
                >
                  {project.index}
                </span>
                <span className="text-[#4a4540] group-hover:text-[#c9a96e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg">
                  ↗
                </span>
              </div>

              <p
                className="text-[#4a4540] text-[9px] tracking-[0.35em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
              >
                {project.category}
              </p>
              <h3
                className="text-[#f0ede8] font-normal mb-4 leading-tight"
                style={{
                  fontFamily: 'var(--font-playfair-var), Georgia, serif',
                  fontSize: '22px',
                }}
              >
                {project.title}
              </h3>
              <p
                className="text-[#5a5550] leading-[1.8] mb-8"
                style={{
                  fontFamily: 'var(--font-dm-var), system-ui, sans-serif',
                  fontSize: '13px',
                }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[#4a4540] text-[9px] tracking-[0.2em] uppercase border border-[#2a2520] px-2.5 py-1 group-hover:border-[#c9a96e]/20 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
