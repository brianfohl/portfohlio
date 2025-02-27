'use client';

import { useState, useRef, useEffect } from 'react';
import { getAssetPath } from '../utils/assetPath';

const BackgroundPodcast = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true); // Assume audio is available initially
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Don't attempt autoplay on initial load to avoid browser console errors
    // Modern browsers require user interaction before playing audio

    // Log the audio path for debugging purposes
    console.log('Audio path:', getAssetPath('/podcast.mp3'));
    console.log('Environment:', process.env.NODE_ENV);

    // Check if audio is available
    if (audioRef.current) {
      audioRef.current.addEventListener('error', (e) => {
        console.log('Audio file not available', e);
        setAudioAvailable(false);
      });

      // Check if metadata loaded successfully
      audioRef.current.addEventListener('loadedmetadata', () => {
        console.log('Audio metadata loaded successfully');
        console.log('Audio duration:', audioRef.current?.duration);
      });
    }

    // Cleanup function - pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlayback = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          setIsLoading(true);
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          }).catch(error => {
            console.error('Playback error:', error);
            console.log('Audio source:', audioRef.current?.src);
            // Don't show alert - it's disruptive. Just log the error and update state
            setAudioAvailable(false);
            setIsLoading(false);
          });
        }
      } catch (error) {
        console.error('Audio error:', error);
        console.log('Audio source:', audioRef.current?.src);
        // Don't show alert - it's disruptive. Just log the error and update state
        setAudioAvailable(false);
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <audio 
        ref={audioRef} 
        preload="metadata"
        loop 
        style={{ display: 'none' }}
      >
        <source src={getAssetPath('/podcast.mp3')} type="audio/mpeg" />
        {/* Fallback message for browsers that don't support audio element */}
        Your browser does not support the audio element.
      </audio>
      {audioAvailable && (
        <div className="fixed bottom-4 right-4 flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-full p-2 shadow-lg z-50 border border-gray-700">
          <span className="text-white mr-2 font-medium">Tech Talk Daily</span>
          <button
            onClick={togglePlayback}
            disabled={isLoading}
            className={`p-2 ${isLoading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white text-sm font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-200`}
            aria-label={isPlaying ? 'Pause podcast' : 'Play podcast'}
          >
            {isLoading ? 'Loading...' : isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundPodcast;