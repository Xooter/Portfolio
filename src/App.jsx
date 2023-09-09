import { TaskBar } from "./components/TaskBar.jsx"
import { useState } from 'react';
import { Vim } from "./components/Windows/Vim.jsx";
import { FolderWindow } from "./components/Windows/FolderWindow.jsx";
import { Folder } from "./components/IconsComponents/Folder.jsx";
import { PictureWindow } from "./components/Windows/PictureWindow.jsx";
import { DummyIcon } from "./components/IconsComponents/DummyIcon.jsx";


import { DummyIconType } from "./components/enums"

import { userData } from "./Data/User.jsx";
import { gymnopedieData } from  "./Data/Gymnopedie.jsx"
import { ezparkingData } from  "./Data/EzParking.jsx"
import { ezparkingData2 } from  "./Data/EzParking2.jsx"
import { vList } from  "./Data/VList.jsx"
import { metaBinding } from  "./Data/Metabinding.jsx"
import { accDiscAPI } from  "./Data/AccDiscApi.jsx"
import { xmlImporter } from  "./Data/XmlImporter.jsx"
import { gardCame } from  "./Data/GardCame.jsx"
import { dungeon2 } from  "./Data/Dungeon2.jsx"
import { solarReader } from "./Data/SolarReader.jsx";

function App() {

  const [buttonPopup,setVimPopup] = useState(false);
  const [buttonFolder,setFolderPopup] = useState(false);
  const [buttonPicture,setPicturePopup] = useState(false);

  const [PictureUrl,setPictureUrl] = useState("");
  const [VimData,setVimData] = useState([]);
  const [VimName,setVimName] = useState("");

  const [FolderData,setFolderData] = useState([]);
  
  const [selected,setSelected] = useState(-1);

  const [FolderWindowAnimated,setFolderWindowAnimated] = useState(false);
  const [ImageWindowAnimated,setImageWindowAnimated] = useState(false);
  const [VimWindowAnimated,setVimWindowAnimated] = useState(false);
  
  let setBlur = (id)=> {
    setSelected(id)
  }

    return  (
      <div className="bg-[url(./assets/bg.jpg)] bg-cover h-screen overflow-hidden">
      
      <TaskBar/>

      <div className="grid grid-cols-3 grid-rows-5 grid-flow-row gap-y-2 gap-x-0 w-fit h-fit pt-1 pl-1">
        <Folder setFolderPopup={setFolderPopup} id={0} onblur={setBlur} selected={selected == 0} name="User" FolderData={userData} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <DummyIcon name="Blender" type={DummyIconType.blender}/>
        
        <Folder setFolderPopup={setFolderPopup} id={1} onblur={setBlur} selected={selected == 1} name="EzParking" FolderData={ezparkingData} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <Folder setFolderPopup={setFolderPopup} id={2} onblur={setBlur} selected={selected == 2} name="EzParking2" FolderData={ezparkingData2} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <DummyIcon name="Filezilla" type={DummyIconType.filezilla}/>
        <DummyIcon name="Temp" type={DummyIconType.file}/>
        <Folder setFolderPopup={setFolderPopup} id={3} onblur={setBlur} selected={selected == 3} name="Gymnopedie" FolderData={gymnopedieData} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <Folder setFolderPopup={setFolderPopup} id={4} onblur={setBlur} selected={selected == 4} name="V-List" FolderData={vList} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <Folder setFolderPopup={setFolderPopup} id={5} onblur={setBlur} selected={selected == 5} name="MetaBinding" FolderData={metaBinding} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <Folder setFolderPopup={setFolderPopup} id={6} onblur={setBlur} selected={selected == 6} name="AccDiscAPI" FolderData={accDiscAPI} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <DummyIcon name="passwords.txt" type={DummyIconType.file}/>
        <Folder setFolderPopup={setFolderPopup} id={7} onblur={setBlur} selected={selected == 7} name="XMLImporter" FolderData={xmlImporter} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <Folder setFolderPopup={setFolderPopup} id={8} onblur={setBlur} selected={selected == 8} name="GardCame" FolderData={gardCame} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
        <Folder setFolderPopup={setFolderPopup} id={9} onblur={setBlur} selected={selected == 9} name="Dungeon2" FolderData={dungeon2} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
            <Folder setFolderPopup={setFolderPopup} id={10} onblur={setBlur} selected={selected == 10} name="SolarReader" FolderData={solarReader} 
            setFolderData={setFolderData} setFolderWindowAnimated={setFolderWindowAnimated}/>
      </div>

      <FolderWindow trigger={buttonFolder} FolderData={FolderData} setFolderWindowAnimated={setFolderWindowAnimated} FolderWindowAnimated={FolderWindowAnimated}
          setFolderPopup={setFolderPopup} setVimPopup={setVimPopup} setPicturePopup={setPicturePopup}  setImageWindowAnimated={setImageWindowAnimated}
          setVimWindowAnimated ={setVimWindowAnimated}
          setPictureUrl={setPictureUrl} setVimData={setVimData} setFolderData={setFolderData} setVimName={setVimName}/>
      <Vim trigger={buttonPopup} setButtonPopup={setVimPopup} VimData={VimData} VimName={VimName} 
          VimWindowAnimated={VimWindowAnimated} setVimWindowAnimated={setVimWindowAnimated}/>
      <PictureWindow trigger={buttonPicture} setPicturePopup={setPicturePopup} PictureUrl={PictureUrl} 
          ImageWindowAnimated={ImageWindowAnimated} setImageWindowAnimated={setImageWindowAnimated}/>
      </div>
    )
}

export default App