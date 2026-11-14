/* PokéIsaac build planner: the page. Reads names from the page, numbers from data.json, maths from engine.js. */
(() => {
  "use strict";
  const host = document.getElementById("pb");
  if (!host) return;
  const NAMES = JSON.parse(document.getElementById("pb-names").textContent);
  const T = NAMES.t, ROOT = host.dataset.root;
  const FR = document.documentElement.lang.startsWith("fr");
  const $ = (tag, props, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (k === "class") e.className = v; else if (k === "text") e.textContent = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v); else if (v !== false && v != null) e.setAttribute(k, v === true ? "" : v);
    }
    for (const c of kids.flat()) if (c != null) e.append(c);
    return e;
  };
  const dec = (s) => (FR ? s.replace(".", ",") : s);
  const fmt = (x, d = 2) => dec((+x.toFixed(d)).toString());
  const sgn = (x, d = 2) => (x >= 0 ? "+" : "−") + fmt(Math.abs(x), d);
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const icon = (p) => $("img", { src: ROOT + "assets/" + (p || "unknown.svg"), alt: "", loading: "lazy" });

  const DEF = { c: "pikachu", s: 0, l: 1, m: 1, f: 1, sh: 0, i: {}, t: {} };
  let data, E, S = Object.assign({}, DEF, { i: {}, t: {} });

  // ---------- state <-> link ----------
  function toHash() {
    const i = Object.entries(S.i).filter(([, n]) => n > 0).map(([k, n]) => k + ":" + n).join(",");
    const t = Object.entries(S.t).filter(([, v]) => +v > 0).map(([k, v]) => k + ":" + (+v)).join(",");
    return `c=${S.c}&s=${S.s}&l=${S.l}&m=${S.m}&f=${S.f}&sh=${S.sh}` + (i ? "&i=" + i : "") + (t ? "&t=" + t : "");
  }
  function fromHash(h) {
    const p = new URLSearchParams(h.replace(/^#/, ""));
    const n = Object.assign({}, DEF, { i: {}, t: {} });
    if (p.get("c") && data.chars[p.get("c")]) n.c = p.get("c");
    for (const k of ["s", "l", "m", "f", "sh"]) if (p.has(k) && !isNaN(+p.get(k))) n[k] = +p.get(k);
    n.s = Math.min(2, Math.max(0, n.s)); n.l = Math.min(60, Math.max(1, n.l)); n.f = Math.max(1, Math.min(300, n.f));
    for (const part of (p.get("i") || "").split(",")) {
      const [k, c] = part.split(":");
      if (k && data.items[k] && +c > 0) n.i[k] = Math.min(99, +c | 0);
    }
    for (const part of (p.get("t") || "").split(",")) {
      const [k, v] = part.split(":");
      if (E.SIT_VARS.includes(k)) n.t[k] = Math.min(E.LIMITS[k], Math.max(0, +v || 0));
      else if (E.SIT_FLAGS.includes(k) && +v) n.t[k] = 1;
    }
    return n;
  }
  const bld = () => ({ char: S.c, stage: S.s, level: S.l, levels: !!S.m, floor: S.f, shiny: !!S.sh, items: S.i, sit: S.t });
  const linkOf = () => location.href.split("#")[0] + "#" + toHash();

  // ---------- inputs ----------
  const pokeBox = $("input", { type: "search", placeholder: T.pb_search_poke, "aria-label": T.pb_search_poke });
  const pokeRes = $("ul", { class: "results", hidden: true });
  const pokeNow = $("div", { class: "poke" });
  const stage = $("select", { onchange: () => { S.s = +stage.value; render(); } }, [0, 1, 2].map((v) => $("option", { value: v, text: T["pb_stage" + v] })));
  const level = $("input", { type: "number", min: 1, max: 60, onchange: () => { S.l = Math.min(60, Math.max(1, +level.value || 1)); render(); } });
  const floor = $("input", { type: "number", min: 1, max: 300, onchange: () => { S.f = Math.max(1, +floor.value || 1); render(); } });
  const mode = $("select", { onchange: () => { S.m = +mode.value; render(); } }, [$("option", { value: 1, text: T.pb_mode_levels }), $("option", { value: 0, text: T.pb_mode_nolevels })]);
  const shiny = $("input", { type: "checkbox", onchange: () => { S.sh = shiny.checked ? 1 : 0; render(); } });
  const itemBox = $("input", { type: "search", placeholder: T.pb_search_item, "aria-label": T.pb_search_item });
  const itemRes = $("ul", { class: "results", hidden: true });
  const list = $("ul", { class: "list" });
  const out = $("div");
  const sitBox = $("div");
  const pasteBox = $("input", { type: "text", placeholder: T.pb_paste, onchange: () => { try { S = fromHash(new URL(pasteBox.value, location.href).hash); pasteBox.value = ""; render(); } catch (_) {} } });
  const copied = $("span", { class: "note" });

  const copy = (txt) => {
    const done = () => { copied.textContent = T.pb_copied; setTimeout(() => (copied.textContent = ""), 1500); };
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, () => {}); else { const t = $("textarea", { text: txt }); document.body.append(t); t.select(); try { document.execCommand("copy"); done(); } catch (_) {} t.remove(); }
  };

  const left = $("div", { class: "card" },
    $("h2", { text: "Pokémon" }), pokeNow, pokeBox, pokeRes,
    $("div", { class: "row" }, $("label", {}, T.pb_stage, stage), $("label", {}, shiny, T.pb_shiny)),
    $("div", { class: "row" }, mode, $("label", {}, T.pb_level, level), $("label", {}, T.pb_floor, floor)),
    $("h2", { text: T.pb_items }), itemBox, itemRes, list,
    $("h2", { text: T.pb_situation }), sitBox,
    $("div", { class: "row" }, $("button", { type: "button", text: T.pb_reset, onclick: () => { S = Object.assign({}, DEF, { c: S.c, i: {}, t: {} }); render(); } })));
  const right = $("div", { class: "card" }, out,
    $("div", { class: "row" }, $("button", { type: "button", text: T.pb_copy_link, onclick: () => copy(linkOf()) }), $("button", { type: "button", text: T.pb_copy_text, onclick: () => copy(asText()) }), copied),
    $("div", { class: "row" }, pasteBox));
  host.replaceChildren(left, right);

  // ---------- search lists ----------
  function fillResults(ul, q, entries, pick, mk) {
    q = norm(q.trim());
    ul.replaceChildren();
    if (!q) { ul.hidden = true; return; }
    const hits = entries.filter(([, n]) => n.includes(q)).slice(0, 40);
    if (!hits.length) ul.append($("li", { text: T.pb_no_results }));
    for (const [slug] of hits) ul.append($("li", { onclick: () => { pick(slug); ul.hidden = true; } }, mk(slug)));
    ul.hidden = false;
  }
  let pokeIdx, itemIdx;
  const buildIdx = () => {
    pokeIdx = Object.keys(data.chars).filter((k) => NAMES.c[k]).map((k) => [k, norm(NAMES.c[k][0] + " " + k)]).sort((a, b) => a[1].localeCompare(b[1]));
    itemIdx = Object.keys(data.items).filter((k) => NAMES.i[k]).map((k) => [k, norm(NAMES.i[k][0] + " " + k)]).sort((a, b) => a[1].localeCompare(b[1]));
  };
  const itemMark = (slug) => { const t = data.items[slug].t; return t === "full" ? null : $("span", { class: "tag " + (t === "none" ? "none" : "part"), text: t === "none" ? "?" : "~", title: t === "none" ? T.pb_unsim : T.pb_partial }); };
  pokeBox.addEventListener("input", () => fillResults(pokeRes, pokeBox.value, pokeIdx, (s) => { S.c = s; pokeBox.value = ""; render(); }, (s) => [icon(NAMES.c[s][1]), NAMES.c[s][0]]));
  itemBox.addEventListener("input", () => fillResults(itemRes, itemBox.value, itemIdx, (s) => { S.i[s] = Math.min(99, (S.i[s] || 0) + 1); render(); }, (s) => [icon(NAMES.i[s][1]), $("span", { text: NAMES.i[s][0] }), itemMark(s)]));

  // ---------- output ----------
  const nameOf = (s) => (NAMES.i[s] || [s])[0];
  const row = (label, value, why) => $("tr", {}, $("td", {}, label, why ? $("span", { class: "why", text: why }) : null), $("td", { class: "v", text: value }));
  function parts(list) { return list.filter(Boolean).join(" · "); }
  const mult = (k) => (Math.abs(k - 1) < 1e-9 ? null : "×" + fmt(k, 3));

  function summary(r) {
    const s = r.stats, st = r.steps;
    const rows = [];
    rows.push(row(T.pb_damage, fmt(s.damage), parts([
      `${T.pb_base} ${fmt(st.damage.base)}`,
      st.damage.items ? `${T.pb_items} ${sgn(st.damage.items)} → ${T.pb_counted.toLowerCase()} ${sgn(st.damage.counted - st.damage.evo)}` : null,
      st.damage.evo ? `${T.pb_stage_bonus} ${sgn(st.damage.evo)}` : null,
      st.damage.multRaw !== 1 ? `${T.pb_mults} ${st.damage.mults.map((m) => "×" + fmt(m.v, 3)).join(" ")}${Math.abs(st.damage.mult - st.damage.multRaw) > 1e-9 ? " → ×" + fmt(st.damage.mult, 3) + " (" + T.pb_counted.toLowerCase() + ")" : ""}` : null,
      st.damage.level !== 1 ? `${T.pb_level_k} ${mult(st.damage.level)}` : null,
      st.damage.shiny !== 1 ? `${T.pb_shiny_k} ${mult(st.damage.shiny)}` : null])));
    rows.push(row(T.pb_fire_rate, fmt(s.fireRate) + " " + T.pb_shots_s, parts([
      `${T.pb_base} ${fmt(st.fireRate.baseTicks, 0)} ${T.pb_ticks}`,
      st.fireRate.items ? `${T.pb_items} ${st.fireRate.items < 0 ? "+" : "−"}${fmt(Math.abs(st.fireRate.items))} → ${T.pb_counted.toLowerCase()} ${st.fireRate.counted < 0 ? "+" : "−"}${fmt(Math.abs(st.fireRate.counted))}` : null,
      st.fireRate.itemMul !== 1 ? `${T.pb_items} ${mult(st.fireRate.itemMul)}` : null, st.fireRate.bug !== 1 ? mult(st.fireRate.bug) : null, st.fireRate.level !== 1 ? `${T.pb_level_k} ${mult(st.fireRate.level)}` : null,
      st.fireRate.shiny !== 1 ? `${T.pb_shiny_k} ${mult(st.fireRate.shiny)}` : null,
      `= ${fmt(s.ticks)} ${T.pb_ticks}`, st.fireRate.capped ? T.pb_cap + " 12" : null])));
    rows.push(row(T.pb_speed, fmt(s.speed), parts([`${T.pb_base} ${fmt(st.speed.base)}`, st.speed.items ? `${T.pb_items} ${sgn(st.speed.items)}` : null, st.speed.evo ? `${T.pb_stage_bonus} ${sgn(st.speed.evo)}` : null, st.speed.cond ? `${T.pb_cond_short} ${sgn(st.speed.cond)}` : null, st.speed.type ? `${T.pb_type_k} ${sgn(st.speed.type)}` : null, st.speed.level !== 1 ? `${T.pb_level_k} ${mult(st.speed.level)}` : null, st.speed.shiny !== 1 ? `${T.pb_shiny_k} ${mult(st.speed.shiny)}` : null])));
    rows.push(row(T.pb_range, fmt(s.range, 0) + " px", parts([`${T.pb_base} ${fmt(st.range.base, 0)}`, `${T.pb_global} +50`, st.range.items ? `${T.pb_items} ${sgn(st.range.items, 0)}` : null])));
    rows.push(row(T.pb_shot_speed, fmt(s.shotSpeed), parts([`${T.pb_base} ${fmt(st.shotSpeed.base)}`, st.shotSpeed.items ? `${T.pb_items} ${sgn(st.shotSpeed.items)}` : null])));
    rows.push(row(T.pb_luck, fmt(s.luck), parts([`${T.pb_base} ${fmt(st.luck.base)}`, st.luck.items ? `${T.pb_items} ${sgn(st.luck.items)}` : null, st.luck.shiny ? `${T.pb_shiny_k} ${sgn(st.luck.shiny)}` : null, st.luck.type ? `${T.pb_type_k} ${sgn(st.luck.type)}` : null, st.luck.raw > 10 ? `${fmt(st.luck.raw)} → ${T.pb_cap} 10 + ¼` : null])));
    rows.push(row(T.pb_health, fmt(s.hearts, 1) + " " + T.pb_hearts, parts([`${T.pb_base} ${fmt(st.hp.base / 2, 1)}`, st.hp.items ? `${T.pb_items} ${sgn(st.hp.items / 2, 1)}` : null, st.hp.evo ? `${T.pb_stage_bonus} ${sgn(st.hp.evo / 2, 1)}` : null, st.hp.capped ? T.pb_cap + " 12" : null])));
    return rows;
  }

  const STATK = { dmg: "pb_damage", rate: "pb_fire_rate", speed: "pb_speed" };
  // Which controls to show: only the ones the chosen items react to.
  function sitControls(r) {
    const vars = new Set(), flags = new Set();
    for (const e of r.effects) {
      if (e.when && E.SIT_FLAGS.includes(e.when)) flags.add(e.when);
      if (e.var) vars.add(e.var);
    }
    for (const slug of Object.keys(S.i)) for (const f of (data.items[slug] && data.items[slug].e) || []) { if (f.var && f.var !== "items") vars.add(f.var); if (f.when && E.SIT_FLAGS.includes(f.when)) flags.add(f.when); }
    const rows = [];
    for (const v of E.SIT_VARS) if (vars.has(v)) rows.push($("label", {}, T["pb_var_" + v], $("input", { type: "number", min: 0, max: E.LIMITS[v], value: S.t[v] || 0, onchange: (ev) => { S.t[v] = Math.min(E.LIMITS[v], Math.max(0, +ev.target.value || 0)); render(); } })));
    for (const f of E.SIT_FLAGS) if (flags.has(f)) rows.push($("label", {}, $("input", { type: "checkbox", checked: !!S.t[f], onchange: (ev) => { S.t[f] = ev.target.checked ? 1 : 0; render(); } }), T["pb_flag_" + f]));
    return rows.length ? $("div", { class: "row" }, rows) : $("p", { class: "note", text: T.pb_sit_none });
  }
  function effectList(r) {
    if (!r.effects.length) return null;
    const items = r.effects.map((e) => {
      const what = e.kind === "add" ? `${T[STATK[e.stat]]} ${sgn(e.kind === "add" && e.when || !e.var ? e.v : e.v)}` : `${T[STATK[e.stat]]} ${e.kind === "mulvar" ? "×" + fmt(e.v, 2) : "×" + fmt(e.v, 2)}`;
      const cond = e.when ? ` (${T["pb_when_" + e.when]})` : "";
      return $("li", { class: e.active ? "on" : "off" }, $("b", { text: nameOf(e.slug) }), ": " + what + cond, " ", $("span", { class: "tag " + (e.active ? "" : "none"), text: e.active ? T.pb_active : T.pb_inactive }));
    });
    return $("div", { class: "warn" }, $("b", { text: T.pb_cond }), $("ul", {}, items));
  }
  function lists(r) {
    const box = $("div");
    const names = (a) => a.map(nameOf).join(", ");
    if (r.unsimulated.length) box.append($("div", { class: "warn" }, $("b", { text: T.pb_unsim + " (" + r.unsimulated.length + ")" }), $("ul", {}, $("li", { text: names(r.unsimulated) }))));
    if (r.partial.length) box.append($("div", { class: "warn" }, $("b", { text: T.pb_partial + " (" + r.partial.length + ")" }), $("ul", {}, $("li", { text: names(r.partial) }))));
    return box;
  }

  function asText() {
    const r = E.compute(data, bld()), s = r.stats;
    const its = Object.entries(S.i).filter(([, n]) => n > 0).map(([k, n]) => nameOf(k) + (n > 1 ? " ×" + n : "")).join(", ");
    return [`${NAMES.c[S.c][0]} (${T["pb_stage" + S.s]}${S.sh ? ", " + T.pb_shiny : ""}${S.m ? ", " + T.pb_level + " " + S.l : ""})`, its || T.pb_none,
      `${T.pb_damage} ${fmt(s.damage)} · ${T.pb_fire_rate} ${fmt(s.fireRate)} ${T.pb_shots_s} · ${T.pb_speed} ${fmt(s.speed)} · ${T.pb_range} ${fmt(s.range, 0)} · ${T.pb_luck} ${fmt(s.luck)} · ${T.pb_health} ${fmt(s.hearts, 1)} ${T.pb_hearts}`,
      `${T.pb_dps} ${fmt(s.dps, 1)}`, linkOf()].join("\n");
  }

  function render() {
    // inputs
    stage.value = S.s; level.value = S.l; floor.value = S.f; mode.value = S.m; shiny.checked = !!S.sh;
    level.disabled = !S.m; floor.disabled = false;
    const nm = NAMES.c[S.c] || [S.c, ""];
    pokeNow.replaceChildren(icon(nm[1]), $("b", { text: nm[0] }));
    // item list
    list.replaceChildren();
    const entries = Object.entries(S.i).filter(([, n]) => n > 0);
    if (!entries.length) list.append($("li", { class: "note", text: T.pb_empty }));
    for (const [slug, n] of entries) {
      const nmI = NAMES.i[slug] || [slug, ""];
      list.append($("li", {}, icon(nmI[1]), $("a", { class: "nm", href: "../items/" + slug + ".html", text: nmI[0] }), itemMark(slug),
        $("span", { class: "cnt" },
          $("button", { type: "button", text: "−", "aria-label": T.pb_remove, onclick: () => { S.i[slug] = n - 1; if (S.i[slug] <= 0) delete S.i[slug]; render(); } }),
          $("b", { text: n }),
          $("button", { type: "button", text: "+", "aria-label": T.pb_add, onclick: () => { S.i[slug] = Math.min(99, n + 1); render(); } }))));
    }
    // output
    const r = E.compute(data, bld());
    const full = Object.entries(S.i).filter(([k, n]) => n > 0 && data.items[k] && data.items[k].t === "full").length;
    const total = entries.length;
    out.replaceChildren(
      $("div", { class: "dps" }, $("div", {}, $("div", { class: "note", text: T.pb_dps }), $("div", { class: "big", text: fmt(r.stats.dps, 1) })),
        $("div", {}, $("div", { class: "note", text: T.pb_per_shot }), $("b", { text: fmt(r.stats.avgShot) })),
        $("div", {}, $("div", { class: "note", text: T.pb_shots_s }), $("b", { text: fmt(r.stats.fireRate) }))),
      $("table", { class: "stats" }, $("tbody", {}, summary(r),
        row(T.pb_crit, fmt(r.stats.critChance * 100, 1) + " %", r.stats.critChance ? `${T.pb_crit_mult} ×${fmt(r.stats.critMult, 2)}` : null),
        r.stats.typeDamage !== 1 ? row(T.pb_typed_dmg, "×" + fmt(r.stats.typeDamage, 3), `${T.pb_type_tier} ${r.tier}`) : null)),
      total ? $("p", { class: "note", text: `${T.pb_coverage}: ${full} / ${total}` }) : null,
      effectList(r), lists(r), $("p", { class: "note", text: T.pb_assume }));
    sitBox.replaceChildren(sitControls(r));
    history.replaceState(null, "", "#" + toHash());
  }

  fetch(ROOT + "assets/builder/data.json").then((r) => r.json()).then((d) => {
    data = d; E = window.PIBuilder; buildIdx();
    S = location.hash.length > 1 ? fromHash(location.hash) : S;
    if (!data.chars[S.c]) S.c = Object.keys(data.chars)[0];
    window.addEventListener("hashchange", () => { if (location.hash !== "#" + toHash()) { S = fromHash(location.hash); render(); } });
    render();
  });
})();
