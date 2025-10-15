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
        const inputValue = e.target.value
        const inputName = e.target.name

        // console.log({ inputType, inputValue, inputName })

        switch (inputType) {
            case "text":
                updateProjectsParams({ title: inputValue })
                break;
            case "date":
                if (inputName === "dateInit") {
                    updateProjectsParams({ date: [new Date(inputValue), projectsParams.date[1] || undefined] })
                } else if (inputName == "dateFinish") {
                    updateProjectsParams({ date: [projectsParams.date[0] || undefined, new Date(inputValue)] })
                } else return

                break;
            case "checkbox":
                updateProjectsParams({ [inputName]: e.target.checked })
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
        className="bg-slate-600 rounded-lg px-6 py-3 mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-center gap-4 [&>div>label]:text-stone-300 [&>div>h2]:text-stone-300">

        <h1 className="text-2xl text-center md:col-span-2 lg:col-span-3 xl:col-span-5">Search project by...</h1>

        <div className="grid gap-2 ">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" className="block w-full min-w-0 grow bg-gray-800 py-1.5 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg" onChange={handlerInputChange} />
        </div>

        <div className="grid grid-cols-2 gap-3">
            <h2 className="col-span-2">Date range</h2>
            <label htmlFor="dateInit">From</label>
            <input type="date" id="dateInit" name="dateInit" className="block w-full min-w-0 grow bg-gray-800 py-1.5 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg" onChange={handlerInputChange} />
            <label htmlFor="dateFinish">To</label>
            <input type="date" id="dateFinish" name="dateFinish" className="block w-full min-w-0 grow bg-gray-800 py-1.5 px-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 rounded-lg" onChange={handlerInputChange} />
        </div>

        <div className="grid grid-cols-2 gap-3 items-center">
            <label htmlFor="hasPreview">Deployed</label>
            <input type="checkbox" name="hasPreview" id="hasPreview" className="appearance-none w-6 h-6 bg-gray-800 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none" defaultChecked={projectsParams.hasPreview} onChange={handlerInputChange} />
            <label htmlFor="hasCode">Source code</label>
            <input type="checkbox" name="hasCode" id="hasCode" className="appearance-none w-6 h-6 bg-gray-800 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none" defaultChecked={projectsParams.hasCode} onChange={handlerInputChange} />

            <label htmlFor="hasPartners">Partnership</label>
            <input type="checkbox" name="hasPartners" id="hasPartners" className="appearance-none w-6 h-6 bg-gray-800 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none" defaultChecked={projectsParams.hasPartners} onChange={handlerInputChange} />
        </div>

        <div className="grid gap-2">
            <label htmlFor="tech">Technologies</label>
            <select size={5} multiple name="tech" id="tech" className="w-full appearance-none rounded-lg bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={handlerInputChange}>
                {technologies.filter((tech, index, self) => self.indexOf(tech) === index).map((tech, index) => {
                    return (
                        <option key={index} value={tech}>{tech}</option>
                    )
                })}
            </select>
        </div>

        <div className="flex lg:flex-col gap-3 justify-evenly items-center w-full">
            <button type="reset" className="bg-slate-400 rounded-lg px-4 py-2 transition hover:bg-slate-700 hover:scale-105 active:bg-slate-800 w-full" onClick={handlerClearButton}> Clear filters </button>
        </div>

    </form>
}