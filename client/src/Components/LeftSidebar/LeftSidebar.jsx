import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary} from "react-icons/md"
import './LeftSidebar.css'
import shorts from './shorts.png'
import {NavLink}from "react-router-dom"
function LeftSidebar() {
  return (
    <div className='container_leftSidebar'>
        <NavLink to={'/'} className='icon_sidebar_div' >
            <AiOutlineHome size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon roboto-black">Home</div>
        </NavLink>
        <div className='icon_sidebar_div' >
            <MdOutlineExplore size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon roboto-black">Explore</div>
        </div>
        <div className='icon_sidebar_div' >
            <img src={shorts} width={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon roboto-black">Shorts</div>
        </div>
        <div className='icon_sidebar_div' >
            <MdOutlineSubscriptions size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon roboto-black" style={{fontSize:"12px"}}>Subcriptions</div>
        </div>
        <NavLink to={'/library'} className='icon_sidebar_div' >
            <MdOutlineVideoLibrary size={22} className="icon_sidebar"/>
            <div className="text_sidebar_icon roboto-medium">Library</div>
        </NavLink>
    </div>
  )
}

export default LeftSidebar