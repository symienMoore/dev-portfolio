/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // domains: ['https://firebasestorage.googleapis.com/v0/b/portfolio-d4a42.appspot.com/o/profile_images%2FrxUrjftwG5VQ7YRejGMzPSAsfZb2%2Fp?alt=media&token=70f806e8-9fe9-4da5-a43c-a48c1ffdab1d']
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com']
  }
}

module.exports = nextConfig
