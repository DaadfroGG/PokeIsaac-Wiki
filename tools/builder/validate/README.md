# Checking the planner against the headless simulator

Needs the maintainer's private simulator (`~/Documents/pokeisaac/tools/sim`). Run from the wiki root.

1. `node tools/builder/validate/gen_builds.js 80 /tmp/params.json` writes random builds (items with no condition).
2. Stats: run `sim_stats.js` with `--params "$(cat /tmp/params.json)"` and `--json /tmp/stats.json`, then `node tools/builder/validate/cmp_stats.js /tmp/stats.json`.
3. Damage per second: add `"ticks": 900` to the params, run `sim_dps.js` (same flags, `--json /tmp/dps.json`), then `node tools/builder/validate/cmp_dps.js /tmp/dps.json`. For weapons use `"weapon": true` (hold) or `"hold": N` (hold N ticks, release 3) and `cmp_weapons.js`.

Simulator query: `mockauth=1&all=1&caps=1&god=1&lang=en`, run with `node --experimental-websocket tools/sim/sim.js <scenario> ...`.

Results of the last run (Nov 2026): stats identical on 80 random builds; damage per second of one-shot builds within 5 % on average (sim's boss is frozen, type-neutral, 100 px away); chance shots in random directions land about 1 time in 10 on one target; Chill Drive zones do not add up on one target; multishot fans of 5 shots lose about 40 % at that distance.
