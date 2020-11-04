module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio-Vue/' : '/',
  baseUrl: '/Portfolio-Vue/',
  pwa: {
    iconPaths: {
      favicon32: 'icon.png',
    },
  },
};
