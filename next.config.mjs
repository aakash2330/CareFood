/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL : "https://carefood-cors.vercel.app/",

},
images: {
  domains: ['media-assets.swiggy.com',],
  remotePatterns: [
  
    {
      protocol: "https",
      hostname: "lh3.googleusercontent.com",
    },
  ],
},
};

export default nextConfig;
