import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedCollections from '../components/FeaturedCollections'
import Values from '../components/Values'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-white text-emerald-900">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <Values />
      <Footer />
    </div>
  )
}
