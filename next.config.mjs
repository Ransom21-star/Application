const nextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com'],
  },
  experimental: {
    serverActions: { allowedOrigins: ['*'] },
  },
}

export default nextConfig
