import type { HTMLAttributes, ReactNode } from "react"

export function Card({ children, props }: Readonly<{ children: ReactNode, props?: HTMLAttributes<HTMLDivElement> }>) {
    return (
        <article {...props} className="w-full px-4 py-3 grid gap-5 item-center bg-slate-700 p-4 rounded-md shadow-lg">
            {children}
        </article>
    )
}