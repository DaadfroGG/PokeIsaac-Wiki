---
title: Donation machine
id: blood
color: '#d0203a'
labels:
- text: WORLD
  color: '#c8b0ff'
icon: icons/world/blood.png
details:
- label: Where
  value: Combat rooms (2.5 % chance, from floor 2, at most one per floor); rarely in secret rooms, next to a slot machine
- label: Cost
  value: ½ heart per donation (1 heart from floor 7)
- label: Gives
  value: 1 to 3 coins per donation (each 15 % chance to be a nugget)
- label: Needs
  value: More health than the cost; no active shield
- label: Wears out
  value: After 3 to 9 donations, then 50 % chance per donation
- label: Leaves
  value: Berry Juice 30 %, Fresh Water 15 %, nothing 55 %
names:
  es:
    name: Máquina de donación
    desc: Tócala para donar medio corazón (uno entero desde la planta 7) y suelta monedas. Tras varias donaciones puede reventar y dejar una bolsa. Nunca te deja sin vida.
  fr:
    name: Machine à dons
    desc: Touchez-la pour donner un demi-cœur (un entier dès l'étage 7) et elle lâche des pièces. Après plusieurs dons, elle peut exploser et laisser une bourse. Elle ne vous laisse jamais sans vie.
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
Touch it to donate half a heart (a full one from floor 7) and it drops coins. After several donations it may burst and leave a bag. It never leaves you without health.

## How it works
- Walk into it to donate: you lose ½ heart (1 heart from floor 7 on) and it drops 1 to 3 coins. Each coin has a 15 % chance to be a nugget instead.
- You can donate again about every 0.6 s while you stay in contact.
- It refuses if your health is not higher than the cost, so it can never kill you. It also refuses while a shield protects you.
- A donation counts as getting hurt: items that react when you take a hit react to it too.
- Each machine can take 3 to 9 donations (random). After that, every donation has a 50 % chance to break it. When it breaks this way it leaves [Berry Juice](../items/bolsa_sangre.html) (30 %), [Fresh Water](../items/bolsa_suero.html) (15 %) or nothing (55 %).
- Blowing it up with a bomb breaks it at once: it drops 2 to 4 coins, and only 30 % of the time it also rolls for Berry Juice or Fresh Water (so 9 % Berry Juice, 4.5 % Fresh Water).

## Where it appears
- In a combat room, with a 2.5 % chance, never on the first floor and at most once per floor.
- In some secret rooms, as the second machine next to a slot machine.
