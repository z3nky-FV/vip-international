interface PurpleBoxProps {
  width?: number | string
  height?: number | string
  shade?: string
  borderRadius?: number
  icon?: string
  label?: string
}

export default function PurpleBox({ width = '100%', height = 200, shade, borderRadius = 12, icon, label }: PurpleBoxProps) {
  const bg = shade
    ? `linear-gradient(135deg, ${shade} 0%, ${shade}cc 100%)`
    : 'linear-gradient(135deg, #6c4fd4 0%, #5a3cc4 100%)'

  return (
    <div
      style={{
        width, height, borderRadius,
        background: bg,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden', flexShrink: 0,
      }}>
      {/* Shine overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />
      {/* Circles */}
      <div style={{
        position: 'absolute', bottom: -24, right: -24,
        width: 120, height: 120, borderRadius: '50%',
        background: 'rgba(255,255,255,0.07)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: -16, left: -16,
        width: 80, height: 80, borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
      }} />
      {icon && <span style={{ fontSize: 36, position: 'relative', zIndex: 1 }}>{icon}</span>}
      {label && (
        <span style={{
          fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.85)',
          position: 'relative', zIndex: 1, marginTop: icon ? 8 : 0,
          textAlign: 'center', padding: '0 12px',
        }}>{label}</span>
      )}
    </div>
  )
}
