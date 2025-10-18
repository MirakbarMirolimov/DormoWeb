import React from 'react'
import { ShoppingBag, Users, DollarSign, MessageCircle, BarChart3, Shield, Download, Menu, X, GraduationCap, Star, Sparkles, Apple, Play } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ccbcLogo from '../assets/ccbc_logo.png'
import dormoIcon from '../assets/icon.png'
import dormoSmallIcon from '../assets/small_icon.png'
import onboarding1 from '../assets/onBoardingImg1.png'
import onboarding2 from '../assets/onBoardingImg2.png'
import onboarding3 from '../assets/onBoardingImg3.png'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [particles, setParticles] = useState([])

  // Create floating particles
  useEffect(() => {
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 20,
        })
      }
      setParticles(newParticles)
    }
    createParticles()
  }, [])

  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary-600" />,
      title: "Buy & Sell",
      description: "Easily buy and sell textbooks, electronics, furniture, and more with fellow CCBC students."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Student Community",
      description: "Connect with verified CCBC students in a safe and trusted marketplace environment."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary-600" />,
      title: "Great Deals",
      description: "Find affordable items and earn money by selling things you no longer need."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary-600" />,
      title: "Secure Messaging",
      description: "Chat safely with other students to arrange pickups and negotiate prices."
    }
  ]

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={dormoIcon} alt="Dormo" className="h-20 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#download" className="text-white/80 hover:text-white transition-colors">Early Access</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              <button className="btn-primary">Get Started</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#download" className="text-white/80 hover:text-white transition-colors">Early Access</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* CCBC Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20 animate-fade-in card-hover">
              <img src={ccbcLogo} alt="CCBC" className="w-6 h-6" />
              <span className="text-white/90 text-sm font-medium">Exclusively for CCBC Students</span>
            </div>
            
            <div className="mb-8 animate-slide-up">
              {/* Large Brand Logo */}
              <div className="flex justify-center mb-8">
                <img 
                  src={dormoIcon} 
                  alt="Dormo" 
                  className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 animate-pulse" 
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-glow">
                The Student Marketplace
                <span className="inline-block ml-4">
                  <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 animate-pulse" />
                </span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              The exclusive marketplace for CCBC students. Buy, sell, and trade textbooks, electronics, furniture, and more with your fellow students safely and easily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button className="btn-primary text-lg px-8 py-4 group">
                <GraduationCap className="w-5 h-5 mr-2 inline group-hover:rotate-12 transition-transform duration-300" />
                Get Early Access
              </button>
              <button className="btn-secondary text-lg px-8 py-4 group">
                <Sparkles className="w-5 h-5 mr-2 inline group-hover:rotate-180 transition-transform duration-300" />
                Learn More
              </button>
            </div>
            
            {/* App Store Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <Apple className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 rounded-sm flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Student Notice */}
            <p className="text-white/60 text-sm mt-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
              Currently available for CCBC students only. Use your student email to join the marketplace.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 floating-element">
          <ShoppingBag className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
        </div>
        <div className="absolute top-40 right-20 floating-element-delayed">
          <DollarSign className="w-8 h-8 text-green-400 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-20 left-20 floating-element-slow">
          <Users className="w-4 h-4 text-purple-400 drop-shadow-lg" />
        </div>
        <div className="absolute top-60 left-1/2 floating-element">
          <MessageCircle className="w-5 h-5 text-blue-400 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-40 right-10 floating-element-delayed">
          <Star className="w-6 h-6 text-pink-400 drop-shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-glow">
              Why Choose Dormo?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover why Dormo is the safest and most convenient marketplace for CCBC students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience Dormo
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              See how Dormo makes buying and selling easier for CCBC students with our intuitive marketplace platform.
            </p>
          </div>

          {/* Onboarding Images Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-hover bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group animate-slide-in-left">
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={onboarding1} alt="Dormo Onboarding 1" className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                Welcome to the Marketplace
              </h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                Join the exclusive CCBC student marketplace and start buying and selling today.
              </p>
            </div>
            <div className="card-hover bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={onboarding2} alt="Dormo Onboarding 2" className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                Browse & Discover
              </h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                Find great deals on textbooks, electronics, furniture, and more from fellow students.
              </p>
            </div>
            <div className="card-hover bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 group animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={onboarding3} alt="Dormo Onboarding 3" className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                Sell & Earn
              </h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                List your items easily and earn money while helping other students save.
              </p>
            </div>
          </div>

          {/* App Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for CCBC Students
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Dormo understands the unique needs of student life. Our marketplace is designed to help you save money, earn cash, and connect with your campus community safely.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                  <span className="text-white">Student-verified community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-blue-400" />
                  <span className="text-white">Safe and secure transactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-6 h-6 text-green-400" />
                  <span className="text-white">Save money on student essentials</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                  <img src={dormoIcon} alt="Dormo App" className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Dormo App</h3>
                  <p className="text-white/80">Early Access for CCBC Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Marketplace?
          </h2>
          <p className="text-xl text-white/80 mb-4">
            Be among the first CCBC students to experience the safest and most convenient student marketplace.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src={ccbcLogo} alt="CCBC" className="w-8 h-8" />
              <span className="text-white font-semibold">CCBC Students Only</span>
            </div>
            <p className="text-white/70 text-sm">
              You'll need your CCBC student email address to register for early access.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              <GraduationCap className="w-5 h-5 mr-2 inline" />
              Request Early Access
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More About Beta
            </button>
          </div>
          <p className="text-white/60 text-sm mt-6">
            Coming soon to iOS and Android • Currently in beta testing
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/20 backdrop-blur-md border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center justify-start mb-4">
                <img src={dormoIcon} alt="Dormo" className="h-16 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" />
              </div>
              <p className="text-white/70">
                The exclusive student marketplace designed for CCBC students to buy, sell, and save money on campus essentials.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#features" className="block text-white/70 hover:text-white transition-colors">Features</a>
                <a href="#download" className="block text-white/70 hover:text-white transition-colors">Early Access</a>
                <Link to="/privacy" className="block text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-2 text-white/70">
                <p>Email: hello@dormo.app</p>
                <p>Support: support@dormo.app</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <img src={dormoIcon} alt="Dormo" className="h-12 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>
            <p className="text-white/70">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
