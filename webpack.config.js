const path = require("path");

var webpackConfig = {
  mode: "production",
  entry: {
    chord: "./src/examples/chord/chord.ts",
    collapsible_tree: "./src/examples/collapsible_tree/collapsible_tree.ts",
    hello_world: "./src/examples/hello_world/hello_world.js",
    hello_world_react: "./src/examples/hello_world_react/hello_world_react.js",
    image_carousel: "./src/examples/image_carousel/image_carousel.js",
    liquid_fill_gauge: "./src/examples/liquid_fill_gauge/liquid_fill_gauge.ts",
    sankey: "./src/examples/sankey/sankey.ts",
    sunburst: "./src/examples/sunburst/sunburst.ts",
    treemap: "./src/examples/treemap/treemap.ts",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.ts$/, loader: "ts-loader" },
    ],
  },
  stats: {
    warningsFilter: /export.*liquidfillgauge.*was not found/,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = webpackConfig;
