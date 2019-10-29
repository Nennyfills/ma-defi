const path = require('path');
const fs = require('fs');
const {
  htmlWebpackPlugin,
  extractTextPlugin,
  ExtractTextPlugin,
  definePlugin,
  FaviconsWebpackPlugin,
  LessToJs
} = require('./webpack.plugins.js');
const themeVariables = LessToJs(
  fs.readFileSync(path.join(__dirname, '../ant.less'), 'utf8').replace(/\$/ig, '@')
);
// console.log(themeVariables);


module.exports = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      pages: path.resolve(__dirname, '../src/pages'),
      'react-dom': '@hot-loader/react-dom',
      scss: path.resolve(__dirname, '../src/assets/scss'),
      assets: path.resolve(__dirname, '../src/assets')
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.s?css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)|.eot|woff|woff2|ttf$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]',
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: themeVariables,
              javascriptEnabled: true,
              // root: path.resolve(__dirname, './')
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        issuer: {
          exclude: /\.less$/
        }
      },
      {
        test: /\.scss$/,
        issuer: /\.less$/,
        use: {
          // '../sassVarsToLess.js'
          loader: path.join(__dirname, '../sassVarsToLess.js')
        }
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    extractTextPlugin,
    definePlugin,
    new FaviconsWebpackPlugin(
      path.resolve(__dirname, '../src/assets/images/fav.png')
    )
  ]
};
