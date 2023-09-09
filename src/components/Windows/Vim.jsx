import React from 'react'
import { useCallback, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import { zoomInUp } from 'react-animations';

export const Vim = (props) => {

  let ctrl = false;
  const handleKeyPress = useCallback((event) => {
    if(event.key == "Control") ctrl = true
    else if(ctrl && event.key == "c")
    {
      props.setButtonPopup(false);
      props.setVimWindowAnimated(false);
    }
    else ctrl = false
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const zoomInUpAnim = keyframes`${zoomInUp}`;

  const BouncyDiv = !props.VimWindowAnimated ? styled.div`
  animation: 0.5s ${zoomInUpAnim};
  animation-iteration-count: 1;
  ` : styled.div``


  return (props.trigger) ?(
    <BouncyDiv className='absolute top-2 left-2 right-2 bottom-12 '>
        <div className='w-full h-full bg-Vim/[.98] border rounded-md border-Overlay1/[.3]  drop-shadow-md'>
              <div className='w-full h-full overflow-hidden'>
                <ul className='text-Text mt-3 ml-3 mb-3'>
                  {props.VimData.map((string,i)=>
                  {
                    return (<li key={i} className='flex'>
                        <p className='font-semibold text-end mr-2  pointer-events-none'>{i}</p>
                        <p className='pointer-events-none'>{string}</p>
                      </li>)
                  })}
                  {[...Array(70).keys()].map((i)=>
                  {
                    return (<li key={i} className=' pointer-events-none'>~</li>)
                  })}
                </ul>
                <div className='bg-Surface0 ml-12 mb-5 pr-8 pl-7 w-fit bottom-0 absolute clip-user-path font-hack text-Subtext1 '>
                  {props.VimName}
                </div>
                <div className='bg-Sapphire ml-px mb-5 pr-5 pl-1 w-fit bottom-0 absolute clip-user font-hack text-Base '>
                  Root
                </div>

                <div className='bg-Surface0 ml-px mb-5 right-0 pr-5 pl-5 w-fit bottom-0 absolute clip-user-path-reverse font-hack text-Subtext1 '>
                  {`7:${props.VimData.length - 1}`}
                </div>
                
              </div>
        </div>
    </BouncyDiv>
  ) : "";
}
