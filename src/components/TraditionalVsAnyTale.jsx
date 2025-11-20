import { CheckCircle2, Timer, DollarSign, Sparkles } from 'lucide-react'

export default function TraditionalVsAnyTale() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-white/80" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#220f46]">Traditional vs AnyTale</h2>
          <p className="mt-3 text-[#28216f]/80">Create faster with AI assistance while keeping your creative control.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="rounded-3xl p-8 ring-1 ring-slate-200 bg-slate-50">
            <h3 className="text-xl font-bold text-[#28216f] mb-4">Traditional Book Creation</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><Timer className="mt-1 text-slate-500" size={18} /> Slow, months of back-and-forth</li>
              <li className="flex items-start gap-3"><DollarSign className="mt-1 text-slate-500" size={18} /> Expensive illustration & layout</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-4 h-4 rounded-full bg-slate-300" /> Inconsistent character styling</li>
              <li className="flex items-start gap-3"><span className="mt-1 inline-block w-4 h-4 rounded-full bg-slate-300" /> Limited iterations</li>
            </ul>
          </div>
          {/* AnyTale */}
          <div className="rounded-3xl p-8 ring-1 ring-[#ef8bff]/40 bg-gradient-to-br from-[#ef8bff]/10 via-white to-[#fee183]/10">
            <h3 className="text-xl font-bold text-[#28216f] mb-4 flex items-center gap-2"><Sparkles className="text-[#9646d9]" /> AnyTale Creation</h3>
            <ul className="space-y-3 text-[#220f46]">
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-[#5a17c6]" size={18} /> Fast, generate in minutes</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-[#5a17c6]" size={18} /> Affordable, predictable pricing</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-[#5a17c6]" size={18} /> Consistent characters & styles</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="mt-1 text-[#5a17c6]" size={18} /> Unlimited revisions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
