# Editing the PokéIsaac Wiki

Every page of the wiki is a Markdown file in this repository. To fix or add something, change the file and open a pull request; once it's merged, the site updates by itself in a few minutes.

## The quick way: in the browser

1. On any wiki page, click **Edit this page** at the bottom. GitHub opens the page's file.
2. Click the pencil, make your change, then **Propose changes** and **Create pull request**.
3. A check builds the whole wiki and tests every link. If it's green and someone reviews it, it's merged.

## Where things are

| Path | What |
|---|---|
| `content/en/…`, `content/fr/…` | the pages, one file per page, English and French. The same file name in both folders is the same page in two languages. |
| `content/<lang>/items/<id>.md` | one item |
| `content/<lang>/pokemon/<id>.md` | one playable Pokémon |
| `content/<lang>/{enemies,bosses,types,rooms,world,mechanics}/<id>.md` | the other sections |
| `content/<lang>/<section>/_index.md` | a section's list page: its title, the short `blurb` on the main page, and the intro text |
| `content/<lang>/world/floors.md`, `content/<lang>/mechanics/guides/*.md` | longer pages written as plain Markdown |
| `data/*.yaml` | shared tables: item families, categories, pools, rarities, regions (names in both languages and colours) |
| `i18n/en.yaml`, `i18n/fr.yaml` | the wiki's own interface words (menu, headings, "Effect", "Details"…) |
| `static/assets/` | images: item sprites, portraits, icons, clips, screenshots; plus `wiki.css` and `wiki.js` |
| `layouts/` | the HTML templates that turn a page file into a wiki page (infobox, lists, navboxes) |

## How a page file looks

The part between the two `---` lines (the *front matter*) holds the facts: they fill the infobox, the section lists and their filters. Below it is the text, in Markdown. The first paragraph is the page's summary, shown in the section list and in search results.

```markdown
---
title: Clear Bell
id: campana_clara        # the game's internal id; also the file name
kind: active
family: core
tier: 1
pools: [treasure, shop]
pool_weight: 2
charge: 4
details:
- label: Duration
  value: 6 seconds
icon: items-ps/key-item/clear-bell.png
---
For 6 seconds, hits you take heal you half a heart instead of hurting you.
```

The fields each section uses are listed in `archetypes/` (`items.md`, `pokemon.md`, and `default.md` for the other sections), with a comment on each. `names` lists what the game calls the page in its other languages (the "In other languages" table).

Links between pages are ordinary relative links: from an item, `[Leftovers](restos.html)`; from another section, `[Pidgey](../enemies/pidgey.html)`. The check fails if a link points to a page that doesn't exist.

Pages may use a little HTML where Markdown can't do it (a `<p class="note">` for a grey note, an `<img>` with a size). Two shortcodes are there for media: `{{</* clip */>}}` shows the item's recording from `static/assets/clips/<id>.webp` (with a `<id>.png` still), and `{{</* scenes */>}}…{{</* /scenes */>}}` with `{{</* scene src="arena-bosque.webp" caption="…" */>}}` lays out screenshots from `static/assets/scenes/`.

## Adding a page

Copy a page of the same section and change it, or let Hugo fill in the fields:

```sh
hugo new content/en/items/my_item.md
```

Add the French page at the same path under `content/fr/` (if you can't translate it, copy the English text; someone else can translate it later).

## Previewing on your computer

Install [Hugo](https://gohugo.io/installation/) (extended edition, version 0.168.0 or newer), then from the repository:

```sh
hugo server                          # http://localhost:1313/ , reloads as you save
hugo && python3 -I tools/check_links.py public   # the same check the pull request runs
```

## Ground rules

- Write what the game does, not what you think it should do. If a number comes from testing, say how you tested it.
- Keep English and French in step. If you change a fact (a number, a pool, a tier), change it in both files.
- Game names and text belong to the game: use the names the game uses in each language.
