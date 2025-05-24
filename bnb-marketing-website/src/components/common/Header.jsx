import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-4 z-50 font-raleway transition-all duration-700 px-4 sm:px-6 lg:px-8 ${
      scrolled ? 'top-0 px-0' : ''
    }`}>
      <div className={`max-w-8xl mx-auto transition-all duration-700 ${
        scrolled 
          ? 'bg-white/15 backdrop-blur-2xl border border-white/30 rounded-none shadow-2xl' 
          : 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl'
      }`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-5">
            
            {/* Glassmorphism Logo */}
            <div className="group cursor-pointer">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <h1 className="relative text-2xl lg:text-3xl font-bold text-white/95 group-hover:text-white transition-all duration-500 tracking-tight">
                  BoostBnB
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-2 border border-white/20">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'About', href: '#about' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2 rounded-full text-white/80 hover:text-white font-medium text-sm transition-all duration-300 hover:bg-white/10"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
              
              {/* Glassmorphism CTA */}
              <div className="ml-4">
                <a
                  href="#contact"
                  className="group relative bg-white/15 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  <span className="relative z-10">Get Started</span>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 border border-white/30 hover:scale-110"
              >
                <div className="transition-transform duration-300">
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-80 opacity-100 pb-6' 
              : 'max-h-0 opacity-0 pb-0'
          } overflow-hidden`}>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl p-4 mx-2">
              <div className="space-y-1">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'About', href: '#about' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group block px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium relative overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <span className="relative z-10">{item.name}</span>
                  </a>
                ))}
                
                <div className="pt-3 mt-3 border-t border-white/20">
                  <a
                    href="#contact"
                    className="group block bg-white/15 backdrop-blur-md text-white px-4 py-3 rounded-xl font-semibold text-center border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 relative overflow-hidden"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <span className="relative z-10">Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header