import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchJSON } from '../lib/api'

export default function ProductDetail(){
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [qty, setQty] = useState(1)

  useEffect(()=>{
    fetchJSON(`/api/products/${id}`).then(setProduct).catch(()=>setProduct(null))
  }, [id])

  if (!product) return (
    <div className="bg-white min-h-screen"><Navbar /><div className="pt-28 max-w-3xl mx-auto px-4"><p>Loading…</p></div></div>
  )

  return (
    <div className="bg-white text-emerald-900 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow ring-1 ring-emerald-900/10 bg-emerald-50">
            <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {(product.images || []).slice(0,4).map((img, i)=> (
              <div key={i} className="aspect-square rounded-xl overflow-hidden ring-1 ring-emerald-900/10">
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-2xl mt-2">${'{'}product.price{'}'}</p>
          <p className="mt-4 text-emerald-900/80 leading-relaxed">{product.description}</p>
          {product.care && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 ring-1 ring-emerald-900/10">
              <h3 className="font-medium">Care instructions</h3>
              <p className="text-emerald-900/80 mt-1">{product.care}</p>
            </div>
          )}
          <div className="mt-6 flex items-center gap-3">
            <label className="text-sm">Qty</label>
            <input type="number" min="1" value={qty} onChange={e=>setQty(parseInt(e.target.value||'1'))} className="w-20 px-3 py-2 rounded-full border border-emerald-900/20" />
            <button className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Add to cart</button>
          </div>
          <div className="mt-8">
            <h3 className="font-medium">Delivery & pickup</h3>
            <p className="text-emerald-900/80 mt-1">Local delivery and in-store pickup available at checkout.</p>
          </div>
          {product.tags?.length ? (
            <div className="mt-8">
              <h3 className="font-medium">Recommended pairings</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.slice(0,6).map(t => <span key={t} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 ring-1 ring-emerald-900/10">{t}</span>)}
              </div>
            </div>
          ): null}
        </div>
      </div>
      <Footer />
    </div>
  )
}
