---
title: Projectiles et dégâts
id: proyectiles
color: '#ff9a3c'
labels:
- text: MÉCANIQUE
  color: '#ff9a3c'
icon: icons/mechanics/criticos.png
---
Chaque projectile que vous tirez a sa propre chance de déclencher un effet (brûlure, charme, coup critique…). Plus vous touchez avec de projectiles, plus vos effets se déclenchent souvent.

## En bref

1. **Chaque projectile tente sa chance séparément.** Trois projectiles qui touchent = trois chances de brûler, charmer, etc.
2. **Chaque ennemi touché est une nouvelle chance.** Un projectile qui perfore deux ennemis essaie sur les deux.
3. **Toucher un ennemi qui a déjà un effet ne le fait pas durer plus longtemps.** Ça remet juste le compteur au maximum.
4. **Les boss résistent au contrôle.** Ils ne peuvent pas être étourdis, confus, effrayés ou retournés ; le charme, le gel et les racines les ralentissent seulement un peu.

<figure class="mx-fig"><svg viewBox="0 0 640 230" role="img" aria-label="Une attaque, 3 projectiles : chaque ennemi touché est une chance de déclencher vos effets. Le projectile qui perfore a une chance sur chacun des deux ennemis."><circle cx="60" cy="115" r="26" fill="rgba(255,210,60,.18)" stroke="#ffd23c" stroke-width="2"/><text x="60" y="120" fill="#e8e8f0" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif">Vous</text><line x1="86" y1="105" x2="318" y2="52" stroke="#ffd23c" stroke-width="2" stroke-dasharray="6 5"/><circle cx="200" cy="79" r="5" fill="#ffd23c"/><circle cx="340" cy="47" r="22" fill="rgba(255,107,107,.18)" stroke="#ff6b6b" stroke-width="2"/><rect x="302" y="2" width="76" height="20" rx="6" fill="rgba(111,220,90,.15)" stroke="#6fdc5a"/><text x="340" y="16" fill="#6fdc5a" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif">1 chance</text><line x1="88" y1="115" x2="590" y2="115" stroke="#ffd23c" stroke-width="2" stroke-dasharray="6 5"/><circle cx="200" cy="115" r="5" fill="#ffd23c"/><circle cx="560" cy="115" r="5" fill="#ffd23c"/><circle cx="330" cy="115" r="22" fill="rgba(255,107,107,.18)" stroke="#ff6b6b" stroke-width="2"/><circle cx="470" cy="115" r="22" fill="rgba(255,107,107,.18)" stroke="#ff6b6b" stroke-width="2"/><rect x="292" y="70" width="76" height="20" rx="6" fill="rgba(111,220,90,.15)" stroke="#6fdc5a"/><text x="330" y="84" fill="#6fdc5a" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif">1 chance</text><rect x="432" y="70" width="76" height="20" rx="6" fill="rgba(111,220,90,.15)" stroke="#6fdc5a"/><text x="470" y="84" fill="#6fdc5a" font-size="12" text-anchor="middle" font-family="system-ui,sans-serif">1 chance</text><text x="400" y="150" fill="#9a9aa6" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif">perfore →</text><line x1="86" y1="125" x2="520" y2="205" stroke="#9a9aa6" stroke-width="2" stroke-dasharray="3 6" opacity=".7"/><circle cx="200" cy="146" r="5" fill="#ffd23c"/><text x="520" y="224" fill="#9a9aa6" font-size="13" text-anchor="middle" font-family="system-ui,sans-serif">raté : aucune chance</text></svg><figcaption>Une attaque, 3 projectiles : chaque ennemi touché est une chance de déclencher vos effets. Le projectile qui perfore a une chance sur chacun des deux ennemis.</figcaption></figure>

## Ce que ça change pour vous

- Plus de projectiles (multi-tir) et la perforation, c'est plus d'effets déclenchés.
- Attaquer plus vite aide aussi, mais vous ne pouvez pas attaquer plus de 12 fois par seconde.
- Les dégâts de brûlure et de poison dépendent du coup qui les a posés, pas des coups suivants.

## Limites

<div class="mx-tiles"><div class="mx-tile"><div class="v">12 / s</div><div class="k">attaques au maximum</div></div><div class="mx-tile"><div class="v">9</div><div class="k">projectiles par salve de tir multiple (<a href="disparos_extra.html">des objets en ajoutent</a>)</div></div><div class="mx-tile"><div class="v">450</div><div class="k">de vos projectiles en même temps dans une salle</div></div><div class="mx-tile"><div class="v">300</div><div class="k">portée par défaut d'un projectile</div></div></div>

<details class="mx-more"><summary>Pour les curieux : le détail complet</summary>

### Ce qui se passe dans un coup, dans l'ordre

<ol class="mx-steps"><li><b>Venin</b> — ×1,5 si l'ennemi est empoisonné et que votre tir a le venin</li><li><b>Table des types</b> — ×0,45 à ×2,25, seulement vos projectiles</li><li><b>Effets d'objets et d'armes</b> — bonus appliqués à l'impact</li><li><b>Dégâts infligés</b> — l'ennemi est un peu repoussé, sauf les boss</li><li><b>Effets de statut</b> — brûlure, poison, ralentissement, étourdissement, charme, poussée, éclair en chaîne, passif de type</li></ol>

### L'algorithme pas à pas

