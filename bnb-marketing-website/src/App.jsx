import Header from './components/common/Header'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              BnB Marketing Website
            </h1>
            <p className="text-gray-600 mb-6">
              Ready to build something amazing! 🚀
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App