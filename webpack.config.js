/* eslint-disable no-console */
const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpackConfig = require('./webpack-base-config')

const minimize = !!process.env.MINIMIZE
const forceInlineDebug = !!process.env.CLAPPR_INLINE_DEBUG

webpackConfig.entry = path.resolve(__dirname, 'src/main.js')

if (minimize) {
  console.log('NOTE: Enabled minifying bundle (uglify)')

  webpackConfig.mode = 'production'
  webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin({ minimize, debug: !minimize }))
  webpackConfig.optimization = {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          mangle: true,
          sourceMap: true,
          comments: false,
          output: { comments: false }
        }
      })
    ]
  }
}

if (forceInlineDebug) {
  console.log('NOTE: Enabling inline source-maps - this may not be suitable for production usage')
  webpackConfig.devtool = 'inline-source-map'
}

console.log('\n')

const filename = `clappr-core${ minimize ? '.min' : '' }.js`

webpackConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  filename,
  library: 'Clappr',
  libraryTarget: 'umd'
}

module.exports = webpackConfig
