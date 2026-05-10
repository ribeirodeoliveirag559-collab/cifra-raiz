// ─── Cifras ───────────────────────────────────────────────────────────────────

export type Cifra = {
  id: string;
  titulo: string;
  artista: string;
  tom: string;
  ritmo: string;
  dificuldade: "iniciante" | "intermediario" | "avancado";
  tags: string[];
  cifra: string;
  tocadasSemana?: number;
  videoUrl?: string;
};

export const CIFRAS: Cifra[] = [
  {
    id: "pingo-de-mel",
    titulo: "Pingo de Mel",
    artista: "Chitãozinho & Xororó",
    tom: "G",
    ritmo: "Guarânia",
    dificuldade: "iniciante",
    tocadasSemana: 312,
    tags: ["modão", "raiz", "clássico"],
    cifra: `Introdução: G  D  Em  C  G  D  G

[G]Ê, ê, ê, ê, [D]ê, ê, ê
[Em]Ê, ê, ê, ê, [C]ê, [D]ê, ê
[G]Ê, ê, ê, ê, [D]ê, ê, ê
[Em]Ê, ê, ê, [Am]ê, [D]ê, [G]ê

[G]Quando eu te pe-[D]go pela mão
[Em]E te olho nos [C]olhos com carinho e a-[G]mor
Sinto que o meu [D]coração
[Em]Fica cheio de [Am]alegria e can-[D]ção

Refrão:
[G]Você é meu pin-[D]go de mel
[Em]Adoça minha [C]vida, meu bem
[G]Sem você eu não [D]sei
[Em]Como vi-[Am]ver, meu a-[D]mor, meu [G]amor`,
  },
  {
    id: "fio-de-cabelo",
    titulo: "Fio de Cabelo",
    artista: "Chitãozinho & Xororó",
    tom: "D",
    ritmo: "Balada Sertaneja",
    dificuldade: "iniciante",
    tocadasSemana: 287,
    tags: ["modão", "romântico", "clássico"],
    cifra: `Introdução: D  A  Bm  G  D  A  D

[D]Não existe no mun-[A]do
Coisa mais triste [Bm]e profunda
Do que olhar nos [G]olhos de quem
Se a-[D]ma
E ver o indi-[A]ferente
Passar sem [D]nada

[D]Quanta sau-[A]dade
Que essa can-[Bm]ção me traz
A lembrança do teu [G]rosto
Que não sai da mi-[D]nha cabeça [A]ja-[D]mais

Refrão:
[G]Dei de tudo a vo-[D]cê
Fiz tudo que [A]pude pra te a-[Bm]gradar
Mas você foi em-[G]bora
E esse [D]fio de ca-[A]belo
Me fez cho-[D]rar`,
  },
  {
    id: "meu-velho-pai",
    titulo: "Meu Velho Pai",
    artista: "Tião Carreiro & Pardinho",
    tom: "C",
    ritmo: "Toada",
    dificuldade: "iniciante",
    tocadasSemana: 198,
    tags: ["raiz", "modão", "toada"],
    cifra: `Introdução: C  G  Am  F  C  G  C

[C]Meu velho pai
Que a vida intei-[G]ra trabalhou
Na terra que o su-[Am]or sagrou
Com as mãos ca-[F]losas de la-[C]vor

[G]Hoje eu venho a-[C]qui
Pra lhe dizer do [G]meu amor
Que o seu sacri-[Am]fício
Não foi em [F]vão, meu se-[C]nhor`,
  },
  {
    id: "evidencias",
    titulo: "Evidências",
    artista: "Chitãozinho & Xororó",
    tom: "A",
    ritmo: "Balada Sertaneja",
    dificuldade: "intermediario",
    tocadasSemana: 401,
    tags: ["clássico", "romântico", "sertanejo"],
    cifra: `Introdução: A  E  F#m  D  A  E  A

[A]Eu sei que você [E]pensa que eu
Não sei que você [F#m]está
Me enganando a-[D]qui
Mas eu pre-[A]firo não saber [E]mais

[A]Fica mais fácil [E]assim
Me fazer de en-[F#m]ganado
E deixar a [D]vida me le-[A]var...

Refrão:
[D]Que e-[A]vidências
Eu não quero [E]mais
Que a evidência [A]que
Você me a-[D]ma, me a-[A]ma e me [E]ama de-[A]mais`,
  },
  {
    id: "saudade-de-minha-terra",
    titulo: "Saudade de Minha Terra",
    artista: "Goiá & Carreirinho",
    tom: "G",
    ritmo: "Guarânia",
    dificuldade: "iniciante",
    tocadasSemana: 156,
    tags: ["raiz", "modão", "guarânia"],
    cifra: `Introdução: G  C  G  D  G

[G]Quero ver o sol se-[C]car
O or-[G]valho matutino [D]
Nas flores do cam-[G]po
Na ver-[C]dura do ca-[G]minho [D] [G]

[G]Saudade de minha [C]terra
É o que [G]eu sinto a-[D]qui
Longe do meu pago-[G]dão
Que eu dei-[C]xei pro-[G]li [D] [G]`,
  },
  {
    id: "telefone-mudo",
    titulo: "Telefone Mudo",
    artista: "Leandro & Leonardo",
    tom: "E",
    ritmo: "Balada Sertaneja",
    dificuldade: "intermediario",
    tocadasSemana: 234,
    tags: ["romântico", "sertanejo universitário"],
    cifra: `Introdução: E  B  C#m  A  E  B  E

[E]Você não liga mais pra [B]mim
Nem manda mais um re-[C#m]cado
O tele-[A]fone mudou ou você
Mudou de en-[E]dereço [B]

[E]Será que você es-[B]queceu
Tudo que nós vi-[C#m]vemos
O tele-[A]fone tá mu-[E]do
Tanto quanto eu [B] [E]`,
  },
    {
    id:            "chitaozinho-xororo-evidencias",
    titulo:        "Evidências",
    artista:       "Chitãozinho & Xororó",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2523,
    cifra: `[Intro] [E]  [E5+]  [A]  [F#m]  [A/B]
        [E]  [E5+]  [A]  [E/G#]  [F#m]
        [A/B]  [E]  [A/B]

[Primeira Parte]

           [E]                  [B/D#]
Quando eu digo que deixei de te amar
         [C#m7]    [E7(9)]  [E6]  [E7]
É porque eu te amo
           [A]
Quando eu digo que não quero
      [C#7]
Mais você
   [F#m]
É porque eu te quero
          [B7]
Eu tenho medo de te dar meu
 [Cº]
Coração
         [C#m7]
E confessar que eu estou
         [C#m7/B]
Em tuas mãos
         [F#]         [E/G#]
Mas não posso imaginar
           [F#/A#]
O que vai ser de mim
             [B]      [A/C#]  [B/D#]
Se eu te perder um dia

[Segunda Parte]

        [E]
Eu me afasto e me defendo
    [B/D#]
De você
       [C#m]          [E7(9)]  [E6]  [E7]
Mas depois me entrego
      [A]
Faço tipo, falo coisas que
    [C#7]
Eu não sou
     [F#m]
Mas depois eu nego
          [B7]
Mas a verdade é que eu sou
       [Cº]
Louco por você
         [C#m]
E tenho medo de pensar
          [Am]
Em te perder
       [E]                       [A/B]
Eu preciso aceitar que não dá mais
                [E4]     [E]    [E4]  [E]  [A/B]
Pra separar as nossas vidas

[Refrão]

[E]
E nessa loucura de dizer

Que não te quero
       [G#]
Vou negando as aparências

Disfarçando as evidências
          [A]
Mas pra que viver fingindo
           [F#m]
Se eu não posso enganar
         [B7]
Meu coração
    [F#m]       [B7]
Eu sei que te amo

  [E]
Chega de mentiras

De negar o meu desejo
        [G#]
Eu te quero mais que tudo

Eu preciso do seu beijo
       [A]
Eu entrego a minha vida
       [F#m]
Pra você fazer o que quiser
    [B7]
De mim
     [F#m]          [B7]
Só quero ouvir você dizer
     [E]
Que sim
              [E5+]
Diz que é verdade que tem
    [A]   [E/G#]
Saudade
    [F#m]         [B7]
Que ainda você pensa muito
    [E]
Em mim
              [E5+]
Diz que é verdade que tem
    [A]   [E/G#]
Saudade
    [F#m]          [B7]
Que ainda você quer viver

Pra mim

[Solo] [C#m]  [C5+]  [E/B]  [F#/A#]  [Am]  [A/B]

[Tab - Solo]

Parte 1 de 3
E|-16h17~-16~-12~-------------------------------------|
B|-----------------14~--14/19b20/21~------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 3
E|-16h17~-16~12~----19b21r19---19~--------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 3 de 3
E|-15p12--------12p8--------8p5-----------------------|
B|-------13----------10---------5---------------------|
G|----------12-----------9--------5---7p5--4~---------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Segunda Parte]

        [E]
Eu me afasto e me defendo
    [B/D#]
De você
       [C#m]          [E7(9)]  [E6]  [E7]
Mas depois me entrego
      [A]
Faço tipo, falo coisas que
    [C#7]
Eu não sou
     [F#m]
Mas depois eu nego
          [B7]
Mas a verdade é que eu sou
       [Cº]
Louco por você
         [C#m]
E tenho medo de pensar
          [Am]
Em te perder
       [E]                       [A/B]
Eu preciso aceitar que não dá mais
                [E4]     [E]    [E4]  [E]  [A/B]
Pra separar as nossas vidas

[Refrão]

[E]
E nessa loucura de dizer

Que não te quero
       [G#]
Vou negando as aparências

Disfarçando as evidências
          [A]
Mas pra que viver fingindo
           [F#m]
Se eu não posso enganar
         [B7]
Meu coração
    [F#m]       [B7]
Eu sei que te amo

  [E]
Chega de mentiras

De negar o meu desejo
        [G#]
Eu te quero mais que tudo

Eu preciso do seu beijo
       [A]
Eu entrego a minha vida
       [F#m]
Pra você fazer o que quiser
    [B7]
De mim
     [F#m]          [B7]
Só quero ouvir você dizer
     [E]
Que sim
              [E5+]
Diz que é verdade que tem
    [A]   [E/G#]
Saudade
    [F#m]         [B7]
Que ainda você pensa muito
    [E]
Em mim
              [E5+]
Diz que é verdade que tem
    [A]   [E/G#]
Saudade
    [F#m]          [B7]
Que ainda você quer viver
     [E]
Pra mim
              [E5+]
Diz que é verdade que tem
    [A]   [E/G#]
Saudade
    [F#m]          [B7]
Que ainda você quer viver
     [E]
Pra mim`,
  },
  {
    id:            "chitaozinho-xororo-sinonimos-part-ze-ramalho",
    titulo:        "Sinônimos (part. Zé Ramalho)",
    artista:       "Chitãozinho & Xororó",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3456,
    cifra: `[Intro] [C]  [G/B]  [Dm7]  [F]
        [C]  [G/B]  [Dm7]  [F]

[Tab - Intro - Violão 2]

            [C]    [G/B]  [Dm7]
E|----------0----3----1---------------------|
B|----------1----3----1---------------------|
G|----------0----0----2---------------------|
D|----------2----0----0---0-2-2h3-2-0-------|
A|-----3h5--3----2--------------------------|
E|-3h5---------------------------------3h5--|

       [C]    [G/B]  [Dm7]                     [C]
E|-----0----3----1-----------------------0--|
B|-----1----3----1-----------------------1--|
G|-----0----0----2-----------------------0--|
D|-----2----0----0---0-2-2h3-2-0---------2--|
A|-3-5-3----2------------------------3-5-3--|
E|-------------------------------3-5--------|

[Tab - Intro - Violão 3]

           [C]              [G/B]
E|------------8-7-5-7-5---5-----------------|
B|----------------------8---8-6-8-6---------|
G|-----5h7-5--------------------------------|
D|-5h7--------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

                 [Dm7]           [F]
E|------------------------------------------|
B|-5-6-5---5---------------5-5h6-5----------|
G|-------7---7-5-7-5...--7---------7--------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

           [C]              [G/B]
E|------------8-7-5-7-5---5-----------------|
B|----------------------8---8-6-8-6-5-6-5---|
G|-----5-7-5------------------------------7-|
D|-5h7--------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

         [Dm7]           [F]              [C]
E|------------------------------------------|
B|-5---------------5-5h6-5------------------|
G|---7-5-7-5...--7---------7------5-7-5...--|
D|----------------------------5-7-----------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[Tab - Frase 1 - Violão 2]

          [F]                [C]
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-0-2--2h3--2--0---------------------------|
A|---------------------3h5-3----------------|
E|-----------------3h5----------------------|

[Tab - Frase 1 - Violão 3]

         [F]               [C]
E|------------------------------------------|
B|---5-5h6-5--------------------------------|
G|-7---------7-------5h7-5------------------|
D|---------------5h7------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Tab - Frase 2 - Violão 2]

                    [G]       [F]          [G]
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-0-2-2h3--3/5-3-2-0-----------------------|
A|--------------------3-2---0-------5-------|
E|------------------------3---3-1-0----3----|

[C]                     [G/B]
  Quanto tempo o coração
       [Dm7]   (Frase 1)  [F]
Leva pra saber
[C]                     [G/B]
  Que o sinônimo de amar
      [Dm7] (Frase 1) [F]
É sofrer
[C]                [G/B]
  Num aroma de amores
           [Dm7]  (Frase 1) [F]
Pode haver espinhos
[C]                     [G/B]
  É como ter mulheres em milhões
       [Dm7]    (Frase 2) [F]
E ser sozinho

[Pré-Refrão 1]

[Tab - Frase 3 - Violão 3]

               [F]                   [G]
E|-8-7-5-7-5---5----------------------------|
B|-----------8---8-6-8-6-5-6/8-6-5----------|
G|---------------------------------7--------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Tab - Frase 4 - Violão 2]

         [F]           [C]
E|-------------------0----------------------|
B|-------------------1----------------------|
G|-------------------0----------------------|
D|-0-2-2h3-----------2----------------------|
A|---------------3h5-3----------------------|
E|-----------3h5----------------------------|

[G]                [F]
  Na solidão de casa
       [G]  (Frase 3) [F]
Descansar
[G]               [Dm7]         [C]
  O sentido da vida, encontrar
      [G/B]
Quem pode dizer onde
         [Dm7]        [F] (Frase 4)
A felicidade, está?

[Refrão]

[C]                       [G/B]
  O amor é feito de paixões
                    [Dm7]
E quando perde a razão
     [F]         [G]        [C]
Não sabe quem vai machucar
                      [G/B]
Quem ama nunca sente medo
                    [Dm7]
De contar o seu segredo
   [F]          [G]      [C]
Sinônimo de amor é amar

( Frase 5  [D] )

[Tab - Frase 5 - Violão 2]

         [D]                 [G]
E|-------2----3-2-0-------------------------|
B|-------3----------3-1---------------------|
G|-------2--------------2--0----------------|
D|-0-0h2-0----------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Tab - Frase 5 - Violão 3]

   [D]             [G]
E|---7-5------------------------------------|
B|-------8-7-5-7-8...-----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Segunda Parte]

[Tab - Frase 6 - Violão 2]

         [C]              [G]
E|------------------------------------------|
B|------------------------------------------|
G|------------------0h2-0-------------------|
D|--------------0h2-------------------------|
A|-0-2-2h3-2-0------------------------------|
E|------------------------------------------|

[Tab - Frase 6 - Violão 3]

         [C]              [G]
E|------------------3h5-3-------------------|
B|--------------3h5-------------------------|
G|-2-4-4h5-4-2------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Tab - Frase 7 - Violão 2]

         [C]          [D]           [Am]         [D]
E|------------------------------------------|
B|------------------------------------------|
G|-2-4-4/5--5h7-5-4-2--0--------------------|
D|------------------------4--0--2--0--------|
A|-----------------------------------3-2---5|
E|---------------------------------------3--|

[Tab - Frase 7 - Violão 3]

            [D]        [Am]          [D]
E|-8h10-8-7---------------------------------|
B|----------10-8-7--------------------------|
G|-----------------7-9-7--------------------|
D|-----------------------10-9----12---------|
A|----------------------------10------------|
E|------------------------------------------|

[G]                     [D/F#]
  Quem revelará o mistério
     [Am]      (Frase 6) [C]
Que tenha fé
[G]                      [D/F#]
  E quantos segredos traz
                     [Am] (Frase 6) [C]
O coração de uma mulher
[G]                      [D/F#]
  Como é triste a tristeza
                  [Am]  (Frase 6)  [C]
Mendigando um sorriso
[G]                       [D/F#]
  Um cego procurando a luz
                    [Am]  (Frase 7) [C]
Na imensidão do paraíso

[Pré-Refrão 2]

[Tab - Frase 8 - Violão 3]
                     [C]
E|-17-15-14-15-14----14---------------------|
B|----------------17----17-15-17-15---------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

                   [D]
E|------------------------------------------|
B|-13-13h15-13-12-10------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[D]                   [Am]
  Quem tem amor na vida
     [D]    (Frase 8) [C]
Tem sorte
[D]                   [Am]
  Quem na fraqueza sabe
              [G]
Ser bem mais forte
 [D/F#]
Ninguém sabe dizer
              [Am]        (Frase 6) [C]
Onde a felicidade, está

[Refrão]

[G]                       [D/F#]
  O amor é feito de paixões
                    [C]
E quando perde a razão
               [D]        [G]
Não sabe quem vai machucar
                      [D/F#]
Quem ama nunca sente medo
                    [Am]
De contar o seu segredo
   [C]          [D]      [G]
Sinônimo de amor é amar

                      [D/F#]
O amor é feito de paixões
                    [Am]
E quando perde a razão
     [C]         [D]        [G]
Não sabe quem vai machucar
                      [D/F#]
Quem ama nunca sente medo
                    [Am]
De contar o seu segredo
   [C]          [D]      [G]
Sinônimo de amor é amar

[Solo] [D/F#]  [Am]  [C] (Frase 6)
       [G]  [Dm7]  [F]  [G]

[Tab - Solo]

E|-10-10-10------10-----10-----10-----10----|
B|-----------7-8----7-8----7-8----7-8-------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-----10-----10-----10-----8-7-7-----------|
B|-7-8----7-8----7-8----7-8-------10-10-8-8-|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------7-----------|
B|-----------10-10-10-8-10-8-10---10-8-8----|
G|-9-9--------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|----------7-8-7---7-----------------------|
B|-----8-10-------8---8-10------------------|
G|---7---------------------10-109-9-7-7----|
D|-9----------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|----------------------------------8-7-5---|
B|--------------------------------6---------|
G|------------------------------5-----------|
D|-75--------------------3-5/7-------------|
A|----8p7--7-8p7-7-8----3-------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-8p6-5-6p5-------6------------------------|
G|-----------7-5-4---4/5--------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Terceira Parte]

[C]                     [G]
  Quem revelará o mistério
     [Dm7]     (Frase 1)  [F]
Que tenha fé
[C]                      [G]
  E quantos segredos traz
                     [Dm7]  (Frase 1) [F]
O coração de uma mulher
[C]                      [G]
  Como é triste a tristeza
                  [Dm7]  (Frase 1) [F]
Mendigando um sorriso
[C]                       [G]
  Um cego procurando a luz
                    [Dm7]  (Frase 1) [F]
Na imensidão do paraíso

[Refrão Final]

[C]                       [G/B]
  O amor é feito de paixões
                    [Dm7]
E quando perde a razão
     [F]         [G]        [C]
Não sabe quem vai machucar
                      [G/B]
Quem ama nunca sente medo
                    [Dm7]
De contar o seu segredo
   [F]          [G]      [C]
Sinônimo de amor é amar

                      [G/B]
O amor é feito de paixões
                    [Dm7]
E quando perde a razão
     [F]         [G]        [C]
Não sabe quem vai machucar
                      [G/B]
Quem ama nunca sente medo
                    [Dm7]
De contar o seu segredo
   [F]          [G]      [C]
Sinônimo de amor é amar`,
  },
  {
    id:            "chitaozinho-xororo-pagina-de-amigos",
    titulo:        "Página de Amigos",
    artista:       "Chitãozinho & Xororó",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1012,
    cifra: `[Intro] [C]  [G/B]  [F/A]  [C]  [G/B]
        [C]  [G/B]  [F/A]  [C]  [G/B]

[Dedilhado - Intro - 2x]

   [C]                  [G/B]
E|------0---1---0---------3---3---3---------|
B|------1---3---1---------3---1---0---------|
G|----0---0---0---0-----0---0---0---0-------|
D|------------------------------------------|
A|-3------------------2---------------------|
E|------------------------------------------|

   [F/A]              [C]           [G/B]
E|----------------------------------3-------|
B|-----1---0---1--------------------3-------|
G|-----2---2---2------0-----0-----0---0-----|
D|---3---3---3---3------0h2-----------------|
A|-0----------------3---------3-2-----------|
E|------------------------------------------|

[Tab - Solo Intro]

Parte 1 de 3
E|------------------------------------------|
B|------------------------------------------|
G|-/12~----0-/12p109--7b9--7~--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|------------------------------------------|
B|------------------------------------------|
G|--7b9--7b9--7b9r7p5~----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|------------------------------------------|
B|------------------------------------------|
G|--------5--7--5--7/9~-9b10r9p7~-----------|
D|--5--7------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[C]
Ela ligou terminando
 [G]
Tudo entre eu e ela
   [F]
E disse que encontrou
          [C]
Outra pessoa

Ela jogou os meus sonhos
 [G]
Todos pela janela
   [F]
E me pediu pra entender
              [C]
Encarar numa boa

[Pré-Refrão]

 [C]
Como se o meu coração
               [G]
Fosse feito de aço

Pediu pra esquecer os beijos
       [F]
E abraços e pra machucar
                 [C]
Ainda brincou comigo

Disse em poucas palavras
              [G]
Por favor, entenda

O seu nome vai ficar na
        [F]
Minha agenda
    [G]          [C]    [G]
Na página de amigos

[Refrão]

[Riff - Refrão]

   [C7]
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|--3--2--1~--------------------------------|
E|--------------1---------------------------|

     [C]
Como é que eu posso ser
             [G]
Amigo de alguém que eu tanto amei
    [F]
Se ainda existe aqui comigo
      [C]             [G]
Tudo dela e eu não sei
     [C]
Não sei o que vou eu fazer
        Riff                  [F]
Pra continuar a minha vida assim
       [C]
Se o amor que morreu dentro
 [G]              [C]
Dela ainda vive em mim

[Solo] [C]  [G]  [F]  [C]  [G]

[Tab - Solo]

Parte 1 de 3
E|------------------------------------------|
B|------------------------------------------|
G|-/12~----0-/12p109--7b9--7~--------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|------------------------------------------|
B|------------------------------------------|
G|--7b9--7b9--7b9r7p5~----------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|------------------------------------------|
B|------------------------------------------|
G|--------5--7--5--7/9~-9b10r9p7~-----------|
D|--5--7------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[C]
Ela jogou os meus sonhos
 [G]
Todos pela janela
   [F]
E me pediu pra entender
              [C]
Encarar numa boa

[Pré-Refrão]

 [C]
Como se o meu coração
               [G]
Fosse feito de aço

Pediu pra esquecer os beijos
       [F]
E abraços e pra machucar
                 [C]
Ainda brincou comigo

Disse em poucas palavras
              [G]
Por favor, entenda

O seu nome vai ficar na
        [F]
Minha agenda
    [G]          [C]    [G]
Na página de amigos

[Refrão]

[Riff - Refrão]

   [C7]
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|--3--2--1~--------------------------------|
E|--------------1---------------------------|

     [C]
Como é que eu posso ser
             [G]
Amigo de alguém que eu tanto amei
    [F]
Se ainda existe aqui comigo
      [C]             [G]
Tudo dela e eu não sei
     [C]
Não sei o que vou eu fazer
        Riff                  [F]
Pra continuar a minha vida assim
       [C]
Se o amor que morreu dentro
 [G]              [C]
Dela ainda vive em mim

       [C]
Se o amor que morreu dentro
 [G]              [F]
Dela ainda vive em mim

[Final] [Fm]  [C]

[Tab - Final]
                 [Fm]                      [C]
E|------------------------------------------|
B|--9b11--9b11r9-7~--10-9b10--9b10r9--7--9~-|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|`,
  },
  {
    id:            "chitaozinho-xororo-fio-de-cabelo",
    titulo:        "Fio de Cabelo",
    artista:       "Chitãozinho & Xororó",
    tom:           "F",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2661,
    cifra: `[Intro] [C7]  [F]  [C7]  [F]

[Tab - Solo Intro]

Parte 1 de 2
E|--------------6---------------5-----------|
B|------------------------------------------|
G|-7-5--5h7-5h7----7-5--5h7-5h7-------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
E|----8-8-8-8--6-6--5-5--3-5-6--3-1---------|
B|------------------------------------------|
G|-5--9-9-9-9--7-7--5-5--3-5-7--3-2---------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

               [F]
Quando a gente ama
                [C7]           [F]
Qualquer coisa serve para relembrar
                             [F7]
Um vestido velho da mulher amada
             [Bb]
Tem muito valor

                            [C7]
Aquele restinho do perfume dela
               [F]
Que ficou no frasco

Sobre a penteadeira
                  [C7]
Mostrando que o quarto
                              [F]    [C/E]
Já foi o cenário de um grande amor

[Refrão]

[Dm]  [C7]
E  hoje o que encontrei
                 [F]
Me deixou mais triste
                        [C7]
Um pedacinho dela que existe
             [Bb]              [F]  [C/E]
Um fio de cabelo no meu paletó

 [Dm]  [C7]
Lembrei de tudo entre nós
           [F]
Do amor vivido
                          [C7]
Aquele fio de cabelo comprido
              [Bb]      [C7]    [F]   [C/E]  [Dm]
Já esteve grudado em nosso suor

( [C7]  [F]  [C7]  [F] )

[Segunda Parte]

               [F]
Quando a gente ama
            [C7]               [F]
E não vive junto da mulher amada

Uma coisa à toa
            [F7]                [Bb]
É um bom motivo pra gente chorar
                                [C7]
Apagam-se as luzes ao chegar a hora
              [F]
De ir para a cama
                                  [C7]
A gente começa a esperar por quem ama

Na impressão que ela
          [F]     [C/E]
Venha se deitar

[Refrão]

[Dm]  [C7]
E  hoje o que encontrei
                 [F]
Me deixou mais triste
                        [C7]
Um pedacinho dela que existe
             [Bb]              [F]  [C/E]
Um fio de cabelo no meu paletó

 [Dm]  [C7]
Lembrei de tudo entre nós
           [F]
Do amor vivido
                          [C7]
Aquele fio de cabelo comprido
              [Bb]      [C7]    [F]
Já esteve grudado em nosso suor`,
  },
  {
    id:            "chitaozinho-xororo-saudade-da-minha-terra",
    titulo:        "Saudade da Minha Terra",
    artista:       "Chitãozinho & Xororó",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3155,
    cifra: `[Intro] [B]  [E]  [B]  [A]
        [E/G#]  [B/F#]  [E]

[Tab - Intro]

Parte 1 de 2
                        [B]                          [E]
E|--5/7--5--4--7--5--4--2------7/9--7--5--9--7--5--4--|
B|--7/9--7--5--9--7--5--4------9/10-9--7--10-9--7--5--|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
                          [B]        [A]  [E/G#]  [B/F#]  [E]
E|--7-7-7--5--4--7--5--4--2-2-2-0--0------------------|
B|--9-9-9--7--5--9--7--5--4-4-4-2--2--4-4-4-2--2--0---|
G|------------------------------------4-4-4-2--2--1---|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

             [E]
De que me adianta viver na cidade
                               [B]
Se a felicidade não me acompanhar

Adeus, paulistinha do meu coração
                               [E]
Lá pro meu sertão eu quero voltar
            [A]
Ver a madrugada quando a passarada
             [F#7]              [B]
Fazendo alvorada começa a cantar

Com satisfação arreio o burrão
                 [A]   [E/G#]    [B/F#]  [E]
Cortando o estradão saio  a galo__par
           [A]               [B]
E vou escutando o gado berrando
                            [E]
O Sabiá cantando no jequitibá

[Interlúdio 1] [B]  [E]  [B]  [A]
               [E/G#]  [B/F#]  [E]

[Tab - Interlúdio 1]

Parte 1 de 2
                        [B]                          [E]
E|--5/7--5--4--7--5--4--2------7/9--7--5--9--7--5--4--|
B|--7/9--7--5--9--7--5--4------9/10-9--7--10-9--7--5--|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
                          [B]        [A]  [E/G#]  [B/F#]  [E]
E|--7-7-7--5--4--7--5--4--2-2-2-0--0------------------|
B|--9-9-9--7--5--9--7--5--4-4-4-2--2--4-4-4-2--2--0---|
G|------------------------------------4-4-4-2--2--1---|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Segunda Parte]

              [E]
Por nossa senhora

Meu sertão querido
                                [B]
Vivo arrependido por ter te deixado

Esta nova vida aqui na cidade
                               [E]
De tanta saudade, eu tenho chorado
             [A]
Aqui tem alguém, diz que me quer bem
               [F#7]              [B]
Mas não me convém, eu tenho pensado

Eu digo com pena, mas esta morena
               [A]     [E/G#]     [B/F#]    [E]
Não sabe o sistema que    eu fui   criado
            [A]                   [B]
Tô aqui cantando, de longe escutando

Alguém está chorando
               [E]
Com o rádio ligado

[Interlúdio 2] [B]  [E]  [G]  [F]
               [C/E]  [G/D]  [C]

[Tab - Interlúdio 2]

Parte 1 de 2
                        [B]                          [E]
E|--5/7--5--4--7--5--4--2------7/9--7--5--9--7--5--4--|
B|--7/9--7--5--9--7--5--4------9/10-9--7--10-9--7--5--|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
                          [G]     [F]    [C/E]   [G/D]   [C]
E|--7-7-7--5--4--7--5--4--7-7-7-5--5-3-3-3-1--1--0----|
B|--9-9-9--7--5--9--7--5--8-8-8-6--6-5-5-5-3--3--1----|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Terceira Parte]

              [C]
Que saudade imensa do campo e do mato
                                   [G]
Do manso regato que corta as campinas

Aos domingos ia passear de canoa
                                  [C]
Nas lindas lagoas de águas cristalinas
              [F]
Que doce lembrança daquelas festanças
             [D7]                [G]
Onde tinham danças e lindas meninas

Eu vivo hoje em dia sem ter alegria
           [F]    [C/E]     [G/D]    [C]
O mundo judia, mas  também  ensina
             [F]                   [G]
Estou contrariado, mas não derrotado
                                [C]
Eu sou bem guiado pelas mãos divinas

[Interlúdio 3] [G]  [C]  [B]  [A]
               [E/G#]  [B/F#]  [E]

[Tab - Interlúdio 3]

Parte 1 de 2
                        [G]                          [C]
E|--1/3--1--0--3--1--0---------3/5--3--1--5--3--1--0--|
B|--3/5--3--1--5--3--1--3------5/6--5--3--6--5--3--1--|
G|----------------------4-----------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
                          [B]     [A]    [E/G#]  [B/F#]  [E]
E|--3-3-3--1--0--3--1--0------------------------------|
B|--5-5-5--3--1--5--3--1--4-4-4-2--2------------------|
G|------------------------4-4-4-2--2-4-4-4-2--2--1----|
D|-----------------------------------6-6-6-4--4--2----|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Quarta Parte]

              [E]
Pra minha mãezinha já telegrafei
                            [B]
E já me cansei de tanto sofrer

Nesta madrugada estarei de partida
                                 [E]
Pra terra querida que me viu nascer
            [A]
Já ouço sonhando o galo cantando
            [F#]             [B]
O inhambu piando no escurecer

A lua prateada clareando a estrada
            [A]    [E/G#]   [B/F#]   [E]
A relva molhada desde o anoitecer
           [A]                 [B]
Eu preciso ir pra ver tudo ali
                               [E]
Foi lá que nasci, lá quero morrer

[Final] [B7]  [E]`,
  },
  {
    id:            "chitaozinho-xororo-fogao-de-lenha",
    titulo:        "Fogão de Lenha",
    artista:       "Chitãozinho & Xororó",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1675,
    cifra: `[Intro] [C]  [Am]  [F]  [Dm]  [G7]

[Tab - Intro]

E|----5--3--1--5---------5--3--1--5----|
B|-------------------------------------|
G|-------------------------------------|
D|-------------------------------------|
A|-------------------------------------|
E|-------------------------------------|

E|---7--5--4--7------------9-9---7-7---|
B|-------------------------------------|
G|-------------------------------------|
D|-------------------------------------|
A|-------------------------------------|
E|-------------------------------------|

   [C]           [E7]            [F]
Espera, minha mãe, estou voltando
     [A7]                       [Dm]
Que falta faz pra mim um beijo seu
     [F]            [E7]            [Am]
O orvalho das manhãs cobrindo as flores
     [D7]                       [G7]
E um raio de luar que era tão meu

   [C]            [E7]               [F]
O sonho de grandeza, oh mãe querida
    [A7]               [Dm]
Um dia separou vocês e eu
    [F]         [E7]          [Am]
Queria tanto ser alguém na vida
  [D7]                         [G7]
E apenas sou mais um que se perdeu

        [C]            [C7]            [F]
Pegue a viola, e a sanfona que eu tocava
          [Dm]          [G7]            [C]    [G7]
Deixe um bule de café em cima do fogão
          [C]           [C7]         [F]
Fogão de lenha, e uma rede na varanda
        [Dm]            [G7]                    [C]    [G7]
Arrume tudo mãe querida  o seu filho vai voltar

[Solo] [C]  [Am]  [F]  [Dm]  [G7]


 [C]              [E7]          [F]
Mãe, eu lembro tanto a nossa casa
      [A7]                        [Dm]
E as coisas que falou quando eu saí
 [F]             [E7]        [Am]
Lembro do meu pai, que ficou triste
    [D7]                               [G7]
E nunca mais cantou depois que eu parti

 [C]          [E7]             [F]
Hoje eu já sei, oh mãe querida
 [A7]                        [Dm]
Nas lições da vida eu aprendi
       [F]           [E7]        [Am]
O que eu vim procurar aqui distante?
    [D7]                         [G7]
Eu sempre tive tudo e tudo está aí

        [C]            [C7]            [F]
Pegue a viola, e a sanfona que eu tocava
          [Dm]          [G7]            [C]    [G7]
Deixe um bule de café em cima do fogão
          [C]           [C7]         [F]
Fogão de lenha, e uma rede na varanda
        [Dm]            [G7]                    [C]    [G7]
Arrume tudo mãe querida  o seu filho vai voltar
   [C]          [E7]             [F]
Espera, minha mãe, estou voltando`,
  },
  {
    id:            "chitaozinho-xororo-no-rancho-fundo",
    titulo:        "No Rancho Fundo",
    artista:       "Chitãozinho & Xororó",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1511,
    cifra: `[Intro] [A]

           [A]
No rancho fundo
         [C#7]          [F#m]
Bem pra lá do fim do mundo
        [C#7]        [D]
Onde a dor e a saudade
        [E7]          [A]   [E7]
Contam coisas da cidade

           [A]
No rancho fundo
      [C#7]             [F#m]
De olhar triste e profundo
      [C#7]           [D]
Um moreno canta as mágoas
         [E7]             [A]   [A4]  [A]
Tendo os olhos rasos d'água

         [F#7]
Pobre moreno
        [Em] [F#7]     [Bm]
Que de noite no sereno
          [Dm]        [A]
Espera a lua no terreiro
            [E7]              [A]
Tendo um cigarro por companheiro

         [F#7]
Sem um aceno
     [Em]   [F#7] [Bm]
Ele pega na viola
     [Dm]        [A]
E a Lua por esmola
 [F#m]         [E7]        [A]     [E7]
Vem pro quintal desse moreno

           [A]
No rancho fundo
         [C#7]          [F#m]
Bem pra lá do fim do mundo
       [C#7]            [D]
Nunca mais houve alegria
        [E7]            [A]   [E7]
Nem de noite, nem de dia

        [A]
Os arvoredos
        [C#7]            [F#m]
Já não contam mais segredos
    [C#7]        [D]
E a última palmeira
       [E7]           [A]    [A4]  [A]
Já morreu na cordilheira

         [F#7]
Os passarinhos
      [Em] [F#7]        [Bm]
Hiberna..ram-se nos ninhos
         [Dm]             [A]
De tão triste esta tristeza
           [E7]          [A4]  [A]
Enche de trevas a natureza

          [F#7]
Tudo porque
        [Em] [F#7]     [Bm]
Só por causa do moreno
          [Dm]               [A]
Que era grande, hoje é pequeno
 [F#m]     [Bm]   [E7]   [A]  [F7]
Pra uma casa de sapê

            [Bb]
Se Deus soubesse
        [D7]         [Gm]
Da tristeza lá da serra
      [D7]         [Eb]
Mandaria lá pra cima
         [F7]            [Bb]   [F7]
Todo o amor que há na terra

            [Bb]
Porque o moreno
      [D7]          [Gm]
Vive louco de saudade
        [D7]         [Eb]
Só por causa do veneno
        [F7]         [Bb]   [Bb4]  [Bb]
Das mulheres da cida_de

        [G7]
Ele que era
      [Fm]  [G7]      [Cm]
O cantor da primavera
       [Ebm]           [Bb]
E que fez do rancho fundo
          [Cm]   [F7]        [Bb4]  [Bb]  [Bb9]  [B]
O céu melhor que tem no mundo

         [G7]
Se uma flor
      [Fm] [G7]          [Cm]
Desabrocha e o sol queima
      [Ebm]         [Bb]
A montanha vai gelando
 [Gm]        [Cm]  [F7]     [Ebm]  [Bb] [Bb4] [Bb]
Lembra o cheiro da morena`,
  },
  {
    id:            "chitaozinho-xororo-60-dias-apaixonado",
    titulo:        "Dias Apaixonado",
    artista:       "Chitãozinho & Xororó",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4656,
    cifra: `[Intro] [C]  [G7]  [F]  [C]  [G7]  [C]

    [C]               [G]           [F]         [C]
Viajando pra Mato Grosso, Aparecida do Taboado
                  [G]               [F]       [C]
Lá conheci uma morena, que me deixou amarrado
                   [G]               [F]               [C]
Deixei a linda pequena, por Deus, confesso, desconsolado
  [C7]             [F]
Mudei o jeito de ser
                  [G]       [F]   [Em]  [Dm]   [C]
Bebendo pra esquecer, 60 dias apaixonado

( [C]  [G7]  [C]  [G7] )

      [C]              [G]          [F]               [C]
Dois meses juntinho dela eternamente serão lembrados
                  [G]         [F]                [C]
Pedaço da minha vida, lembranças do meu passado
                  [G]          [F]                   [C]
Jamais será esquecida a imagem bela, de um anjo amado
    [C7]              [F]
Dois meses passaram logo
                    [G]        [F]   [Em]  [Dm]   [C]
É num copo que eu afogo, 60 dias apaixonado

( [C]  [G7]  [C]  [G7] )

       [C]                 [G]                [F]          [C]
Se alguém fala em Mato Grosso eu sinto o peito despedaçado
                  [G]             [F]           [C]
O pranto rola depressa, do meu rosto já cansado
                  [G]        [F]          [C]
Jamais eu esquecerei Aparecida do Taboado
   [C7]              [F]
Deixei a minha querida
                      [G]        [F]  [Em]  [Dm] [C]
Deixei minha própria vida 60 dias apaixonado

   [C7]              [F]
Deixei a minha querida
                      [G]        [F]  [Em]  [Dm] [C]
Deixei minha própria vida 60 dias apaixonado

[Final] [C]  [G7]  [C]  [G7]`,
  },
  {
    id:            "chitaozinho-xororo-nuvem-de-lagrimas",
    titulo:        "Nuvem de Lágrimas",
    artista:       "Chitãozinho & Xororó",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2010,
    cifra: `[Intro] [E]  [F#m]  [G#m]  [F#]  [A]  [E]  [A]  [E]

[Primeira Parte]

 [E]                                  [G#m]
Há uma nuvem de lágrimas sobre meus olhos
                                [Bm]
Dizendo pra mim que você foi embora
             [E7]                [A]
E que não demora meu pranto rolar

                   [G#m]   [F#m]         [E]
Eu tenho feito de tudo pra me convencer
                                    [F#]
E provar que a vida é melhor sem você
           [F#7]                    [B]   [B7]
Mas meu coração não se deixa enganar


[Segunda Parte]

 [E]                                       [G#m]
Vivo inventando paixões pra fugir da saudade
                            [Bm]
Mas depois da cama, a realidade
            [E7]               [A]
É só sua ausência doendo demais

                        [G#m]   [F#m]  [E]
Dá um vazio no peito, uma coisa ruim
                                   [F#]
O meu corpo querendo seu corpo em mim
            [F#7]                 [B]  [B7]
Vou sobrevivendo num mundo sem paz

[Refrão]

[E]                    [F#]
Ah, jeito triste de ter você
 [A]                                   [E]
Longe dos olhos e dentro do meu coração
 [E]    [F#m]   [G#m]   [F#]
Me ensina a te esquecer
 [A]                  [B]            [E]
Ou venha logo e me tire desta solidão

 [E]  [F#m]  [G#m]  [F#]
 [A]  [E]  [A]  [E]

[Primeira Parte]

 [E]                                  [G#m]
Há uma nuvem de lágrimas sobre meus olhos
                                [Bm]
Dizendo pra mim que você foi embora
             [E7]                [A]
E que não demora meu pranto rolar

                   [G#m]   [F#m]         [E]
Eu tenho feito de tudo pra me convencer
                                    [F#]
E provar que a vida é melhor sem você
           [F#7]                    [B]   [B7]
Mas meu coração não se deixa enganar

[Segunda Parte]

 [E]                                       [G#m]
Vivo inventando paixões pra fugir da saudade
                            [Bm]
Mas depois da cama, a realidade
            [E7]               [A]
É só sua ausência doendo demais

                        [G#m]   [F#m]  [E]
Dá um vazio no peito, uma coisa ruim
                                   [F#]
O meu corpo querendo seu corpo em mim
            [F#7]                 [B]  [B7]
Vou sobrevivendo num mundo sem paz

[Refrão]

[E]                    [F#]
Ah, jeito triste de ter você
 [A]                                   [E]
Longe dos olhos e dentro do meu coração
 [E]    [F#m]   [G#m]   [F#]
Me ensina a te esquecer
 [A]                  [B]            [E]
Ou venha logo e me tire desta solidão

[E]                    [F#]
Ah, jeito triste de ter você
 [A]                                   [E]
Longe dos olhos e dentro do meu coração
 [E]    [F#m]   [G#m]   [F#]
Me ensina a te esquecer
 [A]                  [B]            [E]
Ou venha logo e me tire desta solidão

[F#]
Ah

[A]                  [B]            [E]
Ou venha logo e me tire desta solidão

[Final] [E]  [F#m]  [G#m]  [F#]
        [A]  [E]  [A]  [E]`,
  },
  {
    id:            "chitaozinho-xororo-se-deus-me-ouvisse",
    titulo:        "Se Deus Me Ouvisse",
    artista:       "Chitãozinho & Xororó",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4792,
    cifra: `[Intro] [E]  [G#m]  [A9]  [B7]  [B7(13)]

[E]                                    [G#m]
Ah, se Deus me ouvisse e mandasse pra mim
                                   [A9]
Aquela que eu amo e que um dia partiu
                [F#m]              [B]   [B7(13)]
Deixando a tristeza junto de mim

[E]                                  [G#m]
Ah, voltaria pra mim toda a felicidade
                             [A]
Sairia do peito a dor da saudade
             [F#m]               [B]  [B7(11)]
Renascia uma vida a caminho do fim

[A]                 [B]
Ah, eu lhe peço, Senhor
[G#m9]        [C#m]
Ah, traz de volta esse amor
    [C]                     [G]
Senhor, está perto o meu fim
              [A]
Eu lhe peço, meu Deus
            [B]  [B7]
Tenha pena de mim

( [E]  [G#m]  [A9]  [B7]  [B7(13)] )

[E]                                    [G#m]
Ah, se Deus me ouvisse e mandasse pra mim
                                   [A9]
Aquela que eu amo e que um dia partiu
               [F#m]              [B]   [B7(13)]
Deixando a tristeza junto de mim

[E]                                  [G#m]
Ah, voltaria pra mim toda a felicidade
                             [A]
Sairia do peito a dor da saudade
             [F#m]                [B]  [B7]
Renascia uma vida a caminho do fim

[A]                 [B]
Ah, eu lhe peço, Senhor
[G#m9]        [C#m]
Ah, traz de volta esse amor
    [C]                     [G]
Senhor, está perto o meu fim
              [A]
Eu lhe peço, meu Deus
            [B]  [B7]
Tenha pena de mim

[E]             [G#m]
Ah   ah   ah  ah
          [A9]
Ah   ah   ah
          [B]
Ah   ah   ah
          [E]
Ah   ah   ah

          [G#m]
Ah   ah   ah
          [A9]
Ah   ah   ah
          [B]
Ah   ah   ah
          [E]
Ah   ah   ah

          [G#m]
Ah   ah   ah
          [A9]
Ah   ah   ah
          [B]
Ah   ah   ah

Ah   ah

[C]  [D]  [E]
Ah ah ah`,
  },
  {
    id:            "chitaozinho-xororo-galopeira",
    titulo:        "Galopeira",
    artista:       "Chitãozinho & Xororó",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4770,
    cifra: `[Intro] [D]  [G]  [D]  [G]
        [D]  [G]  [D]  [G]

Parte 1 de 4
E|-----------------------------------------------------|
B|-0-1-3--5-5-3-1-1----0-1--3-3-1-0-0------------------|
G|-0-2-4--5-5-4-2-2--2-0-2--4-4-2-0-0------------------|
D|-------------------4---------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 4
E|-----------------------------------------------------|
B|-0-1-3--5-5-3-7-7--5-5--3-3--1-0-3-------------------|
G|-0-2-4--5-5-4-7-7--5-5--4-4--2-0-4-------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Parte 3 De 4]

E|-7--8-10--12-12-10--8--8--5-7--8--10-10--8-7-7-------|
B|-8-10-12--13-13-12-10-10--7-8-10--12-12-10-8-8-------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Parte 4 De 4]

E|-7--8-10--12-10-12--14-14--12-12--10-10---8--8--7----|
B|-8-10-12--13-12-13--15-15--13-13--12-12--10-10--8----|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

[G]
  Foi num baile em Assunción

Capital do Paraguai

Onde eu vi as paraguaias
                  [D]
Sorridentes a bailar

[Segunda Parte]

      [C]
E ao som de suas guitarras
         [D]          [G]
Quatro guapos a cantar
                [D]
Galopeira, galopeira
                       [G]
Eu também entrei a dançar

[Primeira Parte]

[G]
  Foi num baile em Assunción

Capital do Paraguai

Onde eu vi as paraguaias
                  [D]
Sorridentes a bailar

[Segunda Parte]

      [C]
E ao som de suas guitarras
         [D]          [G]
Quatro guapos a cantar
                [D]
Galopeira, galopeira
                       [G]   [G]  [D/F#]  [Em]
Eu também entrei a dançar

[Refrão]

     [D]
Galopeeeeeeeeeeeira
                      [Em]
Nunca mais te esquecereeeeeeeeei
     [D]
Galopeeeeeeeeeeira
       [C]      [D]     [G]
Pra matar minha saudade
                 [D]
Pra minha felicidade
                   [G]
Paraguai, eu voltarei
                 [D]
Pra minha felicidade
                   [G]
Paraguai, eu voltarei

( [D]  [G]  [D]  [G] )
( [D]  [G]  [D]  [G] )

( [G]  [D/F#]  [Em] )

[Refrão]

     [D]
Galopeeeeeeeeeeeira
                      [Em]
Nunca mais te esquecereeeeeeeeei
     [D]
Galopeeeeeeeeeeira
       [C]      [D]     [G]
Pra matar minha saudade
                 [D]
Pra minha felicidade
                   [G]
Paraguai, eu voltarei
                 [D]
Pra minha felicidade
                   [G]  [D]  [G] ( [G]  [D]  [G] )
Paraguai, eu voltare__e__ei`,
  },
  {
    id:            "chitaozinho-xororo-alo",
    titulo:        "Alô",
    artista:       "Chitãozinho & Xororó",
    tom:           "Bb",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1479,
    cifra: `[Intro] [Bb]  [Eb]  [F]  [Eb]

[Eb] [Bb]
Alô!
        [Eb]                      [F]
Tô ligando pra saber como você está
           [Gm]       [F]           [Eb]
Eu tava à toa e por isso resolvi ligar
        [Bb]                  [F]  [Eb]
Pra contar que sonhei com você

  [Bb]
Alô!
        [Eb]                   [F]
É tão bom ouvir de novo a sua voz
  [Gm]         [F]                  [Eb]
Apesar da distância que há entre nós
         [Bb]                    [F]
Tem uma coisa que eu preciso dizer

       [Cm]
Na verdade, eu liguei
      [Gm]                      [F] [Bb] [F]
Esse sonho inventei pra te ouvir
          [Cm]
E pra contar que chorei
           [Gm]                 [F] [Bb] [Eb]
Que a solidão tava doendo em mim

  [Bb] [Eb]
Oh,ah!
        [F]
Eu só menti pra não sofrer
[Eb]  [Bb] [Eb]
Oh,ah!
               [F]
Eu só queria te dizer
       [Cm]        [Eb]         [Bb]
Tô morrendo de saudade de você

( [Bb]  [Eb]  [F]  [Eb] )

 [Eb] [Bb]
Alô!
        [Eb]                      [F]
Tô ligando pra saber como você está
           [Gm]       [F]           [Eb]
Eu tava à toa e por isso resolvi ligar
        [Bb]                  [F] [Eb]
Pra contar que sonhei com você

  [Bb]
Alô!
        [Eb]                   [F]
É tão bom ouvir de novo a sua voz
  [Gm]         [F]                  [Eb]
Apesar da distância que há entre nós
         [Bb]                    [F]
Tem uma coisa que eu preciso dizer

       [Cm]
Na verdade, eu liguei
      [Gm]                      [F] [Bb] [F]
Esse sonho inventei pra te ouvir
          [Cm]
E pra contar que chorei
           [Gm]                 [F] [Bb] [Eb]
Que a solidão tava doendo em mim

  [Bb] [Eb]
Oh,ah!
        [F]
Eu só menti pra não sofrer
[Eb]  [Bb] [Eb]
Oh,ah!
               [F]
Eu só queria te dizer
       [Cm]        [Eb]         [Bb]
Tô morrendo de saudade de você


( [Bb]  [Gm]  [F]  [Cm]  [Gm] )
( [F]  [Bb]  [Gm]  [F]  [G] )

    [C]
Oh,ah!
[F]        [G]
Eu só menti pra não sofrer
[G]   [C]
Oh,ah!
[F]         [G]
  Eu só queria te dizer
       [Dm]          [F]        [C]
Tô morrendo de saudade de você
       [Dm]          [F]        [C]
Tô morrendo de saudade de você`,
  },
  {
    id:            "chitaozinho-xororo-ave-maria",
    titulo:        "Ave Maria",
    artista:       "Chitãozinho & Xororó",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4658,
    cifra: `[Intro] [G]  [Am/G]  [D7/F#]  [G]

[G]  [Am/G]  [D7/F#]  [G] ( [G]  [D/F#] )
A__ve   Mari____a

[Em]       [A/C#]   [D7]           [G]
Mãe abençoada,  Virgem   imaculada
[Em]          [A]         [D]
És santa semente do amor
[Em]          [Am]    [F#º]          [G]
Maria, Mãe de Deus, és cheia de graça
[C/E]           [Am]           [D7]         [G]
Santo    é o  fruto do teu ventre,  Jesus

[G/F]     [C]
Av e   Maria
[C#º]   [Gm/D]
Ave Maria
  [C]
Maria

[D]         [G]
Que concebeu amor
[Am]           [D]     [D/F#]
Em   Cristo, Nosso Senhor
[C#º]       [G].              [Am]
Madre generosa, rogai por nós
        [D7]
Os pecadores, Mãe querida
[C9]   [C9(13)]
Amém

  [G]
Amém`,
  },
  {
    id:            "chitaozinho-xororo-brincar-de-ser-feliz",
    titulo:        "Brincar de Ser Feliz",
    artista:       "Chitãozinho & Xororó",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4152,
    cifra: `[Intro] [Am]  [G]  [F]  [E7]
        [Am]  [G]  [F]  [E7]

[Tab - Solo]

E|-------------------------------------------|
B|-------------------------------------------|
G|-------------------------------------------|
D|----7-9-10---10-10-10---9-10-10/12---12-12-|
A|--7----------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|-------------------------------------------|
G|-------------------------------------------|
D|12-10-9h10p9-------------------------------|
A|-------------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|-------------------------------------------|
G|-------------------9-10-12-10-9-10-9h10p9--|
D|---------9-10-12--------------------------1|
A|--10-12------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|-------------------------------------------|
G|--9----------------------------------------|
D|2---12-10-12-10-9-10-9h10p9-----9----------|
A|-----------------------------12----12-11---|
E|-------------------------------------------|

E|---12-12-12----------------------------12-1|
B|-------------13-------------12-13-15-------|
G|-----------------14-12-14------------------|
D|-------------------------------------------|
A|-------------------------------------------|
E|-------------------------------------------|

E|2-12-12-12---------------------------------|
B|------------15-12--------------------------|
G|------------------12-----------------------|
D|-------------------------------------------|
A|-------------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|----------12-13-15-15-15-15-15-13-12-13-12-|
G|---12-14-----------------------------------|
D|-------------------------------------------|
A|-------------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|---12--------------------------------------|
G|14----14-12-14-12-10-12-10-9-10-9h10p9---9-|
D|---------------------------------------12--|
A|-------------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|-------10-12-13-12h13p12-------------------|
G|10-12--------------------14-13-------------|
D|-------------------------------------------|
A|-------------------------------------------|
E|-------------------------------------------|

E|-------------------------------------------|
B|--------9----------------------------------|
G|---9h10---10-9-----------------------------|
D|-------------------------------------------|
A|-------------------------------------------|
E|-------------------------------------------|

[Primeira Parte]

[Am]
Tranquei a porta do meu peito
 [G]
Depois joguei a chave fora
[F]
E bem depressa eu mandei
             [E7]
A solidão embora

[Am]
E nem dei o primeiro passo
 [G]
Já dei de cara com você
 [F]
Me olhando com aquele jeito
             [E7]
Que só você tem quando quer me vencer

[Pré-Refrão]

 [Am]
Dona das minhas vontades
  [G]
Com a chave da paixão
      [A7]
Tranquilamente vai e volta
                [Dm]
Entra e abre a porta do meu coração

        [E7]
Já sabe do meu ponto fraco
     [Am]
Das minhas manhas e desejos
    [B7]
Desliza sobre a minha pele
                [E7]
Põe na minha boca o mel dos seus beijos

[Refrão]

               [A]
Como é que eu posso me livrar das garras
            [Bm]
Desse amor gostoso?
               [E7]                    [A]    [E7]
O jeito é relaxar e começar tudo de novo

               [A]            [A7]
Como é que eu posso não querer
                   [D]       [Dm]
Se na verdade eu quero bis?
             [A]
Rolar com você
         [E7]                  [A]
Nem que seja pra brincar de ser feliz

 [A]
Como é que eu posso me livrar das garras
            [Bm]
Desse amor gostoso?
               [E7]                    [A]    [E7]
O jeito é relaxar e começar tudo de novo

              [A]         [A7]
Como é que eu posso não querer
                 [D]       [Dm]
Se na verdade eu quero bis?
             [A]
Rolar com você
         [E7]                  [A]
Nem que seja pra brincar de ser feliz

( [Am]  [F]  [G]  [E7] )
( [Am]  [F]  [G]  [E7] )

[Pré-Refrão]

 [Am]
Dona das minhas vontades
 [G]
Com a chave da paixão
      [A7]
Tranquilamente vai e volta
                [Dm]
Entra e abre a porta do meu coração
        [E7]
Já sabe do meu ponto fraco

     [Am]
Das minhas manhas e desejos
    [B7]
Desliza sobre a minha pele
                [E7]
Põe na minha boca o mel dos seus beijos

[Refrão]

               [A]
Como é que eu posso
                                 [Bm]
Me livrar das garras desse amor gostoso
               [E7]
O jeito é relaxar e começar
         [A]    [E7]
Tudo de novo

               [A]            [A7]
Como é que eu posso não querer
                   [D]      [Dm]
Se na verdade eu quero bis
             [A]
Rolar com você
         [E7]                  [A]
Nem que seja pra brincar de ser feliz

 [A]
Como é que eu posso
                                 [Bm]
Me livrar das garras desse amor gostoso
               [E7]
O jeito é relaxar e começar
         [A]    [E7]
Tudo de novo

              [A]         [A7]
Como é que eu posso não querer
                 [D]       [Dm]
Se na verdade eu quero bis
             [A]
Rolar com você
         [E7]                  [A]
Nem que seja pra brincar de ser feliz

[Final]

 [A]
Rolar com você
         [E7]                  [A]
Nem que seja pra brincar de ser feliz
 [A]
Rolar com você
         [E7]                  [A]
Nem que seja pra brincar de ser feliz`,
  },
  {
    id:            "chitaozinho-xororo-falando-as-paredes",
    titulo:        "Falando Às Paredes",
    artista:       "Chitãozinho & Xororó",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3316,
    cifra: `[Intro] [G]  [G/B]  [C]

E|-----------------------------------------------------|
B|--2---2----2-----------------------------------------|
G|-----------------------------------------------------|
D|--3---0h3--3-----------------------------------------|
A|--4---4----4-----------------------------------------|
E|-----------------------------------------------------|

E|-----------------------------------------------------|
B|--1-0--2---------------------------------------------|
G|--2-0------------------------------------------------|
D|-------3---------------------------------------------|
A|-------4---------------------------------------------|
E|-----------------------------------------------------|

( [G]  [D/F#]  [Em]  [Am]  [Am7]  [D7] )

E|--2--3--3/5------------------------------------------|
B|--3--5--5/7------------------------------------------|
G|-----------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

     [G]           [D/F#]        [Em]
Eu agora estou falando às paredes
       [Am]          [Am7]            [D7]  [B7]
Já não tenho mais você pra conversar
      [Em]         [Em7M]         [Em7]  [E6]
Na varanda está vazia aquela rede
         [Am]         [Am7]          [D7]
Onde às vezes eu deitava pra te amar

[Pré-Refrão]

      [G]          [D/F#]          [Em]
Você foi o amanhecer mais colorido
        [Am]        [Am7]          [D7]   [B7]
Sem sentido se tornou o entardecer
     [Em]       [Em7M]        [Em7]  [E6]
O vazio da saudade foi tirando
      [Am]         [Am7]        [D7]
A vontade que eu tinha de viver

[Refrão]

         [C]
Só Deus sabe tudo o que eu estou sentindo
       [Bm]
A tristeza dói no peito sem parar
          [Am]          [Am7]         [D7]
Quantas noites mal dormidas já passei
        [Am]        [Am7]         [D7]
Na esperança de ouvir você chegar

       [C]
Foram tantas cartas que eu perdi a conta
       [Bm]
E nos muros, quantas frases escrevi
        [Am]        [Am7]         [D7]
Na esperança que você leia só uma
      [Am]      [Am7]            [D7]
E me faça esquecer que te perdi

(  [G]  [D/F#]  [Em]  [Am]  [Am7]  [D7]  )
(  [G]  [D/F#]  [Em]  [Am]  [Am7]  [D7]  )

[Pré-Refrão]

      [G]          [D/F#]          [Em]
Você foi o amanhecer mais colorido
        [Am]        [Am7]          [D7]   [B7]
Sem sentido se tornou o entardecer
     [Em]       [Em7M]        [Em7]  [E6]
O vazio da saudade foi tirando
      [Am]         [Am7]        [D7]
A vontade que eu tinha de viver

[Refrão]

         [C]
Só Deus sabe tudo o que eu estou sentindo
       [Bm]
A tristeza dói no peito sem parar
          [Am]          [Am7]         [D7]
Quantas noites mal dormidas já passei
        [Am]        [Am7]         [D7]
Na esperança de ouvir você chegar

       [C]
Foram tantas cartas que eu perdi a conta
       [Bm]
E nos muros, quantas frases escrevi
        [Am]        [Am7]         [D7]
Na esperança que você leia só uma
      [Am]      [Am7]            [C]
E me faça esquecer que te perdi

( [G]  [G/B]  [C]  [G] )`,
  },
  {
    id:            "gino-e-geno-ela-chorou-de-amor",
    titulo:        "Ela chorou de amor",
    artista:       "Gino e Geno",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1410,
    cifra: `[Intro] [A]  [E]  [D]  [A]  [E]
        [A]  [E]  [D]  [A]  [E]

E|--------------------------------------------------------|
B|--------------------------------------------------------|
G|--------------------------------------------------------|
D|----------------------0-0-0-0-0-------------------------|
A|--0-0-0-0-----2-2-2-2-----------4-2-0-4-0---------------|
E|0---------0-0-----------------------------0-------------|

[Primeira Parte]

[A]                   [E]
Ela sentiu saudade, ela me ligou
[D]                      [A]       [E]
E por telefone, ela chorou, chorou
[A]                   [E]
Ela sentiu saudade, ela quer voltar
[D]                     [A]
E por telefone, eu vi ela chorar

[Refrão]

       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
                [E]      [D]              [A]
De quê que ela chorou? Ela chorou de amor
       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
                [E]      [D]              [A]
De quê que ela chorou? Ela chorou de amor

[Segunda Parte]

[A]                   [E]
Ela diz que sofreu, sofreu de solidão
[D]                     [A]       [E]
E por telefone, ela pediu perdão
[A]              [E]
E eu a perdoei pra não vê-la chorar
[D]                          [A]
Quando a gente ama é lindo perdoar

[Refrão]

       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor
       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor

[Terceira Parte]

[A]                   [E]
Ela diz que me ama, ela se soltou
[D]                      [A]     [E]
E por telefone, ela se entregou
[A]                 [E]
Ela diz que vem e eu vou esperar
[D]                    [A]
Pelo telefone não dá pra se amar

[Refrão]

       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor
       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor

( [A]  [E]  [D]  [A]  [E] )
( [A]  [E]  [D]  [A]  [E] )

[Primeira Parte]

[A]                   [E]
Ela sentiu saudade, ela me ligou
[D]                      [A]       [E]
E por telefone, ela chorou, chorou
[A]                   [E]
Ela sentiu saudade, ela quer voltar
[D]                     [A]
E por telefone, eu vi ela chorar

[Refrão]

       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor
       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor

        [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor
       [E]              [D]              [A]
Ela chorou de amor De quê que ela chorou?
           [E]           [D]              [A]
De quê que ela chorou? Ela chorou de amor

[Final] [A]  [E]  [D]  [A]  [E]`,
  },
  {
    id:            "gino-e-geno-apaixonado-por-voce",
    titulo:        "Apaixonado Por Você",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1349,
    cifra: `[Intro] [E]  [B7]  [E]  [B7]  [E]  [B7]  [E]  [B7]  [E]

[Primeira Parte]
                 [E]   [A]  [E]
Apaixonado por você
                     [B7]  [A]
E desta vez o trem pegou
                       [E]
Eu fui seguindo a tua trilha
                 [B7]
Fui cai numa armadilha
                   [E]    [B7]  [E]
Tô preso pelo seu amor

[Pré-Refrão]
                 [E]    [A]  [E]
Apaixonado por você
                          [B7]       [A]
E dessa vez não vai ter jeito, não
                      [E]
Quando me beija e me abraça
                   [B7]
Feito um gole de cachaça
                    [E] [E7] [A]
Me embriaga o coração
                        [E]
Quando me beija e me abraça
                    [B7]
Feito um gole de cachaça
                    [E] [B7]
Me embriaga o coração

[Refrão]
[E]                    [B7]
Ai ai ai o amor apareceu

Tava procurando ela
      [A]        [E]
Ela procurando eu
                        [B7]
Ai ai ai balanço virou mexeu
                [A]
O amor dessa menina
      [B7]          [E]  [B7] [E]
Bagunçou o peito meu

[Primeira Parte]
                 [E]  [A]  [E]
Apaixonado por você
                     [B7] [A]
E você doidinha por mim
                     [E]
Feito um fogo que pegou
                      [B7]
Quando agente se encontrou
               [E]   [B7] [E]
Acendeu o estopim

[Pré-Refrão]
                 [E]   [A]  [E]
Apaixonado por você
                        [B7]  [A]
Eu vou cantando essa canção
                    [E]
Sou feliz é desse jeito
                 [B7]
Com a viola no peito
                [E] [E7] [A]
E você no coração
                    [E]
Sou feliz é desse jeito
                [B7]
Com a viola no peito
               [E] [B7]
E você no coração

[Refrão]
[E]                    [B7]
Ai ai ai o amor apareceu
                  [A]
Tava procurando ela
       [B7]       [E]
Ela procurando eu
                        [B7]
Ai ai ai balanço virou mexeu
                 [A]
O amor dessa menina
      [B7]          [E]  [B7] [E]
Bagunçou o peito meu`,
  },
  {
    id:            "gino-e-geno-toalha-branca",
    titulo:        "Toalha Branca",
    artista:       "Gino e Geno",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2494,
    cifra: `[G]                           [D]
Todas as noites venho nessa casa
                           [G]
Para dar fim na minha tristeza
                         [D]
Todos sabem a hora que chego
            [C]        [D]          [G]
Deixa reservada num canto essa mesa
                           [D]
Manda retirar as outras cadeiras
                            [G]
Para ninguém sentar ao meu lado
            [A]                 [D]
Se ela não pode vir sentar comigo
               [C]                 [G]
Não senta ninguém nem mesmo um amigo
              [D]                [G]
Pra não ver chorar esse embriagado

            [D]                    [C]
Na toalha branca da mesa em que bebo
                              [G]
Escrevo o nome da mulher que amo
                            [D]
Fumo um cigarro e peço mais uma
                 [C]       [D]          [G]
Quando estou de fogo o resto eu derramo

[G]                         [D]
O dono do bar já sabe que eu
                               [G]
Não dou valor nenhum em minha vida
                         [D]
Sabe também o que aconteceu
           [C]           [D]      [G]
Porque perdi minha mulher querida
                           [D]
Por uma mentira ela foi embora
                                   [G]
Diz que também chora magoada e ferida
               [A]                     [D]
Sofro aqui sem ela essa dor que não sara
            [C]              [G]
Aqui neste bar já enchi a cara
              [D]                  [G]
Mas não esqueci o amor dessa bandida`,
  },
  {
    id:            "gino-e-geno-coracao-cigano",
    titulo:        "Coração Cigano",
    artista:       "Gino e Geno",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1681,
    cifra: `([G])                    [C]                        [G]
    Mais uma noite que vem, (mais uma noite que vem)
                    [C]                       [G]
 E eu aqui sem ninguém, (e eu aqui sem ninguém)
                 [C]                   [G]
 O coração no sufoco, de amor quase louco
            [D]        [G]   [C]   ([G])
 Espere ela não vem
                   [C]                      [G]
 E toda noite é assim, (e toda noite é assim)
                    [C]                       [G]
 Ela nem lembra de mim, (ela nem lembra de mim)
                   [C]                    [G]
 Eu sozinho nesta casa, a solidão me arrasa
         [D]       [G]   [C]   ([G])
 A vida tá tão ruim

                  [C]
 Meu coração é cigano, (meu coração é cigano)
                   [G]
 Mas é cigano acampado,
                      [D]                              [C]
 E quando ele se apaixona, bate um toco e baixa a lona
                   [G]   [C]  ([G])
 E vira burro empacado
                  [C]
 Meu coração é cigano, (meu coração é cigano)
                   [G]
 Mas é cigano acampado,
                        [D]                          [C]
 E qualquer hora ele empaca, eu chuto o pau da barraca
            [D]            [G]    [C]    ([G])
 E deixo o coração de lado
                  [C]                     [G]
 Já pedi meu coração, (já pedi meu coração)
                    [C]                       [G]
 Pra sair dessa ilusão, (pra sair dessa ilusão)
                 [C]                    [G]
 Levantar acampamento, ir a favor do vento
        [D]         [G]    [C]    [G]
 Buscar outra paixão
                       [C]                                 [G]
 Mas ele insiste em bater, (tum, tum, tum,    tum, tum, tum)
                     [C]                        [G]
 Na mesma tecla e dizer, (na mesma tecla e dizer)
                      [C]                     [G]
 Que ela é tudo que quer e que sem essa mulher
         [D]       [G]   [C]   [G]
 Ele prefere morrer

                  [C]
 Meu coração é cigano, (meu coração é cigano)
                   [G]
 Mas é cigano acampado,
                      [D]                              [C]
 E quando ele se apaixona, bate um toco e baixa a lona
                   [G]   [C]  [G]
 E vira burro empacado
                  [C]
 Meu coração é cigano, (meu coração é cigano)
                   [G]
 Mas é cigano acampado,
                        [D]                          [C]
 E qualquer hora ele empaca, eu chuto o pau da barraca
            [D]            [G]  [C]  [G]
 E deixo o coração de lado`,
  },
  {
    id:            "gino-e-geno-bebo-pa-carai",
    titulo:        "Bebo pa carai",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3498,
    cifra: `[Intro]  [E]  [B7]  [E]  [E7]  [A]  [E]  [B7]  [E]

[Primeira Parte]
                                            [B7]
Toda vez que agente briga ela diz que vai embora
                               [A]          [E]
Aquela mala me assusta, pronta do lado de fora.
                             [E7]                   [A]
Quando a gente quebra o pau, sempre eu fico e ela sai
                 [E]           [B7]         [E]
Fico doido de saudade, ai eu bebo pa carai

[Refrão]
                                     [B7]
Ai eu bebo, ai eu bebo, bebo pa carai
               [A]         [E]
Bebo pa carai, bebo pa carai
                                  [B7]
Ai eu bebo, ai eu bebo, bebo pa carai
                         [E]      [A]   [E]
Bebo pa carai, bebo pa carai

(  [E]  [B7]  [E]  [E7]  [A]  [E]  [B7]  [E]  )

[Segunda Parte]
                                      [B7]
De repente ela volta toda cheia de alegria
                          [A]            [E]
Nem parece que a gente brigou naquele dia
                                [E7]           [A]
Eu boto a mala pra dentro e pra cama a gente vai
                  [E]           [B7]        [E]
E depois de tanto love, ai eu bebo pa carai

[Refrão]
                                     [B7]
Ai eu bebo, ai eu bebo, bebo pa carai
               [A]         [E]
Bebo pa carai, bebo pa carai
                                  [B7]
Ai eu bebo, ai eu bebo, bebo pa carai
                         [E]      [A]   [E]
Bebo pa carai, bebo pa carai
                                                     [B7]
Depois de uma semana em casa, quero um trenzinho diferente
                               [A]           [E]
Uma coisa mais novinha, dessas que anima a gente
                                         [E7]           [A]
Toda vez que eu dou uma volta, quando eu chego a casa cai
                 [E]           [B7]        [E]
Outra vez aquela mala, ai eu bebo pa carai

(  [E]  [A]  [B7]  [E]  )`,
  },
  {
    id:            "leandro-leonardo-nao-aprendi-dizer-adeus",
    titulo:        "Não Aprendi Dizer Adeus",
    artista:       "Leandro & Leonardo",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3311,
    cifra: `[Intro] [C]  [G]  [D7]  [G] (Pausa)

[Tab - Intro]

Parte 1 de 4
   [C]
E|---0-0-0----0-0-0----0-0-0----0-0-0-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---0-0-0----0-0-0----0-0-0----0-0-0-------|
D|---2-2-2----2-2-2----2-2-2----2-2-2-------|
A|-3-----------------3----------------------|
E|----------3-----------------3-------------|

Parte 2 de 4
   [G]
E|---3-3-3----3-3-3----3-3-3----3-3-3-------|
B|---3-3-3----3-3-3----3-3-3----3-3-3-------|
G|---0-0-0----0-0-0----0-0-0----0-0-0-------|
D|---0-0-0--0-0-0-0----0-0-0--0-0-0-0-------|
A|------------------------------------------|
E|-3-----------------3----------------------|

Parte 3 de 3
   [D7]
E|---2-2-2----2-2-2----2-2-2----2-2-2-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---2-2-2----2-2-2----2-2-2----2-2-2-------|
D|-0-----------------0----------------------|
A|----------0-----------------0-------------|
E|------------------------------------------|

Parte 4 de 4
   [G]
E|---3-3-3----3-3-3--3----------------------|
B|---3-3-3----3-3-3--3----------------------|
G|---0-0-0----0-0-0--0----------------------|
D|---0-0-0--0-0-0-0--0----------------------|
A|-------------------2----------------------|
E|-3-----------------3----------------------|

[Tab - Solo Intro]

Parte 1 de 2
E|-2/3-3-3-3-3-3--3--2/3-3-3-3-3-3--6/7---------------|
B|----------------------------------------------------|
G|-3/4-4-4-4-4-4--5--4/5-5-5-5-5-5--6/7---------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
E|-10--8-7------7-5---10-10-7-7-5-5-3-----------------|
B|-12-10-8-10-8---------------------------------------|
G|---------11-9-7-5---11-11-7-7-5-5-4-----------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

[Tab - Primeira Parte]

Parte 1 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

Parte 2 de 4
   [C]
E|---0-0-0----0-0-0----0-0-0----0-0-0-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---0-0-0----0-0-0----0-0-0----0-0-0-------|
D|---2-2-2----2-2-2----2-2-2----2-2-2-------|
A|-3-----------------3----------------------|
E|----------3-----------------3-------------|

Parte 3 de 4
   [D7]
E|---2-2-2----2-2-2----2-2-2----2-2-2-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---2-2-2----2-2-2----2-2-2----2-2-2-------|
D|-0-----------------0----------------------|
A|----------0-----------------0-------------|
E|------------------------------------------|

Parte 4 de 4
   [G]
E|---3-3-3----3-3-3--3----------------------|
B|---3-3-3----3-3-3--3----------------------|
G|---0-0-0----0-0-0--0----------------------|
D|---0-0-0--0-0-0-0--0----------------------|
A|-------------------2----------------------|
E|-3-----------------3----------------------|

                    [G]
Não aprendi dizer adeus
(Passagem)          [C]
Não sei se vou me acostumar
                         [D7]
Olhando assim nos olhos teus

Sei que vai ficar nos meus
                 [G]  (Pausa)
A marca desse olhar

[Segunda Parte]

[Tab - Segunda Parte]

Parte 1 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

Parte 2 de 4
   [C]
E|---0-0-0----0-0-0----0-0-0----0-0-0-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---0-0-0----0-0-0----0-0-0----0-0-0-------|
D|---2-2-2----2-2-2----2-2-2----2-2-2-------|
A|-3-----------------3----------------------|
E|----------3-----------------3-------------|

Parte 3 de 4
   [G]                 [D7]
E|---3-3-3----3-3-3----2-2-2---2-2-2--------|
B|---3-3-3----3-3-3----1-1-1---1-1-1--------|
G|---0-0-0----0-0-0----2-2-2---2-2-2--------|
D|---0-0-0--0-0-0-0--0----------------------|
A|---------------------------0--------------|
E|-3----------------------------------------|

Parte 4 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

                      [G]
Não tenho nada pra dizer
(Passagem)                   [C]
Só o silêncio vai falar por mim
                        [G]
Eu sei guardar a minha dor
                  [D7]
Apesar de tanto amor vai ser
          [G]
Melhor assim

[Refrão]

[Tab - Refrão]

Parte 1 de 4
[C]                 [D]
E|---0-0-0----0-0-0----2-2-2----2-2-2-------|
B|---1-1-1----1-1-1----3-3-3----3-3-3-------|
G|---0-0-0----0-0-0----2-2-2----2-2-2-------|
D|---2-2-2----2-2-2--0----------------------|
A|-3--------------------------0-------------|
E|----------3-------------------------------|

Parte 2 de 4
   [Bm]                [Em]
E|---2-2-2----2-2-2----0-0-0----0-0-0-------|
B|---3-3-3----3-3-3----0-0-0----0-0-0-------|
G|---4-4-4----4-4-4----0-0-0----0-0-0-------|
D|---4-4-4----4-4-4----2-2-2----2-2-2-------|
A|-2--------------------------2-------------|
E|----------2--------0----------------------|

Parte 3 de 4
   [D7]
E|---2-2-2----2-2-2----2-2-2----2-2-2-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---2-2-2----2-2-2----2-2-2----2-2-2-------|
D|-0-----------------0----------------------|
A|----------0-----------------0-------------|
E|------------------------------------------|

Parte 4 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

(Passagem)          [C]
Não aprendi dizer adeus
                   [D]
Mas tenho que aceitar
                  [Bm]
Que amores vêm e vão
               [Em]
São aves de verão
             [D7]
Se tens que me deixar
                  [G]
Que seja, então, feliz

(Passagem)          [C]
Não aprendi dizer adeus
               [D]
Mas deixo você ir
                   [Bm]
Sem lágrimas no olhar
                  [Em]
Se o adeus me machucar
                  [D7]
O inverno vai passar
           [G]
E apaga a cicatriz

( [C]  [G]  [D7]  [G]  (Pausa))

[Segunda Parte]

[Tab - Segunda Parte]

Parte 1 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

Parte 2 de 4
   [C]
E|---0-0-0----0-0-0----0-0-0----0-0-0-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---0-0-0----0-0-0----0-0-0----0-0-0-------|
D|---2-2-2----2-2-2----2-2-2----2-2-2-------|
A|-3-----------------3----------------------|
E|----------3-----------------3-------------|

Parte 3 de 4
   [G]                 [D7]
E|---3-3-3----3-3-3----2-2-2---2-2-2--------|
B|---3-3-3----3-3-3----1-1-1---1-1-1--------|
G|---0-0-0----0-0-0----2-2-2---2-2-2--------|
D|---0-0-0--0-0-0-0--0----------------------|
A|---------------------------0--------------|
E|-3----------------------------------------|

Parte 4 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

                      [G]
Não tenho nada pra dizer
(Passagem)                   [C]
Só o silêncio vai falar por mim
                        [G]
Eu sei guardar a minha dor
                  [D7]
Apesar de tanto amor vai ser
          [G]
Melhor assim

[Refrão]

[Tab - Refrão]

Parte 1 de 4
[C]                 [D]
E|---0-0-0----0-0-0----2-2-2----2-2-2-------|
B|---1-1-1----1-1-1----3-3-3----3-3-3-------|
G|---0-0-0----0-0-0----2-2-2----2-2-2-------|
D|---2-2-2----2-2-2--0----------------------|
A|-3--------------------------0-------------|
E|----------3-------------------------------|

Parte 2 de 4
   [Bm]                [Em]
E|---2-2-2----2-2-2----0-0-0----0-0-0-------|
B|---3-3-3----3-3-3----0-0-0----0-0-0-------|
G|---4-4-4----4-4-4----0-0-0----0-0-0-------|
D|---4-4-4----4-4-4----2-2-2----2-2-2-------|
A|-2--------------------------2-------------|
E|----------2--------0----------------------|

Parte 3 de 4
   [D7]
E|---2-2-2----2-2-2----2-2-2----2-2-2-------|
B|---1-1-1----1-1-1----1-1-1----1-1-1-------|
G|---2-2-2----2-2-2----2-2-2----2-2-2-------|
D|-0-----------------0----------------------|
A|----------0-----------------0-------------|
E|------------------------------------------|

Parte 4 de 4
   [G]
E|---3-3-3----3-3-3----3---3---3---3--------|
B|---3-3-3----3-3-3----3---3---3---3--------|
G|---0-0-0----0-0-0----0---0---0---0--------|
D|---0-0-0--0-0-0-0-------------------------|
A|---------------------------0---2----------|
E|-3-----------------3---3------------------|

(Passagem)          [C]
Não aprendi dizer adeus
                   [D]
Mas tenho que aceitar
                  [Bm]
Que amores vêm e vão
             [Em]
São aves de verão
                   [D7]
Se tens que me deixar
                  [G]
Que seja, então, feliz

(Passagem)          [C]
Não aprendi dizer adeus
               [D]
Mas deixo você ir
                   [Bm]
Sem lágrimas no olhar
                [Em]
Se adeus me machucar
                  [D7]
O inverno vai passar
           [G]
E apaga a cicatriz

(Passagem)          [C]
Não aprendi dizer adeus
                   [D]
Mas tenho que aceitar
                  [Bm]
Que amores vêm e vão
             [Em]
São aves de verão
                   [D7]
Se tens que me deixar
                  [G]
Que seja, então, feliz

(Passagem)          [C]
Não aprendi dizer adeus
               [D]
Mas deixo você ir
                   [Bm]
Sem lágrimas no olhar
                [Em]
Se adeus me machucar
                  [D7]
O inverno vai passar
           [G]
E apaga a cicatriz`,
  },
  {
    id:            "leandro-leonardo-sublime-renuncia",
    titulo:        "Sublime Renúncia",
    artista:       "Leandro & Leonardo",
    tom:           "B",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1854,
    cifra: `[Intro] [Bm]  [F#7]  [Bm]  [D]
        [A]  [A°]  [Bm]  [A]  [D]

[Tab - Intro]

E|-2-2-2-2-2--0---------0-2-0-2-0..-------------------|
B|-3-3-3-3-3--2--3-2-3--2-3-2-3-2..-------------------|
G|---------------4-3-4--------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

E|-2-2-2-2-2-2-0-------0-2-3-2--3-2-0---0-5-0...------|
B|-----------3-2-3-2-3-2-3-5-3--5-3-2-3-2-2-2...------|
G|-3-3-3-3-3-----4-3-4----------------4---------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

E|-2p0..--2...----5...-0...-2...--5-3-2-0-2-----------|
B|-2....--3...----2...-2...-3...----------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

           [Bm]              [F#m]        [Em]
Hoje meus dias são de tristeza e solidão
              [A]            [G]             [D]
Trago em minh'alma uma profunda conformação
       [Bm]              [F#m]    [Em]
Renunciei meu grande amor um dia
            [A]                [G]          [D]
Nos braços dela em que tão triste eu dizia

           [F#]                          [Bm]
Beija nos lábios do meu amor com frenesi
                  [Em]             [A]       [D]  [F#]
Não chores por favor, porque preciso partir

[Refrão]

[Bm]                        [A]
   Este foi o meu último beijo
                  [G]
Satisfiz o meu desejo
                  [F#]  [Bm]
O pior foi te perder
                   [A]
Resiguinemos ó querida
                  [G]
Não lamentemos a vida
 [A]        [G]         [D]
Nosso destino é sofrer

[Interlúdio]

[F#]                          [Bm]
   "Beijando o batom que tocava seus lábios
          [A]
Sufoco serenamente
                      [D]
A dor pungente que dilacera minh'alma

Com os olhos chorosos e o coração em pedaços

Ainda encontro forças

Para suportar esta sublime renúncia"

[Segunda Parte]

     [Bm]            [F#m]
A renúncia é tão triste
 [Em]                [D]
Nada mais posso fazer
 [Em]                 [D]
Nosso amor já não existe
 [E]                  [A]
Teve que um dia morrer

[G]
O anel que tu deixastes
    [A]             [D]
Em cima da penteadeira
 [Bm]                   [E]
Vai lembrar o nosso adeus
[A]              [D]
  A vida inteira

[Refrão]

[Bm]                        [A]
   Este foi o meu último beijo
                  [G]
Satisfiz o meu desejo
                  [F#]  [Bm]
O pior foi te perder
                   [A]
Resiguinemos ó querida
                  [G]
Não lamentemos a vida
 [A]        [G]         [D]
Nosso destino é sofrer`,
  },
  {
    id:            "leandro-leonardo-e-por-voce-que-canto",
    titulo:        "É Por Você Que Canto",
    artista:       "Leandro & Leonardo",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4790,
    cifra: `[Intro] [Em]

[Tab - Intro]

E|-0-3-2-3----------------------------------|
B|------------------------------------------|
G|------------------------------------------| (6x)
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[Tab - Primeira Parte]

E|---5---5-2-5-0-5---5-4-5-2-5---2----------|
B|-3---3-----------3-----------3------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-0-3-2-3-0--7-5-7---7-----0---------------|
B|------------------8---7-8-----------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|
                     [D]
Quanto mais o tempo passa
                    [Em]
Mais eu gosto de você
          [D]        [C]      [G]
Este seu jeito de me abraçar
                     [C]       [G]
Este seu jeito de olhar pra mim
         [C]
Foi que fez com que eu gostasse
           [G]             [D/F#]  [Em]
Logo de você tanto assim
[G]          [D]  [D#°]     [Em]
  É por você     que canto

[Refrão]

                       [D]
Quanto mais você me abraça
                     [Em]
Mais eu quero ter você
             [D]    [C]     [G]
Cada beijo que você me dá
                       [C]   [G]
Faz meu corpo todo estremecer
       [C]
Sem você eu sei que não teria
           [G]            [D/F#]  [Em]
Nenhuma razão pra viver
[G]          [D]  [D#°]     [Em]
  É por você     que canto

[Segunda Parte]

                   [D]
Pode tudo transformar
                 [Em]
Pode tudo se perder
                [D]   [C]      [G]
Pode o mundo virar contra mim
               [C]        [G]
Aconteça seja lá o que for
      [C]
Cada dia que passar
                      [G]            [D/F#]  [Em]
Eu quero ainda muito mais seu amor
[G]          [D]  [D#°]     [Em]
  É por você     que canto

( [D]  [Em]  [D]  [Em] )

[Refrão]

                       [D]
Quanto mais você me abraça
                     [Em]
Mais eu quero ter você
             [D]    [C]     [G]
Cada beijo que você me dá
                       [C]   [G]
Faz meu corpo todo estremecer
       [C]
Sem você eu sei que não teria
           [G]            [D/F#]  [Em]
Nenhuma razão pra viver
[G]          [D]  [D#°]     [Em]
  É por você     que canto

[Segunda Parte]

                   [D]
Pode tudo transformar
                 [Em]
Pode tudo se perder
                [D]   [C]      [G]
Pode o mundo virar contra mim
               [C]        [G]
Aconteça seja lá o que for
      [C]
Cada dia que passar
                      [G]            [D/F#]  [Em]
Eu quero ainda muito mais seu amor
[G]          [D]      [Em]   [G]
  É por você que canto
         [D]  [D#°]     [Em]
É por você     que canto`,
  },
  {
    id:            "leandro-leonardo-pense-em-mim",
    titulo:        "Pense Em Mim",
    artista:       "Leandro & Leonardo",
    tom:           "B",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1298,
    cifra: `[Intro] [B]  [G#m]  [E]  [F#]
        [B]  [G#m]  [E]  [F#]

[TAB - Intro]

Parte 1 de 2
    [B]              [G#m]          [E]                [F#]
E|-------------------------------------------6-7-6------|
B|-/7------7---7-7h9----7/9-9-9-9--------7-9------------|
G|----8------8-------8-------------9---9----------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|

Parte 2 de 2
    [B]              [G#m]          [E]                [F#]
E|-------------------------------------------6-7-6------|
B|-/7------7---7-7h9----7/9-9-9-9--------7-9-------9-7--|
G|----8------8-------8-------------9---9----------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|

[Primeira Parte]

[B]
  Em vez de você
                [G#m]
Ficar pensando nele
[B]
  Em vez de você
                   [G#m]
Viver chorando por ele

[Refrão]

          [E]
Pense em mim
           [F#]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele

          [E]
Pense em mim
           [F#]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele

    [E]    [F#]
Pra ele!
              [B]    [F#7]
Não chore por ele!

[Segunda Parte]

[B]
  Se lembre que eu há muito tempo
   [G#m]
Te amo! Te amo! Te amo!
[B]                     [G#m]
  Quero fazer você feliz
         [E]                [F#]
Vamos pegar o primeiro avião
        [B]            [G#m]
Com destino à felicidade
         [E]   [F#]
A felicidade
             [B]  [B7]
Pra mim é você

[Refrão]

          [E]
Pense em mim
           [F#]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele

          [E]
Pense em mim
           [F#7/E]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele

    [E]    [F#]
Pra ele!
              [B]
Não chore por ele!

( [B]  [G#m]  [E]  [F#] )
( [B]  [G#m]  [E]  [F#] )

[Segunda Parte]

[B]
  Se lembre que eu há muito tempo
   [G#m]
Te amo! Te amo! Te amo!
[B]                     [G#m]
  Quero fazer você feliz
         [E]                [F#]
Vamos pegar o primeiro avião
        [B]            [G#m]
Com destino à felicidade
         [E]   [F#]
A felicidade
             [B]  [B7]
Pra mim é você

[Refrão Final]

          [E]
Pense em mim
           [F#]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele

          [E]
Pense em mim
           [F#7/E]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele
    [E]    [F#]
Pra ele!
              [B]    [B7]
Não chore por ele!

          [E]
Pense em mim
           [F#]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele

          [E]
Pense em mim
           [F#7/E]
Chore por mim
          [B]
Liga pra mim
                  [G#m]
Não, não liga pra ele
    [E]    [F#]
Pra ele!
              [B]
Não chore por ele!`,
  },
  {
    id:            "leandro-leonardo-eu-juro",
    titulo:        "Eu Juro",
    artista:       "Leandro & Leonardo",
    tom:           "F",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4448,
    cifra: `[Intro] [F]  [Dm]  [Am]  [Bb/C]  [C7]
        [F]  [Dm]  [Am]  [Bb/C]  [C7]

[Primeira Parte]

[F]            [Bb/D]   [C/E]   [F]
  Eu vejo a luz do teu olhar
          [Bb]    [C]   [Dm]
Como uma noite de luar
             [Bb]          [Bb/C]  [C7]
Luz que me guia onde eu for

   [F]         [Bb/D]  [C/E]   [F]
Você, meu motivo pra sorrir
         [Bb/D]   [C/E]   [Dm]
Caminho certo pra seguir
          [F/C]
Saiba que é só teu
 [G/B]             [Bb/C]  [C7]
Meu verdadeiro amor

[Refrão]

    [F]             [Dm]
Eu juro, por mim mesmo
                    [Am]
Por Deus, por meus pais
         [Bb]  [C7]
Vou te amar
    [F]               [Dm]              [Am]
Eu juro, que esse amor não acaba jamais
         [Bb]  [C]
Vou te amar

   [Gm]              [Bb/C]     [C7]
É tanto querer, é tanta paixão
   [Gm]               [Bb/C]    [C7]
Te amo do fundo do meu coração
    [F]
Eu juro

( [Dm]  [Am]  [Bb/C]  [C7] )

[Segunda Parte]

[F]          [Bb/D]  [C/E]   [F]
  Um homem e   uma mulher
             [Bb]    [C]   [Dm]
Juntos pro que der e vier
        [Bb]             [Bb/C]  [C7]
A meia luz, a dois, a sós

   [F]      [Bb/D]  [C/E]    [F]
Então, a gente vai sonhar
         [Bb/D] [C/E] [Dm]
E conseguir realizar
              [F/C]
Um mundo de amor sem fim
     [G/B]              [Bb/C]  [C7]
Porque só depende de nós

[Refrão]

    [F]             [Dm]
Eu juro, por mim mesmo
                    [Am]
Por Deus, por meus pais
         [Bb]  [C7]
Vou te amar
    [F]               [Dm]              [Am]
Eu juro, que esse amor não acaba jamais
         [Bb]  [C]
Vou te amar

   [Gm]              [Bb/C]     [C7]
É tanto querer, é tanta paixão
   [Gm]               [Bb/C]    [C7]
Te amo do fundo do meu coração

Eu juro

[Solo] [F]  [Dm]  [Am]  [Bb/C]  [C7]

[Tab - Solo]

Parte 1 de 5
E|------------------------------------------|
B|------11/13--10--11--13--11--10-----------|
G|------------------------------------------|
D|--10--------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 5
E|------------------------------------------|
B|--8b10r8--6--5----------------------------|
G|----------------5--7-----5\---------7-----|
D|----------------------7------7-8-10---10\-|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 5
E|--------------15--13--15--17--19--20------|
B|----------13------------------------------|
G|------10----------------------------------|
D|--10--------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 4 de 5
E|--18-17-15b17r15-13-12--15----------------|
B|----------------------------15b17------13-|
G|-----------------------------------14-----|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 5 de 5
E|------13--20b22--20b22r20-----------------|
B|--15--------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Refrão]

    [F]             [Dm]
Eu juro, por mim mesmo
                    [Am]
Por Deus, por meus pais
         [Bb]  [C7]
Vou te amar
    [F]               [Dm]              [Am]
Eu juro, que esse amor não acaba jamais
         [Bb]  [C]
Vou te amar

   [Gm]              [Bb/C]     [C7]
É tanto querer, é tanta paixão
   [Gm]               [Bb/C]    [C7]
Te amo do fundo do meu coração
    [F]  [Dm]
Eu juro
    [Bb]  [C7]
Eu juro

[Final] [F]`,
  },
  {
    id:            "leandro-leonardo-um-sonhador",
    titulo:        "Um Sonhador",
    artista:       "Leandro & Leonardo",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4301,
    cifra: `[Intro] [Dm]  [G7]  [C]
        [Dm]  [G7]  [C]  [F]  [C]

[Tab - Solo]

Parte 1 de 2
                     [Dm]  [G7]                    [C]
E|----------------------------------------------------|
B|------8--------------------------8------------------|
G|--7/9---9/7-5-----5h7~------7/9----9/7-5------5~----| (2x)
D|--------------7-5-------------------------7-5-------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
      [F]       [C]
E|----------------------------------------------------|
B|--8b10--8-6-5---------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

                     [C]
Eu não sei pra onde vou
                     [Dm]
Pode até não dar em nada
                    [Bb]  [G7]
Minha vida segue o sol
                       [C]   [F]  [C]
No horizonte dessa estrada

Eu nem sei mesmo quem sou
                  [Dm]
Nessa falta de carinho
                        [Bb]  [G7]
Por não ter um grande amor
                 [C]    [C7]
Aprendi à ser sozinho

[Pré-Refrão]

                     [F]
E onde o vento me levar
                   [C]
Vou abrir meu coração
                    [Dm]
Pode ser que num caminho
                      [F]
Num atalho ou num sorriso
     [G7]          [C]  [C7]
Aconteça uma paixão

[Refrão]

   [F]  [G]  [Am]
E vou achar
                 [F]
Num toque do destino
                  [C]
O brilho de um olhar
              [G7]
Sem medo de amar
     [F]   [G]  [Am]
Não vou deixar
                [F]
De ser um sonhador
                    [C]
Pois sei vou encontrar
                      [G7]  [F]
No fundo dos meus sonhos
   [G7]          [C]
O meu grande amor

[Solo] [Dm]  [G7]  [C]
       [Dm]  [G7]  [C]  [C7]

[Tab - Solo]

                     [Dm]  [G7]                    [C]
E|----------------------------------------------------|
B|------8--------------------------8------------------|
G|--7/9---9/7-5-----5h7~------7/9----9/7-5------5~----| (2x)
D|--------------7-5-------------------------7-5-------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Pré-Refrão]

                     [F]
E onde o vento me levar
                   [C]
Vou abrir meu coração
                    [Dm]
Pode ser que num caminho
                      [F]
Num atalho ou num sorriso
     [G7]          [C]  [C7]
Aconteça uma paixão

[Refrão]

   [F]  [G]  [Am]
E vou achar
                 [F]
Num toque do destino
                  [C]
O brilho de um olhar
              [G7]
Sem medo de amar
      [F]  [G]  [Am]
Não vou deixar
                [F]
De ser um sonhador
                    [C]
Pois sei vou encontrar
                      [G7]  [F]
No fundo dos meus sonhos
   [G7]          [C]
O meu grande amor

[Final]

[Tab - Final]

Parte 1 de 3
E|--10b12---------------------------------------------|
B|--------13~--10-------13----------------------------|
G|----------------12/14-------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 3
E|--15b17-15~-----------------------------------------|
B|-------------15b17r15-13---------13-----------------|
G|--------------------------12/14---------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 3 de 3
E|-------8-------8------------------------------------|
B|--9/10---10-8~---8-6~----------8~-------------------|
G|----------------------5-7-7/9-----------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Dm]    [F]           [C]
   O meu grande amor
[Dm]    [F]  [G7]          [C]
   O meu    grande amor

( [F]  [Em]  [Dm]  [C] )`,
  },
  {
    id:            "leandro-leonardo-talisma",
    titulo:        "Talismã",
    artista:       "Leandro & Leonardo",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4243,
    cifra: `[Intro] [A]  [D]
        [A]  [E]  [E7]

[Primeira Parte]

 [A]                         [C#7]
Sabe, quanto tempo não te vejo
                  [D]
Cada vez você distante
                    [G]
Mais eu gosto de você
 [E]       [E7]
Por que?

 [A]                         [C#7]
Sabe, eu pensei que fosse fácil
                     [D]
Esquecer seu jeito frágil
[Bm]                    [E]
   De se dar sem receber
 [Bm]   [E7]
Só você

[Pré-Refrão]

[D]                    [A]
  Só você que me ilumina
                  [D]
Meu pequeno talismã
                    [A]
Como é doce essa rotina
                    [D]
De te amar toda manhã

                     [F#m]
Nos momentos mais difíceis
                [D]
Você é o meu divã
                       [F#m]
Nosso amor não tem segredos
                  [D]
Sabe tudo de nós dois
        [G]           [E7]
E joga fora nossos medos

[Refrão]

 [D]       [E]            [A]
Vai, saudade, diz pra ela
 [D]      [E]         [F#m]
Diz pra ela aparecer
 [D]       [E]            [A]
Vai, saudade, vê se troca
         [F#m]        [D]
A minha solidão por ela
       [Bm]  [E]      [A]
Pra valer  o meu viver

[Interlúdio] [A]  [D]
             [A]  [E]  [E7]

[Pré-Refrão]

[D]                    [A]
  Só você que me ilumina
                  [D]
Meu pequeno talismã
                    [A]
Como é doce essa rotina
                    [D]
De te amar toda manhã

                     [F#m]
Nos momentos mais difíceis
                [D]
Você é o meu divã
                       [F#m]
Nosso amor não tem segredos
                  [D]
Sabe tudo de nós dois
        [G]           [E7]
E joga fora nossos medos

[Refrão]

 [D]       [E]            [A]
Vai, saudade, diz pra ela
 [D]      [E]         [F#m]
Diz pra ela aparecer
 [D]       [E]            [A]
Vai, saudade, vê se troca
         [F#m]        [D]
A minha solidão por ela
       [Bm]  [E]      [A]    [A7]
Pra valer  o meu viver

 [D]       [E]            [A]
Vai, saudade, diz pra ela
 [D]      [E]         [F#m]
Diz pra ela aparecer
 [D]       [E]            [A]
Vai, saudade, vê se troca
         [F#m]        [D]
A minha solidão por ela
       [Bm]  [E]      [A]
Pra valer  o meu viver`,
  },
  {
    id:            "leandro-leonardo-temporal-de-amor",
    titulo:        "Temporal de Amor",
    artista:       "Leandro & Leonardo",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1044,
    cifra: `[Intro] [A]  [E]  [F#m]  [D]
        [A]  [E]  [A]  [E]

[Primeira Parte]

  [A]                [E]
Chuva no telhado, vento no portão
  [D]                  [A]  [E]
E eu aqui nesta solidão
 [A]                   [E]
Fecho a janela, tá frio o nosso quarto
  [D]                    [A]
E eu aqui sem o teu abraço

[Segunda Parte]

 [D]                     [E]
Doido pra sentir seu cheiro
 [Fº]                   [F#m]
Doido pra sentir seu gosto
 [D]                    [E]                [D]
Louco pra beijar seu beijo matar a saudade
              [A]
E esse meu desejo

 [D]                [E]
Vê se não demora muito
 [Fº]         [F#m]
Coração tá reclamando
  [D]                 [E]                [D]
Traga logo o seu carinho, tô aqui sozinho
           [A]    [E7]
Tô te esperando

[Refrão]

          [A]
Quando você chegar
[E]                    [F#m]  [D]
 Tire essa roupa molhada
              [A]    [E]
Quero ser a toalha
              [A]   [E7]
E o seu cobertor

          [A]
Quando você chegar
[E]                   [F#m]  [D]
  Mando a saudade sair
          [A]           [E]
Vai trovejar vai cair
                 [D]  [E7]
Um temporal de amor

( [A]  [E]  [D]  [A]  [Bm]  [E] )

[Segunda Parte]

 [D]                     [E]
Doido pra sentir seu cheiro
 [Fº]                   [F#m]
Doido pra sentir seu gosto
 [D]                    [E]                [D]
Louco pra beijar seu beijo matar a saudade
              [A]
E esse meu desejo

 [D]                [E]
Vê se não demora muito
 [Fº]         [F#m]
Coração tá reclamando
  [D]                 [E]                [D]
Traga logo o seu carinho, tô aqui sozinho
           [A]    [E7]
Tô te esperando

[Refrão]

          [A]
Quando você chegar
[E]                    [F#m]  [D]
 Tire essa roupa molhada
              [A]    [E]
Quero ser a toalha
              [A]   [E7]
E o seu cobertor

          [A]
Quando você chegar
[E]                   [F#m]  [D]
  Mando a saudade sair
          [A]           [E]
Vai trovejar vai cair
                 [D]  [E7]
Um temporal de amor

          [A]
Quando você chegar
[E]                    [F#m]  [D]
 Tire essa roupa molhada
              [A]    [E]
Quero ser a toalha
              [A]   [E7]
E o seu cobertor

          [A]
Quando você chegar
[E]                   [F#m]  [D]
  Mando a saudade sair
          [A]           [E]
Vai trovejar vai cair
                 [D]  [E7]
Um temporal de amor
                 [A]  [E7]
Um temporal de amor
                 [A]
Um temporal de amor

[Final] [A]  [E]  [F#m]  [D]
        [A]  [E]  [A]`,
  },
  {
    id:            "leandro-leonardo-india",
    titulo:        "Índia",
    artista:       "Leandro & Leonardo",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1994,
    cifra: `[Intro] [Dm]  [C]  [E]  [A]
        [Dm]  [C]  [E]  [Am]

[Am]
Índia seus cabelos nos ombros caídos
               [Dm]                [Am]
Negros como a noite que não tem luar

Seus lábios de rosa para mim sorrindo
              [Dm]            [Am]   [A7]
E a doce meiguice desse seu olhar
[Dm]               [C]
Índia da pele morena
             [E]             [A]    [A7]  [D]
Sua boca pequena eu quero beijar

[D]              [Em]
Índia, sangue Tupi
[A]    [G]      [A]      [D]
 Tem o cheiro da flor
 [D]                   [Em]
Vem que eu quero te dar
 [A] [G]         [A]      [D]   [Dm]
Todo o meu grande amor

  [Dm]
Quando eu for embora para bem distante
           [Gm]               [Dm]
E chegar a hora de dizer-me adeus

Fica nos meus braços só mais um instante
               [Gm]              [Dm]      [D7]
Deixa os meus lábios se unirem aos seus

[Gm]                [F]
Índia levarei saudade
          [A]                 [D]
Da felicidade que você me deu

[D]             [Em]  [A]
Índia a sua imagem
     [G]    [A]    [D]
Sempre comigo vai
                   [Em]
Dentro do meu coração
  [A]   [G]      [A]    [D]
Flor do meu Paraguai`,
  },
  {
    id:            "leandro-leonardo-nao-olhe-assim",
    titulo:        "Não Olhe Assim",
    artista:       "Leandro & Leonardo",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4222,
    cifra: `[Intro] [C]  [G/B]  [Am]  [Em]
        [F]  [C/E]  [D4(7)]  [D7]

[Primeira Parte]

 [G]                   [Bm]
Tire seus olhos dos meus
         [C]           [D]
Eu não quero me apaixonar
 [G]                [Bm]
Ficou em mim um adeus
        [C]                 [D]
Que deixou esse medo de amar

[Segunda Parte]

[Em]              [Bm]
Eu já amei uma vez e senti
   [C]               [G]  [Bm]
A força de uma paixão
[Em]                      [Bm]
A gente às vezes se entrega demais
    [C]                 [D]
Esquece de ouvir a razão

[Refrão]

            [G]       [Em]
Não olhe assim, não
        [Bm]           [C]
Você é linda demais
            [G]                    [D]
Tem tudo aquilo que um homem procura
           [G]  [D]
Em uma mulher

            [G]       [Em]
Não olhe assim, não
         [Bm]          [C]
Porque até sou capaz
        [G]                [D]
De atender esse meu coração
                    [G]   [D]
Que só diz que te quer

( [G]  [Bm]  [C]  [D] )
( [G]  [Bm]  [C]  [D] )

[Segunda Parte]

[Em]              [Bm]
Eu já amei uma vez e senti
   [C]               [G]  [Bm]
A força de uma paixão
[Em]                      [Bm]
A gente às vezes se entrega demais
    [C]                 [D]
Esquece de ouvir a razão

[Refrão]

            [G]       [Em]
Não olhe assim, não
        [Bm]           [C]
Você é linda demais
            [G]                    [D]
Tem tudo aquilo que um homem procura
           [G]  [D]
Em uma mulher

            [G]       [Em]
Não olhe assim, não
         [Bm]          [C]
Porque até sou capaz
        [G]                [D]
De atender esse meu coração
                    [G]   [D]
Que só diz que te quer

            [G]       [Em]
Não olhe assim, não
        [Bm]           [C]
Você é linda demais
            [G]                    [D]
Tem tudo aquilo que um homem procura
           [G]  [D]
Em uma mulher

            [G]       [Em]
Não olhe assim, não
         [Bm]          [C]
Porque até sou capaz
        [G]                [D]
De atender esse meu coração
                    [G]
Que só diz que te quer`,
  },
  {
    id:            "leandro-leonardo-horizonte-azul",
    titulo:        "Horizonte Azul",
    artista:       "Leandro & Leonardo",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1929,
    cifra: `[Intro] [C]

[C]
O que mais me dói em noite sem luar

Sou eu aqui sozinho, louco a te lembrar
   [G]
Olhando da janela a solidão da rua

Bate o desespero, vem saudade sua

 [F]
Pertinho do céu, num baixo astral danado

Nesse apartamento
                [C]
Eu louco, alucinado


   [F]
O gosto do seu beijo

Ainda em minha boca eu sinto
                          [C]
Forte demais pra se esquecer
         [G]          [F]
Você foi ilusão, virou paixão
         [C]
Difícil de esquecer

            [G]       [F]
Horizonte azul, vermelho
             [C]
Luzes a brilhar
             [G]        [F]
O seu corpo nu, no espelho
              [C]
Lembranças demais

( [C] )

[C]
As luzes da cidade

Olhando aqui de cima

São manchas de saudade

Inertes na neblina

 [G]
Loucas fantasias

Vem nesse apogeu

Busca no meu corpo encontrar o seu

 [F]
Coração não bate

Apanha no meu peito

Morto de saudade
                   [C]
Eu choro, não tem jeito


Quero estar contigo no seu aconchego

E te falar de amor no toque dos meus dedos

     [F]
Lembranças de nós dois

Aqui nesses lençóis ficaram
                          [C]
Fortes demais pra se esquecer
         [G]          [F]
Você foi ilusão, virou paixão
         [C]
Difícil de esquecer

            [G]       [F]
Horizonte azul, vermelho
             [C]
Luzes a brilhar
             [G]        [F]
O seu corpo nu, no espelho
              [C]
Lembranças demais

            [G]       [F]
Horizonte azul, vermelho
             [C]
Luzes a brilhar
             [G]        [F]
O seu corpo nu, no espelho
              [C]
Lembranças demais

 [C]`,
  },
  {
    id:            "leandro-leonardo-rumo-a-goiania",
    titulo:        "Rumo À Goiânia",
    artista:       "Leandro & Leonardo",
    tom:           "B",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4150,
    cifra: `[Intro] [F#]  [G#m]  [F#]  [E]  [B]  [F#]

[Solo]
            [F#]
E|---9--9--9----7-7-7-----6-6-6---------­--------|
B|---11-11-11---9-9-9-----7-7-7------9--7-­------|
G|----------------------------------------­------|
D|-----------------------------------9--8-------|
A|----------------------------------------­------|
E|----------------------------------------­------|

      [G#m]
E|--11--11--11------9--9--9----7-7-7----­--------|
B|--12--12--12-----11-11-11----9-9-9----11­--9---|
G|----------------------------------------­------|
D|--------------------------------------11--9---|
A|----------------------------------------­------|
E|----------------------------------------­------|

        [F#]                [E]               [B]
E|----------------------------------------­------|
B|--7--9--11--9--7------------------------­------|
G|-------------------------1----­----------------|
D|--8--9--11--9--8-----2--4--2-­1h2h1------------|
A|------------------------------------4--2------|
E|----------------------------------------­------|

E|-------------------------------4-­-6-----------|
B|-----------------------4---5--7--7-­-----------|
G|------------------4-6---------------­----------|
D|------------4-6-------------------------­------|
A|---2-4/6--------------------------------­------|
E|----------------------------------------­------|

          [F#]
E|--9- -9---9----7-7-7----6-6-6----------­-------|
B|--11-11-11-----9-9-9----9-9-9------9--7-­------|
G|----------------------------------------­------|
D|-----------------------------------9--8-------|
A|----------------------------------------­------|
E|----------------------------------------­------|

         [G#m]
E|--11--11--11------9--9--9----7-7-7----­--------|
B|--12--12--12-----11-11-11----9-9-9----11­-9-9--|
G|----------------------------------------­------|
D|--------------------------------------11-9-9--|
A|----------------------------------------­------|
E|----------------------------------------­------|

         [F#]                    [E]        [B]
E|----------------------------------------­------|
B|--7---9---11---9---7--------------------------|
G|------------------------------1-3-1-------­----|
D|--8---9---11---9---8--------4-------4-2-1-----|
A|------------------------------------------­2~--|
E|----------------------------------------­------|

             [F#]
E|----------------------------------------------|
B|--12-11-9--11--9----9-------------------------|
G|-----------------11---11--9-11-9-8------------|
D|----------------------------------9~~---------|
A|----------------------------------------------|
E|----------------------------------------------|

   [B]                                     [F#]
É noite, o carro está rugindo parecendo fera
                    [E]         [F#]        [B]   [B7]
Voando baixo em Campinas, na Via Anhanguera

E|-------------------------------4-­-6-----------|
B|-----------------------4---5--7--7-­-----------|
G|------------------4-6---------------­----------|
D|------------4-6-------------------------­------|
A|---2-4/6--------------------------------­------|
E|----------------------------------------­------|

   [E]                                         [B]
Já estou vendo ao longe a linda e doce Ribeirão
                                 [F#]
Toda iluminada feito um céu no chão
           [F#7]                [B]   [F#7]
Na noite azulada de uma primavera

E|----------------------------------------------|
B|--12-11-9--11--9----9-------------------------|
G|-----------------11---11--9-11-9-8------------|
D|----------------------------------9~~---------|
A|----------------------------------------------|
E|----------------------------------------------|

[B]                                 [F#]
A saudade já não cabe no meu coração

E|---9--9--9----7-7-7-------------------­--------|
B|---11-11-11---9-9-9---------------------­------|
G|----------------------------------------­------|
D|----------------------------------------------|
A|----------------------------------------­------|
E|----------------------------------------­------|

                        [E]        [F#]       [B]  [B7]
Grudada como faz na estrada os pneus no chão

E|-------------------------------4-­-6-----------|
B|-----------------------4---5--7--7-­-----------|
G|------------------4-6---------------­----------|
D|------------4-6-------------------------­------|
A|---2-4/6--------------------------------­------|
E|----------------------------------------­------|

[E]                                    [B]
Uberaba e Uberlândia já deixei pra trás
                            [F#]
Em Itumbiara entrando em Goiás
                [F#7]            [B]   ( [B]  [A#m]  [G#m] )
Quase que eu decolo feito um avião

[F#]       [B]
Ê-ê-i Goiânia
     [F#]                [E]                  [B]  ( [B]  [A#m]  [G#m] )
Não deu pra segurar a barra, então eu voltei
[F#]       [G#m]
Ê-ê-i Goiânia
  [E]                  [F#]                [B]
Avisa aqueles olhos lindos que eu já cheguei

            [F#]
E|---9--9--9----7-7-7-----6-6-6---------­--------|
B|---11-11-11---9-9-9-----7-7-7------9--7-­------|
G|----------------------------------------­------|
D|-----------------------------------9--8-------|
A|----------------------------------------­------|
E|----------------------------------------­------|

      [G#m]
E|--11--11--11------9--9--9----7-7-7----­--------|
B|--12--12--12-----11-11-11----9-9-9----11­--9---|
G|----------------------------------------­------|
D|--------------------------------------11--9---|
A|----------------------------------------­------|
E|----------------------------------------­------|

        [F#]                [E]               [B]
E|----------------------------------------­------|
B|--7--9--11--9--7------------------------­------|
G|-------------------------1----­----------------|
D|--8--9--11--9--8-----2--4--2-­1h2h1------------|
A|------------------------------------4--2------|
E|----------------------------------------­------|

E|-------------------------------4-­-6-----------|
B|-----------------------4---5--7--7-­-----------|
G|------------------4-6---------------­----------|
D|------------4-6-------------------------­------|
A|---2-4/6--------------------------------­------|
E|----------------------------------------­------|

          [F#]
E|--9- -9---9----7-7-7----6-6-6----------­-------|
B|--11-11-11-----9-9-9----9-9-9------9--7-­------|
G|----------------------------------------­------|
D|-----------------------------------9--8-------|
A|----------------------------------------­------|
E|----------------------------------------­------|

         [G#m]
E|--11--11--11------9--9--9----7-7-7----­--------|
B|--12--12--12-----11-11-11----9-9-9----11­-9-9--|
G|----------------------------------------­------|
D|--------------------------------------11-9-9--|
A|----------------------------------------­------|
E|----------------------------------------­------|

         [F#]                    [E]           [B]
E|----------------------------------------­------|
B|--7---9---11---9---7--------------------------|
G|------------------------------1-3-1-------­----|
D|--8---9---11---9---8--------4-------4-2-1-----|
A|------------------------------------------­2~--|
E|----------------------------------------­------|

                                     [F#]
E|----------------------------------------------|
B|--12-11-9--11--9----9-------------------------|
G|-----------------11---11--9-11-9-8------------|
D|----------------------------------9~~---------|
A|----------------------------------------------|
E|----------------------------------------------|

[B]                                     [F#]
Esses olhos reluzentes que eu busco agora
                    [E]        [F#]          [B]    [B7]
Se me chamam com desejo pra mim não tem hora

E|-------------------------------4-­-6-----------|
B|-----------------------4---5--7--7-­-----------|
G|------------------4-6---------------­----------|
D|------------4-6-------------------------­------|
A|---2-4/6--------------------------------­------|
E|----------------------------------------­------|

[E]                                   [B]
É por isso que eu ando em alta rotação
                             [F#]
Feito um asteroide na escuridão
            [F#7]               [B]    [F#7]
O motor do carro parece que chora

E|----------------------------------------------|
B|--12-11-9--11--9----9-------------------------|
G|-----------------11---11--9-11-9-8------------|
D|----------------------------------9~~---------|
A|----------------------------------------------|
E|----------------------------------------------|

   [B]                                        [F#]
O sol agora está nascendo, está chegando o dia

E|---9--9--9----7-7-7-------------------­--------|
B|---11-11-11---9-9-9---------------------­------|
G|----------------------------------------­------|
D|----------------------------------------------|
A|----------------------------------------­------|
E|----------------------------------------­------|

                     [E]          [F#]   [B]   [B7]
Mas sei que valeu a pena tanta correria

E|-------------------------------4-­-6-----------|
B|-----------------------4---5--7--7-­-----------|
G|------------------4-6---------------­----------|
D|------------4-6-------------------------­------|
A|---2-4/6--------------------------------­------|
E|----------------------------------------­------|

     [E]                                      [B]
Eu quero estar nos braços dela daqui a pouquinho
                              [F#]
Pois passei a noite voando sozinho
              [F#7]            [B]   ( [B]  [A#m]  [G#m] )
Dentro desse carro pela rodovia

[F#]       [B]
Ê-ê-i Goiânia
     [F#]                [E]                  [B]  ( [B]  [A#m]  [G#m] )
Não deu pra segurar a barra, então eu voltei
[F#]       [G#m]
Ê-ê-i Goiânia
  [E]                  [F#]                [B]
Avisa aqueles olhos lindos que eu já cheguei
[F#]       [B]
Ê-ê-i Goiânia
     [F#]                [E]                  [B]  ( [B]  [A#m]  [G#m] )
Não deu pra segurar a barra, então eu voltei
[F#]       [G#m]
Ê-ê-i Goiânia
  [E]                  [F#]                [B]
Avisa aqueles olhos lindos que eu já cheguei
[F#]       [B]
Ê-ê-i Goiânia
     [F#]                [E]                  [B]  ( [B]  [A#m]  [G#m] )
Não deu pra segurar a barra, então eu voltei
[F#]       [G#m]
Ê-ê-i Goiânia
  [E]                  [F#]                [B]
Avisa aqueles olhos lindos que eu já cheguei`,
  },
  {
    id:            "leandro-leonardo-sonho-por-sonho",
    titulo:        "Sonho Por Sonho",
    artista:       "Leandro & Leonardo",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2444,
    cifra: `[Intro] [E]

 [E]                                   [B]
Nunca imaginei que você quisesse de mim
                    [A9]               [E]
Uma noite só de prazer, uma transa apenas
                                        [B]
Tudo que você me falou, dói no meu coração
                      [A9]                 [E]
Loucura cheia de sedução, mudou a minha vida

     [E]                                           [B]
Não dá pra esquecer a emoção que senti com você
                       [A9]          [E] [B]
De tudo que não pode ser, eu te quero
[E]                                      [B]
Eu não tenho tempo a perder com a solidão
                       [F#m] [B]     [E]
Na hora que você me quiser, eu vou

           [F#m]    [B]         [E]
Beijo por beijo, sonho por sonho
         [F#m]     [B]               [E]
Carinho por amor, paixão por paixão
           [F#m]    [B]         [E]
Beijo por beijo, sonho por sonho
         [F#m]     [B]               [E]
Carinho por amor, paixão por paixão

( [E] )

     [E]                                       [B]
Não dá pra esquecer a emoção que senti com você
                     [A9]          [E]  [B]
De tudo que não pode ser, eu te quero
[E]                                      [B]
Eu não tenho tempo a perder com a solidão
                     [F#m] [B]     [E]
Na hora que você me quiser, eu vou

           [F#m]    [B]         [E]
Beijo por beijo, sonho por sonho
         [F#m]     [B]               [E]
Carinho por amor, paixão por paixão
           [F#m]    [B]         [E]
Beijo por beijo, sonho por sonho
         [F#m]     [B]               [E]
Carinho por amor, paixão por paixão`,
  },
  {
    id:            "leandro-leonardo-solidao",
    titulo:        "Solidão",
    artista:       "Leandro & Leonardo",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4469,
    cifra: `[Intro] [C]  [G]  [F]  [C]  [G]
        [C]  [G]  [F]  [C]  [G]

E|--------3--5-3-----3--1-0-----1--1-0----------|
B|-1---5---------3----------1----------1--3-1-0-|
G|----------------------------------------------|
D|----------------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

      [C]                       [C7M]
Todo dia, do meu quarto, eu a vejo mais bonita
                         [Dm7]   [G7]
Se arruma e se pinta, e sai
         [Dm7]     [G7]          [Dm7]         [G7]
Mais um dia de sufoco, eu na rua quase louco
          [C]   [G7]
Pensando nela

      [C]                        [C7M]
Na cabeça a sua imagem, no meu peito uma vontade
   [C7]          [F]
De ser o homem dela
       [F]          [C]                           [Dm7]
Eu de volta do trabalho, vou de novo pro meu quarto
        [G7]                [C]  [G7]
Vou te amar da minha janela

 [C]
Solidão
                [G]
Quando uma luz se apaga
               [F]
Eu de novo em casa
            [C]        [G7]
Morrendo de amor por ela

 [C]
Solidão
                     [G]
Que minha alma extravasa
                  [F]
Não suporto a vontade
           [C]      [G7]
De fazer amor com ela

( [C]  [G]  [F]  [C]  [G] )
( [C]  [G]  [F]  [C]  [G] )

E|--------3--5-3-----3--1-0-----1--1-0----------|
B|-1---5---------3----------1----------1--3-1-0-|
G|----------------------------------------------|
D|----------------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

       [C]                       [C7M]
Todo dia, do meu quarto, eu a vejo mais bonita
                         [Dm7]   [G7]
Se arruma e se pinta, e sai
         [Dm7]     [G7]          [Dm7]         [G7]
Mais um dia de sufoco, eu na rua quase louco
          [C]   [G7]
Pensando nela

     [C]                        [C7M]
Na cabeça a sua imagem, no meu peito uma vontade
   [C7]          [F]
De ser o homem dela
       [F]          [C]                           [Dm7]
Eu de volta do trabalho, vou de novo pro meu quarto
        [G7]                [C]  [G7]
Vou te amar da minha janela

 [C]
Solidão
                [G]
Quando uma luz se apaga
               [F]
Eu de novo em casa
            [C]        [G7]
Morrendo de amor por ela

 [C]
Solidão
                [G]
Quando uma luz se apaga
               [F]
Eu de novo em casa
            [C]        [G7]
Morrendo de amor por ela

 [C]
Solidão
                     [G]
Que minha alma extravasa
                  [F]
Não suporto a vontade
           [C]      [G7]
De fazer amor com ela`,
  },
  {
    id:            "leandro-leonardo-desculpe-mas-eu-vou-chorar",
    titulo:        "Desculpe, Mas Eu Vou Chorar",
    artista:       "Leandro & Leonardo",
    tom:           "D",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2769,
    cifra: `[Intro] [D]

    [D]
As luzes da cidade acesa
     [G]
Clareando a foto sobre a mesa
  [A7]
E eu comigo aqui trancado
             [D]    [A7]
Nesse apartamento

   [D]
Olhando o brilho dos faróis
       [G]
Eu me pego a pensar em nós
  [A7]
Voando na velocidade
             [D]    [D7]
Do meu pensamento

   [G]
E saio a te procurar
        [D]
Nas esquinas, em qualquer lugar
      [A7]
E as vezes chego a te encontrar
                [D]    [D7]
Num gole de cerveja

    [G]
E quando vem a lucidez
   [D]
Estou sozinho outra vez
     [A7]
E então eu volto a conversar
               [D]    [A7]
Com minha tristeza

        [D]       [G]                   [D]
Vou chorar, desculpe mas eu vou chorar
     [G]                    [D]
Não ligue se eu não te ligar
     [G]               [A7]
Faz parte dessa solidão

        [D]       [G]                   [D]
Vou chorar, desculpe mas eu vou chorar
    [G]                   [D]
Na hora em que você voltar
    [A7]            [D]
Perdoe o meu coração

( [D] )

   [G]
E saio a te procurar
        [D]
Nas esquinas, em qualquer lugar
      [A7]
E as vezes chego a te encontrar
                [D]    [D7]
Num gole de cerveja

    [G]
E quando vem a lucidez
   [D]
Estou sozinho outra vez
     [A7]
E então eu volto a conversar
               [D]    [A7]
Com minha tristeza

        [D]       [G]                   [D]
Vou chorar, desculpe mas eu vou chorar
     [G]                    [D]
Não ligue se eu não te ligar
     [G]               [A7]
Faz parte dessa solidão

        [D]       [G]                   [D]
Vou chorar, desculpe mas eu vou chorar
    [G]                   [D]
Na hora em que você voltar
    [A7]            [D]
Perdoe o meu coração

        [D]       [G]                   [D]
Vou chorar, desculpe mas eu vou chorar
     [G]                    [D]
Não ligue se eu não te ligar
     [G]               [A7]
Faz parte dessa solidão

        [D]       [G]                   [D]
Vou chorar, desculpe mas eu vou chorar
    [G]                   [D]
Na hora em que você voltar
    [A7]            [D]
Perdoe o meu coração`,
  },
  {
    id:            "milionario-e-jose-rico-decida",
    titulo:        "Decida",
    artista:       "Milionário e José Rico",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2818,
    cifra: `[Intro]

[Dm]
   No amor, há momentos

Que temos que dizer um para o outro: Decida

[Primeira Parte]
 [Dm]
Sente aqui comigo no sofá

E vamos conversar
        [Bb]         [A]
É hora de abrir o jogo

Nosso amor está indo água abaixo

Se deixar vira relaxo
                [Dm]  [D7]
Temporal apaga fogo

[Segunda Parte]

      [Gm]
Por que você não olha nos meus olhos?
     [Dm]
Seu beijo não tem o mesmo sabor
   [A7]
O seu carinho não me faz dormir
     [Dm]                      [D7]
Nem sua quando a gente faz amor

   [Gm]
Você só vai tomar banho sozinha
    [Dm]
Na hora do jantar me diz que já comeu
     [A7]
Não vê novelas e nem liga o som

Diz que não tem nada bom
                  [Dm]     [D7]
Que satisfaça o ego seu

[Pré-Refrão]

              [Gm]
Você se esqueceu
                           [Dm]
Que dentro desta casa eu existo
                   [A7]
Que em 82 casou comigo
                           [Dm]  [D7/F#]
Por isso exijo uma explicação

                      [Gm]
Se sou eu que te incomoda
                              [Dm]
Pra te fazer feliz fiz o que pude
                           [Bb]
Mas o incomodado é que se mude
   [A7]                    [D] (Frase 1) [A7]
Você quem vai tomar a decisão

[Tab - Frase 1]

E|-------0--2--5--3--2--------------------------------|
B|----3--------7--5--3--3--2-3-4-5--------------------|
G|-2-----2--2-----------4--2-4-5-6--------------------|
D|-4--4-----------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Refrão]

   [D]
Decida
                          [F#7]
Se vai embora ou ficar comigo
    [G]                       [D]
Se vai me respeitar como marido
      [A7]
Pois desse jeito
                [D] (Frase 1) [A7]
Não estou aguentando

[Tab - Frase 1]

E|-------0--2--5--3--2--------------------------------|
B|----3--------7--5--3--3--2-3-4-5--------------------|
G|-2-----2--2-----------4--2-4-5-6--------------------|
D|-4--4-----------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

   [D]
Decida
                               [F#7]
Ou pare de uma vez com esse delírio
    [G]                     [D]
Talvez você precisa usar colírio
    [Em]           [A7]            [D]
Pra enxergar o quanto ainda te amo

( [Bb]  [A7]  [Dm] (Frase 2)  [D7] )

[Tab - Frase 2 - Violão 1]

Parte 1 de 2
E|-5-5-5----------------------------------------8-----|
B|-------8-6-5-6-5----5-6-8--7-8-7-8-10-8-10-12-------|
G|------------------7---------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
E|-6h8p6-5-6------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Tab - Frase 2 - Violão 2]

Parte 1 de 2
E|-------------------------------------------5--------|
B|-6-6-6-5-------------------------5-7-5-7-8----------|
G|---------7-6-7-6-----------7-6-7--------------------|
D|--------------------5-7-8---------------------------|
A|------------------8---------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
E|-3h5p3-2-3------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Pré-Refrão]

              [Gm]
Você se esqueceu
                           [Dm]
Que dentro desta casa eu existo
                   [A7]
Que em 82 casou comigo
                           [Dm]  [D7/F#]
Por isso exijo uma explicação

                      [Gm]
Se sou eu que te incomoda
                              [Dm]
Pra te fazer feliz fiz o que pude
                           [Bb]
Mas o incomodado é que se mude
   [A7]                    [D] (Frase 1) [A7]
Você quem vai tomar a decisão

[Refrão]

   [D]
Decida
                          [F#7]
Se vai embora ou ficar comigo
    [G]                       [D]
Se vai me respeitar como marido
      [A7]
Pois desse jeito
                [D] (Frase 1) [A7]
Não estou aguentando

   [D]
Decida
                               [F#7]
Ou pare de uma vez com esse delírio
    [G]                     [D]
Talvez você precisa usar colírio
    [Em]           [A7]
Pra enxergar o quanto
         [D] (Frase 1) [A7]
Ainda te amo

   [D]
Decida
                          [F#7]
Se vai embora ou ficar comigo
    [G]                       [D]
Se vai me respeitar como marido
      [A7]
Pois desse jeito
                [D] (Frase 1) [A7]
Não estou aguentando

   [D]
Decida
                               [F#7]
Ou pare de uma vez com esse delírio
    [G]                     [D]
Talvez você precisa usar colírio
    [Em]           [A7]          [D]
Pra enxergar o quanto ainda te  amo

[Final] [Bb]  [A7] (Frase 3) [Dm]

[Tab - Frase 3 - Violão 1]

E|-----0-1-1---1-1-0--1-3-5--3--1--0------------------|
B|---3--------------------------------3---------------|
G|-2--------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Tab - Frase 3 - Violão 2]

E|----------------------------------------------------|
B|----------------------------------------------------|
G|--------------------2-3-5--3--2---------------------|
D|---0-2-3-3---3-3-2---------------5--3---------------|
A|-0--------------------------------------------------|
E|----------------------------------------------------|`,
  },
  {
    id:            "milionario-e-jose-rico-estrada-da-vida",
    titulo:        "Estrada da Vida",
    artista:       "Milionário e José Rico",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4231,
    cifra: `[Intro] [G]  [F]  [C]  [Dm]  [G]  [C]
        [G]  [F]  [C]  [C7]
        [F]  [G]  [C]  [G]  [C]

[Tab - Intro]

Parte 1 de 3
E|------------------------------------------|
B|--1--0--1-----0--3--0-----1---------------|
G|-----------2-----------2-----2--0---------|
D|-----------------------------------3--2---|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|--------0--------1-----------------0------|
B|--1--3-----1--3-----0--1--3--0--1---------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 1 de 3
E|------------------------------------------|
B|--1--0--1-----0--3--0-----1---------------|
G|-----------2-----------2-----2--0---------|
D|-----------------------------------3--2---|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|----------------------0-------------------|
B|--1------------0-1-3-----0-1-3-1-0-3-1----|
G|----3-2-0---2-----------------------------|
D|----------3-------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

       [C]        [G]       [C]
Nesta longa estrada da vida
                            [G]
Vou correndo e não posso parar
        [F]                [C]
Na esperança de ser campeão
      [G]                  [C]
Alcançando o primeiro lugar
        [F]                [C]
Na esperança de ser campeão
      [G]                  [C]  [C7]
Alcançando o primeiro lugar

       [F]
Mas o tempo cercou minha estrada
             [G]      [C]
E o cansaço me dominou
                        [G]
Minhas vistas se escureceram
       [F]         [G]       [C]
E o final da corrida chegou

[Interlúdio] [G]  [F]  [C]  [Dm]  [G]  [C]
             [G]  [F]  [C]  [C7]
             [F]  [G]  [C]  [G]  [C]

[Tab - Interlúdio]

Parte 1 de 3
E|------------------------------------------|
B|--1--0--1-----0--3--0-----1---------------|
G|-----------2-----------2-----2--0---------|
D|-----------------------------------3--2---|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|--------0--------1-----------------0------|
B|--1--3-----1--3-----0--1--3--0--1---------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 1 de 3
E|------------------------------------------|
B|--1--0--1-----0--3--0-----1---------------|
G|-----------2-----------2-----2--0---------|
D|-----------------------------------3--2---|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|----------------------0-------------------|
B|--1------------0-1-3-----0-1-3-1-0-3-1----|
G|----3-2-0---2-----------------------------|
D|----------3-------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Segunda Parte]

     [C]     [G]         [C]
Este é o exemplo da vida
                         [G]
Para quem não quer compreender
       [F]               [C]
Nós devemos ser o que somos
       [G]                [C]
Ter aquilo que bem merecer
       [F]               [C]
Nós devemos ser o que somos
       [G]                [C]  [C7]
Ter aquilo que bem merecer

       [F]
Mas o tempo cercou minha estrada
             [G]      [C]
E o cansaço me dominou
                        [G]
Minhas vistas se escureceram
       [F]         [G]       [C]  [G]  [C]  [G]  [C]
E o final desta vida chegou`,
  },
  {
    id:            "milionario-e-jose-rico-a-carta",
    titulo:        "A Carta",
    artista:       "Milionário e José Rico",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5153,
    cifra: `[Intro] [E]  [E/G#]  [A]  [Bbm7(5-)]
        [E]  [A/C#]  [D]  [B7(4)]

[Primeira Parte]

   [E]                                   [B]
Estou escrevendo esta carta meio aos prantos
                 [A2]
Ando meio pelos cantos
                      [F#m7]
Pois não encontrei coragem
        [B4]          [E9]
De encarar o teu olhar
                    [B2]
Está fazendo algum tempo
                        [A2]
Que uma coisa aqui por dentro
                   [F#m7]
Despertou e é tão forte
         [B4]         [E]
Que não pude te contar

[Pré-Refrão]

  [A2]                              [E/G#]
Quando você ler eu vou estar bem longe
                     [F#m7]
Não me julgue tão covarde
         [B/A]         [E]
Só não quis te ver chorar
 [A2]                                [E/G#]
Perdão, amiga, são coisas que acontecem
       [C#m7]  [E/G#]  [F#m7]
Dê um beijo nos meninos
         [B7(4)]           [E]  [A2]  [B]
Pois eu não vou mais voltar

[Refrão]

 [E]                              [B]
Como eu poderia dar a ela esta carta?

Como eu vou deixar
                   [A2]
Pra sempre aquela casa?
                   [F#m7]
Se eu já sou feliz
                    [B7(4)]
Se eu já tenho amor
                  [B7]
Se eu já vivo em paz?
[E]
E por isso decidi
                  [B]
Que vou ficar com ela
                                 [A2]  [F#m7]
A minha passagem, por favor, cancela
      [B]      [E]
Vá sozinha, não vou mais

[Segunda Parte]

                                   [B]
Quando cheguei no portão da minha casa
                   [A2]
Como se eu tivesse asas
                  [F#m7]
Me senti igual criança
        [B7(4)]    [E]
Deu vontade de voar
                     [B]
Quase entrei pela janela
                      [A2]
Minha esposa ali tão bela
                        [F#m7]
Dei um forte e longo abraço
       [B7(4)]    [E]
E comecei a chorar

[Pré-Refrão]

[A2]                             [E/G#]
E com as lágrimas as palavras vinham
                [F#m7]
E rolavam como pedras
       [B/A]         [E]
E ela só a me escutar
[A2]                              [E/G#]
Ao enxugar minhas lágrimas com beijos
     [C#m7]    [E/G#]  [F#m7]
Revelou que já  sabia
      [B7(4)] [E]      [F#m7]  [B7(4)]
Mas iria   perdoar

[Refrão]

 [E]                              [B]
Como eu poderia dar a ela esta carta?

Como eu vou deixar
                   [A2]
Pra sempre aquela casa?
                   [F#m7]
Se eu já sou feliz
                    [B7(4)]
Se eu já tenho amor
                  [B7]
Se eu já vivo em paz?
[E]
E por isso decidi
                  [B]
Que vou ficar com ela
                                 [A2]  [F#m7]
A minha passagem, por favor, cancela
      [B]     [E]
Vá sozinha, não vou mais

 [F]                              [C]
Como eu poderia dar a ela esta carta?

Como eu vou deixar
                   [Bb2]
Pra sempre aquela casa?
                   [Gm7]
Se eu já sou feliz
                    [C7(4)]
Se eu já tenho amor
                  [C7]
Se eu já vivo em paz?
[F]
E por isso decidi
                  [C]
Que vou ficar com ela
                                 [Bb2]  [Gm7]
A minha passagem, por favor, cancela
      [C]     [F]
Vá sozinha, não vou mais
[Gm7]
    Vá sozinha, não vou mais

[Final] [F]  [F/A]  [Bb2]  [Bbm]  [F]`,
  },
  {
    id:            "milionario-e-jose-rico-sonhei-com-voce",
    titulo:        "Sonhei Com Você",
    artista:       "Milionário e José Rico",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3043,
    cifra: `[Intro] [Bm7]  [E7]  [A7M]  [A6]  [Bm7]  [E7]  [A7M]  [A6]
        [Bm7]  [E7]  [A7M]  [A9]  [E]  [E7]  [A]

[Primeira Parte]

   [A]             [E7]        [A]
Depois de muito tempo acordado
       [A]       [E7]       [A]
Já cansado de tanto sofrer
               [D]         [A]
Esta noite dormi um pouquinho
            [E]
Sonhei com você

   [Bm]                  [E]
Você apareceu em meu quarto
      [Bm]                  [E]
E sorrindo me estendeu a mão
                               [E7]
Se atirou em meus braços e beijou-me
        [A]
Com emoção

     [A]          [E7]       [A]
E matando a paixão recolhida
       [A]        [E7]    [A]
Num delírio de felicidade
             [D]       [A7]
Em soluço você me dizia
           [D]
"Amor que saudade"

[Refrão]

                [E7]         [A]
De repente, em menos de minuto
                           [E]
Você se transformou num vulto
   [D]    [E7]      [A]  [A7]
E logo desapareceu
      [D]         [E7]         [A]
De repente, em menos de minuto
                           [E]
Você se transformou num vulto
   [D]    [E7]      [A]
E logo desapareceu

[Ponte]

  [E]
Quando acordei não te
 [D]            [A]
Vi, que desespero
        [E]
Minhas lágrimas molharam
    [E7]                  [A]
A fronha do meu travesseiro
     [E]                  [D]
Meu bem, como é maravilhoso
            [A]
Sonhar com você
  [E]
Amor como é triste
     [D]  [E]    [A]
Acordar e não te ver

( [Bm7]  [E7]  [A7M]  [A6]  [Bm7]  [E7]  [A7M]  [A6] )
( [Bm7]  [E7]  [A7M]  [A9]  [E]  [E7]  [A] )

     [A]          [E7]       [A]
E matando a paixão recolhida
       [A]        [E7]    [A]
Num delírio de felicidade
             [D]       [A7]
Em soluço você me dizia
           [D]
"Amor que saudade"

[Refrão]

                [E7]         [A]
De repente, em menos de minuto
                         [E]
Você se transformou num vulto
   [D]    [E7]      [A]  [A7]
E logo desapareceu
      [D]         [E7]         [A]
De repente, em menos de minuto
                         [E]
Você se transformou num vulto
   [D]    [E7]      [A]
E logo desapareceu

[Ponte]

  [E]
Quando acordei não te
 [D]            [A]
Vi, que desespero
        [E]
Minhas lágrimas molharam
    [E7]                  [A]
A fronha do meu travesseiro
     [E]                  [D]
Meu bem, como é maravilhoso
            [A]
Sonhar com você
  [E]
Amor como é triste
     [D]  [E]    [A]
Acordar e não te ver

[Final] [D]  [C#m]  [Bm]  [A]`,
  },
  {
    id:            "milionario-e-jose-rico-vontade-dividida",
    titulo:        "Vontade Dividida",
    artista:       "Milionário e José Rico",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5258,
    cifra: `[Intro] [D]  [C]  [G]  [D7]
        [G]  [C]  [D7]

[Primeira Parte]

       [G]
Eu queria ter você no meu caminho

Acordar, sentir que não estou sozinho
        [D7]
Neste quarto
      [Am]                     [D7]
Inventar um paraíso pra nós dois
     [Am]                       [D7]
E falar do sonho lindo que ficou depois
    [G]         [G7]
Do nosso amor

[Pré-Refrão]

    [C]
Apesar do teu silêncio quase não dizer
       [G]
Eu me sinto um passarinho sem poder voar
       [D7]
Eu preciso urgentemente me reconstruir
       [G]        [G7]
Neste teu olhar
       [C]
Eu preciso da verdade pra viver a vida
      [G]
Despedida, não vou mais chorar
        [D7]
O que quero é sentimento força e coração
           [G]           [F#m]  [Em]
Quando eu te encontrar

[Refrão]

 [D]                      [C]
Deixe esta vontade dividida
                    [D7]
Quero estar na tua vida
                  [G]    [F#m]  [Em]
Caminhar o teu caminho
  [D]                       [C]
Trago esta verdade quase louca
                      [D]
Libertar num beijo a boca
                    [G]
Quando o sol amanhecer

( [D]  [C]  [G] )
( [D7]  [G]  [C]  [D7] )

[Primeira Parte]

       [G]
Eu queria ter você no meu caminho

Acordar, sentir que não estou sozinho
        [D7]
Neste quarto
      [Am]                     [D7]
Inventar um paraíso pra nós dois
     [Am]                       [D7]
E falar do sonho lindo que ficou depois
    [G]         [G7]
Do nosso amor

[Pré-Refrão]

    [C]
Apesar do teu silêncio quase não dizer
       [G]
Eu me sinto um passarinho sem poder voar
       [D7]
Eu preciso urgentemente me redescobrir
       [G]        [G7]
Neste teu olhar
       [C]
Eu preciso da verdade pra viver a vida
      [G]
Despedida, não vou mais chorar
        [D7]
O que quero é sentimento força e coração
           [G]           [F#m]  [Em]
Quando eu te encontrar

[Refrão]

 [D]                      [C]
Deixe esta vontade dividida
                    [D7]
Quero estar na tua vida
                  [G]    [F#m]  [Em]
Caminhar o teu caminho
  [D]                       [C]
Trago esta verdade quase louca
                      [D7]
Libertar num beijo a boca
                    [G]
Quando o sol amanhecer

 [D]                      [C]
Deixe esta vontade dividida
                    [D7]
Quero estar na tua vida
                  [G]    [F#m]  [Em]
Caminhar o teu caminho
  [D]                       [C]
Trago esta verdade quase louca
                      [D7]
Libertar num beijo a boca
                    [G]
Quando o sol amanhecer`,
  },
  {
    id:            "milionario-e-jose-rico-solidao",
    titulo:        "Solidão",
    artista:       "Milionário e José Rico",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4336,
    cifra: `[Intro] [A]  [D]  [E]  [A]  [D]  [A]  [E]

               [A]
Alguém me falou

Que você me enganou
             [Bm]
Eu não posso acreditar
              [D]
Eu preciso saber
              [E]
Se foi mesmo você
                  [A]  [A7]
Que mandou me avisar

( [A]  [Bm]  [A/C#] )

[D]           [E]
Eu preciso partir
 [C#m]                   [F#m]
Sei que não vou resistir
          [Bm]      [E]
Esta solidão do amor
            [A]      [A7]
Para o meu coração

( [A]  [Bm]  [A/C#] )

[D]           [E]
Eu preciso partir
 [C#m]                   [F#m]
Sei que não vou resistir
          [Bm]      [E]
Esta solidão do amor
            [A]      [A7]
Para o meu coração

( [A]  [D]  [E]  [A]  [D]  [A]  [E] )

               [A]
Alguém me falou

Que você me enganou
             [Bm]
Eu não posso acreditar
              [D]
Eu preciso saber
              [E]
Se foi mesmo você
                  [A]  [A7]
Que mandou me avisar

( [A]  [Bm]  [A/C#] )

[D]           [E]
Eu preciso partir
 [C#m]                   [F#m]
Sei que não vou resistir
          [Bm]      [E]
Esta solidão do amor
            [A]      [A7]
Para o meu coração

( [A]  [Bm]  [A/C#] )

[D]           [E]
Eu preciso partir
 [C#m]                   [F#m]
Sei que não vou resistir
          [Bm]      [E]
Esta solidão do amor
            [A]      [E]  [D]
Para o meu coração

( [F]  [D]  [E] )

[A]      [D]               [E]
  Amor, eu gostaria saber
                [A]
Se foi mesmo você
Que mandou me avisar
Porque se for verdade

( [A]  [Bm]  [A/C#] )

[D]           [E]
Eu preciso partir
 [C#m]                   [F#m]
Sei que não vou resistir
          [Bm]      [E]
Esta solidão do amor
            [A]      [A7]
Para o meu coração

[D]           [E]
Eu preciso partir
 [C#m]                   [F#m]
Sei que não vou resistir
          [Bm]      [E]
Esta solidão do amor
            [A]
Para o meu coração

            [A]
Para o meu coração

            [A]
Para o meu coração`,
  },
  {
    id:            "milionario-e-jose-rico-boate-azul",
    titulo:        "Boate Azul",
    artista:       "Milionário e José Rico",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1742,
    cifra: `[Intro] [Gm]  [C]  [F]  [Bb]
        [Gm]  [A]  [Dm]

[Primeira Parte]

            [Dm]
Doente de amor
                            [C]
Procurei remédio na vida noturna
                [Bb]
Como a flor da noite
                        [A]
Em uma boate aqui na zona sul
           [Gm]
A dor do amor é com outro amor
             [Dm]
Que a gente cura
             [A7]
Vim curar a dor
                           [Dm]   [D7]
Deste mal de amor na boate azul

[Pré-Refrão]

            [Gm]
E quando a noite vai se agonizando
                [Dm]
No clarão da aurora
         [A]
Os integrantes da vida noturna
          [Dm]    [D7]
Se foram dormir
             [Gm]
E a dama da noite
                                [Dm]
Que estava comigo também foi embora
                [Bb]
Fecharam-se as portas
            [A7]            [D]
Sozinho de novo tive que sair

[Refrão]

             [A]
Sair de que jeito
              [G]              [D]
Se nem sei o rumo para onde vou
                                 [A]
Muito vagamente me lembro que estou
         [G]                 [D]
Em uma boate aqui na zona sul
           [A]             [G]
Eu bebi demais e não consigo
                [D]
Me lembrar se quer
                          [A]
Qual é o nome daquela mulher
           [G]     [A]       [D]
A flor-da-noite da boate azul

( [Gm]  [C]  [F]  [Bb] )
( [Gm]  [A]  [Dm]  [D7] )

[Pré-Refrão]

            [Gm]
E quando a noite vai se agonizando
                [Dm]
No clarão da aurora
         [A]
Os integrantes da vida noturna
          [Dm]    [D7]
Se foram dormir
             [Gm]
E a dama da noite
                                [Dm]
Que estava comigo também foi embora
                [Bb]
Fecharam-se as portas
            [A7]            [D]
Sozinho de novo tive que sair

[Refrão]

             [A]
Sair de que jeito
              [G]              [D]
Se nem sei o rumo para onde vou
                                 [A]
Muito vagamente me lembro que estou
         [G]                 [D]
Em uma boate aqui na zona sul
           [A]             [G]
Eu bebi demais e não consigo
                [D]
Me lembrar se quer
                          [A]
Qual é o nome daquela mulher
           [G]     [A]       [D]
A flor-da-noite da boate azul

[Final] [Gm]  [C]  [F]  [Bb]
        [Gm]  [A]  [Dm]`,
  },
  {
    id:            "milionario-e-jose-rico-agenda-rabiscada",
    titulo:        "Agenda Rabiscada",
    artista:       "Milionário e José Rico",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4935,
    cifra: `[Intro] [D]  [A/C#]  [G/B]  [A9]
        [D]  [D4]  [D]  [D4]

     [D]
Você fala por ai que não me ama
Você jura que já não sente mais nada
Mas a noite é pesadelo em sua cama
                [A]
Solidão da madrugada
    [Em]
Telefone na parede desligado
        [A]
E o meu nome em sua agenda rabiscado
       [Em]                       [A]
São sintomas de paixão mal resolvida
    [A7]         [D4] [D]  [D9]  [D]
De amor mal acabado

     [G]
Você deita mas sem sono se levanta
       [D]
Faz de tudo pra dormir não adianta
      [Em]                       [A]
Tá morrendo de saudade e por orgulho
           [G]  [D/F#]  [Em]  [D]
Não vem me procurar

[D/F#] [G] [G#] [A]
Quem esqueceu não chora
            [G]     [D]
Quem chora ainda lembra
                   [A]
Quando se esquece rasga
         [G]           [D]
Não se rabisca a agenda
[D/F#] [G] [G#] [A]
Quem esqueceu não chora
         [G]      [D]
Nem rola pela cama
                  [A]
Se ainda perde o sono
       [G]  [A]     [D]
É que ainda me ama

( [D]  [A/C#]  [G/B]  [G/Bb] )
( [Bm]  [F#m]  [G]  [A9] )
( [D]  [D4]  [D9]  [D]  [Em] )

[D/F#]     [G]
Você deita mas sem sono se levanta
       [D]
Faz de tudo pra dormir não adianta
     [Em]                        [A]
Tá morrendo de saudade e por orgulho
           [G]  [D/F#]  [Em]  [D]
Não vem me procurar

[D/F#] [G] [G#] [A]
Quem esqueceu não chora
           [G]     [D]
Quem chora ainda lembra
                     [A]
Quando se esquece rasga
         [G]           [D]
Não se rabisca a agenda
[D/F#] [G] [G#] [A]
Quem esqueceu não chora
         [G]      [D]
Nem rola pela cama
                  [A]
Se ainda perde o sono
       [G]  [A]     [D]
É que ainda me ama

[D/F#] [G] [G#] [A]
Quem esqueceu não chora
            [G]     [D]
Quem chora ainda lembra
                     [A]
Quando se esquece rasga
          [G]        [D]
Não se rabisca a agenda
           [A]
Quem esqueceu não chora
          [G]     [D]
Nem rola pela cama
                   [A]
Se ainda perde o sono
       [G]  [A]    [Bm]
É que ainda me ama

[Final] [F#m]  [G/B]  [A9]
        [D]  [D4]  [D]`,
  },
  {
    id:            "milionario-e-jose-rico-jogo-do-amor",
    titulo:        "Jogo do Amor",
    artista:       "Milionário e José Rico",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4069,
    cifra: `[Intro] [E]  [A]  [E]  [A]  [E]
        [A]  [E]  [A]  [E]  [A]

            [A]
Com meu dinheiro eu comprei de tudo
                             [D]  [E]
No jogo da vida eu nunca perdi

Mas o coração da mulher querida
                               [A]
Parece mentira, mas não consegui


Ela desprezou a minha riqueza
                                [D]  [E]
Com toda franqueza me disse também

Que gosta de outro com toda pobreza
                                  [A]
E do meu dinheiro não quer um vintém

       [B7]                 [E]
Nas demandas que tive na vida
      [B7]                [E]
O dinheiro me fez vencedor
      [D]               [A]
Mas agora perdi a partida
      [E]                [A]
O meu ouro não teve valor

       [B7]                [E]
Meu rival é um pobre coitado
       [B7]             [E]
Não devia ser o ganhador
      [D]             [A]
No entanto é o felizardo
               [E7]               [A]
E eu fui derrotado no jogo do amor

         [E7]                    [A]
Compreendi que nem tudo é dinheiro
       [E7]                [A]
E nem tudo se pode comprar
    [E]                 [A]
O amor quando é verdadeiro
       [E]                   [A]
É de graça pra quem sabe amar

( [E]  [A]  [E]  [A]  [E] )
( [A]  [E]  [A]  [E]  [A] )

       [B7]                [E]
Meu rival é um pobre coitado
       [B7]             [E]
Não devia ser o ganhador
      [D]             [A]
No entanto é o felizardo
               [E7]               [A]
E eu fui derrotado no jogo do amor

         [E]                    [A]
Compreendi que nem tudo é dinheiro
      [E]                [A]
E nem tudo se pode comprar
    [E]                 [A]
O amor quando é verdadeiro
       [E]                   [A]  [E]  [A]
É de graça pra quem sabe amar`,
  },
  {
    id:            "milionario-e-jose-rico-sonho-de-um-caminhoneiro",
    titulo:        "Sonho de Um Caminhoneiro",
    artista:       "Milionário e José Rico",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4852,
    cifra: `E|--10-12-14-10-9-9--------10-7-5-4-5-4-5-4-2-0---9---------|
B|-------------------10-9---9-9-7-5-7-5-7-5-3-2--10---------|
G|--11-13-14-11-9-9-----------------------------------------|
D|----------------------------------------------------------|
A|----------------------------------------------------------|
E|----------------------------------------------------------|

[Intro] [D]  [A]  [E]  [A]

[A]                   [E]
Eram dois amigos inseparáveis
   [D]                   [A]
Lutando pela vida e o pão
                                 [E]
Levando um sonho de cidade em cidade
          [D]                 [A]
De serem donos do seu caminhão

           [D]
Com muita luta e sacrifício
       [B7]                 [E]
Para pagar em dia a prestação
         [D]                 [A]
Se realizava o sonho finalmente
         [E]                  [A]
O empregado passa a ser patrão

       [A]                  [E]
Suas viagens eram intermináveis
       [D]                  [A]
De cansaço, de poeira e chão
                           [E]
E um dos amigos, um recém-casado
        [D]                 [A]
Ia ser pai do primeiro varão

         [D]
Com alegria vinham pela estrada
     [B7]                 [E]
Não vendo a hora de chegar
            [D]               [A]
E o caminhoneiro disse ao amigo
                 [E]              [A]
Vou lhe dar meu filho para batizar

          [A]                [E]
Mas o destino cruel e traiçoeiro
    [D]                [A]
Marcou a hora e o lugar
                           [E]
A chuva fina e a pista molhada
            [D]                [A]
Com uma carreta foram se chocar

          [D]
Mas como todos têm a sua sina
[B7]                [E]
Um a morte não levou
        [D]                    [A]
E agonizante nos braços do amigo disse
                  [E]                   [A]
Vá conhecer meu filho, porque eu não vou

( [E]  [D]  [A]  [E]  [D]  [A] )
( [D]  [B7]  [E]  [D]  [A]  [E]  [A] )

“Naquela curva à beira da estrada
Uma cruz ao lado do pinheiro
Marca pra sempre onde foi ceifada
A vida e o sonho de um caminhoneiro
Com a morte do companheiro
A saudade vai chegar
Aqueles bons e velhos tempos
Nunca mais irão voltar”

          [A]                [E]
Mas o destino cruel e traiçoeiro
    [D]                [A]
Marcou a hora e o lugar
                           [E]
A chuva fina e a pista molhada
            [D]                [A]
Com uma carreta foram se chocar

          [D]
Mas como todos têm a sua sina
[B7]                [E]
Um a morte não levou
        [D]                    [A]
E agonizante nos braços do amigo disse
                  [E]                   [A]
Vá conhecer meu filho, porque eu não vou`,
  },
  {
    id:            "milionario-e-jose-rico-duas-camisas",
    titulo:        "Duas Camisas",
    artista:       "Milionário e José Rico",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2399,
    cifra: `[Intro] [G]  [C]  [F]  [C]
        [G]  [C]  [G]

       [C]
Você agora vai decidir
Qual de nós dois será o homem
           [F]          [C]  [G7]
Que você quer para viver
              [F]  [G7]    [C]
Assim não posso continuar
           [G7]
Você me encontra durante o dia
                             [C]  [G7]  [C]
E quando é noite tem que voltar

         [G7]         [C]
Se eu tiver duas camisas
      [G7]
E alguém chegar com frio
          [C]
Uma eu darei
            [G7]      [C]
 Mas no amor sou egoísta
         [G7]
Eu não quero sentir um sócio
                          [C]
Jamais, querida, consentirei

( [G]  [C]  [F]  [C] )
( [G]  [C]  [G] )

       [C]
Você agora vai decidir
Qual de nós dois será o homem
           [F]          [C]  [G7]
Que você quer para viver
              [F]  [G7]    [C]
Assim não posso continuar
           [G7]
Você me encontra durante o dia
                             [C]  [G7]  [C]
E quando é noite tem que voltar

         [G7]         [C]
Se eu tiver duas camisas
      [G7]
E alguém chegar com frio
          [C]           [G7]       [C]
Uma eu darei mas no amor sou egoísta
         [G7]
Eu não quero sentir um sócio
                          [C]
Jamais, querida, consentirei`,
  },
  {
    id:            "milionario-e-jose-rico-caminheiro",
    titulo:        "Caminheiro",
    artista:       "Milionário e José Rico",
    tom:           "F",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2266,
    cifra: `[Intro] [F]  [Bb]  [C7]  [F]  [Eb]  [F]

[Primeira Parte]

      [F]               [Am]
Caminheiro que lá vai indo
     [Bb]            [Am]
Pro rumo da minha terra
     [Bb]           [Am]
Por favor faça parada
    [F]                 [F7]  [F]
Na casa branca da serra
  [F]
Ali mora uma velhinha
    [F]
Chorando um filho seu
   [F]
Esta velha é minha mãe
     [Bb]        [F]
E o seu filho sou eu

[Refrão]

 [Bb]       [F]
Vai caminheiro
     [C7]
Leva este recado meu

( [F]  [Bb]  [C7]  [F]  [Eb]  [F] )

[Segunda Parte]

     [F]              [Am]
Por favor diga pra mãe
   [Bb]               [Am]
Zelar bem do que é meu
    [Bb]               [Am]
Cuidar bem do meu cavalo
       [F]                [F7]  [F]
Que o finado pai me deu
    [F]
Do meu cachorro campeiro
         [F]
Meu galo índio brigador
    [F]
Minha velha espingarda
      [Bb]       [F]
E o violão chorador

[Refrão]

 [Bb]       [F]
Vai caminheiro
    [C7]          [F]
Me faça este favor

( [F]  [Bb]  [C7]  [F]  [Eb]  [F] )

[Terceira Parte]

      [F]              [Am]
Caminheiro diga pra mãe
     [Bb]           [Am]
Pra não se preocupar
    [Bb]              [Am]
Se Deus quiser este ano
    [F]                [F7]  [F]
Eu consigo me formar
    [F]
Eu pegando meu diploma
        [F]
Vou trazer ela pra cá
       [F]
Mas se eu for mal nos estudos
            [Bb]               [F]
Vou deixar tudo e volto pra lá

[Refrão]

 [Bb]       [F]
Vai caminheiro
        [C7]         [F]
Não esqueça de avisar
 [Bb]       [F]
Vai caminheiro
        [C7]         [F]
Não esqueça de avisar
 [Bb]       [F]
Vai caminheiro
        [C7]         [F]
Não esqueça de avisar

[Final] [F]  [Bb]  [C7]  [F]  [Eb]  [F]`,
  },
  {
    id:            "milionario-e-jose-rico-o-ultimo-julgamento",
    titulo:        "O Último Julgamento",
    artista:       "Milionário e José Rico",
    tom:           "F",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 441,
    cifra: `[Intro] [F]  [C]  [Cm]  [F]
        [Gm]  [Am]  [Bb]  [Am]  [C]

 [F]       [Bb]       [F]
Senta aqui neste banco

Pertinho de mim
 [Dm]          [C]
Vamos conversar
   [Gm]                [C]
Será que você tem coragem
                  [Gm]
De olhar nos meus olhos
[C]         [F]
E me encarar

  [F]               [C]
Agora chegou sua hora
            [Bb]
Chegou sua vez
            [C]
Você vai pagar
    [C]                [Bb]
Eu sou a própria verdade
            [C]
Chegou o momento
    [Bb]        [F]  [Bb]
Eu vou te julgar

   [F]         [Gm]       [Am]
Pedi pra você não matar
 [Gm]         [F]
Nem para roubar
 [Dm]         [C]
Roubou e matou
   [Gm]                [C]
Pedi pra você agasalhar
             [Gm]
A quem tem frio
      [C]         [F]
Você não agasalhou
   [Dm]               [C]              [Bb]
Pedi para não levantar falso testemunho
           [C]
Você levantou
   [Bb]                [F]
A vida de muitos coitados
           [C]
Você destruiu
   [Bb]     [F]
Você arrasou

( [F]  [C]  [Cm]  [F] )
( [Gm]  [Am]  [Bb]  [Am]  [C] )

     [F]       [Bb]        [F]
Meu pai lhe deu inteligência

Para salvar vidas
 [Dm]          [C]
Você não salvou
    [Gm]                [C]
Em vez de curar os enfermos
           [Gm]    [C]         [F]
Armas nucleares você fabricou
  [F]               [C]
Usando sua capacidade
           [Bb]
Você destruiu
            [C]
Você se condenou
   [C]                [Bb]
A sua ganância foi tanta
            [C]       [Bb]        [F]  [Bb]
Que a você mesmo você exterminou

     [F]       [Gm]        [Am]
O avião que você inventou
     [Gm]     [F]     [Dm]          [C]
Foi para levar a paz e a esperança
 [Gm]                   [C]
Não pra matar seus irmãos
                [Gm]
Nem para jogar bombas
 [C]            [F]     [C]
Nas minhas crianças
       [Dm]                  [C]
Foi você que causou esta guerra
            [Bb]                   [C]
Destruiu a terra dos seus ancestrais
     [Bb]            [F]
Você é chamado de homem
          [C]   [Bb]     [F]
Mas é o pior dos animais

             [C]                [F]
Agora que está acabado pra sempre
              [C]                  [F]
Vou ver se você é culpado ou inocente
 [F7]        [Bb]                    [F]
Você é um monstro, covarde e profano
               [C]                [F]
É um grão de areia frente ao oceano
               [C]
Seu ouro falou alto
               [F]
Você tudo comprou
                [C]
Pisou nos mandamentos
                     [F]
Que a lei santa ensinou
   [F7]           [Bb]                  [F]
A mim você não compra com o dinheiro seu
               [C]                [Bb]  [Am]  [C]  [F]
Eu sou Jesus Cristo o Filho de Deus`,
  },
  {
    id:            "milionario-e-jose-rico-brigas",
    titulo:        "Brigas",
    artista:       "Milionário e José Rico",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1079,
    cifra: `[Intro] [G]  [G7M]  [G7]  [C9/D]  [G7]
        [C7M]  [Cm7]  [F7]
        [Bm7]  [Em7]  [Am7]  [D7]
        [C]  [G/B]  [Am7]  [G]

[Primeira Parte]

     [G7M]                  [B7]                [Am]     [Dm] [E7]
Veja só, que tolice nós dois, brigarmos tanto assim
     [Am]                   [F/A]              [D7]         [D7]
Se depois, vamos nós a sorrir, trocar de bem no fim
       [G]  [G7M]           [Bm7(5-)] [E7]           [Am7]             [C]
Para quê   maltratarmos o amor?   O amor não se maltrata não!
      [Am]               [Cm7]                [D7]         [Am7]  [D7]
Para quê? Se essa gente o que quer é ver nossa separação!

[Segunda Parte]

      [G]                  [B7]               [C7M]    [Dm]  [E7]
Brigo eu, você briga também, por coisas tão banais
      [Am]                 [F/A]             [D7]          [Am7]  [D7]
E o amor, em momentos assim, morre um pouquinho mais
         [G]    [G7M]           [Dm7]
E ao morrer, então é que se vê
[G7]              [C7M]             [Cm7]  [Cm6]
Que quem morreu: fui eu e foi você!
          [Bm7]    [Em7]           [Am7]  [D7]
Pois sem amor,        estamos sós
          [G]  [Am7]  [D7]
Morremos nós

[Solo] [G]  [G7M]  [Am7]  [Dm7]  [G7]  [C7M]
       [Cm7]  [F7]  [Bm7]  [Em7]  [Am7]  [D]
       [C]  [G/B]  [Am7]  [G]

[Repete a Segunda Parte]

      [G]                  [B7]               [C7M]     [Dm] [E7]
Brigo eu, você briga também, por coisas tão banais
      [Am]                 [F/A]                 [D7]
E o amor, em momentos assim, morre um pouquinho mais
         [G]    [G7M]           [Dm7]
E ao morrer, então é que se vê
[G7]          [C7M]                  [Cm7]
 Que quem morreu: fui eu e foi você!
          [Bm7]    [Em7]         [Am7]  [D7]
Pois sem amor,        estamos sós
          [G]  [D7]
Morremos nós

         [G]  [G7M]               [Dm7]
E ao morrer,   então é que se vê
  [G7]         [C7M]                [Cm7]  [F7]
Que quem morreu: fui eu e foi você!
          [Bm7]    [Em7]           [Am7]  [D7]
Pois sem amor,        estamos sós
          [C]   [D]  [G]
Morremos nós`,
  },
  {
    id:            "milionario-e-jose-rico-mensagem-do-alem",
    titulo:        "Mensagem do Além",
    artista:       "Milionário e José Rico",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5242,
    cifra: `[Intro] [Em] [Am] [B7] [Em]

Música, Divina Música

Que me envolve neste momento

Através desta mensagem meu eterno agradecimento...

Luz, Amor e Paz!


                  [B7]                      [Em]
Onde estou sou mais feliz, do que fui até então
            [B7]        [Am]             [Em]
É verdade, aí se diz: aqui se tem consolação!
                [B7]                         [Em]
O que eu tenho é pra dar, quem quiser pode pedir
            [B7]       [Am]            [Em]  [E]
Meu desejo é ensinar, uma lagrima a sorrir
             [Am]         [D7]                 [G]
Quero ser sua esperança,    luz, consolo e verdade
[Em]              [B7]                          [Em]
Quem espera sempre alcança, paz e amor na eternidade

                  [D]                         [G]
Esqueça toda essa dor, não pense mais nessa tristeza
[E]                [Am]            [D7]                  [G]
O meu mundo é de esplendor,    vem contemplar esta beleza
[C]        [Am]       [B7]                             [Em]
Não há razão para temor, tenha mais fé nos dias seus
               [Am]            [B7]         [Em]
Ponha na vida mais amor, menos mundo e mais Deus

[E]             [Am]         [D7]                [G]
Quero ser sua esperança,    luz, consolo e verdade
[Em]              [B7]                          [Em]
Quem espera sempre alcança, paz e amor na eternidade

                  [D]                         [G]
Esqueça toda essa dor, não pense mais nessa tristeza
[E]                [Am]            [D7]                  [G]
O meu mundo é de esplendor,    vem contemplar esta beleza
[C]        [Am]       [B7]                             [Em]
Não há razão para temor, tenha mais fé nos dias seus
               [Am]            [B7]         [Em]
Ponha na vida mais amor, menos mundo e mais Deus

 [Am]         [Em]
Amooooooor é Deeeeuuuussssss`,
  },
  {
    id:            "pena-branca-e-xavantinho-cuitelinho",
    titulo:        "Cuitelinho",
    artista:       "Pena Branca e Xavantinho",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3399,
    cifra: `[Tab - Intro]

E|-9--10-12-7-9--10-5-2-0----9--10-12-7-9--10-5-4-7-5------|
B|-10-12-14-9-10-12-7-3-2----10-12-14-9-10-12-7-5-9-5------|
G|---------------------------------------------------------|
D|---------------------------------------------------------|
A|---------------------------------------------------------|
E|---------------------------------------------------------|

         [A]
Cheguei na beira do porto
                    [E]
Onde as ondas se espáia
    [A]
As garça dá meia volta
                     [E]
E senta na beira da praia
                     [E7]
E o cuitelinho não gosta
                     [A]
Que o botão de rosa caia, ai, ai, ai

( [E]  [D]  [E]  [A] )

             [A]
Aí quando eu vim de minha terra
                 [E]
Despedi da parentaia
      [A]
Eu entrei no Mato Grosso
                    [E]
Dei em terras paraguaia
               [E7]
Lá tinha revolução
                   [A]
Enfrentei fortes bataia, ai, ai, ai

( [E]  [D]  [E]  [A] )

   [A]
A tua saudade corta
              [E]
Como aço de navaia
      [A]
O coração fica aflito
                   [E]
Bate uma, a outra faia
                    [E7]
Os óio se enche d'água
                       [A]
Que até a vista se atrapaia, ai, ai, ai

[Final] [E]  [D]  [E]  [A]`,
  },
  {
    id:            "pena-branca-e-xavantinho-poeira",
    titulo:        "Poeira",
    artista:       "Pena Branca e Xavantinho",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1588,
    cifra: `E|------------12-11-10-7-10-09-7-7-5-------------12-11-10-7-10-09-5-3-2-|
B|------10-13-------12-8-12-10-8-8-7-------10-13-------12-8-12-10-7-5-3-|
G|---10---------------------------------10------------------------------|
D|10---------------------------------10---------------------------------|
A|----------------------------------------------------------------------|

     [D]             [A7]    [G]                [D]
O carro de boi lá vai gemendo lá no estradão
        [A7]            [D]        [C]                 [D]
Suas grandes rodas fazendo profundas marcas no chão
 [G]               [D]                [G]        [D]     [A7]
Vai levantando poeira, poeira vermelha, poeira
                  [D]   [A7]
Poeira do meu sertão
  [D]                [A7]        [G]            [D]
Olha seu moço a boiada, em busca do ribeirão
       [A7]              [D]           [C]             [D]
Vai mugindo , vai ruminando,    cabeças em confusão
        [G]         [D]               [G]        [D]     [A7]
Vai levantando poeira, poeira vermelha, poeira
                  [D]   [A7]
Poeira do meu sertão
  [D]            [A7]       [G]               [D]
Olha só o boiadeiro montado em seu alazão
      [A7]            [D]      [C]                  [D]
Conduzindo toda a boiada com seu berrante na mão
      [G]           [D]                 [G]       [D]     [A7]
Seu rosto é só poeira , poeira vermelha, poeira
                  [D]   [A7]
Poeira do meu sertão
   [D]           [A7]       [G]             [D]
Barulho de trovoada coriscos em profusão
    [A7]               [D]        [C]              [D]
A chuva caindo em cascata na terra fofa do chão
   [G]               [D]              [G]        [D]      [A7]
Virando em lama poeira poeira vermelha  ,poeira
                  [D]
Poeira do meu sertão
   [D]                   [A7]        [G]            [D]
Poeira entra em meus olhos, não fico zangado não
      [A7]                   [D]      [C]                  [D]
Pois sei que quando eu morrer meu corpo irá para o chão
         [G]           [D]               [G]       [D]       [A7]
Se transformar em poeira, poeira vermelha, poeira
                 [D]                     [G]          [D]    [A7]
Poeira do meu sertão, poeira do meu sertão    , poeira
                  [D]
Poeira do meu sertão`,
  },
  {
    id:            "pena-branca-e-xavantinho-cio-da-terra",
    titulo:        "Cio da Terra",
    artista:       "Pena Branca e Xavantinho",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5276,
    cifra: `[Am]
  debulhar o trigo
        [G]   [C] [G] [F]  [C]      [F]
  recolher cada bago do trigo
          [C]   [F]      [C] [F]        [G]  [C]  [D]
  forjar do trigo o milagre do pão
                  [G]  [C]  [D]
  e se fartar de pão
  [Am]
  decepar a cana
       [G]   [C]  [G] [F] [C]     [F]
  recolher a garapa da cana
          [C]  [F]      [C] [F]       [G]  [C]  [D]
  roubar da cana a doçura do mel
                  [G]  [C]  [D]
  se lambuzar de mel
  [Am]
  afagar a terra
        [G]   [C]  [G] [F] [C]      [F]
  conhecer os desejos da terra
       [C]  [F]      [C] [F]         [G]  [C]  [D]
  cio da terra propícia estação
                 [G]  [C]  [D]
  e fecundar o chão`,
  },
  {
    id:            "pena-branca-e-xavantinho-vaca-estrela-e-boi-fuba",
    titulo:        "Vaca Estrela e Boi Fubá",
    artista:       "Pena Branca e Xavantinho",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3653,
    cifra: `[D]                 [A7]
Seu dotô me dê licença
                         [D]
Pra minha história eu contá
                               [A7]
Se hoje eu tô em terra estranha
                       [D]
E é bem triste o meu pená
                     [A7]
Mas eu já fui muito feliz
                [D]
Vivendo no meu lugá
                 [A7]
Eu tinha cavalo bão
                [D]                 [G]
Gostava de campiá e todo dia aboiava
       [A7]       [D]
Na portera do currá
[A7]     [D]
Eh eh há
         [G]           [D]
Eh eh eh eh Vaca Estrela
             [A7]       [D]   [A7]  [D]
Oh, oh, oh, oh, Boi Fubá
                  [A7]
Eu sou fio do Nordeste
               [D]
Não nego meu naturá
               [A7]
Mas uma seca medonha
                   [D]
Me tangeu de lá pra cá
                   [A7]
Lá eu tinha meu gadinho
                  [D]
Não é bom nem maginá
                   [A7]
Minha linda vaca Estrela
                   [D]
E o meu belo boi Fubá
                  [G]
Quando era de tardizinha
        [A7]      [D]
Eu começava aboiá
[A7]     [D]
Eh eh há
         [G]            [D]
Eh eh eh eh Vaca Estrela
         [A7]       [D]    [A7]    [D]
Oh oh oh oh Boi Fubá
               [A7]
Aquela seca medonha
                [D]
Fez tudo se trapaiá
                     [A7]
Não nasceu capim no campo
                  [D]
Para o gado sustentá
                [A7]
O sertão esturricou
              [D]
Fez o açude secá
                     [A7]
Morreu minha vaca Estrela
                    [D]
Se acabou meu boi Fubá
                      [G]
Perdi tudo quanto eu tinha
        [A7]         [D]
Nunca mais pude aboiá
[A7]      [D]
Eh eh há
          [G]          [D]
Eh eh eh eh Vaca Estrela
          [A7]      [D]    [A7]    [D]
Oh oh oh oh Boi Fubá
  [D]                 [A7]
E hoje nas terras do sul
                  [D]
Longe do torrão natá
                      [A7]
Quando vejo em minha frente
              [D]
Uma boiada passá
                   [A7]
As águas corre dos óio
                 [D]
Começo logo a chorá
                     [A7]
Me lembro da vaca Estrela
                  [D]
Me lembro do boi Fubá
                 [G]
Com sodade do Nordeste
     [A7]         [D]
Dá vontade de aboiá
[A7]      [D]
Eh eh há
          [G]          [D]
Eh eh eh eh Vaca Estrela
          [A7]      [D]  [A7]  [D]
Oh oh oh oh Boi Fubá`,
  },
  {
    id:            "pena-branca-e-xavantinho-calix-bento",
    titulo:        "Calix Bento",
    artista:       "Pena Branca e Xavantinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1811,
    cifra: `E |---------------------------------------------------------|
B |-----------5-------4-------2-----------4-------4-------0-|
G#|---------5-------3-------1-----------3-------3-------0---|
E |-0-2-4-5-----5-4-----4-2-------0-2-4-----4-2-----2-0-----|
B |-----------------------------4---------------------------|

          [B7]         [E]
Oh, Deus salve o oratório (2x)
      [E7]           [A]              [B7]
Onde Deus fez a morada, oiá, meu Deus
                   [E]    [B7] [E]
Onde Deus fez a morada, oiá

      [B7]            [E]
Onde mora o cálix bento (2x)
      [E7]         [A]              [B7]
E a hóstia consagrada, oiá, meu Deus
                  [E]    [B7] [E]
E a hóstia consagrada, oiá

      [B7]           [E]
De Jessé nasceu a vara (2x)
     [E7]           [A]              [B7]
Da vara nasceu a flor, oiá, meu Deus
                  [E]    [B7] [E]
Da vara nasceu a flor, oiá

      [B7]            [E]
E da flor nasceu Maria (2x)
      [E7]         [A]              [B7]
De Maria o Salvador, oiá, meu Deus
                 [E]   [B7] [E]
De Maria o Salvador, oiá`,
  },
  {
    id:            "pena-branca-e-xavantinho-eu-a-viola-e-deus",
    titulo:        "Eu, a Viola e Deus",
    artista:       "Pena Branca e Xavantinho",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2268,
    cifra: `[G]
  Eu vim-me embora
                         [D]
E na hora cantou um passarinho

Porque eu vim sozinho
[G]        [D]     [G]
Eu, a viola e Deus

Vim parando assustado, espantado
                    [D]
Com as pedras do caminho

Cheguei bem cedinho
[G]        [D]     [G]
Eu, a viola e Deus
                       [C]
Esperando encontrar o amor
           [D]                [G]
Que é das velhas toadas canções
                            [D]
Feito as modas pra gente cantar
        [G]              [D]     [G]
Nas quebradas dos grandes sertões
                        [C]
A poeira do velho estradão
        [D]                  [G]
Deixou marcas no meu coração
                          [D]
E nas palmas da mão e do pé
      [G]        [D]      [G]
Os catiras de uma "muié"

Ei, essa hora da gente
                 [D]
Ir-se embora é doída

Como é dolorida
[G]        [D]     [G]
Eu, a viola e Deus

Eu vou-me embora
                              [D]
E na hora vai cantar um passarinho

Porque eu vou sozinho
[G]        [D]     [G]
Eu, a viola e Deus

Vou parando assustado, espantado
                    [D]
Com as pedras do caminho

Vou chegar cedinho
[G]        [D]     [G]
A viola, eu e Deus
                       [C]
Esperando encontrar o amor
           [D]                [G]
Que é das velhas toadas canções
                            [D]
Feito as modas pra gente cantar
        [G]              [D]     [G]
Nas quebradas dos grandes sertões
                        [C]
A poeira do velho estradão
        [D]                 [G]
Deixou marcas no meu coração
                          [D]
E nas palmas da mão e do pé
      [G]        [D]      [G]
Os catiras de uma "muié"

Ei, essa hora da gente
                 [D]
Ir-se embora é doída

Como é dolorida
[G]        [D]     [G]
Eu, a viola e Deus`,
  },
  {
    id:            "pena-branca-e-xavantinho-triste-berrante",
    titulo:        "Triste Berrante",
    artista:       "Pena Branca e Xavantinho",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3061,
    cifra: `[Intro] [Dm]  [G]  [C]  [F]
        [Bm7(5-)]  [E7]  [Am]  [A]

[Primeira Parte]

    [Dm]                 [G]         [C]
Já vai bem longe este tempo, bem sei
     [F]               [G]              [C]
Tão longe que até penso que eu sonhei
     [Dm]                     [G]        [C]
Que lindo quando a gente ouvia distante
               [F]           [Dm]
O som daquele triste berrante
           [E]        [Am]   [A7]
E um boiadeiro a gritar, êia!
  [Dm]                [G]          [C]
E eu ficava ali na beira da estrada
           [F]        [Dm]         [E]            [A]
Vendo caminhar a boiada até o último boi passar

[Refrão]

 [Bm]         [E]                [A]
Ali passava boi, passava boiada
              [F#m]                 [Bm]
Tinha uma palmeira na beira da estrada
             [E]              [A]
Onde foi cravado muito coração

( [Dm]  [G]  [C]  [F]  [E7] )

[Segunda Parte]

     [Dm]                 [G]      [C]
Mas sempre foi assim e sempre será
  [F]                 [G]           [C]
O novo vem e o velho tem que parar
       [Dm]              [G]         [C]
O progresso cobriu a poeira da estrada
            [F]             [Dm]
E esse tudo que é o meu nada
              [E]      [Am]       [A7]
Eu hoje tenho que acatar e chorar
    [Dm]                [G]         [C]
E mesmo tendo gente e carro passando
            [F]          [Dm]          [E]       [A]
Meus olhos estão enxergando uma boiada passar

[Refrão]

[Bm]        [E]              [A]
Ali passava boi, passava boiada
              [F#m]                 [Bm]
Tinha uma palmeira na beira da estrada
[E]                            [A]
Onde foi cravado muito coração`,
  },
  {
    id:            "pena-branca-e-xavantinho-luar-do-sertao",
    titulo:        "Luar do Sertão",
    artista:       "Pena Branca e Xavantinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3146,
    cifra: `[Intro] [E]  [F#m]  [B7]  [E]

    [E]              [F#m]
Não há, ó gente, ó não
          [B7]         [E]
Luar como este do sertão

[E]                               [F#m]
Ó, que saudade do luar da minha terra
                  [B7]                      [E]
Lá na serra branqueando folhas secas pelo chão
                             [F#m]
Este luar cá da cidade tão escuro
                  [B7]                    [E]
Não tem aquela saudade do luar lá do sertão

    [E]              [F#m]
Não há, ó gente, ó não
          [B7]         [E]
Luar como este do sertão

                                [F#m]
A lua nasce por detrás da verde mata
                     [B7]                    [E]
Mas parece um sol de prata prateando a solidão
                            [F#m]
E a gente pega a viola e ponteia
                   [B7]                        [E]
E a canção e a lua cheia a nos nascer do coração

     [E]              [F#m]
Não há, ó gente, ó não
          [B7]         [E]
Luar como este do sertão

                                 [F#m]
Coisa mais bela neste mundo não existe
                     [B7]                       [E]
Do que ouvir um galo triste no sertão que faz luar
                                        [F#m]
Parece até que a alma da lua é que diz, canta
                [B7]                     [E]
Escondida na garganta desse galo a soluçar

    [E]              [F#m]
Não há, ó gente, ó não
          [B7]         [E]
Luar como este do sertão

                                  [F#m]
Ai quem me dera eu morresse lá na serra
                 [B7]                      [E]
Abraçado a minha terra e dormindo de uma vez
                              [F#m]
Ser enterrado numa grota pequenina
                  [B7]                   [E]
Onde a tarde a sururina chora a sua viuvez

    [E]              [F#m]
Não há, ó gente, ó não
          [B7]         [E]
Luar como este do sertão`,
  },
  {
    id:            "pena-branca-e-xavantinho-canto-do-povo-de-um-lugar",
    titulo:        "Canto do Povo de Um Lugar",
    artista:       "Pena Branca e Xavantinho",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2066,
    cifra: `[C]                  [Am]
Todo dia o sol se levanta
           [F]               [G]    [C]
E a gente canta ao sol de todo dia
 [C]                     [Am]
Finda a tarde a terra cora
           [F]
E a gente chora
         [G]      [C]
Porque finda a tarde
 [C]                    [Am]
Quando a noite a lua mansa
            [F]        [G]        [C]
E a gente dança venerando a noite`,
  },
  {
    id:            "pena-branca-e-xavantinho-de-papo-pro-ar",
    titulo:        "De papo pro ar",
    artista:       "Pena Branca e Xavantinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 494,
    cifra: `[E]
Não quero outra vida
                       [B7]
Pescando no rio de jereré

Tem peixe bom

Tem siri patola
            [E]
De dá com o pé
             [B7]
Quando no terreiro

Faz noite de luá

E vem a saudade

Me atormentá

Eu me vingo dela

Tocando viola
            [E]  [B7]  [E]  [B7]  [E]
De papo pro á

Se compro na feira

Feijão, rapadura
              [B7]
Pra que trabaiá

Eu gosto do rancho

O homem não deve
        [E]
Se amofiná`,
  },
  {
    id:            "pena-branca-e-xavantinho-chua-chua",
    titulo:        "Chuá-chuá",
    artista:       "Pena Branca e Xavantinho",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2290,
    cifra: `[A]             [Bm7]
Deixa a cidade formosa morena
        [E7]
Linda pequena
              [A]
E volta ao sertão
                          [Bm7]
Beber a água da fonte que canta
          [E7]
Que se levanta
            [A]
Do meio do chão
                           [Bm7]
Se tu nasceste cabrocha cheirosa
            [E7]
Cheirando a rosa
            [A]     [A7]
Do peito da terra
           [D]     [E7]      [A]
Volta prá vida serena da roça
  [F#7]      [Bm7]
Daquela palhoça
   [E7]     [A]
Do alto da serra
             [E7]
E a fonte a cantã
Chuá, chuá
               [A]
E as água a corrê
Chuê, chuê
               [D]
Parece que alguém
      [E]        [A]
Que cheio de mágoa
  [F#7]         [Bm]
Deixasse quem há de
   [E7]       [A]
Dizer a saudade
            [E7]
No meio das água
         [E]       [A7] [D] [Dm] [A] [Cº] [Bm] [E7] [A]
Rolando também
      [A]                [Bm7]
A lua branca de luz prateada
         [E7]
Faz a jornada
             [A]
No alto dos céus
                    [Cº]         [Bm7]
Como se fosse uma sombra altaneira
       [E7]
Da cachoeira
            [A]
Fazendo escarceos
                        [F#7]      [Bm7]
Quando esta luz lá na altura distante
        [E7]
Loira ofegante
            [A]    [A7]
No poente a cair
            [D]         [E7]         [A]
Dá-me essa trova que o pinho descerra
       [F#7]      [Bm7]
Que eu volto pra serra
         [E7]      [A]
Que eu quero partir
              [E7]
É a fonte a cantá
Chuá, chuá
               [A]
E as água a corrê
Chuê, chuê
               [D]
Parece que alguém
      [E]        [A]
Que cheio de mágoa
  [F#7]         [Bm]
Deixasse quem há de
   [E7]       [A]
Dizer a saudade
            [E7]
No meio das água
         [E]
Rolando também`,
  },
  {
    id:            "pena-branca-e-xavantinho-uirapuru",
    titulo:        "Uirapuru",
    artista:       "Pena Branca e Xavantinho",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4801,
    cifra: `[C]   [C/Bb]  [F]
Uirapuru, Uirapuru
     [G7]                        [C]
Seresteiro, cantador de meu sertão
    [C] [C/Bb]   [F]
Uirapuru, Uirapuru
        [G7]                         [C]
Tens no canto as mágoas do meu coração
   [C]                               [F]
A mata inteira fica muda ao teu cantar
        [G7]                    [C]
Tudo se cala para ouvir tua canção
           [F]           [C7]       [F]
Que vai ao céu numa sentida melodia
      [G7]                         [C]
Vai a Deus em forma triste de oração
    [C]  [C/Bb]   [F]
Uirapuru, Uirapuru
     [G7]                        [C]
Seresteiro, cantador de meu sertão
    [C] [C/Bb]   [F]
Uirapuru, Uirapuru
        [G7]                         [C]
Tens no canto as mágoas do meu coração
                                       [F]
Se Deus ouvisse o que te sai do coração
     [G7]                      [C]
Entenderia o que é dor tua canção
           [F]           [C7]         [F]
E dos seus olhos tanto pranto rolaria
      [G7]                       [C]
Que daria para salvar o meu sertão
    [C]  [C/Bb]   [F]
Uirapuru, Uirapuru
     [G7]                        [C]
Seresteiro, cantador de meu sertão
    [C] [C/Bb]   [F]
Uirapuru, Uirapuru
        [G7]                         [C]
Tens no canto as mágoas do meu coração`,
  },
  {
    id:            "pena-branca-e-xavantinho-marvada-pinga",
    titulo:        "Marvada Pinga",
    artista:       "Pena Branca e Xavantinho",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2278,
    cifra: `[G]
Com a marvada pinga
                [D7]
É que eu me atrapaio
                              [G]
Eu pego no copo e já dou meu taio
                              [C]
Eu chego na venda e dali não saio
Ali memo eu bebo
            [D7]
Ali memo eu caio
                             [G]
Só pra carregar que eu dou trabaio
Oi lá
[G]
Sempre bebo a pinga
              [D7]
Porque gosto dela
Bebo da branquinha,
           [G]
Bebo da amarela
                           [C]
Eu bebo no copo, bebo na tigela
                             [D7]
Bebo temperada com cravo e canela
Seja em qualquer tempo vai
          [G]
Pinga na goela
Oi lá
           [G]
Venho da cidade
           [D7]
Já venho cantando
Trago um garrafão
             [G]
Que venho chupando
Venho pro caminho,
            [C]
Venho trupicando
Chutando o barranco
             [D7]
Venho cambetiando
No lugar que eu caio
           [G]
Já fico roncando
Oi lá
              [G]
Não largo da pinga
                 [D7]
Nem que eu pito
                              [G]
Que é de inclinação eu acho bonito
                              [C]
O cheiro da pinga fico meio afrito
                               [D7]
Bebo uma garrafa e já quero um litro
                            [G]
Já fico babando crio dois espírito
Oi lá
[G]                           [D7]
Pinga temperada eu não modifico
Quem manda no bule
             [G]
Eu chupo no bico

Vou rolar na pueira
               [C]
Que nem tico-tico
                                [D7]
Vou de quatro pé destripando o bico
Junta a mosquiteira
              [G]
Mas eu não imprico
Oi lá
           [G]
A muié me disse
        [D7]
Ela me falou
Largue dessa pinga
          [G]
Peço por favor
Prosa de muié
             [C]
Nunca dei valor
Bebo no sol quente
                [D7]
Pra esfriar o calor
                           [G]
E bebo de noite pra fazer suador
Oi lá
           [G]
A muié me disse
          [D7]
Largue de beber
Pois eu com essa pinga
             [G]
Hei de combatê
Você fique quieto largue
      [C]
De tremer
Depois que se embriaga
             [D7]
Não levanto ocê
Vô deixá da pinga
                 [G]
Só quando eu morre`,
  },
  {
    id:            "pena-branca-e-xavantinho-poeira-vermelha",
    titulo:        "Poeira Vermelha",
    artista:       "Pena Branca e Xavantinho",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1068,
    cifra: `E|------------12-11-10-7-10-09-7-7-5-------|
B|------10-13-------12-8-12-10-8-8-7-------|
G|---10---------------------------------10-|
D|10---------------------------------10----|
A|-----------------------------------------|
E|-----------------------------------------|

E|------12-11-10-7-10-09-5-3-2-------------|
B|10-13-------12-8-12-10-7-5-3-------------|
G|-----------------------------------------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|

     [D]             [A7]    [G]
O carro de boi lá vai gemendo lá no
      [D]
Estradão
 [G]            [A7]        [D]              [C]
Suas grandes rodas fazendo profundas marcas
      [D]
 No chão
 [G]        [A7]       [D]                [G]
Vai levantando poeira, poeira vermelha
   [D]     [A7]
Poeira
                  [D]   [A7]
Poeira do meu sertão
  [D]                [A7]
Olha seu moço a boiada, em busca do
      [D]
Ribeirão
       [A7]              [D]                 [C]
Vai mugindo , vai ruminando,    cabeças em
      [D]
Confusão
 [G]       [A7]         [D]               [G]
Vai levantando poeira, poeira vermelha
   [D]     [A7]
Poeira
                  [D]   [A7]
Poeira do meu sertão
  [D]            [A7]                      [D]
Olha só o boiadeiro montado em seu alazão
      [A7]            [D]                [C]
Conduzindo toda a boiada com seu berrante
    [D]
Na mão
[G]        [A7]        [D]               [G]
Seu rosto é só poeira , poeira vermelha
   [D]     [A7]
Poeira
                  [D]   [A7]
Poeira do meu sertão
   [D]           [A7]                    [D]
Barulho de trovoada coriscos em profusão
    [A7]               [D]              [C]
A chuva caindo em cascata na terra fofa do
  [D]
Chão
   [G]        [A7]       [D]              [G]
Virando em lama poeira poeira vermelha
   [D]      [A7]
,Poeira
                  [D]   [A7]
Poeira do meu sertão
   [D]                   [A7]
Poeira entra em meus olhos, não fico
         [D]
Zangado não
      [A7]                   [D]             [C]
Pois sei que quando eu morrer meu corpo irá
          [D]
 Para o chão
 [G]        [A7]           [D]               [G]
Se transformar em poeira, poeira vermelha
  [D]       [A7]
Poeira
                 [D]   [C]                  [G]
Poeira do meu sertão, poeira do meu sertão
       [D]    [C]
   , poeira
                  [G]
Poeira do meu sertão`,
  },
  {
    id:            "pena-branca-e-xavantinho-jardim-da-fantasia",
    titulo:        "Jardim da Fantasia",
    artista:       "Pena Branca e Xavantinho",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1777,
    cifra: `Intro: [D+]  [F#m]  [G]  [A]  [D]  [F#m]  [G]  [A]

[D+]           [F#m]
Bem te vi  bem te vi,
   [G]                     [F#m]
andar por um jardim em flor
    [G]                  [F#m]
Chamando os bichos de amor
    [G]             [D+]  [A]
Sua boca pingava mel

[D+]             [F#m]
Bem te quis, bem te quis
   [G]                [F#m]
E ainda quero muito mais
[G]                        [F#m]
Maior que a imensidão da paz
   [G]               [D+]
E bem maior que o sol
[F#m]         [G]                 [F#m]
Onde estás voei por este céu azul
   [G]                [F#m]
Andei estradas do além
[G]                [D+]
Onde estará meu bem
[F#m]            [G]                  [F#m]
Onde estás nas nuvens ou na insensatez
    [G]                [F#m]
Me beije só mais uma vez
[G]                [D+]
Depois volte pra lá.`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-pagode-em-brasilia",
    titulo:        "Pagode Em Brasília",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1919,
    cifra: `Afinação: D A D F# A D

[Intro] [D]  [A7]  [D]  [A7]
        [D]  [G]  [D]  [A7]
        [D]  [A7]  [D]

[Tab - Solo]

Parte 1 de 4
E|-4------11-11p0----0-2p0---0-5p0---0--4p0--|
B|-0----0----12p0--0---4p0-0---7p0-0----5p0--|
G|-0-----------------------------------------|
D|-0-----------------------------------------|
A|-0----0----------0-------0-------0---------|
E|-0-----------------------------------------|

Parte 2 de 4
E|---0-7p0---0-2p0---0-5p0---0-4p0-----------|
B|-0---9p0-0---4p0-0---7p0-0---5p0-----------|
G|-------------------------------------------|
D|-------------------------------------------|
A|-0-------0-------0-------0-----------------|
E|-------------------------------------------|

Parte 3 de 4
E|---0-7p0---0-9p0----0-11p0---0-12----------|
B|-0---9p0-0---10p0-0---12p0-0---12-----12---|
G|------------------------------------0------|
D|----------------------------------0------0-|
A|-0-------0--------0--------0---------------|
E|-------------------------------------------|

Parte 4 de 4
    [D]   [A7]               [D]
E|-------------------------------------------|
B|-0-0-0---0-x--0---0-0-----------0-0--------|
G|-0-0-0h3-3-x--1---1-1--0---0-x--0-0--------| (2x)
D|-0-0-0h2-2-x--2p0-0-0--2h4-4-x--0-0--------|
A|-0-0-0h4-4-x-----------0---0-x--0-0--------|
E|-------------------------------------------|
   ↓ ↑ ↓   ↑ ↓   ↑   ↓ ↑  ↓   ↑ ↓  ↓ ↑

[Primeira Parte]

[D]
  Quem tem mulher que namora
                      [A7]
Quem tem burro empacador

Quem tem a roça no mato
                       [D]
Me chama que jeito eu dou
                   [D7]
Eu tiro a roça do mato
                [G]   [D]  [G]
Sua lavoura melhora
  [A7]
E o burro empacador
                   [D]
Eu corto ele na espora

E a mulher namoradeira
             [A7]              [D]   [A7]
Eu passo um couro e mando embora

[Solo] [D]  [A7]  [D]  [A7]
       [D]  [G]  [D]  [A7]
       [D]  [A7]

[Segunda Parte]

[D]
  Tem prisioneiro inocente
                    [A7]
No fundo de uma prisão

Tem muita sogra encrenqueira
                      [D]
E tem violeiro embrulhão
                     [D7]
Pros prisioneiro inocente
                 [G]   [D]  [G]
Eu arranjo adevogado
  [A7]
E a sogra encrequeira
                   [D]
Eu dou de laço dobrado

E os violeiro embrulhão
          [A7]              [D]   [A7]
Com meus verso estão quebrado

[Solo] [D]  [A7]  [D]  [A7]
       [D]  [G]  [D]  [A7]
       [D]  [A7]

[Terceira Parte]

[D]
  Bahia deu Rui Barbosa
                  [A7]
Rio Grande deu Getúlio

Em Minas deu Juscelino
                        [D]
De São Paulo e eu me orgulho
                  [D7]
Baiano não nasce burro
                       [G]     [D]  [G]
Gaúcho é o rei das cochilhas
    [A7]
Paulista ninguém contesta
                     [D]
É o brasileiro que brilha

Quero ver cabra de peito
       [A7]           [D]    [A7]  [D]
Pra fazer outra Brasília

[Solo] [D]  [A7]  [D]  [A7]
       [D]  [G]  [D]  [A7]
       [D]  [A7]

[Quarta Parte]

[D]
  No estado de Goiás
                    [A7]
Meu pagode está mandando

O Bazar do Valdomiro
                   [D]
Em Brasília é soberano
                [D7]
No repique da viola balanceia
          [G]   [D]  [G]
O chão goiano
     [A7]
Vou fazer a retirada
                      [D]
E despedir dos paulistanos

Adeus que eu já vou embora
       [A7]           [D]    [A7]  [D]
Que Goiás tá me chamando

[Tab - Final]

   [D]    [A7]      [D]
E|-x--0-0--0---------------------------------|
B|-x--0-0--0-0-------------------------------|
G|-0--0-1--1-1--0----------------------------|
D|-0--0-2--2-2--2h4--------------------------|
A|-0------------0----------------------------|
E|-------------------------------------------|
   ↓  ↑ ↓  ↓ ↑  ↓`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-amargurado",
    titulo:        "Amargurado",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "B",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 920,
    cifra: `[Intro] [E]  [F#]  [B]
        [G#m]  [C#m]  [F#]  [B]

[Primeira Parte]

[B]
  O que é feito daqueles beijos que eu te dei?

Daquele amor cheio de ilusão
                             [F#7]
Que foi a razão do nosso querer
          [C#m]                             [F#7]
Pra onde foram tantas promessas que me fizeste
             [E]                  [F#7]              [B]
Não se importando que o nosso amor viesse a morrer

[B]
Talvez com outro estejas vivendo bem mais feliz
                         [B7]               [E]
Dizendo ainda que nunca houve amor entre nós
                             [F#7]               [B]
Pois tu sonhavas com uma riqueza que eu nunca tive
             [G#]            [C#m]
E se ao meu lado muito sofreste
         [F#7]                 [B]  [A#m]  [G#m]
O meu desejo é que vivas melhor

[Refrão]

         [F#]            [E]              [B]
Vai com Deus, sejas feliz com o teu amado
                       [F#7]            [E]             [B]
Tens aqui um peito magoado que muito sofre por te amar
         [E]                              [F#7]
Eu só desejo que a boa sorte siga teus passos
                         [E]
Mas se tiveres algum fracasso
            [F#7]               [B]   [A#m]  [G#m]
Creias que ainda te possa ajudar

( [E]  [F#]  [B] )
( [G#m]  [C#m]  [F#] )
( [B]  [A#m]  [G#m] )

[Refrão]

         [F#7]           [E]              [B]
Vai com Deus, sejas feliz com o teu amado
                       [F#7]            [E]             [B]
Tens aqui um peito magoado que muito sofre por te amar
         [E]                              [F#7]
Eu só desejo que a boa sorte siga teus passos
                         [E]
Mas se tiveres algum fracasso
            [F#]                [B]   [E]  [F#]  [B]
Creias que ainda te possa ajudar`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-chora-viola",
    titulo:        "Chora Viola",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2793,
    cifra: `[Intro]

E|---4/10---10---9----7---000---10---10---9----7-----000----|
B|---5/12---12---10---9---000---12---12---10---9-----000----|
G|------------------------000------------------------000----|
D|------------------------000------------------------000----|
A|------------------------000------------------------000----|
E|----------------------------------------------------------|

E|----------------------000---------------------------------|
B|----------------------000-----------------------0---------|
G|---3---3---1---0------000---3---3---1---0------------6----|
D|---4---4---2---0------000---4---4---2---0------0--4-----4-|
A|----------------------000-----------------------5---------|
E|----------------------------------------------------------|

E|--------------------------------------------------------------|
B|-----0-------------0----------------0-------------0-----------|
G|---------------------------6------------------------------6---|
D|----------2p0---------0--4---4-----------2p0---------0--4---4-|
A|---0---4------2h4--5--------------0---4------2h4--5-----------|
E|--------------------------------------------------------------|

E|-------------------------0--0--0-----0--0--0------------------|
B|-----0---0---0---0--0----0--0--0-----0--0--0------------------|
G|-------------------------6--6--6-----6--6--6------------------|
D|---------2---4---2-/4----4--4--4-----4--4--4------------------|
A|-----0---4---2---4-/5----5--5--5-----5--5--5------------------|
E|--------------------------------------------------------------|

[E7]
Eu não caio do cavalo  nem do burro e nem do galho
Ganho dinheiro cantando a viola é meu trabalho
                   [A]                      [B7]   [A]  [B7]
No lugar onde tem seca eu de sede lá não caio
                 [E]                      [B7]      [E]
Levanto de madrugada e bebo pingo de orvalho  chora viola !

 [E7]
Não como gato por lebre  não compro cipó por laço
Eu não durmo de botina  não dou beijo sem abraço
                    [A]                       [B7]  [A]  [B7]
Fiz um ponto lá na mata caprichei e dei um nó
                 [E]                   [B7]   [E]
Meus amigos eu ajudo  inimigo tenho dó  chora viola !

[E7]
A lua é dona da noite e o sol é dono do dia
Admiro as mulheres que gostam de cantoria
                      [A]                            [B7]    [A]  [B7]
Mato a onça e bebo o sangue  furo a terra e tiro o ouro
                    [E]                    [B7]         [E]
Quem sabe agüentar saudade  não agüenta desaforo  chora viola !

[E7]
Eu ando de pé no chão  piso por cima da brasa
Quem não gosta de viola que não ponha o pé lá em casa
                [A]                      [B7]   [A]  [B7]
A viola está tinindo o cantador tá de pé
                    [E]                       [B7]   [E]
Quem não gosta de viola  brasileiro bom não é  chora viola !`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-prato-do-dia",
    titulo:        "Prato do Dia",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1431,
    cifra: `[Intro]

E|---------------------------------------------------------|
B|---------------------------------------------------------|
G|------------2--------------2-----------------------------|
D|------2----------2----3----------2---3-----0-------------|
A|--3------------------------------------------------------|
E|---------------------------------------------------------|

E|---------------------------------------------------------|
B|-----------------------------------------------------1---|
G|-----0----0--0---0------------------------------0--------|
D|------------------------3--2--------------------2--------|
A|---------------------------------0--2---3-----3----------|
E|---------------------------------------------------------|

[C]                          [G7]
Sobre as margens de uma estrada
                        [C]
Uma simples pensão existia
    [C7]               [F]
A comida era tipo caseira
              [C7]                  [F]  [C7]  [F]
E o frango caipira era o prato do dia
       [C7]                 [F]
Proprietário homem de respeito
          [C7]             [C]
Ali trabalhava com sua família
                       [G7]
Cozinheira era a sua esposa
                           [C]    [G7] [C7]
E a garçonete era uma das filhas

                        [G7]
Foi chegando naquela pensão
                       [C]
Um viajante já fora de hora
      [C7]                 [F]
Foi dizendo para a garçonete
             [C7]                 [F]  [C7] [F]
Me traga um frango vou jantar agora
      [C7]              [F]
Eu estou bastante atrasado
      [C7]
Terminando eu já vou embora
       [C]                   [G7]
Ela então respondeu num sorriso
                                 [C]   [G7] [C]
Mamãe tá de pé, pode crer, não demora

                        [G7]
Quando ela foi servir a mesa
                          [C]
Delicada e com muito bom jeito
      [C7]                    [F]
Me desculpe mas trouxe uma franga
            [C7]              [F]   [C7]  [F]
Talvez não esteja cozida direito
      [C7]                 [F]
O viajante foi lhe respondendo
                [C7]
Pra mim franga crua talvez eu aceito
       [C]            [G7]
Sendo uma igual a você
                                  [C]    [G7] [C]
Seja a qualquer hora também não enjeito

                      [G7]
Foi saindo de cabeça baixa
                           [C]
Pra queixar ao seu pai a mocinha
       [C7]               [F]
Minha filha mate outra franga
          [C7]               [F]   [C7]  [F]
Pode temperar porém não cozinha
      [C7]                  [F]
Vou levar essa franga na mesa
             [C7]
Se bem que comigo a conversa é curtinha
     [C]                [G7]
É a coisa que mais eu detesto
                              [C]   [G7] [C]
Ver homem barbado fazendo gracinha

                         [G7]
Foi chegando o velho e dizendo
                         [C]
Vim trazer o pedido que fez
          [C7]             [F]
Quando o cara tentou recusar
             [C7]                     [F]  [C7]  [F]
Já se viu na mira de um Schimitt inglês
    [C7]                   [F]
O negócio  foi limpar o prato
                [C7]
Quando o proprietário lhe disse cortez
       [C]               [G7]
Nós estamos de portas abertas
                                [C]   [G7] [C]
Pra servir a moda que pede o freguês`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-a-vaca-ja-foi-pro-brejo",
    titulo:        "A Vaca Já Foi Pro Brejo",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "B",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1778,
    cifra: `[Intro] [F#7]  [B]  [F#7]  [B]  [F#7]

[Tab - Solo Intro]

E|-/14-14-12-11--11-11-11-------------------|
B|---------------12-12-12-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-14-14-9--12--11-11-11\-------------------|
B|-11-11-11-14--12-12-12\-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[B]
  Mundo velho está perdido

Já não endireita mais

Os filhos de hoje em dia
                    [F#7]
Já não obedecem os pais

É o começo do fim

Já estou vendo sinais
   [E]
Metade da mocidade
         [F#7]        [B]   [F#7]  [B]
Estão virando marginais
  [E]
É um bando de serpentes
    [F#7]              [B]
Os mocinhos vão na frente
      [F#7]          [B]
As mocinhas vão atrás

[Solo] [F#7]  [B]  [F#7]  [B]  [F#7]

[Tab - Solo]

E|-/14-14-12-11--11-11-11-------------------|
B|---------------12-12-12-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-14-14-9--12--11-11-11\-------------------|
B|-11-11-11-14--12-12-12\-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Segunda Parte]

[B]
  Pobre pai e pobre mãe

Morrendo de trabalhar

Deixa o couro no serviço
                     [F#7]
Pra fazer filho estudar

Compra carro à prestação

Para o filho passear
    [E]
Os filhos vivem rodando
      [F#7]        [B]  [F#7]  [B]
Fazendo pneu cantar
   [E]
Ouvi um filho dizer
   [F#7]               [B]
O meu pai tem que gemer
        [F#7]           [B]
Não mandei ninguém casar

[Solo] [F#7]  [B]  [F#7]  [B]  [F#7]

[Tab - Solo]

E|-/14-14-12-11--11-11-11-------------------|
B|---------------12-12-12-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-14-14-9--12--11-11-11\-------------------|
B|-11-11-11-14--12-12-12\-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Terceira Parte]

[B]
  O filho parece rei

Filha parece rainha

Eles que mandam na casa
                  [F#7]
E ninguém tira farinha

Manda a mãe calar a boca

Coitada fica quietinha
   [E]
O pai é um zero à esquerda
       [F#7]         [B]    [F#7]  [B]
É um trem fora da linha
    [E]
Cantando agora eu falo
    [F#7]               [B]
Terreiro que não tem galo
           [F#7]              [B]
Quem canta é frango e franguinha

[Solo] [F#7]  [B]  [F#7]  [B]  [F#7]

[Tab - Solo]

E|-/14-14-12-11--11-11-11-------------------|
B|---------------12-12-12-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-14-14-9--12--11-11-11\-------------------|
B|-11-11-11-14--12-12-12\-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Quarta Parte]

[B]
  Pra ver a filha formada

Um grande amigo meu

O pão que o diabo amassou
                 [F#7]
O pobre homem comeu

Quando a filha se formou

Foi só desgosto que deu
  [E]
Ela disse assim pro pai
         [F#7]        [B]  [F#7]  [B]
Quem vai embora sou eu
    [E]
Pobre pai banhado em pranto
   [F#7]              [B]
O seu desgosto foi tanto
          [F#7]         [B]
Que o pobre velho morreu

[Solo] [F#7]  [B]  [F#7]  [B]  [F#7]

[Tab - Solo]

E|-/14-14-12-11--11-11-11-------------------|
B|---------------12-12-12-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-14-14-9--12--11-11-11\-------------------|
B|-11-11-11-14--12-12-12\-------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Quinta Parte]

[B]
  Meu mestre é Deus nas alturas

O mundo é meu colégio

Eu sei criticar cantando
                    [F#7]
Deus me deu o privilégio

Mato a cobra e mostro o pau

Eu mato e não apedrejo
    [E]
Dragão de sete cabeças
        [F#7]         [B]    [F#7]  [B]
Também mato e não aleijo
     [E]
Estamos no fim do respeito
    [F#7]              [B]
Mundo velho não tem jeito
   [F#7]              [B]
A vaca já foi pro brejo

[Final] [F#7]  [B]`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-boi-soberano",
    titulo:        "Boi Soberano",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3935,
    cifra: `[Intro] [A]  [E7]  [A]  [E7]  [A]

E|---7-7-7--7--7--7---7--|
B|---7-7-7--7--7--7---7--|
G|--7-7-7--8--7--8---7--|
D|---7-7-7--9--7--9---7--|
A|---7-7-7--7--7--7---7--|

E|---------------------------------------------------------2-2-2-4-4-|
B|-------------9-9-7-7-----9-9-7-7-6-6-9-9-7-7-6-6-4-4-2-2-------2-2-|
G|-8-8-8--7-7-8-8-7-7-7-7-8-8-7-7-5-5-8-8-7-7-5-5-3-3-2-2-----------|
D|--9-9-9--7-7---------7-7-------------------------------------------|
A|-------------------------------------------------------------------|

Me alembro e tenho saudade do tempo que vai ficando
Do tempo de boiadeiro que eu vivia viajando

E|----------------2-2-----0-0-4-4-0-0-----4-4-2-2-0-0-4-4-2-2-0-0-----|
B|--4-4-4-2-2-2-2-----2-2-0-0-2-2-----0-0-----------------------------|
G|-3-3-3-2-2-2-2-----2-2---------------------------------------------|
D|--------------------------------------------------------------------|
A|--------------------------------------------------------------------|

Eu nunca tinha tristeza vivia sempre cantando
Mês e mês cortando estrada no meu cavalo ruano

E|--------------------------------4-4-4-4-4-------2-2-2-2-0-0-4-4-0--|
B|--0-0-0---------0-0-0-0-0-2-2-2-----------0-0-0--------------------|
G|-------0-0-0-0----------------------------------------------------|
D|-------------------------------------------------------------------|
A|-------------------------------------------------------------------|

Sempre lidando com gado, desde a idade de 15 anos
Não me esqueço de um transporte, seiscentos bois cuiabanos

E|---0-2-4-----------------4-2-0-0-0----------------------------------|
B|---------0-2-2-------2-2--------------------------------------------|
G|--------------3-2-0-2-2--------------------------------------------|
D|---------------4-2-0------------------------------------------------|
A|--------------------------------------------------------------------|

No meio tinha um boi preto por nome de Soberano!

[Intro] [A]  [E7]  [A]  [E7]  [A]

E|---7-7-7--7--7--7---7--|
B|---7-7-7--7--7--7---7--|
G|--7-7-7--8--7--8---7--|
D|---7-7-7--9--7--9---7--|
A|---7-7-7--7--7--7---7--|

E|----------------------------------------------------------2-2-2-4-4-|
B|--------------9-9-7-7-----9-9-7-7-6-6-9-9-7-7-6-6-4-4-2-2-------2-2-|
G|--8-8-8--7-7-8-8-7-7-7-7-8-8-7-7-5-5-8-8-7-7-5-5-3-3-2-2-----------|
D|---9-9-9--7-7---------7-7-------------------------------------------|
A|--------------------------------------------------------------------|

Na hora da despedida o fazendeiro foi falando
Cuidado com esse boi que nas guampas é leviano

E|----------------2-2-----0-0-4-4-0-0-----4-4-2-2-0-0-4-4-2-2-0-0-----|
B|--4-4-4-2-2-2-2-----2-2-0-0-2-2-----0-0-----------------------------|
G|-3-3-3-2-2-2-2-----2-2---------------------------------------------|
D|--------------------------------------------------------------------|
A|--------------------------------------------------------------------|

Esse boi é criminoso já me fez diversos danos
Tocamos pela estrada naquilo sempre pensando

E|---------------------------------4-4-4-4-4-------2-2-2-2-0-0-4-4-0--|
B|---0-0-0---------0-0-0-0-0-2-2-2-----------0-0-0--------------------|
G|--------0-0-0-0----------------------------------------------------|
D|--------------------------------------------------------------------|
A|--------------------------------------------------------------------|

Na cidade de Barretos, na hora que eu fui chegando
A boiada estourou ai, só via gente gritando

E|---0-2-4-----------------4-2-0-0-0----------------------------------|
B|---------0-2-2-------2-2--------------------------------------------|
G|--------------3-2-0-2-2--------------------------------------------|
D|---------------4-2-0------------------------------------------------|
A|--------------------------------------------------------------------|

Foi mesmo uma tirania, na frente ia o Soberano

[A]  [E7]  [A]  [E7] [A]

E|---7-7-7--7--7--7---7--|
B|---7-7-7--7--7--7---7--|
G|--7-7-7--8--7--8---7--|
D|---7-7-7--9--7--9---7--|
A|---7-7-7--7--7--7---7--|

O comércio da cidade as portas foram fechando
Na rua tinha um menino de certo estava brincando
Quando ele viu que morria de susto foi desmaiando
Coitadinho debruçou na frente do Soberano
O Soberano parou ai, em cima ficou bufando
Rebatendo com o chifre, os bois que vinham passando
Naquilo o pai da criança de longe vinha gritando!

Se esse boi matar meu filho eu mato quem vai tocando
E quando viu seu filho vivo e o boi por ele velando
Caiu de joelho por terra e para Deus foi implorando
Salvai meu anjo da guarda desse momento tirano
Quando passou a boiada, o boi foi se retirando
Veio o pai dessa criança e comprou o Soberano
Esse boi salvou meu filho ninguém mata o
Soberano!`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-a-mao-do-tempo",
    titulo:        "A Mão do Tempo",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "B",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1078,
    cifra: `[Intro] [F#]  [B]

[Tab - Intro]

E|--14-14-14-13-14-11-11-11-9--11--|
B|--16-16-16-14-16-12-12-12-11-12--|
G|---------------------------------|
D|---------------------------------|
A|---------------------------------|
E|---------------------------------|

E|--7-7-7/9--9--9------------------|
B|--9-9-9/11-11-11-----------------|
G|-----------------3/6-6-6-4-6-----|
D|-----------------4/8-8-8-6-8-----|
A|---------------------------------|
E|---------------------------------|

E|---------------------------------|
B|---------------------------------|
G|-3-3-3-3-3/4-3h4-3-4-4-----------|
D|-4-4-4-4-4-4-4---4-4-4-----------|
A|---------------------------------|
E|---------------------------------|

[Primeira Parte]

A solidão do meu peito
                  [F#7]
O meu coração reclama

Por amar quem esta distante
                     [B]
E viver com quem não ama

Eu sei que você também
    [E]              [F#7]
Da mesma sina se queixa

Querendo viver comigo
                   [B]    [F#7] [B] [F#7] [B]
Mas o destino não deixa

[Tab - Solo]

E|------6---9---7--2/6-6-4-2-0-----|
B|--4/7---7---7----3/7-7-5-4-2-----|
G|---------------------------------|
D|---------------------------------|
A|---------------------------------|
E|---------------------------------|

[Segunda Parte]

[B]
  Que bom se a gente pudesse
                [F#7]
Arrancar do pensamento

E sepultar a saudade
                  [B]
Na noite do esquecimento

Mas a sombra da lembrança
  [E]                 [F#7]
É igual a sombra da gente

Pelos caminhos da vida
                    [B]    [F#7]  [B]  [F#7]  [B]
Ela esta sempre presente

[Riff]

[Terceira Parte]

[B]
  Vai lembrança e não me faça
                    [F#7]
Querer um amor impossível

Se o lembrar nos faz sofrer
                [B]
Esquecer é preferível

O que adianta querer bem
[E]                   [F#7]
Alguém que já foi embora

É como amar uma estrela
                         [B]   [F#7]  [B]  [F#7]  [B]
Que foge ao romper da aurora

[Tab - Solo]

E|------6---9---7--2/6-6-4-2-0-----|
B|--4/7---7---7----3/7-7-5-4-2-----|
G|---------------------------------|
D|---------------------------------|
A|---------------------------------|
E|---------------------------------|

[Quarta Parte]

[B]
  Arranque da nossa mente
                  [F#7]
Horas distantes vividas

Longas estradas que um dia
                   [B]
Foram por nós percorridas

Apague com a mão do tempo
    [E]                [F#7]
Os nossos rastros deixados

Como flores que secaram
                   [B]     [F#7]  [B]  [F#7]  [B]
Do chão do nosso passado

[Tab - Solo]

        [F#]      [B]
E|------6---9---7------------------|
B|--4/7---7---7--------------------|
G|---------------------------------|
D|---------------------------------|
A|---------------------------------|
E|---------------------------------|`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-faca-que-nao-corta",
    titulo:        "Faca Que Não Corta",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3292,
    cifra: `[Intro] [E]  [B7]  [E]  [B7]  [E]  [B7]

E|--0------------------------------------------------------7---------|
B|---0----0------0------0------0--------0------0-------------7-------|
G|--0------------------------------------------------------7---------|
E|--0----2----2-5----4-2-----2-5------4-2-----25------4-2/7-77---7---|
B|---0--0----0------0------0-------0-------0------0----------7-------|

E|----11---0-9---0-7----0-4----0-7----0-5----0--0----|
B|----12---0-10---0-9----0-5----0-9----0-7----0--0---|
G|----------------------------------------0----------|
E|----------------------------------------0----------|
B|---0----0----0-----0------0-----0------0----0------|

 [A]
Viola que não presta
 [B]            [E]
Faca que não corta
         [B7]               [E]
Se eu perder, pouco me importa

[E]
O cabo da minha enxada era um cabo bacana
                                    [B7]
Não era de guatambu, era de cana caiana
    [A]                 [E]
Um dia lá na roça, me deu sede toda hora
                   [B7]                       [E]
Chupei o cabo da enxada e joguei a enxada fora

[A]
Enxada que não presta
 [B]            [E]
Faca que não corta
         [B7]               [E]
Se eu perder, pouco me importa

 [E]
Corri atrás de uma onça, Preparando pra atirar
          [B]
Do estado de São Paulo atravessou pro Paraná
 [A]             [E]
A caça que eu atiro eu juro que não escapa
           [B]               [E]
A cartucheira falhou eu peguei a onça no tapa

 [A]         [E]   [A]
Cartucheira que não presta
 [B]       [E]
Faca que não corta
      [B]          [E]
Se eu perder, pouco me importa

 [E]
Peguei o meu dinheiro emprestei prum camarada
          [B]
O sujeitinho sumiu, nem dinheiro e, nem mais nada
 [A]          [E]
Dinheiro emprestado é um grande perigo
            [B]                [E]
A gente perde o dinheiro e também perde o amigo

[A]     [E]   [A]
Amigo que não presta
 [B]       [E]
Faca que não corta
      [B]          [E]
Se eu perder, pouco me importa

[E]
A fazenda do meu sogro faz divisa com a minha
          [B]
Presente de casamento, ele me deu pois eu não tinha
 [A]           [E]
Com esse casamento fiquei rico de repente
         [B]               [E]
Casei com sua fazenda trouxe a moça de presente

 [A]      [E]   [A]
Casamento que não presta
 [B]       [E]
Faca que não corta
      [B]          [E]
Se eu perder, pouco me importa`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-mundo-velho",
    titulo:        "Mundo Velho",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2592,
    cifra: `[Intro] [G]  [D7]  [G]  [D7]  [G]

      [G]                                       [D7]
Deus fez o mundo tão lindo, só belezas que rodeia
                                         [G]   [D7]  [G]
Colocando lá no espaço: Lua nova e Lua cheia
    [C]                                             [D7]
Fez o Sol e a luz divina, que o mundo inteiro clareia
                                           [C]  [G]  [D7]  [G]
No céu estrelas paradas, a Lua e o Sol passeia
                                          [D7]
Deus fez o mar azulado, e o castelo da sereia
                                             [G]  [D7]  [G]
Fez peixe grande e pequeno e também fez a baleia
    [C]                                     [D7]
Fez a terra onde formei meu cafezal de a meia
                                         [C]   [G]  [D7]  [G]
Baxadão cheio de água onde meu arroz cacheia

( [D7]  [G]  [D7]  [G] )

[Segunda Parte]

      [G]                                        [D7]
Deus fez cachoeiras lindas, lá na serra serpenteia
                                         [G]  [D7]  [G]
Fez papagaio que fala, passarada que gorjeia
    [C]                                [D7]
Tangará canta de bando, a natureza ponteia
                                            [C]   [G]  [D7]  [G]
Pros catireiros de penas, que no galho sapateia
                                                [D7]
Mundo velho mudou tanto, que já está entrando areia
                                            [G]  [D7]  [G]
Grande pisa nos pequenos, coitadinho desnorteia
       [C]                                      [D7]
Quem trabalha não tem nada, enriquece quem tapeia
                                             [C]  [G]  [D7]  [G]
Pobre não ganha demanda, rico não vai pra cadeia

(  [D7]  [G]  [D7]  [G] )

[Terceira Parte]

    [G]                                        [D7]
Na moral do velho mundo quem não presta pisoteia
                                           [G]  [D7]  [G]
Os mandamentos de Deus tem gente que até odeia
   [C]                                     [D7]
Igrejas estão vazias, antigamente eram cheias
                                                   [C]   [G]  [D7]  [G]
O que é ruim tá aumentando, o que é bom ninguém semeia
                                                   [D7]
Ó meu Deus! Venha na terra porque a coisa aqui tá feia
                                             [G]  [D7]  [G]
Mas que venha prevenido, traga chicote e correia
    [C]                                    [D7]
Tem até mulher pelada no lugar da santa ceia
                                              [C]  [G]  [D7]  [G]
Só Deus pode dar um fim no que o diabo desnorteia`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-oi-paixao",
    titulo:        "Oi Paixão",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "Bb",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1517,
    cifra: `[Intro]  [C]  [F7]  [C]  [Bb]  [Eb]  [Bb] [F7] [Bb]

E|------------------------------------------------------------------------7-|
B|-2/6-6-6-6-6-6----------------------------------------------------------7-|
G|-2/5-5-5-5-5-5-5-5-2-2-5-5-3-3-2^3^2~-----------------------------------7-|
D|--------------------------------------------------------------------------|
A|--------------------------------------------------------------------------|
E|--------------------------------------------------------------------------|

E|---------------6-6-2-2-6-6-4-4-2^4^2~-/4-4-4-4/7--7---2-2/6-6~---2------7-|
B|--------------------------------------/5-5-5-5/9~-9---4-4/7-7--4-4--2~--7-|
G|--------------------------------------------------------------------------|
D|--------------------------------------------------------------------------|
A|--------------------------------------------------------------------------|
E|--------------------------------------------------------------------------|

 [Bb]                                          [F7]
Não suportando a saudade, meu bem vim lhe visitar
                                             [Bb]     [Bb7]
Trazendo flores bonitas, pra o nosso amor enfeitar
 [Eb]                                              [F7]
Distante dos teus carinhos, eu sofro tanto e reclamo
                                           [Eb]         [F7]              [Bb]
Te juro minha querida, vou terminar minha vida, nos braços de quem eu amo
[C]              [F7]           [Bb]                   [C]  [F7]  [Bb]  [C]  [F]  [Eb]  [Bb]  [F7]  [Bb]
Ooohhh, hoooi paixão, nos braços de quem eu amo

      [Bb]                                     [F7]
Nosso amor não tem limite, não sei onde vai parar
                                            [Bb]  [Bb7]
Quanto mais você me ama, mas eu quero te amar
  [Eb]                                 [F7]
Uma dor de cotovelo, machuca eu e você
                                              [Eb]           [F]           [Bb]
Somos dois apaixonados, vive alguem ao nosso lado, fazendo a gente sofrer
[C]                 [F7]     [Bb]                  [C]  [F7]  [C]  [F]  [Eb]  [Bb]  [F7]  [Bb]
Ooohhh, hoooi paixão, fazendo a gente sofrer

   [Bb]                                  [F7]
O nosso caso de amor, esta correndo perigo
                                                      [Bb]   [Bb7]
Mas quem tem anjo de guarda, não cai nas mãos do inimigo
   [Eb]                                        [F7]
Somente as forças ocultas, poderão nos castigar
                                            [Eb]        [F]               [Bb]
Mas amar não é pecado, deus esta do nosso lado, ninguem vai nos separar
[C]                 [F7]       [Bb]                 [F7]  [Bb]
Ooohhh, hoooi paixão, ninguém vai nos separar`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-estrela-de-ouro",
    titulo:        "Estrela de Ouro",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3140,
    cifra: `[Intro] [E]  [B7]  [E]  [B7]  [E]

 [E]                    [B7]               [E]
Meu Deus, onde está agora a mulher que amo?
                                 [B7]
Será que está sozinha ou acompanhada?
    [A]                                 [E]
Só sei que aqui distante eu estou morrendo
                     [B7]                [E]        [B7]
Morrendo de saudade dela num mundo de lágrimas

     [E]                [B7]                [E]
Meu Deus mande que o vento encontre com ela
                                           [B7]
Pra dar minhas tristes notícias com seu açoite
 [A]                                   [E]
Dizer que por não estar, abraçado por ela
                          [B7]              [E]     [E]  [Ebm]  [Dbm]
Eu choro meu pranto escondido no colo da noite

     [B7]                 [E]
Meu Deus, eu morro por ela
              [B7]                [E]
E a ausência dela provoca meu choro
    [B7]                 [E]                    [B7]
Ela é a luz que me ilumina, deusa da minha sina
                 [E]
Minha estrela de ouro

( [E]  [B7]  [E]  [B7]  [E] )

     [B7]                 [E]
Meu Deus, eu morro por ela
              [B7]                [E]
E a ausência dela provoca meu choro
    [B7]                 [E]                    [B7]
Ela é a luz que me ilumina, deusa da minha sina
                 [E]
Minha estrela de ouro`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-cacador",
    titulo:        "Caçador",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1043,
    cifra: `Solo: (viola caipira)

E|----0---------------------------------------9---7/10-10~--10-9--7-5-4-2--------------0-0-0-/
B|---0--------------------------------------10--9/12--12~--12-10-9-7-5-4--5-4-2-0------0-0-0-/
G#|--0---------------------------------7-8--------------------------------5-3-1-0-1-0--0-0-0-/
E|---0-----2/7-7~-7~-7~-7~-7~-7~-7~--9--------------------------------------------2-0--0-0-0-/
B|---0---------------------------------------------------------------------------------0-0-0-/

(riff)viola caipira        p i p

E|-------------------------2-2-2-/
B|-------------------------0-0-0-/
G#|------------------------1-1-1-/
E|----------2--------------2-2-2-/
B|--0-2-4-----4-2--4-2-0---0-0-0-/

p= polegar p/ baixo

i= indicador p/ cima


[B7]                                                                                             (riff)
Mandei fazer uma canoa fundo preto e barra clara dois remo de guaranta e um varejao de gaiçara
                           [A]             [B7]          [E]    [B7] [E] (solo)
Ai,ai o apoito pesa uma arroba, jogo na agua o bote para

            [B7]                                                                              (riff)
Tenho uma trela de cachorro o marengo e a caiçara a sua especialidade corre anta e capivara
                             [A]          [B7]         [E]         [B7] [E] (solo)
Ai,ai sorto os cachorros no rastro vai rebentando taquara

[B7]                                                                                                 (riff)
Eu tenho uma cartucheira de qualidade bem rara e uma dois cano trunchado que ate pranchao ela vara
                         [A]       [B7]               [E]    [B7] [E] (solo)
Ai,ai a anta deita na fumaça na hora que ela dispara

[B7]                                                                                              (riff)
A anta se apicha n´agua na corenteza nao para vai com a cabeça de fora e a dois cano ja dispara
                          [A]             [B7]          [E]   [B7] [E] (solo)
Ai,ai a bicha prancheia n´agua e so fisgar ela na vara

[B7]                                                                                                    (riff)
Do coro eu transo um laço cabeçada e redias caras a carne eu vendo no açogue mai pro gasto nois separa
                          [A]         [B7]              [E]      [B7] [E]
Ai,ai tambem faço meus pagodes nas noites de lua clara.`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-rei-do-gado",
    titulo:        "Rei do Gado",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "B",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5106,
    cifra: `[Intro] [E]  [B7]  [E]  [B7]  [E]  [A]
        [E]  [A]  [E]  [A]  [D]  [A]

    [A]                [D]
Num bar de Ribeirão Preto
               [E]                [A]
Eu vi com meus olhos, esta passagem

Quando o champanha, corria a rodo
                       [D]   [E]
No alto meio da granfinage
 [A]                 [D]
Nisto, chegou um peão
             [E]              [A]
Trazendo na testa o pó da viagem
                   [D]      [A]
Pro garçom ele pediu uma pinga
        [E]           [D]    [A]
Que era pra rebater a friage

( [E]  [A]  [E]  [A]  [D]  [A] )

 [A]               [D]
Levantou o almofadinha
             [E]               [A]
E falou pro dono eu tenho má fé

Quando um caboclo que não se enxerga
                             [D]   [E]
Num lugar deste, vem por os pés
 [A]                    [D]
Senhor, que é proprietário
         [E]             [D]      [A]
Deve barrar a entrada de qualquer
                     [D]    [A]
Principalmente nessa ocasião
             [E]       [D]       [A]
Que está presente o rei do café

( [E]  [A]  [E]  [A]  [D]  [A] )

 [A]                [D]
Foi uma sarva de parma
          [E]             [A]
Gritaram viva pro fazendeiro

Que tem bilhões de pés de café
          [E]         [D]    [A]
Por este rico chão brasileiro
 [A]                 [D]
Sua safra é uma potência
             [E]         [D]      [A]
Em nosso mercado e no estrangeiro
                            [D]  [A]
Portanto, veja que este ambiente
                [E]     [D]     [A]
Não é pra qualquer tipo rampero

( [E]  [A]  [E]  [A]  [D]  [A] )

 [A]                 [D]
Com um modo bem cortês
             [E]             [A]
Respondeu o peão pra rapaziada

Essa riqueza não me assusta
                          [D]   [E]
Topo em aposta qualquer parada
 [A]               [D]
Cada pé desse café
              [E]                 [A]
Eu amarro um boi da minha invernada
                            [D]  [A]
E pra encerrar o assunto eu garanto
              [E]     [D]     [A]
Que ainda me sobra uma boiada

( [E]  [A]  [E]  [A]  [D]  [A] )

 [A]                  [D]
Foi um silêncio profundo
           [E]                 [A]
O peão deixou o povo mais pasmado
Pagando a pinga com mil cruzeiro
                                  [D]   [E]
Disse ao garçom pra guardar o trocado
  [A]                 [D]
Quem quiser meu endereço
            [E]           [A]
Que não se faça de arrogado
É só chegar lá em Andradina
         [E]        [D]      [A]
E perguntar pelo rei do gado

[Final] [E]  [A]  [E]  [A]  [D]  [A]`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-arrependida",
    titulo:        "Arrependida",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1863,
    cifra: `[Intro] [G]  [Am]  [D7]
        [G]  [Em]  [D7]  [G]

[G]                                 [D]
Eu não sou culpado se hoje você chora
                             [G]
Foi você mesma que me abandonou
                             [D]
Implorei tanto pra não ir embora
            [C]                 [G]
Mas minhas súplicas, não escutou
                               [D]
Hoje você chora triste arrependida
                                [G]
Para os meus braços, você quer voltar
             [G7]                   [C]
Você foi maldosa, arruinou minha vida
        [D]                   [G]
Me compreenda, não vou perdoar

( [G]  [Am]  [D7]  [G]  [Em]  [D7]  [G] )

 [G]                             [D]
Na sua ausência, eu chorei de dor
                         [G]
Não suportei fui à sua procura
                             [D]
Encontrei você com um novo amor
         [C]                [G]
Trocava beijos e fazia juras
                         [D]
Naquela noite fiquei embriagado
                      [G]  [G7]
Amanheci bebendo num bar
                      [C]
Estava triste e desesperado
            [D]               [G]
Chamei seu nome, comecei chorar

       [D]                           [G]
Segue mulher, vai viver de mão em mão
          [D]                            [G7]
Porque o remorso, pouco a pouco, lhe consome
          [C]                      [G]
Sinto um dor dentro do meu coração
          [D]    [C]
Tenho vergonha
                        [G]
Por você usar o meu sobrenome

[Final] [G]  [Am]  [D7]  [G]  [Em]  [D7]  [G]`,
  },
  {
    id:            "tiao-carreiro-e-pardinho-amor-e-saudade",
    titulo:        "Amor e Saudade",
    artista:       "Tião Carreiro e Pardinho",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2666,
    cifra: `D |-----------------------------------------------------|
A |-----------------------------------------------------|
G#|-|-2--2-2--2-3-5-5/7-5—3-----------------------------|
D |-2--2-2--2-4-6-6/7-6-4-2/7~-6-4-2-2/7~ --------------|
A |-----------------------0----7-5-4-0------------------|

[A]
Eu passei na sua terra ja era de madrugada
                                      [E7]
As luzes da sua rua estavam quase apagadas
Fiquei horas recordando a nossa vida passada
   [D]               [E7]                        [A]
O tempo do nosso amor que se acabou tudo em nada

[E7]  [A]  [E7]  [A]

[A]
A sua casinha triste estava toda fechada
                                         [E7]
E no varal do alpendre umas roupas penduradas
Conheci no meio delas sua blusa amarelada
   [D]            [E7]               [A]
Aumentou minha saudade êta vida amargurada

 [A]
No tempo que nós se amava eu fiz muita caminhada
                                          [E7]
Chegava na sua casa mesmo sendo hora avançada

Você de casaco preto vinha toda enamorada
[D]                  [E7]                           [A]
Ali nós dois se abraçava sem que ninguém visse nada

[E7]  [A]  [E7]  [A]

 [A]
Mas no mundo tudo passa a sorte é predestinada
                                        [E7]
Você se casou com outro eu segui minha jornada
Deixei você me acenando lá na curva da estrada
[D]                [E7]                     [A]   [E7]  [A]
Adeus cabocla faceira, rosa branca perfumada`,
  },
  {
    id:            "tonico-e-tinoco-chico-mineiro",
    titulo:        "Chico Mineiro",
    artista:       "Tonico e Tinoco",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4772,
    cifra: `[G]                 [D7]
Fizemos a última viagem
                        [G]
Foi lá pro sertão de Goiás
                    [D7]
Foi eu e o Chico Mineiro
                   [G]
Também foi o capataz
[C]
Viajemo muitos dias
     [D7]             [G]
Pra chegar em ouro fino
                     [D7]
Aonde nós passemos a noite
                [G]
Numa festa do divino

   [G]               [D7]
A festa estava tão boa
                      [G]
Mas antes não tivesse ido
               [D7]
O Chico foi baleado
                      [G]
Por um homem desconhecido
     [C]
Larguei de comprar boiada
   [D7]            [G]
Mataram meu companheiro
                    [D7]
Acabou-se o som da viola
                     [G]
Acabou-se o Chico Mineiro

                   [D7]
Depois daquela tragédia
                   [G]
Fiquei mais aborrecido
                       [D7]
Não sabia da nossa amizade
                      [G]
Porque nós dois era unido
     [C]
Quando vi seus documentos
    [D7]           [G]
Me cortou o coração
      [C]                [D7]
De saber que o Chico Mineiro
                    [G]
Era meu legítimo irmão!`,
  },
  {
    id:            "tonico-e-tinoco-cabocla-tereza",
    titulo:        "Cabocla Tereza",
    artista:       "Tonico e Tinoco",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1306,
    cifra: `[Intro] [A]  [E7]  [A]  [E7]  [A]  [E7]  [A]

Lá no alto da montanha
Numa casinha estranha
Toda feita de sapê
Parei uma noite à cavalo
Pra mor de dois estalo
Que ouvi lá dentro bate
Apeei com muito jeito
Ouvi um gemido perfeito
Uma voz cheia de dor
Você Tereza descansa
Jurei de fazer a vingança
Pra mor do meu amor
Pela réstia da janela
Por uma luizinha amarela
De um lampião quase apagando
Eu vi uma cabocla no chão
E o cabra tinha na mão
Uma arma alumiando
Virei meu cavalo a galope
Risquei de espora e chicote
Sangrei a anca do tar
Desci a montanha abaixo
Galopando meu macho
O seu doutô fui chamar
Vortamo lá pra montanha
Naquela casinha estranha
Eu e mais seu doutô
Topemo o cabra assustado
Que chamou nóis prum lado
E a sua história contou


[A]  [E7]  [A]  [E7]  [A]  [E7]  [A]


 [A]          [D]            [A]
Há tempo eu fiz um ranchinho
                     [E7]
Pra minha cabocla morar
           [D]        [E7]
Pois era ali nosso ninho
     [D]     [E7]      [A]
Bem longe deste luga
         [D]        [A]
No arto lá da montanha
                  [E7]
Perto da luz do luar
        [D]      [E7]
Vivi um ano feliz
     [D]    [E7]        [A]
Sem nunca isso espera

( [A]  [E7]  [A]  [E7]  [A]  [E7]  [A] )

[A]        [D]        [A]
E muito tempo passou
                       [E7]
Pensando em ser tão feliz
         [D]        [E7]
Mas a Tereza, doutô
    [D]    [E7]      [A]
Felicidade não quis
           [D]        [A]
O meu sonho nesse oiá
                   [E7]
Paguei caro o meu amor
           [D]        [E7]
Pra mor de outro caboclo
     [D]         [E7]     [A]
Meu rancho ela abandonou

( [A]  [E7]  [A]  [E7]  [A]  [E7]  [A] )

    [A]      [D]         [A]
Senti meu sangue ferve
                  [E7]
Jurei a Tereza mata
        [D]        [E7]
O meu alazão arriei
  [D]       [E7]       [A]
E ela eu fui procurar
       [D]        [A]
Agora já me vinguei
                  [E7]
É esse o fim de um amor
        [D]         [E7]
Esta cabocla eu matei
    [D]         [E7]        [A]
É a minha história, doutô

[Final] [A]  [E7]  [A]  [E7]  [A]  [E7]  [A]`,
  },
  {
    id:            "tonico-e-tinoco-moreninha-linda",
    titulo:        "Moreninha Linda",
    artista:       "Tonico e Tinoco",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2621,
    cifra: `[Primeira Parte]

[G]                [D7]                            [G]
Meu coração tá pisado como a flor que murcha e cai
[C]              [D7]                       [G]
Pisado pelo desprezo do amor quando desfaz
[C]                   [D7]                       [G]
Deixando a triste lembrança adeus para nunca mais

[Refrão]

 [G]         [D7]                 [G]
Moreninha linda do meu bem querer
              [D7]              [G]
É triste a saudade longe de você

( [G]  [D7]  [C] )

    [G]          [D7]                    [G]
O amor nasce sozinho não é preciso plantar
 [C]                [D7]                    [G]
A paixão nasce no peito farsidade no olhar
[C]                   [D7]                   [G]
Você nasceu para outro eu nasci pra te amar

[Refrão]

   [G]       [D7]               [G]
Moreninha linda do meu bem querer
            [D7]                [G]
E triste a saudade longe de voce

( [G]  [D7]  [C] )

[G]                [D7]                       [G]
Eu tenho meu canarinho que canta quando me vê
[C]                    [D7]                    [G]
Eu canto por ter tristeza canário por padecer
[C]                    [D7]                [G]
Da saudade da floresta eu saudade de você`,
  },
  {
    id:            "tonico-e-tinoco-canoeiro",
    titulo:        "Canoeiro",
    artista:       "Tonico e Tinoco",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5100,
    cifra: `[Intro] [B7]  [E]

                     [B7]                       [E]                            [B7]                           [E]   [B7]  [E]
E|-6h7-7-7-7-7-7-7-7-6-5-4h5p4----------------------------------------4-7--7-4-5--5---4--4------------|
B|-----------------------------7-5-4h5p4------------------------4-5-7---------------7------5-7--7-4-5-|
G|---------------------------------------6-4--4-6-4--4-6-4--4-6---------------------------------------|
D|----------------------------------------------------------------------------------------------------|
A|----------------------------------------------------------------------------------------------------|
E|----------------------------------------------------------------------------------------------------|

[B7]
Domingo de tardezinha, eu estava mesmo à toa

Convidei meu companheiro pra ir pescar na lagoa

Levemo a rede de lance
                             [E]  [B7]  [E]  [B7]  [E]
Ai, ai, fomos pescar de canoa

        [B7]
Eu levei meus apreparo pra dá uma pescada boa

Saímos cortando água na minha velha canoa

A garça avistei de longe
                           [E]  [B7]  [E]  [B7]  [E]
Ai, ai, chega perto ela voa

          [B7]
Fui descendo rio abaixo remando minha canoa

Eu entrei numa vazante fui saí noutra lagoa

É o remanso do Rio Pardo
                            [E]  [B7]  [E]  [B7]  [E]
Ai, ai, aonde o pintado amoa

          [B7]
Pra peguá peixe dos bão dá trabalho a gente soa

Eu jogo o timbo na agua, com isso os peixe atordoa

Jogo a rede e dou um grito
                       [E]  [B7]  [E]  [B7]  [E]
Ai ai , o dourado amOntoa

         [B7]
O rio tava enchendo muito, tava cobrindo a taboa

Acompanhei a maré, encostei minha canoa

Cada remada que eu dava
                              [E]  [B7]  [E]  [B7]  [E]
Ai, ai dava um balanço na proa`,
  },
  {
    id:            "tonico-e-tinoco-beijinho-doce",
    titulo:        "Beijinho Doce",
    artista:       "Tonico e Tinoco",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3299,
    cifra: `[Intro] [C]  [D7]  [C]  [D7]  [G]

[G]
Que beijinho doce
         [C]
Que ela tem
                  [D7]
Depois que beijei ela
                     [G]
Nunca mais amei ninguém
             [C]
Que beijinho doce

Foi ela quem trouxe
              [D7]
De longe prá mim
                  [C]
Se me abraça apertado
           [D7]
Suspiro dobrado
              [G]
Que amor sem fim

( [C]  [D7]  [C]  [D7]  [G] )

[G]
Coração quem manda
               [C]
Quando a gente ama
                  [D7]
Se estou junto dela

Sem dar um beijinho
           [G]
Coração reclama
             [C]
Que beijinho doce

Foi ela quem trouxe
             [D7]
De longe prá mim
                  [C]
Se me abraça apertado
          [D7]
Suspiro dobrado
              [G]
Que amor sem fim`,
  },
  {
    id:            "tonico-e-tinoco-andorinhas",
    titulo:        "Andorinhas",
    artista:       "Tonico e Tinoco",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3669,
    cifra: `[Intro] [A]  [E]  [A]  [E]  [D]

[A]                  [E]                    [A]
As andorinhas voltaram e eu também voltei
                 [E]                         [A]
Pousar no velho ninho que um dia aqui deixei

               [E]                                      [A]
Nós somos andorinhas que vão e que vem a procura de amor
                   [E]                                   [D]                 [E]                [A]
Às vezes volta cansada ferida machucada mas volta pra casa batendo suas asas com grande dor
             [E]                                       [A]
Igual a andorinha eu parti sonhando mas foi tudo em vão

               [E]
Voltei sem felicidade porque na verdade
   [D]                [E]                 [A]
Uma andorinha voando sozinha não faz verão   (repete)`,
  },
  {
    id:            "tonico-e-tinoco-chitaozinho-e-xororo",
    titulo:        "Chitãozinho e Xororo",
    artista:       "Tonico e Tinoco",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4232,
    cifra: `[Intro] [B7]  [E]  [B7]  [E]  [A]

       [E]             [B7]
Eu não troco meu ranchinho
                  [E]
Amarradinho de cipó
                    [B7]
Por'uma casa na cidade
                   [E]
Nem que seja bangalô
    [E7]             [A]
Eu moro lá no deserto
                      [E]
Sem vizinho, eu vivo só
                     [B7]
Só me alegra quando pia
                    [E]
Lá pr'aqueles cafundó

              [B7]        [E]
O inhambu-xintã e o xororó
              [B7]        [E]
É o inhambu-xintã e o xororó

         [E]            [B7]
Quando rompe a madrugada
                  [E]
Canta o galo carijó
               [B7]
Pia triste a coruja
                   [E]
Na cunhera do paiól
        [E7]             [A]
Quando chega o entardecer
               [E]
Pia triste o jaó
                     [B7]
Só me alegra quando pia
                    [E]
Lá pr'aqueles cafundó

              [B7]        [E]
O inhambu-xintã e o xororó
              [B7]        [E]
É o inhambu-xintã e o xororó

                        [B7]
Não me dou com a terra roxa
                    [E]
Com a seca larga o pó
                 [B7]
Na baixada do areião
                     [E]
Eu sinto  prazer maior
       [E7]            [A]
Ver a rolinha no andar
                   [E]
No areião faz caracó
                     [B7]
Só me alegra quando pia
                    [E]
Lá pr'aqueles cafundó

              [B7]        [E]
O inhambu-xintã e o xororó
              [B7]        [E]
É o inhambu-xintã e o xororó

                 [B7]
Eu faço minha caçada
                    [E]
Bem ante de sair o sol
                    [B7]
Espingarda de cartucho
                [E]
Patrona de tiracó
        [E7]           [A]
Tenho buzina e cachorro
                 [E]
Pra fazer forrobodó
                     [B7]
Só me alegra quando pia

                    [E]
Lá pr'aqueles cafundó
              [B7]        [E]
O inhambu-xintã e o xororó
              [B7]        [E]
É o inhambu-xintã e o xororó


           [E]              [B7]
Quando eu sei de uma notícia
                 [E]
Que outro canta mió
                     [B7]
Meu coração da um balanço
                [E]
Fica meio banzaró
          [E7]           [A]
Suspiro sai do meu peito
                  [E]
Que nem bala joveló

                     [B7]
Só me alegra quando pia
                    [E]
Lá pr'aqueles cafundó
              [B7]        [E]
O inhambu-xintã e o xororó
              [B7]        [E]
É o inhambu-xintã e o xororó`,
  },
  {
    id:            "tonico-e-tinoco-couro-de-boi",
    titulo:        "Couro de Boi",
    artista:       "Tonico e Tinoco",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1828,
    cifra: `[Intro] [G]  [A7]  [D]  [A7]  [D]

Conheço um velho ditado, que é do tempo do Zagaia
Diz que um pai trata dez filhos, dez filhos não trata um pai
Sentindo o peso dos anos sem poder mais trabalhar
o velho, peão estradeiro, com seu filho foi morar
O rapaz era casado e a mulher deu de implicar
"Você manda o velho embora, se não quiser que eu vá"
E o rapaz, de coração duro, com o velhinho foi falar

[Primeira Parte]

 [E]                  [B7]                        [E]
Para o senhor se mudar, meu pai eu vim lhe pedir
 [E]                  [B7]                     [E]  [E7]
Hoje aqui da minha casa o senhor tem que sair
 [A]                       [E]
Leve este couro de boi que eu acabei de curtir
  [B7]                                         [E]
Pra lhe servir de coberta aonde o senhor dormir

[Solo] [E]  [B7]  [E]  [B7]

[Segunda Parte]

[E]                 [B7]                     [E]
O pobre velho, calado, pegou o couro e saiu
 [E]                 [B7]                     [E]     [E7]
Seu neto de oito anos que aquela cena assistiu
 [A]                     [E]
Correu atrás do avô, seu paletó sacudiu
 [B7]                                   [E]
Metade daquele couro, chorando ele pediu

[Solo] [E]  [B7]  [E]  [B7]

[E]                [B7]                          [E]
O velhinho, comovido, pra não ver o neto chorando
 [E]                  [B7]                     [E]   [E7]
Partiu o couro no meio e pro netinho foi dando
[A]                         [E]
O menino chegou em casa, seu pai foi lhe perguntando
  [B7]                                           [E]
Pra quê você quer este couro que seu avô ia levando

[Solo] [E]  [B7]  [E]  [B7]

 [E]                 [B7]                 [E]
Disse o menino ao pai: um dia vou me casar
[E]                   [B7]                 [E]   [E7]
O senhor vai ficar velho e comigo vem morar
 [A]                        [E]
Pode ser que aconteça de nós não se combinar
[B7]                                         [E]
Essa metade do couro vou dar pro senhor levar

[Solo]

E|-4-5-7-9--9--9--7-5-5-5-9--7-7-7-5-4-4-4-7-5-5-5-4-2-2-2-5-4--|
B|-5-7-9-10-10-10-9-7-7-7-10-9-9-9-7-5-5-5-9-7-7-7-5-4-4-4-7-5--|
G|--------------------------------------------------------------|
D|--------------------------------------------------------------|
A|--------------------------------------------------------------|
E|--------------------------------------------------------------|`,
  },
  {
    id:            "tonico-e-tinoco-tristeza-do-jeca",
    titulo:        "Tristeza do Jeca",
    artista:       "Tonico e Tinoco",
    tom:           "F#",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2517,
    cifra: `[Intro] [B]  [C#7]  [F#]
        [D#m7]  [G#m]  [C#7]  [F#]

[F#]      [B]     [C#7]     [F#]
Nestes versos tão singelos
      [C#7]         [F#]
Minha bela, meu amor
        [B]    [C#7]     [F#]
Pra mercê quero contar
         [C#7]            [F#]  [F#7]
O meu sofrer e a minha dor
[B]           [C#7]  [F#]
Eu sou como sabiá
        [D#m7]           [G#m7]
Quando canta é só tristeza
        [C#7]            [F#]
Desde o gaio onde ele tá
[C#7]                                [F#]
Nesta viola eu canto e gemo de verdade
[C#7]                           [F#]
Cada toada representa uma saudade

[F#]     [B]    [C#7]   [F#]
Eu nasci naquela serra
        [C#7]           [F#]
Num ranchinho beira chão
      [B]    [C#7]   [F#]         [C#7]        [F#]  [F#7]
Tudo cheio de buraco onde a lua faz clarão
[B]              [C#7]  [F#]
Quando chega a madrugada
      [D#m7]         [G#m7]
Lá no mato a passarada
      [C#7]         [F#]
Principia um baruião
[C#7]                                [F#]
Nesta viola eu canto e gemo de verdade
[C#7]                           [F#]
Cada toada representa uma saudade

[Solo] [F#]  [B]  [C#7]
       [F#]  [C#7]  [F#]
       [F#]  [B]  [C#7]
       [F#]  [C#7]  [F#]  [F#7]

[B]           [C#7]   [F#]
O choro que vai caindo
    [D#m7]          [G#m7]
Devagar vai se sumindo
        [C#7]            [F#]
Como as águas vão pro mar`,
  },
  {
    id:            "tonico-e-tinoco-chalana",
    titulo:        "Chalana",
    artista:       "Tonico e Tinoco",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 765,
    cifra: `[Intro] [G]  [D7]  [G]  [D7]  [C]  [D7]  [C]  [G]


[G]                [D7]             [G]
Lá vai a chalana bem longe se vai
[G]                              [D7]
Riscando o remanso do rio paraguai

[C]                    [G]
A chalana sem querer tu aumenta a minha dor
[D7]                                           [G]
Nessas águas tão serenas vai levando o meu amor

                                       [D7]
E assim ela se foi nem de mim se despediu
[C]                     [D7]               [G]
A chalana vai sumindo la na curva do rio
                            [E7]            [Am]
E se ela vai magoada eu bem sei que tem razão
[D7]                                     [G]
Fui ingrato e eu feri o seu pobre coração

Solo: [G]  [D7]  [C]  [D7]  [Em]  [Am]  [D7]  [G]

 [G]  [D7]  [G]  [D7]  [C]  [D7]  [C]  [G]


[G]                [D7]            [G]
La vai a chalana bem longe se vai
                               [D7]
Riscando o remanso do rio paraguai

[C]                    [G]
A chalana sem querer tu aumenta a minha dor                 2x
[D7]                                           [G]
Nessas águas tão serenas vai levando o meu amor

 [G]  [D7]  [G]  [D7]  [C]  [D7]  [C]  [G]  [D]  [G]`,
  },
  {
    id:            "tonico-e-tinoco-saco-de-estopa",
    titulo:        "Saco de Estopa",
    artista:       "Tonico e Tinoco",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2531,
    cifra: `[Intro] [E]  [B7]  [E]  [B7]  [E]

   [E]   [A]        [E]            [B7]
E|-----7/9-------9-7-4-5-7-4/5-4----------------|
B|-----7/9-9-8-9-----------------7-5-4----------|
G|-------------------------------------6-4------|
D|-----------------------------------------7-6--|
A|----------------------------------------------|
E|----------------------------------------------|

[E]
Num saco de estopa
               [B7]
Com embira amarrado
Eu trago guardado é a minha
    [C#m]
Paixão

Uma bota velha
               [B7]
Chapéu cor de ouro
              [A]          [B7]     [E]
Bainha de couro e um velho facão
                   [B7]
Tenho um par de espora
                [E]
Um arreio e um laço
             [B7]             [E]
Um punhal de aço e rabo de tatu
              [E7]            [A]
Tenho uma guaiaca ainda perfeita
              [E]        [B7]        [E]  [B7]  [E]
Caprichada e feita só de couro cru
                [E]
Do lampião quebrado
              [B7]
Só resta o pavio
Pra lembrar do frio
               [C#m]
Eu também guardei

Um pelego branco que perdeu
   [B7]
O pelo
          [A]          [B7]          [E]
Apesar do zelo com que eu cuidei
            [B7]               [E]
Também o cachimbo de canudo longo
              [B7]                  [E]
Quantos pernilongos com ele espantei
              [E7]
Um estribo esquerdo
                [A]
Que guardei com jeito
            [E]        [B7]          [E]  [B7]  [E]
Porque o direito na cerca eu quebrei
           [E]              [B7]
A nota fiscal já toda amarela
Da primeira sela que eu mesmo
     [C#m]
Comprei
                        [B7]
Lá em soledade na casa da cinta
              [A]        [B7]        [E]
Duzentos e trinta, na hora paguei
            [B7]              [E]
Também o recibo já todo amassado
             [B7]               [E]
Primeiro ordenado que eu faturei
           [E7]                [A]
É a minha traia num saco amarrado
                [E]
Num canto encostado
       [B7]          [E]
Que eu sempre guardei

 [E]   [A]        [E]            [B7]
E|-----7/9-------9-7-4-5-7-4/5-4----------------|
B|-----7/9-9-8-9-----------------7-5-4----------|
G|-------------------------------------6-4------|
D|-----------------------------------------7-6--|
A|----------------------------------------------|
E|----------------------------------------------|

 [E]
Pra mim representa um belo
    [B7]
Passado
                                 [C#m]
A lida de gado que eu sempre gostei
                           [B7]
Assim enfrentando um trabalho duro
             [A]         [B7]         [E]
E fiz meu futuro sem violar a lei
           [B7]                  [E]
O saco é relíquia com meus apetrechos
                 [B7]                  [E]
Não vendo e não deixo ninguém pôr a mão
                [E7]             [A]
Nos trancos da vida aguentei o taco
            [E]         [B7]     [E]
E o ouro do saco é a recordação`,
  },
  {
    id:            "tonico-e-tinoco-cana-verde",
    titulo:        "Cana Verde",
    artista:       "Tonico e Tinoco",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4196,
    cifra: `Intro 2x: [A] [E7] [A] [E7] [A]

[A]       [E7]            [A]
Abre a porta ou a janela
      [E7]                 [A]
Venha ver quem é que eu sou
      [E7]           [A]
Sou aquele desprezado
      [E7]           [A]
Que você me desprezou

      [E7]            [A]
Eu já fiz um juramento
      [E7]            [A]
De nunca mais ter amor
       [E7]            [A]
Por viver penar chorando
      [E7]               [A]
Por todo lugar que eu for

        [E7]              [A]
Quem canta seu mal espanta
      [E7]        [A]
Chorando será pior
     [E7]             [A]
O amor que vai e volta
     [E7]              [A]
A volta sempre é melhor

       [E7]          [A]
Chora viola e sanfona
       [E7]          [A]
Chora triste o violão
      [E7]           [A]
O que é madeira chora
      [E7]          [A]
Que dirá meu coração`,
  },
  {
    id:            "tonico-e-tinoco-moda-da-mula-preta",
    titulo:        "Moda da Mula Preta",
    artista:       "Tonico e Tinoco",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4544,
    cifra: `[E]                                         [B7]
Eu tenho uma mula preta tem sete palmos de altura
                                       [E]   [B7]  [E]
A mula é descanelada, tem uma linda figura
                                       [B7]
Tira fogo na calçada no rampão da ferradura
                                     [E]   [B7]  [E]
Com morena delicada na garupa faz figura
   [A]            [E]         [B7]         [E]   [A]  [E]  [B7]  [E]
A mula fica enjoada, pisa só de andadura

      [E]                                   [B7]
No ensino da criação, veja o quanto que regula
                                            [E]   [B7]  [E]
O defeito do mulão se eu contar ninguém calcula
                                       [B7]
Moça feia e marmanjão na garupa a mula pula
                                        [E]   [B7]  [E]
Chega a fazer cerração todo pulo desta mula
   [A]             [E]          [B7]         [E]   [A]  [E]  [B7]  [E]
Cara muda de feição, sendo preto fica fula

    [E]                                        [B7]
Eu fui passear na cidade, só numa volta que dei
                                           [E]   [B7]  [E]
A mula deixou saudade no lugar onde eu passei
                                             [B7]
Pro mulão de qualidade, quatro milhões injeitei
                                              [E]  [B7]  [E]
Pra dizer mesmo a verdade, nem satisfação eu dei
     [A]           [E]           [B7]          [E]  [A]  [E]  [B7]  [E]
Fui dizendo boa tarde pra minha casa voltei

    [E]                                       [B7]
Soltei a mula no pasto veja o que me aconteceu
                                    [E]  [B7]  [E]
Uma cobra venenosa a minha mula mordeu
                                         [B7]
Com o veneno desta cobra a mula nem se mexeu
                                             [E]  [B7]  [E]
Só durou umas quatro horas depois a mula morreu
  [A]                [E]             [B7]              [E]
Acabou-se a mula preta... que tanto gosto me deu`,
  },
  {
    id:            "tonico-e-tinoco-saudade-de-matao",
    titulo:        "Saudade de Matão",
    artista:       "Tonico e Tinoco",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 647,
    cifra: `[Intro] [C#]  [Eº]  [D#m]  [G#7]  [C#]

[C#]                  [Eº]  [D#m]
Neste mundo eu choro a dor
         [G#7]        [C#]
Por uma paixão sem fim
             [Eº]    [D#m]
Ninguém conhece a razão
                   [G#7]      [C#]
Porque eu choro num mundo assim
              [Eº]    [D#m]
Quando lá no céu surgir
        [G#7]     [C#]
Uma peregrina flor
                  [D#m]
Pois todos devem saber
               [G#7]
Que a sorte me tirou
               [C#]
Foi uma grande dor

[Refrão]

       [G#7]           [C#]
Lá no céu, junto a Deus
       [G#7]                 [C#]
Em silêncio a minh´alma descansa
      [G#7]            [C#]
E na terra, todos cantam
              [G#7]                           [C#]
Eu lamento a minha desventura desta grande dor

       [G#7]           [C#]
Lá no céu, junto a Deus
       [G#7]                 [C#]
Em silêncio a minh´alma descansa
      [G#7]            [C#]
E na terra, todos cantam
              [G#7]                           [C#]
Eu lamento a minha desventura desta grande dor

[F#]  [C#7]     [F#]
Ninguém me diz
                   [C#7]
Que sofreu tanto assim
     [G#m]            [C#7]
Esta dor que me consome
            [F#]
Não posso viver
[F#] [C#7]    [F#]
Quero morrer
    [F#7]                  [B]
Vou partir pra bem longe daqui
                    [C#7]
Já que a sorte não quis
     [F#] [C#7] [F#]
Me fazer feliz

[Intro]

                 [Eº]  [D#m]
Quando lá no céu surgir
        [G#7]     [C#]
Uma peregrina flor
                   [D#m]
Pois todos devem saber
   [G]  [C#]
Que a sorte me tirou
     [G#7]        [C#]
Foi uma grande dor`,
  },
  {
    id:            "tonico-e-tinoco-pe-de-ipe",
    titulo:        "Pé de Ipê",
    artista:       "Tonico e Tinoco",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2873,
    cifra: `Intro: ([Dm] [Am] [E7] [A] [A7] [Dm] [Am] [E7] [Am])

Eu bem sei “qui” adivinhava
                            [A7]
Quando as “veis” eu “ti” chamava
                   [Dm]
De “muié” sem coraçããããooo
                          [Am]
Minha “vóiz” “anssim” queixosa
                    [E7]
“Vancê” é a mais formosa
                      [Am]     [A7] [Dm]
Das “cabocras” do sertããããooo
                          [Am]
Minha “vóiz” “anssim” queixosa
                    [E7]
“Vancê” é a mais formosa
                      [Am]
Das “cabocras” do sertão

Certa “veiz” tive um desejo
                        [A7]
De provar o “mé” de um “bejo”
                 [Dm]
Da boquinha de “vancêêêê”
                   [Am]
Lá no “trio” da “baxada”
                    [E7]
Pertinho da “encruziada”
                   [Am]   [A7] [Dm]
Debaixo d’um pé d’ipêêêê
                 [Am]
Lá no trio da “baxada”
                    [E7]
Pertinho da “encruziada”
                    [A]
Debaixo d’um pé d’ipê
                         [E7]
“Mais” o destino é traiçoeeeiro

                       [A]
Que me “deixô” na solidãããooo
[D]                        [A]
   Foi "s’imbora" prá cidade
                     [E7]
Me “deixô” triste saudade
                 [A]
Neste pobre coraçãããooo
                     [E7]
Foi “s’imbora” prá cidade
        [D]             [A]
Me “deixô” triste saudade
       [D]     [E]   [A]     [Am]
Neste pobre coraçãããooo

Int.: (Dm Am E7 A A7 Dm Am E7 Am)


Certa “veiz” tive um desejo
                        [A7]
De provar o “mé” de um “bejo”
                 [Dm]
Da boquinha de “vancêêêê”
                   [Am]
Lá no “trio” da “baxada”
                    [E7]
Pertinho da “encruziada”
                   [Am]   [A7] [Dm]
Debaixo d’um pé d’ipêêêê
                 [Am]
Lá no trio da “baxada”
                    [E7]
Pertinho da “encruziada”
                    [A]
Debaixo d’um pé d’ipê
                       [E7]
Quando passo a “encruziaaadaa”
                       [A]
Ainda avisto o pé de ipêêêê
[D]                      [A]
  Ainda canta um passarinho
                        [E7]
Me “faiz” “alembrar” sózinho
                    [A]
Aquele dia com “vancêêêê”
                     [E7]
Ainda canta um passarinho
         [D]              [A]
Me “faiz” “alembrar” sózinho
        [D]   [E]    [A]
Aquele dia com “vancêêêê”.`,
  },
  {
    id:            "zeze-di-camargo-luciano-voce-vai-ver",
    titulo:        "Você Vai Ver",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 3187,
    cifra: `[Intro] [C]  [Dm]  [A7]  [Bb2]
        [F]  [C]  [F]  [C7]

[Tab - Intro]

Parte 1 de 3

E|-5-6-5--------8--------------------------5-----------|
B|-6-8-6-8-6-8--8-8------6----6-8-6-5-3-5--5-5---------|
G|-------9-7-9----9--9---7----7-9-7-6-4-6----6--6--7---|
D|-------------------10-------------------------7--8---|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 3

E|-----------------------------------------------------|
B|-----3-----------6--------------5--6-6/8-6-----------|
G|---3---5-3-5-4-5------3-3-3-2-3-5--7-7/9-------------|
D|-3---------7-6-7-7----5-5-5-4-5----------7-----------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3

E|-8-8-8-6-5---6-5-------------------------------------|
B|-----------8-----8-6-5-6-5---------------------------|
G|---------------------------7-5-7-5-------------------|
D|-----------------------------------8-7---------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3 (Violão 2 - Dueto)

E|-12-12-12-10-8----10-8-------------------------------|
B|---------------11------11-10-8-10-8------------------|
G|------------------------------------10-9-10-9-7------|
D|------------------------------------------------10---|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

[F]                  [C]           [Dm]   [Dm/C]
  Você pode encontrar muitos amores
[Bb2]                     [F/A]
    Mas ninguém vai te dar
             [Gm]   [Gm7]
O que eu te dei
[C/E]               [A7]           [Dm]
    Podem até te dar algum prazer
                 [Bb2]           [F]
Mas posso até jurar, você vai ver
                     [C]
Que ninguém vai te amar
             [F]  [C7]  (Frase)
Como eu te amei

[Tab - Frase]

Parte 3 de 3

E|-8-8-8-6-5---6-5-------------------------------------|
B|-----------8-----8-6-5-6-5---------------------------|
G|---------------------------7-5-7-5-------------------|
D|-----------------------------------8-7---------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3 (Violão 2 dueto)

E|-12-12-12-10-8----10-8-------------------------------|
B|---------------11------11-10-8-10-8------------------|
G|------------------------------------10-9-10-9-7------|
D|------------------------------------------------10---|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Segunda Parte]

[F]               [C]              [Dm]  [Dm/C]
  Você pode provar milhões de beijos
[Bb2]                   [F/A]
    Mas sei que você vai lembrar
    [Gm]  [Gm7]
De mim
[C/E]                    [A7]          [Dm]
    Pois sempre que um outro te tocar
              [Bb2]          [F]
Na hora você pode se entregar
                     [C]
Mas não vai me esquecer
             [F]  [C7]  (Frase)
Nem mesmo assim

[Refrão]

          [F]             [C]          [Dm]
Eu vou ficar, guardado no seu coração
           [F7]       [Bb2]
Na noite fria, solidão
         [F/A]            [Bb/C]      [C]
Saudade vai chamar meu nome (meu nome)
          [F]
Eu vou ficar
            [C]           [Dm]
Num verso triste de paixão
         [F7]         [Bb2]
Em cada sonho de verão
          [F/A]        [Bb/C]  [C]
No toque do seu telefone

Você vai ver

[Solo] [F]  [C]  [Dm]  [A7]  [Bb2]
       [F]  [C]  [F]  [C7]

[Tab - Solo]

Parte 1 de 3

E|-5-6-5--------8--------------------------5-----------|
B|-6-8-6-8-6-8--8-8------6----6-8-6-5-3-5--5-5---------|
G|-------9-7-9----9--9---7----7-9-7-6-4-6----6--6--7---|
D|-------------------10-------------------------7--8---|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 3

E|-----------------------------------------------------|
B|-----3-----------6--------------5--6-6/8-6-----------|
G|---3---5-3-5-4-5------3-3-3-2-3-5--7-7/9-------------|
D|-3---------7-6-7-7----5-5-5-4-5----------7-----------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3

E|-8-8-8-6-5---6-5-------------------------------------|
B|-----------8-----8-6-5-6-5---------------------------|
G|---------------------------7-5-7-5-------------------|
D|-----------------------------------8-7---------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3 (Violão 2 - Dueto)

E|-12-12-12-10-8----10-8-------------------------------|
B|---------------11------11-10-8-10-8------------------|
G|------------------------------------10-9-10-9-7------|
D|------------------------------------------------10---|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Segunda Parte]

[F]               [C]              [Dm]  [Dm/C]
  Você pode provar milhões de beijos
[Bb2]                   [F/A]
    Mas sei que você vai lembrar
    [Gm]  [Gm7]
De mim
[C/E]                    [A7]          [Dm]
    Pois sempre que um outro te tocar
              [Bb2]          [F]
Na hora você pode se entregar
                     [C]
Mas não vai me esquecer
             [F]  [C7] (Frase)
Nem mesmo assim

[Tab - Frase]

Parte 3 de 3

E|-8-8-8-6-5---6-5-------------------------------------|
B|-----------8-----8-6-5-6-5---------------------------|
G|---------------------------7-5-7-5-------------------|
D|-----------------------------------8-7---------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3 (Violão 2 - Dueto)

E|-12-12-12-10-8----10-8-------------------------------|
B|---------------11------11-10-8-10-8------------------|
G|------------------------------------10-9-10-9-7------|
D|------------------------------------------------10---|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

[Refrão Final]

          [F]             [C]          [Dm]
Eu vou ficar, guardado no seu coração
           [F7]       [Bb2]
Na noite fria, solidão
         [F/A]            [Bb/C]      [C]
Saudade vai chamar meu nome (meu nome)
          [F]
Eu vou ficar
            [C]           [Dm]
Num verso triste de paixão
         [F7]         [Bb2]
Em cada sonho de verão
          [F/A]        [Bb/C]  [C]
No toque do seu telefone

          [F]             [C]          [Dm]
Eu vou ficar, guardado no seu coração
           [F7]       [Bb2]
Na noite fria, solidão
         [F/A]            [Bb/C]      [C]
Saudade vai chamar meu nome (meu nome)
          [F]
Eu vou ficar
            [C]           [Dm]
Num verso triste de paixão
         [F7]         [Bb2]
Em cada sonho de verão
          [F/A]        [Bb/C]  [C]
No toque do seu telefone

Você vai ver

[Final] [Bb2]  [F]  [C7]  [F]
        [Bb2]  [F]  [C7]  [F]

[Tab - Solo Final]

Parte 1 de 3

E|-----------------------------------5-6-8--6--5-------|
B|-----3-----------6--------------5--6-8-10-8--6-8-6---|
G|---3---5-3-5-4-5------3-3-3-2-3-5--------------8-7---|
D|-3---------7-6-7-7----5-5-5-4-5----------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 2 de 3

E|-----------------------------------------------------|
B|-----3-----------6--------------5--6-6/8-------------|
G|---3---5-3-5-4-5------3-3-3-2-3-5--7-7/9-------------|
D|-3---------7-6-7-7----5-5-5-4-5----------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

Parte 3 de 3

E|-8-6-5-----------------------------------------------|
B|-------8-6-5-----------------------------------------|
G|-------------7-5-------------------------------------|
D|-----------------8-7-5-------------------------------|
A|-----------------------8-7-5-------------------------|
E|-----------------------------8-6-5-------------------|

Parte 3 de 3 (Violão 2 - Dueto)

E|-5-3-1-----------------------------------------------|
B|-------5-3-1-----------------------------------------|
G|-------------3-2-0-----------------------------------|
D|-------------------3-2-0-----------------------------|
A|-------------------------3-1-0-1-3-------------------|
E|-----------------------------------------------------|`,
  },
  {
    id:            "zeze-di-camargo-luciano-dou-a-vida-por-um-beijo",
    titulo:        "Dou a Vida Por Um Beijo",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "G",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 987,
    cifra: `[Intro] [G]  [Am7]  [C]  [G]
        [G]  [Am7]  [C]  [G]

[Tab - Intro]

Solo - Violão de 12 cordas
   [G]            [Am7]          [C]            [G]
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-0-0-0-0h2-0--2-2-2-2h4-2--2-2-2-2/5-2--0-0-0-0h2-0-| 2x
A|----------------------------------------------------|
E|----------------------------------------------------|

Solo - Violão 1
E|-10-8-7---------------------------------------------|
B|--------10-8-10-8-7---7-----------------------------|
G|--------------------9----97--5---------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Solo - Violão 2
E|-7--------------------------------------------------|
B|---10-8-7---7---------------------------------------|
G|----------9---9--7----------------------------------|
D|--------------------10-9-109--7--------------------|
A|-------------------------109--7--------------------|
E|----------------------------------------------------|

[Primeira Parte]

[Tab - Frase]

E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----0h2--------------------------------------------|
A|-0h2------------------------------------------------|
E|----------------------------------------------------|

[Am7]                      [G]        Frase
    Difícil demais, te amar assim
[Am7]                        [G]         Frase
    Minha timidez tem que ter um fim
[Am7]                        [G]       Frase
    Preciso perder o medo de falar
[Am7]                           [G]
    Pra não te perder vou me declarar

[Pré-Refrão]

[G]                               [Am7]
  Morro de saudade quando você some
                          [G/B]  [C]
Dá uma vontade de gritar seu  nome
                             [G]
Quase uma loucura, uma obsessão

[G]                                  [Am7]
  Pra me sentir feliz só tem uma saída
                               [G/B]  [C]
Fazer você ficar de vez na minha   vida
                               [D]
Perto dos meus olhos e do coração

[Refrão]

[G]       [D/F#]  [Em]        [C]         [G]
  Eu te amo,     eu preciso te dizer
      [D/F#]      [Am7]
Todo dia, toda noite
   [G/B]  [C]    [D/F#]  [G]
O meu  sonho é  você
      [D/F#]  [Em]       [C]               [G]
Eu te amo,     é paixão que não tem fim
       [D/F#]        [Am7]
Dou a vida por um beijo
    [G/B]  [C]     [D/F#]   [G]
Quero   ter você pra mim

[Solo] [G]  [Am7]  [C]  [G]

[Tab - Solo]

Solo - Violão de 12 cordas
   [G]            [Am7]         [C]            [G]
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-0-0-0-0h2-0--2-2-2-2h4-2--2-2-2-2/5-2--0-0-0-0h2-0-|
A|----------------------------------------------------|
E|----------------------------------------------------|

Solo - Violão 1
E|-10-8-7---------------------------------------------|
B|--------10-8-10-8-7---7-----------------------------|
G|--------------------9----97--5---------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Solo - Violão 2
E|-7--------------------------------------------------|
B|---10-8-7---7---------------------------------------|
G|----------9---9--7----------------------------------|
D|--------------------10-9-109--7--------------------|
A|-------------------------109--7--------------------|
E|----------------------------------------------------|

[Primeira Parte]

[Am7]                      [G]        Frase
    Difícil demais, te amar assim
[Am7]                        [G]         Frase
    Minha timidez tem que ter um fim
[Am7]                        [G]       Frase
    Preciso perder o medo de falar
[Am7]                           [G]
    Pra não te perder vou me declarar

[Pré-Refrão]

[G]                               [Am7]
  Morro de saudade quando você some
                          [G/B]  [C]
Dá uma vontade de gritar seu  nome
                             [G]
Quase uma loucura, uma obsessão

[G]                                  [Am7]
  Pra me sentir feliz só tem uma saída
                               [G/B]  [C]
Fazer você ficar de vez na minha   vida
                               [D]
Perto dos meus olhos e do coração

[Refrão Final]

[G]       [D/F#]  [Em]        [C]         [G]
  Eu te amo,     eu preciso te dizer
      [D/F#]      [Am7]
Todo dia, toda noite
   [G/B]  [C]    [D/F#]  [G]
O meu  sonho é  você
      [D/F#]  [Em]       [C]               [G]
Eu te amo,     é paixão que não tem fim
       [D/F#]        [Am7]
Dou a vida por um beijo
    [G/B]  [C]     [D/F#]   [G]
Quero   ter você pra mim

[G]       [D/F#]  [Em]        [C]         [G]
  Eu te amo,     eu preciso te dizer
      [D/F#]      [Am7]
Todo dia, toda noite
   [G/B]  [C]    [D/F#]  [G]
O meu  sonho é  você
      [D/F#]  [Em]       [C]               [G]
Eu te amo,     é paixão que não tem fim
       [D/F#]        [Am7]
Dou a vida por um beijo
    [G/B]  [C]     [D/F#]   [G]
Quero   ter você pra mim
       [D/F#]        [Am7]
Dou a vida por um beijo
    [G/B]  [C]     [D/F#]   [G]
Quero   ter você pra mim`,
  },
  {
    id:            "zeze-di-camargo-luciano-pra-mudar-minha-vida",
    titulo:        "Pra Mudar Minha Vida",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2734,
    cifra: `[Intro] [F#m]  [A]  [E]
        [F#m]  [A]  [E]

[Tab - Intro]

E|-------------------------------9-7-5-4--------4--2--0-|
B|------------------------------------------------------|
G|---------------------------7/9---7-6-4----2/4----2--1-|
D|------------------------------------------------------|
A|-------2----------------0-----------------------------|
E|-0-2/4---42-0-2----2-4-------------------------------|

[Primeira Parte]


Queria tanto te dizer
                 [E]   [E4]
Que eu já não te amo
     [E]
Que seu amor em minha vida
               [B7]
Foi mais um engano
      [F#m]
Até quando eu tenho que fingir
            [A]
Se a minha boca morre de
    [B7]          [E]
Vontade do seu beijo


Queria esquecer você
                  [E4]
Apenas um momento
     [E]
Mas nunca consegui
                    [B7]
Tirar você do pensamento
           [F#m]
Quando eu digo que não devo te amar
       [A]
O meu coração me diz
     [B7]             [E]    [F#m]  [E/G#]
Te quero e não tem jeito


[Pré-Refrão]

    [A]
Eu sempre fiz de tudo pra me apaixonar

Até um dia alguém deixar
                [E]
Saudade no meu peito
                [B7]
Agora eu tenho medo
[A]           [B7]    [E]    [B7]
  Agora eu tenho medo

[Refrão]

[E]                            [A]
  Você chegou me deixou sem saída
[B7]
   Me fez te querer
                       [E]
Quando eu não mais queria
                                  [B7]
Você me fez amar quando eu dizia não
                            [A]
E acreditar que no seu coração

Tinha um grande amor
                  [E]
Que eu sonhei um dia

                                [A]
Você chegou quando a dor mais doía
[B7]                                 [E]
   E me encontrou quando eu me perdia

Acho que foi Deus
                   [B7]
Que te mandou pra mim
                            [A]
Pra recomeçar e me fazer feliz
     [B7]   [E]
Por toda vida

[Solo] [F#m]  [A]  [E]
       [F#m]  [E/G#]

[Tab - Solo]
E|-------------------------------9-7-5-4--------2--4--5-|
B|------------------------------------------------------|
G|---------------------------7/9---7-6-4----1/2----4--6-|
D|------------------------------------------------------|
A|-------2----------------0-----------------------------|
E|-0-2/4---42-0-2----2-4-------------------------------|

[Pré-Refrão]

    [A]
Eu sempre fiz de tudo pra me apaixonar

Até um dia alguém deixar
                [E]
Saudade no meu peito
                [B7]
Agora eu tenho medo
[A]           [B7]    [E]    [B7]
  Agora eu tenho medo

[Refrão]

[E]                            [A]
  Você chegou me deixou sem saída
[B7]
   Me fez te querer
                       [E]
Quando eu não mais queria
                                  [B7]
Você me fez amar quando eu dizia não
                            [A]
E acreditar que no seu coração

Tinha um grande amor
                  [E]
Que eu sonhei um dia

                                [A]
Você chegou quando a dor mais doía
[B7]                                 [E]
   E me encontrou quando eu me perdia

Acho que foi Deus
                   [B7]
Que te mandou pra mim
                            [A]
Pra recomeçar e me fazer feliz
     [B7]   [E]
Por toda vida

[Frase Final]  [A]  [B7]  [E]

[Tab - Frase Final]
                                     [E]
E|------4-4--2--0-----5--7/9---7-----0------------------|
B|-----------------------------------0------------------|
G|--2/4---4--2--1-----6--7/9---8-----1------------------|
D|-----------------------------------2------------------|
A|-----------------------------------2------------------|
E|-----------------------------------0------------------|
                                     ↓`,
  },
  {
    id:            "zeze-di-camargo-luciano-irmao-da-lua-amigo-das-estrelas",
    titulo:        "Irmão da Lua, Amigo Das Estrelas",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "Db",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2660,
    cifra: `[Intro] [Ebm]  [Gb]  [Ab]  [Db]  [Ab]

[Tab - Intro]

Parte 1 de 2
         [Ebm]       [Gb]         [Ab]  [Db]  [Ab]
E|-4---------4----------------------------------|
B|---7-6-4-----7-6------4--6--4-----------------|
G|-----------------6--6-------------------------|
D|----------------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

Parte 2 de 2
E|----------------------------------------------|
B|----------------------------------------------|
G|----------------------------------------------|
D|--------3h4--3--------------------------------|
A|-----4----------4-----------------------------|
E|-4h6------------------------------------------|

[Primeira Parte]

    [Db]
Cansei de me perder

No caminho dessa madrugada
[Ebm]                                [Gb]
    Ser irmão da lua chorar na calçada
                               [Db]
Amigo das estrelas buscando carinho


Também preciso ser feliz

E tem que ser agora
[Ebm]
    Se não a vida passa
                    [Gb]
No romper da aurora
                [Ab]
E num piscar de olhos
                [Db]
A gente está sozinho

[Segunda Parte]

[Fm]                [Ebm]
   Coração tá cansado
                        [Gb]
Ferido abandonado tá pedindo amor
             [Db]
Querendo sonhar

[Fm]                 [Ebm]
   Um afeto, um carinho
          ( [Ebm]     [Fm] )  [Gb]
Uma noite pra matar a saudade
    [Ab]                 [Db]    [Db7]
Milhões de beijos pra te dar

[Pré-Refrão]

    [Gb]
E quando você chegar, vai chover amor
[Db]
   Feito terra e mar, mel e beija flor
[Gb]               [Ab]             [Db]      [Db7]
   Feito rima e verso, peixe e pescador

    [Gb]
E quando você chegar

Muda até o tempo
[Db/Gb]                             [Gb]
      Tempestade vira calmaria e vento
                [Ab]              [Db]
Só vai dar você    no meu pensamento

( [Bbm]  [Db] )

[Refrão]

         [Ebm]
Na madrugada
                            [Gb]
Um jantar a luz de velas depois do amor
 [Ab]       [Db]
Fala por nós

( [Fm]  [Gb]  [Ab] )

[Db]           [Ebm]
   Chove lá fora
                            [Gb]
Aqui dentro o sol brilha demais
    [Ab]        [Db]
Em nossos lençóis

( [Db]  [Cm]  [Bbm] )

[Interlúdio] [Ab]  [Gb]  [Ab]  [Ab4]

[Tab - Interlúdio]

Parte 1 de 3
         [Ab]        [Gb]         [Ab]  [Ab4]
E|-4---------4----------------------------------|
B|---7-6-4-----7-6------4--6--4-----------------|
G|-----------------6--6-------------------------|
D|----------------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

Parte 2 de 3
E|----------------------------------------------|
B|-/13-11-9-------------------------------------|
G|-----------11---------------------------------|
D|----------------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

Parte 3 de 3
E|--------------------11-14b16r14p12-14b16--14--|
B|------------9-11/13---------------------------|
G|---------8------------------------------------|
D|-6-8/10---------------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

[Pré-Refrão]

    [Gb]
E quando você chegar, vai chover amor
[Db]
   Feito terra e mar, mel e beija flor
[Gb]               [Ab]             [Db]      [Db7]
   Feito rima e verso, peixe e pescador

    [Gb]
E quando você chegar

Muda até o tempo
[Db/Gb]                             [Gb]
      Tempestade vira calmaria e vento
                [Ab]              [Db]
Só vai dar você    no meu pensamento

( [Bbm]  [Ab]  [Db] )

[Refrão]

         [Ebm]
Na madrugada
                            [Gb]
Um jantar a luz de velas depois do amor
 [Ab]       [Db]
Fala por nós

( [Fm]  [Gb]  [Ab] )

[Db]           [Ebm]
   Chove lá fora
                            [Gb]
Aqui dentro o sol brilha demais
    [Ab]        [Db]  Riff 1
Em nossos lençóis

[Tab - Riff 1]

   [Db]
E|-----------------------------------------9----|
B|-------------------------9--9------9h11-------|
G|-------6--6-----6--8/10--------10-------------|
D|-6--8--------8--------------------------------|
A|----------------------------------------------|
E|----------------------------------------------|

[Refrão Final]

[Eb]          [Fm]
   Na madrugada
                            [Ab]
Um jantar a luz de velas depois do amor
 [Bb]       [Eb]  [Eb4]
Fala por nós

[Eb]           [Fm]
   Chove lá fora
                            [Ab]
Aqui dentro o sol brilha demais
    [Bb]        [Eb]
Em nossos lençóis

         [Fm]
Na madrugada
                            [Ab]
Um jantar a luz de velas depois do amor
 [Bb]       [Eb]  [Eb4]
Fala por nós

[Eb]           [Fm]
   Chove lá fora
                            [Ab]
Aqui dentro o sol brilha demais
    [Bb]        [Eb]
Em nossos lençóis

[Final] [Db]  [Eb]`,
  },
  {
    id:            "zeze-di-camargo-luciano-pra-nao-pensar-em-voce",
    titulo:        "Pra Não Pensar Em Você",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2281,
    cifra: `[Intro] [A9]  [C#m7/E]  [A9]  [C#m7/E]

[Tab - Intro]

(Guitarra 1)

Parte 1 de 3
E|-17----19--21--------10/9-----------------|
B|---------------17---------12/10--9/---2---|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-10/9-------------------------------------|
B|------12/10--9/7--------------------------|
G|-----------------9/7--6-------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|------------------------------------------|
B|---------2/--9/--13~/---------------------|
G|-4/2--1/----------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[Tab - Primeira Parte]

Parte 1 de 2
E|-21/------12----10/9----------------------|
B|----------------------9~------------------|
G|---------------------------4/6------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
E|------------------------------------------|
B|------------------------------------------|
G|-9---8---6/13-----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[A]
  Quando a saudade doer
                  [C#m7/E]
E a solidão machucar
[A]
  Pra não pensar em você
                    [C#m7/E]
Nem procurar seu olhar

[Pré-Refrão]

[D]
  Vou enganar a paixão
[A/C#]             [A]
     Mentir pro meu coração
[Bm]            [E]          [A]
   Que já deixei de te amar
        [Bm]  [A/C#]
Ah, ah,  ah ah
[D]
  Eu vou fingir que esqueci
[A/C#]             [A]
     Que não chorei, nem sofri
[Bm]          [E]        [A]
   Vendo você me deixar

[Interlúdio] [A]  [D]  [A]  [E]

[Tab - Interlúdio]

E|-12-/-------------------------------------|
B|----------------------5/------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Segunda parte]

[A]
  E se a lembrança insistir
                     [C#m7/E]  [E]
Em procurar por nós dois
[A]
  Vai encontrar seu adeus
                  [C#m7/E]  [E]
Dizendo: Volto depois

[Pré-Refrão]

[D]
  É impossível, eu sei
[A/C#]             [A]
     Mentir que nunca te amei
[Bm]             [E]          [A]
   Que foi um sonho e acabou
    [Bm]  [A/C#]
Oh, Oh, Oh Oh
[D]
  Mas tenho que aceitar
[A/C#]            [A]
     Cuidar de mim e tentar
[Bm]           [E]           [A]
   Me encontrar noutro amor

[Refrão]

[Tab - Refrão]

Parte 1 de 2
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|----------2-0-----------------------------|
A|-0----2-4-----4-2-0-----------------------|
E|------------------------------------------|

Parte 2 de 2
E|------------------------------------------|
B|------------------------------------------|
G|-------------0-2--------------------------|
D|-------0-2-4------------------------------|
A|-0-2-4------------------------------------|
E|------------------------------------------|

[D]                     [Bm]
   Mas eu me engano, me desespero
[F#m]
    Porque te amo, porque te quero
[Em]
   E a minha vida
[A]                   [D]
  É só pensar em você (em você)
[D]
  O tempo todo,
[Bm]
   O dia inteiro
[F#m]
    Sinto seu corpo, sinto seu cheiro
[Em]
   E a minha vida
[A]                   [D]
  É só pensar em você

[Terceira Parte]

[B]
  E se a lembrança insistir
                     [D#m7]
Em procurar por nós dois
[B]
  Vai encontrar seu adeus
                  [D#m7]
Dizendo: Volto depois

[E]
  É impossível, eu sei
[B/D#]             [B]
     Mentir que nunca te amei
[C#m]             [F#7]        [B]
    Que foi um sonho e acabou
   [C#m]  [B/D#]
Oh, Oh, Oh Oh
[E]
  Mas tenho que aceitar
[B/D#]            [B]
     Cuidar de mim e tentar
[C#m]           [F#7]         [B]
    Me encontrar noutro amor

[Refrão Final]

[Tab - Refrão Final]

Parte 1 de 2
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|---------1-4-2-1--------------------------|
A|-2-----4---------4-2----------------------|
E|------------------------------------------|

Parte 2 de 2
E|------------------------------------------|
B|------------------------------------------|
G|-----------1-2-4--------------------------|
D|-----1-2-4--------------------------------|
A|-2-4--------------------------------------|
E|------------------------------------------|

[E]                    [C#m]
  Mas eu me engano, me desespero
[G#m]
    Porque te amo, porque te quero
[F#m]
    E a minha vida
[B]                   [E]
  É só pensar em você (em você)
[E]
  O tempo todo,
[C#m]
    O dia inteiro
[G#m]
    Sinto seu corpo, sinto seu cheiro
[F#m]
    E a minha vida
[B]                   [E]
  É só pensar em você

[E]                    [C#m]
  Mas eu me engano, me desespero
[G#m]
    Porque te amo, porque te quero
[F#m]
    E a minha vida
[B]                   [E]
  É só pensar em você (em você)
[E]
  O tempo todo,
[C#m]
    O dia inteiro
[G#m]
    Sinto seu corpo, sinto seu cheiro
[F#m]
    E a minha vida
[B]                   [E]
  É só pensar em você

[E]                    [C#m]
  Mas eu me engano, me desespero
[G#m]
    Porque te amo, porque te quero
[F#m]
    E a minha vida
[B]                   [E]
  É só pensar em você (em você)
[E]
  O tempo todo,
[C#m]
    O dia inteiro
[G#m]
    Sinto seu corpo, sinto seu cheiro
[F#m]
    E a minha vida
[B]                   [E]
  É só pensar em você`,
  },
  {
    id:            "zeze-di-camargo-luciano-dois-coracoes-e-uma-historia",
    titulo:        "Dois Corações e Uma História",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2805,
    cifra: `[Intro]

Parte 1 de 5
             [D]          [E]
E|-------5-4-2------------------------------|
B|---------------3------5-------5-----------|
G|---4/6---4---2------------4-------4-------|
D|-----------0------4/6---6---6---6---6-----|
A|-0----------------------------------------|
E|----------------------0-------------------|

Parte 2 de 5
               [D]       [E]
E|----9--9-7-7-5-----4-4h5p4------4---------|
B|---10-10-9-9-7---7-5-5------5-------5-----|
G|---------------7----------4---4---4---4---|
D|-------------0----------------------------|
A|-0----------------------------------------|
E|---------------------0--------------------|

Parte 3 de 5
             [D]          [E]
E|-------5-4-2------------------------------|
B|---------------3------5-------5-----------|
G|---4/6---4---2------------4-------4-------|
D|-----------0------4/6---6---6---6---6-----|
A|-0----------------------------------------|
E|----------------------0-------------------|

Parte 4 de 5
               [D]       [E]
E|----9--9-7-7-5-----4-4h5p4--5---7---10----|
B|---10-10-9-9-7---7-5-5------7---9---12----|
G|---------------7----------4---------------|
D|-------------0----------------------------|
A|-0----------------------------------------|
E|---------------------0--------0---0----0--|

Parte 5 de 5

E|--9------9--------------------------------|
B|-10---10--------3--2----------------------|
G|----9-------------------------------------|
D|------------2/4---------------------------|
A|--0----------------0----------------------|
E|------------------------------------------|

[Dedilhado Primeira Parte - Primeira Estrofe]

   [Bm]      [E]       [A]       [A7M]    [A6]     [F#m]
E|-------2-------0------------------------2-|
B|-------3-------0-------5------5------5--2-|
G|-----4-------1-------6------6------6----2-|
D|---4-------2-------7------6------4------4-|
A|-2---------------0------0------0--------4-|
E|---------0------------------------------2-|

   [Bm]      [E]       [A]       [A7M]    [A]   [Bm7] [A/C#]
E|-------2-------0--------------------------|
B|-------3-------0-------5------5-2---3---5-|
G|-----4-------1-------6------6---2---2---2-|
D|---4-------2-------7------6-----2---0---2-|
A|-2---------------0------0-------0---2---4-|
E|---------0--------------------------------|

[Primeira Parte]

               [Bm]
No meio da conversa
                 [E]
De um caso terminando
                     [A]   [A7M]
Um fala e o outro escuta
            [A6]         [F#m]
E os olhos vão chorando
       [Bm]
A lógica de tudo
         [E]
É o desamor que chega
           [A]           [A7M]
Depois que um descobre
             [A]         [Bm7]  [A/C#]
Que o outro não se entrega

[Primeira Parte – Segunda Estrofe]

          [Bm]
Quem vai sair arruma
    [E]
As coisas põe na mala
    [A]               [A7M]
Enquanto o outro fuma
    [A6]             [F#m]
Um cigarro na sala
     [Bm]
E o coração palhaço
   [E]
Começa a bater forte
           [D]       [D/E]
Quem fica não deseja
             [A]
Que o outro tenha sorte

[Refrão]

              [D]
E longe um do outro
                 [E]
A vida é toda errada
                  [A]
O homem não se importa
                   [F#]
Com a roupa amarrotada
                [Bm]
E a mulher em crise
                [E]
Quantas vezes chora
                 [D]               [E]
A dor de ter perdido um grande amor
     [A]         [F]  [Bb]
Que foi embora

[Segunda parte]

                  [Cm]
Mas quando vem a volta
              [F]
O homem se arruma
                   [Bb]   [Bb7M]
Faz barba, lava o carro
                 [Bb6]  [Gm]
Se banha, se perfuma
             [Cm]
E liga pro amigo
                   [F]
Que tanto lhe deu força
              [Bb]  [Bb7M]
E jura nunca mais
           [Bb6]       [Bb/D]
Vai perder essa moça

                 [Cm]
E a mulher se abraça
           [F]
À mãe, diz obrigado
              [Bb]   [Bb7M]
E põe aquela roupa
                   [Bb6]  [Gm]
Que agrada o seu amado
                 [Cm]
E passa a tarde toda
             [F]
Cuidando da beleza
                 [Eb]
Jantar à luz de velas
    [F]           [Bb]
E amor de sobremesa

[Refrão]

              [Eb]
E perto um do outro
              [F]
A vida é diferente
             [Bb]
A solidão dá espaço
                      [G]
Ao amor que estava ausente
                   [Cm]
Quem olha não tem jeito
             [F]
De duvidar agora
                [Eb]
Da força da paixão que tem
[F]                   [Bb]
  Dois corações e uma história

              [Eb]
E perto um do outro
              [F]
A vida é diferente
             [Bb]
A solidão dá espaço
                      [G]
Ao amor que estava ausente
                   [Cm]
Quem olha não tem jeito
             [F]
De duvidar agora
                [Eb]
Da força da paixão que tem
[F]                         [Bb]   [Gm]
  Dois corações e uma história
                [Cm]
Da força da paixão que tem
[F]                   [Bb]         [Eb]  [F]
  Dois corações e uma história

[Final] [Bb]  [Eb]  [F]  [Bb]`,
  },
  {
    id:            "zeze-di-camargo-luciano-mentes-tao-bem",
    titulo:        "Mentes Tão Bem",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "G",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1687,
    cifra: `[Intro] [G]  [D11/F#]  [D/F#]  [D9/F#]  [D/F#]
        [G]  [D/F#]  [Em]  [D/F#]

[Tab - Intro]

Parte 1 de 4
   [G]
E|-------3--------3--------3--------3------|
B|-------3--------3--------3--------3------|
G|-----0--------0--------0--------0--------|
D|---0--------0--------0--------0----------|
A|-----------------------------------------|
E|-3--------3--------3--------3------------|

Parte 2 de 4
   [D11/F#]  [D/F#]      [D9/F#]     [D/F#]
E|-------3-------2---------0---------------|
B|-------3-------3---------3---------3-----|
G|-----2-------2---------2---------2-------|
D|---0-------0---------0---------0---------|
A|-----------------------------------------|
E|-2-------2---------2---------2-----------|

Parte 3 de 4
   [G]                 [D/F#]
E|-----------------------------------------|
B|-------0--------0--------3--------3------|
G|-----0--------0--------2--------2--------|
D|---0--------0--------0--------0----------|
A|-----------------------------------------|
E|-3--------3--------2--------2------------|

Parte 4 de 4
   [Em]              [D/F#]
E|-----------------------------------------|
B|-------0-------0-------3-----------------|
G|-----0-------0-------2-------------------|
D|---2-------2-------0-------0-------------|
A|-----------------------------0-2---------|
E|-0-------0-------2-------2---------------|

[Tab - Solo]

E|--------7---8p7--5-----------------------|
B|-----8------8----7--3--------------------|
G|--7--------------------------------------|
D|--9--9--9-----------4--------------------|
A|-----------------------------------------|
E|-----------------------------------------|

[Primeira Parte]

[Tab - Primeira Parte]

Parte 1 de 8
   [C]               [D9/F#]    [D/F#]
E|------------------------0----------------|
B|-------1-------1----------------3--------|
G|-----0-------0-------2--------2----------|
D|---2-----0h2-------0--------0------------|
A|-3---------------------------------------|
E|-----------------2--------2--------------|

Parte 2 de 8
   [G]                 [D/F#]
E|-----------------------------------------|
B|-------0--------0--------3--------3------|
G|-----0--------0--------2--------2--------|
D|---0--------0--------0--------0----------|
A|-----------------------------------------|
E|-3--------3--------2--------2------------|

Parte 3 de 8
   [C/E]     [C]        [D5(9)]   [D/F#]
E|------------------------0----------------|
B|-------1-------1------3----------3-------|
G|-----0-------0------2----------2---------|
D|---2-------2------0----------0-----------|
A|---------3-------------------------------|
E|-0------------------------2--------------|

Parte 4 de 8
   [G]                       [D/F#]
E|-------3---------------------------------|
B|---------------0--------------3----------|
G|-----0-------0-------0-2-----------------|
D|---0-------0-------0-------0-------------|
A|-----------------------------------------|
E|-3-------3-------3-------2---------------|

Parte 5 de 8
   [Em]              [D4(6)]
E|-------3-------3-------3-------3---------|
B|-----0-------0-------0-------0-----------|
G|---0-------0-------2-------2-------------|
D|-2-------2-------0-------0---------------|
A|-----------------------------------------|
E|-----------------------------------------|

Parte 6 de 8
   [C]                 [G7M/B]
E|--------3-------3---------2--------------|
B|------1-------1---------3--------3-------|
G|----0-------0---------0--------0---------|
D|-----------------------------------------|
A|-3--------3--------2---------2-----------|
E|-----------------------------------------|

Parte 7 de 8
   [Am]               [Am/G]
E|-0---------------------------------------|
B|-------1-------1--------1---------1------|
G|-----2-------2--------2---------2--------|
D|---2-------2--------2---------2----------|
A|-0-------0-------------------------------|
E|------------------3---------3------------|

Parte 8 de 8
   [D/F#]
E|-------------------3p2-------------------|
B|-------3--------3--x---3-----------------|
G|-----2--------2----x-----2p0-------------|
D|---0--------0------x---------4-2p0-------|
A|-----------------------------------------|
E|-2--------2------------------------------|

(Variação)

   [D/F#]
E|---------------0----0h2------------------|
B|-------3---------3--3--------------------|
G|-----2--------------2--------------------|
D|---0--------0-------0--------------------|
A|-----------------------------------------|
E|-2--------2------------------------------|

[C]                     [D9/F#]
  Me promete amor sincero
     [D/F#]   [G]    [D/F#]
Uma vida inteira
[C/E]            [C]          [D5(9)]
    Que com você o meu inverno
       [D/F#]    [G]  [D/F#]
Vira primavera
[Em]            [D4(6)]             [C]
   Vive me jurando estar apaixonada
            [G7M/B]                [Am]
Prometeu o mundo e nunca me deu nada
[Am/G]                  [D/F#]
     Você não cumpre nada

[C]
  Que se eu seguir o seu
 [D9/F#]           [D/F#]   [G]    [D/F#]
Caminho eu chegarei ao céu
[C/E]            [C]              [D5(9)]
    Eu vou provando o gosto amargo
        [D/F#]  [G]  [D/F#]
Do seu doce  mel
[Em]                   [D4(6)]
   Na mentira das palavras
              [C]
entro no seu jogo
           [G7M/B]             [Am]
Procurando água só encontro fogo
[Am/G]                 [D/F#]
     E queimo nesse fogo

[Segunda Parte]

[Tab - Segunda Parte]

Parte 1 de 6
   [C]                 [D5(9)]   [D/F#]
E|--------0----------------0---------------|
B|----------------1------3---------3-------|
G|-----0--------0------2---------2---------|
D|---2--------2------0---------0-----------|
A|-3--------3------------------------------|
E|---------------------------2-------------|

Parte 2 de 6
   [G]        [D/F#]     [Em]        [D4]
E|-------------------------3---------3-----|
B|-------0--------3------0---------3-------|
G|-----0--------2------0---------0---------|
D|---0--------0----------------0-----------|
A|-----------------------------------------|
E|-3--------2--------0---------------------|

Parte 3 de 6
   [C]                 [D5(9)]   [D/F#]
E|--------0----------------0---------------|
B|----------------1------3---------3-------|
G|-----0--------0------2---------2---------|
D|---2--------2------0---------0-----------|
A|-3--------3------------------------------|
E|---------------------------2-------------|

Parte 4 de 6
   [G]        [D/F#]     [Em]        [D4]
E|-------------------------3---------3-----|
B|-------0--------3------0---------3-------|
G|-----0--------2------0---------0---------|
D|---0--------0----------------0-----------|
A|-----------------------------------------|
E|-3--------2--------0---------------------|

Parte 5 de 6
   [C]
E|-------3-------0-------------------------|
B|-----------------------1-------1---------|
G|-----0-------0-------0-------0-----------|
D|---2-------2-------2-------2-------------|
A|-3-------3-------3-------3---------------|
E|-----------------------------------------|

Parte 6 de 6
   [D4]      [D]
E|-------3-----2---------------------------|
B|-----3-----------------------------------|
G|---2-------2----2p0----------------------|
D|-0-------0----------4-2p0----------------|
A|--------------------------0-2------------|
E|-----------------------------------------|

             [C]               [D5(9)]
Quando você fala, tão apaixonada
       [D/F#]   [G]          [D/F#]     [Em]
"Meu amor eu sempre estarei contigo"
      [D4]      [C]                     [D5(9)]
Olho nos seus olhos me emociono e choro
        [D/F#]  [G]           [D/F#]  [Em]
Sei que é mentira mas me sinto vivo
       [D4]    [C]                     [D4]   [D]
Mesmo sendo falso o ar, sinto que respiro

[Refrão]

[Tab - Refrão]

Parte 1 de 10
   [C]
E|-----------------------------------------|
B|-------1--------1--------1--------1------|
G|-----0--------0--------0--------0--------|
D|---2--------2--------2--------2----------|
A|-3--------3--------3--------3------------|
E|-----------------------------------------|

Parte 2 de 10
   [D5(9)]            [D/F#]
E|-------0---------------------------------|
B|-----3-----3------------3-------3--------|
G|---2-----------2------2-------2----------|
D|-0-------0---0------0-------0------------|
A|-----------------------------------------|
E|------------------2-------2--------------|

Parte 3 de 10
   [G]                 [D6(11)/F#]
E|-------3--------3--------3--------3------|
B|-----3--------3--------0--------0--------|
G|---0--------0--------2--------2----------|
D|-----------------------------------------|
A|-----------------------------------------|
E|-3--------3--------2--------2------------|

Parte 4 de 10
   [Em7]                [D5(9)]
E|--------3--------3--------0--------0-----|
B|------3--------3--------3--------3-------|
G|----0--------0--------2--------2---------|
D|--------------------0--------0-----------|
A|-----------------------------------------|
E|-0---------0-----------------------------|

Parte 5 de 10
   [C]
E|-----------------------------------------|
B|-------1--------1--------1--------1------|
G|-----0--------0--------0--------0--------|
D|---2--------2--------2--------2----------|
A|-3--------3--------3--------3------------|
E|-----------------------------------------|

Parte 6 de 10
   [D5(9)]            [D/F#]
E|-------0---------------------------------|
B|-----3-----3------------3-------3--------|
G|---2-----------2------2-------2----------|
D|-0-------0---0------0-------0------------|
A|-----------------------------------------|
E|------------------2-------2--------------|

Parte 7 de 10
   [Em7]               [D4]
E|-------3--------3--------3--------3------|
B|-----3--------3--------3--------3--------|
G|---0--------0--------0--------0----------|
D|-2--------2--------0--------0------------|
A|-----------------------------------------|
E|-----------------------------------------|

Parte 8 de 10
   [A9/C#]
E|-------0---------------------------------|
B|-0--------------0--------0--------0------|
G|---2----------2--------2--------2--------|
D|-----2------2--------2--------2----------|
A|-4--------4--------4--------4------------|
E|-----------------------------------------|

Parte 9 de 10
   [C]
E|-----------------------------------------|
B|-------1--------1--------1---------------|
G|-----0--------0--------0-----------------|
D|---2--------2--------2--------0-2--------|
A|-3--------3--------3--------3-----3------|
E|-----------------------------------------|

Parte 10 de 10
E|-------3p2-------------------------------|
B|-----3-----3-----------------------------|
G|---2---------2p0-------------------------|
D|-0---------------4-----------------------|
A|-----------------------------------------|
E|-----------------------------------------|

 [C]          [D5(9)]
Mentes tão bem
[D/F#]                [G]  [D6(11)/F#]
     Que parece verdade
               [Em7]
O que você me fala
       [D5(9)]
Vou acreditando

 [C]          [D5(9)]
Mentes tão bem
[D/F#]                       [Em7]
     Que até chego a imaginar
          [D4]         [A9/C#]
Que não quer me enganar
                  [C]
Que me ama de verdade
[D4]  [D]
      Mentes tão bem

[Tab - Passagem do Refrão]

E|-----------------------------------------|
B|---------------------------0-------------|
G|-----------2---0-------0-----------------|
D|-----2-4-------------4-------------------|
A|---2---------------2---------------------|
E|-0-------0---0---0-------0---------------|

E|-3---3--2-----0--------------------------|
B|---0-------3--5--------------------------|
G|-4---4--2--0--0--------------------------|
D|-----------4--5--------------------------|
A|-----------------------------------------|
E|--------------0--------------------------|

[Segunda Parte]

             [C]               [D5(9)]
Quando você fala, tão apaixonada
       [D/F#]   [G]          [D/F#]     [Em]
"Meu amor eu sempre estarei contigo"
      [D4]      [C]                     [D5(9)]
Olho nos seus olhos me emociono e choro
        [D/F#]  [G]           [D/F#]  [Em]
Sei que é mentira mas me sinto vivo
       [D4]    [C]                     [D4]   [D]
Mesmo sendo falso o ar, sinto que respiro

[Refrão Final]

 [C]          [D5(9)]
Mentes tão bem
[D/F#]                [G]   [D6(11)/F#]
     Que parece verdade
               [Em7]
O que você me fala
       [D5(9)]
Vou acreditando

 [C]          [D5(9)]
Mentes tão bem
[D/F#]                       [Em7]
     Que até chego a imaginar
          [D4]         [A9/C#]
Que não quer me enganar
                  [C]
Que me ama de verdade
[D4]  [D]
      Você mente tão bem

( [Em]  [A5(9)] )

[Tab - Passagem do Refrão]

   [Em]
E|---------------0-------------------------|
B|-------0---------------0-------0---------|
G|-----0-------0-------0-------0-----------|
D|---2-------2-------2-------2-------------|
A|-----------------------------------------|
E|-0-------0-------0-------0---------------|

   [A5(9)]
E|----------------0------------------------|
B|-------0----------------0----------------|
G|-----2--------2-------2------------------|
D|---2--------2-------2-------2------------|
A|-0-------0--------0-------0---0-2--------|
E|-----------------------------------------|

   [C]
E|----------------0------------------------|
B|-------1----------------1----------------|
G|-----0-------0--------0------------------|
D|---2-------2--------2-------0-2----------|
A|-3-------3--------3-------3-----3--------|
E|-----------------------------------------|

   [D]
E|-2-----3p2-------------------------------|
B|---3-------3-----------------------------|
G|-----2-------2p0-------------------------|
D|-----------------0-----------------------|
A|-0---------------------------------------|
E|-----------------------------------------|

                  [C]   [D4]  [D]
Não me ama de verdade

Você mente tão bem

[Final] [G]  [D11/F#]  [D/F#]  [D9/F#]  [D/F#]
        [G]  [D/F#]  [Em]  [C]  [G]

[Tab - Final]

Parte 1 de 4
  [G]
E|-------3--------3--------3--------3------|
B|-------3--------3--------3--------3------|
G|-----0--------0--------0--------0--------|
D|---0--------0--------0--------0----------|
A|-----------------------------------------|
E|-3--------3--------3--------3------------|

Parte 2 de 4
   [D11/F#]  [D/F#]      [D9/F#]     [D/F#]
E|-------3-------2---------0---------------|
B|-------3-------3---------3---------3-----|
G|-----2-------2---------2---------2-------|
D|---0-------0---------0---------0---------|
A|-----------------------------------------|
E|-2-------2---------2---------2-----------|

Parte 3 de 4
   [G]                 [D/F#]
E|-----------------------------------------|
B|-------0--------0--------3--------3------|
G|-----0--------0--------2--------2--------|
D|---0--------0--------0--------0----------|
A|-----------------------------------------|
E|-3--------3--------2--------2------------|

Parte 4 de 4
   [Em]         [C]
E|-----------------------------------------|
B|-------0--------------3h5-3h5p3----------|
G|-----0------------0----------------------|
D|---2----------0h2---2--------------------|
A|------------3----------------------------|
E|-0---------------------------------------|

[Tab - Solo]

E|--------7---8p7--------7-8-7h8p7---------|
B|-----8------8--------8-------------------|
G|--7--------------7h9---------------------|
D|--9--9--9--------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|`,
  },
  {
    id:            "zeze-di-camargo-luciano-e-o-amor",
    titulo:        "É o Amor",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1642,
    cifra: `[Intro] [E]  [B]  [F#7]  [B]  [F#7]

[Tab - Solo Intro]

E|----12p11-12p11-12--11-12--12-12-12-------|
B|-12---------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-14/16-16--12p11-12p11-12--12-12-12-------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-12/14p12-11--14-12-14-12-14--------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|----------12--11--------------------------|
B|-12-14-12--------12-----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

    [B]
Eu não vou negar que sou louco por você
                                    [F#7]
Tô maluco pra te ver, eu não vou negar
    [C#m]                  [C#m/B]        [F#7]
Eu não vou negar, sem você tudo é saudade
                 [C#m7]
Você traz felicidade
[F#]               [B]  [C#m]  [F#]
   Eu não vou negar
    [B]
Eu não vou negar, você é meu doce mel
       [B7]                         [E]
Meu pedacinho de céu, eu não vou negar

[Pré-Refrão]


Você é minha doce amada
           [B]
Minha alegria, meu conto de fada
            [C#m7]
Minha fantasia
                 [F#7]             [B]  [B7]
A paz que eu preciso pra sobreviver
    [E]                                    [B]
Eu sou o seu apaixonado, de alma transparente
                                 [C#m7]
Um louco alucinado meio inconsequente
               [F#7]       [B]
Um caso complicado de se entender

[Refrão]

      [E]
É o amor, que mexe com a minha cabeça
              [B]
E me deixa assim

Que faz eu pensar em você
            [F#7]
E esquecer de mim
     [C#m7]                  [F#7]
Que faz eu esquecer que a vida
               [B]  [B7]
É feita pra viver
      [E]
É o amor
                                        [B]
Que veio como um tiro certo no meu coração
                                       [F#7]
Que derrubou a base forte da minha paixão
     [C#m7]                  [F#7]             [B]   [C#m]  [F#]
Que fez eu entender que a vida é nada sem você

[Ponte]

    [B]
Eu não vou negar, você é meu doce mel
                     [D#°]             [E]
Meu pedacinho de céu,    eu não vou negar

[Pré-Refrão]


Você é minha doce amada
           [B]
Minha alegria, meu conto de fada
            [C#m7]
Minha fantasia
                 [F#7]             [B]  [B7]
A paz que eu preciso pra sobreviver
    [E]                                    [B]
Eu sou o seu apaixonado, de alma transparente
                               [C#m7]
Um louco alucinado meio inconsequente
               [F#7]       [B]        [B7]
Um caso complicado de se entender

[Refrão]

      [E]
É o amor, que mexe com a minha cabeça
              [B]
E me deixa assim

Que faz eu pensar em você
               [F#7]
E esquecer de mim
     [C#m7]                  [F#7]
Que faz eu esquecer que a vida
               [B]  [B7]
É feita pra viver
      [E]
É o amor
                                        [B]
Que veio como um tiro certo no meu coração
                                       [F#7]
Que derrubou a base forte da minha paixão
     [C#m7]
Que fez eu entender
       [F#7]             [B]
Que a vida é nada sem você`,
  },
  {
    id:            "zeze-di-camargo-luciano-sonho-de-amor",
    titulo:        "Sonho de Amor",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 709,
    cifra: `[Intro] [Am]  [G]  [E]

[Tab - Intro]

Parte 1 de 3
    [Am]
E|----------------------------------------|
B|--------0--1-------------0--1--0--------|
G|--2--2---------2---2--2-----------2-----| (x2)
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

Parte 2 de 3
    [G]
E|----------------------------------------|
B|----------------------------------------|
G|--0--0--2--4---0---0--0--2--4--2--0-----|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

Parte 3 de 3
    [E]
E|----------------------------------------|
B|----------------------------------------|
G|--1--1--2--4---1---1--1--2--4--2--1-----|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

[Primeira Parte]

[Am]
   Se uma estrela cadente o céu cruzar
                             [G]
E uma chama no corpo me acender
                             [E]
Vou fazer um pedido e te chamar

Pro começo do sonho acontecer

[Am]
   Quando os dedos tocarem lá no céu
                            [G]
O universo vai todo estremecer
                                [E]
E as estrelas rodando em carrossel

Testemunhas do amor, eu e você

[Pré-Refrão]

[Am]                            [F]
   E as batidas do nosso coração
                             [Dm]
Se acalmando depois da explosão
                                 [E]
Quando o sol se preparar pra nascer
               [Am]
Oh, sonho de amor

[Refrão]

[F]     [G]            [C]              [Am]
  As noites sabem como eu te esperei
[F]      [G]             [C]   [Am]
  Não conto pra ninguém
[F]    [G]           [C]            [Am]
  A lua sabe que eu me apaixonei
           [F]              [Dm]          [E]
Mas, se você é real, porque você não vem?
               [Am]
Oh, sonho de amor

[Interlúdio] [Am]  [G]  [E]

[Tab - Interlúdio]

Parte 1 de 3
    [Am]
E|----------------------------------------|
B|--------0--1-------------0--1--0--------|
G|--2--2---------2---2--2-----------2-----| (x2)
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

Parte 2 de 3
    [G]
E|----------------------------------------|
B|----------------------------------------|
G|--0--0--2--4---0---0--0--2--4--2--0-----|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

Parte 3 de 3
    [E]
E|----------------------------------------|
B|----------------------------------------|
G|--1--1--2--4---1---1--1--2--4--2--1-----|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

[Segunda Parte]

[Am]
   Quando os dedos tocarem lá no céu
                            [G]
O universo vai todo estremecer
                                [E]
E as estrelas rodando em carrossel

Testemunhas do amor, eu e você

[Pré-Refrão]

[Am]                            [F]
   E as batidas do nosso coração
                             [Dm]
Se acalmando depois da explosão
                                 [E]
Quando o sol se preparar pra nascer
               [Am]
Oh, sonho de amor

[Refrão]

[F]     [G]            [C]              [Am]
  As noites sabem como eu te esperei
[F]      [G]             [C]   [Am]
  Não conto pra ninguém
[F]    [G]           [C]            [Am]
  A lua sabe que eu me apaixonei
           [F]              [Dm]          [E]
Mas, se você é real, porque você não vem?
               [Am]
Oh, sonho de amor

[Final] [Am]  [G]  [E]  [Am]

[Tab - Final]

Parte 1 de 3
    [Am]
E|----------------------------------------|
B|--------0--1-------------0--1--0--------|
G|--2--2---------2---2--2-----------2-----| (x2)
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

Parte 2 de 3
    [G]
E|----------------------------------------|
B|----------------------------------------|
G|--0--0--2--4---0---0--0--2--4--2--0-----|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

Parte 3 de 3
    [E]
E|----------------------------------------|
B|----------------------------------------|
G|--1--1--2--4---1---1--1--2--4--2--1-----|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|`,
  },
  {
    id:            "zeze-di-camargo-luciano-preciso-ser-amado",
    titulo:        "Preciso Ser Amado",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1719,
    cifra: `[Intro] [F]  [C/E]  [C2]  [Am7]
        [Dm7]  [Am7]  [Bb2]  [Bb/D]
        [F]  [Dm7]  [G7]  [C4]
        [C7]  [F]  [C7]

[Tab - Intro]

Parte 1 de 5
  [F]                   [C/E]     [C2]    [Am7]  [Dm7]
E|-17-17-17-18-/20-20~--18-17---------------|
B|----------------------------20~~/---------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 5
                         [Am7]            [Bb2]
E|------------------------------------------|
B|-/18-18-18-20-20/22-22----20/18-17~~/-----|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 5
          [Bb/D]     [F]         [Dm7]
E|------------------------------------------|
B|-----------17-18-18--------20b22r20-------|
G|-/19-19-19----------17~-17----------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 4 de 5
      [G7]        [C4]       [C7]      [F]
E|-----------------------------------20-----|
B|-18-20--------20b22r20-18-18~~------------|
G|-------19--17-----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 5 de 5
   [C7]
E|-13p12------------------------------------|
B|-------13---------------------------------|
G|----------12------------------------------|
D|-------------15p14--1210-----------------|
A|--------------------------10~---12~~-----|
E|------------------------------------------|

[Primeira Parte]

[F]                  [Am7]
  Não preciso de amor
[Bb2]                    [F]   [C/E]
    Eu preciso é ser amado
[Dm7]                          [Am7]
    O que eu quero é ter alguém
                       [Bb2]
Que me queira amar também
                [F]
E fique do meu lado

                        [Am7]
O que eu quero é muito mais
[Bb2]                        [F]    [C/E]
    Do que andar pelas calçadas
[Dm7]                    [Am7]
    À procura de um olhar
                    [Bb2]
De um corpo pra sonhar
              [F]
Uma nova namorada

[Pré-Refrão]

[E4]         [E7]          [A]     [F#m7]
   Quero além dos horizontes
[Bm7]          [E7]        [A]
    Mais que uma madrugada
[D#4(7)]          [G#4]     [G#7]     [C#2]
       Sol que nasce atrás dos montes
[D#4(7)]         [G#4]    [G#7]      [C#2]
       Não clareia a minha estrada

( [Em7]  [A7] )

[Refrão]

[D]               [A/C#]      [A]  [F#7]
  Eu não faço amor por fazer
[Bm7]                    [F#m7]
    Tem que ser muito mais que prazer
[G]                   [D]
  Tem que ser todo dia
            [E7]      [E/G#]    [A4]  [A2]
A grande magia de amar é viver

[D]               [A/C#]      [A]  [F#7]
  Eu não faço amor por fazer
[Bm7]                    [F#m7]
    Tem que ser muito mais que prazer
[G]                   [D]
  Tem que ser todo dia
     [Bm7]    [E7]    [A4]   [A]  [D]
Sem cama vazia no amanhe_cer

[Solo] [Gm7]  [C7]
       [F]  [C/E]  [C2]  [Am7]
       [Dm7]  [Am7]  [Bb2]
       [F]  [Dm7]  [G7]
       [C4]  [C7]  [F]  [C7]

[Tab - Solo]

Parte 1 de 5
  [Gm7]  [C7]  [F]                  [C/E]     [C2]  [Am7]
E|-----------17-17-17-18-/20-20-18-17-------|
B|------------------------------------20~~/-|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 5
  [Dm7]              [Am7]                [Bb2]
E|------------------------------------------|
B|-/18-18-18-20-20/22-22-20/18-17~~/--------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 5
                [F]            [Dm7]
E|------------------------------------------|
B|-----------17-18-18--------20b22r20-------|
G|-/19-19-19----------17~-17----------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 4 de 5
      [G7]        [C4]       [C7]      [F]
E|-----------------------------------20~----|
B|-18-20--------20b22r20-18-18~~------------|
G|-------19--17-----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 5 de 5
   [C7]
E|-18p17------------------------------------|
B|-------18---------------------------------|
G|----------17-15p14--17p15-14~-------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Pré-Refrão]

[E4]         [E7]          [A2]    [F#m7]
   Quero além dos horizontes
[Bm7]          [E4]      [E7]  [A2]
    Mais que uma madru__gada
[D#m7]          [G#4]     [G#7]     [C#2]
     Sol que nasce atrás dos montes
[D#m7]         [G#4]    [G#7]  [C#2]     [Em7]  [A7]
     Não clareia a minha estrada

[Refrão Final]

[D]               [A/C#]      [A]  [F#7]
  Eu não faço amor por fazer
[Bm7]                    [F#m7]
    Tem que ser muito mais que prazer
[G]                   [D]
  Tem que ser todo dia
            [E7]      [E/G#]    [A4]  [A]
A grande magia de amar é viver

[D]               [A/C#]      [A]  [F#7]
  Eu não faço amor por fazer
[Bm7]                    [F#m7]
    Tem que ser muito mais que prazer
[G]                   [D]
  Tem que ser todo dia
     [Bm7]    [E7]    [A4]  [A]    [D2]  [B4]  [B7]
Sem cama vazia no a__manhecer

[E]               [B/D#]      [B]   [G#7]
  Eu não faço amor por fazer
[C#m7]                    [G#m7]
     Tem que ser muito mais que prazer
[A]                   [E]
  Tem que ser todo dia
            [F#7]     [F#/A#]   [B4]  [B/D#]
A grande magia de amar é viver

[E]               [B/D#]      [B2]  [G#7]
  Eu não faço amor por fazer
[C#m7]                    [G#m7]
     Tem que ser muito mais que prazer
[A]                   [E]
  Tem que ser todo dia
     [C#m7]   [F#7]   [B4]  [B7]   [E]  [B4]  [B7]
Sem cama vazia no a__manhecer

[E]               [B/D#]      [B]  [G#7]
  Eu não faço amor por fazer
[C#m7]                    [G#m7]
     Tem que ser muito mais que prazer
[A]                   [E]
  Tem que ser todo dia
            [F#7]     [F#/A#]   [B4]  [B/D#]
A grande magia de amar é viver

[E]               [B/D#]      [B]  [G#7]
  Eu não faço amor por fazer
[C#m7]                    [G#m7]
     Tem que ser muito mais que prazer
[A]                   [E]
  Tem que ser todo dia
     [C#m7]   [F#7]   [B4]  [B7]   [E]
Sem cama vazia no a__manhecer`,
  },
  {
    id:            "zeze-di-camargo-luciano-flores-em-vida",
    titulo:        "Flores Em Vida",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2779,
    cifra: `[Intro] [Am]  [C]  [G]  [D]
        [Am]  [C]  [G]  [D]

[Tab - Intro]

Parte 1 de 2
         [Am]        [C]      [G]      [D]
E|---------------------------------------------|
B|---8p6-8~----8p6-8~--116~--116~------------|
G|-5---------5---------------------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

Parte 2 de 2
         [Am]            [C]      [G]         [D]
E|---------------------------------------------|
B|---8p6-8p6-8~----8p6-8~--116~--10h11p10-----|
G|-5-------------5-----------------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

[Primeira Parte]

                 [Am]
Quero seu amor agora
[C]                  [G]   [D]
  Não a saudade depois
                        [Am]
Seu carinho pela vida afora
             [C]          [G]           [D]
Antes que o fim pare entre nós dois

                 [Am]
Quero sua companhia
[C]                   [G]         [D]
  Caminhar na mesma   direção
                      [Am]
É certo que um certo dia
                [C]           [G]       [D]
A vida nos separe em alguma estação

[Pré-Refrão]

                 [Am]  [C]
Quero flores em vida
                   [G]      [D]
Seu sorriso a me iluminar
                     [Am]
As lágrimas de despedida
                 [C]        [G]       [D]
Não estarei por perto pra enxugar

[Refrão]

[Am]        [C]       [G]
Eu quero viver a vida
        [D]        [Am]
Quero flores em vida
    [C]           [G]          [D]
Colhidas no jardim do amor

[Am]        [C]       [G]
Eu quero viver a vida
        [D]        [Am]
Quero flores em vida
    [C]           [G]          [D]
Colhidas no jardim do amor

Do nosso amor

[Interlúdio] [Am]  [C]  [G]  [D]
             [Am]  [C]  [G]  [D]

[Tab - Interlúdio]

Parte 1 de 2
         [Am]        [C]      [G]      [D]
E|---------------------------------------------|
B|---8p6-8~----8p6-8~--116~--116~------------|
G|-5---------5---------------------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

Parte 2 de 2
         [Am]            [C]      [G]         [D]
E|---------------------------------------------|
B|---8p6-8p6-8~----8p6-8~--116~--10h11p10-----|
G|-5-------------5-----------------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

[Pré-Refrão]

                 [Am]  [C]
Quero flores em vida
                   [G]      [D]
Seu sorriso a me iluminar
                     [Am]
As lágrimas de despedida
                 [C]        [G]       [D]
Não estarei por perto pra enxugar

[Refrão]

[Am]        [C]       [G]
Eu quero viver a vida
        [D]        [Am]
Quero flores em vida
    [C]           [G]          [D]
Colhidas no jardim do amor

[Am]        [C]       [G]
Eu quero viver a vida
        [D]        [Am]
Quero flores em vida
    [C]           [G]          [D]
Colhidas no jardim do amor

           [Am]  [C]  [Em]  [D]
Do nosso amor
           [Am]  [C]  [G]
Do nosso amor
           [D]
Do nosso amor

[Final]

[Tab - Final]

E|---------------------------------------------|
B|---------------------------------------------|
G|---------------------------------------------|
D|---------------------------------------------|
A|-3-2-0---------------------------------------|
E|---------------------------------------------|`,
  },
  {
    id:            "zeze-di-camargo-luciano-sera-que-foi-saudade",
    titulo:        "Será Que Foi Saudade?",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4003,
    cifra: `[Intro] [C]  [G/B]  [Am7]  [F9]
        [C]  [G/B]  [F9]  [C]

[Primeira Parte]

 [C]            [F9]             [C]  [F9]
Diga logo o que te trouxe aqui
 [C]              [F9]           [G]
Fala que eu tô louco para saber

( [Am7]  [A#°]  [G/B] )

       [F9]         [G]            [C]
O que fez você mudar tão de repente
          [E7]            [Am]
O que te fez pensar na gente
      [D7]          [G]  [G4]  [G]
Por que voltou aqui?

[Segunda Parte]

 [C]          [F9]             [C]  [F9]
Fala que você não me esqueceu
       [C]           [F9]         [G]
Que a solidão não doeu só em mim

( [Am7]  [A#°]  [G/B] )

       [F]          [G]            [C]
O que fez você mudar seu pensamento
         [E7]           [Am]
O que tocou seu sentimento
      [D7]          [G]  [G4]  [G]
Por que voltou aqui?

[Pré-Refrão]

        [F]           [G/F]         [C]
Eu não posso acreditar nessa mudança
        [E7]        [Am]
Onde a fera vira santa
    [F]      [G]       [C]  [F]  [C]
E quer voltar pra mim

[Refrão]

                 [G]
Será que foi saudade
                     [F]
Que te machucou por dentro
                     [C]
Que te fez por um momento
                 [G]
Entender de solidão?


Será que foi saudade
                          [F]
Que te fez que quebrar a cara?
                    [C]
Sou doença que não sara
        [G]          [C]  [F]
Dentro do seu coração

[Interlúdio] [C]  [G/B]  [Am7]  [F]
             [C]  [G]  [F]

[Tab - Interlúdio]

Parte 1 de 2
   [C]           [G/B]  [Am7]          [F]
E|------------------------------------------|
B|-------6/8-6/8~\-----------5-8/10~\-------|
G|-----5-------------------5----------------|
D|---5-----------------5/7------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
         [C]          [G]       [F]
E|------------------------------------------|
B|-6/86-5---5/65--------------------------|
G|-----------------7---54------------------|
D|--------------------------7---------------|
A|------------------------------------------|
E|------------------------------------------|

[Segunda Parte]

 [C]          [F9]             [C]  [F9]
Fala que você não me esqueceu
       [C]           [F9]         [G]
Que a solidão não doeu só em mim

( [Am7]  [A#°]  [G/B] )

       [F]          [G]            [C]
O que fez você mudar seu pensamento
         [E7]           [Am]
O que tocou seu sentimento
      [D7]          [G]  [G4]  [G]
Por que voltou aqui?

[Pré-Refrão]

        [F]           [G/F]         [C]
Eu não posso acreditar nessa mudança
        [E7]        [Am]
Onde a fera vira santa
    [F]      [G]       [C]  [F]  [C]
E quer voltar pra mim

[Refrão]

                 [G]
Será que foi saudade
                     [F]
Que te machucou por dentro
                     [C]
Que te fez por um momento
                 [G]
Entender de solidão?


Será que foi saudade
                          [F]
Que te fez que quebrar a cara?
                    [C]
Sou doença que não sara
        [G]          [C]  [F]  [C]
Dentro do seu coração

                 [G]
Será que foi saudade
                     [F]
Que te machucou por dentro
                     [C]
Que te fez por um momento
                 [G]
Entender de solidão?


Será que foi saudade
                          [F]
Que te fez que quebrar a cara?
                    [C]
Sou doença que não sara
        [G]          [C]  [F]  [C]
Dentro do seu coração

                 [G]
Será que foi saudade
                     [F]
Que te machucou por dentro
                     [C]
Que te fez por um momento
                 [G]
Entender de solidão?


Será que foi saudade
                          [F]
Que te fez que quebrar a cara?
                    [C]
Sou doença que não sara
        [G]          [C]
Dentro do seu coração`,
  },
  {
    id:            "zeze-di-camargo-luciano-sem-medo-de-ser-feliz",
    titulo:        "Sem Medo de Ser Feliz",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 3843,
    cifra: `[Intro] [E]

[Tab - Intro]

(Sem Capo)

E|-3-5-5/7-5-3-5-3-5-5/7--------------------|
B|------------------------------------------|
G|-4-5-5/7-5-4-5-4-5-5/7--------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-3-5-5/7-5-3-5-3-5-3----------------------|
B|-4-5-5/7-5-4-5-4-5-4----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-3-5-5/7-5-3-5-3-5-5/7--------------------|
B|------------------------------------------|
G|-4-5-5/7-5-4-5-4-5-5/7--------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-3-5-5/7-5-3-5-3-5-3----------------------|
B|-4-5-5/7-5-4-5-4-5-4----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

 [E]                     [B7]
Tira essa paixão da cabeça
 [A]                       [E]
Tira essa tristeza no olhar
                         [B7]
Já não faz sentido essa busca
 [A]                     [E]
Já não vale a pena chorar
          [B7]             [A]
Tempo perdido, amor bandido
            [E]
Que ele te fez
          [B]                  [A]
Final da história, você sem rumo
          [E]   [E4]
Mais uma vez
   [E]
E como o rio busca o mar
              [B7]
Você vem me procurar
     [A]
E encontra em meu peito esse amor
                     [E]  [E4]
Que ele não quis te dar

[Refrão]

   [E]
Então viaja no meu corpo
             [G#7]
Sem medo de ser feliz
         [A]
E eu te dou meu amor
       [B7]        [E]
Faço amor como nunca fiz

           [B7]
Perco a cabeça, me queimo em seu fogo
         [E]
Eu sem juízo, faço o seu jogo
              [B7]
Sou seu brinquedo
                            [E]
O seu presente que caiu do céu
         [B7]
Faço de tudo, pra te agradar
                [E]
Dorme em meus braços te faço sonhar
   [F#m] [G#m] [A]    [B7]
Mas nem amanheceu
           [E]   [B/D#]  [C#m]
Você já me esque____ceu
 [A]                 [B7]
Mais uma vez você vai
 [G#m]               [C#m]
Leva um pedaço de mim
 [F#m]                [B7]
Mais uma vez vou ficar
                [E]
Te esperando aqui

[Primeira Parte]

 [E]                     [B7]
Tira essa paixão da cabeça
 [A]                       [E]
Tira essa tristeza no olhar
                         [B7]
Já não faz sentido essa busca
 [A]                     [E]
Já não vale a pena chorar
          [B7]             [A]
Tempo perdido, amor bandido
            [E]
Que ele te fez
          [B7]                  [A]
Final da história, você sem rumo
          [E]   [E4]
Mais uma vez
  [E]
E como o rio busca o mar
              [B7]
Você vem me procurar
     [A]
E encontra em meu peito esse amor
                     [E]   [B7]
Que ele não quis te dar

[Refrão]

   [E]
Então viaja no meu corpo
             [G#7]
Sem medo de ser feliz
         [A]
E eu te dou meu amor
       [B7]                [E]  [E4]  [E]
Faço amor como nunca fiz

           [B7]
Perco a cabeça, me queimo em seu fogo
         [E]
Eu sem juízo, faço o seu jogo
              [B7]
Sou seu brinquedo
                            [E]
O seu presente que caiu do céu
         [B7]
Faço de tudo, pra te agradar
                [E]
Dorme em meus braços te faço sonhar
        [A]      [B7]
Mas nem amanheceu
           [E]   [B/D#]  [C#m]
Você já me esque____ceu
 [A]                 [B7]
Mais uma vez você vai
 [G#m7]              [C#m7]
Leva um pedaço de mim
 [F#m]                [B7]
Mais uma vez vou ficar
                [E]
Te esperando aqui
 [A]                 [B7]
Mais uma vez você vai
 [G#m7]             [C#m7]
Leva um pedaço de mim
 [F#m]                [B7]
Mais uma vez vou ficar
                [A] [Am]  [E]
Te esperando aquiiiiiii

[Final] [E]

[Tab - Final]

(Sem Capo)

E|-3-5-5/7-5-3-5-3-5-5/7--------------------|
B|------------------------------------------|
G|-4-5-5/7-5-4-5-4-5-5/7--------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-3-5-5/7-5-3-5-3-5-3----------------------|
B|-4-5-5/7-5-4-5-4-5-4----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|`,
  },
  {
    id:            "zeze-di-camargo-luciano-cada-volta-e-um-recomeco",
    titulo:        "Cada Volta É Um Recomeço",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 5042,
    cifra: `[Intro] [F#]  [E]  [B/D#]  [E]
        [G#m]  [F#11]  [E]  [F#11]
        [B/D#]  [E]  [B/D#]  [E]

[Primeira Parte]

     [B]       [B4]
Mais uma vez
     [B]
Meu coração esquece tudo
       [G°]
Que você me fez
    [E°]
Eu volto pra esse amor insano
        [G#m]      [G#m7/F#]
Sem pensar em mim
       [E]
Pra recomeçar
      [F#]         [F#4]  [F#]
Já sabendo o fim

[Segunda Parte]

    [B]        [B4]
Mas é paixão
  [B]
E essas coisas de paixão
            [G°]
Não tem explicação
   [E°]
É simplesmente se entregar
         [G#m]     [G#m7/F#]
Deixar acontecer
   [E]
E sempre acabo me envolvendo
       [F#]  [F#4]  [F#]  [F#4]
Com você

[Refrão]

[B]              [E]
  Nesses desencontros
      [F#]
Eu insisto em te encontrar
[B]                [E]
  Como se eu partisse
       [F#]
Já pensando em voltar
[B]             [E]
  Como se no fundo eu não
    [F#]
Pudesse existir
           [B]  [E]  [F#]  [F#11]
Sem ter você

[B]                  [E]
  Toda vez que eu volto
       [F#]
Eu te vejo sempre igual
[B]               [E]
  Como se a saudade fosse
   [F#]
A coisa mais banal
[B]                [E]
  E eu chegando sempre
         [F#]
Como um louco pra dizer
           [B]
Que amo você
          [B]
   Amo você

[Terceira Parte]

[G#m]                   [D#m]
    Que me leve pela vida ao coração
[E]       [F#]            [B]   [F#/A#]
  Como versos pra canção
        [G#m]            [D#m]
Volto pra você, volto pelo amor
       [C#]            [B/D#]        [Db/F]
Não importa se é um sonho pelo avesso
      [C#]             [F#]  [F#4]  [F#]  [F#7(4/9)]
Cada volta é um recomeço

[Segunda Parte]

    [B]        [B4]
Mas é paixão
  [B]
E essas coisas de paixão
            [G°]
Não tem explicação
   [E°]
É simplesmente se entregar
         [G#m]     [G#m7/F#]
Deixar acontecer
   [E]
E sempre acabo me envolvendo
       [F#]  [F#4]  [F#]  [F#4]
Com você

[Refrão]

[B]              [E]
  Nesses desencontros
      [F#]
Eu insisto em te encontrar
[B]                [E]
  Como se eu partisse
       [F#]
Já pensando em voltar
[B]             [E]
  Como se no fundo eu não
    [F#]
Pudesse existir
            [B]  [E]  [F#]  [F#11]
Sem ter você

[B]                  [E]
  Toda vez que eu volto
       [F#]
Eu te vejo sempre igual
[B]               [E]
  Como se a saudade fosse
   [F#]
A coisa mais banal
[B]                [E]
  E eu chegando sempre
         [F#]
Como um louco pra dizer
           [B]
Que amo você
   [D#m]     [E]
Eu amo, eu amo
[F#]        [B]
   Amo você
   [D#m]     [E]
Eu amo, eu amo
[F#]        [B]
   Amo você
   [D#m]     [E]
Eu amo, eu amo
[F#]        [B]
   Amo você
   [D#m]     [E]   [F#]
Eu amo, eu amo
[F#]        [B]  [D#m]  [E]
   Amo você
[F#]        [G]  [A]  [B]
   Amo você`,
  },
  {
    id:            "zeze-di-camargo-luciano-no-dia-em-que-eu-sai-de-casa",
    titulo:        "No Dia Em Que Eu Saí De Casa",
    artista:       "Zezé Di Camargo & Luciano",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2044,
    cifra: `[Intro] [Bm]  [E]  [A]  [E]  [A]  (passagem 1)

[Tab - Passagem 1]

E|------------------------------------------------------|
B|------------------------------------------------------|
G|------------------------------------------------------|
D|------------------------------------------------------|
A|-0----------------------------------------------------|
E|---0-2-4----------------------------------------------|

[Solo Intro]

[Tab - Violão 1]

Parte 01 de 02
E|------------------------------------------------------|
B|-12b14-12b14r12-10-12-----10b12-10b12r10-9-10---------|
G|----------------------11------------------------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|

Parte 02 de 02
E|-------------------7-----5----------------------------|
B|-9b10-9b10r9-7-7/9---97---75--2b3r2-0---------------|
G|----------------------------------------2-------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|

[Tab - Violão 2]

Parte 01 de 02
E|------------------------------------------------------|
B|-15b17-15b17r15-14-15-----14b15-14b15r14-12-14--------|
G|----------------------14------------------------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|

Parte 02 de 02
E|--------------------------10-------9------------------|
B|-12b14-12b14r12-10--10/12----1210---109--5b7r5-3-2--|
G|------------------------------------------------------|
D|------------------------------------------------------|
A|------------------------------------------------------|
E|------------------------------------------------------|

[Primeira Parte]

    [A]
No dia em que eu saí de casa

Minha mãe me disse
            [D]
Filho, vem cá
    [E]
Passou a mão em meus cabelos

Olhou em meus olhos
           [A]
Começou falar

Por onde você for eu sigo
              [A7]
Com meu pensamento
                 [D]
Sempre onde estiver

Em minhas orações
    [A]
Eu vou pedir a Deus
    [E]                  [A]   (passagem 2)
Que ilumine os passos seus

[Tab - Passagem 2]

E|------------------------------------------------------|
B|------------------------------------------------------|
G|------------------------------------------------------|
D|------------------------------------------------------|
A|-0-0-2-4----------------------------------------------|
E|------------------------------------------------------|

[Refrão]

           [D]
Eu sei que ela nunca compreendeu
                            [A]
Os meus motivos de sair de lá
                              [E]
Mas ela sabe que depois que cresce
              [D]
O filho vira passarinho
         [A]  (passagem 2)
E quer voar

           [D]
Eu bem queria continuar ali
                              [A]
Mas o destino quis me contrariar
                           [E]
E o olhar de minha mãe na porta

Eu deixei chorando
           [A]
A me abençoar

( [Bm]  [E]  [A]  [E]  [A] ) (passagem 1)

[Segunda Parte]

   [A]
A minha mãe naquele dia
                           [D]
Me falou do mundo como ele é
   [E]
Parece que ela conhecia
                              [A]
Cada pedra que eu iria por o pé

E sempre ao lado do meu pai
              [A7]               [D]
Da pequena cidade ela jamais saiu

Ela me disse assim:
     [A]
Meu filho, vá com Deus
    [E]                     [A] (passagem 2)
Que esse mundo inteiro é seu

[Refrão]

           [D]
Eu sei que ela nunca compreendeu
                            [A]
Os meus motivos de sair de lá
                              [E]
Mas ela sabe que depois que cresce
              [D]
O filho vira passarinho
         [A]  (passagem 2)
E quer voar

           [D]
Eu bem queria continuar ali
                              [A]
Mas o destino quis me contrariar
                           [E]
E o olhar de minha mãe na porta
                             [A]
Eu deixei chorando a me abençoar

                           [E]
E o olhar de minha mãe na porta
                              [A]
Eu deixei chorando a me abençoar

[Final] [E]  [A]  [D/A]  [E]  [A]`,
  },
  // FIM_CIFRAS
];

// ─── Módulos e Aulas ─────────────────────────────────────────────────────────

export type Aula = {
  id: string;
  numero: number;
  titulo: string;
  duracao: string;
  descricao: string;
};

export type Modulo = {
  id: string;
  numero: number;
  titulo: string;
  descricao: string;
  nivel: "Iniciante" | "Intermediário" | "Avançado";
  duracao: string;
  aulas: Aula[];
};

export const MODULOS: Modulo[] = [
  {
    id: "primeiros-passos",
    numero: 1,
    titulo: "Primeiros Passos",
    descricao: "Aprenda a segurar o violão, postura correta, seus primeiros acordes e como afinar o instrumento.",
    nivel: "Iniciante",
    duracao: "2h30min",
    aulas: [
      { id: "pp-01", numero: 1, titulo: "Como segurar o violão", duracao: "—", descricao: "Postura correta sentado e em pé. Evite os erros mais comuns de iniciantes." },
      { id: "pp-02", numero: 2, titulo: "Conhecendo as partes do violão", duracao: "—", descricao: "Braço, corpo, cravelhas, cavalete, boca e cordas — aprenda o nome de cada parte." },
      { id: "pp-03", numero: 3, titulo: "Como afinar o violão", duracao: "—", descricao: "Afinação por ouvido e com afinador. Use o afinador da plataforma para praticar." },
      { id: "pp-04", numero: 4, titulo: "Seu primeiro acorde: Lá menor (Am)", duracao: "—", descricao: "O acorde mais simples pra começar. Aprenda a posição dos dedos e como tirar som limpo." },
      { id: "pp-05", numero: 5, titulo: "Sua primeira batida sertaneja", duracao: "—", descricao: "A batida básica de balada sertaneja — simples e muito usada nos modões." },
    ],
  },
  {
    id: "pestana",
    numero: 2,
    titulo: "Pestana",
    descricao: "Domine a técnica da pestana e abra um novo mundo de acordes no violão.",
    nivel: "Intermediário",
    duracao: "2h00min",
    aulas: [
      { id: "pe-01", numero: 1, titulo: "O que é a pestana e por que é difícil", duracao: "—", descricao: "Entenda a mecânica da pestana, como posicionar o dedo indicador e treinar sem se machucar." },
      { id: "pe-02", numero: 2, titulo: "Fortalecimento do dedo indicador", duracao: "—", descricao: "Exercícios progressivos para desenvolver a força necessária para a pestana limpa." },
      { id: "pe-03", numero: 3, titulo: "Acorde F com pestana", duracao: "—", descricao: "O desafio mais comum dos iniciantes, resolvido passo a passo com dicas práticas." },
      { id: "pe-04", numero: 4, titulo: "Acorde Bm com pestana", duracao: "—", descricao: "Pestana na 2ª casa — muito usado em músicas em Ré maior. Pratique a troca suave." },
      { id: "pe-05", numero: 5, titulo: "Aplicando a pestana em músicas reais", duracao: "—", descricao: "Coloque em prática tudo que aprendeu tocando músicas sertanejas que usam pestana." },
    ],
  },
  {
    id: "finalize-com-mestria",
    numero: 3,
    titulo: "Finalize com Mestria",
    descricao: "Eleve seu nível com técnicas avançadas, solos, dedilhados e performance completa.",
    nivel: "Avançado",
    duracao: "3h00min",
    aulas: [
      { id: "fm-01", numero: 1, titulo: "Dedilhado avançado no sertanejo", duracao: "—", descricao: "Padrões de dedilhado usados nos grandes modões e músicas de viola caipira." },
      { id: "fm-02", numero: 2, titulo: "Introduções icônicas do sertanejo", duracao: "—", descricao: "Aprenda as introduções mais famosas do sertanejo raiz nota por nota." },
      { id: "fm-03", numero: 3, titulo: "Técnicas de solo: ligado e vibrato", duracao: "—", descricao: "Hammer-on, pull-off e vibrato para dar expressividade ao seu toque." },
      { id: "fm-04", numero: 4, titulo: "Cantar e tocar ao mesmo tempo", duracao: "—", descricao: "Método definitivo para dividir atenção entre mão e voz sem perder o ritmo." },
      { id: "fm-05", numero: 5, titulo: "Performance: monte seu repertório", duracao: "—", descricao: "Como estruturar um repertório completo para churrasco, roda de viola e palco." },
    ],
  },
];

// ─── Progresso mock do usuário ────────────────────────────────────────────────
// Em produção, isso vem do banco de dados por usuário

export type ProgressoModulo = {
  moduloId: string;
  aulasAssistidas: string[]; // IDs das aulas
};

export const PROGRESSO_MOCK: ProgressoModulo[] = [];
