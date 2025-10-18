import React from 'react'
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import dormoIcon from '../assets/icon.png'
import ccbcLogo from '../assets/ccbc_logo.png'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={dormoIcon} alt="Dormo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">Dormo</span>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <img src={ccbcLogo} alt="CCBC" className="w-6 h-6" />
              <span className="text-white/90 text-sm font-medium">CCBC Students Privacy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80">
              Your privacy and data security are our top priorities at Dormo.
            </p>
            <p className="text-white/60 text-sm mt-4">
              Last updated: October 18, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Our Commitment to Privacy</h2>
              </div>
              <p className="text-white/80 leading-relaxed">
                Dormo ("we," "our," or "us") is committed to protecting the privacy and security of CCBC students who use our sleep tracking application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <ul className="text-white/80 space-y-2 ml-4">
                    <li>• CCBC student email address (for account verification)</li>
                    <li>• Name and basic profile information</li>
                    <li>• Sleep preferences and goals</li>
                    <li>• Device and app usage information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sleep Data</h3>
                  <ul className="text-white/80 space-y-2 ml-4">
                    <li>• Sleep duration and quality metrics</li>
                    <li>• Bedtime and wake time patterns</li>
                    <li>• Sleep environment data (if provided)</li>
                    <li>• User-inputted sleep logs and notes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Technical Information</h3>
                  <ul className="text-white/80 space-y-2 ml-4">
                    <li>• Device type, operating system, and app version</li>
                    <li>• IP address and general location (city/state level)</li>
                    <li>• App performance and crash reports</li>
                    <li>• Usage analytics and feature interaction data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              
              <ul className="text-white/80 space-y-3 ml-4">
                <li>• <strong>Provide Sleep Insights:</strong> Analyze your sleep patterns to provide personalized recommendations</li>
                <li>• <strong>Improve Academic Performance:</strong> Help correlate sleep quality with academic success</li>
                <li>• <strong>App Functionality:</strong> Enable core features like sleep tracking, smart alarms, and progress monitoring</li>
                <li>• <strong>Student Verification:</strong> Verify CCBC student status through institutional email</li>
                <li>• <strong>Support Services:</strong> Provide customer support and respond to inquiries</li>
                <li>• <strong>App Improvement:</strong> Analyze usage patterns to enhance app features and performance</li>
                <li>• <strong>Communication:</strong> Send important updates, tips, and educational content about sleep health</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Data Security & Protection</h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-white/80 leading-relaxed">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                
                <ul className="text-white/80 space-y-2 ml-4">
                  <li>• <strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                  <li>• <strong>Access Controls:</strong> Strict access controls limit who can view your data</li>
                  <li>• <strong>Regular Audits:</strong> We conduct regular security audits and assessments</li>
                  <li>• <strong>Data Minimization:</strong> We only collect data necessary for app functionality</li>
                  <li>• <strong>Secure Storage:</strong> Data is stored on secure, compliant cloud infrastructure</li>
                </ul>
              </div>
            </div>

            {/* CCBC Student Specific */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-8 h-8 text-green-400" />
                <h2 className="text-2xl font-bold text-white">CCBC Student Privacy</h2>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-white/80 leading-relaxed mb-4">
                  As a CCBC-focused application, we understand the importance of student privacy and comply with educational privacy standards:
                </p>
                
                <ul className="text-white/80 space-y-2 ml-4">
                  <li>• We do not share individual student data with CCBC or any educational institution</li>
                  <li>• Your sleep data remains private and is not used for academic evaluation</li>
                  <li>• We may share anonymized, aggregated data for research purposes only with explicit consent</li>
                  <li>• Student email verification is used solely for access control</li>
                  <li>• You can request data deletion at any time while maintaining student status</li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Data Sharing & Disclosure</h2>
              
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share your information only in these limited circumstances:
              </p>
              
              <ul className="text-white/80 space-y-2 ml-4">
                <li>• <strong>Service Providers:</strong> Trusted third-party services that help us operate the app</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li>• <strong>Emergency Situations:</strong> To prevent harm to you or others</li>
                <li>• <strong>Business Transfers:</strong> In the event of a merger or acquisition (with user notification)</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
              
              <p className="text-white/80 leading-relaxed mb-4">
                As a Dormo user, you have the following rights regarding your personal information:
              </p>
              
              <ul className="text-white/80 space-y-2 ml-4">
                <li>• <strong>Access:</strong> Request a copy of your personal data</li>
                <li>• <strong>Correction:</strong> Update or correct inaccurate information</li>
                <li>• <strong>Deletion:</strong> Request deletion of your account and data</li>
                <li>• <strong>Portability:</strong> Export your data in a readable format</li>
                <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li>• <strong>Restriction:</strong> Limit how we process your data</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or your personal information, please contact us:
              </p>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="space-y-2 text-white/80">
                  <p><strong>Email:</strong> privacy@dormo.app</p>
                  <p><strong>Support:</strong> support@dormo.app</p>
                  <p><strong>Address:</strong> Dormo Privacy Team</p>
                  <p className="text-sm text-white/60 mt-4">
                    We will respond to your privacy-related inquiries within 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="border-t border-white/20 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
              <p className="text-white/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={dormoIcon} alt="Dormo" className="w-6 h-6" />
            <span className="text-lg font-bold text-white">Dormo</span>
          </div>
          <p className="text-white/70 text-sm">
            © 2024 Dormo. All rights reserved. • Designed for CCBC Students
          </p>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
