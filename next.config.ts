import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'portfohlio';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction ? `/${repository}` : '',
  assetPrefix: isProduction ? `/${repository}/` : '',
  images: {
    unoptimized: true,
    domains: ['brianfohl.github.io'],
  },
};

export default nextConfig;

const backgroundStyle = {
  backgroundImage: `url('${process.env.NODE_ENV === 'production' ? '/portfohlio' : ''}/background.jpg')`
};
