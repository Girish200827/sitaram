export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/")
  eleventyConfig.addPassthroughCopy(".src/css/")
};

export const config = {
  dir: {
    input: "src",
    output: "public"
  },
};
