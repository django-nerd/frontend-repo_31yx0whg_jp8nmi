export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#220f46] via-[#28216f] to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 text-white">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <div className="text-2xl font-extrabold">AnyTale</div>
            <p className="mt-2 text-white/80 text-sm">Bring magical stories to life.</p>
          </div>
          <nav className="flex md:justify-end gap-6 text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} AnyTale. All rights reserved.</div>
      </div>
      <Starry />
    </footer>
  )
}

function Starry() {
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.6 + 0.2,
  }))
  return (
    <div className="absolute inset-0 -z-20">
      {stars.map((s, i) => (
        <div key={i} className="absolute rounded-full bg-white" style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, opacity: s.opacity }} />
      ))}
    </div>
  )
}
