import React from 'react'
import { useCallback, useEffect } from 'react';

export const Vim = (props) => {

  let ctrl = false;
  const handleKeyPress = useCallback((event) => {
    console.log(`Key pressed: ${event.key}`);
    if(event.key == "Control") ctrl = true
    else if(ctrl && event.key == "c") props.setButtonPopup(false);
    else ctrl = false
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (props.trigger) ?(
    <div className='absolute top-2 left-2 right-2 bottom-12 '>
        <div className='w-full h-full bg-Vim/[.98] border rounded-md border-Overlay1/[.3]  drop-shadow-md'>
              <div className='w-full h-full overflow-hidden'>
                <ul className='text-Text mt-3 ml-3 mb-3'>
                  {[...Array(20).keys()].map((i)=>
                  {
                    return (<li key={i} className='flex'>
                        <p className='font-semibold text-end mr-1 select-none pointer-events-none'>{i}</p>
                        <p className='select-none pointer-events-none'>{i}</p>
                      </li>)
                  })}
                  {[...Array(70).keys()].map((i)=>
                  {
                    return (<li key={i} className='select-none pointer-events-none'>~</li>)
                  })}
                </ul>
                <div className='bg-Surface0 ml-12 mb-5 pr-8 pl-7 w-fit bottom-0 absolute clip-user-path font-hack text-Subtext1 select-none'>
                  PowerMenu.sh
                </div>
                <div className='bg-Sapphire ml-px mb-5 pr-5 pl-1 w-fit bottom-0 absolute clip-user font-hack text-Base select-none'>
                  Root
                </div>

                <div className='bg-Surface0 ml-px mb-5 right-0 pr-5 pl-5 w-fit bottom-0 absolute clip-user-path-reverse font-hack text-Subtext1 select-none'>
                  7:60
                </div>
                
              </div>
        </div>
    </div>
  ) : "";
}
