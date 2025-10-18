import React from 'react'

// Simple test component to check if React is working
const TestComponent = () => {
  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      minHeight: '100vh' 
    }}>
      <h1>Dormo Test Page</h1>
      <p>If you can see this, React is working properly.</p>
      <p>The ERR_BLOCKED_BY_CLIENT error is likely from an ad blocker.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Quick Fixes:</h2>
        <ul>
          <li>Disable ad blocker for localhost:3000</li>
          <li>Try incognito/private browsing mode</li>
          <li>Check browser console for specific blocked resource</li>
          <li>Clear browser cache and hard refresh (Ctrl+Shift+R)</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Test Image Loading:</h2>
        <p>If images don't load below, it's an asset loading issue:</p>
        {/* Test with public folder images */}
        <img 
          src="/test.txt" 
          alt="Test" 
          style={{ width: '50px', height: '50px', backgroundColor: '#333' }}
          onError={(e) => {
            e.target.style.display = 'none'
            console.log('Image loading failed')
          }}
        />
      </div>
    </div>
  )
}

export default TestComponent
