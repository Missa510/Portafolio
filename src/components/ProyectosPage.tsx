"use client"

import { Card } from "$_compon/ui/card";
import { useState, useId, useEffect } from "react"; // NOTA: Quería usar el useId, no es relevante en el resto de la app. Feliz resto de día <3
import { useProject } from "$_app/hook/useProject";
import { Proyectos_const } from "$_libs/constantes";
import { ProyectoItem } from "$_compon/Proyecto";
import { Loading } from "$_compon/ui/loading";
import { NotFound } from "$_compon/ui/notFound";
export default function ProyectosPage() {

    const proyects_id = useId()
    const [Proyectos, setProyectos] = useState(Proyectos_const)
    const [empty, setEmpty] = useState(false)
    const { projectsParams, isDebouncing, setDebouncedDelay = 1500 } = useProject()

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
            className: "grid gap-5 w-full px-4 py-5 grid bg-slate-700 rounded-md shadow-lg"
        }}>
            <h1 className="text-2xl lg:text-6xl text-center">Resultados</h1>
            {isDebouncing && <Loading />}
            {empty ?
                <NotFound /> :
                <section className="grid place-items-center container mx-auto gap-8">
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