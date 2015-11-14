/**
 * Created by mikhail on 26.10.15.
 */
import path from 'path';
import {
  clientSourcePath,
  distAssetsPath,
  __DEVELOPMENT__,
  __PRODUCTION__,
  __HOT__
} from '../../config.js';
import {notify} from './plugins.js';
import webpack from 'webpack';
import TransferWebpackPlugin from 'transfer-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export function getEntries() {
  let result = [
    path.join(clientSourcePath, 'index.js')
  ];

  if (__HOT__) {
    result.unshift(
      'webpack-hot-middleware/client'
    );
  }

  return result;
}

export function getLoaders() {
  let result = [
    {
      test: /(\.js$|\.jsx$)/,
      loader: 'babel',
      exclude: /node_modules/,
      include: [
        clientSourcePath
      ],
      query: {
        stage: 0,
        plugins: [
          path.join(__dirname, 'babelRelayPlugin.js')
        ]
      }
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    },
    {
      test: /\.(png|jpg|ttf)$/,
      loader: 'url-loader?limit=8192'
    }
  ];

  if (__HOT__) {
    result[0].query.plugins.push('react-transform');
    result[0].query.extra = {
      "react-transform": {
        "transforms": [{
          "transform": "react-transform-hmr",
          "imports": ["react"],
          "locals": ["module"]
        }]
      }
    };
  }

  return result;
}

export function getPlugins() {
  let result = [
    new CleanWebpackPlugin(distAssetsPath),
    new TransferWebpackPlugin([
      {
        from: 'src/assets/images',
        to: '../images'
      }
    ]),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: __DEVELOPMENT__,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    function () {
      this.plugin('done', notify);
    }
  ];

  let uglifyConfig = {
    exclude: /app\.js/,
    compress: {
      warnings: false
    }
  };

  if (__HOT__) {
    result.unshift(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    )
  }

  if (__PRODUCTION__) {
    delete uglifyConfig.exclude;
  }

  result.push(
    new webpack.optimize.UglifyJsPlugin(uglifyConfig)
  );

  return result;
}
