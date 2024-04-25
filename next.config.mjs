/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/admin',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
}

export default nextConfig;