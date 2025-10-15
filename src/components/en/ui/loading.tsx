export const Loading = () => {
    return <section className="flex gap-3 items-center">
        <div className="animate-spin inline-flex w-4 h-4 border-white border-2 rounded-full border-b-primary" />
        <span className="font-mono text-xl">
            Searching...
        </span>
    </section>
}