/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/photo-1713869820987-519844949a8a",
            },
            {
                protocol: "https",
                hostname: "img.daisyui.com",
                pathname: "/**",
            }
        ]
    },
};

export default nextConfig;
