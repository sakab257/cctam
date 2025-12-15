import { avisClients } from '@/lib/avis-data'
import { AvisHeader } from './avis-header'
import { AvisCard } from './avis-card'

const Avis = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] w-full bg-linear-to-br from-blue-50 via-white to-indigo-50 md:snap-start scroll-mt-20 py-12 md:py-16 overflow-hidden"
      id="avis"
      aria-labelledby="avis-title"
    >
      <div className="container mx-auto px-4">
        {/* Header with stats */}
        <AvisHeader />

        {/* Avis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {avisClients.map((avis) => (
            <AvisCard key={avis.id} avis={avis} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous aussi, partagez votre expérience
          </p>
          <a
            href="https://www.google.com/search?q=cctam+le+blanc+mesnil"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Laisser un Avis Google
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}

export default Avis