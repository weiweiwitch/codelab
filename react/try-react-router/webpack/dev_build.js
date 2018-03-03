const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');

const config = require('./dev.config');

const port = 3000;
const apiPort = 4544;

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: [path.join(__dirname, '..', 'src')], // 使用绝对路径
  watchContentBase: true,
  // contentBase: false,
  hot: true, // 启用模块热替换特性
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  lazy: false, // 不使用惰性模式
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  proxy: {
    '/v1': {
      target: 'http://localhost:' + apiPort,
      ws: true,
    },
  },
});

process.traceDeprecation = true;

// 开始监听变化
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info('==> Webpack development server listening on port %s', port);
  }
});

// function build () {
//   compiler
//     .run((err, stats) => {
//       if (err) {
//         console.error('执行出错 ', err)
//       }
//
//       console.log(stats.toString(config.stats))
//     })
// }
//
// build()
