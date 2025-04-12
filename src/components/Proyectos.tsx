"use client"

import Proyecto from "$_compon/Proyecto";
import { Proyectos_const } from "$_libs/constantes"
import { LeftArrow, RightArrow } from "$_compon/ui/icons_svgs"
import { useState, useEffect, useRef } from "react"

export default function Proyectos() {

    const [cuIndex, setCuIndex] = useState<number>(0)
    const carruselRef = useRef(null)

    const handleNext = () => {
        // Es para que avanze sin discriminación y se devuelve al inicio si es la última
        setCuIndex((prev_index) => (prev_index + 1) % Proyectos_const.length)
    }

    const handlePrev = () => {
        // Es para que retroceda sin discriminación y va al último si es el inicio
        setCuIndex((prev_index) => (prev_index - 1 + Proyectos_const.length) % Proyectos_const.length)
    }

    useEffect(() => {
        if (carruselRef.current) {
            carruselRef.current.style.transform = `translateX(-${cuIndex * 100}%)`
        }
    }, [cuIndex])

    return (

        <article id="proyectos" className="px-4 py-3 grid gap-5 item-center bg-slate-700 p-4 rounded-md shadow-lg">
            <section className="my-1">
                <h1 className="text-2xl xs:text-4xl md:text-7xl text-center uppercase text-white">Proyectos</h1>
                <h3 className="text-center mt-2 text-md md:text-2xl italic text-stone-400">Haz hover en la imagen o click para ver la información del proyecto</h3>
            </section>

            <section className="overflow-hidden relative">
                <section ref={carruselRef} className="relative h-max gap-3 md:gap-0 grid md:inline-flex md:transition-transform md:duration-[650ms] md:esae-in-out">
                    {
                        Proyectos_const.map(proyecto => {
                            return <Proyecto key={proyecto.id} {...proyecto} />
                        })
                    }
                </section>

                <button
                    onClick={handlePrev}
                    className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-700 hover:bg-gray-900 active:bg-slate-950 text-white p-2 rounded-full"
                >
                    <LeftArrow clases="h-8 w-8"/>
                </button>

                <button
                    onClick={handleNext}
                    className="hidden md:block absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-700 hover:bg-gray-900 active:bg-slate-950 text-white p-2 rounded-full"
                >
                    <RightArrow clases="h-8 w-8"/>
                </button>
            </section>
        </article>
    )
}