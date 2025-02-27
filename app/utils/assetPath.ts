/**
 * Utility function to get correct asset paths for both local development
 * and GitHub Pages deployment
 */
export const getAssetPath = (path: string): string => {
  const isProduction = process.env.NODE_ENV === 'production';
  const repository = 'portfohlio-clone';
  return isProduction 
    ? `https://brianfohl.github.io/${repository}${path}`
    : path;
};
