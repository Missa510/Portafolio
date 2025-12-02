import { Card } from "$_compon/ui/card";
import * as Icons from "$_compon/ui/icons_svgs";

function Stack() {
    const frontEndSatck = [
        {
            name: "Vite",
            icon: Icons.Vite
        }, {
            name: "Astro",
            icon: Icons.Astro
        }, {
            name: "JavaScript",
            icon: Icons.JavaScript
        }, {
            name: "TailwindCSS",
            icon: Icons.TailwindCSS
        }, {
            name: "React",
            icon: Icons.React
        }
    ];

    const backEndSatck = [
        {
            name: "Nodejs",
            icon: Icons.Nodejs
        }, {
            name: "TypeScript",
            icon: Icons.TypeScript
        }, {
            name: "Express",
            icon: Icons.Expressjs
        }, {
            name: "PHP",
            icon: Icons.Php
        }, {
            name: ".NET",
            icon: Icons.MicrosoftNET
        }, {
            name: "NextJS",
            icon: Icons.Nextjs
        }
    ];

    const dataBaseStack = [
        {
            name: "MySQL",
            icon: Icons.MySQL
        }, {
            name: "PostgreSQL",
            icon: Icons.PostgreSQL
        },{
            name: "MongoDB",
            icon: Icons.MongoDB
        }
    ];

    const controlEngineSoftware = [
        {
            name: "Git",
            icon: Icons.Git
        },{
            name: "Docker",
            icon: Icons.Docker
        },{
            name: "n8n",
            icon: Icons.n8n
        }
    ]

    return <section className=" grid gap-5 grid-cols-2 ">
        <Card props={{ className: "bg-gradient-to-br from-slate-950 to-[#201020] border-slate-900 border-2 flex flex-col md:flex-row flex-1 basis-2 items-center justify-around p-4 rounded-md shadow-lg" }}>
            {
                frontEndSatck.map((stack, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center gap-2">
                            <stack.icon className="h-16 w-16" />
                            <p className="text-lg xs:text-sm md:text-xl text-white">{stack.name}</p>
                        </div>
                    )
                })
            }
        </Card>
        <Card props={{ className: "bg-gradient-to-br from-slate-950 to-violet-950 border-slate-900 border-2 flex flex-col md:flex-row flex-1 basis-2 items-center justify-around p-4 rounded-md shadow-lg" }}>
        {
                backEndSatck.map((stack, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center gap-2">
                            <stack.icon className="h-16 w-16" />
                            <p className="text-lg xs:text-sm md:text-xl text-white">{stack.name}</p>
                        </div>
                    )
                })
            }
        </Card>
        <Card props={{ className: "bg-gradient-to-br from-slate-950 to-violet-950 border-slate-900 border-2 flex flex-col md:flex-row flex-1 basis-2 items-center justify-around p-4 rounded-md shadow-lg" }}>
        {
                dataBaseStack.map((stack, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center gap-2">
                            <stack.icon className="h-16 w-16" />
                            <p className="text-lg xs:text-sm md:text-xl text-white">{stack.name}</p>
                        </div>
                    )
                })
            }
        </Card>
        <Card props={{ className: "bg-gradient-to-br from-slate-950 to-[#201020] border-slate-900 border-2 flex flex-col md:flex-row flex-1 basis-2 items-center justify-around p-4 rounded-md shadow-lg" }}>
            {
                controlEngineSoftware.map((stack, index) => {
                    return (
                        <div key={index} className="flex flex-col items-center justify-center gap-2">
                            <stack.icon className="h-16 w-16" />
                            <p className="text-lg xs:text-sm md:text-xl text-white">{stack.name}</p>
                        </div>
                    )
                })
            }
        </Card>
    </section>
}

export default function Stacks() {
    return (
        <Card props={{
            className: "w-full px-4 py-3 grid gap-5 items-center bg-slate-700 p-4 rounded-md shadow-lg"
        }}>
            <h1 className="text-2xl xs:text-4xl md:text-7xl text-center uppercase text-white">Stacks</h1>
            <Stack />
        </Card>
    )
}
