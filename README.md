# PokeIsaac-Wiki

A Terraria-wiki-style reference for PokéIsaac, styled like the game itself (Press Start 2P, the game's gold-on-dark panels, pixel sprites), in English and French. Every page is a Markdown file in this repository: anyone can fix or add a page with a pull request, and GitHub Pages publishes the site when it's merged. See [CONTRIBUTING.md](CONTRIBUTING.md).

Sections: Items (391), Held items (49), Pokémon (1009), Enemies, Bosses, Types, Rooms, World (plus Floors and chapters), Mechanics (plus guides) and Music, about 1,700 pages per language.

## Build

The site is built with [Hugo](https://gohugo.io/installation/) (extended, 0.168.0 or newer):

```sh
hugo server                                      # preview at http://localhost:1313/, reloads on save
hugo --minify && python3 -I tools/check_links.py public   # build into public/ and check every link and image
```

`.github/workflows/pages.yml` runs the same build and link check on every pull request, and on `main` it publishes `public/` to GitHub Pages (repository settings: Pages, Source: GitHub Actions).

## Files

| Path | What |
|---|---|
| `content/en/`, `content/fr/` | the pages: one Markdown file per item, held item, Pokémon, enemy, boss, type, room, world object, mechanic and music track, plus the floors page and the guides |
| `data/*.yaml` | shared tables the layouts read: item families, categories, pools, rarities, regions, tiers, languages, sections |
| `i18n/en.yaml`, `i18n/fr.yaml` | interface labels |
| `layouts/` | Hugo templates: page chrome, infoboxes, section lists with filters, navboxes, search index (`search.json`) |
| `archetypes/` | templates for `hugo new`, with every front matter field explained |
| `static/assets/` | sprites, portraits, icons, item clips, floor and arena screenshots, fonts, `wiki.css` (look) and `wiki.js` (search, sorting, filters, language switch) |
| `tools/check_links.py` | checks the built site: every internal link and image resolves, nothing loads from another host |

Fan-made, not affiliated with PokéIsaac, Nintendo, Game Freak, Creatures or The Pokémon Company.
