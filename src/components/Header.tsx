"use client"

import { links_header } from "$_libs/constantes"
import { useState } from "react"
import { MenuCloseIcon, MenuOpenIcon } from "$_compon/ui/icons_svgs"

export default function Header() {

    const [opened, setOpened] = useState<boolean>(false)

    return (
        <>
            <header className="hidden md-pero-no-tanto:inline-flex items-center justify-around backdrop-blur-[8px] fixed top-0 z-50 w-full border-b-2 px-3 py-2">
                <a href="/" className="text-5xl text-white">Inicio</a>
                <nav className="flex items-center justify-evenly gap-5">
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
            <header className="grid md-pero-no-tanto:hidden items-center backdrop-blur-[8px] fixed top-0 z-50 w-full border-b-2 px-3 py-2">
                <nav className="inline-flex items-center justify-between gap-5">
                    <a href="/" className="text-5xl text-white">Inicio</a>
                    <button onClick={() => {
                        setOpened((prev) => !prev)
                        const menu = document.getElementById("menu")
                        const menuCover = document.getElementById("menu-cover")
                        menu.classList.toggle("h-0")
                        menu.classList.toggle("h-max")
                        menuCover.classList.toggle("invisible")
                        menuCover.classList.toggle("visible")
                    }}>
                        {opened ? (<MenuCloseIcon clases="animate-open-menu text-white w-auto h-8 2xl:h-14" />) : (<MenuOpenIcon clases="animate-open-menu text-white w-auto h-8 2xl:h-14" />)}
                    </button>
                </nav>
                <section id="menu" className="h-0 transition-all duration-300">
                    <div id="menu-cover" className="invisible grid place-items-center">
                        {
                            links_header.map((item, index) => {
                                return (
                                    <a key={index} href={item.href} className="text-2xl text-[#efefef] underline underline-offset-2 hover:no-underline hover:italic focus:no-underline focus:italic active:no-underline active:italic">
                                        {item.name}
                                    </a>
                                )
                            })
                        }
                    </div>
                </section>
            </header>
        </>
    )
}