'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ExpandableStory() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <span className="badge" style={{ marginBottom: 14 }}>О себе</span>
      <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 800, marginBottom: 16 }}>
        Путь к здоровью и успеху
      </h2>
      
      <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 14 }}>
        <strong>Моя точка отсчета: Январь 2025</strong><br/>
        Мое знакомство с VIP International началось не с бизнеса, а с личной необходимости. Как и многие, я искала решение для поддержания здоровья и нашла его в инновационных турецких технологиях. Придя в компанию «на продукт», я получила результат, который превзошел мои ожидания. Когда ты на себе ощущаешь энергию и восстановление, молчать об этом невозможно.
      </p>

      {expanded && (
        <div style={{ animation: 'fadeIn 0.4s ease' }}>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 14 }}>
            <strong>От результата к миссии</strong><br/>
            Видя мои изменения, ко мне начали обращаться люди. Мой опыт профессионального педагога помог мне структурировать эти знания и создать «Классы здоровья». Это не просто встречи — это пространство, где мы учим людей заботиться о себе, используя клеточное питание и трансдермальные пластыри.
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 14 }}>
            <strong>Сегодня: Статус Бриллианта</strong><br/>
            На сегодняшний день я достигла почетного статуса Diamond (Бриллиант). Для меня это не просто красивая квалификация, а подтверждение того, скольким людям я и моя команда смогли помочь.
          </p>

          <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '16px 20px', borderRadius: 12, marginBottom: 14, borderLeft: '4px solid var(--primary)' }}>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 700 }}>Мои достижения сейчас:</p>
            <ul style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)', margin: 0, paddingLeft: 20 }}>
              <li><strong>Здоровье:</strong> Личный результат, ставший фундаментом моей уверенности.</li>
              <li><strong>Команда:</strong> Сплоченное сообщество единомышленников, которые несут ценности ЗОЖ в мир.</li>
              <li><strong>Финансовая свобода:</strong> Дополнительный доход, который позволяет чувствовать уверенность в завтрашнем дне и масштабировать свои проекты.</li>
            </ul>
          </div>

          <p style={{ fontSize: 15, lineHeight: 1.85, color: 'var(--text-muted)', marginBottom: 24 }}>
            <em>«Ценность в партнерстве»</em> — это девиз нашей компании, и я приглашаю каждого стать партнером своего собственного здоровья и успеха.
          </p>
        </div>
      )}

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
        {!expanded ? (
          <button onClick={() => setExpanded(true)} className="btn-primary" style={{ cursor: 'pointer', border: 'none', fontFamily: 'inherit' }}>
            Читать полную историю
          </button>
        ) : (
          <Link href="/about" className="btn-primary">
            Узнать больше о компании
          </Link>
        )}
        <a
          href="https://wa.me/77782569912?text=Здравствуйте, я пишу вам с сайта"
          target="_blank" rel="noreferrer"
          className="btn-secondary">
          Написать на WhatsApp
        </a>
      </div>
    </div>
  )
}
