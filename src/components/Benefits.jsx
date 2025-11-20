import { Sparkles, Palette, MessageSquare, Sliders, FileDown, RefreshCcw } from 'lucide-react'

export default function Benefits() {
  const items = [
    { icon: Sparkles, title: 'Consistent characters', text: 'Keep your heroes recognizable across every page.' },
    { icon: Palette, title: 'Children’s book art styles', text: 'Choose from whimsical to watercolor and beyond.' },
    { icon: MessageSquare, title: 'Smart text helper', text: 'Rewrite, shorten, rhyme — your creative copilot.' },
    { icon: Sliders, title: 'Full creative control', text: 'Guide poses, scenes, styles and page layouts.' },
    { icon: FileDown, title: 'Print-ready exports', text: 'CMYK, trim, bleed and spine width handled for you.' },
    { icon: RefreshCcw, title: 'Unlimited revisions', text: 'Iterate freely until it’s perfect.' },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#ef8bff]/10" />
        <div className="absolute -right-24 top-24 h-64 w-64 bg-[#ef8bff]/30 rounded-full blur-3xl" />
        <div className="absolute -left-24 bottom-24 h-64 w-64 bg-[#fee183]/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#220f46]">Why Authors Love AnyTale</h2>
          <p className="mt-3 text-[#28216f]/80">Whimsical by design, professional in output.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="relative rounded-3xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-gradient-to-tr from-[#ef8bff] to-[#9646d9] opacity-20 blur-2xl" />
              <item.icon className="w-6 h-6 text-[#5a17c6]" />
              <h3 className="mt-3 font-semibold text-[#220f46]">{item.title}</h3>
              <p className="mt-2 text-[#28216f]/80 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
