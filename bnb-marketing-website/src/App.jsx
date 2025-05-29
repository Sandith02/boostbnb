import Header from './components/common/Header'
import Hero from './components/sections/Hero'
import ServicesSection  from './components/sections/Package'
import Footer from './components/common/Footer'
import How from './components/sections/How'
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
      <Footer />
    </div>
    
  )
}

export default App