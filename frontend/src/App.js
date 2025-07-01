import React from 'react';
// import H from '../src/components/Home/Home.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ApodViewer from './components/ApodViewer/ApodViewer.jsx';
import MarsRover from './components/MarsRover/MarsRover.jsx';
import NeoViewer from './components/NeoViewer/Neoviewer.jsx';
import Home from './components/Home/Home.jsx';
import { useState } from 'react';


function App  ()  {

  const [mode, setMode] = useState('light');
  const [color, setColor] = useState()
  const [boxcolor, setBoxcolor] = useState('white')

  const toggleMode=()=>{

    if(mode ==='light'){
      setMode('dark');
      setBoxcolor('rgb(35 32 32)')
      setColor('white')
       document.body.style.backgroundColor='black';
     
     
    }
     else{
      setColor('black')
       setMode('light');
       setBoxcolor('white')
       document.body.style.backgroundColor='white';
     }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path="/apod" element={<ApodViewer date="2024-05-01" />} />
          <Route path="/mars" element={<MarsRover mode={mode} />} />
          <Route path="/neo" element={<NeoViewer mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
  