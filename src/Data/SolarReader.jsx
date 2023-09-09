import { Mimetype, type } from "./../components/enums"

export const solarReader = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "Backend",
        dummy: false,
        data: [
            {
                type: type.Folder,
                name: ".git",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "node_modules",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "prisma",
                dummy: true,
            },
            {
                type: type.EditorFile,
                name: "README.MD",
                data: ["# Solar Reader Backend",
                "",
                "## Description",
                "Web server to manage and save information from an MQTT service.",
                "Currently working for a server on a local network.",
                "",
                "### Technologies",
                " - Nest js",
                " - Node js",
                " - Prisma",
                " - Typescript",
                " - Posgresql",
                "",
                "",
                "### Approximate development time",
                " > 3 days",
                "",
                "       Ctrl + C to exit.",
            ]
            },
        ]
    },
    {
        type: type.Folder,
        name: "Windows App",
        dummy: false,
        data: [
            {
                type: type.Folder,
                name: ".vs",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "Models",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "obj",
                dummy: true,
            },
            { type: type.Picture,
                name: "main.png",
                path: 'solarReader/main.jgp'
            },
            {
                type: type.Default,
                name: "SolarReader.sln",
                mimetype: Mimetype.cs
            },
            {
                type: type.EditorFile,
                name: "README.MD",
                data: ["# Solar Reader",
                "",
                "## Description",
                "Graph reader using the REST API for this purpose.",
                "",
                "### Technologies",
                " - MAUI",
                " - .NET",
                " - C#",
                "",
                "",
                "### Approximate development time",
                " > 3 days",
                "",
                "       Ctrl + C to exit.",
            ]
            },
        ]
    }
    
]