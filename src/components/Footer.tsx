import { links_contacto } from "$_libs/constantes"
import { links_header } from "$_libs/constantes"

export default function Footer() {
    return (
        <footer className="w-full bg-slate-800 mt-6 px-6 py-3" id="contact">
            <section className="grid place-items-center md:grid-cols-2 gap-y-3 md:gap-x-6">
                <section className="grid gap-3">
                    <h1 className="uppercase text-center md:text-left font-bold text-lg md:text-2xl text-slate-200">Contactos personales</h1>
                    {
                        links_contacto.slice(3).map((contacto) => {
                            const { name, link, opc, icon } = contacto
                            return (
                                <div key={name} className="flex gap-5 items-center">
                                    {icon({ clases: "h-8 w-auto" })}
                                    <div className="grid justify-start">
                                        <span className="text-lg md:text-2xl">{name}</span>
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-md md:text-lg text-slate-400 hover:underline">{opc}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
                <section className="grid gap-3">
                    <h1 className="uppercase font-bold text-lg md:text-2xl text-slate-200">Links</h1>
                    {
                        links_header.map((ruta) => (
                            <a key={ruta.name} href={ruta.href} className="text-md md:text-lg text-slate-400 hover:underline">{ruta.name}</a>
                        ))
                    }
                </section>
            </section>
            <hr className="my-3" />
            <h1 className="text-center text-lg md:text-2xl text-slate-300">Sitio hecho por mí mismo ❤️ | Abril 2025</h1>
        </footer>
    )
}