import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PortfolioSite from '../components/PortfolioSite'

describe('PortfolioSite', () => {
  beforeAll(() => {
    // Mock scrollIntoView for all elements
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  beforeEach(() => {
    // Create test elements for each section
    const sections = ['home', 'expertise', 'work', 'contact']
    sections.forEach(id => {
      const element = document.createElement('div')
      element.id = id
      document.body.appendChild(element)
    })
  })

  afterEach(() => {
    // Clean up all test elements
    const sections = ['home', 'expertise', 'work', 'contact']
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        document.body.removeChild(element)
      }
    })
    
    // Clear mock data
    jest.clearAllMocks()
  })

  it('renders all sections', () => {
    render(<PortfolioSite />)
    const sections = ['BRIAN FOHL', 'EXPERTISE', 'WORK EXPERIENCE', 'GET IN TOUCH']
    sections.forEach(heading => {
      expect(screen.getByText(heading)).toBeInTheDocument()
    })
  })

  it('handles section scrolling', () => {
    render(<PortfolioSite />)
    const homeButton = screen.getAllByText('home')[0]
    fireEvent.click(homeButton)
    
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({ 
      behavior: 'smooth' 
    })
  })
})