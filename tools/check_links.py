#!/usr/bin/env python3
"""Check the built site: every link and image inside it resolves, and nothing loads from another host.

Usage: python3 -I tools/check_links.py [public] [--base /PokeIsaac-Wiki/]
  public   the folder `hugo` wrote (default: public)
  --base   the site's path on its host, as in baseURL (default: /). Links starting with it are looked up in public/.
Pages may link to other sites, but images, styles and scripts must come from the site itself.
"""
import re
import sys
from pathlib import Path
from urllib.parse import unquote

args = sys.argv[1:]
base = "/"
if "--base" in args:
    i = args.index("--base")
    base = args[i + 1]
    del args[i: i + 2]
base = "/" + base.strip("/") + "/" if base.strip("/") else "/"
out = Path(args[0] if args else "public")
if not (out / "index.html").exists() and not any(out.glob("*/index.html")):
    raise SystemExit(f"{out}: no built site here (run hugo first)")

rx = re.compile(r'(href|src|srcset)=["\']?([^"\' >#?]*)')
bad, n = [], 0
for f in out.rglob("*.html"):
    for attr, u in rx.findall(f.read_text(encoding="utf-8")):
        if not u:
            continue
        n += 1
        if re.match(r"^[a-z]+:", u):
            if attr != "href" or not u.startswith(("https:", "http:", "mailto:")):
                bad.append(f"{f.relative_to(out)}: loads from outside the site: {u}")
            continue
        if u.startswith("/"):
            if not u.startswith(base):
                bad.append(f"{f.relative_to(out)}: outside the site's base {base}: {u}")
                continue
            target = out / unquote(u[len(base):])
        else:
            target = f.parent / unquote(u)
        if u.endswith("/"):
            target = target / "index.html"
        if not target.exists():
            bad.append(f"{f.relative_to(out)}: missing {u}")
for css in out.rglob("*.css"):
    for u in re.findall(r'url\("?([^")]+)"?\)', css.read_text(encoding="utf-8")):
        if not u.startswith("data:") and not (css.parent / u).exists():
            bad.append(f"{css.relative_to(out)}: missing {u}")
print(f"check: {n} links, {len(bad)} problems")
for b in bad[:40]:
    print("  " + b)
sys.exit(1 if bad else 0)
