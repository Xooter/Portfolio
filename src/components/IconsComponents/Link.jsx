import React from 'react'
import logo from './../../assets/explorer.svg';


export const Link = (props) => {
    const handleClick = event => {
        if(event.detail == 2) 
        {
            window.open(props.path, "_blank")
        }
      };

  return (
   <div className={`w-fit cursor-pointer border border-Blue/[.0]`}>
    <ul className={`m-1 w-15"`} onClick={handleClick}>
        <li>
            <img src={logo} className={`object-contain px-1  pointer-events-none h-15 w-15`}></img>
        </li>
        <li className='flex items-center justify-center'>
            <a className={`text-center font-thin  break-all text-Text font-hack text-sm`}>{props.name}</a>
        </li>
    </ul>
   </div>
  )
}
