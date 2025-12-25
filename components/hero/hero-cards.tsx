import { Clock, Phone, MapPin, LucideIcon } from 'lucide-react'
import React from 'react'
import { schedules, lbmInfo } from '@/lib/tarifs-data'

interface HeroCardProps {
    icon: LucideIcon
    title: string
    subtitle?: string
    color: 'blue' | 'red' | 'green'
}

const colorVariants = {
    blue: {
        bg: "bg-blue-100",
        text: "text-blue-600"
    },
    red: {
        bg: "bg-red-100",
        text: "text-red-600"
    },
    green: {
        bg: "bg-green-100",
        text: "text-green-600"
    }
}

const HeroCard = ({ icon: Icon, title, subtitle, color }: HeroCardProps) => {
    const colors = colorVariants[color]

    return (
        <div className="w-full bg-white rounded-xl shadow-lg p-4 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group z-100">
            <div className="flex items-center gap-3">
                <div className={`p-2.5 ${colors.bg} rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                    {subtitle && <p className="text-[10px] text-gray-600">{subtitle}</p>}
                </div>
            </div>
        </div>
    )
}

export const HeroCards = () => {
    return (
        <>
            <HeroCard
                icon={Clock}
                title={schedules[0].days}
                subtitle={schedules[0].hours}
                color="blue"
            />
            <HeroCard
                icon={MapPin}
                title="Le Blanc-Mesnil"
                subtitle="17 rue Corneille, 93150 Le Blanc-Mesnil"
                color="blue"
            />
            <HeroCard
                icon={MapPin}
                title="Ivry Sur Seine"
                subtitle="3-5 bd Hippolyte Marquès, 94200 Ivry-sur-Seine"
                color="blue"
            />
        </>
    )
}

export default HeroCard