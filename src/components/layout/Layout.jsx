import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
