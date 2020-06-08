const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
    baseUrl: "https://teranyan.tokyo",
    pagesDirectory: path.join(__dirname, "../pages"),
    ignoredPaths: ["index"],
    targetDirectory: "public/",
    nextConfigPath: path.join(__dirname, "../next.config.js"),
    ignoredExtensions: ["png", "jpg"],
})