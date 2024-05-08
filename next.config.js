/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,

   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/i,
         issuer: /\.[jt]sx?$/,
         use: ['@svgr/webpack'],
      });

      return config;
   },
   images: {
      //   domains: ['ui-avatars.com'],
      dangerouslyAllowSVG: true,
   },

   transpilePackages: ['date-fns'],
};

module.exports = nextConfig;
