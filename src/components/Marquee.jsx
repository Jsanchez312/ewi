import './Marquee.css'

/**
 * Marquee — infinite horizontal loop of repeated text.
 * Used for the footer's "TRABAJA CON FOKUS" band.
 */
export default function Marquee({ text, speed = 28, outline = false }) {
  const items = new Array(8).fill(text)
  return (
    <div className="marquee">
      <div
        className={`marquee__track ${outline ? 'marquee__track--outline' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <span className="marquee__dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
