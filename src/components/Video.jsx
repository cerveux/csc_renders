import React from "react";

function Video(){
    return(
        <div className="video-container" >
            <video autoPlay muted loop id="video">
                <source src="https://video.wixstatic.com/video/11062b_a1249d14a20546c986dfbaa31909c015/1080p/mp4/file.mp4" type="video/mp4"/>
            </video>
            <div id="videoMessage" className="styling">
            <h1 className="titulo-video" style={{fontFamily: "Roboto"}}>CSC</h1>
            <h3 style={{fontFamily: "Roboto"}}>Rendering</h3>

            </div>
            

        </div>
    )
}

export default Video;