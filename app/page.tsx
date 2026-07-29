import HeroCanvas from '../components/HeroCanvas'
import Link from 'next/link'

export default function Page(){
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between p-6">
          <div className="text-lg font-bold text-primary">ASKSHREE</div>
          <div className="hidden md:flex gap-6">
            <a href="#services">Services</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#contact">Contact</a>
            <Link href="/admin"><a className="px-4 py-2 rounded bg-accent text-white">Admin</a></Link>
          </div>
          <div className="md:hidden">{/* mobile menu placeholder */}</div>
        </nav>
      </header>

      <section className="hero-wrap relative w-full">
        <HeroCanvas />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg max-w-3xl">Transforming Leads Into Predictable Revenue</h1>
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl">We help businesses generate qualified leads, book appointments, and accelerate growth through modern outreach systems.</p>
          <div className="mt-8 flex gap-3">
            <button className="px-5 py-3 rounded-md bg-accent text-white font-semibold">Book Consultation</button>
            <button className="px-5 py-3 rounded-md bg-white text-primary font-semibold">Get Proposal</button>
            <button className="px-5 py-3 rounded-md border border-white text-white">Watch Our Process</button>
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primaryDeep">Services</h2>
          <p className="mt-4 text-lg">Interactive 3D services ecosystem coming in next iterations.</p>
        </div>
      </section>

      <section id="contact" className="py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2">Contact form and animations to be added next.</p>
        </div>
      </section>

      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold">AskShree Solutions</div>
          <p className="mt-2 text-sm">Transforming Leads Into Predictable Revenue</p>
        </div>
      </footer>
    </main>
  )
}
