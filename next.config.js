/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                // Match all API routes
                source: "/apple-app-site-association",
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/json",
                    },
                ],
            },
        ];
    },
}


