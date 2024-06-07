import { DummyIconType } from "./components/enums";

import { userData } from "./Data/User.jsx";
import { gymnopedieData } from "./Data/Gymnopedie.jsx";
import { ezparkingData } from "./Data/EzParking.jsx";
import { ezparkingData2 } from "./Data/EzParking2.jsx";
import { vList } from "./Data/VList.jsx";
import { metaBinding } from "./Data/Metabinding.jsx";
import { accDiscAPI } from "./Data/AccDiscApi.jsx";
import { xmlImporter } from "./Data/XmlImporter.jsx";
import { gardCame } from "./Data/GardCame.jsx";
import { dungeon2 } from "./Data/Dungeon2.jsx";
import { solarReader } from "./Data/SolarReader.jsx";
import { menuSnap } from "./Data/MenuSnap.jsx";

export const folders = [
  {
    name: "User",
    data: userData,
  },
  {
    name: "Blender",
    type: DummyIconType.blender,
  },
  {
    name: "EzParking",
    data: ezparkingData,
  },
  {
    name: "EzParking2",
    data: ezparkingData2,
  },
  {
    name: "Filezilla",
    type: DummyIconType.filezilla,
  },
  {
    name: "Temp",
    type: DummyIconType.file,
  },
  {
    name: "Gymnopedie",
    data: gymnopedieData,
  },
  {
    name: "V-List",
    data: vList,
  },
  {
    name: "MetaBinding",
    data: metaBinding,
  },
  {
    name: "AccDiscAPI",
    data: accDiscAPI,
  },
  {
    name: "passwords.txt",
    type: DummyIconType.file,
  },
  {
    name: "XMLImporter",
    data: xmlImporter,
  },
  {
    name: "GardCame",
    data: gardCame,
  },
  {
    name: "Dungeon2",
    data: dungeon2,
  },
  {
    name: "SolarReader",
    data: solarReader,
  },
  {
    name: "Menu Snap",
    data: menuSnap,
  },
];
