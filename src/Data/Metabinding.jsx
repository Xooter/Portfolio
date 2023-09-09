import { Mimetype, type } from "./../components/enums"

export const metaBinding = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "MetaBindingV2",
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
        type: type.Folder,
        name: "images",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "Guild.png",
                path: 'metabinding/Guild.PNG'
            },
            { type: type.Picture,
                name: "User.png",
                path: 'metabinding/User.PNG'
            },
           
        ]
      },
    {
        type: type.Default,
        name: "MetaBindingV2.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.Link,
        name: "WPF",
        path: "https://github.com/dotnet/wpf",
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# MetaBinding V2",
        "",
        "## Description",
        "This project is an example of the potential of my AccDiscApi library.",
        "Create keyboard shortcuts for user convenience.",
        "It is very useful when it comes to managing Discord servers.",
        "",
        "> Example: Ctrl+M: Mute all in chatvoice",
        "",
        "### Technologies",
        " - WPF",
        " - C#",
        " - .Net",
        " - .MySql",
        "",
        "### Hosted",
        " - Github",
        "",
        "### Approximate development time",
        " > 1 Week",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]