import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/app/catalog/data'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug)
  const product = products.find(p => p.slug === decodedSlug)
  return {
    title: product ? `${product.name} — VIP INTERNATIONAL` : 'Продукт — VIP INTERNATIONAL',
    description: product?.description,
  }
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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug)
  const product = products.find(p => p.slug === decodedSlug)
  if (!product) notFound()

  const related = products.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  const icon = categoryIcons[product.category] || 'VI'
  const waLink = `https://wa.me/77715597177?text=Здравствуйте, меня интересует продукт: ${product.name}`

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: 'var(--gray-bg)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
        <div className="section-container" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: 'var(--primary)', fontWeight: 500 }}>Главная</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <Link href="/catalog" style={{ color: 'var(--primary)', fontWeight: 500 }}>Каталог</Link>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* ── Main product section ── */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-color)' }}>
        <div className="section-container">
          <div className="responsive-grid-founder responsive-gap" style={{ alignItems: 'start' }}>
            
            {/* Product visual */}
            <div>
              {product.image ? (
                <div style={{
                  aspectRatio: '1/1',
                  maxHeight: 400,
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(108,79,212,0.25)',
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ) : (
                <div style={{
                  aspectRatio: '1/1',
                  maxHeight: 400,
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                  borderRadius: 20, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(5,150,105,0.25)',
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
                  <div style={{ position: 'absolute', top: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                  <span style={{ fontSize: 40, fontWeight: 800, color: '#fff', position: 'relative', zIndex: 1 }}>{icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600, marginTop: 16, position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 16px' }}>
                    {product.category}
                  </span>
                </div>
              )}

              {/* CTA under image */}
              <div style={{ marginTop: 20 }}>
                <a
                  href={waLink}
                  target="_blank" rel="noreferrer"
                  className="btn-primary"
                  style={{ display: 'flex', justifyContent: 'center', gap: 8, width: '100%', textAlign: 'center', fontSize: 15 }}>
                  Заказать через WhatsApp
                </a>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 8 }}>
                  Быстрый ответ в течение нескольких минут
                </p>
              </div>
            </div>

            {/* Product details */}
            <div>
              <span className="badge" style={{ marginBottom: 12 }}>{product.category}</span>
              <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
                {product.name}
              </h1>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 28 }}>
                {product.description}
              </p>

              {/* Benefits */}
              <div style={{ background: 'var(--gray-bg)', borderRadius: 16, padding: '1.5rem', marginBottom: 28 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14, color: 'var(--text)' }}>
                  Преимущества продукта:
                </h3>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 12 }}>
                  {product.benefits.map(b => (
                    <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14 }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: 'var(--primary)', color: '#fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, flexShrink: 0,
                      }}>✓</span>
                      <span style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* QA */}
              {product.qa && product.qa.length > 0 && (
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: 16, padding: '1.5rem', marginBottom: 28 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14, color: 'var(--text)' }}>
                    Вопросы и ответы:
                  </h3>
                  <div style={{ display: 'grid', gap: 16 }}>
                    {product.qa.map((item, i) => (
                      <div key={i} style={{ paddingBottom: 16, borderBottom: i < product.qa!.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, color: 'var(--primary)' }}>{item.question}</p>
                        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div style={{ background: 'var(--primary-bg)', borderRadius: 12, padding: '12px 16px', marginBottom: 28, borderLeft: '3px solid var(--primary)' }}>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--primary)' }}>Важно:</strong> Продукт является пищевой добавкой и не является лекарством. Перед применением проконсультируйтесь с врачом.
                </p>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 15 }}>
                  Заказать через WhatsApp
                </a>
                <Link href="/catalog" className="btn-secondary">
                  ← В каталог
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #022c22 0%, var(--primary) 100%)',
        color: '#fff', textAlign: 'center',
      }}>
        <div className="section-container">
          <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 800, marginBottom: 12 }}>
            Готовы заказать?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', marginBottom: 24, maxWidth: 420, margin: '0 auto 24px' }}>
            Свяжитесь со мной напрямую через WhatsApp
          </p>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn-primary"
            style={{ background: '#fff', color: 'var(--primary)', fontSize: 15 }}>
            ЗАКАЗАТЬ СЕЙЧАС →
          </a>
        </div>
      </section>
    </>
  )
}
