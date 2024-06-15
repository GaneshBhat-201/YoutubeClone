import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'

import vid from "../Video/vid.mp4"

function ShowVideoGrid({vids}) {
  return (
    <div className='Container_ShowVideoGrid'>
        {
          vids?.reverse().map(vi=>
            {
                return (
                    // <div key={vi._id} className="video_box_app">
                        <ShowVideo vid={vi}/>
                    /* </div> */
                )
            })  
        }
    </div>
  )
}

export default ShowVideoGrid









{/* <div className='Container_ShowVideoGrid'>
<ShowVideo vid={vid}/>
<ShowVideo vid={vid}/>
<ShowVideo vid={vid}/>
<ShowVideo vid={vid}/>
<ShowVideo vid={vid}/>
<ShowVideo vid={vid}/>
<ShowVideo vid={vid}/>
</div> */}









