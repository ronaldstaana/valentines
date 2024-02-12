import React, { useState, useEffect } from "react";
import AudioPlayer from "react-audio-player";
import "bootstrap/dist/css/bootstrap.min.css";

const MusicPlayer = () => {
  const [isPlaying, setPlaying] = useState(true);

  useEffect(() => {
    setPlaying(true);
  }, []);

  const togglePlay = () => {
    setPlaying(!isPlaying);
  };

  const playerContainerStyle = {
    display: "none", 
  };

  return (
    <div className="fixed-bottom container-fluid text-white p-3">
      <div style={playerContainerStyle}>
        <AudioPlayer
          style={{ width: "100%" }}
          src="/music/Laufey - Valentine (Official Audio).mp3"
          autoPlay={isPlaying}
          controls
          loop
          onPlay={togglePlay}
          onPause={togglePlay}
          onEnded={() => setPlaying(false)}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
