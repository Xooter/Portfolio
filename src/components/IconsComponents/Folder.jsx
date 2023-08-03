import folder_logo from './../../assets/folder.png';
import "@fontsource/cascadia-code"

export const Folder = (props) => {

    const handleClick = event => {
        if(event.detail == 1) {
            props.onblur(props.id)
        }
        if(event.detail == 2) 
        {
            props.onblur(-1)
            props.setFolderPopup(true);
        }
      };

      let text_conf = "text-center font-thin select-none ";
      if(props.textWhite) text_conf += " text-Text font-hack"

  return (
   <div className={props.selected == true ? "bg-Sapphire/[.3] border rounded-sm border-Blue/[.3] cursor-pointer" : "border border-Blue/[.0] h-12 cursor-pointer"}>
    <ul className="w-12 m-1" onClick={handleClick}>
        <li>
            <img src={folder_logo} className="object-contain h-12 w-12 px-1 select-none pointer-events-none"></img>
        </li>
        <li className='flex items-center justify-center'>
            <a className={text_conf}>{props.name}</a>
        </li>
    </ul>
   </div>
  )
}
