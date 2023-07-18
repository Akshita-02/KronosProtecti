import React from "react";
// import ReactPlayer from "react-player";
import "./Videosec.css";
import video from '../../assets/video.mp4'
const VideoSec = () => {
  return (
    <div className="video-sec">
      <h1>Welcome</h1>
        <video src={video} loop controls autoPlay />
    </div>
  );
};

export default VideoSec;
