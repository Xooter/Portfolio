import { Mimetype, type } from "./../components/enums";

export const menuSnap = [
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
        data: [
          "# Menu Snap Backend",
          "",
          "## Description",
          "This innovative solution simplifies the dining experience for restaurants by providing an intuitive platform for customizable online menus. ",
          "The service optimizes the ordering process, reduces errors, and adds a personalized touch to customer interactions, ultimately enhancing the overall dining experience. ",
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
          " > 1 Month",
          "",
          "       Ctrl + C to exit.",
        ],
      },
    ],
  },
  {
    type: type.Folder,
    name: "Frontend",
    dummy: false,
    data: [
      {
        type: type.Folder,
        name: ".vs",
        dummy: true,
      },
      {
        type: type.Folder,
        name: "node_modules",
        dummy: true,
      },
      {
        type: type.Default,
        name: "App.tsx",
        mimetype: Mimetype.cs,
      },
      {
        type: type.EditorFile,
        name: "README.MD",
        data: [
          "# Menu Snap",
          "",
          "## Description",
          "This innovative solution simplifies the dining experience for restaurants by providing an intuitive platform for customizable online menus. ",
          "The service optimizes the ordering process, reduces errors, and adds a personalized touch to customer interactions, ultimately enhancing the overall dining experience. ",
          "",
          "### Technologies",
          " - React",
          " - Vite",
          " - ",
          "",
          "",
          "### Approximate development time",
          " > 1 Month",
          "",
          "       Ctrl + C to exit.",
        ],
      },
    ],
  },
];
