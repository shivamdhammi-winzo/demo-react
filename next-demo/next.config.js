module.exports = (phase, { defaultConfig }) => {
  return {
    async rewrites() {
        return [{
            source: '/home',
            destination: '/',
            },
        ]
    },
    async redirects() {
        return [{
                source: '/about',
                destination: '/',
                permanent: true,
            },
        ]
    },
  }
}