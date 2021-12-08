module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'template_electron'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: [
        'darwin'
      ]
    },
    {
      name: '@electron-forge/maker-deb',
      config: {}
    },
    {
      config: {},
      name: '@electron-forge/maker-rpm',
    }
  ],
  plugins: [
    [
      //'@electron-forge/plugin-auto-unpack-natives',
      '@electron-forge/plugin-webpack',
      {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/renderer/index.html',
              js: './src/renderer/renderer.ts',
              name: 'main_window',
              preload: {
                js: './src/renderer/preload.ts'
              }
            }
          ]
        }
      }
    ]
  ]
}
