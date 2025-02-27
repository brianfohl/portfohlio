import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'portfohlio-clone';
const isDocker = process.env.DOCKER === 'true';

const nextConfig: NextConfig = {
  // Always use 'export' as we're deploying to GitHub Pages
  output: 'export',
  // Only apply GitHub Pages settings when not in Docker
  ...(isDocker ? {} : {
    assetPrefix: isProduction ? `https://brianfohl.github.io/${repository}` : '',
    basePath: isProduction ? `/${repository}` : '',
  }),
  images: {
    unoptimized: true,
    domains: ['brianfohl.github.io'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { dev, isServer }) => {
    // Only exclude tests in production
    if (!dev) {
      config.module.rules.push({
        test: /\.test\.(js|jsx|ts|tsx)$/,
        loader: 'ignore-loader'
      });
    }
    return config;
  },  
};

export default nextConfig;