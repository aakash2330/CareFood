/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL : "https://carefood-cors.vercel.app/",

},
images: {
  domains: ['media-assets.swiggy.com'],
},
};

export default nextConfig;
