'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = ['About', 'Work', 'Projects', 'Skills', 'Blog', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 px-8 lg:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'bg-[#0a0908]/85 backdrop-blur-xl border-b border-[#2a2520]' : ''
      }`}
    >
      <a
        href="#"
        style={{ fontFamily: 'var(--font-playfair-var), Georgia, serif' }}
        className="text-[#c9a96e] text-xl tracking-[0.3em]"
      >
        SB
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{ fontFamily: 'var(--font-dm-var), system-ui, sans-serif' }}
            className="text-[#7a7268] hover:text-[#c9a96e] transition-colors duration-300 text-[10px] tracking-[0.22em] uppercase"
          >
            {link}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
