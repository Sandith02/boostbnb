// import { ArrowRight, Star, Users, Globe, TrendingDown, TrendingUp, Frown, Smile, AlertCircle, CheckCircle } from 'lucide-react'
// import { useState, useEffect } from 'react'

// function Hero() {
//   const [currentState, setCurrentState] = useState('before') // 'before', 'after'
//   const [autoTransition, setAutoTransition] = useState(true)

//   // Auto transition effect - Default shows "before", then switches to "after" after 5 seconds
//   useEffect(() => {
//     if (!autoTransition) return
    
//     const timer = setTimeout(() => {
//       if (currentState === 'before') {
//         setCurrentState('after')
//       }
//     }, 5000) // Show "before" for 5 seconds, then switch to "after"

//     return () => clearTimeout(timer)
//   }, [currentState, autoTransition])

//   const handleStateChange = (state) => {
//     setAutoTransition(false)
//     setCurrentState(state)
//     // Resume auto transition after 10 seconds of user interaction
//     setTimeout(() => setAutoTransition(true), 10000)
//   }

//   return (
//     <section 
//       id="home" 
//       className="h-screen font-raleway relative overflow-hidden pt-40"
//       role="banner"
//       aria-label="Hero section introducing BoostBnB Airbnb marketing services"
//     >
//       {/* Background with Smooth Transition Effect */}
//       <div className="absolute inset-0">
//         {/* Before State Background */}
//         <div 
//           className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
//             currentState === 'before' ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)'
//           }}
//         />
        
//         {/* After State Background */}
//         <div 
//           className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
//             currentState === 'after' ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)'
//           }}
//         />

//         {/* Animated Overlay Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           <div 
//             className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse transition-all duration-2000"
//             style={{
//               background: currentState === 'before' ? '#dc2626' : '#10b981',
//               top: '10%',
//               left: '10%',
//               animation: 'float 6s ease-in-out infinite'
//             }}
//           />
//           <div 
//             className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse transition-all duration-2000"
//             style={{
//               background: currentState === 'before' ? '#b91c1c' : '#059669',
//               bottom: '10%',
//               right: '10%',
//               animation: 'float 8s ease-in-out infinite reverse'
//             }}
//           />
//         </div>
//       </div>

//       {/* Trust Badge */}
//       {/* <div className="relative z-20 pt-4 sm:pt-6">
//         <div className="flex justify-center px-4">
//           <div className="inline-flex items-center bg-white/90 backdrop-blur-md text-gray-800 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 shadow-2xl">
//             <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-yellow-500 fill-current" aria-hidden="true" />
//             <span className="text-xs sm:text-sm font-medium">Trusted by 50+ Property Owners in Sri Lanka</span>
//           </div>
//         </div>
//       </div> */}

//       {/* Main Content Container */}
//       <div className="relative z-10 h-100vh flex items-center">
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
//           {/* State Toggle Controls */}
//           <div className="flex justify-center mb-6 sm:mb-8">
//             <div className="flex space-x-2 sm:space-x-4">
//               {[
//                 { key: 'before', label: 'Before BoostBnB', shortLabel: 'Before', icon: Frown },
//                 { key: 'after', label: 'After BoostBnB', shortLabel: 'After', icon: Smile }
//               ].map(({ key, label, shortLabel, icon: Icon }) => (
//                 <button
//                   key={key}
//                   onClick={() => handleStateChange(key)}
//                   className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-500 flex items-center space-x-2 text-sm sm:text-base ${
//                     currentState === key 
//                       ? 'bg-white text-gray-800 shadow-xl scale-105' 
//                       : 'bg-white/20 text-white hover:bg-white/30'
//                   }`}
//                 >
//                   <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
//                   <span className="hidden sm:inline">{label}</span>
//                   <span className="sm:hidden">{shortLabel}</span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            
//             {/* Left Column - Text Content */}
//             <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              
//               {/* Status Badge */}
//               <div className="flex justify-center lg:justify-start">
//                 <div className={`inline-flex items-center rounded-full px-4 py-2 transition-all duration-500 ${
//                   currentState === 'before' 
//                     ? 'bg-red-100 text-red-800' 
//                     : 'bg-green-100 text-green-800'
//                 }`}>
//                   {currentState === 'before' ? (
//                     <>
//                       <AlertCircle className="w-4 h-4 mr-2" />
//                       <span className="text-sm font-medium">Struggling Airbnb Host</span>
//                     </>
//                   ) : (
//                     <>
//                       <CheckCircle className="w-4 h-4 mr-2" />
//                       <span className="text-sm font-medium">Successful Host</span>
//                     </>
//                   )}
//                 </div>
//               </div>
              
