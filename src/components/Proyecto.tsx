import { CodeIcon, DemoIcon } from "$_compon/ui/icons_svgs";
import type { ProyectoProps } from "$_types/tipos";
import Brant from "$_compon/ui/brant";

const Proyecto: React.FC<ProyectoProps> = ({ title, description, date, image, technologies, git, demo, partners }) => {

    return (

        <section className="flex md:aspect-video overflow-hidden h-max w-full md:h-auto md:w-full md:flex-shrink-0 bg-no-repeat bg-cover bg-center rounded-lg shadow-md contain-content" style={{
            backgroundImage: `url(${image})`
        }}>
            {/* Haz tap o pasa el ratón para ver el proyecto */}
            <div className={`
                w-full h-full flex overflow-x-hidden overflow-y-auto rounded-lg flex-col items-center justify-center delay-75 transition-all ease-in-out opacity-0 bg-black/40 gap-4 md:gap-12 p-6 active:opacity-100 active:backdrop-blur-sm hover:opacity-100 hover:backdrop-blur-sm cursor-pointer
            `.trim()} >
                <div className="grid place-items-center gap-3">
                    <h1 className="text-center font-[600] text-4xl md:text-6xl">
                        {title}
                    </h1>
                    <span className="text-lg md:text-2xl 2xl:text-3xl text-center text-stone-400">Fecha de creación: {date.toDateString()}</span>
                </div>
                <div className="grid gap-2 md:gap-6">
                    <p className="text-balance textbg-stone-300 text-center text-lg md:text-2xl 2xl:text-3xl 2xl:text-center">{description}</p>
                    <div className="grid gap-3">
                        <h2 className="text-center font-[600] text-2xl md:text-3xl 2xl:text-4xl">Tecnologías</h2>
                        <div className="flex justify-center flex-wrap gap-4">
                            {
                                technologies.map((technology, index) => {
                                    return (
                                        <Brant key={index} tech={technology} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="grid place-items-center gap-4" style={{gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"}}>

                        {demo && <a className="inline-flex items-center w-full gap-4 bg-stone-600 text-white px-4 py-2 rounded md:text-xl hover:bg-stone-900 focus:bg-stone-900 transition-all duration-200 ease-in-out" href={demo} target="_blank" rel="noopener noreferrer" aria-disabled>
                            <DemoIcon clases="text-white h-5 nd:h-6 w-auto" />
                            Ver el proyecto en acción
                        </a>}
                        {git && <a className="inline-flex items-center w-full gap-4 bg-slate-600 text-white px-4 py-2 rounded md:text-xl hover:bg-slate-900 focus:bg-slate-900 transition-all duration-200 ease-in-out" href={git} target="_blank" rel="noopener noreferrer">
                            <CodeIcon clases="text-white h-4 md:h-8 w-auto" />
                            Ver en GitHub
                        </a>}

                    </div>
                    {partners && <div className="grid place-items-center gap-2">
                        <h2 className="text-center font-[600] text-2xl md:text-3xl 2xl:text-4xl">Partners</h2>
                        <div className="flex justify-center flex-wrap gap-1">
                            <span>Hice este proyecto con ayuda de: </span>
                            <div>
                                {partners.map((partner, index) => (
                                    <a key={index} className="hover:underline hover:text-cyan-300" href={partner.link} target="_blank" rel="noopener noreferrer">{partner.name}</a>
                                ))}
                            </div>
                        </div>
                    </div>}
                </div>
            </div>

        </section>

    );
};

export default Proyecto;