import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, TikTok, ArrowRight, ImagePlus, Link as LinkIcon, X } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function FlameLogo({ src }) {
  const wrapperClasses = 'relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28'
  if (src) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={wrapperClasses}
        aria-hidden
      >
        <motion.img
          src={src}
          alt="Brand Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_24px_rgba(255,200,80,0.35)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,170,60,0.20),transparent_60%)] blur-2xl" />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: 'easeOut' }}
      className={wrapperClasses}
      aria-hidden
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE29A" />
            <stop offset="45%" stopColor="#FFC94D" />
            <stop offset="100%" stopColor="#B8860B" />
          </radialGradient>
        </defs>
        <motion.path
          d="M100 12c-10 24-43 46-43 79 0 29 21 50 43 50s43-21 43-50c0-33-33-55-43-79z"
          fill="url(#goldGlow)"
          stroke="#FFE6AE"
          strokeWidth="3"
          initial={{ filter: 'drop-shadow(0px 0px 0px rgba(255,190,60,0))' }}
          animate={{
            filter: [
              'drop-shadow(0px 0px 14px rgba(255,200,70,0.35))',
              'drop-shadow(0px 0px 22px rgba(255,90,70,0.35))',
              'drop-shadow(0px 0px 14px rgba(255,200,70,0.35))',
            ],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
      <div className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,170,60,0.25),transparent_60%)] blur-2xl" />
    </motion.div>
  )
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
      {kicker && (
        <div className="inline-block rounded-full border border-amber-300/40 bg-black/40 px-3 py-1 text-[11px] sm:text-xs tracking-widest uppercase text-amber-200/80">
          {kicker}
        </div>
      )}
      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-white/70">{subtitle}</p>
      )}
    </div>
  )
}

const events = [
  {
    date: '29 Jun',
    city: 'Berlin',
    vibe: 'House • Afrobeat',
    image:
      'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=1600&auto=format&fit=crop',
  },
  {
    date: '13 Jul',
    city: 'Hamburg',
    vibe: 'Open Air • Golden Hour',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
  },
  {
    date: '27 Jul',
    city: 'Köln',
    vibe: 'Nightclub Edition',
    image:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop',
  },
]

