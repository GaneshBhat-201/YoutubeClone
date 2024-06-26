import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from "../../Components/Comments/Comments";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import vid from "../../Components/Video/vid.mp4";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns";
import "./VideoPage.css";
import { addToHistory } from "../../actions/History";
import { viewVideo } from "../../actions/video";




function VideoPage() {
  const { vid } = useParams();
  // console.log(vid)

  // const chanels = useSelector((state) => state?.chanelReducers);

  // console.log(Cid)
  // const currentChanel = chanels.filter((c) => c._id === vid)[0];

  
  // console.log(vids)---------------

  const vids = useSelector((state) => state.videoReducer);
  const vv = vids?.data.filter((q) => q._id === vid)[0];
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
      })
    );
  };
  const handleViews=()=>{
    dispatch( viewVideo({
      id:vid
    }))
  }
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  }, []);


  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <video
              // src={`http://localhost:5500/${vv?.filePath}`}
              src={`https://youtubeclone4123.onrender.com/${vv?.filePath}`}
              className={"video_ShowVideo_videoPage"}
              controls
              autoPlay
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage roboto-regular"> {vv?.videoTitle}</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    {vv?.Views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
              </div>
              <Link
                to={`/chanel/${vv?.videoChanel}`}
                className="chanel_details_videoPage"
              >
                <b className="chanel_logo_videoPage">
                  <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage"><b>{vv?.Uploder}</b></p>
              </Link>
              <div className="comments_VideoPage">
                <h2>
                  <u>Comments</u>
                </h2>
                <Comments  videoId={vv._id}/>
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More video</div>
        </div>
      </div>


    </>
  );
}

export default VideoPage;









{/* <div className="container_videoPage">
<div className="container2_videoPage">
  <div className="video_display_screen_videoPage">
    <video
      // src={`http://localhost:5500/${vv?.filePath}`}
      src={vid}
      className={"video_ShowVideo_videoPage"}
      controls
      //autoPlay
    ></video>
    <div className="video_details_videoPage">
      <div className="video_btns_title_VideoPage_cont">
        <p className="video_title_VideoPage roboto-regular">How would I start coding if I was in first year of college under vtu | RNS Institute of Technology</p>
        <div className="views_date_btns_VideoPage">
          <div className="views_videoPage">
            22k views <div className="dot"></div>{" "}
            few seconds ago
          </div>
          <LikeWatchLaterSaveBtns />
        </div>
      </div>
      <Link
        to={`/chanel/`}
        className="chanel_details_videoPage"
      >
        <b className="chanel_logo_videoPage">
          <p>A</p>
        </b>
        <p className="chanel_name_videoPage"><b>Apna college</b></p>
      </Link>
      <div className="comments_VideoPage">
        <h2>
          Comments:
        </h2>
        <Comments  />
      </div>
    </div>
  </div>
  <div className="moreVideoBar">More video</div>
</div>
</div> */}
