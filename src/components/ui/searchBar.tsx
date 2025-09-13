"use client"

import { useRef, useEffect, type HTMLProps } from "react";

export default function SearchBar({ props }: { props?: HTMLProps<HTMLFormElement> }) {
    const formRef = useRef(null)

    useEffect(() => {
        if (formRef.current) {
            formRef.current.addEventListener("submit", (e) => {
                e.preventDefault()
                console.log(new FormData(formRef.current))
            })
        }
    }, [])

    return <form {...props} ref={formRef} method="post" className="bg-slate-600 rounded-lg px-6 py-3 mb-3 grid place-items-center">
        <h1 className="text-2xl text-center">Buscar proyecto por...</h1>
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="date">Rango de Fechas</label>
        <div id="date">
            <input type="date" id="dateInit" name="dateInit" />
            <input type="date" id="dateFinish" name="dateFinish" />
        </div>
        <label htmlFor="checks">Por previa</label>
        <div id="checks">
            <label htmlFor="hasPreview">Vista previa</label>
            <input type="checkbox" name="hasPreview" id="hasPreview" />
            <label htmlFor="hasCode">Vista del código</label>
            <input type="checkbox" name="hasCode" id="hasCode" />
        </div>
        <button onClick={() => {}}> Limpiar filtros </button>
    </form>
}