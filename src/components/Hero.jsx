import { motion } from 'framer-motion'
import { Sparkles, Wand2 } from 'lucide-react'

const gradientText = 'bg-gradient-to-r from-[#ef8bff] via-[#9646d9] to-[#ff8635] bg-clip-text text-transparent'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmospheric gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#220f46] via-[#28216f] to-[#5a17c6]" />
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[#9646d9]/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-[#ff8635]/20 blur-3xl" />
        <StarField />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 ring-1 ring-white/15 backdrop-blur"
            >
              <Sparkles className="w-4 h-4 text-[#fee183]" />
              <span className="text-sm">AI-Powered Children’s Book Creation Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className={`mt-6 text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white`}
            >
              Bring <span className={gradientText}>Magical Stories</span> to Life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-5 text-lg leading-relaxed text-white/80 max-w-xl"
            >
              Write, illustrate, and publish children’s books in minutes — no design skills needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#220f46] font-semibold bg-gradient-to-r from-[#fee183] via-[#ef8bff] to-[#ff8635] shadow-[0_8px_30px_rgba(239,139,255,0.35)] hover:shadow-[0_10px_40px_rgba(239,139,255,0.55)] transition-shadow"
              >
                <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Create Your Story
              </a>
              <span className="text-sm text-white/70">Free trial · No credit card · Ready in 5 minutes</span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#ef8bff]/20 via-[#9646d9]/10 to-transparent blur-2xl" />
            <div className="relative rounded-3xl bg-white/5 ring-1 ring-white/15 backdrop-blur-xl p-6 overflow-hidden">
              {/* Dreamy hills */}
              <svg viewBox="0 0 600 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ef8bff" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#5a17c6" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="hill1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#9646d9" />
                    <stop offset="100%" stopColor="#5a17c6" />
                  </linearGradient>
                  <linearGradient id="hill2" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ff8635" />
                    <stop offset="100%" stopColor="#ef8bff" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="600" height="400" fill="url(#sky)" />
                <circle cx="480" cy="90" r="28" fill="#fee183" opacity="0.9" />
                <g opacity="0.6">
                  <path d="M0 260 Q150 200 300 260 T600 260 V400 H0 Z" fill="url(#hill1)" />
                </g>
                <g opacity="0.7">
                  <path d="M0 300 Q180 240 320 300 T600 300 V400 H0 Z" fill="url(#hill2)" />
                </g>
                {/* Cute flame character */}
                <g transform="translate(170,180)">
                  <path d="M60 0 C80 30, 95 60, 95 90 C95 125, 70 150, 55 160 C40 150, 15 125, 15 90 C15 60, 30 30, 50 0 Z" fill="#ff8635" />
                  <circle cx="50" cy="95" r="32" fill="#ffb27a" />
                  <circle cx="40" cy="92" r="6" fill="#220f46" />
                  <circle cx="60" cy="92" r="6" fill="#220f46" />
                  <path d="M38 110 Q50 118 62 110" stroke="#220f46" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>
                {/* Sparkles */}
                <g fill="#fff" opacity="0.9">
                  <Star x={80} y={70} />
                  <Star x={520} y={60} />
                  <Star x={420} y={140} />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StarField() {
  // Decorative stars across the hero
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
  }))
  return (
    <div className="absolute inset-0">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, opacity: s.opacity }}
        />
      ))}
    </div>
  )
}

function Star({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="1.5" />
      <path d="M0 -6 L0 6 M-6 0 L6 0" stroke="#fff" strokeWidth="0.7" strokeLinecap="round" />
    </g>
  )
}
