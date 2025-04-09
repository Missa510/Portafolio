export default interface ProyectoProps {
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

export interface SVGProps {
    clases: string
}