<pre class="mx-code"><span class="kw">QUAND</span> vous attaquez                  <span class="cm">// au plus 12 fois par seconde</span>
  <span class="kw">POUR CHAQUE</span> projectile             <span class="cm">// 1 + multi-tir, jusqu'à 9</span>
    type <span class="op">←</span> votre type                  <span class="cm">// double type : un sur deux</span>
    dégâts <span class="op">←</span> votre stat Dégâts         <span class="cm">// <a href="rendimientos.html">rendements décroissants</a> déjà appliqués</span>
    <span class="kw">TIRAGE</span> <a href="criticos.html">coup critique</a>            <span class="cm">// dégâts ×2 ou plus</span>
    <span class="kw">TIRAGE</span> tête chercheuse, perforation <span class="cm">// <a href="pasiva_psychic.html">Psy</a>, <a href="pasiva_grass.html">Plante</a>, objets</span>
    <span class="kw">APPLIQUER</span> bonus du <a href="pasivas_escalan.html">passif de type</a>  <span class="cm">// dégâts, taille, critique…</span>

<span class="kw">QUAND</span> un projectile touche un ennemi
  <span class="kw">SI</span> il a déjà touché cet ennemi <span class="op">→</span> <span class="kw">IGNORER</span>
  <span class="kw">SI</span> boss : barrière, <a href="afijo_espejo.html">miroir</a>, <a href="afijo_blindado.html">bouclier</a>, <a href="armadura_acorazado.html">armure</a> <span class="op">→</span> absorbe d'abord
     <span class="cm">// tout absorbé : rien de ce qui suit n'a lieu</span>
  <span class="kw">SI</span> ennemi empoisonné <span class="kw">ET</span> venin <span class="op">→</span> dégâts ×1,5
  dégâts <span class="op">×</span> <a href="tabla_tipos.html#table">table des types</a>          <span class="cm">// 0,45 à 2,25</span>
  dégâts <span class="op">×</span> effets d'objets à l'impact  <span class="cm">// ex. Plaque +15 %</span>
  l'ennemi perd les dégâts ; repoussé   <span class="cm">// pas les boss</span>
  <span class="kw">POUR CHAQUE</span> effet de statut        <span class="cm">// tiré à chaque touche</span>
    <a href="pasiva_fire.html">brûlure</a> · <a href="pasiva_poison.html">poison</a> · <a href="pasiva_ice.html">ralentissement</a> · <a href="pasiva_steel.html">étourdissement</a> · <a href="pasiva_fairy.html">charme</a> · <a href="pasiva_water.html">poussée</a> · <a href="pasiva_electric.html">éclair en chaîne</a>
    <span class="kw">SI</span> réussi <span class="op">→</span> remis à sa durée max     <span class="cm">// jamais plus long</span>
  <span class="kw">TIRAGE</span> effets du <a href="pasivas_escalan.html">passif de type</a>   <span class="cm">// propagation, gel, retournement…</span>
  <span class="kw">SI</span> ennemis touchés <span class="op">></span> perforation <span class="op">→</span> le projectile disparaît</pre>

### Quels effets, et quand

| Quand | Effets |
|---|---|
| <span class="mx-tag every">À chaque touche</span> | Brûlure, poison, ralentissement, étourdissement, charme, poussée, éclair en chaîne, venant de votre type ou de vos objets. Un succès remet l'effet à sa durée maximale, sans jamais l'allonger. |
| <span class="mx-tag cond">À chaque touche, avec condition</span> | Le gel demande un ennemi déjà ralenti. Les effets de passif qui commencent à un rang (propagation, éclaboussure, retournement) ne marchent qu'à partir de ce rang. |
| <span class="mx-tag once">Une fois par projectile</span> | Certains effets d'objets ne se déclenchent que sur le premier ennemi touché par un projectile. |
| <span class="mx-tag boss">Boss</span> | Étourdissement, confusion, peur et retournement ne marchent jamais. Charme, gel et enracinement deviennent un simple ralentissement. |

### Les projectiles qui font moins

| | Dégâts | Effets d'objets | Passif de type | Table des types |
|---|---|---|---|---|
| **Projectile normal** | 100 % | <span class="mx-yes">Oui</span> | <span class="mx-yes">Oui</span> | <span class="mx-yes">Oui</span> |
| **Tir divisé** | 50 % | <span class="mx-no">Non</span> | <span class="mx-no">Non</span> | <span class="mx-yes">Oui</span> |
| **Éclair en chaîne** | 60 % et plus | <span class="mx-no">Non</span> | <span class="mx-no">Non</span> | <span class="mx-yes">Oui</span> (Électrik) |
| **Tick de brûlure / poison** | un % du tir | <span class="mx-no">Non</span> | — | <span class="mx-no">Non</span> |

Les projectiles des compagnons et de certaines armes ignorent aussi la plupart des effets d'objets.

- Un projectile disparaît aussi quand il sort de la salle, ou touche un rocher, un obstacle ou un trou, sauf s'il peut rebondir.
- Les projectiles Spectre traversent les rochers.
- Au-delà de 450, les projectiles créés par d'autres projectiles sont supprimés en premier.

</details>

Pages liées : [Rendements décroissants](rendimientos.html) · [Coups critiques](criticos.html) · [Table des types](tabla_tipos.html) · [Passifs de type évolutifs](pasivas_escalan.html)

## Voir aussi
- [Tirs supplémentaires](disparos_extra.html)
- [Effets de statut](estados.html)
- [Cumul des objets](acumulacion.html)
