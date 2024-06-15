import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './ShowVideo.css'


function ShowVideo({vid}) {
  console.log(vid)
  return (
    <>
      <Link to={`/videopage/${vid?._id}`}>
      <div className="vid">
        
          <div className='video'>
            <img src={`https://youtubeclone4123.onrender.com/${vid.filePath}`}></img>
          </div>
        
        <div className="vid_desc">
          <p className='vidLogo'>{vid?.Uploder?.charAt(0).toUpperCase()}</p>
          <div className='vid_desc2'>
            <p className='vid_title'>{vid?.videoTitle}</p>
            <p className='vid_uploader'>{vid?.Uploder}</p>
            <p className='vid_time'>{vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
      
      </Link>

    </>
  )
}

export default ShowVideo











    //  <Link to={`/videopage/${vid?._id}`}>
    //     <video 
    //     // src={`http://localhost:5500/${vid.filePath}`}
    //     src={`https://youtubeclone5031.herokuapp.com/${vid.filePath}`}
    //     className="video_ShowVideo"
    //     />
    //  </Link>
    //  <div className='video_description'>
    //     <div className='Chanel_logo_App'>
    //         <div className='fstChar_logo_App'>
    //             <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
    //         </div>
    //     </div>
    //     <div className='video_details'>
    //         <p className='title_vid_ShowVideo'>{vid?.videoTitle}</p>
    //         <pre className='vid_views_UploadTime'>{vid?.Uploder}</pre>
    //         <pre className='vid_views_UploadTime'>
    //             {vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
    //         </pre>

    //     </div>
    //  </div>










{/* <div className="vid">
        
    <div className='video'>
      <video src={vid}></video>
    </div>
  
  <div className="vid_desc">
    <p className='vidLogo'>A</p>
    <div className='vid_desc2'>
      <p className='vid_title'>How would I start coding if I was in First year</p>
      <p className='vid_uploader'>Apna College</p>
      <p className='vid_time'>1.2k {vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}</p>
    </div>
  </div>
</div> */}