import React, {useState, useEffect} from 'react';
import './App.css';
import {CurrentStreamTime} from "./CurrentStreamTime";

function App() {

  const[currentTime1, setCurrentTime1] = useState('00:00');
  const[currentTime2, setCurrentTime2] = useState('00:00');

  return (
    <div className="App">
      <div className={'currentTime'}>
        <CurrentStreamTime src={'https://www.w3schools.com/html/mov_bbb.mp4'} type={'video'} setCurrentTime={setCurrentTime1} />
        <p>⏱ {currentTime1}</p>

      </div>
      <div className={'currentTime'}>
        <CurrentStreamTime src={'https://samples-files.com/samples/Audio/mp3/sample-file-1.mp3'} type={'audio'} setCurrentTime={setCurrentTime2} />
        <p>⏱ {currentTime2}</p>

      </div>
    </div>
  );
}

export default App;
