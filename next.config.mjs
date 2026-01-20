/** @type {import('next').NextConfig} */

// Use static export only when EXPORT env var is set (for GoDaddy FTP)
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    devIndicators: false,
    
    // Only add these settings when doing static export for GoDaddy
    ...(isExport && {
        output: 'export',
        basePath: '/victoria-osteopathy',
        assetPrefix: '/victoria-osteopathy',
        images: {
            unoptimized: true
        },
    }),
    
    // For Vercel deployment, allow image optimization
    ...(!isExport && {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: '**',
                },
            ],
        },
    }),
};

export default nextConfig;
