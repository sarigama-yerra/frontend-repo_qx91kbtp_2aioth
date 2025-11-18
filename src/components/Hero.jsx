import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[40rem] h-[40rem] rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-lime-200/40 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-emerald-950 leading-tight">
            Botanicals crafted with care
          </h1>
          <p className="mt-6 text-emerald-900/80 text-lg leading-relaxed max-w-xl">
            Fresh, seasonal florals and living plants arranged with a light, natural hand. Sustainably sourced. Always heartfelt.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link to="/shop" className="px-6 py-3 rounded-full bg-emerald-600 text-white shadow hover:bg-emerald-700 transition">Shop now</Link>
            <Link to="/about" className="px-6 py-3 rounded-full border border-emerald-900/20 text-emerald-900 hover:bg-emerald-50 transition">Our story</Link>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.7, delay:0.1}} className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-emerald-900/10 bg-emerald-50">
            <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop" alt="Lush bouquet" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl overflow-hidden ring-1 ring-emerald-900/10 shadow-lg">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop" alt="Potted plant" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
