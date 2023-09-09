import { Mimetype, type } from "./../components/enums"

export const vList = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "VList",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "images",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "main.jpg",
                path: 'vlist/full_main.jpg'
            },
            { type: type.Picture,
                name: "series.jpg",
                path: 'vlist/full_series.jpg'
            },
            { type: type.Picture,
                name: "stats.jpg",
                path: 'vlist/full_stats.jpg'
            },
            { type: type.Picture,
                name: "full_view.jpg",
                path: 'vlist/full_view.jpg'
            },
            { type: type.Picture,
                name: "empty_main.jpg",
                path: 'vlist/empty_main.jpg'
            },
        ]
      },
    {
        type: type.Default,
        name: "VList.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.Link,
        name: "Xamarin",
        path: "https://github.com/xamarin/Xamarin.Forms",
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# V List",
        "",
        "## Description",
        "VList is a movie, series and book tracker.",
        "It is integrated with an API to facilitate the search for movies and series.",
        "This project arose from the idea of ​​unifying several applications into one.",
        "Created for personal use.",
        "",
        "> Example: Ctrl+M: Mute all in chatvoice",
        "",
        "### Technologies",
        " - Xamarin Forms",
        " - C#",
        " - .Net",
        " - .MySql",
        "",
        "### Hosted",
        " - Github",
        "",
        "### Approximate development time",
        " > 2 Month",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]