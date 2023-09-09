import { Mimetype, type } from "./../components/enums"

export const dungeon2 = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "Dungeon2",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "obj",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "Images",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "buffalo.jpg",
                path: 'dungeon2/buffalo.jpg'
            },
            { type: type.Picture,
                name: "whale.jpg",
                path: 'dungeon2/whale.jpg'
            },
            { type: type.Picture,
                name: "shop.png",
                path: 'dungeon2/shop.jpg'
            },
        ]
      },
    {
        type: type.Default,
        name: "Dungeon2.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# Dungeon 2",
        "",
        "## Description",
        "Dungeon 2 incremental console RPG for windows built with .NET c#.",
        "It focuses on killing enemies and the clever use of items.",
        "The program was made with the creation of subsequent updates and maintenance in mind, to later become online multiplayer.",
        "",
        "### Technologies",
        " - .NET",
        " - C#",
        " - MySql",
        "",
        "### Hosted",
        " - None",
        "",
        "### Approximate development time",
        " > 1.5 weeks",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]