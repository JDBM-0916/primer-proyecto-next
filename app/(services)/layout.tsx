import { NavBar } from "@/components";

export default function LayoutGeneral({ children }: { children: React.ReactNode; }) {
    return (
        <>

        <NavBar></NavBar>
            <main className='flex flex-col items-center p-24'>
                <span className="text-teal-400 text-6xl">contenido repetitivo</span>
                {children}
            </main>
        </>
    );
}