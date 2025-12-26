"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/navigation/header"
import { Footer } from "@/components/navigation/footer"
import { AlertTriangle, Home, RotateCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            {/* Icon */}
            <div className="inline-flex p-4 bg-red-100 rounded-2xl mb-6">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>

            {/* Message */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Une erreur est survenue
            </h1>
            <p className="text-gray-600 mb-8">
              Nous sommes désolés, quelque chose s'est mal passé. Veuillez réessayer ou retourner à l'accueil.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                Réessayer
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                <Home className="h-5 w-5" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
