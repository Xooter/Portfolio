import { Mimetype, type } from "./../components/enums"

export const ezparkingData = [
    {
        type: type.Folder,
        name: ".vscode",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "build",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "dist-electron",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "electron",
        dummy: false,
        data: [
            {
                type: type.Folder,
                name: "main",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "preload",
                dummy: true,
            },
            {
                type: type.Default,
                name: "electron-env.d.ts",
            },
            {
                type: type.Link,
                name: "Electron",
                path: "https://www.electronjs.org/es/",
            },
            {
                type: type.Link,
                name: "Node.js",
                path: "https://nodejs.org/es",
            },
        ]
    },
    {
        type: type.Folder,
        name: "node_modules",
        dummy: true,
    },
    
    {
        type: type.Folder,
        name: "public",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "cobro.png",
                path: 'ezparking/cobro.png'
            },
            { type: type.Picture,
                name: "ficha.png",
                path: 'ezparking/ficha.png'
            },
            { type: type.Picture,
                name: "main.png",
                path: 'ezparking/main3.png'
            },
            { type: type.Picture,
                name: "main2.png",
                path: 'ezparking/main5.png'
            },
            { type: type.Picture,
                name: "config.png",
                path: 'ezparking/pref.png'
            },
            { type: type.Picture,
                name: "salida.png",
                path: 'ezparking/salida.png'
            },
        ]
    },
    {
        type: type.Folder,
        name: "src",
        dummy: true,
    },
    {
        type: type.Default,
        name: ".gitignore",
    },
    {
        type: type.Default,
        name: "package.json",
        mimetype: Mimetype.html
    },
    {
        type: type.Default,
        name: "index.html",
        mimetype: Mimetype.html
    },
    {
        type: type.Default,
        name: "index.js",
        mimetype: Mimetype.js
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data:  ["# EzParking",
        "",
        "## Description",
        "Ez parking is a parking management program created with electron to facilitate the entry and exit of cars and the collection of tax tickets",
        "The program had several modules.",
        "It had integrated statistics and charge for fiscal ticker.",
        "",
        "### Technologies",
        " - Electron",
        " - Javascript",
        " - Html",
        " - Tailwind",
        " - MySql",
        " - Nodejs",
        "",
        "### Hosted",
        " - Mercadolibre (private)",
        "",
        "### Approximate development time",
        " > 1 Month",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]