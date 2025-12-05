import { links_contacto } from "$_libs/constantes"
import { links_header } from "$_libs/constantes"
import EmailSender from "$_compon/ui/emailSender"
import Modal from "$_compon/ui/Modal";
import { useState } from "react";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <footer className="w-full bg-slate-800 mt-6 px-6 py-3" id="contact">
            <section className="flex items-center justify-center md:justify-start-left">
                <h1 className="uppercase font-bold text-lg md:text-2xl text-slate-200">Contactos personales</h1>
            </section>
            <section className="grid place-items-center md:grid-cols-2 gap-y-3 md:gap-x-6">
                <section className="grid gap-3">
                    {
                        links_contacto.slice(3).map((contacto) => {
                            const { name, link, opc, icon } = contacto
                            return (
                                <div key={name} className="flex gap-5 items-center">
                                    {icon({ className: "h-8 w-auto" })}
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
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                    onClick={handleOpenModal}
                >
                    Enviar email
                </button>
            </section>
            <hr className="my-3" />
            <h1 className="text-center text-lg md:text-2xl text-slate-300">Sitio hecho por mí mismo ❤️ | Abril 2025</h1>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Contacto directo" description="Este ese un formulario el cual puedes mandar un email directamente desde la página. Si este no funciona, puedes usar el que está en el footer.">
                <EmailSender />
            </Modal>
        </footer>
    )
}