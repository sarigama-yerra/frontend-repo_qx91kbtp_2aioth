import { Link } from 'react-router-dom'

const collections = [
  { key: 'bouquets', title: 'Bouquets', image: 'https://images.unsplash.com/photo-1623406795110-99f1c4325084?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3VxdWV0c3xlbnwwfDB8fHwxNzYzNDgxODE2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', desc: 'Hand-tied florals, season-led and airy.' },
  { key: 'plants', title: 'Potted Plants', image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1400&auto=format&fit=crop', desc: 'Green companions for brighter spaces.' },
  { key: 'seasonal', title: 'Seasonal Specials', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop', desc: 'Limited runs featuring the week’s best.' },
]

export default function FeaturedCollections(){
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-950">Featured collections</h2>
          <Link to="/shop" className="text-emerald-700 hover:text-emerald-900">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(c => (
            <Link key={c.key} to={`/shop?category=${c.key}`} className="group rounded-3xl overflow-hidden shadow ring-1 ring-emerald-900/10 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-emerald-950">{c.title}</h3>
                <p className="text-emerald-900/70 mt-1">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
