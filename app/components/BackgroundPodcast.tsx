'use client';

import { useState, useRef, useEffect } from 'react';

const BackgroundPodcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Don't attempt autoplay on initial load to avoid browser console errors
    // Modern browsers require user interaction before playing audio

    // Cleanup function - pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Playback error:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio 
        ref={audioRef} 
        src="/podcast.wav" 
        loop 
        style={{ display: 'none' }}
      />
      <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-50 border border-gray-700">
        <span className="text-white mr-2 font-medium">Tech Talk Daily</span>
        <button
          onClick={togglePlayback}
          className="p-2 bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200"
          aria-label={isPlaying ? 'Pause podcast' : 'Play podcast'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default BackgroundPodcast;