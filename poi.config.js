module.exports = (options, req) => ({
  entry: './src/index.js',
  dist: './dist',
  html: {
    // `pkg` is the data from `package.json`
    title: 'snappen.io',
    description: 'snappen.io',
    pkg: {} // All package.json data
  }
})
