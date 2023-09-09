import { Mimetype, type } from "./../components/enums"

export const xmlImporter = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "XmlImporter",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "screenshots",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "main.png",
                path: 'xmlimporter/main.png'
            },
        ]
      },
      {
          type: type.Default,
          name: ".gitignore",
      },
    {
        type: type.Default,
        name: "XmlImporter.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.Link,
        name: "github",
        path: "https://github.com/Xooter/XMLImporter",
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# XML importer",
        "",
        "## Description",
        "Simple MultiNode XMLImporter.",
        "Unify XML file attributes to later save it in an external file.",
        "Used for server configuration.",
        "",
        "### Technologies",
        " - WPF",
        " - C#",
        " - .Net",
        "",
        "### Hosted",
        " - Github",
        "",
        "### Approximate development time",
        " > 1 Day",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]