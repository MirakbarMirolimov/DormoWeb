import { useState, useEffect } from 'react'
import dormoLogo from './assets/icon.png'
import ccbcLogo from './assets/ccbc_logo.png'
import './App.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 1 - scrollY / 500
        }}>
          
          {/* Dormo Logo */}
          <img 
            src={dormoLogo} 
            alt="Dormo Logo" 
            className={`hero-logo ${isVisible ? 'smooth-fade-in-delay' : ''}`}
          />
          
          <h1 className={`hero-title ${isVisible ? 'slide-up' : ''}`}>
            Welcome to Dormo
          </h1>
          <p className={`hero-subtitle ${isVisible ? 'slide-up-delay' : ''}`}>
            Your Student Marketplace Platform
          </p>
          <button 
            className={`cta-button ${isVisible ? 'slide-up-delay-2' : ''}`}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            Explore More
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Dormo</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>For Students</h3>
              <p>Buy and sell textbooks, furniture, and more within your campus community</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Easy Trading</h3>
              <p>Simple and secure platform to connect with fellow students</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌟</div>
              <h3>Community</h3>
              <p>Build connections and support your campus ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <form 
            className="contact-form"
            action="https://formspree.io/f/mblzryyv"
            method="POST"
          >
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className="form-input"
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className="form-input"
              required 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              className="form-textarea" 
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* CCBC Availability Section */}
      <section className="ccbc-section">
        <div className="ccbc-container">
          <div className="ccbc-content">
            
            {/* CCBC Logo */}
            <div className="ccbc-logo-wrapper">
              <div className="ccbc-logo-glow"></div>
              <img 
                src={ccbcLogo} 
                alt="CCBC Logo" 
                className="ccbc-logo-img"
              />
            </div>

            {/* Text Content */}
            <div className="ccbc-text">
              <div className="ccbc-badge">
                <span>🎓 Campus Exclusive</span>
              </div>
              
              <h2 className="ccbc-title">
                Available at
                <span className="ccbc-title-highlight">CCBC Campus</span>
              </h2>
              
              <p className="ccbc-description">
                Join your fellow CCBC students in the ultimate marketplace experience. 
                Buy, sell, and connect with your campus community today!
              </p>

              <div className="ccbc-features">
                <div className="ccbc-feature-item">
                  <span className="ccbc-feature-icon">📚</span>
                  <span className="ccbc-feature-text">Textbooks</span>
                </div>
                <div className="ccbc-feature-item">
                  <span className="ccbc-feature-icon">🪑</span>
                  <span className="ccbc-feature-text">Furniture</span>
                </div>
                <div className="ccbc-feature-item">
                  <span className="ccbc-feature-icon">🎒</span>
                  <span className="ccbc-feature-text">Supplies</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="ccbc-decoration ccbc-decoration-1"></div>
        <div className="ccbc-decoration ccbc-decoration-2"></div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Dormo. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => setShowPrivacyModal(true)} className="footer-link">Privacy Policy</button>
            <a href="#about" className="footer-link">About</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="modal-overlay" onClick={() => setShowPrivacyModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPrivacyModal(false)}>
              ✕
            </button>
            
            <div className="privacy-modal-body">
              <h1>Privacy Policy</h1>
              <p className="last-updated">Last Updated: October 24, {new Date().getFullYear()}</p>
              
              <div className="privacy-content">
                <section>
                  <h2>1. Information We Collect</h2>
                  <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
                  <ul>
                    <li><strong>Account Information:</strong> Name, email, phone number, and profile picture.</li>
                    <li><strong>Transaction Data:</strong> Details about items you buy or sell through our platform.</li>
                    <li><strong>Usage Data:</strong> How you interact with our services, including pages visited and features used.</li>
                    <li><strong>Device Information:</strong> IP address, browser type, and device identifiers.</li>
                  </ul>
                </section>
                
                <section>
                  <h2>2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send you technical notices and support messages</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Detect, investigate, and prevent fraudulent transactions</li>
                  </ul>
                </section>
                
                <section>
                  <h2>3. Information Sharing</h2>
                  <p>We do not sell your personal information. We may share information with:</p>
                  <ul>
                    <li><strong>Other Users:</strong> When you make a transaction, we'll share necessary information between buyer and seller.</li>
                    <li><strong>Service Providers:</strong> Companies that provide services on our behalf.</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
                  </ul>
                </section>
                
                <section>
                  <h2>4. Your Choices</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access and update your account information</li>
                    <li>Opt-out of promotional communications</li>
                    <li>Request deletion of your account and data</li>
                    <li>Disable cookies in your browser settings</li>
                  </ul>
                </section>
                
                <section>
                  <h2>5. Security</h2>
                  <p>We implement appropriate security measures to protect your information, including:</p>
                  <ul>
                    <li>Encryption of data in transit (SSL/TLS)</li>
                    <li>Secure storage of sensitive information</li>
                    <li>Regular security audits</li>
                    <li>Limited access to personal information</li>
                  </ul>
                </section>
                
                <section>
                  <h2>6. User Conduct & Prohibited Items</h2>
                  <p>By using Dormo, you agree not to:</p>
                  <ul>
                    <li>Post false, misleading, or fraudulent listings</li>
                    <li>Sell illegal or prohibited items (weapons, drugs, stolen goods, etc.)</li>
                    <li>Harass or threaten other users</li>
                    <li>Attempt to gain unauthorized access to other accounts</li>
                    <li>Use automated systems to access our services</li>
                  </ul>
                </section>
                
                <section>
                  <h2>7. Transaction Rules</h2>
                  <ul>
                    <li>All transactions must be completed through Dormo's messaging system</li>
                    <li>Meet in safe, public locations for exchanges</li>
                    <li>Inspect items before purchasing</li>
                    <li>Use secure payment methods</li>
                    <li>Report any suspicious activity immediately</li>
                  </ul>
                </section>
                
                <section>
                  <h2>8. Changes to This Policy</h2>
                  <p>We may update this policy from time to time. We'll notify you of any changes by updating the date at the top of this policy.</p>
                </section>
                
                <section>
                  <h2>9. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <p>Email: privacy@dormo.com<br />
                  Address: 123 College Ave, Baltimore, MD 21228, USA</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
