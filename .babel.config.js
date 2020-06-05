module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { useSpread: true }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          test: './test'
        }
      }
    ]
  ]
}
