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
            },
            {
                protocol: "https",
                hostname: "www.victorsport.com.tw",
                pathname: "/**",
            }
        ]
    },
};

export default nextConfig;
