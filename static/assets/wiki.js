/* PokéIsaac Wiki: search box, sortable/filterable tables, language switch, mobile menu. No dependencies. */
(() => {
  "use strict";
  const html = document.documentElement;
  const ROOT = html.dataset.root || "./";       // relative path to wiki/
  const LANG = html.dataset.lang || "en";
  const PATH = html.dataset.path || "index.html"; // this page, relative to wiki/<lang>/
  const base = ROOT + LANG + "/";

  // ---------- language switch ----------
  const sel = document.querySelector(".lang select");
  if (sel) sel.addEventListener("change", () => {
    try { localStorage.setItem("pi-wiki-lang", sel.value); } catch (_) {}
    location.href = ROOT + sel.value + "/" + PATH;
  });

  // ---------- mobile menu ----------
  const mb = document.querySelector(".menu-btn"), side = document.querySelector(".side");
  if (mb && side) mb.addEventListener("click", () => side.classList.toggle("open"));

  // ---------- search ----------
  const box = document.querySelector(".search input"), list = document.querySelector(".search ul");
  let index = null, loading = null, hits = [], cur = -1;
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch(base + "search.json").then((r) => r.json()).then((d) => {
      index = d.map((e) => ({ ...e, n: norm(e.t + " " + (e.a || "")) }));
      return index;
    }).catch(() => (index = []));
    return loading;
  }
  function esc(s) { return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function render() {
    list.innerHTML = hits.map((e, i) =>
      `<li><a href="${base + e.u}" class="${i === cur ? "on" : ""}">${e.i ? `<img class="px" src="${ROOT + e.i}" alt="" loading="lazy">` : ""}<span>${esc(e.t)}</span><small>${esc(e.c || e.k)}</small></a></li>`).join("");
  }
  async function query() {
    const q = norm(box.value.trim());
    if (!q) { hits = []; render(); return; }
    const idx = await load();
    const starts = [], has = [];
    for (const e of idx) {
      const p = e.n.indexOf(q);
      if (p === 0) starts.push(e); else if (p > 0) has.push(e);
      if (starts.length >= 12) break;
    }
    hits = starts.concat(has).slice(0, 12);
    cur = hits.length ? 0 : -1;
    render();
  }
  if (box && list) {
    box.addEventListener("focus", load, { once: true });
    box.addEventListener("input", query);
    box.addEventListener("keydown", (ev) => {
      if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
        ev.preventDefault();
        if (!hits.length) return;
        cur = (cur + (ev.key === "ArrowDown" ? 1 : hits.length - 1)) % hits.length;
        render();
      } else if (ev.key === "Enter" && hits[cur]) {
        location.href = base + hits[cur].u;
      } else if (ev.key === "Escape") {
        box.value = ""; hits = []; render();
      }
    });
    document.addEventListener("click", (ev) => { if (!ev.target.closest(".search")) { hits = []; render(); } });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "/" && document.activeElement !== box && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
        ev.preventDefault(); box.focus();
      }
    });
  }

  // ---------- random page ----------
  for (const a of document.querySelectorAll("a[data-random]")) a.addEventListener("click", async (ev) => {
    ev.preventDefault();
    const idx = (await load()).filter((e) => !a.dataset.random || e.k === a.dataset.random);
    if (idx.length) location.href = base + idx[Math.floor(Math.random() * idx.length)].u;
  });

  // ---------- sortable tables ----------
  for (const table of document.querySelectorAll("table.sortable")) {
    const ths = [...table.tHead.rows[0].cells];
    ths.forEach((th, col) => {
      if (th.classList.contains("nosort")) return;
      th.addEventListener("click", () => {
        const dir = th.classList.contains("asc") ? -1 : 1;
        ths.forEach((t) => t.classList.remove("asc", "desc"));
        th.classList.add(dir === 1 ? "asc" : "desc");
        const body = table.tBodies[0];
        const rows = [...body.rows];
        const key = (r) => {
          const c = r.cells[col];
          const v = c.dataset.sort ?? c.textContent.trim();
          const n = parseFloat(v);
          return v !== "" && !isNaN(n) && /^-?[\d.]/.test(v) ? n : v.toLowerCase();
        };
        rows.sort((a, b) => {
          const x = key(a), y = key(b);
          if (x === y) return 0;
          if (x === "" ) return 1;
          if (y === "") return -1;
          return (typeof x === typeof y ? (x < y ? -1 : 1) : (typeof x === "number" ? -1 : 1)) * dir;
        });
        body.append(...rows);
      });
    });
  }

  // ---------- filters ----------
  for (const f of document.querySelectorAll(".filters")) {
    const table = document.getElementById(f.dataset.table);
    if (!table) continue;
    const rows = [...table.tBodies[0].rows];
    const text = f.querySelector("input");
    const sels = [...f.querySelectorAll("select")];
    const count = f.querySelector(".count");
    const tpl = count ? count.dataset.tpl || "{n}" : "";
    const params = new URLSearchParams(location.search);
    for (const s of sels) if (params.get(s.name)) s.value = params.get(s.name);
    if (text && params.get("q")) text.value = params.get("q");
    const apply = () => {
      const q = text ? norm(text.value.trim()) : "";
      let n = 0;
      for (const r of rows) {
        let ok = !q || norm(r.textContent).includes(q);
        for (const s of sels) if (ok && s.value) ok = (" " + (r.dataset[s.name] || "") + " ").includes(" " + s.value + " ");
        r.hidden = !ok;
        if (ok) n++;
      }
      if (count) count.textContent = tpl.replace("{n}", n);
    };
    if (text) text.addEventListener("input", apply);
    for (const s of sels) s.addEventListener("change", apply);
    apply();
  }
})();
