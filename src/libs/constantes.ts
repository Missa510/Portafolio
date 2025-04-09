import { GithubLogo, LinkedinLogo, CVLogo, WhatsAppIcon, MailIcon, IGIcon } from "$_compon/ui/icons_svgs"
import type ProyectoProps from "$_types/tipos"

export const Proyectos_const: ProyectoProps[] = [

    {
        id: "cubo-que-gira",
        title: "Cubo que gira",
        description: `
            Este es un cubo que gira gracias a la tecnología de WebGL del navegador y el motor gráfico para videojuegos y/o modelado Three JS. También repoduce música de forma automática.
        `,
        technologies: ["HTML", "CSS", "JavaScript", "ThreeJS"],
        image: "images/projects/cubo-que-gira.png",
        git: "https://github.com/Missa510/cubo-que-gira",
        demo: "https://cubo-que-gira.vercel.app/"
    }, {
        id: "carajitos-cantores",
        title: "Niños cantores del Táchira",
        description: `
            Página oficial de los niños cantores del Táchira más moderna, con un mejor rendimiento y que cubre todas las necesidades de los estudiantes y profesores. Además del uso de técnicas sencillas de ciberseguridad para la protección del material oficial
        `,
        technologies: ["NextJS", "React", "Tailwind", "HeroUI"],
        image: "images/projects/carajitos.png",
        git: "https://github.com/daws-4/ninoscantoreslanding",
        demo: "https://ninoscantorestachira.vercel.app/",
        partners:
            [
                {
                    name: "Andrés D. Villamizar",
                    link: "https://github.com/daws-4"
                }
            ]
    },
]

export const links_contacto = [
    {
        name: "Github",
        link: "https://github.com/Missa510",
        icon: GithubLogo

    },{
        name: "Linkedin",
        link: "https://www.linkedin.com/in/missa510uwu/",
        icon: LinkedinLogo
    },{
        name: "CV",
        link: "/docs/CV.pdf",
        icon: CVLogo
    },{
        name: "WhatsApp",
        link: "https://wa.me/+573028393442?text=Hola%20buenas%2C%20quiero%20contratarte%20para%20un%20trabajo%20como%20desarrollador",
        opc: "+573028393442",
        icon: WhatsAppIcon
    },{
        name: "Correo",
        link: "mailto:sjqv05@gmail.com",
        opc: "sjqv05@gmail.com",
        icon: MailIcon
    },{
        name: "Instagram",
        link: "https://instagram.com/imaginate_un_nombre_tuxd012",
        opc: "@imaginate_un_nombre_tuxd012",
        icon: IGIcon
    },
]

export const links_header = [
    {
        name: 'Proyectos',
        href: '#proyectos',
    }
]