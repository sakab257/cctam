'use client';
import { links, otherLinks } from "@/lib/links"
import Link from "next/link"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Plus, Menu, Calendar, Clock, Phone, MapPin } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { schedules, centerInfo } from "@/lib/tarifs-data"

export const Navbar = () => {
    return (
        <nav aria-label="Navigation principale">
            <ul className="flex items-center gap-2">
                {links.map((link) => (
                    <li key={link.title}>
                        <Link
                            href={link.href}
                            aria-label={link.description}
                            title={link.description}
                            className="relative capitalize text-gray-700 font-medium px-1 py-2 transition-colors duration-300 hover:text-primary group"
                        >
                            {link.title}
                            <span
                                className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"
                                aria-hidden="true"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export const Other = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="ghost"
                    size={'icon'}
                    className="hover:text-primary"
                    aria-label="Ouvrir le menu des liens supplémentaires"
                    title="Plus de liens"
                >
                    <Plus aria-hidden="true" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="z-1001">
                <nav aria-label="Liens secondaires">
                    <h3 className="text-sm font-semibold text-gray-500 mb-4">Autres liens</h3>
                    <ul className="flex flex-col gap-y-4">
                        {otherLinks.map((link) => (
                            <li key={link.title}>
                                <Link
                                    href={link.href}
                                    aria-label={link.description}
                                    title={link.description}
                                    className="relative capitalize text-gray-700 font-medium px-1 py-2 transition-colors duration-300 hover:text-primary group"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </PopoverContent>
        </Popover>
    )
}

export const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon-lg"
                    className="lg:hidden"
                    aria-label="Ouvrir le menu de navigation mobile"
                    aria-expanded={open}
                >
                    <Menu className="h-8 w-8" aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100 z-1002 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl">Menu de navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 pb-6">
                    <nav aria-label="Navigation principale mobile">
                        <ul className="flex flex-col gap-2">
                            <Link href="#hero-section" className="w-full px-4">
                                <Button className="font-bold text-lg py-6 w-full">
                                    <Calendar className="h-5 w-5" aria-hidden="true" />
                                    Prendre RDV
                                </Button>
                            </Link>
                            {links.map((link) => (
                                <li key={link.title}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        aria-label={link.description}
                                        title={link.description}
                                        className="block capitalize text-gray-700 font-medium px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:text-primary"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="border-t pt-6">
                        <h3 className="text-sm font-semibold text-gray-500 mb-4 px-4">Autres liens</h3>
                        <nav aria-label="Liens secondaires mobile">
                            <ul className="flex flex-col gap-2">
                                {otherLinks.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            aria-label={link.description}
                                            title={link.description}
                                            className="block capitalize text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 hover:text-primary"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Section Informations */}
                    <div className="border-t pt-6">
                        <h3 className="text-sm font-semibold text-gray-500 mb-4 px-4">Informations</h3>
                        <div className="flex flex-col gap-3 px-4">
                            {/* Horaires */}
                            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                                    <Clock className="h-4 w-4 text-blue-600" aria-hidden="true" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-900">{schedules[0].days}</span>
                                    <span className="text-xs text-gray-600">{schedules[0].hours}</span>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <a
                                href={`tel:${centerInfo.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                            >
                                <div className="p-2 bg-green-100 rounded-lg shrink-0">
                                    <Phone className="h-4 w-4 text-green-600" aria-hidden="true" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-900">{centerInfo.phone}</span>
                                    <span className="text-xs text-gray-600">Appelez-nous</span>
                                </div>
                            </a>

                            {/* Adresse */}
                            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                                <div className="p-2 bg-red-100 rounded-lg shrink-0">
                                    <MapPin className="h-4 w-4 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-900">Le Blanc-Mesnil</span>
                                    <span className="text-xs text-gray-600">{centerInfo.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
