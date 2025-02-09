import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home page', () => {
  it('renders the PortfolioSite component', () => {
    render(<Home />)
    
    // Test for key elements that we know exist in PortfolioSite
    expect(screen.getByText('BRIAN FOHL')).toBeInTheDocument()
    expect(screen.getByText('Engineering Leader & DevOps Architect')).toBeInTheDocument()
    
    // Test for main sections
    expect(screen.getByText('EXPERTISE')).toBeInTheDocument()
    expect(screen.getByText('WORK EXPERIENCE')).toBeInTheDocument()
    expect(screen.getByText('GET IN TOUCH')).toBeInTheDocument()
  })

  it('includes all navigation links', () => {
    render(<Home />)
    
    const navItems = ['home', 'expertise', 'work', 'contact']
    navItems.forEach(item => {
      const elements = screen.getAllByText(item)
      expect(elements.length).toBeGreaterThan(0)
    })
  })

  it('includes contact information', () => {
    render(<Home />)
    
    expect(screen.getByText('brian.fohl@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('916.233.9398')).toBeInTheDocument()
    expect(screen.getByText('California')).toBeInTheDocument()
  })
})