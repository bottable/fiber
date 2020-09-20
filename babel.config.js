module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'fiber-ui': './packages/fiber-ui/src',
          test: './test'
        }
      }
    ]
  ]
}
