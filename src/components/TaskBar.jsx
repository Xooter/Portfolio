import { Icon } from "./Icon.jsx";
import { Time } from "./time.jsx";

import firefox_logo from './../assets/firefox.png';
import arch_logo from './../assets/arch.svg';
import batery_logo from './../assets/batery.png';
import folder_logo from './../assets/folder.png';
import terminal_logo from './../assets/terminal.png';
import sound_logo from './../assets/sound.svg';
import monitor_logo from './../assets/monitor.svg';
import visual_logo from './../assets/vs.svg';

export const TaskBar = () => {
   
  return (
    <div className="bg-Base fixed bottom-0 w-full  mx-auto flex justify-between py-1">

       <ul className="flex item-center gap-x-2">
        <li className="mr-2 ml-1"><Icon IconSrc={arch_logo}/></li>
        <li><Icon IconSrc={folder_logo}/></li>
        <li><Icon IconSrc={firefox_logo}/></li>
        <li><Icon IconSrc={visual_logo}/></li>
        <li><Icon IconSrc={terminal_logo}/></li>
       </ul>
       
       <Time/>

       <ul className="flex item-center gap-x-3 mr-2">
        <ul className="flex item-center">
            <li><Icon IconSrc={batery_logo}/></li>
            <a className="text-Text flex flex-row items-center  select-none">100%</a>
        </ul>
        <ul className="flex item-center">
            <li><Icon IconSrc={sound_logo}/></li>
            <a className="text-Text align-middle flex flex-row items-center select-none">75%</a>
        </ul>
        <ul className="flex item-center">
            <li><Icon IconSrc={monitor_logo}/></li>
            <a className="text-Text  ml-1 text-center  align-middle text-sm flex flex-row items-center select-none">Connected</a>
        </ul>
       </ul>

    </div>
  )
}
