import React from 'react';
import { Link } from 'react-router-dom';
import galaxy from '../../assests/videos/planet.mp4'
import Typewriter from 'typewriter-effect' 
import './Home.css'
const Home = () => {
  return (
     <div className="home-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={galaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1 fontSize={'6xl'} textAlign={'center'} fontWeight={'thick'} color={'white'} mt={'-10'}>
      <Typewriter options={{
              autoStart: true,
              loop: true,
              delay: 60,
              strings: ["Welcome to NASA Explorer "],
            }}/></h1>
        <p>Explore APOD, Mars Rover, and NEO data like never before.</p>
        <div className="buttons">
          <Link to="/apod" className="btn btn-primary">APOD</Link>
          <Link to="/mars" className="btn btn-secondary mx-3">Mars Rover</Link>
          <Link to="/neo" className="btn btn-success">NEO Feed</Link>
        </div>
      </div>
    </div> 
  );
};

export default Home;
