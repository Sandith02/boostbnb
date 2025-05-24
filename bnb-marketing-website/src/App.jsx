import Header from './components/common/Header'
import Hero from './components/sections/Hero'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        {/* Add more sections here later */}
        <div className="h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">More sections coming soon...</h2>
            <p className="text-gray-600">Services, Portfolio, Testimonials, etc.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App