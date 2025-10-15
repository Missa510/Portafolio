import { GithubLogo, LinkedinLogo, CVLogo, WhatsAppIcon, MailIcon, IGIcon } from "$_compon/ui/icons_svgs"
import type { ProyectoProps, CertificadoProps } from "$_types/tipos"
import { getRelativeLocaleUrl } from "astro:i18n"

export const Proyectos_const: ProyectoProps[] = [
    {
        id: "cubo-que-gira",
        title: "Cubo que gira",
        date: new Date("2024-10-07"),
        description: `
            Este es un cubo que gira gracias a la tecnología de WebGL del navegador y el motor gráfico para videojuegos y/o modelado Three JS. También reproduce música de forma automática al quitar el mensaje de bienvenida.
        `,
        descriptionEn: `
            This is a cube that rotates thanks to the browser's WebGL technology and the Three JS graphics engine for video games and/or modeling. It also automatically plays music when the welcome message is removed.
        `,
        technologies: ["HTML", "CSS", "JavaScript", "ThreeJS", "WebGL"],
        image: "images/projects/cubo-que-gira.png",
        git: "https://github.com/Missa510/cubo-que-gira",
        demo: "https://cubo-que-gira.vercel.app/"
    }, {
        id: "garochoa",
        title: "Inversiones Garochoa",
        date: new Date("2022-02-28"),
        description: `
            Sistema completo de gestión de clientes, administración, inventarios, sedes y proveedores para la ferretería GarOchoa, con el fin de llevar una gestión más eficiente y segura de los datos. Por motivos de seguridad, no hay acceso directo a los datos de los clientes al ser un sistema cerrado.
        `, descriptionEn: `
            Complete customer management, administration, inventory, location, and supplier management system for GarOchoa hardware store, designed to enable more efficient and secure data management. For security reasons, there is no direct access to customer data as it is a closed system.
        `,
        technologies: ["HTML", "CSS", "jQuery", "PHP", "MySQL", "Office365"],
        image: "images/projects/garochoa.jpg",
        git: "https://github.com/Missa510/Proyecto-Final-II/",
        // demo: "https://cubo-que-gira.vercel.app/"
    }, {
        id: "carajitos-cantores",
        title: "Niños cantores del Táchira",
        date: new Date("2025-02-25"),
        description: `
            Página oficial de los niños cantores del Táchira más moderna, con un mejor rendimiento y que cubre todas las necesidades de los estudiantes y profesores. Además del uso de técnicas sencillas de ciberseguridad para la protección del material oficial.
        `, descriptionEn: `
            The most modern official website for the Táchira choir boys, with improved performance and covering all the needs of students and teachers. In addition to the use of simple cybersecurity techniques to protect official material.
        `,
        technologies: ["NextJS", "React", "Tailwind", "Vercel", "HeroUI", "MongoDB", "TypeScript"],
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
    }, {
        id: "pets-id",
        title: "Pets Identification",
        date: new Date("2025-08-15"),
        description: `
            App que te permite crear y personalizar identificaiones para tus mascotas con información del dueño. No son reales y se tiene plantillas para varios países.
        `, descriptionEn: `
            App that allows you to create and customize ID tags for your pets with owner information. They are not real and there are templates for various countries.
        `,
        technologies: ["NextJS", "React", "Tailwind", "Vercel", "HeroUI", "MongoDB", "Neovim", "Linux", "TypeScript"],
        image: "images/projects/pets-id.png",
        demo: "https://www.petsidentification.com/",
        partners:
            [
                {
                    name: "Andrés D. Villamizar",
                    link: "https://github.com/daws-4"
                }
            ]
    }
]

export const Certificaciones: CertificadoProps[] = [
    {
        id: "desarrollo",
        name: "Desarrollo de la resistencia Tecnológica",
        nameEn: "Enterprise Technology Development",
        description: "Certificado que me avala como buen trabajador en empresas de tecnología, usando las habilidades blandas para el buen ambiente laboral expedido por la UCC (Universidad Cooperativa de Colombia) y Microsoft",
        descriptionEn: "Certificate endorsing me as a good worker in technology companies, using soft skills to create a good working environment, issued by the UCC (Cooperative University of Colombia) and Microsoft",
        path: "docs/crtf/Desarrollo_certified.pdf",
        expeDate: new Date("2023-09-02"),
        expeInstituteS: ["UCC", "Microsoft"]
    }, {
        id: "typescript",
        name: "Declaración de clases de TypeScript",
        nameEn: "TypeScript and ObjectOriented Programming",
        description: "Certificado que me avala como un desarrollador junior de TypeScript expedido por Microsoft en la plataforma de Microsoft Learn",
        descriptionEn: "Certificate endorsing me as a junior TypeScript developer issued by Microsoft on the Microsoft Learn platform",
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
        icon: CVLogo
    }, {
        name: "WhatsApp",
        opc: "+573229392243",
        link: `https://wa.me/573229392243?text=Hola%20buenas%2C%20quiero%20contratarte%20para%20un%20trabajo%20como%20desarrollador`,
        linkEn: "https://wa.me/+573229392243?text=Hi%20Missa%2C%20I%20wanna%20hire%20you%20as%20a%20developer%20on%20my%20company",
        icon: WhatsAppIcon
    }, {
        name: "Email",
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
        href: getRelativeLocaleUrl("es", "/") + '#sobreMi',
    }, {
        name: 'Proyectos',
        href: getRelativeLocaleUrl("es", "/") + '#proyectos',
    }, {
        name: 'Certificados',
        href: getRelativeLocaleUrl("es", "/") + '#certificados',
    }, {
        name: 'Contacto',
        href: '#contact',
    },
]

export const links_header_en = [
    {
        name: 'About me',
        href: getRelativeLocaleUrl("en", "/") + '#aboutMe',
    }, {
        name: 'Projects',
        href: getRelativeLocaleUrl("en", "/") + '#projects',
    }, {
        name: 'Certificates',
        href: getRelativeLocaleUrl("en", "/") + '#certificates',
    }, {
        name: 'Contact',
        href: '#contact',
    },
]