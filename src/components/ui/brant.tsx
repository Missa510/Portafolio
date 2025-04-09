export default function Brant({ tech }: { tech: string }) {
    return (
        <span className="px-6 py-2 rounded-full flex items-center w-min bg-slate-700">
            {tech}
        </span>
    )
}