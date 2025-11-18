export default function Values(){
  const items = [
    {
      title: 'Craftsmanship',
      desc: 'Every stem is selected by hand and arranged with a light, natural touch.',
    },
    {
      title: 'Sustainability',
      desc: 'Seasonal sourcing, local growers, compostable packaging, low-waste studio.',
    },
    {
      title: 'Care',
      desc: 'We share guidance and plant knowledge to help your flowers and greens thrive.',
    },
  ]
  return (
    <section className="py-16 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">Handcrafted and nature-led</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white shadow ring-1 ring-emerald-900/10">
              <h3 className="text-emerald-900 font-medium">{it.title}</h3>
              <p className="text-emerald-900/70 mt-2 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
