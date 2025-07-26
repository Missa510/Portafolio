import { GithubLogo, LinkedinLogo, CVLogo, WhatsAppIcon, MailIcon, IGIcon } from "$_compon/ui/icons_svgs"
import type { ProyectoProps, CertificadoProps } from "$_types/tipos"

export const Proyectos_const: ProyectoProps[] = [
    {
        id: "cubo-que-gira",
        title: "Cubo que gira",
        date: new Date("2024-10-07"),
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
        date: new Date("2025-02-25"),
        description: `
            Página oficial de los niños cantores del Táchira más moderna, con un mejor rendimiento y que cubre todas las necesidades de los estudiantes y profesores. Además del uso de técnicas sencillas de ciberseguridad para la protección del material oficial.
        `,
        technologies: ["NextJS", "React", "Tailwind", "Vercel", "HeroUI"],
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

export const Certificaciones: CertificadoProps[] = [
    {
        id: "british",
        name: "Inglés del British Counsil",
        description: "Certificado que me avala en el nivel de A2 en inglés expedido por el British Counsil",
        path: "docs/crtf/British_certified.pdf",
        expeDate: new Date("2022-10-22"),
        expeInstituteS: ["British Counsil"]
    }, {
        id: "desarrollo",
        name: "Desarrollo de la resistencia Tecnológica",
        description: "Certificado que me avala como buen trabajador en empresas de tecnología, usando las habilidades blandas para el buen ambiente laboral expedido por la UCC (Universidad Cooperativa de Colombia) y Microsoft",
        path: "docs/crtf/Desarrollo_certified.pdf",
        expeDate: new Date("2023-09-02"),
        expeInstituteS: ["UCC", "Microsoft"]
    }, {
        id: "typescript",
        name: "Declaración de clases de TypeScript",
        description: "Certificado que me avala como un desarrollador junior de TypeScript expedido por Microsoft en la plataforma de Microsoft Learn",
        path: "docs/crtf/TP_clases.pdf",
        expeDate: new Date("2025-02-05"),
        expeInstituteS: ["Microsoft"]
    },
]

export const links_contacto = [
    {
        name: "Github",
        link: "https://github.com/Missa510",
        icon: GithubLogo

    }, {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/missa510uwu/",
        icon: LinkedinLogo
    }, {
        name: "CV",
        link: "/docs/cv/CV_en.pdf",
        icon: CVLogo
    }, {
        name: "WhatsApp",
        link: "https://wa.me/+573028393442?text=Hola%20buenas%2C%20quiero%20contratarte%20para%20un%20trabajo%20como%20desarrollador",
        opc: "+573028393442",
        icon: WhatsAppIcon
    }, {
        name: "Correo",
        link: "mailto:sjqv05@gmail.com",
        opc: "sjqv05@gmail.com",
        icon: MailIcon
    }, {
        name: "Instagram",
        link: "https://instagram.com/imaginate_un_nombre_tuxd012",
        opc: "@imaginate_un_nombre_tuxd012",
        icon: IGIcon
    },
]

export const links_header = [
    {
        name: 'Sobre mí',
        href: '#sobreMi',
    },{
        name: 'Proyectos',
        href: '#proyectos',
    },{
        name: 'Certificados',
        href: '#certificados',
    },{
        name: 'Contacto',
        href: '#contact',
    },
]