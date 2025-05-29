import { useState } from 'react'
import { 
  Search, 
  Palette, 
  Rocket, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Globe,
  Calendar,
  MessageCircle,
  Zap,
  Target
} from 'lucide-react'

function How() {
  const [activeStep, setActiveStep] = useState(0)

  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Discovery & Strategy",
      duration: "Week 1",
      shortDesc: "We analyze your property and competition",
      description: "We dive deep into understanding your unique property, target audience, local market competition, and current booking performance. This foundation ensures we create a strategy that works specifically for your business.",
      deliverables: [
        "Property analysis report",
        "Competitor research",
        "Target audience profiling",
        "Custom marketing strategy",
        "Timeline & milestone planning"
      ],
      whatToExpect: "You'll receive a comprehensive strategy document and have a detailed consultation call to align on goals and approach."
    },
    {
      id: 2,
      icon: Palette,
      title: "Design & Development",
      duration: "Week 2-3",
      shortDesc: "We create your stunning website",
      description: "Our team designs and builds your custom website with professional photography integration, mobile optimization, and conversion-focused elements. Every pixel is crafted to turn visitors into bookings.",
      deliverables: [
        "Custom website design",
        "Mobile-responsive layout",
        "Professional gallery setup",
        "Booking integration",
        "SEO optimization",
        "Performance optimization"
      ],
      whatToExpect: "You'll see design mockups first, then watch your website come to life with regular progress updates and feedback opportunities."
    },
    {
      id: 3,
      icon: Rocket,
      title: "Launch & Optimization",
      duration: "Week 4",
      shortDesc: "Your website goes live with full support",
      description: "We launch your website, set up analytics tracking, and ensure everything works perfectly. You'll also receive training on how to manage your new marketing system and update content.",
      deliverables: [
        "Website launch",
        "Analytics setup",
        "Training session",
        "Admin access & tutorials",
        "Technical documentation",
        "30-day support period"
      ],
      whatToExpect: "Your website goes live with full monitoring. You'll get hands-on training and immediate support for any questions or adjustments needed."
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Growth & Results",
      duration: "Ongoing",
      shortDesc: "Watch your bookings increase",
      description: "With your new website live, you'll start seeing increased direct bookings, better search rankings, and improved guest confidence. We provide ongoing support and optimization recommendations.",
      deliverables: [
        "Performance monitoring",
        "Monthly analytics reports",
        "Optimization recommendations",
        "Technical support",
        "Feature updates",
        "Growth strategy consultations"
      ],
      whatToExpect: "Within 30-60 days, you'll typically see a 20-40% increase in booking inquiries and improved conversion rates from visitors to bookings."
    }
  ]

  const timelineStats = [
    { icon: Clock, value: '4 weeks', label: 'Average Project Timeline' },
    { icon: CheckCircle, value: '7 days', label: 'First Design Preview' },
    { icon: Rocket, value: '48 hours', label: 'Launch to Live' }
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full blur-3xl bg-green-500" style={{ top: '10%', right: '10%' }} />
        <div className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-500" style={{ bottom: '20%', left: '10%' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Our Proven 4-Step Process
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How We Transform Your 
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Airbnb Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach has helped 50+ property owners increase their bookings by an average of 40%. 
            Here's exactly how we do it.
          </p>
        </div>

        {/* Timeline Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {timelineStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Step Navigation */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">The Process</h3>
            
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer group transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'border-green-500 bg-green-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}>
                  <div className="flex items-start space-x-4">
                    {/* Step Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-green-100 group-hover:text-green-600'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                          activeStep === index ? 'text-green-700' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h4>
                        <span className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                          activeStep === index
                            ? 'bg-green-200 text-green-800'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {step.duration}
                        </span>
                      </div>
                      <p className={`text-sm transition-colors duration-300 ${
                        activeStep === index ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {step.shortDesc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      activeStep === index
                        ? 'text-green-500 opacity-100'
                        : 'text-gray-400 opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    {(() => {
                      const IconComponent = processSteps[activeStep].icon
                      return <IconComponent className="w-8 h-8" />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                    <p className="text-green-100">{processSteps[activeStep].duration}</p>
                  </div>
                </div>
                <p className="text-lg text-green-50 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>
              </div>

              {/* Step Content */}
              <div className="p-8">
                {/* Deliverables */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    What You'll Receive
                  </h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].deliverables.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What to Expect */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <MessageCircle className="w-5 h-5 text-blue-500 mr-2" />
                    What to Expect
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {processSteps[activeStep].whatToExpect}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Typical Results After 60 Days</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {[
                { icon: TrendingUp, value: '40%', label: 'Booking Increase' },
                { icon: Users, value: '65%', label: 'Higher Conversion' },
                { icon: Globe, value: '3x', label: 'More Website Traffic' },
                { icon: Star, value: '4.9★', label: 'Client Satisfaction' }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-green-100">{metric.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Start Your Transformation Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How