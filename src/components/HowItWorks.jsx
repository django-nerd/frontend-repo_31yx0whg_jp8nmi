import { PencilLine, User2, ImageDown } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: PencilLine, title: 'Write or paste your story', text: 'Start from a spark or bring your manuscript. The assistant helps with tone, rhythm and reading level.' },
    { icon: User2, title: 'Create character & choose style', text: 'Define personality, outfits and color palette. Pick from whimsical styles tuned for kids.' },
    { icon: ImageDown, title: 'Generate illustrations & export', text: 'Lay out pages, regenerate panels and export print-ready files.' },
  ]
  return (
    <section className="relative bg-gradient-to-b from-white to-[#28216f]/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#220f46]">How It Works</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-3xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#ef8bff] to-[#9646d9] text-white">
                <s.icon />
              </div>
              <h3 className="mt-4 font-semibold text-[#220f46]">{s.title}</h3>
              <p className="mt-2 text-[#28216f]/80 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
