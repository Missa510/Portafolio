import Proyecto from "$_compon/Proyecto";
import { Proyectos_const } from "$_libs/constantes"

export default function Proyectos() {

    return (

        <article className="px-4 py-3 grid gap-5 item-center bg-slate-700 p-4 rounded-md shadow-lg">
            <section className="my-1">
                <h1 id="proyectos" className="text-2xl xs:text-4xl md:text-7xl text-center uppercase text-white">Proyectos</h1>
                <h3 className="text-center mt-2 text-md md:text-2xl italic text-stone-400">Haz hover en la imagen o click para ver la información del proyecto</h3>
            </section>
            {
                Proyectos_const.map(proyecto => {
                    return <Proyecto key={proyecto.id} {...proyecto} />
                })
            }
        </article>
    )
}