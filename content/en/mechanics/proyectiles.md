---
title: Projectiles and damage
id: proyectiles
color: '#ff9a3c'
labels:
- text: MECHANIC
  color: '#ff9a3c'
icon: icons/mechanics/criticos.png
---
Every projectile you fire gets its own chance to trigger effects (burn, charm, critical hit…). The more projectiles that hit, the more often your effects happen.

## In short

1. **Each projectile rolls separately.** Three projectiles that hit = three chances to burn, charm, etc.
2. **Each enemy hit is a new chance.** A projectile that pierces through two enemies tries on both.
3. **Hitting an enemy that already has an effect doesn't make it last longer.** It only puts the timer back to full.
4. **Bosses resist control.** They can't be stunned, confused, scared or turned; charm, freeze and roots only slow them a little.

<figure class="mx-fig"><svg viewBox="0 0 640 230" role="img" aria-label="One attack, 3 projectiles: each enemy hit is one chance to trigger your effects. The piercing projectile gets a chance on both enemies."><circle cx="60" cy="115" r="26" fill="rgba(255,210,60,.18)" stroke="#ffd23c" stroke-width="2"/><text x="60" y="120" fill="#e8e8f0" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif">You</text><line x1="86" y1="105" x2="318" y2="52" stroke="#ffd23c" stroke-width="2" stroke-dasharray="6 5"/><circle cx="200" cy="79" r="5" fill="#ffd23c"/><circle cx="340" cy="47" r="22" fill="rgba(255,107,107,.18)" stroke="#ff6b6b" stroke-width="2"/><rect x="302" y="2" width="76" height="20" rx="6" fill="rgba(111,220,90,.15)" stroke="#6fdc5a"/><text x="340" y="16" fill="#6fdc5a" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif">1 chance</text><line x1="88" y1="115" x2="590" y2="115" stroke="#ffd23c" stroke-width="2" stroke-dasharray="6 5"/><circle cx="200" cy="115" r="5" fill="#ffd23c"/><circle cx="560" cy="115" r="5" fill="#ffd23c"/><circle cx="330" cy="115" r="22" fill="rgba(255,107,107,.18)" stroke="#ff6b6b" stroke-width="2"/><circle cx="470" cy="115" r="22" fill="rgba(255,107,107,.18)" stroke="#ff6b6b" stroke-width="2"/><rect x="292" y="70" width="76" height="20" rx="6" fill="rgba(111,220,90,.15)" stroke="#6fdc5a"/><text x="330" y="84" fill="#6fdc5a" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif">1 chance</text><rect x="432" y="70" width="76" height="20" rx="6" fill="rgba(111,220,90,.15)" stroke="#6fdc5a"/><text x="470" y="84" fill="#6fdc5a" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif">1 chance</text><text x="400" y="150" fill="#9a9aa6" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif">pierces →</text><line x1="86" y1="125" x2="520" y2="205" stroke="#9a9aa6" stroke-width="2" stroke-dasharray="3 6" opacity=".7"/><circle cx="200" cy="146" r="5" fill="#ffd23c"/><text x="520" y="224" fill="#9a9aa6" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif">missed: no chance</text></svg><figcaption>One attack, 3 projectiles: each enemy hit is one chance to trigger your effects. The piercing projectile gets a chance on both enemies.</figcaption></figure>

## What it means for you

- More projectiles (multishot) and piercing both mean more effects triggered.
- Attacking faster helps too, but you can't attack more than 12 times per second.
- Burn and poison damage comes from the hit that applied them, not from later hits.

## Limits

<div class="mx-tiles"><div class="mx-tile"><div class="v">12 / s</div><div class="k">attacks at most</div></div><div class="mx-tile"><div class="v">9</div><div class="k">projectiles per attack at most</div></div><div class="mx-tile"><div class="v">450</div><div class="k">of your projectiles at once in a room</div></div><div class="mx-tile"><div class="v">300</div><div class="k">default range of a projectile</div></div></div>

<details class="mx-more"><summary>For the curious: the full detail</summary>

### What happens in a hit, in order

<ol class="mx-steps"><li><b>Venom</b> — ×1.5 if the enemy is poisoned and your shot has venom</li><li><b>Type chart</b> — ×0.45 to ×2.25, your projectiles only</li><li><b>Item and weapon effects</b> — bonuses that apply on impact</li><li><b>Damage dealt</b> — the enemy is pushed back a little, except bosses</li><li><b>Status effects</b> — burn, poison, slow, stun, charm, push, chain lightning, type passive</li></ol>

### The algorithm, step by step

