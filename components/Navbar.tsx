'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { products } from '@/app/catalog/data'

export default function Navbar() {
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const catalogItems = products

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      background: 'var(--bg-color)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(5,150,105,0.08)' : 'none',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'box-shadow 0.3s, border-color 0.3s',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/images/logo.png"
            alt="VIP INTERNATIONAL Logo"
            style={{ height: 84, objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }}>
          <li>
            <Link href="/" style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              Главная страница
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-muted)', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
              О компании
            </Link>
          </li>
          <li style={{ position: 'relative' }}>
            <button
              id="catalog-btn"
              onClick={() => setCatalogOpen(!catalogOpen)}
              onMouseEnter={() => setCatalogOpen(true)}
              style={{
                fontSize: 14, fontWeight: 500, color: catalogOpen ? 'var(--primary)' : 'var(--text-muted)',
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 5, transition: 'color .2s',
                padding: '4px 0',
              }}>
              Каталог
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                style={{ transform: catalogOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>

            {catalogOpen && (
              <div
                onMouseLeave={() => setCatalogOpen(false)}
                style={{
                  position: 'absolute', top: 'calc(100% + 12px)', left: -8,
                  background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 14,
                  padding: '8px 0', minWidth: 300,
                  boxShadow: '0 16px 48px rgba(5,150,105,0.15)', zIndex: 200,
                  animation: 'fadeIn 0.2s ease',
                  maxHeight: '70vh', overflowY: 'auto',
                }}>
                <Link href="/catalog" onClick={() => setCatalogOpen(false)}
                  style={{
                    display: 'block', padding: '10px 16px', fontSize: 13, fontWeight: 700,
                    color: 'var(--primary)', borderBottom: '2px solid var(--border)',
                    letterSpacing: '0.3px', marginBottom: 4,
                  }}>
                  Весь каталог
                </Link>
                {catalogItems.map(item => (
                  <Link
                    key={item.slug}
                    href={`/catalog/${item.slug}`}
                    onClick={() => setCatalogOpen(false)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '8px 16px', fontSize: 13, color: 'var(--text-muted)',
                      transition: 'all .15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'var(--primary-bg)'
                      e.currentTarget.style.color = 'var(--primary)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--text-muted)'
                    }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', flexShrink: 0, opacity: 0.5 }} />
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <a
              href="https://wa.me/77715597177?text=Здравствуйте"
              target="_blank" rel="noreferrer"
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: 13 }}>
              WhatsApp
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="burger"
          style={{
            background: 'none', border: '1px solid var(--border)', cursor: 'pointer',
            display: 'none', width: 40, height: 40, borderRadius: 8,
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
          }}>
          <span style={{ display: 'block', width: 18, height: 2, background: 'var(--text)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 18, height: 2, background: 'var(--text)', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 18, height: 2, background: 'var(--text)', borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', background: 'var(--card-bg)', animation: 'fadeIn 0.2s ease' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0', fontSize: 15, fontWeight: 500, borderBottom: '1px solid var(--border)' }} onClick={() => setMobileOpen(false)}>
            Главная страница
          </Link>
          <Link href="/about" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0', fontSize: 15, fontWeight: 500, borderBottom: '1px solid var(--border)' }} onClick={() => setMobileOpen(false)}>
            О компании
          </Link>
          <Link href="/catalog" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0', fontSize: 15, fontWeight: 500 }} onClick={() => setMobileOpen(false)}>
            Каталог
          </Link>
          <a
            href="https://wa.me/77715597177?text=Здравствуйте"
            target="_blank" rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: 12, display: 'block', textAlign: 'center' }}
            onClick={() => setMobileOpen(false)}>
            Написать на WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
