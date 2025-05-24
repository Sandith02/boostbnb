import { ArrowRight, Star, Users, Globe } from 'lucide-react'

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen font-raleway bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Hero section introducing BoostBnB Airbnb marketing services"
    >
      {/* Background Pattern - Decorative only, hidden from screen readers */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center animate-fade-in-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-8 border border-green-200">
            <Star className="w-4 h-4 mr-2 text-green-600 fill-current" aria-hidden="true" />
            <span className="text-sm font-medium">Trusted by 50+ Property Owners in Sri Lanka</span>
          </div> 

          {/* Main Heading - Primary H1 for SEO */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Boost Your{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Airbnb Bookings
            </span>
            {' '}with Custom Websites
          </h1>

          {/* SEO-Rich Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional <strong>custom website design</strong> and <strong>digital marketing services</strong> for 
            Airbnb & vacation rental hosts in <strong>Sri Lanka</strong> and worldwide. 
            Increase your booking rates by up to 40%.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#contact" 
              className="group bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center no-underline"
              aria-label="Get your free Airbnb marketing consultation"
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            
            <button 
              className="text-green-600 hover:text-green-700 font-semibold text-lg flex items-center hover:scale-105 transition-all duration-200"
              aria-label="Watch our Airbnb marketing process video"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 hover:bg-green-200 transition-colors" aria-hidden="true">
                <div className="w-0 h-0 border-l-[6px] border-l-green-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
              </div>
              Watch Our Process
            </button>
          </div>

          {/* Statistics - Important for SEO credibility */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center" aria-hidden="true">
                  <ArrowRight className="w-6 h-6 text-green-600 rotate-45" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Average Booking Increase</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center" aria-hidden="true">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-green-100">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center" aria-hidden="true">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
          </div>
        </header>
      </div>

      {/* Structured Data for SEO - This would be better in a separate SEO component */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "BoostBnB - Airbnb Marketing Services",
            "description": "Professional custom website design and digital marketing services for Airbnb & vacation rental hosts in Sri Lanka and worldwide",
            "url": window.location.origin,
            "serviceType": "Digital Marketing",
            "areaServed": {
              "@type": "Country",
              "name": "Sri Lanka"
            },
            "provider": {
              "@type": "Organization",
              "name": "BoostBnB"
            }
          })
        }}
      />
    </section>
  )
}

export default Hero