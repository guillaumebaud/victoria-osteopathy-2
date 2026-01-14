/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    basePath: '/victoria-osteopathy',
    assetPrefix: '/victoria-osteopathy',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    devIndicators: false,
};

export default nextConfig;
