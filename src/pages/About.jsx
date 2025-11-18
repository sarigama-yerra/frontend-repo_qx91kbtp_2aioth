import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  const people = [
    { name: 'Ava', role: 'Founder & Lead Designer', img: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop' },
    { name: 'Noah', role: 'Studio Manager', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop' },
    { name: 'Maya', role: 'Plant Specialist', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' },
  ]
  return (
    <div className="bg-white text-emerald-900 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-semibold">Our story</h1>
        <p className="mt-4 text-emerald-900/80 leading-relaxed">We began as a tiny neighborhood studio with a love for seasonal flowers and long-lived plants. Today we still design the way we started: intuitively, responsibly, and with an eye toward the small details that make arrangements feel effortless and alive.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {people.map(p => (
            <div key={p.name} className="text-center">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow ring-1 ring-emerald-900/10">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-3 font-medium">{p.name}</h3>
              <p className="text-emerald-900/70 text-sm">{p.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-2xl bg-emerald-50 ring-1 ring-emerald-900/10">
          <h3 className="font-medium">Sustainability</h3>
          <p className="text-emerald-900/80 mt-1">We prioritize local growers, compost all green waste, and use recyclable or compostable packaging. Our studio runs on renewable energy.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
