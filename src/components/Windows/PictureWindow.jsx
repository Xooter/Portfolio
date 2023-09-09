import React from 'react'
import { CloseButton } from '../FolderWindowComponents/CloseButton.jsx';
import Draggable from 'react-draggable';

import styled, { keyframes } from 'styled-components';
import { zoomInUp } from 'react-animations';

export const PictureWindow = (props) => {

  const zoomInUpAnim = keyframes`${zoomInUp}`;

        const BouncyDiv = !props.ImageWindowAnimated ? styled.div`
        animation: 0.5s ${zoomInUpAnim};
        animation-iteration-count: 1;
        ` : styled.div``

  return (props.trigger) ?(
    <Draggable bounds='parent'>
      <BouncyDiv className='fixed top-5 left-5 right-1/3 bottom-1/3 '>
          <div className='w-full h-full bg-Vim/[.98] rounded-b-lg rounded-t-lg drop-shadow-md'>
          <div className='absolute w-full left-0 flex pt-1.6 pl-1 items-center h-8 bg-Vim/[.90] rounded-t-lg'>
                  <CloseButton color="bg-Red" setFolderPopup={props.setPicturePopup} setImageWindowAnimated={props.setImageWindowAnimated}/>
                  <CloseButton color="bg-Yellow" dummy={true} setFolderPopup={props.setPicturePopup}/>
                  <CloseButton color="bg-Rosewater" dummy={true} setFolderPopup={props.setPicturePopup}/>
              </div>
                <img className="w-auto h-full overflow-hidden m-auto rounded-lg pointer-events-none pt-8" src={`Images/${props.PictureUrl}`} alt='image'>
                </img>
          </div>
      </BouncyDiv>
    </Draggable>
  ) : "";
}
