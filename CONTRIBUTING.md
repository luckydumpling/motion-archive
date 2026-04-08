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
level: beginner           # tutorial only — beginner, intermediate, advanced. leave out for inspiration entries.
tool: after-effects       # after-effects, touchdesigner, cinema4d, blender, etc.
creator: [Studio or person name]
year: [Year of the work]
source_url: [Original URL]
video_url: [YouTube or Vimeo URL]
accessed: [YYYY-MM-DD — the date you verified the link]
contributor: [Your name]
tags: [technique1, technique2, technique3]
techniques: [technique1, technique2]
status: active            # set to: unavailable — if the link no longer works
archived_url:             # leave empty — fill in only if link breaks and archive exists
---

Your analysis goes here. Write 1–3 paragraphs explaining what makes this piece work.
Focus on specific motion design decisions: timing, easing, layering, rhythm, etc.
```

## Field reference

| Field          | Required       | Notes                                     |
| -------------- | -------------- | ----------------------------------------- |
| `layout`       | yes            | always `entry.njk`                        |
| `title`        | yes            | use sentence case                         |
| `type`         | yes            | `tutorial` or `inspiration`               |
| `level`        | tutorials only | `beginner`, `intermediate`, or `advanced` |
| `tool`         | yes            | see tool vocabulary below                 |
| `creator`      | yes            | studio or person name                     |
| `year`         | yes            | year the work was made                    |
| `source_url`   | yes            | original URL of the work                  |
| `video_url`    | yes            | YouTube or Vimeo URL                      |
| `accessed`     | yes            | date you verified the link works          |
| `contributor`  | yes            | your name                                 |
| `tags`         | yes            | 2–5 tags from the vocabulary below        |
| `techniques`   | yes            | 1–3 key techniques from the vocabulary    |
| `status`       | yes            | `active` by default                       |
| `archived_url` | no             | only fill in if original link breaks      |

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
- **Use existing tags** where possible — see vocabularies below

## Broken links

If you find a broken link, open an issue or submit a PR that changes `status: active` to `status: unavailable`. If an archived version exists on the Wayback Machine, add the URL to the `archived_url` field.

---

## Tag vocabulary

Use these existing tags. Need a new one? Propose it in your pull request description.

### Technique tags

`2D` `3D` `automation` `charts` `cinematic` `collage` `color` `composition` `csv` `data-driven` `depth` `distortion` `easing` `expressions` `infographic` `json` `kinetic` `layering` `motion-systems` `morphing` `particles` `rhythm` `scripting` `shapes` `sound-sync` `texture` `timing` `tips` `transitions` `typography` `warp` `workflow`

### Tool values

`after-effects` `touchdesigner` `cinema4d` `blender` `figma` `p5js`

### Level values (tutorials only)

`beginner` `intermediate` `advanced`

### Type values

`tutorial` `inspiration`
