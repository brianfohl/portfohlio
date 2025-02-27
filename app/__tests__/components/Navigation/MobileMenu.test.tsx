import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MobileMenu from '../../../components/Navigation/MobileMenu'
import { getAssetPath } from '../../../utils/assetPath'

// Mock getAssetPath function
jest.mock('../../../utils/assetPath', () => ({
  getAssetPath: jest.fn().mockImplementation((path) => path)
}))

describe('MobileMenu', () => {
  const mockProps = {
    mobileMenuOpen: true,
    activeSection: 'home',
    scrollToSection: jest.fn(),
    setMobileMenuOpen: jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders mobile menu when open', () => {
    render(<MobileMenu {...mockProps} />)
    expect(screen.getByTestId('mobile-menu')).not.toHaveClass('hidden')
  })

  it('hides mobile menu when closed', () => {
    render(<MobileMenu {...mockProps} mobileMenuOpen={false} />)
    expect(screen.getByTestId('mobile-menu')).toHaveClass('hidden')
  })

  it('renders social links', () => {
    render(<MobileMenu {...mockProps} />)
    
    // Get all links and find the GitHub and LinkedIn ones by their href
    const links = screen.getAllByRole('link')
    
    // Find GitHub link by URL
    const githubLink = links.find(link => link.getAttribute('href') === 'https://github.com/brianfohl')
    expect(githubLink).toBeDefined()
    expect(githubLink).toHaveAttribute('target', '_blank')
    
    // Find LinkedIn link by URL
    const linkedinLink = links.find(link => link.getAttribute('href') === 'https://linkedin.com/in/brianfohl')
    expect(linkedinLink).toBeDefined()
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('calls scrollToSection when navigation item is clicked', () => {
    render(<MobileMenu {...mockProps} />)
    
    // Find and click the "expertise" button
    const expertiseButton = screen.getByRole('button', { name: /expertise/i })
    fireEvent.click(expertiseButton)
    
    // Verify scrollToSection was called with correct section ID
    expect(mockProps.scrollToSection).toHaveBeenCalledWith('expertise')
    
    // Verify setMobileMenuOpen was called to close the menu
    expect(mockProps.setMobileMenuOpen).toHaveBeenCalledWith(false)
  })

  it('uses getAssetPath for resume download link', () => {
    render(<MobileMenu {...mockProps} />)
    
    // Find the resume download link
    const resumeLink = screen.getByRole('link', { name: /resume/i })
    
    // Verify getAssetPath was called
    expect(getAssetPath).toHaveBeenCalledWith('/brian-fohl-resume.docx')
    
    // Verify download attribute is present
    expect(resumeLink).toHaveAttribute('download')
  })

  it('closes mobile menu when resume link is clicked', () => {
    render(<MobileMenu {...mockProps} />)
    
    // Find and click the resume download link
    const resumeLink = screen.getByRole('link', { name: /resume/i })
    fireEvent.click(resumeLink)
    
    // Verify setMobileMenuOpen was called to close the menu
    expect(mockProps.setMobileMenuOpen).toHaveBeenCalledWith(false)
  })

  it('highlights active section button', () => {
    render(<MobileMenu {...mockProps} />)
    
    // Get all navigation buttons
    const navButtons = screen.getAllByRole('button')
    
    // Find the "home" button which should be active
    const homeButton = screen.getByRole('button', { name: /^home$/i })
    
    // Check that home button has the active text color class
    expect(homeButton).toHaveClass('text-emerald-400')
    
    // Check that other buttons don't have the active text color
    const otherButtons = navButtons.filter(button => button.textContent !== 'home')
    otherButtons.forEach(button => {
      expect(button).not.toHaveClass('text-emerald-400')
      expect(button).toHaveClass('text-white')
    })
  })
})