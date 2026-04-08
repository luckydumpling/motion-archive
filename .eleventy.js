module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addFilter("platformFromUrl", function(url) {
    if (!url) return "";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube";
    if (url.includes("vimeo.com")) return "Vimeo";
    return "Web";
  });

  eleventyConfig.addFilter("licenseFromUrl", function(url) {
    if (!url) return "";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "Standard YouTube License";
    if (url.includes("vimeo.com")) return "Standard Vimeo License";
    return "See source";
  });

  eleventyConfig.addFilter("thumbnailFromUrl", function(url) {
    if (!url) return "";
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (ytMatch) return `https://img.youtube.com/vi/${ytMatch[1]}/mqdefault.jpg`;
    return "";
  });

  eleventyConfig.addFilter("embedFromUrl", function(url) {
    if (!url) return "";
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    return "";
  });

  eleventyConfig.addFilter("formatDate", function(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });

  eleventyConfig.addCollection("allTags", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getFilteredByGlob("entries/*.md").forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet].sort();
  });

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk"
  };
};
