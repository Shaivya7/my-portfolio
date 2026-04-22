'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    chapter: '01',
    company: 'SquadStack',
    role: 'Product Manager — AI Agents',
    period: 'Sept 2025 — Present',
    location: 'Noida',
    type: 'B2B SaaS · AI',
    description:
      'Leading the full lifecycle of enterprise AI voice bots — development, onboarding, and deployment — across BFSI sales and app-journey use cases.',
    bullets: [
      'Built AI voice bots using STT, TTS & LLMs processing 75K+ daily calling minutes',
      'Revamped lead prioritization & SIP call-transfer for instant hangups with contextual human routing',
      'Created an internal GPT to craft, evaluate, and optimize high-quality bot prompts',
    ],
    metrics: [
      { value: '75K+', label: 'Daily calling minutes' },
      { value: '+5pp', label: 'Conversion improvement' },
      { value: 'STT · TTS · LLM', label: 'Voice stack owned' },
    ],
  },
  {
    chapter: '02',
    company: 'LEO1 by Financepeer',
    role: 'Product Manager II',
    period: 'Oct 2022 — Nov 2024',
    location: 'Mumbai',
    type: 'Fintech · Series-B',
    description:
      'Led the LEO1 Debit-cum-Identity Card (PPI) from zero — building a transacting user base of 100K+ for a Series-B fintech startup.',
    bullets: [
      'Implemented Min-KYC with NSDL Bank, Transcorp, VISA & MasterCard — adding ₹15Cr+ to ARR',
      'Cut KYC completion time from 5 mins to 2 mins, boosting completions by 30%',
      'Revamped reward ecosystem: ₹5Cr+ in fee revenue and ₹25L+ in gift card purchases',
      'Launched Virtual Stock Market with 900K+ LEO1 Coin trades and LEO1 Stores boosting POS sales by 20%',
    ],
    metrics: [
      { value: '100K+', label: 'Transacting users built' },
      { value: '₹15Cr+', label: 'ARR delivered' },
      { value: '30%', label: 'KYC completion boost' },
    ],
  },
  {
    chapter: '03',
    company: 'Sportskeeda',
    role: 'Associate Product Manager',
    period: 'Jan 2022 — Sept 2022',
    location: 'Bengaluru',
    type: 'Media · Content',
    description:
      'Shipped features that directly impacted 22M+ monthly users on web and app across one of India\'s largest sports media platforms.',
    bullets: [
      'Launched Timeless Classics widget — reduced bounce rate from 40% to 32%',
      'Built Sportskeeda Newsletters: 30K+ subscribers, 30% open rate',
      'Enhanced Article Queue efficiency: 8 hrs → 6 hrs via improved dashboards and alerting',
    ],
    metrics: [
      { value: '22M+', label: 'Monthly users reached' },
      { value: '32%', label: 'Bounce rate (was 40%)' },
      { value: '30K+', label: 'Newsletter subscribers' },
    ],
  },
  {
    chapter: '04',
    company: 'GreedyGame',
    role: 'Partnerships Manager',
    period: 'Apr 2021 — Jan 2022',
    location: 'Bengaluru',
    type: 'Ad-tech · B2B',
    description:
      'Managed a portfolio of 60+ Android apps, driving ad monetization growth through enhanced placement strategies and improved CPM performance.',
    bullets: [
      'Managed 60+ Android apps with zero churn — 25% increase in ad monetization',
      'Analyzed Google Ad Manager, AdMob & SDK to develop growth algorithms',
      'Co-launched ROI tracking tool and customer chatbot for improved CX',
    ],
    metrics: [
      { value: '60+', label: 'Apps managed' },
      { value: '25%', label: 'Ad monetization growth' },
      { value: '0%', label: 'Churn rate maintained' },
    ],
  },
]

export default function Experience() {
  return (
    <section id="work" className="py-32 px-8 lg:px-20">
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
            02 — Work Experience
          </p>
          <h2
            className="text-[#f0ede8] font-normal leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair-var), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 54px)',
            }}
          >
            Where I&apos;ve built.
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.chapter}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.05 * i }}
              className="relative py-16 border-t border-[#2a2520] group overflow-hidden"
            >
              {/* Decorative chapter number */}
              <div
                className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-light leading-none text-[#f0ede8] opacity-[0.028] group-hover:opacity-[0.05] transition-opacity duration-700"
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-cormorant-var), Georgia, serif',
                  fontSize: 'clamp(140px, 20vw, 220px)',
                }}
              >
                {exp.chapter}
              </div>

              <div className="relative z-10 grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">
                {/* Left: meta + metrics */}
                <div>
                  <p
                    className="text-[#c9a96e] text-[9px] tracking-[0.35em] uppercase mb-5"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    {exp.type}
                  </p>
                  <h3
                    className="text-[#f0ede8] font-normal mb-1"
                    style={{
                      fontFamily: 'var(--font-playfair-var), Georgia, serif',
                      fontSize: '26px',
                    }}
                  >
                    {exp.company}
                  </h3>
                  <p
                    className="text-[#7a7268] text-[12px] mb-0.5"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-[#4a4540] text-[11px] mb-10"
                    style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                  >
                    {exp.period} · {exp.location}
                  </p>

                  {/* Metrics — pure typography, no boxes */}
                  <div className="space-y-5">
                    {exp.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className="text-[#c9a96e] leading-none font-light mb-1"
                          style={{
                            fontFamily: 'var(--font-cormorant-var), Georgia, serif',
                            fontSize: '34px',
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="text-[#4a4540] text-[10px] tracking-wide"
                          style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: description + bullets */}
                <div className="flex flex-col justify-center">
                  <p
                    className="text-[#6a6560] leading-[1.9] mb-9"
                    style={{
                      fontFamily: 'var(--font-dm-var), system-ui, sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    {exp.description}
                  </p>
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex gap-4 text-[#5a5550] leading-[1.75]"
                        style={{
                          fontFamily: 'var(--font-dm-var), system-ui, sans-serif',
                          fontSize: '13px',
                        }}
                      >
                        <span className="text-[#c9a96e] shrink-0 mt-0.5 text-[10px]">—</span>
                        <span className="hover:text-[#7a7268] transition-colors duration-300">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
