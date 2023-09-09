import {useState} from 'react'
import { Folder } from '../IconsComponents/Folder.jsx'

import { SideBarItem } from '../FolderWindowComponents/SideBarItem.jsx';
import { CloseButton } from '../FolderWindowComponents/CloseButton.jsx';
import { Picture } from '../IconsComponents/Picture.jsx';
import { EditorFile } from '../IconsComponents/EditorFile.jsx';

import {type} from '../../components/enums.jsx'

import home_logo from './../../assets/FolderAssets/home.svg';
import document_logo from './../../assets/FolderAssets/documents.svg';
import download_logo from './../../assets/FolderAssets/downloads.svg';
import picture_logo from './../../assets/FolderAssets/pictures.svg';
import recent_logo from './../../assets/FolderAssets/recent.svg';
import star_logo from './../../assets/FolderAssets/star.svg';
import video_logo from './../../assets/FolderAssets/videos.svg';
import trash_logo from './../../assets/FolderAssets/trash.svg';
import disk_logo from './../../assets/FolderAssets/disk.svg';

import larrow_logo from './../../assets/FolderAssets/arrow_left.svg';
import rarrow_logo from './../../assets/FolderAssets/arrow_right.svg';

import { FileDefault } from '../IconsComponents/FileDefault.jsx';
import { Link } from '../IconsComponents/Link.jsx';
import Draggable from 'react-draggable';

import styled, { keyframes } from 'styled-components';
import { zoomInUp } from 'react-animations';

export const FolderWindow = (props) => {

    const zoomInUpAnim = keyframes`${zoomInUp}`;

        const BouncyDiv = !props.FolderWindowAnimated ? styled.div`
        animation: 0.5s ${zoomInUpAnim};
        animation-iteration-count: 1;
        ` : styled.div``

    let path = '/home/joa/Desktop'
    
    props.FolderData.map((o,i)=>{
        path += `/${o.name}`
    })
    
    
    const GoBack = event => {
        if(event.detail == 1 && props.FolderData.length > 1) {
            let copy = [...props.FolderData];
            copy.pop()
            props.setFolderData(copy)
        }
      };

  return (props.trigger) ?(
    <Draggable  bounds='parent'>
    <BouncyDiv className='absolute top-1/4 left-1/2 right-10 bottom-12' >
        <div className='w-full h-full bg-Mantle border rounded-md border-Overlay1/[.3] drop-shadow-md'>
            <div className='fixed w-full flex pt-2 pl-1 items-center h-8 '>
                <CloseButton color="bg-Red" dummy={false} setFolderPopup={props.setFolderPopup} setFolderWindowAnimated={props.setFolderWindowAnimated}/>
                <CloseButton color="bg-Yellow" dummy={true} setFolderPopup={props.setFolderPopup} setFolderWindowAnimated={props.setFolderWindowAnimated}/>
                <CloseButton color="bg-Rosewater" dummy={true} setFolderPopup={props.setFolderPopup} setFolderWindowAnimated={props.setFolderWindowAnimated}/>
                <div className='flex items-center ml-auto  mr-5'>
                    <img src={disk_logo} className="object-contain h-7 w-7 px-1 select-none pointer-events-none mr-2"></img>
                    <a className='text-Text font-hack pointer-events-none text-sm'>{path}</a>
                </div>
                <div className='flex items-center mr-2'>
                    <img src={larrow_logo} className="object-contain h-7 w-7 px-1 select-none cursor-pointer" onClick={GoBack}></img>
                    <img src={rarrow_logo} className="object-contain h-7 w-7 px-1 select-none cursor-pointer pointer-events-none"></img>
                </div>
            </div>
            <div className='flex w-full h-full'>
                <div className='h-full w-1/4 pt-10 rounded-md overflow-hidden'>
                    <ul>
                        <SideBarItem text="Recent" logo={recent_logo}/>
                        <SideBarItem text="Favorite" logo={star_logo}/>
                        <SideBarItem text="Home" logo={home_logo}/>
                        <SideBarItem text="Documents" logo={document_logo}/>
                        <SideBarItem text="Downloads" logo={download_logo}/>
                        <SideBarItem text="Pictures" logo={picture_logo}/>
                        <SideBarItem text="Videos" logo={video_logo}/>
                        <SideBarItem text="Trash" logo={trash_logo}/>
                    </ul>
                </div>
                <div className='h-full w-3/4 grid grid-cols-7 grid-rows-5 gap-0 pt-8'>
                {props.FolderData[props.FolderData.length - 1].data.map((o,i)=>
                  {
                    if(o.type == type.Picture)
                    {
                        return (
                            <div key={i}>
                                <Picture name={o.name} setPicturePopup={props.setPicturePopup} path={o.path} setPictureUrl={props.setPictureUrl} setImageWindowAnimated={props.setImageWindowAnimated}/>
                            </div>)
                    }
                    else if(o.type == type.EditorFile)
                    {
                        return (
                            <div key={i}>
                                <EditorFile name={o.name} setVimPopup={props.setVimPopup} VimData={o.data} setVimData={props.setVimData} setVimName={props.setVimName} setVimWindowAnimated={props.setVimWindowAnimated}/>
                            </div>)
                    }
                    else if(o.type == type.Folder)
                    {
                        return (
                            <div key={i}>
                                <Folder setFolderPopup={props.setFolderPopup} selected={false} dummy={o.dummy} textWhite={true} name={o.name} FolderData={o.data} setFolderData={props.setFolderData} setFolderName={props.setFolderName}/>
                            </div>)
                    }
                    else if(o.type == type.Default)
                    {
                        return (
                            <div key={i}>
                                <FileDefault name={o.name} mimetype={o.mimetype} />
                            </div>)
                    }
                    else if(o.type == type.Link)
                    {
                        return (
                            <div key={i}>
                                <Link name={o.name} path={o.path}/>
                            </div>)
                    }
                  })}
                </div>
            </div>
        </div>
    </BouncyDiv>
    </Draggable>
  ) : ""
}
