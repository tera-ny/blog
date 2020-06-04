const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)?$/,
});

const nextConfig = {
  target: "serverless",

  pageExtensions: ["jsx", "js", "mdx", "md", "ts", "tsx"],

  env: {
    VERSION: require("./package.json").version,
  },

  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = withMDX(nextConfig);
