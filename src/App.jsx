import { TaskBar } from "./components/TaskBar.jsx";
import { useState } from "react";
import { Vim } from "./components/Windows/Vim.jsx";
import { FolderWindow } from "./components/Windows/FolderWindow.jsx";
import { Folder } from "./components/IconsComponents/Folder.jsx";
import { PictureWindow } from "./components/Windows/PictureWindow.jsx";
import { DummyIcon } from "./components/IconsComponents/DummyIcon.jsx";
import { folders } from "./Folders.jsx";

function App() {
  const [buttonPopup, setVimPopup] = useState(false);
  const [buttonFolder, setFolderPopup] = useState(false);
  const [buttonPicture, setPicturePopup] = useState(false);

  const [PictureUrl, setPictureUrl] = useState("");
  const [VimData, setVimData] = useState([]);
  const [VimName, setVimName] = useState("");

  const [FolderData, setFolderData] = useState([]);

  const [selected, setSelected] = useState(-1);

  const [FolderWindowAnimated, setFolderWindowAnimated] = useState(false);
  const [ImageWindowAnimated, setImageWindowAnimated] = useState(false);
  const [VimWindowAnimated, setVimWindowAnimated] = useState(false);

  let setBlur = (id) => {
    setSelected(id);
  };

  return (
    <div className="bg-[url(./assets/bg.jpg)] bg-cover h-screen overflow-hidden">
      <TaskBar />

      <div className="grid grid-cols-3 grid-rows-5 grid-flow-row gap-y-2 gap-x-0 w-fit h-fit pt-1 pl-1">
        {folders.map((folder, index) => {
          if (folder.data) {
            return (
              // Dios perdoname por no usar context
              <Folder
                setFolderPopup={setFolderPopup}
                id={index}
                onblur={setBlur}
                selected={selected == index}
                name={folder.name}
                FolderData={folder.data}
                setFolderData={setFolderData}
                setFolderWindowAnimated={setFolderWindowAnimated}
              />
            );
          } else {
            return <DummyIcon name={folder.name} type={folder.type} />;
          }
        })}
      </div>

      {/* Por favor que burrada */}
      <FolderWindow
        trigger={buttonFolder}
        FolderData={FolderData}
        setFolderWindowAnimated={setFolderWindowAnimated}
        FolderWindowAnimated={FolderWindowAnimated}
        setFolderPopup={setFolderPopup}
        setVimPopup={setVimPopup}
        setPicturePopup={setPicturePopup}
        setImageWindowAnimated={setImageWindowAnimated}
        setVimWindowAnimated={setVimWindowAnimated}
        setPictureUrl={setPictureUrl}
        setVimData={setVimData}
        setFolderData={setFolderData}
        setVimName={setVimName}
      />
      <Vim
        trigger={buttonPopup}
        setButtonPopup={setVimPopup}
        VimData={VimData}
        VimName={VimName}
        VimWindowAnimated={VimWindowAnimated}
        setVimWindowAnimated={setVimWindowAnimated}
      />
      <PictureWindow
        trigger={buttonPicture}
        setPicturePopup={setPicturePopup}
        PictureUrl={PictureUrl}
        ImageWindowAnimated={ImageWindowAnimated}
        setImageWindowAnimated={setImageWindowAnimated}
      />
    </div>
  );
}

export default App;
