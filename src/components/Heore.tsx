import { links_contacto } from "$_libs/constantes"

export default function Heore() {

    return (
        <article className="min-h-[100dvh] py-[10dvh] md:py-[25dvh] w-full flex items-center justify-center flex-col gap-6 md:gap-10 animate-fade-in">

            <section className="px-10 flex 2xl:justify-center items-center flex-col md-pero-no-tanto:flex-row gap-4 md:gap-8">
                {/* icon */}
                <div className="bg-icon-cipher h-40 md:h-60 xl:h-60 bg-cover bg-center bg-no-repeat aspect-square rounded-full"></div>

                {/* Texto de presentacion */}
                <article className="flex flex-col px-4 md:px-0 items-center md:items-start gap-3 md:gap-7">
                    <h1 className="text-4xl text-stone-100 text-center sm:text-left md:text-[3.1rem] lg:text-7xl 2xl:text-[6.2rem]">
                        <span className="text-primary">S</span>antiago <span className="text-primary">Q</span>uintero <span className="text-primary">V.</span>
                    </h1>
                    <span className="text-gray-400 text-center text-balance italic text-lg md:text-2xl 2xl:text-3xl">Mejor conocido como Missa510 o Missa510UwU</span>
                    <h2 className="font-bold text-gray-500 text-balance text-center md:text-left text-3xl md:text-4xl 2xl:text-5xl uppercase">&lt;Full-Stack Developer /&gt; </h2>
                </article>
            </section>

            <section className="flex flex-col-reverse 3xl:flex-col gap-6 md:gap-10 items-center" id="sobreMi">
                {/* Acerca de mi */}
                <div className="grid gap-3 p-8 bg-slate-800 text-[#e3e3e3] rounded-2xl shadow-2xl" style={{ lineHeight: "145%" }}>
                    <h2 className="lg:text-4xl text-3xl uppercase text-white">Sobre mí</h2>
                    <p className="font-sans text-balance text-xl md:text-2xl 2xl:text-3xl max-w-[75dvw] md:max-w-[58ch] md-pero-no-tanto:max-w-[60ch]">
                        Jóven apacionado por el mundo del desarrollo web, la programcaión en general y el autocrecmiento personal y académico. <code className="text-blue-400 font-bold">Técnico en Desarrollo de Software con más de 3 años de experiencia especializado en desarrollo web Full-Stack</code>, empleando tecnologías de frontend <span className="font-bold">(React, Astro, JavaScript, etc.)</span> y backend <span className="font-bold">(Node.js, PHP, TypeScript, etc.)</span>. <code className="text-blue-400 font-bold">Experiencia comprobada</code> en aplicaciones web escalables con técnicas de ciberseguridad implementadas. <code className="text-blue-400 font-bold">Certificado por Microsoft</code> en desarrollo empresarial programación orientada a objetos. Busco contribuir al desarrollo de soluciones tecnológicas innovadoras del futuro en un equipo dinámico y eficaz.
                    </p>
                </div>
                {/* Links de mis redes "profesionales"  */}
                <div className="flex flex-col w-full items-stretch sm:flex-row justify-center gap-3 md:gap-6">
                    {
                        /* Links de contacto */
                        links_contacto.slice(0, 3).map((enlace, index) => {
                            const { name, link, icon } = enlace
                            return (
                                <a key={index} href={!link ? "/docs/cv/CV_es.pdf" : link} target="_blank" rel="noreferrer noopener nofollow external" className="flex items-center gap-2 bg-primary text-lg text-white px-3 py-2 rounded-md 2xl:px-6 2xl:py-4 2xl:text-[2rem] 2xl:gap-4 hover:hue-rotate-30 focus:hue-rotate-30 hover:scale-110 focus:scale-110 active:hue-rotate-30 transition-all duration-200 ease-in-out">
                                    {icon({ className: "text-white w-auto h-10 2xl:h-14" })}
                                    {name}
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </article>
    )
}