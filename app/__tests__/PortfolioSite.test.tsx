import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import PortfolioSite from '../components/PortfolioSite'

describe('PortfolioSite', () => {
  const mockSectionRects = {
    home: { top: 0, height: 800 },
    expertise: { top: 800, height: 600 },
    work: { top: 1400, height: 800 },
    blog: { top: 2200, height: 600 },
    contact: { top: 2800, height: 600 }
  };

  beforeAll(() => {
    // Mock scrollIntoView for all elements
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  beforeEach(() => {
    // Create test elements for each section
    const sectionsWithDomElements = ['home', 'expertise', 'work', 'blog', 'contact']
    sectionsWithDomElements.forEach(id => {
      const element = document.createElement('div')
      element.id = id
      
      // Mock getBoundingClientRect for each section
      element.getBoundingClientRect = jest.fn().mockImplementation(() => ({
        top: mockSectionRects[id].top - window.scrollY,
        height: mockSectionRects[id].height,
        bottom: mockSectionRects[id].top + mockSectionRects[id].height - window.scrollY
      }))
      
      document.body.appendChild(element)
    })

    // Mock window dimensions
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 800
    })

    // Mock document height
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      writable: true,
      configurable: true,
      value: 3000
    })

    // Reset scroll position
    window.scrollY = 0
  })

  afterEach(() => {
    // Clean up all test elements
    const sectionsWithDomElements = ['home', 'expertise', 'work', 'blog', 'contact']
    sectionsWithDomElements.forEach(id => {
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
    const sections = ['BRIAN FOHL', 'EXPERTISE', 'WORK EXPERIENCE', 'TECHNICAL BLOG', 'GET IN TOUCH']
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

  it('updates active section based on scroll position', () => {
    render(<PortfolioSite />)

    // Test home section
    act(() => {
      window.scrollY = 0
      fireEvent.scroll(window)
    })
    expect(screen.getAllByText('home')[0].className).toContain('text-emerald-400')

    // Test expertise section
    act(() => {
      window.scrollY = 900
      fireEvent.scroll(window)
    })
    expect(screen.getAllByText('expertise')[0].className).toContain('text-emerald-400')

    // Test work section
    act(() => {
      window.scrollY = 1600
      fireEvent.scroll(window)
    })
    expect(screen.getAllByText('work')[0].className).toContain('text-emerald-400')

    // Test blog section
    act(() => {
      window.scrollY = 2300
      fireEvent.scroll(window)
    })
    expect(screen.getAllByText('blog')[0].className).toContain('text-emerald-400')
  })

  it('highlights contact section when scrolled to bottom', () => {
    render(<PortfolioSite />)

    act(() => {
      // Scroll to bottom
      window.scrollY = document.documentElement.scrollHeight - window.innerHeight
      fireEvent.scroll(window)
    })

    expect(screen.getAllByText('contact')[0].className).toContain('text-emerald-400')
  })

  it('maintains active section state through mobile menu toggle', () => {
    render(<PortfolioSite />)

    // Set active section to work
    act(() => {
      window.scrollY = 1600
      fireEvent.scroll(window)
    })

    // Open mobile menu
    const menuButton = screen.getByLabelText('Toggle menu')
    fireEvent.click(menuButton)

    // Verify work section is still active
    expect(screen.getAllByText('work')[0].className).toContain('text-emerald-400')
  })

  it('closes mobile menu after section navigation', () => {
    render(<PortfolioSite />)

    // Open mobile menu
    const menuButton = screen.getByLabelText('Toggle menu')
    fireEvent.click(menuButton)

    // Verify menu is open
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileMenu.className).toContain('flex')

    // Click a section link in mobile menu
    const workLink = screen.getAllByText('work')[0]
    fireEvent.click(workLink)

    // Verify menu is closed
    expect(mobileMenu.className).toContain('hidden')
  })
});