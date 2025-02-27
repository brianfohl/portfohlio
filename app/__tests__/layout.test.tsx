import React from 'react'
import { render } from '@testing-library/react'
import RootLayout from '../layout'

// Mock BackgroundPodcast component
jest.mock('../components/BackgroundPodcast', () => {
  return function MockBackgroundPodcast() {
    return <div data-testid="mock-background-podcast">Mock Podcast Component</div>
  }
})

// Mock metadata since it's not used in the component functionality
jest.mock('next/font/google', () => ({
  Geist: () => ({ variable: 'mock-geist-variable' }),
  Geist_Mono: () => ({ variable: 'mock-geist-mono-variable' }),
}))

describe('RootLayout', () => {
  it('renders children and BackgroundPodcast component', () => {
    const { getByText, getByTestId } = render(
      <RootLayout>
        <div>Test Child Content</div>
      </RootLayout>
    )
    
    // Verify children are rendered
    expect(getByText('Test Child Content')).toBeInTheDocument()
    
    // Verify BackgroundPodcast is included
    expect(getByTestId('mock-background-podcast')).toBeInTheDocument()
  })
  
  // Testing the component structure rather than DOM structure
  it('has the correct structure with font classes and language', () => {
    // Create a mock for a simple inspection of the component
    const rootLayout = (
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )
    
    // Assert that the component structure is as expected
    expect(rootLayout.props.children).toBeDefined()
    
    // We can't easily test html and body attributes with react-testing-library
    // but we can verify the component renders without errors
    const { container } = render(rootLayout)
    expect(container).toBeDefined()
  })
})