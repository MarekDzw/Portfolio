module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio-Vue/' : '/',
  pwa: {
    iconPaths: {
      favicon32: 'icon.png',
    },
  },
};
