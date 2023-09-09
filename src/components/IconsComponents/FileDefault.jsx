import React from 'react'
import dummy_logo from './../../assets/filetypes.svg';
import cs_logo from './../../assets/mimetypes/text-x-csharp.svg';
import js_logo from './../../assets/mimetypes/text-x-javascript.svg';
import html_logo from './../../assets/mimetypes/text-x-dtd.svg';

import {Mimetype} from './../enums'

export const FileDefault = (props) => {

    let logo = dummy_logo;
    if(props.mimetype == Mimetype.cs)
        logo = cs_logo
    else if(props.mimetype == Mimetype.js)
        logo = js_logo
    else if(props.mimetype == Mimetype.html)
        logo = html_logo

    return (
        <div className={'border border-Blue/[.0] h-12'}>
         <ul className={'w-15 m-1'}>
             <li>
                 <img src={logo} className={'object-contain h-15 w-15 px-1 pointer-events-none'}></img>
             </li>
             <li className='flex items-center justify-center'>
                 <a className={'text-center font-hack text-Text break-all text-sm'}>{props.name}</a>
             </li>
         </ul>
        </div>
       )
}