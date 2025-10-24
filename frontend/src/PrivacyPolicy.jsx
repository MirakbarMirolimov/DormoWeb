import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Dormo';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
        
        <h1>Dormo Privacy Policy</h1>
        <p className="last-updated"><strong>Last Updated:</strong> December 2024</p>
        
        <div className="privacy-content">
          <section>
            <h2>Introduction</h2>
            <p>Welcome to Dormo, a student marketplace platform that connects college students for buying and selling items. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.</p>
            <p>By using Dormo, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.</p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Full name and email address</li>
              <li>Student email address (for verification)</li>
              <li>Profile information and avatar (optional)</li>
              <li>Authentication credentials (encrypted passwords)</li>
            </ul>

            <h3>Marketplace Data</h3>
            <p>When you use our marketplace features:</p>
            <ul>
              <li>Product listings (title, description, price, category, condition)</li>
              <li>Product images you upload</li>
              <li>Location information for listings (campus locations)</li>
              <li>Favorites and saved items</li>
              <li>Purchase and sales history</li>
            </ul>

            <h3>Communication Data</h3>
            <p>For messaging and support:</p>
            <ul>
              <li>Messages between users</li>
              <li>Support tickets and communications</li>
              <li>Notification preferences</li>
            </ul>

            <h3>Payment Information</h3>
            <p>Payment processing is handled by Stripe, our secure payment processor. We do not store your credit card information. Stripe collects and processes payment data according to their privacy policy.</p>
            <ul>
              <li>Stripe Connect account information (for sellers)</li>
              <li>Transaction records and order history</li>
              <li>Payment status and processing information</li>
            </ul>

            <h3>Technical Information</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>Device information and operating system</li>
              <li>App usage analytics and performance data</li>
              <li>Error logs and crash reports</li>
              <li>Session information and authentication tokens</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain our marketplace services</li>
              <li>Process transactions and facilitate payments</li>
              <li>Enable communication between buyers and sellers</li>
              <li>Verify student status and prevent fraud</li>
              <li>Send important notifications about your account and transactions</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our app and develop new features</li>
              <li>Ensure platform safety and security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Payment Processing & Stripe</h2>
            <p>Dormo uses Stripe Connect for secure payment processing. When you make a purchase or set up selling:</p>
            <ul>
              <li>Stripe processes all payment transactions securely</li>
              <li>We collect a 5% platform fee from each transaction</li>
              <li>Stripe handles all sensitive payment data (credit cards, bank accounts)</li>
              <li>Sellers must complete Stripe's identity verification process</li>
              <li>Payment data is governed by Stripe's Privacy Policy</li>
              <li>We store transaction records but not payment credentials</li>
            </ul>
            <p>For detailed information about how Stripe handles your payment data, please review Stripe's Privacy Policy at stripe.com/privacy.</p>
          </section>

          <section>
            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>

            <h3>With Other Users</h3>
            <ul>
              <li>Your public profile information (name, avatar) in listings and messages</li>
              <li>Product listings you create are visible to all users</li>
              <li>Messages you send to other users</li>
            </ul>

            <h3>With Service Providers</h3>
            <ul>
              <li>Stripe for payment processing</li>
              <li>Supabase for database and authentication services</li>
              <li>Cloud storage providers for images and data</li>
            </ul>

            <h3>Legal Requirements</h3>
            <ul>
              <li>When required by law or legal process</li>
              <li>To protect our rights and prevent fraud</li>
              <li>In case of emergency to protect user safety</li>
            </ul>

            <h3>Business Transfers</h3>
            <p>If Dormo is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your information:</p>
            <ul>
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Secure authentication and password hashing</li>
              <li>Row-level security policies in our database</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal data by our team</li>
            </ul>
            <p>However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2>Data Retention</h2>
            <p>We retain your information for as long as necessary to:</p>
            <ul>
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain transaction records for tax and legal purposes</li>
            </ul>
            <p>When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or regulatory purposes.</p>
          </section>

          <section>
            <h2>Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Update or correct your profile information</li>
              <li>Delete your account and associated data</li>
              <li>Control your notification preferences</li>
              <li>Request a copy of your data</li>
              <li>Opt out of non-essential communications</li>
            </ul>
            <p>To exercise these rights, please contact us through the app's support section or email us directly.</p>
          </section>

          <section>
            <h2>Children's Privacy</h2>
            <p>Dormo is designed for college students who are typically 18 years or older. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
          </section>

          <section>
            <h2>International Users</h2>
            <p>Dormo is primarily designed for students in the United States. If you are accessing our services from outside the US, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.</p>
          </section>

          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul>
              <li>Posting the new Privacy Policy in the app</li>
              <li>Sending you a notification through the app</li>
              <li>Updating the 'Last Updated' date at the top of this policy</li>
            </ul>
            <p>Your continued use of Dormo after any changes indicates your acceptance of the updated Privacy Policy.</p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <p><strong>Dormo Support Team</strong><br />
            Email: dormohelp@gmail.com<br />
            Support: Through the app's Help Center<br />
            Response Time: Within 48 hours</p>
            <hr />
            <p><em>This Privacy Policy is effective as of the date listed above and applies to all users of the Dormo platform.</em></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
