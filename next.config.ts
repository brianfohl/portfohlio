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
};

export default nextConfig;
