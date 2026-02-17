/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['images.unsplash.com', 'via.placeholder.com'],
    },
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
    // Serve static files from assests directory
    async rewrites() {
        return [
            {
                source: '/assests/:path*',
                destination: '/assests/:path*',
            },
        ];
    },
};

export default nextConfig;
