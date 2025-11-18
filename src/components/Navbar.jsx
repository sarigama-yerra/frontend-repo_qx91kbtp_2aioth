import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({isActive}) => `px-3 py-2 rounded-full transition-colors ${isActive ? 'bg-emerald-100 text-emerald-900' : 'text-emerald-900/80 hover:bg-emerald-50'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 shadow-inner"></div>
          <span className="font-semibold tracking-tight text-emerald-900">Wild Fern</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItem('/', 'Home')}
          {navItem('/shop', 'Shop')}
          {navItem('/services', 'Services')}
          {navItem('/about', 'About')}
          {navItem('/contact', 'Contact')}
        </nav>
        <button className="md:hidden p-2 rounded-full hover:bg-emerald-50" onClick={()=>setOpen(v=>!v)}>
          <Menu className="w-6 h-6 text-emerald-900" />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {navItem('/', 'Home')}
          {navItem('/shop', 'Shop')}
          {navItem('/services', 'Services')}
          {navItem('/about', 'About')}
          {navItem('/contact', 'Contact')}
        </div>
      )}
    </header>
  )
}
