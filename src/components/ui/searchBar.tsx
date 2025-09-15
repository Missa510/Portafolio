"use client"

import React, { type HTMLProps } from "react";
import { useProject } from "$_app/hook/useProject";
import { Proyectos_const } from "$_libs/constantes";

export default function SearchBar({ props }: { props?: HTMLProps<HTMLFormElement> }) {
    const { updateProjectsParams, clearParams, projectsParams } = useProject();
    const { technologies } = Array.from(Proyectos_const).reduce((acc, proyect) => {
        acc.technologies.push(...proyect.technologies)
        return acc
    }, { technologies: [] as string[] })

    const handlerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const inputType = e.target.type
        const valorActual = e.target.value
        const nameInput = e.target.name

        console.log({ inputType, valorActual, nameInput })

        switch (inputType) {
            case "text":
                updateProjectsParams({ title: valorActual })
                break;
            case "date":
                if (nameInput === "dateInit") {
                    updateProjectsParams({ date: [new Date(valorActual), projectsParams.date[1] || undefined] })
                } else if (nameInput == "dateFinish") {
                    updateProjectsParams({ date: [projectsParams.date[0] || undefined, new Date(valorActual)] })
                } else return

                break;
            case "checkbox":
                updateProjectsParams({ [nameInput]: e.target.checked })
                break;
            case "select-multiple":
                const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions).map(option => option.value);
                updateProjectsParams({ technologies: selectedOptions });
                break;
            default: break;
        }

    }

    const handlerClearButton = () => clearParams()

    const handlerSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(projectsParams)
    }

    return <form {...props}
        method="post"
        onSubmit={handlerSumbit}
        className="bg-slate-600 rounded-lg px-6 py-3 mb-3 flex flex-col justify-center gap-3">

        <h1 className="text-2xl text-center">Buscar proyecto por...</h1>

        <div id="titleDiv" className="grid gap-2">
            <label htmlFor="title">Titulo</label>
            <input type="text" id="title" name="title" className="block min-w-0 grow bg-gray-800 py-1.5 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg" onChange={handlerInputChange} />
        </div>

        <label htmlFor="date">Rango de Fechas</label>

        <div id="date" className="grid grid-cols-2 gap-3">
            <label htmlFor="dateInit">Desde</label>
            <input type="date" id="dateInit" name="dateInit" className="block min-w-0 grow bg-gray-800 py-1.5 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg" onChange={handlerInputChange} />
            <label htmlFor="dateFinish">Hasta</label>
            <input type="date" id="dateFinish" name="dateFinish" className="block min-w-0 grow bg-gray-800 py-1.5 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg" onChange={handlerInputChange} />
        </div>

        <div id="checks" className="grid grid-cols-2 gap-3">
            <label htmlFor="hasPreview">Vista previa</label>
            <input type="checkbox" name="hasPreview" id="hasPreview" defaultChecked={projectsParams.hasPreview} onChange={handlerInputChange} />
            <label htmlFor="hasCode">Vista del código</label>
            <input type="checkbox" name="hasCode" id="hasCode" defaultChecked={projectsParams.hasCode} onChange={handlerInputChange} />
        </div>

        <div id="techs" className="grid grid-cols-2 gap-3">
            <label htmlFor="tech">Tecnologías</label>
            <select size={5} multiple name="tech" id="tech" className="col-start-1 row-start-1 w-full appearance-none rounded-lg bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={handlerInputChange}>
                {technologies.filter((tech, index, self) => self.indexOf(tech) === index).map((tech, index) => {
                    return (
                        <option key={index} value={tech}>{tech}</option>
                    )
                })}
            </select>
        </div>

        <button type="reset" className="bg-slate-400 rounded-lg px-4 py-2 transition hover:bg-slate-700 hover:scale-110 active:bg-slate-800" onClick={handlerClearButton}> Limpiar filtros </button>
        <button type="submit" className="bg-slate-400 rounded-lg px-4 py-2 transition hover:bg-slate-700 hover:scale-110 active:bg-slate-800"> Ver estado </button>

    </form>
}