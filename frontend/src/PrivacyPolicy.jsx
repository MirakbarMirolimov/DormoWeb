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
        
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: October 24, 2024</p>
        
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
  );
};

export default PrivacyPolicy;
