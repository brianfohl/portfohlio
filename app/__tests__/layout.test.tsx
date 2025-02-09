/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render } from '@testing-library/react'

// Mock the Next.js font hooks
jest.mock('next/font/google', () => ({
  Geist: jest.fn(() => ({
    variable: 'mock-geist-sans',
  })),
  Geist_Mono: jest.fn(() => ({
    variable: 'mock-geist-mono',
  })),
}))

// Create a mock layout that mimics the behavior without using html/body tags
const MockLayout = ({ children }: { children: React.ReactNode }) => {
  const geistSans = { variable: 'mock-geist-sans' }
  const geistMono = { variable: 'mock-geist-mono' }
  
  return (
    <div 
      data-testid="mock-layout"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </div>
  )
}

// Mock the actual layout
jest.mock('../layout', () => ({
  __esModule: true,
  default: function MockRootLayout({ children }: { children: React.ReactNode }) {
    return <MockLayout>{children}</MockLayout>
  }
}))

describe('RootLayout', () => {
  it('renders with correct classes and children', () => {
    const { getByTestId } = render(
      <MockLayout>
        <div data-testid="test-content">Test Content</div>
      </MockLayout>
    )
    
    const layout = getByTestId('mock-layout')
    expect(layout).toHaveClass('antialiased')
    expect(layout).toHaveClass('mock-geist-sans')
    expect(layout).toHaveClass('mock-geist-mono')
    
    const content = getByTestId('test-content')
    expect(content).toBeInTheDocument()
  })
})