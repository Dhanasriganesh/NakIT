import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <ScrollToTop />
      <Header />
      <main className="pt-24 md:pt-28">
        <Routers />
      </main>
      <Footer />
    </div>
  )
}
