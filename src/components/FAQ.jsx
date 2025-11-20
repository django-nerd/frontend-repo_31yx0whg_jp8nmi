import { useState } from 'react'

const faqs = [
  { q: 'What makes AnyTale different?', a: 'AnyTale combines AI text assistance with character-consistent illustration, so you can go from idea to print-ready book in minutes.' },
  { q: 'Can I use my own story?', a: 'Absolutely. Paste your manuscript or write from scratch — the assistant will help with tone, structure and age-appropriate language.' },
  { q: 'Are the exports print-ready?', a: 'Yes. You can export in print-friendly formats with trim, bleed and CMYK profiles configured.' },
  { q: 'Do I keep the rights to my books?', a: 'Yes, you own your stories and the rights to publish them. Review license terms on export.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ef8bff]/10 to-white" />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#220f46]">FAQ</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                <span className="font-semibold text-[#220f46]">{f.q}</span>
                <span className="text-[#5a17c6]">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[#28216f]/80 text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
