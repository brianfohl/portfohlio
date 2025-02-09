import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'portfohlio';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: isProduction ? `https://brianfohl.github.io/${repository}` : '',
  basePath: isProduction ? `/${repository}` : '',
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
