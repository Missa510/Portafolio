import type { SVGProps } from "react";

export interface ProyectoProps {
    id: string,
    title: string,
    description: string,
    descriptionEn: string,
    date: Date,
    technologies: string[],
    image: string,
    git?: string,
    demo?: string,
    partners?: [
        {
            name: string,
            link: string
        }
    ]
}

export interface CertificadoProps {
    id: string,
    name: string,
    nameEn: string,
    description: string,
    descriptionEn: string,
    path: string,
    expeDate: Date,
    expeInstituteS: string[]
}