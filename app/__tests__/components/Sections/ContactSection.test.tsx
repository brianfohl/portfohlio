import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactSection from '../../../components/Sections/ContactSection'

describe('ContactSection', () => {
  it('renders section heading', () => {
    render(<ContactSection />)
    expect(screen.getByText('GET IN TOUCH')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<ContactSection />)
    expect(screen.getByText('brian.fohl@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('916.233.9398')).toBeInTheDocument()
    expect(screen.getByText('California')).toBeInTheDocument()
  })

  it('renders social profile links', () => {
    render(<ContactSection />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('renders collaboration areas', () => {
    render(<ContactSection />)
    const areas = [
      'DevOps consulting and implementation',
      'Team leadership and mentoring',
      'CI/CD pipeline optimization',
      'Cloud infrastructure and security'
    ]

    areas.forEach(area => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })
})