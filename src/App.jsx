import { TaskBar } from "./components/TaskBar.jsx"
import { useState } from 'react';
import { Vim } from "./components/Windows/Vim.jsx";
import { FolderWindow } from "./components/Windows/FolderWindow.jsx";
import { Folder } from "./components/IconsComponents/Folder.jsx";
import { PictureWindow } from "./components/Windows/PictureWindow.jsx";

function App() {
  const [buttonPopup,setVimPopup] = useState(false);
  const [buttonFolder,setFolderPopup] = useState(false);
  const [buttonPicture,setPicturePopup] = useState(false);

  const [PictureUrl,setPictureUrl] = useState("");
  
  const [selected,setSelected] = useState(-1);
  
  let setBlur = (id)=> {
    setSelected(id)
  }

    return  (
      <div className="bg-[url(./assets/bg.jpg)] bg-cover h-screen">
      
      <TaskBar/>

      <ul className="fixed flex item-center gap-x-3 ml-3 mt-3">
        <li><Folder setFolderPopup={setFolderPopup} id={0} onblur={setBlur} selected={selected == 0} name="Rula"/></li>
        <li><Folder setFolderPopup={setFolderPopup} id={1} onblur={setBlur} selected={selected == 1} name="Agus"/></li>
        <li><Folder setFolderPopup={setFolderPopup} id={2} onblur={setBlur} selected={selected == 2} name="Ema"/></li>
      </ul>

      <FolderWindow trigger={buttonFolder} setFolderPopup={setFolderPopup} setVimPopup={setVimPopup} setPicturePopup={setPicturePopup} setPictureUrl={setPictureUrl}/>
      <Vim trigger={buttonPopup} setButtonPopup={setVimPopup}/>
      <PictureWindow trigger={buttonPicture} setPicturePopup={setPicturePopup} PictureUrl={PictureUrl}/>
      </div>
    )
}

export default App