import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Precios',
    description: 'Precios del producto X = $ 121564156',
    keywords: ['About Page', 'fernando', 'home']
}

export default function ContactPage() {
    return (
        <>
            <h1 className="text-center text-7xl">Pagina de Pricing</h1>
        </>
    )
}