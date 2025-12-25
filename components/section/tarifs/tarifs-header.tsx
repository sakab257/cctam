import { Info } from 'lucide-react'

export const TarifsHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8">
      <div className="inline-block mb-4">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          Tarifs & Horaires
        </span>
      </div>
      <h2
        id="tarifs-title"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
      >
        Nos <span className="text-primary">Tarifs</span>
      </h2>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        Des prix clairs et compétitifs pour tous vos contrôles techniques.<br/>
        Réservez en ligne et bénéficiez d'une réduction !
      </p>
    </div>
  )
}

interface PromoAlertProps {
  promoNote: string
}

export const PromoAlert = ({ promoNote }: PromoAlertProps) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-linear-to-r from-primary to-blue-600 text-white px-6 py-4 rounded-xl shadow-lg inline-flex items-start gap-3 max-w-2xl">
        <Info className="h-5 w-5 mt-0.5 shrink-0" />
        <p className="text-sm text-left leading-relaxed">
          <strong>Promotion Web :</strong> {promoNote}
        </p>
      </div>
    </div>
  )
}
