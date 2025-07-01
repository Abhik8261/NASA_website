import React from 'react'
import Typewriter from "typewriter-effect";

import galaxyVideo from'../../assests/videos/planet.mp4'
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='home-container'>
        <video autoPlay loop muted  playsInline className='bg-video' src={galaxyVideo} type="video/mp4"></video>
    </div>

    <div className="overlay">
       
            <h1 fontSize={'6xl'} textAlign={'center'} fontWeight={'thick'} color={'white'} mt={'-10'}>
      <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Welcome to NASA Explorer "],
            }}/></h1>12
            

          <p>Explore APOD, Mars Rover, and NEO data like  never before.</p>  

          <div className="buttons">
            <Link  to="/apod"  className="btn btn-primary">APOD</Link>
            <Link  to="/mars"  className="btn btn-secondary mx-3">Mars Rover</Link>
            <Link  to="/neo"  className="btn btn-primary">NEO Feed</Link>
          </div>
        
    </div>
    </>
  )
}

export default Home