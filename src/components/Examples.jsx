export default function Examples() {
  const books = [
    { title: 'Starlit Adventure', author: 'Ava Moon', colors: ['#ef8bff', '#9646d9'] },
    { title: 'The Kind Dragon', author: 'Leo Bright', colors: ['#ff8635', '#fee183'] },
    { title: 'Forest Whispers', author: 'Mila Sage', colors: ['#5a17c6', '#ef8bff'] },
    { title: 'Cloudy Friends', author: 'Noah Skye', colors: ['#9646d9', '#ff8635'] },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#28216f] to-[#220f46]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,139,255,0.2),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 py-20 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Example Books</h2>
          <p className="mt-3 text-white/80">Covers, spreads and illustrations made with AnyTale.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((b, i) => (
            <div key={i} className="group rounded-3xl p-4 bg-white/5 ring-1 ring-white/10 backdrop-blur">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br" style={{ backgroundImage: `linear-gradient(135deg, ${b.colors[0]}, ${b.colors[1]})` }}>
                <div className="h-full w-full grid place-items-center">
                  <div className="text-center px-6">
                    <div className="text-sm uppercase tracking-widest opacity-90">AnyTale</div>
                    <div className="mt-2 text-2xl font-extrabold leading-tight">{b.title}</div>
                    <div className="text-sm opacity-80 mt-1">by {b.author}</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-white/80">A peek into whimsical worlds.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
