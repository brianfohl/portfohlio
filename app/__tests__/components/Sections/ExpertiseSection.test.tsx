import React from 'react'
import { render, screen } from '@testing-library/react'
import ExpertiseSection from '../../../components/Sections/ExpertiseSection'

describe('ExpertiseSection', () => {
  it('renders section heading', () => {
    render(<ExpertiseSection />)
    expect(screen.getByText('EXPERTISE')).toBeInTheDocument()
  })

  it('renders all expertise categories', () => {
    render(<ExpertiseSection />)
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

  it('renders sample skills from each category', () => {
    render(<ExpertiseSection />)
    const sampleSkills = ['Agile', 'AWS', 'Jenkins', 'Python', 'MySQL', 'Prometheus']
    sampleSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })
})