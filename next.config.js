module.exports = {
    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/pkcs7-mime',
                    },
                ],
            },
            {
                source: '/apple-app-site-association',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/pkcs7-mime',
                    },
                ],
            },
        ];
    },
};