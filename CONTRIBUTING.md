# Contributing to the Motion Design Archive

Thank you for contributing. This archive is an open educational resource — every entry helps students learn from real motion design work.

## How to add an entry

1. Fork this repository
2. Create a new `.md` file in the `/entries` folder
3. Use the template below
4. Submit a pull request

## Entry template

```yaml
---
layout: entry.njk
title: [Title of the work]
type: tutorial            # or: inspiration
creator: [Studio or person name]
year: [Year of the work]
source_url: [Original URL]
video_url: [YouTube or Vimeo URL]
accessed: [YYYY-MM-DD — the date you verified the link]
contributor: [Your name]
tags: [technique1, technique2, technique3]
techniques: [technique1, technique2]
status: active            # set to: unavailable — if the link no longer works
---

Your analysis goes here. Write 1–3 paragraphs explaining what makes this piece work. Focus on specific motion design decisions: timing, easing, layering, rhythm, etc.
```

## License rules

**Video license** — set automatically from the URL:
- YouTube links → `Standard YouTube License` (default)
- Vimeo links → `Standard Vimeo License` (default)
- Only change this if the creator has **explicitly stated** a CC license on the video page

**Your analysis** — by submitting, you agree to license your written analysis under **CC BY-SA 4.0**. This means others can reuse and adapt it with attribution.

## Content guidelines

- **One entry per commit** — keep pull requests focused
- **Link, don't copy** — always link to the original source, never upload video files
- **Write a real analysis** — describe specific motion design decisions, not just what the video shows
- **Check the link works** before submitting
- **Use existing tags** where possible — see the tag list on the archive index

## Broken links

If you find a broken link, open an issue or submit a PR that changes `status: active` to `status: unavailable` in the entry's frontmatter. If an archived version exists on the Wayback Machine, add the `archived_url` field.

## Tag vocabulary

Use these existing tags to keep the archive consistent:

`easing` `timing` `typography` `layering` `morphing` `rhythm` `2D` `3D` `transitions` `particles` `color` `sound-sync`

Need a new tag? Propose it in your pull request description.
