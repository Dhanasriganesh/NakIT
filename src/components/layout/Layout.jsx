import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="pt-24 md:pt-28">
        <Routers />
      </main>
      <Footer />
    </div>
  )
}
