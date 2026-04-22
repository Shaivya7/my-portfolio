'use client'

import { motion } from 'framer-motion'

const posts = [
  {
    number: '001',
    title: 'Building AI Voice Bots at Scale: Lessons from SquadStack',
    excerpt:
      'How we went from concept to 75K+ daily calling minutes — the product decisions, technical trade-offs, and what I learned about shipping AI in enterprise.',
    readTime: '~8 min',
    tags: ['AI', 'Product'],
  },
  {
    number: '002',
    title: 'From 0 to 100K: How We Scaled the LEO1 Card in Indian Fintech',
    excerpt:
      'A detailed breakdown of building a transacting user base from scratch — KYC flows, card partnerships, and the metrics that actually moved the needle.',
    readTime: '~10 min',
    tags: ['Fintech', 'Growth'],
  },
  {
    number: '003',
    title: 'What a Deliberate Career Break Taught Me About Building Products',
    excerpt:
      'Why I stepped away, what I built during the break, and how starting a food business changed the way I think about product-market fit.',
    readTime: '~6 min',
    tags: ['Career', 'Reflection'],
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-8 lg:px-20 bg-[#070706]">
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
            05 — Writing
          </p>
          <h2
            className="text-[#f0ede8] font-normal leading-[1.05] mb-3"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            Thinking out loud.
          </h2>
          <p
            className="text-[#4a4540] text-[13px]"
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
          >
            Essays coming soon — drafts in progress.
          </p>
        </motion.div>

        <div>
          {posts.map((post, i) => (
            <motion.article
              key={post.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="border-t border-[#2a2520] py-10 group cursor-default"
            >
              <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-16 items-start">
                <div className="flex items-center gap-4">
                  <span
                    className="text-[#2a2520] leading-none font-light group-hover:text-[#c9a96e]/20 transition-colors duration-500"
                    style={{
                      fontFamily: 'var(--font-cormorant-var), Georgia, serif',
                      fontSize: '22px',
                    }}
                  >
                    {post.number}
                  </span>
                  <span
                    className="text-[#3a3530] text-[9px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    Draft
                  </span>
                </div>

                <div>
                  <h3
                    className="text-[#5a5550] font-normal mb-3 leading-snug group-hover:text-[#7a7268] transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-playfair-var), Georgia, serif',
                      fontSize: '20px',
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-[#3a3530] leading-[1.8] mb-4 max-w-xl"
                    style={{
                      fontFamily: 'var(--font-dm-var), system-ui, sans-serif',
                      fontSize: '12px',
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#3a3530] text-[9px] tracking-[0.2em] uppercase"
                        style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                    <span
                      className="text-[#2a2520] text-[9px]"
                      style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                    >
                      · {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
