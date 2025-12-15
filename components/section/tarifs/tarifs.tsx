import { tarifs } from '@/lib/tarifs-data'
import { PricingCard } from './pricing-card'
import { TarifsHeader } from './tarifs-header'
import { TarifsTable } from './tarifs-table'
import { InfoCards } from './info-cards'
import { CallToAction } from './call-to-action'

const Tarifs = () => {
  // Featured tarifs to display as cards
  const featuredTarifs = [
    tarifs.find(t => t.id === 'contre-visite')!,
    tarifs.find(t => t.id === 'particulier')!,
    tarifs.find(t => t.id === 'hybride')!
  ]

  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] w-full bg-linear-to-br from-blue-50 via-white to-indigo-50 md:snap-start scroll-mt-20 py-12 md:py-16 overflow-hidden"
      id="tarifs"
      aria-labelledby="tarifs-title"
    >
      <div className="container mx-auto px-4">
        {/* Header with title and promo alert */}
        <TarifsHeader />

        {/* Featured Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {featuredTarifs.map((tarif) => (
            <PricingCard key={tarif.id} tarif={tarif} />
          ))}
        </div>

        {/* Complete pricing table */}
        <TarifsTable />

        {/* Info cards (schedule, address, contact) */}
        <InfoCards />

        {/* Call to action button */}
        <CallToAction />
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}

export default Tarifs
