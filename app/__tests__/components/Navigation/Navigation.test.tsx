import React from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '../../../components/Navigation/Navigation'

describe('Navigation', () => {
  const mockProps = {
    activeSection: 'home',
    mobileMenuOpen: false,
    setMobileMenuOpen: jest.fn(),
    scrollToSection: jest.fn()
  }

  it('renders logo text', () => {
    render(<Navigation {...mockProps} />)
    expect(screen.getByText('Brian.Fohl_')).toBeInTheDocument()
  })

  it('renders mobile menu button', () => {
    render(<Navigation {...mockProps} />)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('renders navigation items', () => {
    render(<Navigation {...mockProps} />)
    const navItems = ['home', 'expertise', 'work', 'contact']
    navItems.forEach(item => {
      const elements = screen.getAllByText(item)
      expect(elements.length).toBeGreaterThan(0)
    })
  })
})