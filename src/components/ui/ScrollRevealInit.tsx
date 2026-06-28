'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

/**
 * Ce composant n'affiche rien — il monte juste le hook useScrollReveal.
 * On l'importe dans page.tsx (Server Component) pour initialiser les
 * animations sans rendre toute la page côté client.
 */
export default function ScrollRevealInit() {
  useScrollReveal()
  return null
}
