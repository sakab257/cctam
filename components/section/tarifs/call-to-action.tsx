import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const CallToAction = () => {
  return (
    <div className="text-center mt-12">
      <p className="text-gray-600 mb-4 text-lg">
        Prêt à prendre rendez-vous ?
      </p>
      <Link
        href="#hero-section"
        className="inline-flex items-center gap-2 bg-linear-to-r from-primary to-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-2xl hover:shadow-primary/50 group"
      >
        Réserver Mon Contrôle Technique
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
