export default function Pricing() {
  const plans = [
    { name: 'Starter', price: 'Free', highlight: false, features: ['1 project', 'Basic styles', 'Community support'] },
    { name: 'Creator', price: '$19', highlight: true, features: ['Unlimited projects', 'Character consistency', 'Print-ready exports', 'Priority support'] },
    { name: 'Studio', price: '$49', highlight: false, features: ['Team collaboration', 'Advanced styles', 'Brand kits', 'Commercial license'] },
  ]

  return (
    <section id="pricing" className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-[#ef8bff]/10" />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#220f46]">Pricing</h2>
          <p className="mt-3 text-[#28216f]/80">Simple plans that scale with your imagination.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-3xl p-6 bg-white ring-1 ${p.highlight ? 'ring-[#ef8bff]/60 shadow-[0_20px_60px_rgba(239,139,255,0.35)]' : 'ring-slate-200'} `}>
              {p.highlight && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#ef8bff] to-[#ff8635] text-white text-xs font-semibold shadow-lg">Creator Plan</div>
              )}
              <div className="text-sm uppercase tracking-widest text-[#9646d9]">{p.name}</div>
              <div className="mt-2 text-4xl font-extrabold text-[#220f46]">{p.price}<span className="text-base font-medium text-[#28216f]/70">{p.price !== 'Free' ? '/mo' : ''}</span></div>
              <ul className="mt-4 space-y-2 text-[#28216f]/80 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5a17c6]" /> {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex justify-center w-full px-4 py-2 rounded-xl font-semibold transition-colors ${p.highlight ? 'bg-gradient-to-r from-[#ef8bff] to-[#ff8635] text-white' : 'bg-slate-100 text-[#220f46] hover:bg-slate-200'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
