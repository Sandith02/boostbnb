import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(true) // Start with dark (hero is green)

  // Handle scroll effect and section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 30)
      
      // Detect which section we're in
      const sections = document.querySelectorAll('section')
      let currentSection = 'hero' // default
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id || 'unknown'
        }
      })
      
      // Determine if current section is dark (hero) or light (services, etc)
      const darkSections = ['home', 'hero'] // Add any dark background section IDs
      setIsDarkSection(darkSections.includes(currentSection))
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 font-raleway transition-all duration-700 px-4 sm:px-6 lg:px-8 ${
      scrolled ? 'top-2' : 'top-4'
    }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${
        scrolled 
          ? isDarkSection 
            ? 'bg-black/10 backdrop-blur-2xl border border-white/20 rounded-3xl' 
            : 'bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-lg rounded-3xl'
          : isDarkSection
            ? 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl'
            : 'bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg'
      }`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-5">
            
            {/* Logo */}
            <div className="group cursor-pointer">
              <div className="relative">
                <div className={`absolute -inset-2 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm ${
                  isDarkSection ? 'from-white/20 to-white/10' : 'from-green-500/20 to-emerald-500/10'
                }`}></div>
                <h1 
                  className={`relative text-2xl lg:text-3xl font-extrabold transition-all duration-500 tracking-tight ${
                    isDarkSection 
                      ? 'text-white/95 group-hover:text-white' 
                      : 'text-gray-900 group-hover:text-green-600'
                  }`}
                  style={{ fontFamily: 'Comfortaa, sans-serif' }}
                >
                  BoostBnB
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className={`flex items-center space-x-1 backdrop-blur-md rounded-full px-3 py-2.5 border transition-all duration-500 ${
                isDarkSection 
                  ? 'bg-white/5 border-white/20' 
                  : 'bg-gray-100 border-gray-200'
              }`}>
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'Services', href: '#services' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'About', href: '#about' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`group relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                      isDarkSection 
                        ? 'text-white/80 hover:text-white hover:bg-white/10' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </a>
                ))}
              </div>
              
              {/* CTA Button */}
              <div className="ml-4">
                {isDarkSection ? (
                  <a
                    href="#contact"
                    className="group relative bg-white/15 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold text-sm border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                  >
                    <span className="relative z-10">Get Started</span>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="group relative backdrop-blur-md px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white hover:opacity-90"
                    style={{ backgroundColor: '#047857' }}
                  >
                    <span className="relative z-10">Get Started</span>
                  </a>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`w-10 h-10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-110 ${
                  isDarkSection 
                    ? 'bg-white/15 text-white border-white/30 hover:bg-white/25' 
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                }`}
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
            <div className={`backdrop-blur-xl rounded-3xl border shadow-xl p-4 mx-2 transition-all duration-500 ${
              isDarkSection 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white border-gray-200'
            }`}>
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
                    className={`group block px-4 py-3 rounded-xl transition-all duration-300 font-medium relative overflow-hidden ${
                      isDarkSection 
                        ? 'text-white/80 hover:text-white hover:bg-white/10' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </a>
                ))}
                
                <div className={`pt-3 mt-3 border-t transition-all duration-300 ${
                  isDarkSection ? 'border-white/20' : 'border-gray-200'
                }`}>
                  {isDarkSection ? (
                    <a
                      href="#contact"
                      className="group block bg-white/15 backdrop-blur-md text-white px-4 py-3 rounded-xl font-semibold text-center border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 relative overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">Get Started</span>
                    </a>
                  ) : (
                    <a
                      href="#contact"
                      className="group block backdrop-blur-md px-4 py-3 rounded-xl font-semibold text-center transition-all duration-300 relative overflow-hidden text-white hover:opacity-90"
                      style={{ backgroundColor: '#047857' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">Get Started</span>
                    </a>
                  )}
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