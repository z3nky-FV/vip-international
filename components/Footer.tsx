'use client'
export default function Footer() {
  const socials = [
    { icon: <img src="/images/instagram.jpg" alt="Instagram" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 11 }} />, label: 'Instagram', href: 'https://www.instagram.com/roza_vip.international/' },
    { icon: <img src="/images/whatsapp.jpg" alt="WhatsApp" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 11 }} />, label: 'WhatsApp', href: 'https://wa.me/77715597177' },
  ]

  return (
    <footer style={{ background: '#021a14', color: '#fff', paddingTop: '3rem' }}>
      <div className="section-container">
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 14 }}>
              <img
                src="/images/logo.png"
                alt="VIP INTERNATIONAL Logo"
                style={{ height: 94, objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 240 }}>
              Натуральные продукты для здоровья, красоты и энергии. Ваш надежный партнер на пути к здоровой и успешной жизни.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 14 }}>
              Навигация
            </h4>
            {[
              { label: 'Главная страница', href: '/' },
              { label: 'О компании', href: '/about' },
              { label: 'Каталог', href: '/catalog' },
            ].map(link => (
              <a key={link.href} href={link.href} style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 8, transition: 'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 14 }}>
              Контакты
            </h4>
            <a href="https://wa.me/77715597177" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 10, transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
              +7 771 559-71-77
            </a>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginTop: 12 }}>
              Продукция не является лекарством. Компания VIP International не берет на себя обязательств по лечению заболеваний.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 14 }}>
              Социальные сети
            </h4>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
              Подписывайтесь и оставайтесь в курсе
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} title={s.label} target="_blank" rel="noreferrer"
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16, fontWeight: 700, transition: 'all .2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'none'
                  }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: '1.25rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} VIP INTERNATIONAL. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