//               {/* Main Heading */}
//               <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
//                 {currentState === 'before' ? (
//                   <>
//                     Low Bookings?
//                     <br />
//                     <span className="text-red-200">Empty Calendar?</span>
//                   </>
//                 ) : (
//                   <>
//                     Boost Your{' '}
//                     <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
//                       Airbnb Bookings
//                     </span>
//                     <br />with Custom Websites
//                   </>
//                 )}
//               </h1>
              
//               {/* Description */}
//               <p className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl transition-all duration-500 ${
//                 currentState === 'before' ? 'text-red-100' : 'text-green-100'
//               }`}>
//                 {currentState === 'before' ? (
//                   <>
//                     Many <strong>Airbnb hosts in Sri Lanka</strong> struggle with inconsistent bookings, 
//                     poor online visibility, and losing guests to competitors with better marketing.
//                   </>
//                 ) : (
//                   <>
//                     Professional <strong>custom website design</strong> and <strong>digital marketing services</strong> for 
//                     Airbnb & vacation rental hosts in <strong>Sri Lanka</strong> and worldwide. 
//                     Increase your booking rates by up to 40%.
//                   </>
//                 )}
//               </p>

//               {/* Stats Row */}
//               <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto lg:mx-0">
//                 {currentState === 'before' ? (
//                   <>
//                     <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-red-300/20 text-center">
//                       <TrendingDown className="w-6 h-6 sm:w-7 sm:h-7 text-red-200 mb-2 mx-auto" />
//                       <div className="text-xl sm:text-2xl font-bold text-red-200 mb-1">30%</div>
//                       <div className="text-red-100 text-xs sm:text-sm">Average Occupancy</div>
//                     </div>
//                     <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-red-300/20 text-center">
//                       <Frown className="w-6 h-6 sm:w-7 sm:h-7 text-red-200 mb-2 mx-auto" />
//                       <div className="text-xl sm:text-2xl font-bold text-red-200 mb-1">Low</div>
//                       <div className="text-red-100 text-xs sm:text-sm">Guest Confidence</div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-green-300/20 text-center">
//                       <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-green-200 mb-2 mx-auto" />
//                       <div className="text-xl sm:text-2xl font-bold text-green-200 mb-1">85%+</div>
//                       <div className="text-green-100 text-xs sm:text-sm">Average Occupancy</div>
//                     </div>
//                     <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 sm:p-4 border border-green-300/20 text-center">
//                       <Smile className="w-6 h-6 sm:w-7 sm:h-7 text-green-200 mb-2 mx-auto" />
//                       <div className="text-xl sm:text-2xl font-bold text-green-200 mb-1">4.9★</div>
//                       <div className="text-green-100 text-xs sm:text-sm">Client Rating</div>
//                     </div>
//                   </>
//                 )}
//               </div>

//               {/* CTA Buttons - Only show in "after" state */}
//               {currentState === 'after' && (
//                 <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
//                   <a 
//                     href="#contact" 
//                     className="group bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-green-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center no-underline"
//                     aria-label="Get your free Airbnb marketing consultation"
//                   >
//                     Get Your Free Consultation
//                     <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
//                   </a>
                  
//                   <button 
//                     className="text-white hover:text-green-200 font-semibold text-base sm:text-lg flex items-center justify-center hover:scale-105 transition-all duration-200"
//                     aria-label="Watch our Airbnb marketing process video"
//                   >
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 hover:bg-white/30 transition-colors" aria-hidden="true">
//                       <div className="w-0 h-0 border-l-[5px] sm:border-l-[6px] border-l-white border-t-[3px] sm:border-t-[4px] border-t-transparent border-b-[3px] sm:border-b-[4px] border-b-transparent ml-1"></div>
//                     </div>
//                     Watch Our Process
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Right Column - Visual Content */}
//             <div className="mt-6 lg:mt-0">
//               {currentState === 'before' ? (
//                 <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-red-300/20 shadow-2xl">
//                   <div className="text-center mb-4">
//                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
//                       <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-300" />
//                     </div>
//                     <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Common Struggles</h3>
//                   </div>
                  
