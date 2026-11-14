#!/usr/bin/env python3
"""Builds static/assets/builder/data.json for the build planner.

Reads the maintainer's private extraction (path in $POKEISAAC_DATA, default ~/Documents/pokeisaac)
and writes ONLY player-facing numbers keyed by wiki slugs. No code names, flags or ids leak.
Run: python3 -I tools/builder/gen_data.py   (then rebuild the site)."""
import csv, json, os, re, sys
STAT_LINE = re.compile(r"^((damage|fire rate|speed|range|shot spd|luck|hearts?|max hp|max health)\s*[+\-−]*[\d.,]*\s*[+\-]*|heals? [\d.,/½ ]*hearts?|full heal)$", re.I)
HOME = os.environ.get("POKEISAAC_DATA", os.path.expanduser("~/Documents/pokeisaac"))
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "static/assets/builder/data.json")

def num(x):
    f = float(x)
    return int(f) if f == int(f) else round(f, 3)

chars, sums, n = {}, {"dmg": 0.0, "rate": 0.0, "speed": 0.0}, 0
for r in csv.DictReader(open(os.path.join(HOME, "docs/characters.csv"), encoding="utf-8")):
    if not (r["dmg"] and r["rate"] and r["speed"]):
        continue
    chars[r["id"]] = [num(r["hp"]), num(r["dmg"]), num(r["rate"]), num(r["speed"]), num(r["range"]),
                      num(r["shotSpeed"]), num(r["luck"]), r["elem"], r["elem2"] or ""]
    for k in sums: sums[k] += float(r[k]); 
    n += 1
avg = {k: round(v / n, 4) for k, v in sums.items()}

rt = json.load(open(os.path.join(HOME, "data/items_runtime.json"), encoding="utf-8"))["items"]
if isinstance(rt, dict): rt = list(rt.values())
KEYS = {"dmg": "dmg", "rate": "rate", "speed": "speed", "hp": "hp", "range": "range", "shotSpeed": "shot", "luck": "luck"}
effects = {}
EFF = os.path.join(ROOT, "tools/builder/effects.json")
if os.path.exists(EFF): effects = json.load(open(EFF))   # hand-curated records, phase 2+
items = {}
for i in rt:
    if i.get("kind") != "passive" or not os.path.exists(os.path.join(ROOT, "content/en/items", i["id"] + ".md")):
        continue
    st = {KEYS[k]: num(v) for k, v in (i.get("stats") or {}).items() if v}
    # An item is "stats only" when every line of its description is a stat or a heal (nothing else to simulate).
    en = i["text"].get("en") or {}
    fx = bool(en.get("fx")) or not all(STAT_LINE.match((l[0] or "").strip()) for l in en.get("lines", []))
    if not en.get("lines"): fx = True
    rest = re.sub(r"(damage|fire rate|speed|range|shot spd|luck|hearts?|max hp)\s*[+\-−]*[\d.,]*|heals? [^;,]*|fully heals you|\band\b", " ", (en.get("desc") or "").lower())
    if re.search(r"[a-z]{2,}", rest): fx = True
    rec = {}
    if st: rec["s"] = st
    if i["id"] in effects: rec["e"] = effects[i["id"]]
    # status: full = everything modelled, partial = stats only but the item does more, none = nothing modelled
    modelled_all = i["id"] in effects and effects[i["id"]].get("done")
    rec["t"] = "full" if (modelled_all or (st and not fx and i["id"] not in effects)) else ("partial" if (st or i["id"] in effects) else "none")
    items[i["id"]] = rec
json.dump({"v": 1, "avg": avg, "chars": chars, "items": items}, open(OUT, "w"), separators=(",", ":"), ensure_ascii=False)
from collections import Counter
print(len(chars), "characters,", len(items), "items", dict(Counter(v["t"] for v in items.values())), os.path.getsize(OUT), "bytes")