<pre class="mx-code"><span class="kw">WHEN</span> you attack                      <span class="cm">// at most 12 times per second</span>
  <span class="kw">FOR EACH</span> projectile                <span class="cm">// 1 + multishot, up to 9</span>
    type <span class="op">←</span> your type                   <span class="cm">// a dual type alternates, 1 in 2</span>
    damage <span class="op">←</span> your Damage stat          <span class="cm">// <a href="rendimientos.html">diminishing returns</a> already applied</span>
    <span class="kw">ROLL</span> <a href="criticos.html">critical hit</a>                <span class="cm">// damage ×2 or more</span>
    <span class="kw">ROLL</span> homing, pierce             <span class="cm">// <a href="pasiva_psychic.html">Psychic</a>, <a href="pasiva_grass.html">Grass</a>, items</span>
    <span class="kw">APPLY</span> <a href="pasivas_escalan.html">type passive</a> bonuses     <span class="cm">// damage, size, crit…</span>

<span class="kw">WHEN</span> a projectile touches an enemy
  <span class="kw">IF</span> it already hit this enemy <span class="op">→</span> <span class="kw">SKIP</span>
  <span class="kw">IF</span> boss: barrier, <a href="afijo_espejo.html">mirror</a>, <a href="afijo_blindado.html">shield</a>, <a href="armadura_acorazado.html">armor</a> <span class="op">→</span> absorb first
     <span class="cm">// fully absorbed: nothing below happens</span>
  <span class="kw">IF</span> enemy poisoned <span class="kw">AND</span> venom <span class="op">→</span> damage ×1.5
  damage <span class="op">×</span> <a href="tabla_tipos.html#table">type chart</a>                <span class="cm">// 0.45 to 2.25</span>
  damage <span class="op">×</span> item effects on impact    <span class="cm">// e.g. Plate +15 %</span>
  enemy loses damage; pushed back      <span class="cm">// not bosses</span>
  <span class="kw">FOR EACH</span> status effect             <span class="cm">// rolled on every hit</span>
    <a href="pasiva_fire.html">burn</a> · <a href="pasiva_poison.html">poison</a> · <a href="pasiva_ice.html">slow</a> · <a href="pasiva_steel.html">stun</a> · <a href="pasiva_fairy.html">charm</a> · <a href="pasiva_water.html">push</a> · <a href="pasiva_electric.html">chain lightning</a>
    <span class="kw">IF</span> success <span class="op">→</span> reset to full length    <span class="cm">// never longer</span>
  <span class="kw">ROLL</span> <a href="pasivas_escalan.html">type passive</a> effects       <span class="cm">// spread, freeze, turn…</span>
  <span class="kw">IF</span> enemies hit <span class="op">></span> pierce <span class="op">→</span> projectile disappears</pre>

### Which effects, and when

| When | Effects |
|---|---|
| <span class="mx-tag every">Every hit</span> | Burn, poison, slow, stun, charm, push, chain lightning, from your type or your items. A success resets the effect to its full length; it never adds time. |
| <span class="mx-tag cond">Every hit, with a condition</span> | Freeze needs an enemy that is already slowed. Passive effects that start at a rank (spread, splash, turning) only work from that rank. |
| <span class="mx-tag once">Once per projectile</span> | Some item effects only trigger on the first enemy a projectile hits. |
| <span class="mx-tag boss">Bosses</span> | Stun, confusion, fear and turning never work. Charm, freeze and root become a simple slow. |

### Projectiles that do less

| | Damage | Item effects | Type passive | Type chart |
|---|---|---|---|---|
| **Normal projectile** | 100 % | <span class="mx-yes">Yes</span> | <span class="mx-yes">Yes</span> | <span class="mx-yes">Yes</span> |
| **Split shot** | 50 % | <span class="mx-no">No</span> | <span class="mx-no">No</span> | <span class="mx-yes">Yes</span> |
| **Chain lightning** | 60 % and more | <span class="mx-no">No</span> | <span class="mx-no">No</span> | <span class="mx-yes">Yes</span> (Electric) |
| **Burn / poison tick** | a % of the shot | <span class="mx-no">No</span> | — | <span class="mx-no">No</span> |

Companion and some weapon projectiles also skip most item effects.

- A projectile also disappears when it leaves the room, or hits a rock, an obstacle or a pit, unless it can bounce.
- Ghost projectiles go through rocks.
- Past 450, projectiles created by other projectiles are removed first.

</details>

Related pages: [Diminishing returns](rendimientos.html) · [Critical hits](criticos.html) · [Type chart](tabla_tipos.html) · [Scaling type passives](pasivas_escalan.html)
