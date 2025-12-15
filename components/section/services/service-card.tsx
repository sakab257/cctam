import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Service } from '@/lib/services-data'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: Service
}

const colorVariants = {
  blue: {
    icon: "bg-blue-100 text-blue-600",
    highlight: "border-blue-300 shadow-blue-100",
    check: "text-blue-600"
  },
  red: {
    icon: "bg-red-100 text-red-600",
    highlight: "border-red-300 shadow-red-100",
    check: "text-red-600"
  },
  purple: {
    icon: "bg-purple-100 text-purple-600",
    highlight: "border-purple-300 shadow-purple-100",
    check: "text-purple-600"
  },
  green: {
    icon: "bg-green-100 text-green-600",
    highlight: "border-green-300 shadow-green-100",
    check: "text-green-600"
  }
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon
  const colors = colorVariants[service.color]

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        service.highlighted && `${colors.highlight} shadow-lg`
      )}
    >
      {service.highlighted && (
        <div className="absolute top-0 right-0 bg-linear-to-l from-primary to-blue-500 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
          Populaire
        </div>
      )}

      <CardHeader>
        <div className="flex items-start gap-4">
          <div className={cn(
            "p-3 rounded-lg transition-transform duration-300 group-hover:scale-110",
            colors.icon
          )}>
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {service.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2" role="list">
          {service.features.map((feature, index) => (
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
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  )
}
