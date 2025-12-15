import { Car, Bike, Truck, ClipboardCheck, Wrench, Shield } from "lucide-react"

export interface Service {
  id: string
  title: string
  description: string
  icon: any
  features: string[]
  highlighted?: boolean
  color: "blue" | "red" | "purple" | "green"
}

export const services: Service[] = [
  {
    id: "ct-auto",
    title: "Contrôle Technique Auto",
    description: "Contrôle technique complet pour votre véhicule particulier conforme à la réglementation en vigueur.",
    icon: Car,
    color: "blue",
    highlighted: true,
    features: [
      "Contrôle de 133 points",
      "Résultats immédiats",
      "Expertise reconnue",
      "Tarifs transparents"
    ]
  },
  {
    id: "ct-moto",
    title: "Contrôle Technique Moto",
    description: "Contrôle technique spécialisé pour votre deux-roues motorisé de plus de 125cm³.",
    icon: Bike,
    color: "red",
    features: [
      "Contrôleurs certifiés moto",
      "Équipement spécialisé",
      "Prise en charge rapide",
      "Conseil personnalisé"
    ]
  },
  {
    id: "ct-vsp",
    title: "Contrôle Technique VSP",
    description: "Contrôle technique adapté pour les voitures sans permis et quadricycles légers.",
    icon: Truck,
    color: "purple",
    features: [
      "Expertise VSP",
      "Contrôle adapté",
      "Accueil personnalisé",
      "Rendez-vous flexible"
    ]
  },
  {
    id: "contre-visite",
    title: "Contre-Visite",
    description: "Vérification des réparations suite à un contrôle technique avec défaillances majeures.",
    icon: ClipboardCheck,
    color: "green",
    features: [
      "Délai de 2 mois",
      "Tarif préférentiel",
      "Sans rendez-vous",
      "Vérification ciblée"
    ]
  },
  {
    id: "retouche",
    title: "Retouche Avant CT",
    description: "Service de petites retouches et ajustements pour optimiser votre passage au contrôle technique.",
    icon: Wrench,
    color: "blue",
    features: [
      "Réglages lumineux",
      "Vérification niveaux",
      "Essuie-glaces",
      "Pneumatiques"
    ]
  },
  {
    id: "garantie",
    title: "Garantie Qualité",
    description: "Notre engagement : un service professionnel, rapide et transparent pour votre sécurité.",
    icon: Shield,
    color: "red",
    features: [
      "Équipement moderne",
      "Contrôleurs agréés",
      "Procédures certifiées",
      "Satisfaction garantie"
    ]
  }
]
