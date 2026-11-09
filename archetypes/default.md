---
title: "{{ replace .File.ContentBaseName "_" " " | title }}"
id: {{ .File.ContentBaseName }}
color: '#ffd23c'         # infobox colour
# element: fire          # type page id, for enemies and bosses
# pokemon: charmander    # Pokémon page id, for enemies and bosses
icon: unknown.svg
# labels: [{text: MECHANIC, color: '#7fe07f'}]
# details:
#   - {key: hp, label: Health, value: '38'}   # enemies/bosses: key hp|speed|contact|appears|signature fills the list columns
# hint: Where to find it.
verified: false          # true once a person has checked every fact on the page in the game
# verified_by: your-github-name
---
One-paragraph description (shown in the section list).
