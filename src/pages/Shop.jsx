import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchJSON } from '../lib/api'

function FilterChip({label, active, onClick}){
  return <button onClick={onClick} className={`px-4 py-2 rounded-full border text-sm ${active? 'bg-emerald-600 text-white border-emerald-600':'border-emerald-900/20 text-emerald-900 hover:bg-emerald-50'}`}>{label}</button>
}

export default function Shop(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({category:'', occasion:'', color:'', price:[0,500]})

  useEffect(() => {
    const params = new URLSearchParams()
    if (filters.category) params.set('category', filters.category)
    if (filters.occasion) params.set('occasion', filters.occasion)
    if (filters.color) params.set('color', filters.color)
    if (filters.price) { params.set('min_price', filters.price[0]); params.set('max_price', filters.price[1]) }
    fetchJSON(`/api/products?${params.toString()}`).then(setItems).finally(()=>setLoading(false))
  }, [filters])

  const categories = ['bouquets','plants','seasonal']
  const occasions = ['birthday','wedding','sympathy','thank you']
  const colors = ['white','pastel','vibrant','green']

  return (
    <div className="bg-white text-emerald-900 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <h1 className="text-3xl font-semibold">Shop</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <FilterChip key={c} label={c} active={filters.category===c} onClick={()=>setFilters(f=>({...f, category: f.category===c?'':c}))} />
          ))}
          {occasions.map(o => (
            <FilterChip key={o} label={o} active={filters.occasion===o} onClick={()=>setFilters(f=>({...f, occasion: f.occasion===o?'':o}))} />
          ))}
          {colors.map(col => (
            <FilterChip key={col} label={col} active={filters.color===col} onClick={()=>setFilters(f=>({...f, color: f.color===col?'':col}))} />
          ))}
        </div>
        {loading ? (
          <p className="mt-10 text-emerald-900/70">Loading…</p>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(it => (
              <a key={it.id} href={`/product/${it.id}`} className="group rounded-2xl overflow-hidden shadow ring-1 ring-emerald-900/10 bg-white">
                <div className="aspect-square overflow-hidden">
                  <img src={it.images?.[0] || 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop'} alt={it.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-emerald-950">{it.title}</h3>
                  <p className="text-emerald-900/70 mt-1">${'{'}it.price{'}'}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
