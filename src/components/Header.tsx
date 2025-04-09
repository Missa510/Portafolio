import { links_header } from "$_libs/constantes"

export default function Header() {

    return (
        <header className="inline-flex items-center justify-between md-pero-no-tanto:justify-around backdrop-blur-[8px] fixed top-0 z-50 w-full border-b-2 px-3 py-2">
            <a href="/" className="text-5xl text-white">Inicio</a>
            <nav className="hidden md-pero-no-tanto:flex items-center justify-evenly gap-5 ">
                {
                    links_header.map((item, index) => {
                        return (
                            <a key={index} href={item.href} className="text-xl text-[#efefef] underline underline-offset-2 hover:no-underline hover:italic focus:no-underline focus:italic active:no-underline active:italic">
                                {item.name}
                            </a>
                        )
                    })
                }
            </nav>
            <nav className="flex items-center justify-between md-pero-no-tanto:hidden">
            {
                    links_header.map((item, index) => {
                        return (
                            <a key={index} href={item.href} className="text-xl text-[#efefef] underline underline-offset-2 hover:no-underline hover:italic focus:no-underline focus:italic active:no-underline active:italic">
                                {item.name}
                            </a>
                        )
                    })
                }
            </nav>
        </header>
    )
}