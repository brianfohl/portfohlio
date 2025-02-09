import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeSection from '../../../components/Sections/HomeSection'

describe('HomeSection', () => {
  it('renders main heading', () => {
    render(<HomeSection />)
    expect(screen.getByText('BRIAN FOHL')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<HomeSection />)
    expect(screen.getByText('Engineering Leader & DevOps Architect')).toBeInTheDocument()
  })
})