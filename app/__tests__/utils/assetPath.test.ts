import { getAssetPath } from '../../utils/assetPath'

describe('getAssetPath', () => {
  const originalNodeEnv = process.env.NODE_ENV
  
  afterEach(() => {
    // Restore original NODE_ENV after each test
    process.env.NODE_ENV = originalNodeEnv
  })
  
  it('returns the original path in development environment', () => {
    // Set NODE_ENV to development
    process.env.NODE_ENV = 'development'
    
    const testPath = '/test-asset.png'
    expect(getAssetPath(testPath)).toBe(testPath)
  })
  
  it('returns GitHub Pages URL in production environment', () => {
    // Set NODE_ENV to production
    process.env.NODE_ENV = 'production'
    
    const testPath = '/test-asset.png'
    const expectedPath = 'https://brianfohl.github.io/portfohlio/test-asset.png'
    
    expect(getAssetPath(testPath)).toBe(expectedPath)
  })
  
  it('works with paths that already have leading slash', () => {
    // Set NODE_ENV to production
    process.env.NODE_ENV = 'production'
    
    const testPath = '/assets/images/logo.svg'
    const expectedPath = 'https://brianfohl.github.io/portfohlio/assets/images/logo.svg'
    
    expect(getAssetPath(testPath)).toBe(expectedPath)
  })
  
  it('works with paths that do not have leading slash', () => {
    // Set NODE_ENV to production
    process.env.NODE_ENV = 'production'
    
    const testPath = 'document.pdf'
    const expectedPath = 'https://brianfohl.github.io/portfohliodocument.pdf'
    
    expect(getAssetPath(testPath)).toBe(expectedPath)
  })
})