import React from 'react'
import editor_logo from './../../assets/FolderAssetsTypes/editor.svg';

export const EditorFile = (props) => {
    const handleClick = event => {
        if(event.detail == 2) 
        {
            props.setVimPopup(true);
            props.setVimData(props.VimData)
            props.setVimName(props.name)
            
            setTimeout(function () {
                props.setVimWindowAnimated(true)
              }, 500)
        }
      };

    return (
        <div className={props.selected == true ? "bg-Sapphire/[.3] border rounded-sm border-Blue/[.3] cursor-pointer" : "border border-Blue/[.0] h-12 cursor-pointer"}>
            <ul className="w-15 m-1" onClick={handleClick}>
                <li>
                    <img src={editor_logo} className="object-contain h-15 w-15 px-1 pointer-events-none"></img>
                </li>
                <li className='flex items-center justify-center'>
                    <a className='text-center font-hack text-Text break-all text-sm'>{props.name}</a>
                </li>
            </ul>
       </div>
      )
}
