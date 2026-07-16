import { motion } from 'framer-motion'

/**
 * Reveal — wraps any block and fades/slides it in the first time
 * it enters the viewport. Used everywhere instead of one-off
 * transition code so every section animates in consistently.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  once = true,
  amount = 0.3,
  className = '',
  as = 'div',
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}
