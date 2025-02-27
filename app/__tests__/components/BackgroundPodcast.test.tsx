import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import BackgroundPodcast from '../../components/BackgroundPodcast'
import { getAssetPath } from '../../utils/assetPath'

// Mock getAssetPath function
jest.mock('../../utils/assetPath', () => ({
  getAssetPath: jest.fn().mockImplementation((path) => path)
}))

// Mock HTMLMediaElement prototype
window.HTMLMediaElement.prototype.pause = jest.fn()
window.HTMLMediaElement.prototype.play = jest.fn().mockImplementation(() => Promise.resolve())

describe('BackgroundPodcast', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<BackgroundPodcast />)
    // Verify the audio element exists
    expect(document.querySelector('audio')).toBeInTheDocument()
  })

  it('displays the podcast UI', () => {
    render(<BackgroundPodcast />)
    expect(screen.getByText('Tech Talk Daily')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()
  })

  it('toggles playback when play button is clicked', async () => {
    render(<BackgroundPodcast />)
    
    const playButton = screen.getByText('Play')
    
    // Click play
    await act(async () => {
      fireEvent.click(playButton)
    })
    
    // Verify play was called
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Pause')).toBeInTheDocument()
    
    // Click pause
    await act(async () => {
      fireEvent.click(screen.getByText('Pause'))
    })
    
    // Verify pause was called
    expect(window.HTMLMediaElement.prototype.pause).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Play')).toBeInTheDocument()
  })

  it('handles play errors gracefully', async () => {
    // Mock play to reject with an error
    window.HTMLMediaElement.prototype.play = jest.fn().mockImplementation(() => Promise.reject(new Error('Playback error')))
    
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    
    render(<BackgroundPodcast />)
    
    // Click play
    await act(async () => {
      fireEvent.click(screen.getByText('Play'))
    })
    
    // Verify error was logged
    expect(consoleSpy).toHaveBeenCalledWith('Playback error:', expect.any(Error))
    
    consoleSpy.mockRestore()
  })

  it('sets audio unavailable when audio loading fails', () => {
    render(<BackgroundPodcast />)
    
    // Simulate error event on audio element
    act(() => {
      const audioElement = document.querySelector('audio')
      if (audioElement) {
        const errorEvent = new Event('error')
        audioElement.dispatchEvent(errorEvent)
      }
    })
    
    // Audio UI should not be displayed anymore
    expect(screen.queryByText('Tech Talk Daily')).not.toBeInTheDocument()
  })

  it('uses getAssetPath for audio source', () => {
    render(<BackgroundPodcast />)
    
    // Verify getAssetPath was called with correct path
    expect(getAssetPath).toHaveBeenCalledWith('/podcast.mp3')
  })
})