'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
    if (consent === 'accepted') grantConsent()
  }, [])

  function grantConsent() {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('consent', 'update', { analytics_storage: 'granted' })
    }
  }

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    grantConsent()
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#1a1a2e', borderTop: '1px solid #2d2d4e', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
      <p style={{ color: '#ccc', fontSize: '14px', margin: 0 }}>
        This site uses cookies to understand traffic via Google Analytics. No personal data is sold or shared.
      </p>
      <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
        <button onClick={decline} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid #555', color: '#aaa', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>
          Decline
        </button>
        <button onClick={accept} style={{ padding: '8px 16px', background: '#3b82f6', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}>
          Accept
        </button>
      </div>
    </div>
  )
}
