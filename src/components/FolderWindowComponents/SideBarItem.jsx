import React from 'react'

export const SideBarItem = (props) => {
  return (
    <div className='px-2'>
        <li className='w-full bg-Surface0 rounded-md flex px-3 py-1 mb-2 gap-1'>
            <img src={props.logo} className="object-contain h-7 w-7 px-1 select-none pointer-events-none"></img>
            <h3 className='font-hack text-Text text-center flex flex-row items-center select-none'>{props.text}</h3>
        </li>
    </div>
  )
}
