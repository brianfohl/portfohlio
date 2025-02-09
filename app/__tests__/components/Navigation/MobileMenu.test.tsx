import React from 'react'
import { render, screen } from '@testing-library/react'
import MobileMenu from '../../../components/Navigation/MobileMenu'

describe('MobileMenu', () => {
  const mockProps = {
    mobileMenuOpen: true,
    activeSection: 'home',
    scrollToSection: jest.fn(),
    setMobileMenuOpen: jest.fn()
  }

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
    expect(screen.getAllByRole('link')).toHaveLength(2) // GitHub and LinkedIn links
  })
})