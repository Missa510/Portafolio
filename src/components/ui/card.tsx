import type { HTMLAttributes, ReactNode } from "react"

export function Card({ children, props }: Readonly<{ children: ReactNode, props?: HTMLAttributes<HTMLDivElement> }>) {
    return (
        <article {...props}>
            {children}
        </article>
    )
}