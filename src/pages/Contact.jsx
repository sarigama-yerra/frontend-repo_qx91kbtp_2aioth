import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchJSON } from '../lib/api'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'', type:'workshop', date:'' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      await fetchJSON('/api/contact', { method:'POST', body: JSON.stringify(form) })
      setStatus('Thanks! We will be in touch soon.')
      setForm({ name:'', email:'', phone:'', subject:'', message:'', type:'workshop', date:'' })
    } catch(err){ setStatus('Something went wrong.') }
  }

  const book = async (e) => {
    e.preventDefault()
    try {
      await fetchJSON('/api/booking', { method:'POST', body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, type: form.type, date: form.date, notes: form.message }) })
      setStatus('Booking request sent!')
    } catch(err){ setStatus('Unable to send booking request.') }
  }

  return (
    <div className="bg-white text-emerald-900 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="mt-2 text-emerald-900/80">Reach out for custom florals, plant styling, or general questions.</p>
          <form className="mt-6 space-y-3" onSubmit={submit}>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Name" className="px-4 py-3 rounded-xl border border-emerald-900/20" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-emerald-900/20" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            </div>
            <input placeholder="Phone" className="w-full px-4 py-3 rounded-xl border border-emerald-900/20" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl border border-emerald-900/20" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
            <textarea required placeholder="Message" rows="5" className="w-full px-4 py-3 rounded-xl border border-emerald-900/20" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} />
            <button className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Send</button>
          </form>
          {status && <p className="mt-3 text-emerald-800">{status}</p>}
        </div>
        <div>
          <h2 className="text-2xl font-medium">Booking</h2>
          <p className="mt-2 text-emerald-900/80">Request a workshop, event florals, or plant consultation.</p>
          <form className="mt-4 space-y-3" onSubmit={book}>
            <div className="grid sm:grid-cols-2 gap-3">
              <select className="px-4 py-3 rounded-xl border border-emerald-900/20" value={form.type} onChange={e=>setForm({...form, type:e.target.value})}>
                <option value="workshop">Workshop</option>
                <option value="event">Event florals</option>
                <option value="consultation">Plant consultation</option>
              </select>
              <input type="date" className="px-4 py-3 rounded-xl border border-emerald-900/20" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
            </div>
            <button className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700">Request booking</button>
          </form>
          <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-emerald-900/10">
            <iframe title="map" src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-64"></iframe>
          </div>
          <p className="mt-3 text-emerald-900/80">123 Garden St, Greenfield • Mon–Sat 10–6, Sun 11–4 • (555) 123-4567</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
