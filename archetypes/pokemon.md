---
title: "{{ replace .File.ContentBaseName "_" " " | title }}"
id: {{ .File.ContentBaseName }}
dex: '0000'              # Pokédex number as text; Mega forms end in "m"
types: [normal]          # type page ids (content/<lang>/types/)
rarity: common           # a key from data/rarities.yaml
region: kanto            # a key from data/regions.yaml
how: gacha               # start | special | gacha | mega
# unlock: "Beat ..."     # how: special only
icon: unknown.svg
stats: {hp: 6, damage: '3.5', fire_rate: '2.7', speed: '4.0', range: '300', shot_speed: '9.0', luck: 0}
evolves_from: []         # Pokémon page ids
evolves_to: []
verified: false          # true once a person has checked every fact on the page in the game
# verified_by: your-github-name
---
What playing it is like (first paragraph is the summary).
