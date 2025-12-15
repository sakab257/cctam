import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Tarif } from '@/lib/tarifs-data'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  tarif: Tarif
}

const colorVariants = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    badge: "bg-linear-to-r from-blue-500 to-blue-600 text-white",
    highlight: "border-blue-500 shadow-blue-200 bg-linear-to-br from-blue-50 via-white to-indigo-50",
    price: "text-blue-600",
    check: "text-blue-600",
    gradient: "from-blue-500/10 via-transparent to-indigo-500/10"
  },
  red: {
    icon: "bg-red-100 text-red-600",
    badge: "bg-linear-to-r from-red-500 to-orange-500 text-white",
    highlight: "border-red-500 shadow-red-200 bg-linear-to-br from-red-50 via-white to-orange-50",
    price: "text-red-600",
    check: "text-red-600",
    gradient: "from-red-500/10 via-transparent to-orange-500/10"
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    badge: "bg-linear-to-r from-purple-500 to-indigo-500 text-white",
    highlight: "border-purple-500 shadow-purple-200 bg-linear-to-br from-purple-50 via-white to-indigo-50",
    price: "text-purple-600",
    check: "text-purple-600",
    gradient: "from-purple-500/10 via-transparent to-indigo-500/10"
  },
  green: {
    icon: "bg-green-100 text-green-600",
    badge: "bg-linear-to-r from-green-500 to-emerald-500 text-white",
    highlight: "border-green-500 shadow-green-200 bg-linear-to-br from-green-50 via-white to-emerald-50",
    price: "text-green-600",
    check: "text-green-600",
    gradient: "from-green-500/10 via-transparent to-emerald-500/10"
  },
  orange: {
    icon: "bg-orange-100 text-orange-600",
    badge: "bg-linear-to-r from-orange-500 to-amber-500 text-white",
    highlight: "border-orange-500 shadow-orange-200 bg-linear-to-br from-orange-50 via-white to-amber-50",
    price: "text-orange-600",
    check: "text-orange-600",
    gradient: "from-orange-500/10 via-transparent to-amber-500/10"
  }
}

export const PricingCard = ({ tarif }: PricingCardProps) => {
  const Icon = tarif.icon
  const colors = colorVariants[tarif.color]

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
        tarif.popular && `${colors.highlight} shadow-xl border-2`
      )}
    >
      {/* Badge Promotion ou Populaire */}
      {tarif.badge && (
        <div className={cn(
          "absolute top-0 right-0 px-4 py-1.5 text-xs font-bold rounded-bl-lg shadow-md",
          colors.badge
        )}>
          {tarif.badge}
        </div>
      )}

      <CardHeader>
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
            colors.icon
          )}>
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{tarif.title}</CardTitle>
            <CardDescription className="text-sm">
              {tarif.description}
            </CardDescription>
          </div>
        </div>

        {/* Prix */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className={cn("text-4xl font-bold", colors.price)}>
            {tarif.price}€
          </span>
          {tarif.originalPrice && (
            <span className="text-lg text-gray-400 line-through">
              {tarif.originalPrice}€
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500">TTC - Prix fixe</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3" role="list">
          {tarif.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check
                className={cn("h-5 w-5 mt-0.5 shrink-0", colors.check)}
                aria-hidden="true"
              />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Decorative gradient on hover */}
      <div className={cn(
        "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        colors.gradient
      )} />
    </Card>
  )
}
