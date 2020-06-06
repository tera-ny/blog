const fs = require("fs");

const path = require("path");
const postDir = path.join(__dirname, "../pages/posts/");

const extractMdxMeta = require("extract-mdx-metadata");

(async () => {
  const metaDatas = await Promise.all(
    fs
      .readdirSync(postDir)
      .filter((filePath) => {
        return path.parse(filePath).ext === ".mdx";
      })
      .map(async (mdxFile) => {
        const file = fs.readFileSync(postDir + mdxFile);
        const meta = await extractMdxMeta(file);
        return { path: `/posts/${path.parse(mdxFile).name}`, meta };
      })
  );
  const json = {};
  metaDatas.forEach((value) => {
    json[value.path] = value.meta;
  });
  fs.writeFileSync(
    path.join(__dirname, "../metaData.json"),
    JSON.stringify(json)
  );
})();
