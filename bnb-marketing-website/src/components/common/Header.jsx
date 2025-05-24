import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              BoostBnB
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium hover:scale-105 transform duration-200">Home</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium hover:scale-105 transform duration-200">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-green-600 transition-colors font-medium hover:scale-105 transform duration-200">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium hover:scale-105 transform duration-200">About</a>
            <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors hover:scale-110 transform duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">Portfolio</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors">About</a>
            <a href="#contact" className="block px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-center font-medium">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header