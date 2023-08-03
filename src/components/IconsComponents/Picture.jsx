import React from 'react'
import image_logo from './../../assets/FolderAssetsTypes/image.svg';

export const Picture = (props) => {
    const handleClick = event => {
        if(event.detail == 2) 
        {
            props.setPicturePopup(true);
            props.setPictureUrl(props.path);
        }
      };

  return (
    <div className={props.selected == true ? "bg-Sapphire/[.3] border rounded-sm border-Blue/[.3] cursor-pointer" : "border border-Blue/[.0] h-12 cursor-pointer"}>
        <ul className="w-12 m-1" onClick={handleClick}>
            <li>
                <img src={image_logo} className="object-contain h-12 w-12 px-1 select-none pointer-events-none"></img>
            </li>
            <li className='flex items-center justify-center'>
                <a className='text-center font-hack select-none text-Text'>{props.name}</a>
            </li>
        </ul>
   </div>
  )
}
