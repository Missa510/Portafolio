"use client"

import { Card } from "$_compon/ui/card";
import { useState, useEffect, useId } from "react";
import { Proyectos_const } from "$_libs/constantes";

export default function ProyectosPage() {

    const proyects_id = useId()

    return (
        <Card props={{
            id: proyects_id,
            className: "min-h-screen"
        }}>
            <h1 className="text-2xl lg:text-6xl text-center">Proyectos bien locotes</h1>
            <section className="flex flex-col gap-3 justify-center items-center max-w-[60ch]">
                {Proyectos_const.map((proyect, index) => {
                    return (
                        <div key={index} className="max-w-[60ch]">
                            <pre className="text-balance">
                                {JSON.stringify(proyect, null, 2)}
                            </pre>
                        </div>
                    )
                })}
            </section>
        </Card>
    )
}