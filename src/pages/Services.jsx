import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  const services = [
    { title: 'Floral Arrangements', desc: 'Custom bouquets, vase arrangements, and subscriptions for home and business.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Event Florals', desc: 'Weddings, gatherings, and installations designed with a natural, airy style.', img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Plant Styling', desc: 'Curated greenery for homes and spaces, with care plans and guidance.', img: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Workshops', desc: 'Seasonal floral design and plant care workshops in our studio.', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <div className="bg-white text-emerald-900 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-semibold">Services</h1>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map(s => (
            <div key={s.title} className="rounded-2xl overflow-hidden shadow ring-1 ring-emerald-900/10 bg-white">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-medium">{s.title}</h3>
                <p className="text-emerald-900/80 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
