import { Mimetype, type } from "./../components/enums"

export const ezparkingData2 = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "EzParking",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "images",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "Main.png",
                path: 'ezparking2/Main.PNG'
            },
            { type: type.Picture,
                name: "Semestral.png",
                path: 'ezparking2/Semestral.PNG'
            },
            { type: type.Picture,
                name: "stats.png",
                path: 'ezparking2/stats.PNG'
            },
            { type: type.Picture,
                name: "Temporal.png",
                path: 'ezparking2/Temporal.PNG'
            },
        ]
      },
    {
        type: type.Default,
        name: "EzParking.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# EzParking 2",
        "",
        "## Description",
        "Ez parking 2 is the modified and better planned version of its predecessor.",
        "",
        "The implementation of SOLID made it easier to expand.",
        "Its graphical interface and its ticking modules were also updated.",
        "",
        "### Technologies",
        " - C#",
        " - .Net",
        " - WPF",
        " - MySql",
        "",
        "### Hosted",
        " - Mercadolibre (private)",
        "",
        "### Approximate development time",
        " > 1.5 Month",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]