const drinks = [
  {
    name: 'Golden Glow – Rot',
    tag: 'Premium Glühwein',
    tone: 'deep',
    image:
      'https://images.unsplash.com/photo-1546549039-624430e3e3d5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Golden Glow – Weiß',
    tag: 'Premium Glühwein',
    tone: 'light',
    image:
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Lifestyle Rosé',
    tag: 'Mode-Wein',
    tone: 'rose',
    image:
      'https://images.unsplash.com/photo-1541542684-4a3a089dbf4b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Lifestyle Weiß',
    tag: 'Mode-Wein',
    tone: 'white',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function App() {
  const [logoSrc, setLogoSrc] = React.useState(() => {
    try {
      const url = new URL(window.location.href)
      const param = url.searchParams.get('logo')
      return param || null
    } catch {
      return null
    }
  })
  const fileInputRef = React.useRef(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setLogoSrc(url)
  }

  const handleUrl = () => {
    const u = window.prompt('Logo URL einfügen (PNG/SVG mit transparentem Hintergrund empfohlen):')
    if (!u) return
    try {
      const test = new URL(u)
      setLogoSrc(test.href)
    } catch {
      alert('Ungültige URL')
    }
  }

  const clearLogo = () => setLogoSrc(null)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-300 selection:text-black">
      {/* HERO */}
      <section className="relative h-[100dvh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />

        {/* Logo Controls (subtil, top-right) */}
        <div className="absolute right-4 top-4 z-20 flex items-center gap-2 opacity-80 hover:opacity-100">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-black/50 px-3 py-1.5 text-xs text-amber-100 backdrop-blur-md hover:border-amber-300 hover:bg-amber-500/10"
          >
            <ImagePlus className="h-3.5 w-3.5" /> Logo hinzufügen
          </button>
          <button
            onClick={handleUrl}
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-black/50 px-3 py-1.5 text-xs text-amber-100 backdrop-blur-md hover:border-amber-300 hover:bg-amber-500/10"
          >
            <LinkIcon className="h-3.5 w-3.5" /> per Link
          </button>
          {logoSrc && (
            <button
              onClick={clearLogo}
              aria-label="Logo entfernen"
              className="inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-black/50 px-2.5 py-1.5 text-xs text-red-200/90 backdrop-blur-md hover:border-red-400 hover:bg-red-500/10"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <input
            type="file"
            accept="image/png,image/jpeg,image/svg+xml"
            ref={fileInputRef}
            onChange={handleFile}
            className="hidden"
          />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          <FlameLogo src={logoSrc} />
          <motion.h1
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-6xl tracking-tight font-semibold"
          >
            Golden Flame × FAYA
          </motion.h1>
          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/80"
          >
            Ignite the Night. Feel the Fire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#events"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/40 px-5 py-2.5 text-sm sm:text-base font-medium text-amber-100 backdrop-blur-md transition hover:border-amber-300 hover:bg-amber-500/10"
            >
              <span className="relative">
                Events entdecken
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-60" />
              </span>
              <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="#drinks"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-5 py-2.5 text-sm sm:text-base font-semibold text-black shadow-[0_0_30px_-8px_rgba(255,180,60,0.9)] transition-transform hover:scale-[1.03]"
            >
              Unsere Getränke
            </a>
          </motion.div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="relative py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(255,200,80,0.10),transparent)]" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            kicker="Golden Flame"
            title="Sommer Open Airs • Club Nights • Special Editions"
            subtitle="House • Afrobeat • Premium Nightlife"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev, i) => (
              <motion.div
                key={ev.city + i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-amber-300/10"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_80px_10px_rgba(255,200,80,0.15)]" />
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={ev.image} alt="Event" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-amber-300/90 text-sm">{ev.date} • {ev.city}</div>
                      <div className="text-white text-lg sm:text-xl font-semibold">{ev.vibe}</div>
                    </div>
                    <a href="#" className="rounded-full bg-amber-400/90 text-black text-xs px-3 py-1 font-semibold hover:bg-amber-400 transition">
                      Tickets
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" className="relative py-16 sm:py-20 md:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(255,50,50,0.08),transparent)]" />
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            kicker="Golden Glow & Lifestyle Wine"
            title="Premium Drinks – warmes Gold, klarer Stil"
            subtitle="Mode-Wein, Lifestyle, Visuals"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinks.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-amber-300/10"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="text-amber-300/90 text-xs">{p.tag}</div>
                  <div className="text-white text-lg sm:text-xl font-semibold">{p.name}</div>
                </div>
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_80px_10px_rgba(255,200,80,0.12)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section id="story" className="relative py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle
            kicker="FAYA Universe"
            title="Fire-Energy. Community. Nightlife."
            subtitle="Golden Flame (Events) • Golden Glow (Glühwein) • Lifestyle Wein"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Events • Premium Vibes', 'Drinks • Mode-Wein', 'Community • Urban Culture'].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl bg-zinc-900/60 p-6 ring-1 ring-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(400px_120px_at_50%_-10%,rgba(255,200,80,0.08),transparent)]" />
                <div className="relative">
                  <h3 className="text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-white/70">Kurz. Stark. Visuell. Premium Energy für deine Nacht.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SLIDESHOW */}
      <section id="gallery" className="relative py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle kicker="Galerie" title="Golden Flame Moments" subtitle="Glow, Lichter, Tanz" />
          <div className="relative overflow-hidden rounded-2xl bg-zinc-900/50 ring-1 ring-white/5">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[
                'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1558981033-6f0c94958bb6?q=80&w=1600&auto=format&fit=crop',
              ]
                .concat([
                  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1600&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1558981033-6f0c94958bb6?q=80&w=1600&auto=format&fit=crop',
                ])
                .map((src, idx) => (
                  <div key={idx} className="relative h-52 sm:h-64 md:h-72 w-[60vw] sm:w-[40vw] md:w-[33vw] flex-shrink-0 overflow-hidden">
                    <img src={src} alt="Golden Flame" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>
                ))}
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="relative py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionTitle kicker="Community" title="Join the Flame" subtitle="Exklusive Events, Drops & Presales" />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto flex max-w-xl flex-col items-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Deine E-Mail"
              className="w-full flex-1 rounded-full border border-amber-300/30 bg-black/50 px-5 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-amber-300/60"
            />
            <button
              className="rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_30px_-8px_rgba(255,180,60,0.9)] transition-transform hover:scale-[1.02]"
            >
              Join the Flame
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white/80">
              <FlameLogo src={logoSrc} />
              <div>
                <div className="text-sm font-semibold">Golden Flame × FAYA</div>
                <div className="text-xs text-white/60">Premium Nightlife • Drinks • Culture</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-amber-300/30 p-2 text-amber-200/90 transition hover:border-amber-300 hover:bg-amber-500/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="rounded-full border border-amber-300/30 p-2 text-amber-200/90 transition hover:border-amber-300 hover:bg-amber-500/10"
              >
                <TikTok className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
            <div>© {new Date().getFullYear()} Golden Flame & FAYA. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-amber-200/90 transition">Kontakt</a>
              <span className="text-white/30">•</span>
              <a href="#" className="hover:text-amber-200/90 transition">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
