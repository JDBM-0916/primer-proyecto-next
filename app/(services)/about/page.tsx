import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'sobre Nosotros',
    description: 'descrpcion breve de lo que hacemos',
}
export default function AboutPage() {
    return (
        <main className='flex flex-col items-center p-24'>
            <span>pagina de inicio</span>
        </main>
    )
}