  // import
  const path = require('path')
  const HtmlPlugin = require('html-webpack-plugin')
  const CopyPlugin = require('copy-webpack-plugin')
  
  // 파일을 읽어들이기 시작하는 진입점 설정
  module.exports = {
  entry: './js/main.js',
  
  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname/** 현재 파일이 있는 경로 */, 'dist'/** 해당 폴더 */),
    // filename: 'main.js',
    clean: true // 없는 거 제거
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }

}