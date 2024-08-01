import React from 'react'
import s from './MainVideo.module.css'
import video from './video.mp4'


function MainVideo() {
  return (
    <div className={s.video}>
        <video controls autoPlay>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
    

    
  )
}

export default MainVideo





