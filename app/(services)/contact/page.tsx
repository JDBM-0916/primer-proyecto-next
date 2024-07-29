import type {Metadata} from 'next'

export const metadata:Metadata = {
    title:'Contactanos',
    description: 'numeros de contacto +57 3118749411',
}
export default function ContactPage(){
    return(
        <>
        <h1 className="text-center text-7xl">Pagina de contactos</h1>
        </>
    )
}