module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@app": "./src/app",
            "@features": "./src/features",
            "@shared": "./src/shared",
            "@theme": "./src/theme",
            "@navigation": "./src/navigation",
            "@firebase": "./src/firebase",
            "@config": "./src/config",
            "@utils": "./src/utils",
            "@i18n": "./src/i18n",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
