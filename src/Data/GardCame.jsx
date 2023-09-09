import { Mimetype, type } from "./../components/enums"

export const gardCame = [
    {
        type: type.Folder,
        name: ".vs",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "GardCame",
        dummy: true,
    },
    {
        type: type.Folder,
        name: "Images",
        dummy: false,
        data: [
            { type: type.Picture,
                name: "play.png",
                path: 'gardcame/play.jpg'
            },
            { type: type.Picture,
                name: "start.png",
                path: 'gardcame/start.jpg'
            },
        ]
      },
      {
          type: type.Default,
          name: ".gitignore",
      },
    {
        type: type.Default,
        name: "GardCame.sln",
        mimetype: Mimetype.cs
    },
    {
        type: type.Link,
        name: "github",
        path: "https://github.com/Xooter/GardCame",
    },
    {
        type: type.EditorFile,
        name: "README.MD",
        data: ["# GardCame",
        "",
        "## Description",
        "GardCame is an online multiplayer console project of the famous game Ninety Nine.",
        "All the networking its based on Sockets and uses the Spectre Library for the user interface.",
        "",
        "## Objective",
        "Play for stakes as you and your opponents place cards in the middle, counting as you add. ",
        "Go over 99 and lose a token and the round is over. The game ends when only one player has a token remaining.",
        "",
        "> PD: The number of recommended players is 4",
        "",
        "### Technologies",
        " - C#",
        " - .Net",
        " - Sockets",
        "",
        "### Hosted",
        " - GitHub",
        "",
        "### Approximate development time",
        " > 2 Weeks",
        "",
        "       Ctrl + C to exit.",
    ]
    },
]