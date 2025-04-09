import { links_contacto } from "$_libs/constantes"

export default function Heore() {

    return (
        <article className="min-h-[100dvh] py-[10dvh] md:py-[25dvh] w-full flex items-center justify-center flex-col gap-6 md:gap-10 animate-fade-in">

            <section className="px-10 flex 2xl:justify-center items-center flex-col md:flex-row gap-4 md:gap-8">
                {/* icon */}
                <div className="bg-icon-cipher h-40 md:h-60 xl:h-60 bg-cover bg-center bg-no-repeat aspect-square rounded-full"></div>

                {/* Texto de presentacion */}
                <article className="flex flex-col px-4 md:px-0 items-center md:items-start gap-3 md:gap-7">
                    <h1 className="text-4xl text-[#181818] text-center xs:text-left md:text-[3.3rem] lg:text-7xl 2xl:text-[6.2rem]">
                        <span className="text-primary">S</span>antiago <span className="text-primary">Q</span>uintero <span className="text-primary">V.</span>
                    </h1>
                    <span className="text-stone-200 text-center text-balance italic text-lg md:text-2xl 2xl:text-3xl">Mejor conocido como Missa510 o Missa510UwU</span>
                    <h2 className="font-bold text-[#7e838e] text-balance text-center md:text-left text-3xl md:text-4xl 2xl:text-5xl uppercase">&lt;Full Stack Developer /&gt; </h2>
                </article>
            </section>

            <section className="flex flex-col-reverse 3xl:flex-col gap-6 md:gap-10 items-center">
                {/* Acerca de mi */}
                <p className="font-sans text-xl text-balance max-w-[30ch] xs:max-w-[40ch] md:max-w-[58ch] md:text-2xl md-pero-no-tanto:max-w-[65ch] 2xl:text-3xl 2xl:max-w-[59ch] p-8 bg-slate-800 text-[#e3e3e3] rounded-2xl shadow-xl" style={{ lineHeight: "145% !important" }}>
                    "Bueno en el ámbito del desarrollo web como full-stack developer; además del ámbito de la
                    escucha y la comprensión del contexto. Pacífico y amable, excelente trabajando en equipo e
                    individualmente. Buenas habilidades de improvisación y de encarar los problemas de varios
                    puntos de vista usando las tecnologías soportadas actualmente." <span className="text-slate-400">~ Yo</span>
                </p>
                {/* Links de mis redes "profesionales"  */}
                <div className="flex flex-col w-full items-stretch sm:flex-row justify-center gap-3 md:gap-6">
                    {
                        /* Links de contacto */
                        links_contacto.slice(0, 3).map((link, index) => {
                            return (
                                <a key={index} href={link.link} target="_blank" rel="noreferrer noopener nofollow external" className="flex items-center gap-2 bg-primary text-lg text-white px-3 py-2 rounded-md 2xl:px-6 2xl:py-4 2xl:text-[2rem] 2xl:gap-4 hover:hue-rotate-30 focus:hue-rotate-30 hover:scale-110 focus:scale-110 active:hue-rotate-30 transition-all duration-200 ease-in-out">
                                    {link.icon({ clases: "text-white w-auto h-10 2xl:h-14" })}
                                    {link.name}
                                </a>
                            )
                        })
                    }
                </div>
            </section>
        </article>
    )
}