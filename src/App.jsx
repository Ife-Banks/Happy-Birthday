import React from 'react';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import CakeWithSoundDetection from './Cake'

import CardSlider from './Card';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CakeWithSoundDetection />} />
        <Route path="/card" element={<CardSlider/>}/>

      </Routes>
    </Router>
  )
}

export default App
