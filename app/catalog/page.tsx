import Link from 'next/link'
import { products } from '@/app/catalog/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Каталог продукции — VIP INTERNATIONAL',
  description: 'Онлайн-каталог продукции VIP International — натуральные продукты для здоровья, красоты и энергии.',
}

const categoryIcons: Record<string, string> = {
  'Биопластыри': 'BP',
  'Коллоидные воды': 'CW',
  'Кофе': 'CF',
  'Чай': 'TE',
  'БАД': 'SU',
  'Энергетики': 'EN',
  'Косметика': 'CS',
}

const greenShades = [
  'hsl(158, 65%, 42%)',
  'hsl(148, 60%, 38%)',
  'hsl(168, 70%, 45%)',
  'hsl(155, 58%, 40%)',
  'hsl(162, 62%, 48%)',
  'hsl(145, 55%, 35%)',
]

export default function CatalogPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #022c22 0%, var(--primary) 100%)',
        color: '#fff', padding: '4.5rem 1.5rem 5rem', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', padding: '5px 16px', borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16, border: '1px solid rgba(255,255,255,0.2)' }}>
            Онлайн-каталог
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginBottom: 14 }}>
            Каталог продукции
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', maxWidth: 480, margin: '0 auto 20px' }}>
            {products.length} натуральных продуктов для здоровья, красоты и энергии
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1200 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 50 }}>
            <path d="M0,30 C300,60 600,0 900,30 C1050,48 1150,20 1200,30 L1200,50 L0,50 Z" fill="var(--bg-color)" />
          </svg>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div style={{ background: 'var(--bg-color)', padding: '0 1.5rem' }}>
        <div className="section-container">
          <div style={{ background: 'var(--primary-bg)', borderRadius: 14, padding: '1rem 1.25rem', marginTop: -4, border: '1px solid var(--border)' }}>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'center' }}>
              <strong style={{ color: 'var(--primary)' }}>Важно:</strong> Продукция компании Vip International — это пищевые добавки. Ни один продукт не является лекарством. Компания не берет обязательств по предотвращению или лечению заболеваний.
            </p>
          </div>
        </div>
      </div>

      {/* ── Products by category ── */}
      <section style={{ padding: '3rem 1.5rem 5rem', background: 'var(--bg-color)' }}>
        <div className="section-container">
          {categories.map(cat => (
            <div key={cat} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: '2px solid var(--primary-bg)' }}>
                <span style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#fff', flexShrink: 0,
                }}>{categoryIcons[cat] || 'VI'}</span>
                <h2 style={{ fontSize: 20, fontWeight: 700 }}>{cat}</h2>
                <span className="badge" style={{ marginLeft: 'auto' }}>
                  {products.filter(p => p.category === cat).length} шт.
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20 }}>
                {products.filter(p => p.category === cat).map((product, i) => (
                  <Link key={product.slug} href={`/catalog/${product.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card" style={{ height: '100%' }}>
                      {product.image ? (
                        <div style={{ height: 150, position: 'relative', overflow: 'hidden' }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      ) : (
                        <div style={{
                          height: 150,
                          background: `linear-gradient(135deg, ${greenShades[i % greenShades.length]} 0%, ${greenShades[(i + 2) % greenShades.length]} 100%)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 32, fontWeight: 800, color: '#fff', position: 'relative', overflow: 'hidden',
                        }}>
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 55%)' }} />
                          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 90, height: 90, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
                          <span style={{ position: 'relative', zIndex: 1 }}>{categoryIcons[cat] || 'VI'}</span>
                        </div>
                      )}
                      <div style={{ padding: '0.875rem' }}>
                        <p style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700, marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                          {product.category}
                        </p>
                        <h3 style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4, color: 'var(--text)' }}>
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div style={{
            textAlign: 'center', marginTop: 24,
            background: 'linear-gradient(135deg, var(--primary-bg) 0%, var(--primary-bg2) 100%)',
            borderRadius: 20, padding: '3rem 2rem', border: '1px solid var(--border)',
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
              Хотите начать свой бизнес?
            </h3>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 24, maxWidth: 420, margin: '0 auto 24px' }}>
              Рекомендуйте продукты и зарабатывайте на розничных продажах. Присоединяйтесь к команде!
            </p>
            <a
              href="https://wa.me/77715597177?text=Здравствуйте, хочу в вашу команду!"
              target="_blank" rel="noreferrer"
              className="btn-primary">
              ПРИСОЕДИНЯЙСЯ СЕЙЧАС! →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
