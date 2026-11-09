---
title: "{{ replace .File.ContentBaseName "_" " " | title }}"
id: {{ .File.ContentBaseName }}
kind: passive            # passive | active
category: stats          # passive items: a key from data/categories.yaml
family: core             # a key from data/families.yaml
tier: 1                  # 1-4: the floor it starts appearing on comes from data/tiers.yaml
pools: [treasure]        # keys from data/pools.yaml; [] if no pool gives it
pool_weight: 1
# charge: 4              # active items only
# stats:                 # stat chips in the infobox
#   - {text: "+1 Damage", good: true}
# details:               # the Details table
#   - {label: Duration, value: 6 seconds}
icon: unknown.svg        # image under static/assets/
verified: false          # true once a person has checked every fact on the page in the game
# verified_by: your-github-name
---
What the item does, in one paragraph (this sentence also shows in the item list).

<!-- {{</* clip */>}} shows static/assets/clips/<id>.webp if you add a recording -->