//                   <div className="space-y-3">
//                     {[
//                       'Generic Airbnb listing gets lost in the crowd',
//                       'No direct bookings - losing 15% to Airbnb fees',
//                       'Poor local SEO - invisible to direct searches',
//                       'No professional marketing materials'
//                     ].map((issue, index) => (
//                       <div key={index} className="flex items-start space-x-2">
//                         <AlertCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
//                         <span className="text-red-100 text-sm">{issue}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="space-y-3 sm:space-y-4">
//                   {[
//                     { icon: TrendingUp, value: '40%', label: 'Average Booking Increase' },
//                     { icon: Users, value: '50+', label: 'Happy Clients' },
//                     { icon: Globe, value: '15+', label: 'Countries Served' }
//                   ].map((stat, index) => {
//                     const IconComponent = stat.icon
//                     return (
//                       <div 
//                         key={index}
//                         className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-green-300/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
//                       >
//                         <div className="flex items-center">
//                           <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-lg flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform">
//                             <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 text-green-200 ${index === 0 ? 'rotate-45' : ''}`} aria-hidden="true" />
//                           </div>
//                           <div>
//                             <div className="text-2xl sm:text-3xl font-bold text-green-200 mb-1">{stat.value}</div>
//                             <div className="text-green-100 font-medium text-sm sm:text-base">{stat.label}</div>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SEO Schema */}
//       <script 
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ProfessionalService",
//             "name": "BoostBnB - Airbnb Marketing Services",
//             "description": "Professional custom website design and digital marketing services for Airbnb & vacation rental hosts in Sri Lanka and worldwide",
//             "url": typeof window !== 'undefined' ? window.location.origin : '',
//             "serviceType": "Digital Marketing",
//             "areaServed": {
//               "@type": "Country",
//               "name": "Sri Lanka"
//             },
//             "provider": {
//               "@type": "Organization",
//               "name": "BoostBnB"
//             }
//           })
//         }}
//       />

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         .shadow-3xl {
//           box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
//         }
//       `}</style>
//     </section>
//   )
// }

// export default Hero


import { ArrowRight, Star, Users, Globe, TrendingUp, Smile, CheckCircle, Play, Loader, Check, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

function Hero() {
  const [showProcess, setShowProcess] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const processSteps = [
    { title: "Analyzing Your Property", progress: 25 },
    { title: "Creating Custom Strategy", progress: 50 },
    { title: "Building Your Website", progress: 75 },
    { title: "Launching Your Success", progress: 100 }
  ]

  const handleShowProcess = () => {
    setIsLoading(true)
    setShowProcess(true)
    
    // Simulate loading steps
    const interval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev >= processSteps.length - 1) {
          clearInterval(interval)
          setIsLoading(false)
          return prev
        }
        return prev + 1
      })
    }, 1200)
  }

  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="h-screen font-raleway relative overflow-hidden pt-20"
        role="banner"
        aria-label="Hero section introducing BoostBnB Airbnb marketing services"
      >
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)'
          }}
        >
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
              style={{
                background: '#10b981',
                top: '10%',
                left: '10%',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
            <div 
              className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
              style={{
                background: '#059669',
                bottom: '10%',
                right: '10%',
                animation: 'float 8s ease-in-out infinite reverse'
              }}
            />
          </div>
        </div>

        {/* Trust Badge */}
       

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column - Text Content */}
              <div className="space-y-6 text-center lg:text-left">
                
                {/* Status Badge */}
                {/* <div className="flex justify-center lg:justify-start">
                  <div className="inline-flex items-center rounded-full px-4 py-2" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Successful Host</span>
                  </div>
                </div>
                 */}
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Boost Your{' '}
                  <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                    Airbnb Bookings
                  </span>
                  <br />with Custom Websites
                </h1>
                
                {/* Description */}
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl" style={{ color: '#d1fae5' }}>
                  Professional <strong>custom website design</strong> and <strong>digital marketing services</strong> for 
                  Airbnb & vacation rental hosts in <strong>Sri Lanka</strong> and worldwide. 
                  Increase your booking rates by up to 40%.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-green-300/20 text-center">
                    <TrendingUp className="w-8 h-8 mb-3 mx-auto" style={{ color: '#bbf7d0' }} />
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#bbf7d0' }}>85%+</div>
                    <div className="text-xs sm:text-sm" style={{ color: '#d1fae5' }}>Average Occupancy</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-green-300/20 text-center">
                    <Smile className="w-8 h-8 mb-3 mx-auto" style={{ color: '#bbf7d0' }} />
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#bbf7d0' }}>4.9★</div>
                    <div className="text-xs sm:text-sm" style={{ color: '#d1fae5' }}>Client Rating</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <a 
                    href="#contact" 
                    className="group bg-white px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center no-underline"
                    style={{ color: '#059669' }}
                    aria-label="Get your free Airbnb marketing consultation"
                  >
                    Get Your Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                  
                  <button 
                    onClick={handleShowProcess}
                    className="text-white hover:scale-105 transition-all duration-200 font-semibold text-lg flex items-center justify-center"
                    style={{ color: '#d1fae5' }}
                    aria-label="See how we transform your Airbnb business"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3 hover:bg-white/30 transition-colors backdrop-blur-sm" aria-hidden="true">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    See How We Do This
                  </button>
                </div>
              </div>

              {/* Right Column - Success Metrics */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: TrendingUp, value: '40%', label: 'Average Booking Increase', color: '#10b981' },
                  { icon: Users, value: '50+', label: 'Happy Clients', color: '#06b6d4' },
                  { icon: Globe, value: '15+', label: 'Countries Served', color: '#8b5cf6' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-green-300/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                    >
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                          <IconComponent 
                            className={`w-8 h-8 ${index === 0 ? 'rotate-45' : ''}`}
                            style={{ color: '#bbf7d0' }}
                            aria-hidden="true" 
                          />
                        </div>
                        <div>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#bbf7d0' }}>{stat.value}</div>
                          <div className="font-medium" style={{ color: '#d1fae5' }}>{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Scroll Indicator */}
            {!showProcess && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-white/60" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      {showProcess && (
        <section className="min-h-screen bg-white relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#111827' }}>
                How We Transform Your Business
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
                Our proven 4-step process that has helped 50+ property owners increase their bookings by an average of 40%
              </p>
            </div>

            {/* Interactive Process Steps */}
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center mb-8 p-6 rounded-2xl border-2 transition-all duration-500 ${
                    loadingStep >= index 
                      ? 'border-green-500 bg-green-50 shadow-lg' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {/* Step Number/Status */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 transition-all duration-500 ${
                    loadingStep > index 
                      ? 'bg-green-500' 
                      : loadingStep === index && isLoading
                      ? 'bg-blue-500' 
                      : 'bg-gray-200'
                  }`}>
                    {loadingStep > index ? (
                      <Check className="w-8 h-8 text-white" />
                    ) : loadingStep === index && isLoading ? (
                      <Loader className="w-8 h-8 text-white animate-spin" />
                    ) : (
                      <span className="text-xl font-bold" style={{ color: '#6b7280' }}>{index + 1}</span>
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                      loadingStep >= index ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          loadingStep >= index ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                        style={{ 
                          width: loadingStep >= index ? '100%' : '0%'
                        }}
                      />
                    </div>
                    
                    <p className={`transition-colors duration-500 ${
                      loadingStep >= index ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {index === 0 && "We study your property, target audience, and competition to create a winning strategy."}
                      {index === 1 && "Our team develops a custom marketing plan tailored specifically to your property and goals."}
                      {index === 2 && "We build your professional website with booking integration and SEO optimization."}
                      {index === 3 && "Your new marketing system goes live and starts attracting more direct bookings immediately."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            {!isLoading && loadingStep >= processSteps.length - 1 && (
              <div className="text-center mt-16 animate-fade-in">
                <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#065f46' }}>
                    Ready to Transform Your Airbnb Business?
                  </h3>
                  <p className="text-lg mb-6" style={{ color: '#047857' }}>
                    Join 50+ successful property owners who have increased their bookings with our proven system.
                  </p>
                  <a 
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 no-underline"
                    style={{ backgroundColor: '#059669', color: 'white' }}
                  >
                    Start Your Transformation Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  )
}

export default Hero