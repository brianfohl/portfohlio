import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PortfolioSite from '../components/PortfolioSite'

describe('PortfolioSite', () => {
  it('renders the main heading', () => {
    render(<PortfolioSite />)
    const heading = screen.getByText('BRIAN FOHL')
    expect(heading).toBeInTheDocument()
  })

  it('renders navigation items', () => {
    render(<PortfolioSite />)
    const desktopNav = screen.getByRole('navigation')
    const navItems = ['home', 'expertise', 'work', 'contact']
    navItems.forEach(item => {
      // Use getAllByText and check if at least one exists
      const elements = screen.getAllByText(item)
      expect(elements.length).toBeGreaterThan(0)
    })
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<PortfolioSite />)
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    
    // Menu should be hidden initially
    const mobileMenu = screen.getByTestId('mobile-menu') // Add data-testid="mobile-menu" to the mobile menu div
    expect(mobileMenu).toHaveClass('hidden')
    
    // Click menu button
    fireEvent.click(menuButton)
    
    // Menu should be visible
    expect(mobileMenu).not.toHaveClass('hidden')
  })

  it('renders expertise section with correct categories', () => {
    render(<PortfolioSite />)
    const expertiseHeading = screen.getByText('EXPERTISE')
    expect(expertiseHeading).toBeInTheDocument()

    const categories = [
      'Leadership',
      'Cloud & Infrastructure',
      'CI/CD Systems',
      'Programming & Scripting',
      'Databases',
      'Monitoring & Security'
    ]

    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })

  it('renders contact information correctly', () => {
    render(<PortfolioSite />)
    expect(screen.getByText('brian.fohl@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('916.233.9398')).toBeInTheDocument()
    expect(screen.getByText('California')).toBeInTheDocument()
  })
})