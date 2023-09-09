import { Mimetype, type } from "./../components/enums"

export const userData = [
    {
      type: type.Folder,
      name: "Private",
      dummy: true,
    },
    {
      type: type.Folder,
      name: "Sensitive Data",
      dummy: true,
    },
    {
      type: type.Folder,
      name: "My Games",
      dummy: true,
    },
    {
      type: type.Link,
      name: "Github",
      path: "https://github.com/Xooter/Portfolio",
    },
    {
        type: type.Link,
        name: "Linkedin",
        path: "https://www.linkedin.com/in/joaquin-righetti/",
    },
    {
      type: type.Link,
      name: "Contact",
      path: "mailto:joaquinrighetti@gmail.com",
  },
    {
      type: type.Default,
      name: "CV_JoaquinRighetti.pdf",
    },
    {
      type: type.Default,
      name: "Vimix.tar.xz",
    },
    {
      type: type.EditorFile,
      name: "About Me.MD",
      data: ["# Joaquin Righetti's letter",
      "",
      "## Introduction",
      "Let me introduce myself, my name is Joaquín and I am a third-year student at the School of Systems Engineering (UTN).",
      "I am a person who was self-taught all his life, I learned most of the hard skills by reading documentation / books, and applying them in personal projects .",
      "I am looking for a job in which I can develop and apply all the knowledge, open to learning new knowledge.",
      "Always self-critical but canceled my decisions with determination.",
      "",
      "> <strong> Each folder contains a project that impacted my learning career </strong>",
      "> I made this page to show my work throughout the years.",
      "",
      "### Technologies",
      " - PHP",
      " - Javascript",
      " - Python",
      " - Front End (React - Tailwind - Vite - Nodejs)",
      " - MySql",
      " - MVVM (Xamarin - WPF - MAUI)",
      "",
      "### Languages",
      " - English (B2)",
      " - French (Basic)",
      " - Latin",
      " - Greek",
      " - Portuguese (intermediate)",
      " - Spanish (native)",
      "",
      "       Ctrl + C to exit.",
  ]
    },
    
  ];