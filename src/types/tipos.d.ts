export interface ProyectoProps {
    id: string,
    title: string,
    description: string,
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
    description: string,
    path: string,
    expeDate: Date,
    expeInstituteS: string[]
}

export interface SVGProps {
    clases: string
}