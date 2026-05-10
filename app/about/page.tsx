import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'О компании — VIP INTERNATIONAL',
  description: 'О компании VIP International. Основана в 2015 году. Производство натуральных продуктов для здоровья и красоты.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #022c22 0%, var(--primary) 100%)',
        color: '#fff', padding: '5rem 1.5rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', padding: '5px 16px', borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16, border: '1px solid rgba(255,255,255,0.2)' }}>
            О нас
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, marginBottom: 16 }}>О компании</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 28px' }}>
            Забота о здоровье — забота о будущем!
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalog" className="btn-primary" style={{ background: '#fff', color: 'var(--primary)' }}>
              Перейти в каталог →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About company ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-color)' }}>
        <div className="section-container">
          <div className="responsive-grid-2 responsive-gap" style={{ alignItems: 'center' }}>
            {/* Visual */}
            <div>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                borderRadius: 24, padding: '2.5rem',
                boxShadow: '0 20px 60px rgba(108,79,212,0.25)',
              }}>
                <div style={{ textAlign: 'center', color: '#fff' }}>
                  <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                    <img src="/images/logo.png" alt="VIP INTERNATIONAL Logo" style={{ height: 80, objectFit: 'contain' }} />
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>VIP INTERNATIONAL</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', marginBottom: 24 }}>
                    Производство натуральных продуктов
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {[
                      { v: '2015', l: 'Год основания' },
                      { v: '2018', l: 'Запуск сетевого бизнеса' },
                      { v: '2020', l: 'Офис в Казахстане' },
                      { v: '6', l: 'Стран присутствия' },
                    ].map(s => (
                      <div key={s.l} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>{s.v}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 4, lineHeight: 1.3 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="badge" style={{ marginBottom: 14 }}>История компании</span>
              <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 800, marginBottom: 20 }}>О компании</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: '📅', text: 'Компания основана в 2015 году, с 2018 года начала свою деятельность как сетевая компания в Турции, город Мерсин.' },
                  { icon: '🇰🇿', text: 'С 15 декабря 2020 года официально открыт офис в Казахстане.' },
                  { icon: '🌐', text: 'К 2023 году компания работает в Турции, Казахстане, Кыргызстане, Узбекистане, России и Таджикистане.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'var(--gray-bg)', borderRadius: 12, padding: '16px' }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--primary)', flexShrink: 0 }}>VI</span>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--text-muted)' }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--gray-bg)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge" style={{ marginBottom: 12 }}>Команда</span>
            <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 800 }}>Основатель компании</h2>
          </div>
          <div style={{ maxWidth: 960, margin: '0 auto' }}>
            <div className="responsive-grid-founder" style={{
              background: 'var(--card-bg)',
              borderRadius: 24,
              padding: '2.5rem',
              boxShadow: 'var(--card-shadow)',
              gap: '3rem',
              alignItems: 'center'
            }}>
              {/* Photo Area */}
              <div style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                aspectRatio: '4/5',
                border: '1px solid var(--border)',
                maxWidth: 400,
                width: '100%',
                margin: '0 auto'
              }}>
                <img
                  src="/images/mesut-ongun.png"
                  alt="Месут Онгун - Основатель VIP INTERNATIONAL"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(2,44,34,0.9), transparent)',
                  padding: '30px 20px 20px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Месут Онгун</h3>
                  <p style={{ fontSize: 13, color: 'var(--primary-light)', fontWeight: 600 }}>Президент компании</p>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8, color: '#fff' }}>История создания</h3>
                  <p style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 600 }}>Философия: "Заработай и дай заработать другим"</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    'Месут Онгун родился в 1967 году в Мерсине. Его карьерный путь начался в 1988 году. После 2004 года он прошел различные тренинги по производству растительных продуктов питания и косметических продуктов.',
                    'Собственную продукцию он начал производить в 2006 году. Научно-исследовательские работы продолжались до 2018 года. После разработки маркетингового плана он начал свою деятельность в сфере сетевого бизнеса.',
                    'С момента основания компании у Президента всегда была философия "Заработай и дай возможность заработать другим". Он предпочитал потерять деньги, чем потерять доверие людей.',
                    'Компания VIP International разрабатывает уникальные продукты для различных рынков, стремясь стать одним из ведущих сетевых компаний. Благодаря бизнес-модели компании каждый человек старше 18 лет может начать собственное дело с минимальными затратами.',
                  ].map((para, i) => (
                    <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', marginTop: 10, flexShrink: 0 }} />
                      <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)' }}>{para}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certificates ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-color)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge" style={{ marginBottom: 12 }}>Качество</span>
            <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 800, marginBottom: 12 }}>Наши документы</h2>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
              Продукция произведена с особой точностью и предлагается потребителю под гарантией компании
            </p>
          </div>
          <div className="marquee-container" style={{ margin: '0 -1.5rem', width: 'calc(100% + 3rem)' }}>
            <div className="marquee-content">
              {/* Duplicate the array to create a seamless loop */}
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} style={{ display: 'flex', gap: '2rem', flexShrink: 0 }}>
                  {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <img
                      key={num}
                      src={`/images/certs/cert${num}.jpg`}
                      alt={`Сертификат ${num}`}
                      className="cert-image"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--gray-bg)', borderRadius: 16, padding: '1.5rem 2rem', marginTop: 32, maxWidth: 640, margin: '32px auto 0' }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-muted)', textAlign: 'center' }}>
              Наша продукция, произведенная с особой точностью нашим опытным производственным персоналом, предлагается потребителю под гарантией нашей компании. Удовлетворенность клиентов очень важна для нас. Мы действуем в первую очередь по принципу здоровья.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #022c22 0%, var(--primary) 100%)',
        color: '#fff', textAlign: 'center',
      }}>
        <div className="section-container">
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, marginBottom: 14 }}>
            Присоединяйтесь к нашей команде!
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
            Начните свой бизнес с минимальными затратами вместе с VIP INTERNATIONAL
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/catalog" className="btn-primary" style={{ background: '#fff', color: 'var(--primary)' }}>
              Перейти в каталог
            </Link>
            <a href="https://wa.me/77782569912?text=Здравствуйте, хочу в вашу команду!"
              target="_blank" rel="noreferrer"
              className="btn-secondary"
              style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
