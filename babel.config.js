module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 5%", "last 2 versions", "safari >= 7", "ie >= 11"],
        },
      },
    ],
    ["minify"],
  ];
  const plugins = ["@babel/plugin-transform-object-assign"];

  return {
    presets,
    plugins,
  };
};
