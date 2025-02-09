import React from 'react'
import { render, screen } from '@testing-library/react'
import WorkSection from '../../../components/Sections/WorkSection'

describe('WorkSection', () => {
  it('renders section heading', () => {
    render(<WorkSection />)
    expect(screen.getByText('WORK EXPERIENCE')).toBeInTheDocument()
  })

  it('renders all job positions', () => {
    render(<WorkSection />)
    const positions = [
      'Pipeline Subject Matter Expert',
      'Lead DevSecOps Engineer',
      'Java Developer',
      'DevOps Engineer',
      'Principal Web Developer',
      'Senior Release Engineer'
    ]

    positions.forEach(position => {
      expect(screen.getByText(position)).toBeInTheDocument()
    })
  })

  it('renders company names', () => {
    render(<WorkSection />)
    const companies = [
      'Centers for Medicare and Medicaid Services',
      'Department of Defense, Platform One',
      'State of Virginia',
      'Williams-Sonoma, Rocklin CA',
      'Flash Car Rental, Sacramento CA',
      'Google, Mountain View CA'
    ]

    companies.forEach(company => {
      // Using partial text match since company names might be part of longer strings
      expect(screen.getByText(new RegExp(company, 'i'))).toBeInTheDocument()
    })
  })

  it('shows additional experience note', () => {
    render(<WorkSection />)
    expect(screen.getByText('Additional experience available upon request')).toBeInTheDocument()
  })
})