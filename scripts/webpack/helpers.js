import path from 'path';
import {
  sourcePath,
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

export function getBabelConfig() {
  const config = {
    passPerPreset: true,
    plugins: [
      path.join(__dirname, 'babelRelayPlugin.js')
    ],
    presets: [
      'react',
      'es2015',
      'stage-0',
    ],
  };

  if (process.env.HOT) {
    config.plugins.push(['react-transform', {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module'],
      }],
    }]);
  }

  return config;
}

export function getLoaders() {
  return [
    {
      test: /(\.js$|\.jsx$)/,
      loader: 'babel',
      exclude: /node_modules/,
      include: [ clientSourcePath ],
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
}

export function getPreLoaders() {
  return [
    {
      loader: "eslint-loader",
      test: /(\.js$|\.jsx$)/,
      exclude: /node_modules/,
      include: [sourcePath],
    }
  ];
}

export function getPlugins() {
  let result = [
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
    result.unshift(
      new CleanWebpackPlugin(distAssetsPath)
    );

    delete uglifyConfig.exclude;
  }

  result.push(
    new webpack.optimize.UglifyJsPlugin(uglifyConfig)
  );

  return result;
}
