---
title: Machine à dons
id: blood
color: '#d0203a'
labels:
- text: MONDE
  color: '#c8b0ff'
icon: icons/world/blood.png
details:
- label: Où
  value: Salles de combat (2,5 % de chance, dès l'étage 2, une par étage au plus) ; rarement dans les salles secrètes, à côté d'une machine à sous
- label: Coût
  value: ½ cœur par don (1 cœur dès l'étage 7)
- label: Donne
  value: 1 à 3 pièces par don (chacune a 15 % de chance d'être une pépite)
- label: Il faut
  value: Plus de vie que le coût ; pas de bouclier actif
- label: S'use
  value: Après 3 à 9 dons, puis 50 % de chance à chaque don
- label: Laisse
  value: Jus de Baie 30 %, Eau Fraîche 15 %, rien 55 %
names:
  en:
    name: Donation machine
    desc: Touch it to donate half a heart (a full one from floor 7) and it drops coins. After several donations it may burst and leave a bag. It never leaves you without health.
  es:
    name: Máquina de donación
    desc: Tócala para donar medio corazón (uno entero desde la planta 7) y suelta monedas. Tras varias donaciones puede reventar y dejar una bolsa. Nunca te deja sin vida.
  de:
    name: Spendenautomat
    desc: Berühre ihn, um ein halbes Herz zu spenden (ab Etage 7 ein ganzes), und er wirft Münzen aus. Nach mehreren Spenden kann er platzen und eine Tasche hinterlassen. Er lässt dich nie ganz ohne Leben zurück.
  it:
    name: Macchina per donazioni
    desc: Toccala per donare mezzo cuore (uno intero dal piano 7) e lascia monete. Dopo varie donazioni può scoppiare e lasciare una borsa. Non ti lascia mai senza vita.
  pt:
    name: Máquina de doação
    desc: Toque nela para doar meio coração (um inteiro a partir do andar 7) e ela solta moedas. Após várias doações pode estourar e deixar uma bolsa. Nunca te deixa sem vida.
  ru:
    name: Донорский аппарат
    desc: Коснись его, чтобы пожертвовать полсердца (целое с 7-го этажа), и он выбросит монеты. После нескольких пожертвований может лопнуть и оставить мешочек. Никогда не оставит тебя без здоровья.
  ja:
    name: 献血マシン
    desc: 触れるとハート半分を献血し（7階以降は1つ分）、コインが出ます。何度か献血すると壊れて袋を落とすことがあります。HPがなくなることはありません。
  ko:
    name: 헌혈 기계
    desc: 만지면 하트 반 칸(7층부터 1칸)을 헌혈하고 동전을 떨어뜨린다. 여러 번 헌혈하면 터져서 주머니를 남길 수 있다. 체력이 바닥나게 하지는 않는다.
  zh:
    name: 献血机
    desc: 触碰它可捐出半颗心（从第7层起为一整颗），并掉落硬币。多次捐献后它可能会爆开并留下一个钱袋。它绝不会让你失去全部生命。
  zt:
    name: 捐血機
    desc: 碰觸它可捐出半顆愛心（第7層起為一整顆），並掉出金幣。捐了幾次後可能會爆開並留下一個錢袋。它絕不會讓你失去所有生命。
---
Touchez-la pour donner un demi-cœur (un entier dès l'étage 7) et elle lâche des pièces. Après plusieurs dons, elle peut exploser et laisser une bourse. Elle ne vous laisse jamais sans vie.

## Fonctionnement
- Marchez dessus pour donner : vous perdez ½ cœur (1 cœur à partir de l'étage 7) et elle lâche 1 à 3 pièces. Chaque pièce a 15 % de chance d'être une pépite.
- Vous pouvez redonner environ toutes les 0,6 s tant que vous restez au contact.
- Elle refuse si votre vie n'est pas supérieure au coût : elle ne peut donc jamais vous tuer. Elle refuse aussi tant qu'un bouclier vous protège.
- Un don compte comme une blessure : les objets qui réagissent quand vous êtes touché réagissent aussi.
- Chaque machine accepte 3 à 9 dons (au hasard). Ensuite, chaque don a 50 % de chance de la casser. Quand elle casse ainsi, elle laisse du [Jus de Baie](../items/bolsa_sangre.html) (30 %), de l'[Eau Fraîche](../items/bolsa_suero.html) (15 %) ou rien (55 %).
- La faire exploser avec une bombe la casse tout de suite : elle lâche 2 à 4 pièces, et seulement 30 % du temps elle tente aussi de laisser du Jus de Baie ou de l'Eau Fraîche (soit 9 % de Jus de Baie, 4,5 % d'Eau Fraîche).

## Où la trouver
- Dans une salle de combat, avec 2,5 % de chance, jamais au premier étage et au plus une fois par étage.
- Dans certaines salles secrètes, comme deuxième machine à côté d'une machine à sous.
