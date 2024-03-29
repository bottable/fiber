const path = require('path')

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        fiber: path.resolve(__dirname, '../src')
      }
    }
  })
}
