/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol: 'https',
                hostname: "p16-va.lemon8cdn.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "p19-pu-sign-useast8.tiktokcdn-us.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "encrypted-tbn0.gstatic.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "m.media-amazon.com",
                port:  '',
            }
        ]

    }
};

export default nextConfig;
