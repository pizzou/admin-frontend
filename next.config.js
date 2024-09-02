/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com','randomuser.me'],
      },
      async headers() {
        return [
          {
            // Routes this applies to
            source: "/api/v1/(.*)",
            // Headers
            headers: [
              // Allow for specific domains to have access or * for all
              {
                key: "Access-Control-Allow-Origin",
                value: "https://admin-dashboard-gvbn.onrender.com/api/v1",
                // DOES NOT WORK
                // value: process.env.ALLOWED_ORIGIN,
              },
              // Allows for specific methods accepted
              {
                key: "Access-Control-Allow-Methods",
                value: "GET, POST, PUT, DELETE, OPTIONS",
              },
              // Allows for specific headers accepted (These are a few standard ones)
              {
                key: "Access-Control-Allow-Headers",
                value: "Content-Type, Authorization",
              },
            ],
          },
        ];
      },
    };
    
    module.exports = nextConfig;