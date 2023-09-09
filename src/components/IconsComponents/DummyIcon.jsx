import React from 'react'
import blender_logo from './../../assets/Blender.svg';
import filezilla_logo from './../../assets/filezilla.svg';
import file_logo from './../../assets/filetypes.svg';
import { DummyIconType } from '../enums';

export const DummyIcon = (props) => {

    let logo = blender_logo;
    if(props.type == DummyIconType.filezilla)
        logo =filezilla_logo;
    else if(props.type == DummyIconType.file)
        logo =file_logo;

  return (
   <div className={`w-fit  pointer-events-none border border-Blue/[.0]`}>
    <ul className={`m-1 w-14`}>
        <li>
            <img src={logo} className={`object-contain px-1  pointer-events-none h-15 w-15`}></img>
        </li>
        <li className='flex items-center justify-center'>
            <a className={`text-center  break-all font-medium text-sm`}>{props.name}</a>
        </li>
    </ul>
   </div>
  )
}
