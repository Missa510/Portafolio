import type { ReactNode } from "react"

export function Card({ children, id }: Readonly<{ children: ReactNode, id?: string }>) {
    return (
        <article id={id || undefined} className="px-4 py-3 grid gap-5 item-center bg-slate-700 p-4 rounded-md shadow-lg">
            {children}
        </article>
    )
}