import React from 'react'
import { Folder } from '../IconsComponents/Folder.jsx'

import { SideBarItem } from '../FolderWindowComponents/SideBarItem.jsx';
import { CloseButton } from '../FolderWindowComponents/CloseButton.jsx';
import { Picture } from '../IconsComponents/Picture.jsx';
import { EditorFile } from '../IconsComponents/EditorFile.jsx';

import home_logo from './../../assets/FolderAssets/home.svg';
import document_logo from './../../assets/FolderAssets/documents.svg';
import download_logo from './../../assets/FolderAssets/downloads.svg';
import picture_logo from './../../assets/FolderAssets/pictures.svg';
import recent_logo from './../../assets/FolderAssets/recent.svg';
import star_logo from './../../assets/FolderAssets/star.svg';
import video_logo from './../../assets/FolderAssets/videos.svg';
import trash_logo from './../../assets/FolderAssets/trash.svg';

export const FolderWindow = (props) => {

  return (props.trigger) ?(
    <div className='absolute top-1/4 left-1/2 right-10 bottom-12'>
        <div className='w-full h-full bg-Mantle border rounded-md border-Overlay1/[.3] drop-shadow-md'>
            <div className='fixed w-full flex pt-2 pl-1 items-center h-8'>
                <CloseButton color="bg-Red" setFolderPopup={props.setFolderPopup}/>
                <CloseButton color="bg-Yellow" dummy={true} setFolderPopup={props.setFolderPopup}/>
                <CloseButton color="bg-Rosewater" dummy={true} setFolderPopup={props.setFolderPopup}/>
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
                    <Picture name="asd" setPicturePopup={props.setPicturePopup} path="testImage.png" setPictureUrl={props.setPictureUrl}/>
                    <EditorFile name="README.MD" setVimPopup={props.setVimPopup}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    <Folder name="ASD" selected={false} textWhite={true}/>
                    
                    
                </div>
            </div>
        </div>
    </div>
  ) : ""
}
