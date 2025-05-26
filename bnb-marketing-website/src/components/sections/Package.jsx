import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, TrendingUp, Clock, Zap, Globe, Star, ChevronRight, Flame, Target, Award } from 'lucide-react'

function ServicesSection() {
  const [selectedTier, setSelectedTier] = useState(1)
  const [animatedValue, setAnimatedValue] = useState(0)

  // Animate counter
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const tiers = [
    {
      name: "Kickstart",
      tagline: "Launch Fast",
      price: "35,000",
      duration: "2 weeks",
      color: "emerald",
      roi: "3-4 bookings to break even",
      features: [
        { text: "Lightning-fast website", included: true },
        { text: "Gallery that converts", included: true },
        { text: "Mobile-first design", included: true },
        { text: "Basic SEO setup", included: true },
        { text: "Multi-page layout", included: false },
        { text: "Advanced analytics", included: false }
      ]
    },
    {
      name: "Accelerate",
      tagline: "Scale Smart",
      price: "55,000",
      duration: "3 weeks",
      color: "green",
      recommended: true,
      roi: "5-6 bookings to break even",
      features: [
        { text: "Everything in Kickstart", included: true },
        { text: "Multi-page experience", included: true },
        { text: "Guest review showcase", included: true },
        { text: "Local area guide", included: true },
        { text: "Conversion optimization", included: true },
        { text: "3 months support", included: true }
      ]
    },
    {
      name: "Dominate",
      tagline: "Own Your Market",
      price: "85,000",
      duration: "4 weeks",
      color: "teal",
      roi: "7-8 bookings to break even",
      features: [
        { text: "Everything in Accelerate", included: true },
        { text: "Virtual property tours", included: true },
        { text: "Multi-language support", included: true },
        { text: "Direct booking system", included: true },
        { text: "Email automation", included: true },
        { text: "Priority support forever", included: true }
      ]
    }
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 font-raleway sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Flame className="w-4 h-4 text-orange-500" />
            Choose Your Growth Path
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pricing That Makes Sense
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Just pure growth for your Airbnb business.
          </p>
        </div>

        {/* Live Stats Bar */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-16 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">{animatedValue}%</div>
              <div className="text-sm text-gray-600">Loading Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">2.1s</div>
              <div className="text-sm text-gray-600">Avg Load Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Happy Hosts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">40%</div>
              <div className="text-sm text-gray-600">Avg Booking Increase</div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers - Unique Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <div
              key={index}
              onClick={() => setSelectedTier(index)}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedTier === index ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              {/* Recommended Badge */}
              {tier.recommended && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular Choice
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`h-full bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 ${
                selectedTier === index 
                  ? 'border-green-500 shadow-2xl' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                  <p className="text-gray-500 text-sm">{tier.tagline}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {tier.price}
                    <span className="text-lg text-gray-500 ml-2">LKR</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Delivered in {tier.duration}</span>
                  </div>
                </div>

                {/* ROI Indicator */}
                <div className="bg-green-50 rounded-lg p-4 mb-8 border border-green-100">
                  <div className="text-center">
                    <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-green-800">{tier.roi}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className={`flex items-center text-sm ${
                      feature.included ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                        feature.included 
                          ? 'bg-green-100' 
                          : 'bg-gray-100'
                      }`}>
                        {feature.included ? (
                          <Zap className="w-3 h-3 text-green-600" />
                        ) : (
                          <div className="w-2 h-2 bg-gray-300 rounded-full" />
                        )}
                      </div>
                      <span className={feature.included ? '' : 'line-through'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    selectedTier === index
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Globe,
              title: "Sri Lanka Optimized",
              description: "Fast loading on Dialog, Mobitel, and SLT networks"
            },
            {
              icon: Award,
              title: "Conversion Focused",
              description: "Every element designed to turn visitors into bookings"
            },
            {
              icon: Sparkles,
              title: "SEO Included",
              description: "Rank higher than your competition on Google"
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Plan Fits Your Goals?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your property and create a custom strategy. 
            No pressure, just honest advice.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 group"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection