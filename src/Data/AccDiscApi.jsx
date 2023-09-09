import { Mimetype, type } from "./../components/enums"

export const accDiscAPI = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "AccDiscAPI",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "packages",
        dummy: false,
        data: [
            {
                type: type.Folder,
                name: "AsyncInterfaces",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "Newtonsoft",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "RestSharp",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "Buffers",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "Memory",
                dummy: true,
            },
            {
                type: type.Folder,
                name: "Threading",
                dummy: true,
            },
        ]
    },
    {
        type: type.Default,
        name: "AccDiscAPI.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.Link,
        name: "nuget",
        path: "https://www.nuget.org/packages/AccDiscAPI",
    },
    {
        type: type.Link,
        name: "github",
        path: "https://github.com/Xooter/AccDiscAPI",
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# AccDiscAPI",
        "",
        "## Description",
        "AccDiscAPI is an unofficial open source library capable of helping you manage a discord account.",
        "It was made for the creation of automatic bots and external",
        "programs dedicated to managing users on the platform.",
        "",
        "### Technologies",
        " - .NET",
        " - C#",
        "",
        "### Hosted",
        " - Nuget",
        " - GitHub",
        "",
        "### Approximate development time",
        " > 3 weeks",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]