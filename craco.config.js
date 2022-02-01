const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#2dcea2",
              "@border-radius-base": "11px;",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
