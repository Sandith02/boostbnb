import { useState, useEffect } from 'react'
import { 
  Star, 
  Quote, 
  TrendingUp, 
  Calendar, 
  MapPin,
  ArrowLeft,
  ArrowRight,
  Play,
  Users,
  Globe,
  Award,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: "Priya Perera",
      property: "Luxury Villa, Unawatuna",
      location: "Galle, Sri Lanka",
      avatar: "PP",
      rating: 5,
      bookingIncrease: "65%",
      timeFrame: "3 months",
      quote: "BoostBnB transformed my struggling villa into the most booked property in Unawatuna. The website they built is absolutely stunning, and the direct booking system has saved me thousands in platform fees. My revenue increased by 65% in just 3 months!",
      results: [
        { metric: "Booking Increase", value: "65%", icon: TrendingUp },
        { metric: "Revenue Growth", value: "LKR 2.8M", icon: Calendar },
        { metric: "Direct Bookings", value: "78%", icon: Users }
      ],
      beforeAfter: {
        before: "15 bookings/month",
        after: "38 bookings/month"
      },
      featured: true
    },
    {
      id: 2,
      name: "David Chen",
      property: "Modern Apartment",
      location: "Colombo, Sri Lanka", 
      avatar: "DC",
      rating: 5,
      bookingIncrease: "42%",
      timeFrame: "2 months",
      quote: "As an expat investor, I needed a local team I could trust. BoostBnB delivered beyond expectations. The website showcases my apartment beautifully, and the SEO work has me ranking #1 for 'luxury apartment Colombo'. The ROI was incredible!",
      results: [
        { metric: "Search Ranking", value: "#1", icon: TrendingUp },
        { metric: "Monthly Revenue", value: "+42%", icon: Calendar },
        { metric: "Occupancy Rate", value: "89%", icon: CheckCircle }
      ],
      beforeAfter: {
        before: "52% occupancy",
        after: "89% occupancy" 
      }
    },
    {
      id: 3,
      name: "Sarah Williams",
      property: "Beachfront Cottage",
      location: "Mirissa, Sri Lanka",
      avatar: "SW",
      rating: 5,
      bookingIncrease: "73%",
      timeFrame: "4 months",
      quote: "I was skeptical about investing in a website, but BoostBnB proved me wrong. Not only did my bookings increase by 73%, but I'm now getting guests from countries I'd never reached before. The quality of inquiries has improved dramatically too.",
      results: [
        { metric: "International Guests", value: "+156%", icon: Globe },
        { metric: "Booking Value", value: "+31%", icon: TrendingUp },
        { metric: "Return Guests", value: "45%", icon: Users }
      ],
      beforeAfter: {
        before: "Local guests only",
        after: "Global reach"
      }
    },
    {
      id: 4,
      name: "Ravi Fernando",
      property: "Heritage Home",
      location: "Kandy, Sri Lanka",
      avatar: "RF",
      rating: 5,
      bookingIncrease: "85%",
      timeFrame: "6 months",
      quote: "Our family heritage home was barely getting noticed. BoostBnB created a website that tells our story beautifully and attracts guests who appreciate authentic experiences. We're now booked solid and have a waiting list!",
      results: [
        { metric: "Story Engagement", value: "+220%", icon: Award },
        { metric: "Premium Bookings", value: "+85%", icon: Star },
        { metric: "Guest Satisfaction", value: "4.9/5", icon: CheckCircle }
      ],
      beforeAfter: {
        before: "Generic listing",
        after: "Unique brand story"
      }
    },
    {
      id: 5,
      name: "Lisa Thompson",
      property: "Eco Resort",
      location: "Ella, Sri Lanka", 
      avatar: "LT",
      rating: 5,
      bookingIncrease: "128%",
      timeFrame: "8 months",
      quote: "BoostBnB understood our eco-tourism vision perfectly. The website highlights our sustainability efforts and attracts environmentally conscious travelers. We've more than doubled our bookings and built a community of returning guests.",
      results: [
        { metric: "Eco-Travelers", value: "+128%", icon: Globe },
        { metric: "Community Growth", value: "850+", icon: Users },
        { metric: "Sustainability Score", value: "9.2/10", icon: Award }
      ],
      beforeAfter: {
        before: "No brand identity",
        after: "Eco-leader status"
      }
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false) 
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white" >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full blur-3xl" style={{ background: '#059669', top: '15%', right: '10%' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl" style={{ background: '#047857', bottom: '15%', left: '10%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4 fill-current" />
            Real Stories, Real Results
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Success Stories from
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Happy Property Owners
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped 50+ property owners 
            transform their Airbnb businesses and achieve remarkable growth.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Testimonial Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
              
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-8">
                <Quote className="w-8 h-8 text-green-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-500 ml-2">(5.0/5)</span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-8 italic">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentTestimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-600">{currentTestimonial.property}</div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {currentTestimonial.location}
                  </div>
                </div>
              </div>

              {/* Before/After Highlight */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-sm text-gray-600 mb-2">Before BoostBnB</div>
                    <div className="text-lg font-semibold text-gray-900">{currentTestimonial.beforeAfter.before}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-2">After BoostBnB</div>
                    <div className="text-lg font-semibold text-green-600">{currentTestimonial.beforeAfter.after}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Metrics */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              
              {/* Key Achievement */}
              <div className="text-center lg:text-left mb-8">
                <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  +{currentTestimonial.bookingIncrease}
                </div>
                <div className="text-lg text-gray-600">
                  Booking increase in {currentTestimonial.timeFrame}
                </div>
              </div>

              {/* Detailed Results */}
              {currentTestimonial.results.map((result, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <result.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6 mb-16">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-green-50 hover:border-green-300 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTestimonial(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial 
                    ? 'bg-green-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-green-50 hover:border-green-300 transition-all duration-300 group"
          >
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.filter((_, index) => index !== activeTestimonial).slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              onClick={() => {
                setActiveTestimonial(testimonials.findIndex(t => t.id === testimonial.id))
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.property}</div>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial.quote.substring(0, 120)}..."
              </p>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-green-600">
                  +{testimonial.bookingIncrease}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.timeFrame}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Stats */}
        {/* <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Join Our Success Community</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              { icon: Users, value: '50+', label: 'Happy Clients' },
              { icon: TrendingUp, value: '40%', label: 'Average Growth' },
              { icon: Globe, value: '15+', label: 'Countries' },
              { icon: Star, value: '4.9', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group no-underline"
          >
            Start Your Success Story Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default TestimonialsSection