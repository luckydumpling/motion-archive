const fs = require("fs");
const path = require("path");

module.exports = async function() {
  const thumbnails = {};
  const entriesDir = path.join(__dirname, "../entries");

  if (!fs.existsSync(entriesDir)) return thumbnails;

  const files = fs.readdirSync(entriesDir).filter(f => f.endsWith(".md"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(entriesDir, file), "utf8");
    const match = content.match(/video_url:\s*(https?:\/\/vimeo\.com\/\S+)/);
    if (!match) continue;

    const url = match[1].trim();
    const idMatch = url.match(/vimeo\.com\/(\d+)/);
    if (!idMatch) continue;

    const id = idMatch[1];
    try {
      const res = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}`);
      if (!res.ok) continue;
      const data = await res.json();
      if (data.thumbnail_url) thumbnails[url] = data.thumbnail_url;
    } catch (e) {
      // skip on error
    }
  }

  return thumbnails;
};