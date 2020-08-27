const path = require('path')
const resolve = dir => path.join(__dirname, './', dir)

module.exports = {
  chainWebpack: config => {
    // 设置alias
    config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('styles', resolve('src/styles'))
  }
};
