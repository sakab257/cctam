export interface Avis {
  id: string
  name: string
  rating: number
  date: string
  comment: string
  vehicle: string
  verified: boolean
}

export const avisClients: Avis[] = [
  {
    id: "1",
    name: "Sophie M.",
    rating: 5,
    date: "Il y a 2 semaines",
    comment: "Excellent service ! Personnel très professionnel et accueillant. Le contrôle a été rapide et efficace. Je recommande vivement ce centre.",
    vehicle: "Renault Clio",
    verified: true
  },
  {
    id: "2",
    name: "Pierre D.",
    rating: 5,
    date: "Il y a 1 mois",
    comment: "Prise de rendez-vous en ligne très pratique. Contrôle technique effectué rapidement avec des explications claires sur les points à surveiller.",
    vehicle: "Peugeot 308",
    verified: true
  },
  {
    id: "3",
    name: "Marie L.",
    rating: 5,
    date: "Il y a 3 semaines",
    comment: "Je suis venue pour une contre-visite et tout s'est très bien passé. L'équipe est sympathique et les tarifs sont transparents.",
    vehicle: "Citroën C3",
    verified: true
  },
  {
    id: "4",
    name: "Ahmed K.",
    rating: 4,
    date: "Il y a 1 semaine",
    comment: "Bon centre de contrôle technique, bien situé et facile d'accès. Le personnel est compétent et le délai d'attente est raisonnable.",
    vehicle: "Toyota Yaris",
    verified: true
  },
  {
    id: "5",
    name: "Isabelle R.",
    rating: 5,
    date: "Il y a 2 mois",
    comment: "Très satisfaite du service. Le contrôle technique a été fait dans les temps et le rapport est très détaillé. Prix corrects.",
    vehicle: "Volkswagen Polo",
    verified: true
  },
  {
    id: "6",
    name: "David B.",
    rating: 5,
    date: "Il y a 3 semaines",
    comment: "Premier contrôle technique dans ce centre et je ne suis pas déçu. Professionnel, rapide et honnête. Je reviendrai !",
    vehicle: "BMW Serie 3",
    verified: true
  }
]

export const statsAvis = {
  totalAvis: 351,
  noteMoyenne: 4.8,
  repartition: {
    5: 351,
    4: 53,
    3: 6,
    2: 4,
    1: 10
  }
}
