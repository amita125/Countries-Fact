/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['upload.wikimedia.org'], // Add allowed domains for images
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'flagcdn.com',
             
            },
          ],
      
      },
}

module.exports = nextConfig
