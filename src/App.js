import React, { useState } from 'react';
import './App.css';
import MusicPlayer from './components/MusicPlayer';
import CustomProgressBar from './components/CustomProgressBar';
import Callsign from './components/Callsign';
import Questionnaire from './components/Questionnaire';
import LeafletMap from './components/LeafletMap';
import Gallery from './components/Gallery';
import Love from './components/Love';

function App() {
  const [progress, setProgress] = useState(20);
  const [callsignSubmittedCorrectly, setCallsignSubmittedCorrectly] = useState(false);

  const handleProgressChange = (newProgress) => {
    if (newProgress === 40 && !callsignSubmittedCorrectly) {
      return;
    }

    setProgress(newProgress);
  };

  const handleCallsignSubmission = (correct) => {
    setCallsignSubmittedCorrectly(correct);
  };

  const generateImagesArray = (count) => {
    const images = [];
  
    for (let i = 1; i <= count; i++) {
      images.push({
        src: `images/wub${i}.jpg`,
      });
    }
  
    return images;
  };

  const images = generateImagesArray(5);
  

  return (
    <div className="App">
      <CustomProgressBar progress={progress} onProgressChange={handleProgressChange} />
      {progress === 20 && <Callsign onSubmission={handleCallsignSubmission} />}
      {progress === 40 && <Questionnaire />}
      {progress === 60 && <Gallery images={images}/>}
      {progress === 80 && <Love />}
      {progress === 100 && <LeafletMap />}
      <MusicPlayer />
    </div>
  );
}

export default App;
