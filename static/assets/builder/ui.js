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

  const DEF = { c: "pikachu", s: 0, l: 1, m: 1, f: 1, sh: 0, i: {}, t: {}, w: "" };
  let data, E, S = Object.assign({}, DEF, { i: {}, t: {} });

  // ---------- state <-> link ----------
  function toHash() {
    const i = Object.entries(S.i).filter(([, n]) => n > 0).map(([k, n]) => k + ":" + n).join(",");
    const t = Object.entries(S.t).filter(([, v]) => +v > 0).map(([k, v]) => k + ":" + (+v)).join(",");
    return `c=${S.c}&s=${S.s}&l=${S.l}&m=${S.m}&f=${S.f}&sh=${S.sh}` + (i ? "&i=" + i : "") + (t ? "&t=" + t : "") + (S.w ? "&w=" + S.w : "");
  }
  function fromHash(h) {
    const p = new URLSearchParams(h.replace(/^#/, ""));
    const n = Object.assign({}, DEF, { i: {}, t: {} });
    if (p.get("c") && data.chars[p.get("c")]) n.c = p.get("c");
    if (p.get("w") && data.items[p.get("w")]) n.w = p.get("w");
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
  const bld = () => ({ char: S.c, stage: S.s, level: S.l, levels: !!S.m, floor: S.f, shiny: !!S.sh, items: S.i, sit: S.t, weapon: S.w });
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
  const heldTag = (slug) => data.items[slug].h ? $("span", { class: "tag", text: T.pb_held }) : null;
  const itemMark = (slug) => { const t = data.items[slug].t; return t === "full" ? null : $("span", { class: "tag " + (t === "none" ? "none" : "part"), text: t === "none" ? "?" : "~", title: t === "none" ? T.pb_unsim : T.pb_partial }); };
  pokeBox.addEventListener("input", () => fillResults(pokeRes, pokeBox.value, pokeIdx, (s) => { S.c = s; pokeBox.value = ""; render(); }, (s) => [icon(NAMES.c[s][1]), NAMES.c[s][0]]));
  itemBox.addEventListener("input", () => fillResults(itemRes, itemBox.value, itemIdx, (s) => { S.i[s] = Math.min(data.items[s].h ? 1 : 99, (S.i[s] || 0) + 1); render(); }, (s) => [icon(NAMES.i[s][1]), $("span", { text: NAMES.i[s][0] }), heldTag(s), itemMark(s)]));

  // ---------- output ----------
  const nameOf = (s) => (NAMES.i[s] || [s])[0];
  const row = (label, value, why) => $("tr", {}, $("td", {}, label, why ? $("span", { class: "why", text: why }) : null), $("td", { class: "v", text: value }));
  function parts(list) { return list.filter(Boolean).join(" · "); }
  const mult = (k) => (Math.abs(k - 1) < 1e-9 ? null : "×" + fmt(k, 3));

  // One stat = a summary line plus a step-by-step table that opens on click: who adds what, then each rule applied.
  const stepRow = (label, value, cls, who) => $("tr", { class: cls || "" }, $("td", {}, label, who ? $("span", { class: "why", text: who }) : null), $("td", { class: "v", text: value }));
  const itemRows = (list, f) => list.map((c) => stepRow($("span", {}, $("b", { text: nameOf(c.slug) }), c.n > 1 ? " ×" + c.n : ""), f(c.v), "item"));
  const opened = new Set(["__dps"]);
  const keepOpen = (key) => ({ open: opened.has(key), ontoggle: (ev) => { if (ev.target.open) opened.add(key); else opened.delete(key); } });
  function calcRow(label, value, formula, steps, explain) {
    const body = $("div", { class: "calc-body" }, $("table", { class: "steps" }, $("tbody", {}, steps.filter(Boolean))), explain ? $("p", { class: "note", text: explain }) : null);
    return $("tr", {}, $("td", { colspan: 2 }, $("details", Object.assign({ class: "calc" }, keepOpen(label)),
      $("summary", {}, $("span", { class: "l" }, label, $("span", { class: "why", text: formula })), $("span", { class: "v", text: value })), body)));
  }
  const skippedRows = (r, key) => (r.contribSkipped || []).filter((x) => x.k === key).map((x) => stepRow($("span", {}, $("b", { text: nameOf(x.slug) }), " (" + T.pb_s_herb + ")"), "0", "item"));
  const dash = (v, d) => (v >= 0 ? "+" : "−") + fmt(Math.abs(v), d);

  function summary(r) {
    const s = r.stats, st = r.steps, c = r.contrib, al = r.addList;
    const rows = [];
    // Damage
    const d = st.damage;
    rows.push(calcRow(T.pb_damage, fmt(s.damage),
      parts([`(${fmt(d.base)}${d.counted ? " " + (d.counted >= 0 ? "+ " : "− ") + fmt(Math.abs(d.counted)) : ""})`, d.mult !== 1 ? "× " + fmt(d.mult, 3) : null, d.level !== 1 ? "× " + fmt(d.level, 3) : null, d.shiny !== 1 ? "× " + fmt(d.shiny, 3) : null]).replace(/ · /g, " "),
      [stepRow(T.pb_s_base, fmt(d.base), "base"),
        ...itemRows(c.dmg, (v) => dash(v)), ...skippedRows(r, "dmg"),
        d.evo ? stepRow(T.pb_stage_bonus, dash(d.evo), "item") : null,
        ...al.dmg.map((x) => stepRow($("span", {}, $("b", { text: nameOf(x.slug) }), " (" + T.pb_s_cond.toLowerCase() + ")"), dash(x.v), "item")),
        d.items + d.evo !== d.counted ? stepRow(T.pb_s_total, dash(d.items + d.evo), "sub") : null,
        d.items + d.evo !== d.counted ? stepRow(T.pb_s_dr, dash(d.counted), "sub") : null,
        stepRow(T.pb_s_result_add, fmt(d.base + d.counted), "sub"),
        ...d.mults.map((m) => stepRow($("span", {}, $("b", { text: nameOf(m.slug) })), "× " + fmt(m.v, 3), "item")),
        d.multRaw !== d.mult ? stepRow(T.pb_s_capped, "× " + fmt(d.mult, 3), "sub") : null,
        d.level !== 1 ? stepRow(T.pb_level_k, "× " + fmt(d.level, 3)) : null,
        d.shiny !== 1 ? stepRow(T.pb_shiny_k, "× " + fmt(d.shiny, 3)) : null,
        stepRow(T.pb_s_final, fmt(s.damage), "final")], T.pb_x_dmg));
    // Fire rate
    const f = st.fireRate;
    rows.push(calcRow(T.pb_fire_rate, fmt(s.fireRate) + " " + T.pb_shots_s, `60 ÷ ${fmt(s.ticks)} ${T.pb_ticks}`,
      [stepRow(T.pb_s_base, `${fmt(f.baseTicks, 0)} ${T.pb_ticks}`, "base"),
        ...itemRows(c.rate, (v) => (v <= 0 ? "−" : "+") + fmt(Math.abs(v))), ...skippedRows(r, "rate"),
        f.items && f.items !== f.counted ? stepRow(T.pb_s_dr, (f.counted <= 0 ? "−" : "+") + fmt(Math.abs(f.counted)), "sub") : null,
        ...(r.effects.filter((e) => e.stat === "rate" && e.mul !== 1 && e.active).map((e) => stepRow($("b", { text: nameOf(e.slug) }), "× " + fmt(e.mul, 3), "item"))),
        f.bug !== 1 ? stepRow(T.pb_type_k, "× " + fmt(f.bug, 3)) : null,
        f.level !== 1 ? stepRow(T.pb_level_k, "× " + fmt(f.level, 3)) : null,
        f.shiny !== 1 ? stepRow(T.pb_shiny_k, "× " + fmt(f.shiny, 3)) : null,
        stepRow(T.pb_s_ticks, fmt(s.ticks) + (f.capped ? " (" + T.pb_cap + " 5)" : ""), "sub"),
        stepRow(T.pb_s_final, fmt(s.fireRate) + " " + T.pb_shots_s, "final")], T.pb_x_rate));
    // Speed
    const sp = st.speed;
    rows.push(calcRow(T.pb_speed, fmt(s.speed), "", [stepRow(T.pb_s_base, fmt(sp.base), "base"), ...itemRows(c.speed, (v) => dash(v)), ...skippedRows(r, "speed"),
      sp.evo ? stepRow(T.pb_stage_bonus, dash(sp.evo), "item") : null,
      ...al.speed.map((x) => stepRow($("span", {}, $("b", { text: nameOf(x.slug) }), " (" + T.pb_s_cond.toLowerCase() + ")"), dash(x.v), "item")),
      sp.type ? stepRow(T.pb_type_k, dash(sp.type), "item") : null,
      sp.level !== 1 ? stepRow(T.pb_level_k, "× " + fmt(sp.level, 3)) : null, sp.shiny !== 1 ? stepRow(T.pb_shiny_k, "× " + fmt(sp.shiny, 3)) : null,
      stepRow(T.pb_s_final, fmt(s.speed), "final")], T.pb_x_speed));
    // Range, shot speed
    rows.push(calcRow(T.pb_range, fmt(s.range, 0) + " px", "", [stepRow(T.pb_s_base, fmt(st.range.base, 0), "base"), stepRow(T.pb_global, "+50", "item"), ...itemRows(c.range, (v) => dash(v, 0)), stepRow(T.pb_s_final, fmt(s.range, 0) + " px", "final")], null));
    rows.push(calcRow(T.pb_shot_speed, fmt(s.shotSpeed), "", [stepRow(T.pb_s_base, fmt(st.shotSpeed.base), "base"), ...itemRows(c.shot, (v) => dash(v)), ...skippedRows(r, "shot"), stepRow(T.pb_s_final, fmt(s.shotSpeed), "final")], null));
    // Luck
    const lu = st.luck;
    rows.push(calcRow(T.pb_luck, fmt(s.luck), "", [stepRow(T.pb_s_base, fmt(lu.base), "base"), ...itemRows(c.luck, (v) => dash(v)),
      lu.shiny ? stepRow(T.pb_shiny_k, dash(lu.shiny), "item") : null, lu.type ? stepRow(T.pb_type_k, dash(lu.type), "item") : null,
      lu.raw > 10 ? stepRow(T.pb_s_raw_luck, fmt(lu.raw), "sub") : null, stepRow(T.pb_s_final, fmt(s.luck), "final")], T.pb_x_luck));
    // Health
    const h = st.hp;
    rows.push(calcRow(T.pb_health, fmt(s.hearts, 1) + " " + T.pb_hearts, "", [stepRow(T.pb_s_base, fmt(h.base / 2, 1), "base"), ...itemRows(c.hp, (v) => dash(v / 2, 1)), ...skippedRows(r, "hp"),
      h.evo ? stepRow(T.pb_stage_bonus, dash(h.evo / 2, 1), "item") : null, stepRow(T.pb_s_final + (h.capped ? " (" + T.pb_cap + " 12)" : ""), fmt(s.hearts, 1) + " " + T.pb_hearts, "final")], null));
    return rows;
  }

  // How the damage per second is put together, step by step.
  function dpsCalc(r) {
    const s = r.stats, st = r.steps, v = st.volley, sh = st.shot, cr = st.crit;
    const steps = [
      stepRow(T.pb_damage, fmt(s.damage), "base"),
      sh.type !== 1 ? stepRow(T.pb_typed_dmg, "× " + fmt(sh.type, 3)) : null,
      sh.hit !== 1 ? stepRow(T.pb_hit_mul, "× " + fmt(sh.hit, 3)) : null,
      stepRow(T.pb_crit, `${fmt(s.critChance * 100, 1)} % × ${fmt(s.critMult, 2)}  →  × ${fmt(sh.critF, 3)}`, "item",
        parts([cr.items ? `${T.pb_items} ${fmt(cr.items * 100, 0)} %` : null, cr.type ? `${T.pb_type_k} ${fmt(cr.type * 100, 1)} %` : null, `${T.pb_luck} ${fmt(cr.luck * 100, 1)} %`, cr.always ? T.pb_fx_alwayscrit : null])),
      stepRow(T.pb_per_shot, fmt(s.avgShot), "sub"),
      stepRow(T.pb_volley, "× " + fmt(s.shotsPerVolley, 2), "item", volleyNote(r)),
      stepRow(T.pb_shots_s, "× " + fmt(s.fireRate), "item"),
      stepRow(T.pb_comp_player, fmt(s.playerDps, 1), "sub"),
      s.companionDps ? stepRow(T.pb_companions, "+ " + fmt(s.companionDps, 1), "item") : null,
      ...st.weapons.map((w) => stepRow(nameOf(w.slug), (w.replaces && w.dps < 0 ? "− " : "+ ") + fmt(Math.abs(w.dps), 1), "item", T.pb_weapons)),
      st.defenseDown !== 1 ? stepRow(T.pb_w_defdown, "× " + fmt(st.defenseDown, 2), "item") : null,
      stepRow(T.pb_dps, fmt(s.dps, 1), "final")];
    return $("details", Object.assign({ class: "calc" }, keepOpen("__dps")), $("summary", {}, $("span", { class: "l", text: T.pb_how }), $("span", { class: "v", text: fmt(s.dps, 1) })),
      $("div", { class: "calc-body" }, $("table", { class: "steps" }, $("tbody", {}, steps.filter(Boolean))), $("p", { class: "note", text: T.pb_x_dps })));
  }

  const STATK = { dmg: "pb_damage", rate: "pb_fire_rate", speed: "pb_speed", hit: "pb_hit_mul" };
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
  function companionList(r) {
    if (!r.companions.length) return null;
    const st = r.steps.companions;
    const items = r.companions.map((c) => $("li", { class: c.active ? "on" : "off" }, $("b", { text: nameOf(c.slug) }),
      `: ${fmt(c.dps, 1)} ${T.pb_dps_unit} (${fmt(c.perShot, 2)} × ${c.shots} / ${fmt(c.interval, 2)} s)`, " ",
      c.active ? null : $("span", { class: "tag none", text: T.pb_comp_waiting })));
    return $("div", { class: "warn" }, $("b", { text: `${T.pb_companions} (${Math.min(st.cap, st.count)} / ${st.cap})` }), $("ul", {}, items),
      $("p", { class: "note", text: `${T.pb_comp_base} ${fmt(st.base, 1)}` }));
  }
  function weaponList(r) {
    if (!r.weapons.length) return null;
    const ws = r.steps.weapons;
    const rows = r.weapons.map((x) => $("li", { class: x.equipped || x.module ? "on" : "off" }, $("b", { text: nameOf(x.slug) }), " ",
      x.module ? $("span", { class: "tag", text: T.pb_w_module }) : x.equipped ? $("span", { class: "tag", text: T.pb_w_equipped }) : $("button", { type: "button", class: "mini", text: T.pb_w_equip, onclick: () => { S.w = x.slug; render(); } })));
    return $("div", { class: "warn" }, $("b", { text: T.pb_weapons }), $("ul", {}, rows),
      ...ws.map((w) => $("p", { class: "note", text: `${nameOf(w.slug)}: ${fmt(w.dps, 1)} ${T.pb_dps_unit} · ${T["pb_w_" + w.model]}` })),
      $("p", { class: "note", text: T.pb_w_assume }));
  }
  function volleyNote(r) {
    const v = r.steps.volley, bits = [];
    bits.push(`${T.pb_volley_fwd} ${v.forward}`);
    if (v.rear) bits.push(T.pb_volley_rear);
    if (v.double) bits.push(T.pb_volley_double);
    if (v.extra) bits.push(`${T.pb_volley_extra} +${fmt(v.extra, 2)}`);
    if (v.echo) bits.push(`${T.pb_volley_echo} +${fmt(v.echo, 2)}`);
    return bits.join(" · ");
  }
  function effectList(r) {
    const shown = r.effects.filter((e) => e.label !== "companion");
    if (!shown.length) return null;
    const items = shown.map((e) => {
      const what = e.label ? T["pb_fx_" + e.label].replace("{v}", e.v == null ? "" : fmt(e.v, 2)).replace("{e}", e.elem ? (T["pb_el_" + e.elem] || e.elem) : "") : e.kind === "add" ? `${T[STATK[e.stat]]} ${sgn(e.kind === "add" && e.when || !e.var ? e.v : e.v)}` : `${T[STATK[e.stat]]} ${e.kind === "mulvar" ? "×" + fmt(e.v, 2) : "×" + fmt(e.v, 2)}`;
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
          $("button", { type: "button", text: "+", "aria-label": T.pb_add, onclick: () => { S.i[slug] = Math.min(data.items[slug] && data.items[slug].h ? 1 : 99, n + 1); render(); } }))));
    }
    // output
    const r = E.compute(data, bld());
    const full = Object.entries(S.i).filter(([k, n]) => n > 0 && data.items[k] && data.items[k].t === "full").length;
    const total = entries.length;
    out.replaceChildren(...[
      $("div", { class: "dps" }, $("div", {}, $("div", { class: "note", text: T.pb_dps }), $("div", { class: "big", text: fmt(r.stats.dps, 1) }), r.stats.companionDps ? $("div", { class: "note", text: `${T.pb_comp_player} ${fmt(r.stats.playerDps, 1)} + ${T.pb_companions.toLowerCase()} ${fmt(r.stats.companionDps, 1)}` }) : null),
        $("div", {}, $("div", { class: "note", text: T.pb_per_shot }), $("b", { text: fmt(r.stats.avgShot) })),
        $("div", {}, $("div", { class: "note", text: T.pb_shots_s }), $("b", { text: fmt(r.stats.fireRate) }))),
      $("table", { class: "stats" }, $("tbody", {}, summary(r),
        row(T.pb_crit, fmt(r.stats.critChance * 100, 1) + " %", r.stats.critChance ? `${T.pb_crit_mult} ×${fmt(r.stats.critMult, 2)}` : null),
        row(T.pb_volley, fmt(r.stats.shotsPerVolley, 2), volleyNote(r)),
        r.stats.hitMul !== 1 ? row(T.pb_hit_mul, "×" + fmt(r.stats.hitMul, 3), null) : null,
        r.stats.typeDamage !== 1 ? row(T.pb_typed_dmg, "×" + fmt(r.stats.typeDamage, 3), `${T.pb_type_tier} ${r.tier}`) : null)),
      total ? $("p", { class: "note", text: `${T.pb_coverage}: ${full} / ${total}` }) : null,
      dpsCalc(r), weaponList(r), companionList(r), effectList(r), lists(r), $("p", { class: "note", text: T.pb_assume })].filter(Boolean));
    sitBox.replaceChildren(sitControls(r));
    history.replaceState(null, "", "#" + toHash());
  }

  fetch(ROOT + "assets/builder/data.json").then((r) => r.json()).then((d) => {
    data = d; E = window.PIBuilder; buildIdx();
    opened.add(T.pb_damage); opened.add(T.pb_fire_rate);
    S = location.hash.length > 1 ? fromHash(location.hash) : S;
    if (!data.chars[S.c]) S.c = Object.keys(data.chars)[0];
    window.addEventListener("hashchange", () => { if (location.hash !== "#" + toHash()) { S = fromHash(location.hash); render(); } });
    render();
  });
})();
