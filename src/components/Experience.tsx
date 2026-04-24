'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    chapter: '01',
    company: 'SquadStack',
    role: 'Product Manager, AI Agents',
    period: 'Sept 2025 - Present',
    location: 'Noida',
    type: 'B2B SaaS · AI',
    description:
      'Leading the full lifecycle of enterprise AI voice bots, from development and onboarding to deployment, across BFSI sales and app-journey use cases for clients including one of India\'s largest Credit Card Issuers.',
    bullets: [
      'Built & Managed revenue stream of $1M+ ARR from scratch for one of India\'s largest Credit Card Issuer.',
      'Built AI voice bots using STT, TTS & LLMs processing 75K+ daily calling minutes',
      'Managing 1.5M+ leads pipeline through intelligent AI-driven prioritization and routing',
      'Revamped lead prioritization & SIP call-transfer for instant hangups with contextual human routing',
      'Created an internal GPT to craft, evaluate, and optimize high-quality bot prompts',
    ],
    metrics: [
      { value: '$1M+', label: 'ARR built from scratch' },
      { value: '75K+', label: 'Daily calling minutes' },
      { value: '1.5M+', label: 'Leads in AI pipeline' },
    ],
    featuredQuote: 'Built & Managed revenue stream of $1M+ ARR from scratch for one of India\'s largest Credit Card Issuer.',
  },
  {
    chapter: '02',
    company: 'LEO1 by Financepeer',
    role: 'Product Manager II',
    period: 'Oct 2022 - Nov 2024',
    location: 'Mumbai',
    type: 'Fintech · Series-B',
    description:
      'Led the LEO1 Debit-cum-Identity Card (PPI) from zero, building a transacting user base of 100K+ for a Series-B fintech startup.',
    bullets: [
      'Implemented Min-KYC with NSDL Bank, Transcorp, VISA & MasterCard, adding ₹15Cr+ to ARR',
      'Cut KYC completion time from 5 mins to 2 mins, boosting completions by 30%',
      'Revamped reward ecosystem: ₹5Cr+ in fee revenue and ₹25L+ in gift card purchases',
      'Launched Virtual Stock Market with 900K+ LEO1 Coin trades and LEO1 Stores boosting POS sales by 20%',
    ],
    metrics: [
      { value: '100K+', label: 'Transacting users built' },
      { value: '₹15Cr+', label: 'ARR delivered' },
      { value: '30%', label: 'KYC completion boost' },
    ],
    featuredQuote: null,
  },
  {
    chapter: '03',
    company: 'Sportskeeda',
    role: 'Associate Product Manager',
    period: 'Jan 2022 - Sept 2022',
    location: 'Bengaluru',
    type: 'Media · Content',
    description:
      'Shipped features that directly impacted 22M+ monthly users on web and app across one of India\'s largest sports media platforms.',
    bullets: [
      'Launched Timeless Classics widget, reduced bounce rate from 40% to 32%',
      'Built Sportskeeda Newsletters: 30K+ subscribers, 30% open rate',
      'Enhanced Article Queue efficiency: 8 hrs → 6 hrs via improved dashboards and alerting',
    ],
    metrics: [
      { value: '22M+', label: 'Monthly users reached' },
      { value: '32%', label: 'Bounce rate (was 40%)' },
      { value: '30K+', label: 'Newsletter subscribers' },
    ],
    featuredQuote: null,
  },
  {
    chapter: '04',
    company: 'GreedyGame',
    role: 'Partnerships Manager',
    period: 'Apr 2021 - Jan 2022',
    location: 'Bengaluru',
    type: 'Ad-tech · B2B',
    description:
      'Managed a portfolio of 60+ Android apps, driving ad monetization growth through enhanced placement strategies and improved CPM performance.',
    bullets: [
      'Managed 60+ Android apps with zero churn, 25% increase in ad monetization',
      'Analyzed Google Ad Manager, AdMob & SDK to develop growth algorithms',
      'Co-launched ROI tracking tool and customer chatbot for improved CX',
    ],
    metrics: [
      { value: '60+', label: 'Apps managed' },
      { value: '25%', label: 'Ad monetization growth' },
      { value: '0%', label: 'Churn rate maintained' },
    ],
    featuredQuote: null,
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
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#c9a96e]" />
            <p
              className="text-[#c9a96e] text-[10px] tracking-[0.42em] uppercase font-semibold"
              style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
            >
              02 / Work Experience
            </p>
          </div>
          <h2
            className="text-[#f0ede8] font-black leading-[1.05]"
            style={{
              fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
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
                className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none text-[#f0ede8] opacity-[0.025] group-hover:opacity-[0.05] transition-opacity duration-700"
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-cormorant-var), Arial, sans-serif',
                  fontSize: 'clamp(140px, 20vw, 220px)',
                }}
              >
                {exp.chapter}
              </div>

              <div className="relative z-10 grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-20">
                {/* Left: meta + metrics */}
                <div>
                  <span
                    className="inline-block text-[#c9a96e] text-[9px] tracking-[0.35em] uppercase border border-[#c9a96e]/30 px-2 py-0.5 mb-5"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {exp.type}
                  </span>
                  <h3
                    className="text-[#f0ede8] font-black mb-1"
                    style={{
                      fontFamily: 'var(--font-playfair-var), Arial, sans-serif',
                      fontSize: '26px',
                    }}
                  >
                    {exp.company}
                  </h3>
                  <p
                    className="text-[#7a7268] text-[12px] mb-0.5 font-medium"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {exp.role}
                  </p>
                  <p
                    className="text-[#4a4540] text-[11px] mb-10"
                    style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                  >
                    {exp.period} · {exp.location}
                  </p>

                  {/* Metrics: visual cards */}
                  <div className="space-y-4">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-[#c9a96e]/40 rounded-full shrink-0" />
                        <div>
                          <div
                            className="text-[#c9a96e] leading-none font-black mb-0.5"
                            style={{
                              fontFamily: 'var(--font-cormorant-var), Arial, sans-serif',
                              fontSize: '28px',
                            }}
                          >
                            {m.value}
                          </div>
                          <div
                            className="text-[#4a4540] text-[10px] tracking-wide"
                            style={{ fontFamily: 'var(--font-dm-var), Arial, sans-serif' }}
                          >
                            {m.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: description + bullets + featured quote */}
                <div className="flex flex-col justify-center">
                  <p
                    className="text-[#6a6560] leading-[1.9] mb-9"
                    style={{
                      fontFamily: 'var(--font-dm-var), Arial, sans-serif',
                      fontSize: '14px',
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Featured quote callout */}
                  {exp.featuredQuote && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mb-9 border-l-2 border-[#c9a96e] bg-[#c9a96e]/[0.05] px-6 py-4 relative"
                    >
                      {/* Quote mark */}
                      <span
                        className="absolute -top-2 left-4 text-[#c9a96e]/40 leading-none select-none"
                        style={{ fontSize: '48px', fontFamily: 'Arial, sans-serif' }}
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      <p
                        className="text-[#e8c98a] leading-[1.7] font-semibold pt-3"
                        style={{
                          fontFamily: 'var(--font-dm-var), Arial, sans-serif',
                          fontSize: '14px',
                        }}
                      >
                        {exp.featuredQuote}
                      </p>
                    </motion.div>
                  )}

                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex gap-4 text-[#5a5550] leading-[1.75]"
                        style={{
                          fontFamily: 'var(--font-dm-var), Arial, sans-serif',
                          fontSize: '13px',
                        }}
                      >
                        <span className="text-[#c9a96e] shrink-0 mt-0.5 text-[10px] font-bold">·</span>
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
