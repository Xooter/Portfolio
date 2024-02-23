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
        name: "Apps",
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
            {
        type: type.Folder,
        name: "Windows Pics",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "main.png",
                path: 'solarreader/main.jpg'
            },
        ]
    },
     {
        type: type.Folder,
        name: "Android Pics",
        dummy: false,
        data: [
                { type: type.Picture,
                    name: "stats.png",
                    path: 'solarreader/android_stats.jpg'
                },
                { type: type.Picture,
                    name: "graph.png",
                    path: 'solarreader/graph.jpg'
                },
                ]
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
                "Multiplatform , currently working for Windows and Android.",
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