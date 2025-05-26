import { ArrowRight, Mail, Phone, MapPin, Star, Globe, TrendingUp, Heart, Linkedin, Twitter, Instagram } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Website Design', href: '#services' },
    { name: 'SEO Optimization', href: '#services' },
    { name: 'Direct Booking Setup', href: '#services' },
    { name: 'Marketing Strategy', href: '#services' },
    { name: 'Content Creation', href: '#services' }
  ]

  const stats = [
    { icon: TrendingUp, value: '40%', label: 'Avg Booking Increase' },
    { icon: Star, value: '4.9', label: 'Client Rating' },
    { icon: Globe, value: '15+', label: 'Countries Served' }
  ]

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full blur-3xl" style={{ background: '#047857', top: '10%', left: '10%' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl" style={{ background: '#059669', bottom: '10%', right: '10%' }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Logo */}
              <div className="group cursor-pointer">
                <h2 
                  className="text-3xl font-extrabold text-white group-hover:text-green-400 transition-colors duration-300" 
                  style={{ fontFamily: 'Comfortaa, sans-serif', color: 'white' }}
                >
                  BoostBnB
                </h2>
                <p className="text-gray-400 mt-2 text-sm">
                  BoostBnB is a part of Glamour group
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  <a href="mailto:hello@boostbnb.lk" className="text-sm">hello@boostbnb.lk</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  <a href="tel:+94771234567" className="text-sm">+94 77 123 4567</a>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                  <span className="text-sm">Colombo, Sri Lanka</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#047857' }}
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#047857' }}
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: '#047857' }}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Ready to Get Started?</h3>
              <p className="text-gray-400 text-sm">
                Join 50+ successful Airbnb hosts who have transformed their business with us.
              </p>
              
              {/* Mini Stats */}
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" 
                      style={{ backgroundColor: 'rgba(4, 120, 87, 0.2)' }}
                    >
                      <stat.icon className="w-4 h-4" style={{ color: '#059669' }} />
                    </div>
                    <span className="font-semibold mr-2" style={{ color: '#059669' }}>{stat.value}</span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center text-white px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
                style={{ backgroundColor: '#047857' }}
              >
                Get Your Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center text-gray-400 text-sm">
                <span>© {currentYear} BoostBnB. All rights reserved. BoostBnB is a part of Glamour group.</span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer