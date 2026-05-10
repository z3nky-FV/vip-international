import Link from 'next/link'
import ExpandableStory from '@/components/ExpandableStory'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VIP INTERNATIONAL',
  description: 'Натуральные продукты для здоровья и красоты. VIP INTERNATIONAL.',
}

const stats = [
  { value: '9+', label: 'лет в маркетинге' },
  { value: '27', label: 'продуктов в каталоге' },
  { value: '100%', label: 'натуральный состав' },
]

const features = [
  { icon: 'VI', title: 'Натуральные компоненты', desc: 'Все продукты созданы из природных ингредиентов без вредных химических добавок.' },
  { icon: 'VI', title: 'Проверенное качество', desc: 'Прошли все необходимые проверки и получили соответствующие сертификаты.' },
  { icon: 'VI', title: 'Бизнес-возможности', desc: 'Присоединяйтесь к команде и зарабатывайте вместе с VIP INTERNATIONAL.' },
  { icon: 'VI', title: 'Широкий ассортимент', desc: 'От витаминов и БАД до косметики — продукты для всей семьи.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #022c22 0%, #065f46 50%, var(--primary) 100%)',
        color: '#fff', padding: '5rem 1.5rem 6rem', position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '30%', right: '15%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

        <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="responsive-grid-2 responsive-gap" style={{ alignItems: 'center' }}>
            {/* Left content */}
            <div style={{ animation: 'fadeUp 0.8s ease both' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                padding: '6px 16px', borderRadius: 50, fontSize: 13, fontWeight: 600,
                marginBottom: 24, border: '1px solid rgba(255,255,255,0.2)',
              }}>
                Здоровье. Энергия. Успех.
              </div>

              <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
                Ваш надежный партнер на пути к{' '}
                <span style={{ color: 'var(--primary-bg2)' }}>здоровой и успешной жизни</span>
              </h1>

              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: 32, maxWidth: 480 }}>
                Откройте для себя силу клеточного питания и натуральных компонентов, чтобы вернуть энергию и обрести гармонию.
              </p>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link
                  href="/catalog"
                  className="btn-primary"
                  style={{ background: '#fff', color: 'var(--primary)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                  КАТАЛОГ ПРОДУКЦИИ →
                </Link>
                <a href="https://wa.me/77715597177?text=Здравствуйте, хочу узнать больше о продукции!" target="_blank" rel="noreferrer" className="btn-secondary"
                  style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                  Написать на WhatsApp
                </a>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: 28, marginTop: 40, flexWrap: 'wrap' }}>
                {stats.map(s => (
                  <div key={s.label}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - visual card */}
            <div className="hide-mobile" style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}>
              <div style={{
                background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 24,
                padding: '2rem', textAlign: 'center',
              }}>
                <div style={{
                  width: 120, height: 120, minWidth: 120, minHeight: 120, flexShrink: 0, borderRadius: '50%',
                  margin: '0 auto 1rem', overflow: 'hidden',
                  border: '3px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}>
                  <img src="/images/roza-shataeva.jpg" alt="Роза Шотаева" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Роза Шотаева</h3>
                <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--primary-light)', marginBottom: 4 }}>Diamond Лидер</h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 20 }}>VIP INTERNATIONAL</p>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '1rem', marginBottom: 16 }}>
                  {[
                    '✓ Эксперт по клеточному питанию',
                    '✓ Практический опыт восстановления здоровья',
                    '✓ Построение успешной команды',
                  ].map(item => (
                    <p key={item} style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', padding: '4px 0', textAlign: 'left' }}>{item}</p>
                  ))}
                </div>
                <Link href="/about" style={{
                  display: 'block', background: 'rgba(255,255,255,0.15)', color: '#fff',
                  padding: '10px', borderRadius: 10, fontSize: 13, fontWeight: 600,
                  transition: 'background .2s',
                }}>
                  Читать историю →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0,40 C200,70 400,10 600,40 C800,70 1000,10 1200,40 L1200,60 L0,60 Z" fill="var(--bg-color)" />
          </svg>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-color)' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', animation: 'fadeUp 0.7s ease both' }}>
            <span className="badge" style={{ marginBottom: 12 }}>Почему VIP INTERNATIONAL</span>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, marginBottom: 12 }}>
              Продукция, которой доверяют
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto' }}>
              Натуральные продукты для здоровья, красоты и хорошего самочувствия
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {features.map((f, i) => (
              <div key={f.title} className="card" style={{ padding: '1.75rem', animation: `fadeUp 0.6s ${i * 0.1}s ease both` }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: 'var(--primary-bg)', color: 'var(--primary)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 18, fontWeight: 800, marginBottom: 16,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Profile ── */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--gray-bg)' }}>
        <div className="section-container">
          <div className="responsive-grid-profile responsive-gap" style={{ alignItems: 'center' }}>
            {/* Visual */}
            <div>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                borderRadius: 24, padding: '2.5rem',
                boxShadow: '0 20px 60px rgba(108,79,212,0.3)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -30, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
                <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 100, height: 100, minWidth: 100, minHeight: 100, flexShrink: 0, borderRadius: '50%',
                    margin: '0 auto 16px', overflow: 'hidden',
                    border: '3px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}>
                    <img src="/images/roza-shataeva.jpg" alt="Роза Шотаева" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 800, marginBottom: 4 }}>Личная история</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600, marginBottom: 20 }}>Роза Шотаева</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                    {stats.map(s => (
                      <div key={s.label} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '12px 8px', textAlign: 'center', flex: '1 1 80px', minWidth: 80 }}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>{s.value}</div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <ExpandableStory />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #022c22 0%, var(--primary) 100%)',
        color: '#fff', textAlign: 'center',
      }}>
        <div className="section-container">
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, marginBottom: 14 }}>
            Готовы присоединиться к команде?
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
            Рекомендуйте продукты для здоровья и зарабатывайте на розничных продажах
          </p>
          <a
            href="https://wa.me/77715597177?text=Здравствуйте, хочу в вашу команду!"
            target="_blank" rel="noreferrer"
            className="btn-primary"
            style={{ background: '#fff', color: 'var(--primary)', fontSize: 15 }}>
            ПРИСОЕДИНЯЙСЯ СЕЙЧАС! →
          </a>
        </div>
      </section>
    </>
  )
}
