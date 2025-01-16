"use client"
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { Button } from 'antd';

const Preferences = () => {
  const playerRef = useRef<ReactPlayer | null>(null);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().play();
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer().pause();
    }
  };

  return (
    <div className="py-4 w-full bg-white z-50">
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=iBOQDIdyQV4"
        controls={false}
        width="100%"
        height="100%"
      />
      <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handlePause}>Pause</Button>
      </div>
    </div>
  );
};

export default Preferences;
