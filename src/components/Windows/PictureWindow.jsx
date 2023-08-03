import React from 'react'
import { CloseButton } from '../FolderWindowComponents/CloseButton.jsx';

export const PictureWindow = (props) => {
    
  return (props.trigger) ?(
    <div className='absolute top-5 left-5 right-1/3 bottom-1/3 '>
        <div className='w-full h-full bg-Vim/[.98] rounded-b-lg rounded-t-lg drop-shadow-md'>
        <div className='absolute w-full left-0 flex pt-1.6 pl-1 items-center h-8 bg-Vim/[.90] rounded-t-lg'>
                <CloseButton color="bg-Red" setFolderPopup={props.setPicturePopup}/>
                <CloseButton color="bg-Yellow" dummy={true} setFolderPopup={props.setPicturePopup}/>
                <CloseButton color="bg-Rosewater" dummy={true} setFolderPopup={props.setPicturePopup}/>
            </div>
              <img className="w-full h-full overflow-hidden bg-covernpm rounded-lg" src={`Images/${props.PictureUrl}`} alt='image'>
              </img>
        </div>
    </div>
  ) : "";
}
