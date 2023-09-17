/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://openmovies.onrender.com/api/:path*",
            }
        ];
    },
};

export default nextConfig;
