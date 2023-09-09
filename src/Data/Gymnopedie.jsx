import { Mimetype, type } from "./../components/enums"

export const gymnopedieData = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "Gymnopedie",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "obj",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "images",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "main.jpg",
                path: 'gymnopedie/main.jpg'
            },
            { type: type.Picture,
                name: "training.jpg",
                path: 'gymnopedie/sho.jpg'
            },
            { type: type.Picture,
                name: "shoulder.jpg",
                path: 'gymnopedie/shoulder.jpg'
            },
            { type: type.Picture,
                name: "stats.jpg",
                path: 'gymnopedie/stats.jpg'
            },
            { type: type.Picture,
                name: "stats2.jpg",
                path: 'gymnopedie/stats2.jpg'
            },
            
        ]
      },
    {
        type: type.Default,
        name: "Gymnopedie.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# Gymnopedie",
        "",
        "## Description",
        "Gymnopedie is a cross-platform project.",
        "Records gym progress and compares to other workouts, and it is also a body weight tracker",
        "First project made using MAUI, created for personal use.",
        "",
        "### Technologies",
        " - MAUI",
        " - C#",
        " - .Net",
        " - .MySql",
        "",
        "### Hosted",
        " - none",
        "",
        "### Approximate development time",
        " > 1.3 Month",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]