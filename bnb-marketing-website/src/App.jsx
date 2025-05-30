import Header from './components/common/Header'
import Hero from './components/sections/Hero'
import ServicesSection  from './components/sections/Package'
import Footer from './components/common/Footer'
import How from './components/sections/How'
import ContactSection from './components/sections/Contact'
import TestimonialsSection from './components/sections/Testimonial'
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <Hero />
      </main>
      <main className="">
        <How/>
      </main>
      <main className="">
        <ServicesSection/>
      </main>
      <main className=''>
        <TestimonialsSection />
      </main>
      <main className=''>
        <ContactSection />
      </main>
      <Footer />
    </div>
    
  )
}

export default App