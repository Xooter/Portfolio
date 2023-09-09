import React from 'react'

export const CloseButton = (props) => {

  const handleClick = () => {
    if(!props.dummy)
    {
      props.setFolderPopup(false)
      if(props.setImageWindowAnimated != undefined)
        props.setImageWindowAnimated(false)
      else
        props.setFolderWindowAnimated(false)
    }
  };

    let opt = "rounded-full w-4 h-4 ml-2 " ;
    if(props.dummy) opt+= "select-none pointer-events-none "
    opt += props.color
  return (
    <button className={opt} onClick={handleClick}></button>
  )
}
