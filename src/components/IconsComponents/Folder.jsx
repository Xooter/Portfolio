import folder_logo from './../../assets/folder.png';
import dummy_logo from './../../assets/folderGray.png';
import "@fontsource/cascadia-code"

export const Folder = (props) => {

    const handleClick = event => {
        if(event.detail == 1 && !props.textWhite) {
            props.onblur(props.id)
        }
        if(event.detail == 2 && !props.dummy) 
        {
            if(!props.textWhite)
            {
                props.onblur(-1)
                props.setFolderData([{
                    name: props.name,
                    data: props.FolderData
               }])
               setTimeout(function () {
                props.setFolderWindowAnimated(true)
              }, 500)
              
               
            }
            else
            {
                props.setFolderData(prev  => [...prev,
                    {
                         name: props.name,
                         data: props.FolderData
                    }])
            }
            
            // props.setFolderData(props.FolderData)
            props.setFolderPopup(true);
            
        }
      };

  return (
   <div className={`w-fit ${props.dummy ? " pointer-events-none" : "cursor-pointer"} ${props.selected ? "bg-Sapphire/[.3] border rounded-sm border-Blue/[.3]" : "border border-Blue/[.0]"}`}>
    <ul className={`m-1 ${props.textWhite ? "w-15" : "w-14"}`} onClick={handleClick}>
        <li>
            <img src={props.dummy ? dummy_logo : folder_logo } className={`object-contain px-1  pointer-events-none h-15 w-15`}></img>
        </li>
        <li className='flex items-center justify-center'>
            <a className={`text-center  break-all ${props.textWhite ? "text-Text font-hack text-sm" : " font-medium text-sm"}`}>{props.name}</a>
        </li>
    </ul>
   </div>
  )
}
