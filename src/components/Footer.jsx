import { useState } from 'react'
import { fetchJSON } from '../lib/api'

export default function Footer(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      await fetchJSON('/api/newsletter', { method:'POST', body: JSON.stringify({ email }) })
      setStatus('Thanks for joining!')
      setEmail('')
    } catch(err){
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <footer className="mt-20 border-t border-emerald-900/10 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-lime-500"></div>
            <span className="font-semibold tracking-tight text-emerald-900">Wild Fern</span>
          </div>
          <p className="text-emerald-900/70 mt-3">Nature-led florals and plants. Crafted slowly, thoughtfully.</p>
        </div>
        <div>
          <h4 className="font-medium text-emerald-900">Visit</h4>
          <p className="text-emerald-900/70 mt-2">123 Garden St, Greenfield
          <br/>Mon–Sat 10–6, Sun 11–4
          <br/>(555) 123-4567</p>
        </div>
        <div>
          <h4 className="font-medium text-emerald-900">Follow</h4>
          <div className="mt-2 flex gap-3 text-emerald-700">
            <a href="#" className="hover:text-emerald-900">Instagram</a>
            <a href="#" className="hover:text-emerald-900">Pinterest</a>
            <a href="#" className="hover:text-emerald-900">TikTok</a>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-emerald-900">Newsletter</h4>
          <form className="mt-2 flex gap-2" onSubmit={subscribe}>
            <input value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email" className="flex-1 px-4 py-3 rounded-full bg-white border border-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            <button className="px-5 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Join</button>
          </form>
          {status && <p className="text-sm mt-2 text-emerald-800">{status}</p>}
        </div>
      </div>
    </footer>
  )
}
