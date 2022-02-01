const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#252525d4",
              "@border-radius-base": "11px;",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
