"use client"

import { Card } from "$_compon/ui/card";
import { useState, useId, useEffect } from "react"; // NOTA: Quería usar el useId, no es relevante en el resto de la app. Feliz resto de día <3
import { useProject } from "$_app/hook/useProject";
import { Proyectos_const } from "$_libs/constantes";
import type { ProyectoProps } from "$_types/tipos";
import { CodeIcon, DemoIcon } from "$_compon/ui/icons_svgs";
import Brant from "$_compon/ui/brant";

const ProyectoItem: React.FC<ProyectoProps> = ({ title, descriptionEn, date, image, technologies, git, demo, partners }) => {

    return (

        <section className="flex flex-col gap-3 justify-center items-center max-w-[60ch] bg-slate-800 p-4 rounded-lg">
            <h1 className="text-center font-[600] text-2xl">{title}</h1>
            <span className="text-lg text-cyan-400">Created at: {new Date(date).toLocaleDateString()}</span>
            <img src={`../../${image}`} alt={`Project image: ${title}`} className="rounded-lg" />
            <p className="text-balance text-stone-300 text-center">{descriptionEn}</p>
            <div className="grid gap-3">
                <h2 className="text-center font-[600] text-xl">Technoligies</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    {technologies.map((technology, index) => (
                        <Brant key={index} tech={technology} />
                    ))}
                </div>
            </div>
            <div className="flex gap-4">
                {demo && <a className="inline-flex items-center w-full gap-4 bg-stone-600 text-white px-4 py-2 rounded md:text-xl hover:bg-stone-900 focus:bg-stone-900 transition-all duration-200 ease-in-out" href={demo} target="_blank" rel="noopener noreferrer" aria-disabled>
                    <DemoIcon clases="text-white h-5 nd:h-6 w-auto" />
                    Watch project
                </a>}
                {git && <a className="inline-flex items-center w-full gap-4 bg-slate-600 text-white px-4 py-2 rounded md:text-xl hover:bg-slate-900 focus:bg-slate-900 transition-all duration-200 ease-in-out" href={git} target="_blank" rel="noopener noreferrer">
                    <CodeIcon clases="text-white h-4 md:h-8 w-auto" />
                    View source code
                </a>}
            </div>
            {partners && <div className="grid place-items-center gap-2">
                <h2 className="text-center font-[600] text-xl">Partners</h2>
                <div className="flex justify-center flex-wrap gap-1">
                    <span>I made this project with: </span>
                    <div>
                        {partners.map((partner, index) => (
                            <a key={index} className="hover:underline hover:text-cyan-300" href={partner.link} target="_blank" rel="noopener noreferrer">{partner.name}</a>
                        ))}
                    </div>
                </div>
            </div>}
        </section>

    );
};

export default function ProyectosPage() {

    const proyects_id = useId()
    const [Proyectos, setProyectos] = useState(Proyectos_const)
    const [empty, setEmpty] = useState(false)
    const { projectsParams, isDebouncing } = useProject()

    const buscarProyectos = () => {
        const { title, date, technologies, hasPreview, hasCode, hasPartners } = projectsParams;

        const filteredProyectos = Proyectos_const.filter(proyecto => {
            // Filtrado por título
            if (title && !proyecto.title.toLowerCase().includes(title.toLowerCase())) {
                return false;
            }

            // Filtrado por fecha
            if (date && date.length === 2) {
                const projectDate = new Date(proyecto.date);
                const [startDate, endDate] = date;
                if (startDate && projectDate < startDate) {
                    return false;
                }
                if (endDate && projectDate > endDate) {
                    return false;
                }
            }

            // Filtrado por tecnologías
            if (technologies && technologies.length > 0) {
                const hasAllTechnologies = technologies.every(tech => proyecto.technologies.includes(tech));
                if (!hasAllTechnologies) {
                    return false;
                }
            }

            // Filtrado por hasPreview
            if (hasPreview && !proyecto.demo) {
                return false;
            }

            // Filtrado por hasCode
            if (hasCode && !proyecto.git) {
                return false;
            }

            // Filtrado por hasPartners
            if (hasPartners && (!proyecto.partners || proyecto.partners === undefined)) {
                return false;
            }

            return true;
        });

        setProyectos(filteredProyectos);
        setEmpty(filteredProyectos.length === 0);
    };

    useEffect(buscarProyectos, [projectsParams])

    return (
        <Card props={{
            id: proyects_id,
            className: "grid gap-3 w-full px-4 py-3 grid bg-slate-700 rounded-md shadow-lg"
        }}>
            <h1 className="text-2xl lg:text-6xl text-center">Resultados</h1>
            {isDebouncing && <p>Searching...</p>}
            {empty ?
                <h1>
                    Error! There's no exist that kind of project
                </h1> :
                <section className="grid place-items-center lg:grid-cols-2 gap-3">
                    {Proyectos.map((proyectExist, index) => {
                        return (
                            <ProyectoItem key={index} {...proyectExist} />
                        )
                    })}
                </section>
            }

        </Card>
    )
}