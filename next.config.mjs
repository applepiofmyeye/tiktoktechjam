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
            },
            {
                protocol: 'https',
                hostname: "cdn.vuahanghieu.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "images.rawpixel.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "product.hstatic.net",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "www.pixibeauty.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "picsum.photos",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "cdn.mos.cms.futurecdn.net",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "www.trustedreviews.com",
                port:  '',
            },
            {
                protocol: 'https',
                hostname: "robbreport.com",
                port:  '',
            }
        ]

    },
};

export default nextConfig;
