import React from 'react'
import { services } from '@/lib/services-data'
import { ServiceCard } from './service-card'

export const Services = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] w-full bg-linear-to-br from-gray-50 via-white to-blue-50 md:snap-start scroll-mt-20 py-12 md:py-16 overflow-hidden"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Nos Services
            </span>
          </div>
          <h2
            id="services-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Des Services Complets pour{' '}
            <span className="text-primary">Votre Sécurité</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Du contrôle technique automobile aux deux-roues, nous vous accompagnons
            avec professionnalisme et expertise dans tous vos besoins.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-4">
            Prêt à prendre rendez-vous pour votre contrôle technique ?
          </p>
          <a
            href="#hero-section"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            Prendre Rendez-Vous Maintenant
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true" />
    </section>
  )
}
