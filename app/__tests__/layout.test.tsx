import React from 'react'
import { render } from '@testing-library/react'
import RootLayout from '../layout'

describe('RootLayout', () => {
  it('renders with correct classes', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )
    
    // Instead of looking for body/html elements, test the className prop
    const body = document.querySelector('body')
    expect(body?.className).toContain('antialiased')
    expect(body?.className).toContain('geist-sans')
  })

  it('includes language attribute', () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    )
    
    const html = document.querySelector('html')
    expect(html?.getAttribute('lang')).toBe('en')
  })
})