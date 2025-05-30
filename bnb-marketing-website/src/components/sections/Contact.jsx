import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Users,
  TrendingUp
} from 'lucide-react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    location: '',
    currentBookings: '',
    message: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        location: '',
        currentBookings: '',
        message: '',
        budget: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick questions? Chat with us instantly",
      action: "Start Chat",
      link: "https://wa.me/94771234567",
      color: "bg-green-500",
      available: "24/7 Response"
    },
    {
      icon: Phone,
      title: "Schedule a Call",
      description: "30-minute strategy consultation",
      action: "Book Call",
      link: "tel:+94771234567",
      color: "bg-blue-500",
      available: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed inquiries welcome",
      action: "Send Email",
      link: "mailto:hello@boostbnb.lk",
      color: "bg-purple-500",
      available: "Response within 4 hours"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you build my website?",
      answer: "Most projects are completed within 2-4 weeks, depending on complexity. We'll give you an exact timeline after our initial consultation."
    },
    {
      question: "Do you work with properties outside Sri Lanka?",
      answer: "Absolutely! We've helped property owners in 15+ countries. Our strategies adapt to local markets while maintaining global best practices."
    },
    {
      question: "What if I don't see results?",
      answer: "We're confident in our process. Most clients see a 20-40% increase in inquiries within 60 days. We provide ongoing support to ensure your success."
    }
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full blur-3xl" style={{ background: '#059669', top: '10%', left: '5%' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl" style={{ background: '#047857', bottom: '10%', right: '5%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-4 h-4" />
            Let's Start Your Success Story
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Airbnb Business?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free consultation today. We'll analyze your property, discuss your goals, 
            and show you exactly how we can increase your bookings.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 no-underline"
            >
              <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-600 font-semibold">{method.action}</span>
                <ArrowRight className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-500">{method.available}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Main Contact Form + Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
              <p className="text-gray-600">Tell us about your property and we'll create a custom growth strategy for you.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h4>
                <p className="text-gray-600 mb-6">We've received your inquiry and will contact you within 4 hours with your custom strategy.</p>
                <div className="text-sm text-gray-500">
                  Check your email for confirmation details
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="villa">Villa</option>
                      <option value="room">Private Room</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Property Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Colombo, Sri Lanka"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Bookings</label>
                    <select
                      name="currentBookings"
                      value={formData.currentBookings}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Current booking rate</option>
                      <option value="0-5">0-5 bookings/month</option>
                      <option value="6-15">6-15 bookings/month</option>
                      <option value="16-25">16-25 bookings/month</option>
                      <option value="25+">25+ bookings/month</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your budget</option>
                    <option value="35000-55000">LKR 35,000 - 55,000</option>
                    <option value="55000-85000">LKR 55,000 - 85,000</option>
                    <option value="85000+">LKR 85,000+</option>
                    <option value="custom">Custom Budget</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Goals</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="What challenges are you facing? What results are you hoping to achieve?"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Your Request...
                    </>
                  ) : (
                    <>
                      Get My Free Strategy Session
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Contact Info + FAQs */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 text-sm mb-2">We typically respond within 4 hours</p>
                    <a href="mailto:hello@boostbnb.lk" className="text-green-600 font-semibold hover:text-green-700">
                      hello@boostbnb.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call or WhatsApp</h4>
                    <p className="text-gray-600 text-sm mb-2">Mon-Fri: 9:00 AM - 6:00 PM (GMT+5:30)</p>
                    <a href="tel:+94771234567" className="text-green-600 font-semibold hover:text-green-700">
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600 text-sm mb-2">Serving globally from Sri Lanka</p>
                    <p className="text-green-600 font-semibold">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-green-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-xs text-gray-600">Avg Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">4.9★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-8">Trusted by 50+ property owners across 15+ countries</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              { icon: Globe, label: "15+ Countries" },
              { icon: Users, label: "50+ Clients" },
              { icon: TrendingUp, label: "40% Avg Growth" },
              { icon: Star, label: "4.9/5 Rating" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <item.icon className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection