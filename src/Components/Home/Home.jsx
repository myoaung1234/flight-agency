import React from 'react'
import image from '../../assets/cb56ac303365c78bdec15882b7b93510.png'
import video from '../../assets/video (2160p).mp4'
const Home = () => {
  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={image} className='plane' alt=""/>
      </div>
    </div>
  )
}

export default Home