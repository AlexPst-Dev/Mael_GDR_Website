'use client'

import { useEffect, useRef } from 'react'

/**
 * Observe les éléments [data-reveal] dans le DOM et leur ajoute
 * la classe "is-visible" quand ils entrent dans le viewport.
 *
 * On utilise l'IntersectionObserver natif plutôt que de calculer
 * les positions manuellement : c'est plus performant et plus fiable.
 */
export function useScrollReveal() {
  const hasSetupRef = useRef(false)

  useEffect(() => {
    if (hasSetupRef.current) return
    hasSetupRef.current = true

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const el = entry.target as HTMLElement
          const delay = parseInt(el.dataset.revealDelay ?? '0', 10)

          setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)

          // On arrête d'observer une fois l'élément révélé
          observer.unobserve(el)
        })
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const observe = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    }

    observe()

    // Re-observer après un court délai pour attraper les éléments
    // rendus en différé (images chargées, etc.)
    const timers = [100, 400, 1000].map((t) => setTimeout(observe, t))

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])
}
