const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'site-base': './assets/site-base.js',  // base styles shared between frameworks
    'site-tailwind': './assets/site-tailwind.js',  // required for tailwindcss styles
    site: './assets/javascript/site.js',  // global site javascript
    app: './assets/javascript/app.js',  // logged-in javascript
    teams: './assets/javascript/teams/teams.js',
    'edit-team': './assets/javascript/teams/edit-team.js',
    chat: './assets/javascript/chat/chat.js',
    pegasus: './assets/javascript/pegasus/pegasus.js',
    'react-object-lifecycle': './assets/javascript/pegasus/examples/react/react-object-lifecycle.js',
    'vue-object-lifecycle': './assets/javascript/pegasus/examples/vue/vue-object-lifecycle.js',
    'nivo-pie-chart': './assets/javascript/components/NivoPieChart.js',
    'nivo-bar-chart': './assets/javascript/components/NivoBarChart.js',
    'concrete-optimizer': './assets/styles/concrete-optimizer.css',  
    'SliderComponent': './assets/javascript/components/SliderComponent.js',  
    'MixDesignTable': './assets/javascript/components/MixDesignTable.js',
    'MixDesignEditableTable': './assets/javascript/components/mix-editable-table/index.js',
    'mix-design-editable-table-style': './assets/javascript/components/mix-editable-table/style.css',
  },
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'js/[name]-bundle.js',
    library: ["SiteJS", "[name]"],
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              "@babel/preset-react",
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      'filename': 'css/[name].css',
    }),
    new VueLoaderPlugin(),
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,  // disable generation of license.txt files
    })],
  },
  devtool: "eval-cheap-source-map",
};
