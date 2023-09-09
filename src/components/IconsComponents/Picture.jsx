import React from 'react'
import image_logo from './../../assets/FolderAssetsTypes/image.svg';

export const Picture = (props) => {
    const handleClick = event => {
        if(event.detail == 2) 
        {
            props.setPicturePopup(true);
            props.setPictureUrl(props.path);

            setTimeout(function () {
                props.setImageWindowAnimated(true)
              }, 500)
        }
      };

  return (
    <div className={props.selected == true ? "bg-Sapphire/[.3] border rounded-sm border-Blue/[.3] cursor-pointer" : "border border-Blue/[.0] h-12 cursor-pointer"}>
        <ul className="w-15 m-1" onClick={handleClick}>
            <li>
                <img src={image_logo} className="object-contain h-15 w-15 px-1 "></img>
            </li>
            <li className='flex items-center justify-center'>
                <a className='text-center font-hack text-Text break-all text-sm'>{props.name}</a>
            </li>
        </ul>
   </div>
  )
}
