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
    {
    id:            "almir-sater-tocando-em-frente",
    titulo:        "Tocando Em Frente",
    artista:       "Almir Sater",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1694,
    cifra: `[Tab - Intro]

E|------------------------------------------|
B|------------------------------------------|
G|---0---0---0------------------------------|
D|-----0---2--------------------------------|
A|-3----------------------------------------|
E|------------------------------------------|

[Primeira Parte]

Parte 1 de 3
E|-0-1-3-7--7---------7---------------------|
B|-1-3-5-8----8-----8---8-------------------|
G|--------------7-7-------7-----------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-----5----------5-------------------------|
B|---6---6------6---6-----------------------|
G|-5-------5--5-------5---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0-0--------------------------------|
B|---1---1-1--------------------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0-0--1-1/3-3-3-3-----3---------3-----|
B|---1---1--3-3/5-5-5-5---3---3-----3---3---|
G|-0--------------------4-------5-5-------5-|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[G]                                [F9]
   Ando devagar porque já tive pressa

E levo esse sorriso
            [C]
Porque já chorei demais
[G]
   Hoje me sinto mais forte
                 [F9]
Mais feliz quem sabe

Eu só levo a certeza
              [C]
De que muito pouco eu sei
    [G]
Ou nada sei

[Refrão]

Parte 1 de 3
E|-----1---------1---------1---------1------|
B|---1---1-----3---3-----1---1-----3---3----|
G|-2-------2-2-------2-2-------2-2-------2--|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0--0-0-1-1-1/3-3-0-----------------|
B|---1---1--1-1-3-3-3/5-5-------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0----------0-------------------------|
B|---1---1------1---1-----------------------|
G|-0-------0--0-------0---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[F9]               [Dm]             [F9]
    Conhecer as manhas e as manhãs
             [Dm]             [C]
O sabor das massas e das maçãs
[F9]                [Dm]               [F9]
    É preciso o amor pra poder pulsar
           [Dm]               [F9]
É preciso paz pra poder sorrir
              [C]
É preciso a chuva para florir

[Segunda Parte]

Parte 1 de 3
E|-0-1-3-7--7---------7---------------------|
B|-1-3-5-8----8-----8---8-------------------|
G|--------------7-7-------7-----------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-----5----------5-------------------------|
B|---6---6------6---6-----------------------|
G|-5-------5--5-------5---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0-0--------------------------------|
B|---1---1-1--------------------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0-0--1-1/3-3-3-3-----3---------3-----|
B|---1---1--3-3/5-5-5-5---3---3-----3---3---|
G|-0--------------------4-------5-5-------5-|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

 [G]
Penso que cumprir a vida
             [F9]
Seja simplesmente

Compreender a marcha
                  [C]
E ir tocando em frente
 [G]
Como um velho boiadeiro
             [F9]
Levando a boiada

Eu vou tocando os dias
               [C]
Pela longa estrada eu vou
       [G]
De estrada eu sou

[Refrão]

Parte 1 de 3
E|-----1---------1---------1---------1------|
B|---1---1-----3---3-----1---1-----3---3----|
G|-2-------2-2-------2-2-------2-2-------2--|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0--0-0-1-1-1/3-3-0-----------------|
B|---1---1--1-1-3-3-3/5-5-------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0----------0-------------------------|
B|---1---1------1---1-----------------------|
G|-0-------0--0-------0---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[F9]               [Dm]             [F9]
    Conhecer as manhas e as manhãs
             [Dm]             [C]
O sabor das massas e das maçãs
[F9]                [Dm]               [F9]
    É preciso o amor pra poder pulsar
           [Dm]               [F9]
É preciso paz pra poder sorrir
              [C]
É preciso a chuva para florir

[Terceira Parte]

Parte 1 de 3
E|-0-1-3-7--7---------7---------------------|
B|-1-3-5-8----8-----8---8-------------------|
G|--------------7-7-------7-----------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-----5----------5-------------------------|
B|---6---6------6---6-----------------------|
G|-5-------5--5-------5---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0-0--------------------------------|
B|---1---1-1--------------------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0-0--1-1/3-3-3-3-----3---------3-----|
B|---1---1--3-3/5-5-5-5---3---3-----3---3---|
G|-0--------------------4-------5-5-------5-|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

 [G]
Todo mundo ama um dia
             [F9]
Todo mundo chora

Um dia a gente chega
                [C]
No outro vai embora
[G]                                  [F9]
   Cada um de nós compõe a sua história

E cada ser em si
                  [C]
Carrega o dom de ser capaz
    [G]
De ser feliz

[Refrão]

Parte 1 de 3
E|-----1---------1---------1---------1------|
B|---1---1-----3---3-----1---1-----3---3----|
G|-2-------2-2-------2-2-------2-2-------2--|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0--0-0-1-1-1/3-3-0-----------------|
B|---1---1--1-1-3-3-3/5-5-------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0----------0-------------------------|
B|---1---1------1---1-----------------------|
G|-0-------0--0-------0---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[F9]               [Dm]             [F9]
    Conhecer as manhas e as manhãs
             [Dm]             [C]
O sabor das massas e das maçãs
[F9]                [Dm]               [F9]
    É preciso o amor pra poder pulsar
           [Dm]               [F9]
É preciso paz pra poder sorrir
              [C]
É preciso a chuva para florir

Parte 1 de 3
E|-0-1-3-7--7---------7---------------------|
B|-1-3-5-8----8-----8---8-------------------|
G|--------------7-7-------7-----------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-----5----------5-------------------------|
B|---6---6------6---6-----------------------|
G|-5-------5--5-------5---------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 3
E|-----0-0-0--------------------------------|
B|---1---1-1--------------------------------|
G|-0----------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 3
E|-----0-0--1-1/3-3-3-3-----3---------3-----|
B|---1---1--3-3/5-5-5-5---3---3-----3---3---|
G|-0--------------------4-------5-5-------5-|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[G]                                [F9]
   Ando devagar porque já tive pressa

E levo esse sorriso
            [C]
Porque já chorei demais
[G]
   Hoje me sinto mais forte
                 [F9]
Mais feliz quem sabe

Eu só levo a certeza
              [C]
De que muito pouco eu sei
    [G]
Ou nada sei

[Passagem Final]

                [G]
E|--------------3---------------------------|
B|--------------3---------------------------|
G|---0---0---0--0---------------------------|
D|--------------0---------------------------|
A|-3---2---0----2---------------------------|
E|--------------3---------------------------|`,
  },
  {
    id:            "almir-sater-chalana",
    titulo:        "Chalana",
    artista:       "Almir Sater",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3343,
    cifra: `[Tab - Intro]

E|-9-/10~---9~-----5~\-------------------------------|
B|-10/12~--10~-----7~\-------------------------------|
G|---------------------------------------------------|
D|--------------0------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Primeira Parte]

[D]
  Lá vai uma chalana
     [A7(13)]   [D]
Bem longe se vai

Navegando no remanso
             [A7]
Do rio Paraguai

[Refrão]

[G]
Oh! Chalana sem querer
 [D]
Tu aumentas minha dor
 [A7]
Nessas águas tão serenas
                  [D]
Vai levando meu amor

[G]
Oh! Chalana sem querer
 [D]
Tu aumentas minha dor
 [A7(13)]
Nessas águas tão serenas
                  [D]
Vai levando meu amor

[Segunda Parte]

E assim ela se foi
                    [A7(13)]
Nem de mim se despediu
  [G]
A   chalana vai sumindo
    [A7]          [D]
Na curva lá do rio

E se ela vai magoada
                      [A7]
Eu bem sei que tem razão

Fui ingrato
                         [D]
Eu feri o seu meigo coração

[Refrão]

[G]
Oh! Chalana sem querer
 [D]
Tu aumentas minha dor
 [A7(13)]
Nessas águas tão serenas
                  [D]
Vai levando meu amor

[G]
Oh! Chalana sem querer
 [D]
Tu aumentas minha dor
 [A7]
Nessas águas tão serenas
                  [D]
Vai levando meu amor

[Tab - Primeira Parte]

Parte 1 de 2
E|-2-2--0-2-3-3/5-5~--5-5/9-~--5-3--32~-------------|
B|-3-3--2-3-5-5/7-7~--7-7/10~--7-5--53~-------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Parte 2 de 2
E|-2-0-2-0--2-3-3/5-5~--5--53--32--2--0-----5~-----|
B|-3-3-3-3--3-5-5/7-7~--7--75--53--3--2------------|
G|-----------------------------------------6~--------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Tab - Refrão]

Parte 1 de 2
E|-5/7-7-7-7-7--5-7---5-5-5--3-2-3-3/5---------------|
B|-7/8-8-8-8-8--7-8---7-7-7--5-3-5-5/7---------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Parte 2 de 2
E|-0-0-0-0--3/5--9---7-75--5~--3-32--2~------------|
B|-2-2-2-2--5/7--10--8-87--7~--5-53--3~------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|`,
  },
  {
    id:            "almir-sater-um-violeiro-toca",
    titulo:        "Um Violeiro Toca",
    artista:       "Almir Sater",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4314,
    cifra: `Intro: [G]  [D]  [C]  [D9(11)]
E|-7-7---7---7-7/10-10-10----------------------------|
B|-8-8---8---8-8/12-12-12----------------------------|
G|---0-0---0---0-------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

E|-5-5---5---5-5/8---8--8----------------------------|
B|-7-7---7---7-7/10--10-10---------------------------|
G|---7-7---7---7-------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

E|-3-3---3---3-3/5---5---5--7------------------------|
B|-5-5---5---5-5/7---7---7--8------------------------|
G|---5-5---5---5/7-7---7-0--0------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[G]                      [G5(7M)]    [G5(6)]
 Quando uma estrela cai, no escurão da noite,
[C]
 e um violeiro toca suas mágoas.
[D9(11)]
 Então os olhos dos bichos, vão ficando iluminados
[C]                                          [D9(11)]  [C] [C5(9)]
Rebrilham neles estrelas de um sertão enluarado
[G]            [G5(7M)]            [G5(6)]
Quando o amor termina, perdido numa esquina,
[C]
e um violeiro toca sua sina.
[D9(11)]
Então os olhos dos bichos, vão ficando entristecidos
[C]                                            [D9(11)]  [C]  [C5(9)]
Rebrilham neles lembranças dos amores esquecidos.
[G]                   [G5(7M)]      [G5(6)]
Quando um amor começa, nossa alegria chama,
[C]
e um violeiro toca em nossa cama.
[D9(11)]
Então os olhos dos bichos, são os olhos de quem ama
[C]                                             [D9(11)] [C]  [C5(9)]
Pois a natureza é isso, sem medo nem dó sem drama
Violão 1:
    [G]           [G5(7M)]
E|--3-----3-----2-------2-------------------|
B|--3-----3-----3-------3-------------------|
G|----0------0-----0-------0----------------|
D|------------------------------------------|
A|------------------------------------------|
E|--3---3-------3-----3---------------------|

    [G5(7M)]     [G6]
E|--2-----2----0------0---------------------|
B|--3-----3----3------3---------------------|
G|----0-----0-----0------0------------------|
D|------------------------------------------|
A|------------------------------------------|
E|--3---3------3----3-----------------------|

   [C]
E|------------------------------------------|
B|--------1--1--1--1--1--1--1---------------|
G|------0-0--0--0--0--0--0--0---------------|
D|----2---2--2--2--2--2--2--2---------------|
A|--3-----3--3--3--3--3--3--3---------------|
E|------------------------------------------|
          ↑ ↓  ↑  ↓  ↓  ↑  ↑
    [C]
E|------------------------------------------|
B|------1---------1-------------------------|
G|--0---0-0---0---0-0-----------------------|
D|--2-----2---2-----------------------------|
A|--3-3-----3---3---------------------------|
E|------------------------------------------|

    [D9(11)]
E|--------0--0--0--0--0--0--0---------------|
B|--------3--3--3--3--3--3--3---------------|
G|------0-0--0--0--0--0--0--0---------------|
D|----4---4--4--4--4--4--4--4---------------|
A|--5-----5--5--5--5--5--5--5---------------|
E|------------------------------------------|
          ↑ ↓  ↑  ↓  ↓  ↑  ↑

    [D9(11)]
E|------------------------------------------|
B|------3---------3-------------------------|
G|--0---0-0---0---0-0-----------------------|
D|--4-----4---4-----------------------------|
A|--5-5-----5---5---------------------------|
E|------------------------------------------|

   [C]  [D9(11)]  [C]
E|-0--0-------0--------------|
B|-1--3-------1--------------|
G|-0--0-------0--------------|
D|-2--4-------2--------------|
A|-3--5-------3--------------|
E|---------------------------|

Variação:
    [C5(9)]
E|--0--2--3--2--3---------------------------|
B|--3--3--3--3--3---------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|--3--3--3-----3---------------------------|
E|------------------------------------------|

Violão 2:
   [G]          [G5(7M)]   [G]          [G6]
E|----------------2-------------------0-----|
B|-------3----------3--------3----------3---|
G|-----0---0---------------0---0------------|
D|---0-------------------0------------------|
A|------------------------------------------|
E|-3----------3-3------3----------3-3-------|

   [C9]
E|-------3-----------3-3-3-3--3--3-3-3--3-3-|
B|---------3-----3---3-3-3-3--3--3-3-3--3-3-|
G|-----0-----------0-0-0-0-0--0--0-0-0--0-0-|
D|---2---------------2-2-2-2--2--2-2-2--2-2-|
A|-3---------3-3-----3-3-3-3--3--3-3-3--3-3-|
E|------------------------------------------|
                     ↓ ↓ ↑ ↑  ↓  ↓ ↑ ↓  ↑ ↑
   [D9(11)]
E|---------------0---0-0-0-0--0--0-0-0--0-0-|
B|-------3---------3-3-3-3-3--3--3-3-3--3-3-|
G|-----0---0---------0-0-0-0--0--0-0-0--0-0-|
D|---4---------------4-4-4-4--4--4-4-4--4-4-|
A|-5---------5-5-----5-5-5-5--5--5-5-5--5-5-|
E|------------------------------------------|
                     ↓ ↓ ↑ ↑  ↓  ↓ ↑ ↓  ↑ ↑

    [C9]  [D9(11)] [C9]
E|--3---0------3----------------------------|
B|--3---3------3----------------------------|
G|--0---0------0----------------------------|
D|--2---4------2----------------------------|
A|--3---5------3----------------------------|
E|------------------------------------------|

Variação:
    [C9]
E|--0--2--3--2--0---------------------------|
B|--3--3--3--3--3---------------------------|
G|--0--0--0--0--0---------------------------|
D|--0-----------0---------------------------|
A|--3--3--3--3--3---------------------------|
E|------------------------------------------|

Refrão:
[G]               [G5(7M)]         [C7+]          [D]
Tudo é sertão, tudo é paixão, se o violeiro toca
[Am7]            [C]               [G]
A viola, o violeiro e o amor se tocam
Variação:
E|--------------------2--x--2--x--2---------|
B|--------------------3--x--3--x--3---------|
G|--0--0--------------2--x--2--x--2---------|
D|-----------------0--0--x--0--x--0---------|
A|-/3--2--0---------------------------------|
E|-----------3--2---------------------------|

Violão 2:
E|------------------------------------------|
B|-4/5-3------------------------------------|
G|-------5-4----7~--------------------------|
D|------------7-----------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-7/8--7-5-3-2-3/5-------------------------|
B|-8/10-8-7-5-3-5/7-------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

(Intro)

[G]                   [G5(7M)]      [G5(6)]
Quando um amor começa, nossa alegria chama,
[C]
e um violeiro toca em nossa cama.
[D9(11)]
Então os olhos dos bichos, são os olhos de quem ama
[C]                                             [D9(11)] [C]  [C5(9)]
Pois a natureza é isso, sem medo nem dó sem drama

(Refrão)`,
  },
  {
    id:            "almir-sater-trem-do-pantanal",
    titulo:        "Trem do Pantanal",
    artista:       "Almir Sater",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2391,
    cifra: `[Intro]  [E]  [G#7]  [C#m]  [E]  [A]
         [E]  [G#7]  [C#m]  [C]  [F#m]  [B7]  [E]

    [E]
Enquanto este velho trem
     [G#7]
Atravessa o pantanal
[C#m]                [E]                [A]
As estrelas do cruzeiro fazem um sinal
     [E]                    [G#7]
De que este é o melhor caminho
         [C#m]    [C]
Pra quem é como eu
         [F#m]          [B7]  [E]
Mais um fugitivo da guer-ra
    [E]
Enquanto este velho trem
       [G#7]
Atravessa o pantanal
   [C#m]
O povo lá em casa
   [E]                       [A]
Espera que eu mande um postal
   [E]                [G#7]       [C#m]   [C]
Dizendo que eu estou muito bem vivo
        [F#m]              [B7]  [E]
Rumo a Santa Cruz de La Sierra

[E]
Enquanto este velho trem
     [G#7]
Atravessa o pantanal
 [C#m]              [E]               [A]
Só meu coração está batendo desigual
           [E]          [G#7]   [C#m]     [C]
Ele agora sabe que o medo viaja também
       [F#m]                 [B7]  [E]  [C]
Sobre todos os trilhos da ter-ra

[Solo]  [E]  [G#7]  [C#m]  [E]  [A]
        [E]  [G#7]  [C#m]  [C]  [F#m]  [B7]  [E]

[E]
Enquanto este velho trem
     [G#7]
Atravessa o pantanal
 [C#m]              [E]               [A]
Só meu coração está batendo desigual
           [E]          [G#7]   [C#m]     [C]
Ele agora sabe que o medo viaja também
       [F#m]                 [B7]  [E]  [C]
Sobre todos os trilhos da ter-ra
        [F#m]              [B7]  [E]  [C]
Rumo a Santa Cruz de La Sierra
       [F#m]                 [B7]  [E]
Sobre todos os trilhos da ter-ra`,
  },
  {
    id:            "almir-sater-cabecinha-no-ombro",
    titulo:        "Cabecinha No Ombro",
    artista:       "Almir Sater",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4535,
    cifra: `[Intro]  [D]  [A7]  [D]  [D7]  [G]
         [D]  [A7]  [G]  [D]  [A7]

[Primeira Parte]

   [D]               [A7]
Encosta a sua cabecinha
                 [D]   [D7]
No meu ombro e chora
   [G]
E conta logo suas mágoas
            [D]
Todas para mim
       [A7]
Quem chora no meu ombro
    [G]                  [D]
Eu juro que não vai embora
               [A7]
Que não vai embora
               [D]
Que não vai embora
       [A7]
Quem chora no meu ombro
    [G]                  [D]
Eu juro que não vai embora
               [A7]
Que não vai embora
                 [D]  [D7]
Porque gosta de mim

[Segunda Parte]

  [G]                     [D]
Amor, eu quero o seu carinho
     [A7]                [D]    [D7]
Porquê, eu vivo tão sozinho
     [G]
Não sei se a saudade fica
                 [D]
Ou se ela vai embora
              [A7]
Se ela vai embora
              [D]   [D7]
Se ela vai embora
     [G]
Não sei se a saudade fica
                 [D]
Ou se ela vai embora
              [A7]
Se ela vai embora
              [D]
Se ela vai embora

( [D]  [A7]  [D]  [D7]  [G] )
( [D]  [A7]  [G]  [D]  [A7] )

[Primeira Parte]

   [D]               [A7]
Encosta a sua cabecinha
                 [D]   [D7]
No meu ombro e chora
   [G]
E conta logo suas mágoas
            [D]
Todas para mim
       [A7]
Quem chora no meu ombro
    [G]                  [D]
Eu juro que não vai embora
               [A7]
Que não vai embora
               [D]
Que não vai embora
       [A7]
Quem chora no meu ombro
    [G]                  [D]
Eu juro que não vai embora
                 [A7]
No meu ombro e chora
                 [D]
Porque gosta de mim`,
  },
  {
    id:            "almir-sater-no-rastro-da-lua-cheia",
    titulo:        "No Rastro da Lua Cheia",
    artista:       "Almir Sater",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 721,
    cifra: `[C]         [C4]    [C]
No quintal lá de casa
    [F]
Passava um pequeno rio

Que descia lá da serra
                  [C]
Ligeiro escorregadio
  [C]          [C4]   [C]
A água era cristalina
     [F]
Que dava pra ver o chão

Ia cortando a floresta
                  [C]
Na direção do sertão
     [Dm]       [Em]    [F]
Lembrança ainda me resta
     [C]
Guardada no coração

   [C]         [C4]    [C]
E tudo era azul celeste
    [F]
Brasileiro cor de anil

Nem bem começava o ano
                   [C]
Já era final de Abril
   [C]        [C4]  [C]
O vento pastore-ando
   [F]
Aquelas nuvens no céu

Fazia o mundo girar
                     [C]
Veloz como um carrossel
   [Dm]     [Em]    [F]
E levantava a poeira
   [C]
E me arrancava o chapéu

[F]                         [Dm]
Ah o tempo faz, tempo desfaz
[C]       [G]  [G#°]  [Am]
E vai além  sempre

   [C]        [C4]    [C]
A vida vem lá de longe
   [F]
É como se fosse um rio

Pra rio pequeno canoa
                     [C]
Pros grandes rios navios
   [C]         [C4]     [C]
E bem lá no fim de tudo
   [F]
Começo de outro lugar

Será como Deus quiser
                   [C]
Como o destino mandar
    [Dm]        [Em]   [F]
No rastro da lua cheia
     [C]
Se chega em qualquer lugar

( [C]  [C4]  [C]  [F]  [C] )
( [C]  [C4]  [C]  [F]  [C] )
( [Dm]  [Em]  [F]  [C] )

[F]                         [Dm]
Ah o tempo faz, tempo desfaz
[C]       [G]  [G#°]    [Am]
E vai além  sempre

   [C]        [C4]    [C]
A vida vem lá de longe
   [F]
É como se fosse um rio

Pra rio pequeno canoa
                     [C]
Pros grandes rios navios
   [C]         [C4]     [C]
E bem lá no fim de tudo
   [F]
Começo de outro lugar

Será como Deus quiser
                   [C]
Como o destino mandar
    [Dm]        [Em]   [F]
No rastro da lua cheia
     [C]
Se chega em qualquer lugar`,
  },
  {
    id:            "almir-sater-comitiva-esperanca",
    titulo:        "Comitiva Esperança",
    artista:       "Almir Sater",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5075,
    cifra: `[Intro] [D]

E|---------------------------------------------|
B|-3---3--2--2-2-0-2-2--3---3-2--2-2-0-2-2--3--|
G|---------------------------------------------|
D|---0----0--------2------0---0--------0-------|
A|---------------------------------------------|
E|---------------------------------------------|

E|---------------------------------------------|
B|---3--2-2--3-2-0-----------------------------|
G|------------------2--2-4-2-0-----------------|
D|-0----0----0------0----------4-4-4--2--0-0-0-|
A|---------------------------------------------|
E|---------------------------------------------|

        [D]
Nossa viagem não é ligeira
              [D]     [G]     [D]
Ninguém tem pressa de chegar

A nossa estrada, é boiadeira
         [D]       [G]      [D]
Não interessa onde vai dar
[G]           [D]
Onde a Comitiva Esperança
  [G]         [D]
Chega já começa a festança
     [D]      [G]   [D]
Através do Rio Negro
      [A7]            [D]
Nhecolândia e Paiaguás
        [D]       [G]    [D]
Vai descendo o Piqueri
          [A7]             [D]
O São Lourenço e o Paraguai

( [D] )

          [D]
Tá de passagem, abre a porteira
          [D]       [G]     [D]
Conforme for pra pernoitar

Se a gente é boa, hospitaleira
       [D]    [G]     [D]
A Comitiva vai tocar
        [G]
Moda ligeira, que é uma doideira
                  [C]      [G]
Assanha o povo e faz dançar
          [A7]
Oh moda lenta que faz sonhar
[G]           [D]
Onde a Comitiva Esperança
  [G]         [D]
Chega já começa a festança
     [D]      [G]   [D]
Através do Rio Negro
      [A7]            [D]
Nhecolândia e Paiaguás
        [D]       [G]    [D]
Vai descendo o Piqueri
          [A7]             [D]
O São Lourenço e o Paraguai
[E]                          [A]
É, tempo bom que tava por lá
[G]                       [D]  [E]
  Nem vontade de regressar
                        [A]
Só vortemo eu vô confessar
                             [A]
É que as águas chegaram em Janeiro
                        [A]
Deslocamos um barco ligeiro
                [D]
Fomos pra Corumbá`,
  },
  {
    id:            "almir-sater-assim-os-dias-passarao-part-renato-teixeira",
    titulo:        "Assim Os Dias Passarão (Part. Renato Teixeira)",
    artista:       "Almir Sater",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3890,
    cifra: `[Tab - Intro]

E|-------2-0--------------------------------|
B|-----0------0h32-0-----------------------|
G|-2/4----------------2/4-------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

( [Bm]  [E7]  [Bm]  [E7] )

[Primeira Parte]

[Bm]                        [E7]  [E7(4)]  [E7]
   Dezembro vai, janeiro vem
[Bm]                               [E]  [E7(4)]  [E7]
   O tempo passa veloz como um trem
[G]                                  [D]
  No rádio a noticia, um amigo se foi
[A]                                    [Bm]  [Bm11]
  Atrás dos mistérios que sempre buscou
[G]
  Mais uma pra estrada
                 [D2]
Mais um fim de show
[A]
  Ao som das guitarras
                [Bm]
Do bom rock n' roll

( [E7]  [Bm]  [E7]  [E7(4)]  [E7] )

[Segunda Parte]

[Bm]                      [E7]  [E7(4)]  [E7]
   O tempo trás suas lições
[Bm]                           [E7]  [E7(4)]  [E7]
   E as grava em nossos corações
[G]                                 [D]
  Contando a história assim como foi
[A]
  Mostrando os caminhos
                [Bm]  [A/C#]  [D]  [D/F#]
Que irão nos levar
[G]                                   [D]
  Como se fosse o rio correndo pro mar
[A]                                   [Bm]
  Como se fossem pedras no rio a rolar

( [G]  [E7]  [A] )
( [Bm]  [E7]  [Bm]  [E] )
( [G]  [D]  [A]  [A7] )
( [Bm]  [A/C#]  [D]  [D/F#] )
( [G]  [D]  [A]  [Bm] )
( [G]  [E7]  [A] )

[Terceira Parte]

[Bm]                     [E7]  [E7(4)]  [E7]
   Assim os dias passarão
[Bm]                     [E7]  [E7(4)]  [E7]
   Virão as novas gerações
[G]                                 [D]
  Outras perguntas, prováveis canções
[A]                                        [Bm]
  Outro mundo, outra gente, outras dimensões

( [A/C#]  [D]  [D/F#] )

[G]                                [D]
  E na hora marcada, em algum lugar
[A]                                  [Bm]
  Uma estrela virá pra lhe acompanhar

[Final] [G]  [E]  [A]  [Bm]

[Tab - Final]

E|------------------------------------------|
B|-7-5-7-5-7-3-0--7-5-7-5-7-3-0-------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-7-5-7-5-8-3-0--7-5-7-5-8-3-0-------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-7-5-7-5-9-5-0--7-5-7-5-9-5-0-------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-5-7-9--10-9-7-5/7------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|`,
  },
  {
    id:            "almir-sater-a-saudade-e-uma-estrada-longa",
    titulo:        "A Saudade É Uma Estrada Longa",
    artista:       "Almir Sater",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2113,
    cifra: `[A]
A saudade é uma estrada longa
                           [E]
Que começa e não tem mais fim
      [D]
Suas léguas dão volta ao mundo
 [E]      [D]               [A]
Mas não voltam por onde vim

[A]
A saudade é uma estrada a longa
                           [E]
Que começa e não tem mais fim
      [D]
Cada dia tem mais distâncias
[E]   [D]             [A]
Afastando você de mim

 [D]
Tantas foram as vezes

Que nos enganamos

Outras vezes nos desencontramos
              [A]
Sem nem perceber
 [E]                             [D]
Mesmo sem razão eu quero lhe dizer

Sem intenção
                [A]
Ver tudo se perder
     [E]     [D]
Dói tanto, tanto

[A]
A saudade é uma estrada longa
                   [E]
Nao é boa e nao é ruim
       [D]
Vou seguindo sempre adiante
[E]
Nunca volto sou mesmo assim
[A]
A saudade é uma estrada longa
                          [E]
Que hoje passa dentro de mim
      [D]
Me armei só de esperanças
 [E]   [D]               [A]
Mas usei balas de festim

 [D]
Tantas foram as vezes

Que nos enganamos

Outras vezes nos desencontramos
              [A]
Sem nem perceber
 [E]                             [D]
Mesmo sem razão eu quero lhe dizer

Sem intenção
                [A]
Ver tudo se perder
     [E]     [D]
Dói tanto, tanto

( [A]  [E]  [D]  [E]  [D]  [A] )
( [A]  [E]  [D]  [E]  [D]  [A] )

 [D]
Tantas foram as vezes

Que nos enganamos

Outras vezes nos desencontramos
              [A]
Sem nem perceber
 [E]                             [D]
Mesmo sem razão eu quero lhe dizer

Sem intenção
                [A]
Ver tudo se perder
 [E]                             [D]
Mesmo sem razão eu quero lhe dizer

Sem intenção
                [A]
Ver tudo se perder
     [E]     [D]
Dói tanto, tanto
[A]
A saudade é uma estrada longa`,
  },
  {
    id:            "almir-sater-mes-de-maio",
    titulo:        "Mês de Maio",
    artista:       "Almir Sater",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3381,
    cifra: `[Intro] [A]  [D/F#]  [A]  [D/F#]
        [A]  [D/F#]  [E/G#]  [D]

[A]                  [D/F#]             [A]              [D/F#]
Azul do céu brilhou     e o mês de maio, enfim chegou
                [A]              [D/F#]
Olhos vão se abrir, pra tanta cor
           [E/G#]       [D/F#]            [D/F#]
É mês de maio, a vida tem seu resplendor

[A]                [D/F#]       [A]              [D/F#]
A luz do sol entrou   pela janela, me convidou
              [A]              [D/F#]
Pra tarde tão bela, e sem calor
        [E/G#]              [D/F#]         [D/F#]
É mês de maio, saio e vou ver o sol se pôr

   [D/F#]  [A]         [D/F#] [A]
Horizon..te, de aquare..la
        [D/F#]    [A]     [D/F#]   [E/G#]   [E]
Que ninguém    já.....mais   pin...tou
   [D/F#]  [A]         [D/F#] [A]
E um enxame, de estrelas
          [D/F#]   [E/G#]   [D/F#]   [E/G#]   [A]
Diz que o di.....a       ter....mi   nou

[A]               [D/F#]            [A]            [D/F#]
Noite nem se firmou   e a lua cheia, já clareou
               [A]           [D/F#]
Sombras podem vir, façam favor
        [E/G#]          [D/F#]         [D/F#]
É mês de maio, é tempo de ser sonhador

[A]                 [D/F#]            [A]                [D/F#]
Quem não se enamorou,   no mês de maio, bem que tentou
              [A]          [D/F#]
E quem não tiver, ainda amor
        [E/G#]            [D/F#]           [D/F#]
Dos solitários, o mês de maio é o protetor

    [D/F#]  [A]          [D/F#]  [A]
Boa te...rra, velha esfe...ra
        [D/F#]    [A]     [D/F#]   [E/G#]   [E]
Que nos lê......va    aon.....de   for
      [D/F#]  [A]            [D/F#] [A]
Pro futu....ro, quem nos de...ra
       [D/F#]   [E/G#]   [D/F#]   [E/G#]   [A]
Que te de.....ssem   mais    va...lor

[A]               [D/F#]            [A]            [D/F#]
Noite nem se firmou   e a lua cheia, já clareou
               [A]           [D/F#]
Sombras podem ir, façam favor
        [E/G#]          [D/F#]         [D/F#]
É mês de maio, é tempo de ser sonhador

   [D/F#]  [A]         [D/F#] [A]
Horizon..te, de aquare..la
        [D/F#]    [A]     [D/F#]   [E/G#]   [E]
Que ninguém    já.....mais   pin...tou
   [D/F#]  [A]         [D/F#] [A]
E um enxame, de estrelas
          [D/F#]   [E/G#]   [D/F#]   [E/G#]   [A]
Diz que o di.....a       ter....mi   nou

    [D/F#]  [A]          [D/F#]  [A]
Boa te...rra, velha esfe...ra
        [D/F#]    [A]     [D/F#]   [E/G#]   [E]
Que nos lê......va    aon.....de   for
      [D/F#]  [A]            [D/F#] [A]
Pro futu....ro, quem nos de...ra
       [D/F#]   [E/G#]   [D/F#]   [E/G#]   [A]
Que te de.....ssem   mais    va...lor`,
  },
  {
    id:            "almir-sater-peao",
    titulo:        "Peão",
    artista:       "Almir Sater",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3410,
    cifra: `[Intro] [C]

 [G]
Diga você me conhece
               [F]
Eu já fui boiadeiro

Conheço essas trilhas
              [C]
Quilômetros, milhas
        [G]     [C]
Que vem e que vão
        [G]     [C]
Pelo alto sertão
        [G]      [C]
Que agora se chama
          [F]     [C]
Não mais de sertão
           [F]     [C]
Mas de terra vendida
     [G]   [C]
Civilização

 [G]
Ventos que arrombam janelas
               [F]
E arrancam porteiras
                                 [C]
Espora de prata riscando as fronteiras
       [G]     [C]
Selei meu cavalo
     [G]     [C]
Matula no fardo
      [G]    [C]
Andando ligeiro
      [F]        [C]
Um abraço apertado
       [F]       [C]
Um suspiro dobrado
     [G]        [C]
Não tem mais sertão

[F]
Os caminhos mudam com o tempo
 [G]
Só o tempo muda um coração
 [F]
Segue seu destino boiadeiro
                          [C]
Que a boiada foi no caminhão

[F]
A fogueira, a noite
 [G]
Redes no galpão
[F]
O paiero, a moda

O mate, a proza

A saga, a sina

O causo e onça
          [C]
Tem mais não

[G]  [F]  [C]
Oh  peão

( [C]  [G/B]  [F/A] )

[G]
Tempos e vidas cumpridas
                [F]
Pó, poeira, estrada
Estórias contidas
             [C]
Nas encruzilhadas
       [G]      [C]
Em noites perdidas
      [G]     [C]
No meio do mundo
        [G]   [C]
Mundão cabeludo
      [F]         [C]
Onde tudo é floresta
      [F]        [C]
E campinas silvestres
    [G]        [C]
Mundão caba não

 [G]
Sabe, que prum bom viajante
           [F]
Nada é distante

Prum bom companheiro
              [C]
Não conta dinheiro
       [G]    [C]
Existe uma vida
       [G]    [C]
Uma vida vivida
      [G]       [C]
Sentida e sofrida
    [F]         [C]
De vez por inteiro
  [F]          [C]          [G]        [C]
E esse é o preço de eu ser brasileiro

[F]
Os caminhos mudam com o tempo
 [G]
Só o tempo muda um coração
 [F]
Segue seu destino boiadeiro
                          [C]
Que a boiada foi no caminhão

[F]
A fogueira, a noite
 [G]
Redes no galpão
[F]
O paiero, a moda

O mate, a proza

A saga, a sina

O causo e onça
          [C]
Tem mais não

[G]  [F]  [C]
Oh  peão

[Final] [C]  [G]  [C]  [G]  [F]  [C]`,
  },
  {
    id:            "almir-sater-jeito-de-mato",
    titulo:        "Jeito de Mato",
    artista:       "Almir Sater",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3956,
    cifra: `[Intro]  [G] [Em7] [C9] [Am7]
         [G] [Em7] [C9] [Am7] [D4]

[Solo]

E|-5-5-4p2--------------2-----------------|
B|--------5-3p2-5-5/7----5-3p2---2-3h5-3--|
G|------------------------------4---------|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

E|-2-------------------2------------------|
B|---5-3p2---2-3p2---------3---3-3p2-2----|
G|---------4-------4-----4---4------------|
D|----------------------------------------|
A|----------------------------------------|
E|----------------------------------------|

 [G]
De onde é que vem
      [Em7]
Esses olhos tão tristes?
 [G]                  [Em7]
Vem da campina onde o sol se deita
      [C]                 [Em/B]
Do regalo de terra que teu dorso ajeita
   [Am7]                [C]
E dorme serena, no sereno e sonha

 [G]
De onde é que salta
      [Em7]
Essa voz tão risonha?
     [G]                  [Em7]
Da chuva que teima, mas o céu rejeita
    [C]                 [Em/B]
No mato, do medo, da perda tristonha
       [Am7]              [C]
Mas, que o sol resgata, arde deleita

           [G]
Há uma estrada de pedra
                [D4/F#]
Que passa na fazenda
                      [Em7]
É teu destino, é tua senda
                        [C]
De onde nascem tuas canções
          [G]
As tempestades do tempo
                   [D4/F#]
Que marcam tua história
                      [Em7]
Fogo que queima na memória
                 [C]
E acende os corações

 [Am7]                                [C]
Sim, dos teus pés na terra nascem flores
                           [Em7]
A tua voz macia aplaca as dores
                           [D4/F#]
E espalha cores vivas pelo ar

 [Am7]                          [C]
Sim, dos teus olhos saem cachoeiras
                          [Em7]
Sete Lagoas, mel e brincadeiras
                              [D4]  [Am7]  [C]
Espumas, ondas, águas do teu mar

( [G]  [Em7]  [C9]  [Am7] )
( [G]  [Em7]  [C9]  [Am7] )

           [G]
Há uma estrada de pedra
                [D4/F#]
Que passa na fazenda
                      [Em7]
É teu destino, é tua senda
                        [C]
De onde nascem tuas canções
          [G]
As tempestades do tempo
                   [D4/F#]
Que marcam tua história
                      [Em7]
Fogo que queima na memória
                 [C]
E acende os corações

 [Am7]                                [C]
Sim, dos teus pés na terra nascem flores
                           [Em7]
A tua voz macia aplaca as dores
                           [D4/F#]
E espalha cores vivas pelo ar

 [Am7]                          [C]
Sim, dos teus olhos saem cachoeiras
                          [Em7]
Sete Lagoas, mel e brincadeiras
                              [D4]  [Am7]  [C]
Espumas, ondas, águas do teu mar

( [G]  [Em7]  [C9]  [Am7] )

 [G]
De onde é que vem
      [Em7]
Esses olhos tão tristes?
 [C]                  [Am7]
Vem da campina onde o sol se deita
   [G]                      [Em7]
De onde é que salta essa voz tão risonha
 [C]                  [Am7]
Dorme serena, no sereno e sonha

( [G]  [Em7]  [C9] )

 [Am7]            [G]
Dorme serena e sonha`,
  },
  {
    id:            "almir-sater-amanheceu-peguei-a-viola",
    titulo:        "Amanheceu, Peguei a Viola",
    artista:       "Almir Sater",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 3319,
    cifra: `[D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar
  [G]    [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar

          [D]                [D7]                     [G]
Sou cantador e tudo nesse mundo, vale pra que eu cante e possa praticar
        [G#°]                    [D]
A minha arte sapateia as cordas
             [E]                    [A]
E esse povo gosta de me ouvir cantar

       [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar
  [G]    [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar

         [D]                    [D7]                  [G]
Ao meio-dia eu tava em Mato Grosso, do sul ou do norte, não sei explicar
          [G#°]                      [D]
Só sei dizer que foi de tardezinha
               [E]                   [A]
Eu já tava cantando em Belém do Pará

       [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar
  [G]    [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar

           [D]                   [D7]                    [G]
Em Porto Alegre um tal de coronel, pediu que eu musicasse um verso que ele fez
           [G#°]                    [D]
Para uma china, que pela poesia
              [E]                   [A]
Nem lá em Pequim se vê tanta altivez

       [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar
  [G]    [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar

          [D]                   [D7]                [G]
Parei em minas pra trocar as cordas, e segui direto para o Ceará
        [G#°]                        [D]
E no caminho fui pensando, é lindo
                 [E]                [A]
Essa grande aventura de poder cantar

       [D]          [G]   [D]          [G]    [D]          [G]  [D]
Amanheceu, peguei a viola botei na sacola e fui viajar
  [G]    [D]          [G]   [D]          [G]    [D]          [G]  [D]  [E]
Amanheceu, peguei a viola botei na sacola e fui viajar
       [E]          [A]   [E]          [A]    [E]          [A]  [E]
Amanheceu, peguei a viola botei na sacola e fui viajar

          [E]                   [E7]                 [A]
Chegou a noite e me pegou cantando, num bailão, no norte lá do Paraná
          [A#°]                          [E]
Daí pra frente ninguém mais se espanta
                 [F#]                   [B]
E o resto da noitada eu não posso contar

       [E]            [A]       [E]
Anoiteceu, e eu voltei pra casa
        [A]      [E]                  [A6]    [E]
Que o dia foi longo e o sol quer descansar
       [E]          [A]   [E]          [A]    [E]          [A]  [E]
Amanheceu, peguei a viola botei na sacola e fui viajar
  [A]    [E]          [A]   [E]          [A]    [E]          [A]  [E]
Amanheceu, peguei a viola botei na sacola e fui viajar`,
  },
  {
    id:            "almir-sater-tristeza-do-jeca",
    titulo:        "Tristeza do Jeca",
    artista:       "Almir Sater",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2691,
    cifra: `[Intro] [F]  [G/F]  [Em7]  [Am7]  [Dm7]  [G7]  [C]  [G7]

[C]      [F]             [C]           [G7]         [C]
Nestes versos tão singelos minha bela, meu amor
 [C]     [F]          [C]           [G7]             [C]   [C7]
Pra você quero contar o meu sofrer e a minha dor
[F]                 [C]
Eu sou como o sabiá
         [A7]            [Dm7]          [G7]               [C]   [G/B] [Am7]
Quando canta é só tristeza desde o galho onde ele está
[G7]                                [C]       [G/B] [Am7]
Nesta viola eu canto e gemo de verdade
[G7]                           [C]
Cada toada representa uma saudade

[Solo] [F]  [G/F]  [Em7]  [A7]
       [Dm7]  [G7]  [C]  [G7])

[C]     [F]          [C]            [G7]           [C]
Eu nasci naquela serra num ranchinho beira chão
[C]     [F]          [C]           [G7]         [C]   [C7]
Tudo cheio de buraco onde a lua faz clarão
[F]                   [C]
Quando chega a madrugada
      [A7]        [Dm7]         [G7]         [C]       [G/B] [Am7]
Lá no mato a passarada principia um barulhão
[G7]                                [C]      [G/B] [Am7]
Nesta viola eu canto e gemo de verdade
[G7]                           [C]
Cada toada representa uma saudade

[Solo] [F]  [G/F]  [Em7]  [A7]
       [Dm7]  [G7]  [C]  [G7]

[C]        [F]          [C]           [G7]            [C]
Vou guardar minha viola já não posso mais cantar
       [F]           [C]            [G7]         [C]     [C7]
Pois o jeca quando canta tem vontade de chorar
[F]                   [C]
E o choro que vai caindo
    [A7]          [Dm7]            [G7]            [C]      [G/B] [Am7]
Devagar vai se sumindo, como as águas vão pro mar
[G7]                                [C]    [G/B] [Am7]
Nesta viola eu canto e gemo de verdade
[G7]                           [C]
Cada toada representa uma saudade`,
  },
  {
    id:            "almir-sater-boiada",
    titulo:        "Boiada",
    artista:       "Almir Sater",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2571,
    cifra: `[Intro]  [B]

[B]
Ele foi levando boi, um dia ele se foi no rastro da boiada
[E]
A poeira é como o tempo, um véu, uma bandeira, tropa viajada
 [B]
Foram indo lentamente, calmos e serenos, lenta caminhada
[E]
E sumiram lá na curva, na curva da vida, na curva da estrada
[F#7]
E depois dali pra frente, não se tem notícias, não se sabe nada

 [B]                [A]
Nada que dissesse algo
              [E]                   [B/F#]
De boi, de boiada, de peão de estrada
             [D]                      [A]
Disse um viajante, história mal contada
                  [C]                      [E/B]   [D]
Ninguém viu, nem rastro, nem homem, nem nada

[B]
Isso foi há muito tempo, tempo em que a tropa ainda viajava
 [E]
Com seus fardos e pelegos no rangeu do arreio ao romper da aurora
 [B]
Tempos de estrelas cadentes, fogueiras ardentes, ao som da viola
 [E]
Dias e meses fluindo, destino seguindo, e a gente indo embora
[F#7]
Isso tudo aconteceu e o fato que se deu, faz parte da história

  [B]                 [A]                 [E]
E até hoje em dia quando junta a peãozada
              [B/F#]              [D]
Coisas assombradas, verdades juradas
               [A/C#]             [C]
Dizem que sumiram, que não existiram
              [E/B]
Ninguém sabe nada

[B]
Ele foi levando boi, um dia ele se foi no rastro da boiada
[E]
A poeira é como o tempo, um véu, uma bandeira, tropa viajada
 [B]
Foram indo lentamente, calmos e serenos, lenta caminhada
 [E]
Dias e meses seguindo, destino fluindo, e a gente indo embora
[F#7]
Isso tudo aconteceu e o fato que se deu, faz parte da história
  [B]                 [A]                 [E]
E até hoje em dia quando junta a peãozada
              [B/F#]              [D]
Coisas assombradas, verdades juradas
               [A/C#]             [C]
Dizem que sumiram, que não existiram
              [E/B]
Ninguém sabe nada`,
  },
  {
    id:            "gino-e-geno-as-aguas-do-sao-francisco",
    titulo:        "As Águas do São Francisco",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 5044,
    cifra: `[Intro] [E]  [A]  [E]  [B7]  [E]  [E7]
        [A]  [E]  [B7]  [E]  [B7]

[Tab - Solo Intro]

Parte 1 de 5
E|------------------------------------------|
B|------------5-7-5-4------------5-5p4------|
G|-----------6--------6-4------4-------6----|
D|---4-6-7--7----------------6--------------|
A|-7-----------------------7----------------|
E|------------------------------------------|

Parte 2 de 5
E|------------------------------------------|
B|------------------------------------------|
G|-6p4--------------------------------------|
D|-----7p6---6-7p6---6--7p6-----------------|
A|---------9-------9--------9p7-6-----0-----|
E|--------------------------------9p7---4---|

Parte 3 de 5
E|------------------------------------------|
B|---------------------5-7-5-4h5p4----------|
G|--------------------6------------6-4------|
D|--------------6-7--5----------------------|
A|---7-6-5--7h9-----------------------------|
E|-7----------------------------------------|

Parte 4 de 5
E|-4h5-6-7--4-7-4-7--5-4--------------------|
B|-----------------------7-5-4-5-4---4------|
G|---------------------------------6---6-4--|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 5 de 5
E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-7-6-7-6-4--------------------------------|
A|-----------7------------------------------|
E|--------------5-5-5-5-5-------------------|

[Primeira Parte]

   [E]                               [B7]          [E]    [E7]
As águas do São Francisco estavam por cima da ponte
[A]                                    [E7]          [A]
  Este é o grande motivo que eu não pude atravessar
[B7]                                               [E]
   Mas isto eu achei foi bom, fui obrigado a voltar

[Pré-Refrão]

     [A]                                     [B7]
Pra casa do meu amor e passei a noite por lá
    [E]  [B7]               [E]
Fiquei    a noite inteirinha
                          [B7]             [E]     [E7]
Ao lado da moreninha esperando as águas baixar

[Refrão]

[A]                                             [E]
  Enquanto as águas baixava, eu tomava café quente
                   [B7]                         [E]
Muitos beijos e abraços, aumentava o amor da gente
  [A]                                             [E]
E eu pedindo ao São Pedro, que aumentasse a enchente
     [B7]                [E]
São Pedro eu estou gostando
                                    [B7]          [E]
As águas pode ir aumentando e meu amor fica contente

[Solo] [A]  [E]  [B7]  [E]  [E7]
       [A]  [E]  [B7]  [E]  [E7]

[Refrão]

[A]                                             [E]
  Enquanto as águas baixava, eu tomava café quente
                   [B7]                         [E]
Muitos beijos e abraços, aumentava o amor da gente
  [A]                                             [E]
E eu pedindo ao São Pedro, que aumentasse a enchente
     [B7]                [E]
São Pedro eu estou gostando
                                    [B7]          [E]
As águas pode ir aumentando e meu amor fica contente

[Primeira Parte]

   [E]                               [B7]          [E]    [E7]
As águas do São Francisco estavam por cima da ponte
[A]                                    [E7]          [A]
  Este é o grande motivo que eu não pude atravessar
[B7]                                               [E]
   Mas isto eu achei foi bom, fui obrigado a voltar
     [A]                                     [B7]
Pra casa do meu amor e passei a noite por lá
    [E]  [B7]               [E]
Fiquei    a noite inteirinha
                          [B7]             [E]     [E7]
Ao lado da moreninha esperando as águas baixar

[Solo] [A]  [E]  [B7]  [E]`,
  },
  {
    id:            "gino-e-geno-pescaria",
    titulo:        "Pescaria",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 5023,
    cifra: `[E]                                       [B7]
Rebojo de água suja é lugar de peixe juntar
     [A]                          [B7]         [E]
Eu armo o anzol de galha pra pegar um marruá
                                        [B7]
Meu rancho fica na beira de cá escuto bater
   [A]              [E]                 [B7]         [E]
Daqui da porta do rancho eu vejo a galha tremer

                                           [B7]
Pescador que é pescador pisa mansinho no barranco
    [A]            [B7]                  [E]
Chega devagar na ceva pra evitar o espanto
                                              [B7]
Tira a branca da capanga toma um gole pra esperar
  [A]                 [E]             [B7]     [E]
Linha balançou não mexe, deixa o bicho mamar

                                            [B7]
A linha tem que ser grossa, a isca é minhocuçu
     [A]              [B7]                      [E]
O braço tem que ser forte pra emborcar o bambu
                                        [B7]
Anzol bem encastoado Chumbada que faz tibungo
    [A]               [E]           [B7]               [E]
Dá vinte braças de linha que o bicho pega é no fundo

                                            [B7]
Não gosto de samburá eu só uso infiera de imbira
      [A]                                [B7]         [E]
Deixo um metro dentro d'água que assim o peixe respira
                                          [B7]
Pra espantar pernilongo acendo um pito de palha
  [A]              [E]               [B7]      [E]
Fico namorando a lua enquanto a isca trabalha

                                               [B7]
O rio bom é o que a gente não sabe o peixe que tem
     [A]                           [B7]               [E]
Bota a isca e manda longe só pra ver o que é que vem
                                     [B7]
Pescaria é paciência não pegar é natural
  [A]                 [E]           [B7]              [E]
Beliscou mas não fisgou é o pescador que pesca mal`,
  },
  {
    id:            "gino-e-geno-acidente-de-amor",
    titulo:        "Acidente de Amor",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3900,
    cifra: `(intro) [E] [B] [E] [B]

[E]                   [B7]                                        [E]
Ela chegou correndo demais imprudente bateu e arrebentou meu Peito
                          [B7]                                      [E]
Acidente de amor machuca demais, furou o lado esquerdo amasso o Direito.
                     [B7]                                 [E]
Ela chegou correndo demais ela não conseguiu evitar a pancada
                           [B7]                              [E]
Acidente de amor machuca demais, mais ela também saiu Machucada.
            [A]          [E]     [A]       [E]       [A]
Ela veio guiando a paixão a 200 por hora quando se
   [E]
perdeu
[A]
E pegou meu coração de frente e nesse acidente a vitima sou eu
[B7]                                        [A]            [E]
E agora nesse sofrimento meu ferimento não sara e não cura
                       [B7]                                     [E]
E o pior é que ela se evadiu e por esse brasil meu amor lhe Procura

(refrão)

No acidente eu perdi o sentido e acordei ferido doendo de amor
Preocupado comigo e com ela disseram que ela também se machuco
E agora não sei onde está aquela que está me fazendo sofrer
Mesmo assim eu to aqui me abrindo ferido sentindo meu peito
Doer

(refrão)

Na intenção de encontrar a malvada um retrato falado eu mandei fazer
Não me lembro de muitos detalhes mais de uma coisa eu não posso esquecer
Apesar da violência do choque ainda sinto o toque o perfume no ar
E no meu coração infeliz pra sempre a cicatriz desse amor vai ficar

(refrão)

Na intenção de encontrar a malvada um retrato falado eu mandei fazer
Não me lembro de muitos detalhes mais de uma coisa eu não posso esquecer
Apesar da violência do choque ainda sinto o toque o perfume no ar
E no meu coração infeliz pra sempre a cicatriz desse amor vai ficar

(refrão)

Na intenção de encontrar a malvada um retrato falado eu mandei fazer
Não me lembro de muitos detalhes mais de uma coisa eu não posso esquecer
Apesar da violência do choque ainda sinto o toque o perfume no ar
E no meu coração infeliz pra sempre a cicatriz desse amor vai ficar`,
  },
  {
    id:            "gino-e-geno-o-cavaco-vuou",
    titulo:        "O Cavaco Vuou",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2648,
    cifra: `[E]           [B7]           [A]             [E]
O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou
[E]           [B7]           [A]             [E]
O machado cortou, cortou, cortou, cortou
             [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

  [B7]                    [E]
Madeira gemeu, cavaco vuou
  [B7]                    [E]
A madeira gemeu e o cavaco vuou

 [E]           [B7]           [A]             [E]
Botei a saudade no brete, fiz tudo do jeito que faz peão duro
                            [B7]           [A]             [E]
Quando veio abrindo a porteira, já comi poeira no primeiro pulo
    [F#]
Coloquei o arreio na paixão, com a rédea na mão, eu cheguei a
[B7]
Chibata
                           [E]            [B7]
Mas no amor não existe peão, no pulo da paixão, quase que ela me
[E]
Mata

[E]           [B7]           [A]             [E]
O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

  [B7]                    [E]
Madeira gemeu, cavaco vuou
  [B7]                    [E]
A madeira gemeu e o cavaco vuou

 [E]           [B7]           [A]             [E]
Convidei um amigo pra ir em uma pescaria lá no Pantanal
                          [B7]           [A]             [E]
De tanto medo da mulher, o coitado até ficou passando mal
    [F#]                                                        [B7]
Preocupado com ele, eu pensei em uma solução pra evitar o perigo
                       [E]            [B7]                     [E]
O amigo eu deixei em casa e levei a mulher para pescar comigo

[E]           [B7]           [A]             [E]
O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

 [B7]                    [E]
Madeira gemeu, cavaco vuou
  [B7]                    [E]
A madeira gemeu e o cavaco vuou

 [E]           [B7]           [A]             [E]
Eu vendi um canário que canta e um que não canta eu vendi muito bem
                              [B7]           [A]             [E]
O que canta eu vendi por cinquenta e o que não canta eu vendi por cem
      [F#]
Perguntaram qual a diferença, por que o que não canta teve mais
[B7]
Valor?
                           [E]            [B7]
O que canta pega a moda pronta, mas o que não canta é o compositor

[E]           [B7]           [A]             [E]
O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

O machado cortou, cortou, cortou, cortou
            [B7]           [A]             [E]
O suor escorreu, a madeira gemeu e o cavaco vuou

  [B7]                    [E]
Madeira gemeu, cavaco vuou
 [B7]                    [E]
A madeira gemeu e o cavaco vuou
  [B7]                    [E]
Madeira gemeu, cavaco vuou
  [B7]                    [E]
A madeira gemeu e o cavaco vuou`,
  },
  {
    id:            "gino-e-geno-gaviao",
    titulo:        "Gavião",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3772,
    cifra: `[Intro] [E]  [B7]

[E]               [B7]               [A]                [E]
Ele diz que é gavião que é gostosao e se acha bonito
[E]               [B7]               [A]                [E]
Ele diz que é gavião que é gostosao e se acha bonito
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico

                    [B7]                        [E]
O gavião, que voa baixo ta querendo matar a fome
                    [B7]                        [E]
O gavião, que voa baixo ta querendo matar a fome
      [E7]           [A]                     [B7]                   [E]
Na verdade todo gavião quando pousa no chao é um pinto que some
      [E7]           [A]                     [B7]                   [E]
Na verdade todo gavião quando pousa no chao é um pinto que some

[E]               [B7]              [A]                  [E]
Ele diz que é gavião que é gostosao e se acha bonito
[E]               [B7]              [A]                  [E]
Ele diz que é gavião que é gostosao e se acha bonito
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico

                           [B7]                        [E]
Gaviao rei,  vai atras da caça, cacara so fica na sobra
                            [B7]                        [E]
Gaviao rei,  vai atras da caça, cacara so fica na sobra
      [E7]          [A]                     [B7]                   [E]
Quando vc ve pena voando é gavião brigando por causa de cobra
      [E7]          [A]                     [B7]                   [E]
Quando vc ve pena voando é gavião brigando por causa de cobra

[E]               [B7]              [A]                  [E]
Ele diz que é gavião que é gostosao e se acha bonito
[E]               [B7]              [A]                  [E]
Ele diz que é gavião que é gostosao e se acha bonito
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico

                            [B7]                        [E]
Gaviao gosta de cobra grande, mas tambem pega pinto pequeno
                            [B7]                        [E]
Gaviao gosta de cobra grande, mas tambem pega pinto pequeno
     [E7]               [A]                     [B7]                   [E]
Pra matar gavião tem instinto é de cobra e de pinto que ele ta vivendo
     [E7]               [A]                     [B7]                   [E]
Pra matar gavião tem instinto é de cobra e de pinto que ele ta vivendo

[E]               [B7]               [A]                 [E]
Ele diz que é gavião que é gostosao e se acha bonito
[E]               [B7]               [A]                 [E]
Ele diz que é gavião que é gostosao e se acha bonito
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico

( [E]  [B7] )

                            [B7]                        [E]
Gaviao gosta de cobra grande, mas tambem pega pinto pequeno
                            [B7]                        [E]
Gaviao gosta de cobra grande, mas tambem pega pinto pequeno
      [E7]              [A]                     [B7]                   [E]
Pra matar gavião tem instinto é de cobra e de pinto que ele ta vivendo
      [E7]              [A]                     [B7]                   [E]
Pra matar gavião tem instinto é de cobra e de pinto que ele ta vivendo

[E]               [B7]               [A]                 [E]
Ele diz que é gavião que é gostosao e se acha bonito
[E]               [B7]               [A]                 [E]
Ele diz que é gavião que é gostosao e se acha bonito
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico
                         [B7]                               [E]
Gaviao que so dorme no pau, gavião so vive com pinto do bico`,
  },
  {
    id:            "gino-e-geno-nois-enverga-mais-nao-quebra",
    titulo:        "Nois Enverga Mais Não Quebra",
    artista:       "Gino e Geno",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4959,
    cifra: `[Refrão]

 [C]                      [G]                             [C]
Nóis enverga mas não quebra, nóis chacoalha e não derrama
                      [G]                          [C]
Nóis balança mas não cai, nóis é brabo e bom de cama
                      [G]                    [C]
De bobo nóis não tem nada, só a cara de coitado
         [C7]         [F]          [G]            [C]       [G] [C]
Nóis se finge de leitão, pra poder mamar deitado

                                       [G]
Osso duro de roer, somos nóis aqui do mato
                                      [C]
Tomando cachaça pura, comendo ovo de pato
                   [C7]                       [F]
Capinando a nossa roça, contando boi na envernada
                      [C]              [G]            [C]
Nóis não tem dor de cabeça, não se encomoda com nada

 [C]
De noite a nóis vai pra festa
              [G]
E arrepia no bailão
                                          [C]
Mulher bonita e gostosa, nóis ganha de montão
                    [C7]                      [F]
Onde tem moda de viola e catira nóis ta no meio
                     [C]             [G]              [C]
Nóis não liga pra dinheiro, nóis já ta com saco cheio`,
  },
  {
    id:            "gino-e-geno-arrependida",
    titulo:        "Arrependida",
    artista:       "Gino e Geno",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4116,
    cifra: `[Intro] [G]  [Am]  [D7]  [G]  [Em]  [D7]  [G]

[G]                                 [D]
Eu não sou culpado se hoje você chora
                             [G]
Foi você mesma que me abandonou
                             [D]
Implorei tanto pra não ir embora
           [C]                [G]
As minhas súplicas não escutou
                               [D]
Hoje você chora triste arrependida
                              [G]
Para meus braços você quer voltar
             [G7]                    [C]
Você foi maldosa e arruinou minha vida
         [D]                  [G]     [G] [Am] [D7] [Em] [D7] [G]
Me compreendas não vou perdoar

 [G]                            [D]
Na sua ausência eu chorei de dor
                           [G]
Não suportei, fui a sua procura
                             [D]
Encontrei você com um novo amor
         [C]               [G]
Trocava beijos e fazia juras
                           [D]
Naquela noite fiquei embriagado
                     [G]   [D7]
Amanheci bebendo no bar
                       [C]
Estava triste e desesperado
            [D]              [G]   [G] [Am] [D7] [G] [Em] [D7] [G]
Chamei seu nome comecei chorar

  [G]                            [D]
O seu retrato que eu tinha guardado
                                [G]
Pra não recordá-la eu já joguei fora
                             [D]
Existe outra que vive ao meu lado
             [C]                      [G]
Que me faz carinho depois que foi embora
                                 [D]
Segue o seu caminho vai viver na lama
                       [G]   [G7]
Por piedade esqueça de mim
                           [C]
Por sua culpa todos me difamam
            [D]                  [G]
O meu nome rola num abismo sem fim
       [D]                         [G]
Segue mulher vai viver de mão em mão
        [D]                [G]          [G7]
Pois o remorço pouco a pouco lhe consome
          [C]                   [G]
Sinto uma dor dentro do meu coração
          [D]    [C]                              [G]
Tenho vergonha... por você usar... o meu sobrenome

[Final] [G]  [Am]  [D7]  [G]  [Em]  [D7]  [G]`,
  },
  {
    id:            "gino-e-geno-morena-bonita",
    titulo:        "Morena Bonita",
    artista:       "Gino e Geno",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3902,
    cifra: `Morena bonita vem me consolar
                             [G]
Sem você morena eu não vou ficar
Não demoro dias eu vou te buscar
                                [C]
Eu vim pra este mundo para te adorar

                             [G]
Se você me ama não me faz assim
                            [C]
Venha cá meu bem me fazer carinho
               [C7]               [F]
Não deixa eu sofrer tenha dó de mim
  [G]      [C]
Ai ai

As suas palavras são tão carinhosa
                          [G]
Essa sua pele parece uma rosa
Venha cá meu bem, morena luxosa
                            [C]
Minha flor querida é tão amorosa

                            [G]
Me faça carinho oh minha querida
                                     [C]
Dentro dos seus braços não encontro saída
            [C7]                [F]
Só você morena é toda minha vida
[G]        [C]
Ai ai

Esses seus cabelos é minha paixão
                             [G]
Te faço um pedido não corte ele não
Se você cortar é uma perdição
                         [C]
Morena bonita do meu coração

                        [G]
Este nosso amor é uma pureza
                          [C]
Você ao meu lado é uma beleza
                 [C7]           [F]
E nós dois se amando é a maior riqueza
[G]    [C]
Ai ai`,
  },
  {
    id:            "gino-e-geno-jeito-caipira",
    titulo:        "Jeito Caipira",
    artista:       "Gino e Geno",
    tom:           "E",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3060,
    cifra: `[Intro] [E]  [A]  [B7]  [E]  [B7]  [A]  [B7]  [E]

E|-4-4-4-4-5-5/7-7--4-4-4-5-5/7-7--7/12-12-12-12-11---12-12-12-12-11--9--9--9-12-12-12-11-11-7-7-7-5-4-|
B|-5-5-5-5-7-7/9-9--5-5-5-7-7/9-9--9/14-14-14-14-12---14-14-14-14-12-10-10-10-14-14-14-12-12-9-9-9-7-5-|
G|----------------------------------------------------------------------------------------------------|
D|----------------------------------------------------------------------------------------------------|
A|----------------------------------------------------------------------------------------------------|
E|----------------------------------------------------------------------------------------------------|

E|-4/--9--9--9-5-5-4-4--5/7-5/7-|
B|-5/-10-10-10-7-7-5-5--7/9-7/9-|
G|------------------------------|
D|------------------------------|
A|------------------------------|
E|------------------------------|

            [E]                                         [B7]
Mulher pra me ganhar ela tem que gostar do meu jeito caipira
                                                        [E]
Não mexer na muringa onde eu guardo minha pinga com sucupira
                                    [E7]                   [A]
Quando eu chegar do mato catar carrapato em meu corpo cansado
              [E]                      [B7]                [E]     [F#]
Não fazer enjoeiro quando sentir o cheiro de bosta de gado
                                                           [B7]     [A]
Eu quero uma mulher que ainda reze com fé um Pai Nosso perfeito
                [E]                        [B7]                 [E]
Eu não sou primitivo, é que eu acho que vivo melhor desse jeito

   [E]                                                    [B7]
Eu quero uma mulher que ainda coe um café num coador de pano
                                                          [E]
Que vergonha não tenha de um fogão à lenha e o teto esfumaçando
                             [E7]                    [A]
Não precisa saber de tudo fazer duas coisas não abro
               [E]              [B7]                    [E]      [F#]
De noite o prazer e de dia fazer um franguim com quiabo
                                                          [B7]      [A]
Eu quero uma mulher que ainda reze com fé um Pai Nosso perfeito
                [E]                        [B7]                 [E]
Eu não sou primitivo, é que eu acho que vivo melhor desse jeito

 [E]                                                           [B7]
Você pode pensar que eu não vou me casar, que essa coisa não vira
                                                               [E]
Que eu não vou encontrar uma mulher pra aceitar o meu jeito caipira
                                         [E7]               [A]
Quer saber o que eu acho se não for nos braços de uma mulher
              [E]                 [B7]              [E]     [F#]
Uma coisa consola, o braço da viola, viola me quer
                                                           [B7]      [A]
Eu quero uma mulher que ainda reze com fé um Pai Nosso perfeito
                [E]                        [B7]                 [E]      [A]
Eu não sou primitivo, é que eu acho que vivo melhor desse jeito
                [E]                        [B7]                 [E]
Eu não sou primitivo, é que eu acho que vivo melhor desse jeito

E|-5/-9--9-5-5-7-7-4-4-5-5-2-2-4-4-4-|
B|-7/10-10-7-7-9-9-5-5-7-7-4-4-5-5-5-|
G|---------------------------------4-|
D|---------------------------------6-|
A|---------------------------------7-|
E|-----------------------------------|`,
  },
  {
    id:            "gino-e-geno-estrela-de-ouro",
    titulo:        "Estrela de Ouro",
    artista:       "Gino e Geno",
    tom:           "G",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2858,
    cifra: `Intro: [D]  [G]  [D]  [D7]  [G]
       [D]  [G]  [D]  [D7]  [G]  [D]  [C]  [D]

    [G]                [D]                 [G]
Meu Deus, onde esta agora a mulher que amo?
                                [D]   [D7]
Será que esta sozinha ou acompanhada?
    [C]                                 [G]
Só sei que aqui distante eu estou morrendo
                      [D]                 [G]        [D] [C] [D]
Morrendo de saudades dela num mundo de lágrimas
    [G]                  [D]                 [G]
Meu Deus, mande que o vento encontre com ela
                                          [D]   [D7]
Pra dar minhas tristes notícias com seu açoite
   [C]                                 [G]
Dizer que por não estar abraçado por ela
                          [D]               [G]     [G] [D]
Eu choro meu pranto escondido no colo da noite

Refrão:
 [C]   [D]                      [G]
Meu Deeeeeeus, eu morro por ela
              [D]  [D7]             [G]    [G] [D]
E a ausência dela provoca meu choro
[C]   [D]                          [G]
Ela ééééééééé a luz que me ilumina
                [D]  [D7]                [G]     [D] [D7] [G]   [D] [G]
Deusa da minha sina, minha estrela de ouro`,
  },
  {
    id:            "gusttavo-lima-na-hora-de-amar",
    titulo:        "Na Hora de Amar",
    artista:       "Gusttavo Lima",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4750,
    cifra: `[Intro] [Em9]  [C9(11+)]  [D9(11)]
        [Em9]  [C9(11+)]  [D9(11)]

[Tab - Solo Intro]

E|-----------x-----------x------------x----------------|
B|----7-8--7-x----5-5--7-x---7h8-7----x----------------|
G|-/9-7-7--7-x-x--5-5--7-x-x-7h9-7--9-x-x--7/9--7------|
D|-/9--------x-----------x----------9-x----7/9--7------|
A|-----------x-----------x------------x----------------|
E|-----------x-----------x------------x----------------|

[Dedilhado - Intro]

Parte 1 De 2
   [Em9]                [C9(11+)]
E|---------x------------------x------------------------|
B|---------x----------------3-x------------------------|
G|-------0-x--------------0---x------------------------|
D|-----4---x--x---4-----4-----x--x---4-----------------|
A|---2-----x----2-----3-------x----3-------------------|
E|-0-------x------------------x------------------------|

Parte 2 De 2
   [D9(11)]
E|---------x----------------0-x------------------------|
B|-------3-x------------------x------------------------|
G|-----0---x--------------0---x------------------------|
D|---4-----x--x---4-----4-----x------------------------|
A|-5-------x----5-----5-------x-0----------------------|
E|---------x------------------x---3-2------------------|

Parte 1 De 2
   [Em9]                [C9(11+)]
E|---------x------------------x------------------------|
B|---------x----------------3-x------------------------|
G|-------0-x--------------0---x------------------------|
D|-----4---x--x---4-----4-----x--x---4-----------------|
A|---2-----x----2-----3-------x----3-------------------|
E|-0-------x------------------x------------------------|

Parte 2 De 2 - Variação
  [D9(11)]
E|---------x----------------0--------------------------|
B|-------3-x-------------------------------------------|
G|-----0---x--------------0----------------------------|
D|---4-----x--x---4-----4------------------------------|
A|-5-------x----5-----5--------------------------------|
E|---------x-------------------------------------------|

[Primeira Parte]

       [Em]           [Am7]      [D2]
Teu olhar sempre está muito longe
         [Em]          [Am7]      [D2]
Em um lugar que se chama solidão
            [Em]    [C]            [D2]
Chego a pensar, que você se esconde
             [A2]
Da minha paixão

[Segunda Parte]

[Dedilhado - Segunda Parte]

Parte 1 De 2
   [Em]                 [C]
E|---------x------------------x------------------------|
B|---------x----------------3-x------------------------|
G|-------0-x--------------0---x------------------------|
D|-----4---x--x---4-----4-----x--x---4-----------------|
A|---2-----x----2-----3-------x----3-------------------|
E|-0-------x------------------x------------------------|

Parte 2 De 2
   [D]
E|---------x----------------0-x------------------------|
B|-------3-x------------------x------------------------|
G|-----0---x--------------0---x------------------------|
D|---4-----x--x---4-----4-----x------------------------|
A|-5-------x----5-----5-------x-0----------------------|
E|---------x------------------x---3-2------------------|

Parte 2 De 2 - Variação
   [D]
E|---------x------------------x------------------------|
B|-------3-x----------------3-x------------------------|
G|-----0---x--------------0---x------------------------|
D|---4-----x--x---4-----4-----x------------------------|
A|-5-------x----5-----5-------5\-----------------------|
E|---------x-------------------------------------------|

           [Em9]       [C9(11+)]  [D9(11)]
Sempre a voar, pensamento distante
            [Em9]  [C9(11+)]        [D9(11)]
E eu me pergunto o que foi que fiz?
           [Em9]     [C9(11+)]       [D9(11)]
Mas são palavras que ninguém responde
             [A2]  [Am7]
Te vejo infeliz

[Refrão]

             [D2]           [A2]
Você deve estar com medo de contar
          [Bm]              [G]
Que seu amor, por mim acabou
           [Em]  [Em/F#]  [G]       [A2]
Sempre fingiu,       nada sentiu
             [Bm]  [Bm/A]
Na hora de amar

[Terceira Parte]

           [Em]         [C]
Eu vejo o Sol se afastando
        [D2]
Do horizonte
         [Em]       [C]            [D2]
Igual você que se escondeu de mim
             [Em]
Não sei porque
     [C]                [D2]
Um amor que era tão grande
               [A2]  [Am7]
Foi ficando assim

[Refrão]

[Tab - Frase 1]

                 [Em]
E|-0-------------0--0--0--0--0-------------------------|
B|---3-0---------0--0--0--0--0-------------------------|
G|-------2-0-2---0--0--0--0--0-------------------------|
D|---------------2--2--2--2--2-------------------------|
A|---------------2--2--2--2--2-------------------------|
E|---------------0--0--0--0--0-------------------------|
                 ↓  ↓  ↓   ↓  ↑

[Tab - Frase 2]

E|---------2------5/7-7--------------------------------|
B|-----3-5---3/5---------------------------------------|
G|-2/4-------------------------------------------------|
D|-----------------------------------------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|

             [D2]           [A2]
Você deve estar com medo de contar
          [Bm]              [G]
Que seu amor, por mim acabou
           [Em]  [Em/F#]  [G]       [A2]
Sempre fingiu,       nada sentiu
             [D2]
Na hora de amar
          [A2]
Tem medo de contar
          [Bm]              [G]
Que seu amor, por mim acabou
           Frase 1      [A2]
Sempre fingiu, nada sentiu
             [Bm] (Frase 2)  [Bm/A]
Na hora de amar

[Quarta Parte]

[Em]          [G]            [D2]      [C]
   A gente sente quando tudo acabou
[Em]             [G]           [D2]
   Quando o encanto da paixão sumiu
[Em]          [G]            [D2]    [A2]
   Um sentimento que só meu coração
       [C]  [A2]
Descobriu

[Refrão Final]

[Tab - Frase 3]

                 [Cm]
E|---------------3--3--3--3--3-------------------------|
B|---------------4--4--4--4--4-------------------------|
G|-5-3-----------5--5--5--5--5-------------------------|
D|-----5-3-1-3---5--5--5--5--5-------------------------|
A|---------------3--3--3--3--3-------------------------|
E|-----------------------------------------------------|
                 ↓  ↓   ↓  ↓  ↑

   [Bb2]       [Eb2]          [Bb2]
Você deve estar com medo de contar
          [Cm]              [Ab]
Que seu amor, por mim acabou
           [Fm]  [G]  [Ab]      [Bb2]
Sempre fingiu,   nada sentiu
             [Eb2]
Na hora de amar
          [Bb2]
Tem medo de contar
         (Frase 3)        [Ab]
Que seu amor, por mim acabou
           [Fm]   [Ab]      [Bb2]
Sempre fingiu, nada sentiu
             [Cm]
Na hora de amar

[Tab - Final]

   [Cm]
E|------------------3----------------------------------|
B|----3--4-------3-------------------------------------|
G|-5--5--5----5--5-------------------------------------|
D|-5----------5----------------------------------------|
A|-3---------------------------------------------------|
E|------------4----------------------------------------|`,
  },
  {
    id:            "gusttavo-lima-inventor-dos-amores",
    titulo:        "Inventor Dos Amores",
    artista:       "Gusttavo Lima",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 335,
    cifra: `[Intro] [Gm]  [Bb5(9)]  [F]  [C5(9)]

[Tab - Intro]

Parte 1 de 2
   [Gm]                  [Bb5(9)]
E|-------5-6-------5-6----------8-10-----------------|
B|-8-8-8-----8-8-8-----11-11-11----------------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Parte 2 de 3
                       [F]                    [C5(9)]
E|-------10-10-10-8--6-6/8---6/8--8--8--6-5-----8----|
B|-10/11-11-11-11-10-8-8/10--8/10-10-10-8-6----------|
G|------------------------------------------7/9------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Parte 3 de 3
E|-----6p5-------------------------------------------|
B|---------8-6-6/8~----------------------------------|
G|-5/7-----------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Primeira Parte]

[Gm]
   Eu já não sei mais

O que faço com meu coração
[Bb5(9)]
       Eu não tenho mais

O controle da situação
[F]
  Todo caminho que eu sigo
                [C5(9)]
Me leva a você

[Gm]
   E quanto mais tento fugir

Eu me aproximo mais
[Bb5(9)]
       Não tem mais jeito

Já se foi razão ficou pra trás
[F]
  Eu já não sigo meus instintos
            [C5(9)]
Medo de sofrer

[Pré-Refrão]

[Gm]
   E se eu me entregar
          [F/A]   [Bb5(9)]
Será que vai rolar?

Sou um doente apaixonado
             [F]  [C5(9)]
E ela tem razão
[Gm]
   Se for pra ser assim
           [F/A]    [Bb5(9)]
Eu vou cuidar de mim

Eu penso em desistir
               [C5(9)]
E ela diz que não

[Refrão]

[F]
  Meu coração apaixonado

Atormentado em dores
[C5(9)]
      Procura entre os outros
        [Bb5(9)]   [F]
O inventor dos amores
[Gm]                     [Dm]
   Espero que essa paixão
                [C5(9)]  [Bb5(9)]  [C5(9)]
Nunca me deixe mal

[F]
  Eu quero te amar

E também quero ser amado
[C5(9)]
      Desejo ser o seu amor
   [Bb5(9)]       [F]
E não o seu escravo
[Gm]                     [Dm]
   Espero que essa paixão
                   [C5(9)]
Não tenha ponto final
       [Bb5(9)]      [C5(9)]            [F]
Se não        adeus     tchau tchau

[Solo] [Gm]  [Bb5(9)]  [F]  [C5(9)]

[Tab - Solo]

Parte 1 de 2
   [Gm]                  [Bb5(9)]
E|------5-6-------5-6----------8-10------------------|
B|-8-8-------8-8-------11-11-------------------------|
G|---------------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Parte 2 de 3
                       [F]                    [C5(9)]
E|----------10-10-8--6-6/8---6/8--8--8--6-5-----8----|
B|-10-10/11-11-11-10-8-8/10--8/10-10-10-8-6----------|
G|------------------------------------------7/9------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

Parte 3 de 3
E|-----6p5-------------------------------------------|
B|---------8-6-6/8~----------------------------------|
G|-5/7-----------------------------------------------|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Pré-Refrão]

[Gm]
   E se eu me entregar
          [F/A]   [Bb5(9)]
Será que vai rolar?

Sou um doente apaixonado
             [F]  [C5(9)]
E ela tem razão
[Gm]
   Se for pra ser assim
           [F/A]    [Bb5(9)]
Eu vou cuidar de mim

Eu penso em desistir
               [C5(9)]
E ela diz que não

[Refrão]

[F]
  Meu coração apaixonado

Atormentado em dores
[C5(9)]
      Procura entre os outros
        [Bb5(9)]   [F]
O inventor dos amores
[Gm]                     [Dm]
   Espero que essa paixão
                [C5(9)]  [Bb5(9)]  [C5(9)]
Nunca me deixe mal

[F]
  Eu quero te amar

E também quero ser amado
[C5(9)]
      Desejo ser o seu amor
   [Bb5(9)]       [F]
E não o seu escravo
[Gm]                     [Dm]
   Espero que essa paixão
                   [C5(9)]
Não tenha ponto final

[F]
  Meu coração apaixonado

Atormentado em dores
[C5(9)]
      Procura entre os outros
        [Bb5(9)]   [F]
O inventor dos amores
[Gm]                     [Dm]
   Espero que essa paixão
                [C5(9)]  [Bb5(9)]  [C5(9)]
Nunca me deixe mal

[F]
  Eu quero te amar

E também quero ser amado
[C5(9)]
      Desejo ser o seu amor
   [Bb5(9)]       [F]
E não o seu escravo
[Gm]                     [Dm]
   Espero que essa paixão
                   [C5(9)]
Não tenha ponto final
       [Bb5(9)]      [C5(9)]            [F]
Se não        adeus     tchau tchau

[Final] [Bb5(9)]  [C5(9)]  [F]`,
  },
  {
    id:            "gusttavo-lima-retrovisor",
    titulo:        "Retrovisor",
    artista:       "Gusttavo Lima",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2358,
    cifra: `E|---------------------------------------------|
B|---------------------------------------------|
G|--10-9-10-9-10---9h10p9---10-9-9h-10---------|
D|-------------------------8-------------------|
A|---------------------------------------------|
E|---------------------------------------------|

E|----10--10-----8h10p8------------------------|
B|--11--11----10-------------------------------|
G|---------------------------------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

E|--13-13/15-13---17-17/18-17------------------|
B|---------------------------------------------|
G|--14-14/15-14---17-17/19-17------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

[D]                   [G]
Só tem louça pra lavar

Quem tem comida no prato
           [D]
Só paga IPVA quem já conquistou um carro

[Pré-Refrão]

                         [Bm]
Só passa a noite ouvindo choro
                          [F#m]
Quem teve a benção de um filho
                   [G]
Só tem que acordar cedo
                                 [A4]      [A]
Quem tem um emprego cê já pensou nisso?
                         [G]     [A]
Começa a ver o copo meio cheio
                [D]
E não meio vazio

[Refrão]

                [G]                    [Em7]
Olha pro retrovisor tudo que cê já passou
                     [D]
Lembra quando cê ajoelhou pra pedir

Pelas coisas que hoje você reclamou
                [G]                    [Em7]
Olha pro retrovisor e começa a dar valor
                    [D]
Tem tanta gente com menos que
                              [A]
Tá agradecendo só porque acordou
              [G]     [D]
Olha pro retrovisor

( [Bm]  [D] )

[Pré-Refrão]

                         [Bm]
Só passa a noite ouvindo choro
                          [F#m]
Quem teve a benção de um filho
                   [G]
Só tem que acordar cedo
                                 [A4]      [A]
Quem tem um emprego cê já pensou nisso?
                         [G]     [A]
Começa a ver o copo meio cheio
                [D]
E não meio vazio

[Refrão]

                [G]                    [Em7]
Olha pro retrovisor tudo que cê já passou
                     [D]
Lembra quando cê ajoelhou pra pedir
                      [D]
Pelas coisas que hoje você reclamou
                [G]                    [Em7]
Olha pro retrovisor e começa a dar valor
                    [D]
Tem tanta gente com menos que
                              [A]
Tá agradecendo só porque acordou
              [G]
Olha pro retrovisor

Tudo que cê já passou

( [Em]  [D] )

                  [D]
Pelas coisas que hoje você reclamou
              [G]     [Em]
Olha pro retrovisor
                    [D]
Tem tanta gente com menos que
                              [A]
Tá agradecendo só porque acordou
              [G]
Olha pro retrovisor

E|-----10-----8h10p8--------------------------|
B|--11-----10---------------------------------|
G|--------------------------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|`,
  },
  {
    id:            "gusttavo-lima-termina-comigo-antes",
    titulo:        "Termina Comigo Antes",
    artista:       "Gusttavo Lima",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 635,
    cifra: `[Intro] [Em]  [C9]  [G]  [D/F#]

[Tab - Intro]

Parte 1 de 2
   [Em7]               [C9]
E|------x------x----------x-------x------------|
B|----0-x-0--0-x--------3-x-3--3--x------------|
G|----0-x-0--0-x--------0-x-0--0--x------------|
D|----2-x-2--2-x-x------2-x-2--2--x-x----------|
A|------x------x-----3----x-3-----x------------|
E|-0----x-0----x----------x-------x------------|

Parte 2 de 2
   [G]                 [D/F#]
E|------x------x-----x-------------------------|
B|----3-x-3--3-x-----3-------------------------|
G|----0-x-0--0-x-----2-------------------------|
D|----0-x-0--0-x-x---0-------------------------|
A|------x------x-----x-------------------------|
E|-3----x-3----x-----2-------------------------|
                     ↓
[Tab - Solo Intro]

E|---------------------------------------------|
B|-3/5~--3/5~--3/5-3~--------------------------|
G|---------------------2/4-2-------------------|
D|--------------------------------4/54-42-2--|
A|---------------------------------------------|
E|---------------------------------------------|

[Primeira Parte]

[Tab - Primeira Parte]

Parte 1 de 2
   [Em7]               [C9]
E|------x------x----------x-------x------------|
B|----0-x-0--0-x--------3-x-3--3--x------------|
G|----0-x-0--0-x--------0-x-0--0--x------------|
D|----2-x-2--2-x-x------2-x-2--2--x-x----------|
A|------x------x-----3----x-3-----x------------|
E|-0----x-0----x----------x-------x------------|

Parte 2 de 2
   [G]                [D/F#]
E|------x------x---------x------x--------------|
B|----3-x-3--3-x-------3-x-3--3-x--------------|
G|----0-x-0--0-x-------2-x-2--2-x--------------|
D|----0-x-0--0-x-x-----0-x-0--0-x-x------------|
A|------x------x---------x------x--------------|
E|-3----x-3----x-----2---x-2----x--------------|

[Em]      [C9]        [G]
   Quem ama dá valor
   [D/F#]         [Em]
E pensa no que faz
  [C9]            [G]
Quando existe amor
   [D/F#]         [Em]
O coração não trai

[Pré-Refrão]

[Tab - Pré-Refrão]

Parte 1 de 3
   [Em7]               [C9]
E|------x------x----------x-------x------------|
B|----0-x-0--0-x--------3-x-3--3--x------------|
G|----0-x-0--0-x--------0-x-0--0--x------------|
D|----2-x-2--2-x-x------2-x-2--2--x-x----------|
A|------x------x-----3----x-3-----x------------|
E|-0----x-0----x----------x-------x------------|

Parte 2 de 3
   [G]                [D/F#]
E|------x------x---------x------x--------------|
B|----3-x-3--3-x-------3-x-3--3-x--------------|
G|----0-x-0--0-x-------2-x-2--2-x--------------|
D|----0-x-0--0-x-x-----0-x-0--0-x-x------------|
A|------x------x---------x------x--------------|
E|-3----x-3----x-----2---x-2----x--------------|

Parte 3 de 3
   [G]                [C]    [D4]     [G]
E|------x------x-------------------------------|
B|----3-x-3--3-x----0h1--1/3----8--------------|
G|----0-x-0--0-x----0----0-0----0--------------|
D|----0-x-0--0-x----0h2--2/4----9--------------|
A|------x------x----3----3/5----10-------------|
E|-3----x-3----x-------------------------------|

       [C9]                [G]
Tô sentindo você tão distante
        [D/F#]              [Em]
Se arrumando demais pra sair
      [C9]             [G]
Cada dia tá mais elegante
       [D/F#]                [G]  [C]  [D4]  [G]
Tô sentindo que não é pra mim

[Refrão]

[Tab - Refrão]

Parte 1 de 7
   [C/D]  [G]                [D/F#]
E|-0---------x------x---------x------x---------|
B|-1-------3-x-3--3-x-------3-x-3--3-x---------|
G|-0-------0-x-0--0-x-------2-x-2--2-x---------|
D|-0-------0-x-0--0-x-x-----0-x-0--0-x-x-------|
A|-----------x------x---------x------x---------|
E|------3----x-3----x-----2---x-2----x---------|

Parte 2 de 7
   [Em7]               [C9]
E|------x------x----------x-------x------------|
B|----0-x-0--0-x--------3-x-3--3--x------------|
G|----0-x-0--0-x--------0-x-0--0--x------------|
D|----2-x-2--2-x-x------2-x-2--2--x-x----------|
A|------x------x-----3----x-3-----x------------|
E|-0----x-0----x----------x-------x------------|

Parte 3 de 7
   [G]                [D/F#]
E|------x------x---------x------x--------------|
B|----3-x-3--3-x-------3-x-3--3-x--------------|
G|----0-x-0--0-x-------2-x-2--2-x--------------|
D|----0-x-0--0-x-x-----0-x-0--0-x-x------------|
A|------x------x---------x------x--------------|
E|-3----x-3----x-----2---x-2----x--------------|

Parte 4 de 7
   [Em]  [D/F#]  [G]  [G/B]  [C9]
E|-----------------------x------x--------------|
B|-0----3----0---3----5--x-5--5-x--------------|
G|-0----2----0---0----0--x-0--0-x--------------|
D|-2----0----0---0----0--x-0--0-x-x------------|
A|---------------2----3--x-3----x--------------|
E|-0----2----3-----------x------x--------------|

Parte 5 de 7
   [G]                [D/F#]
E|------x------x---------x------x--------------|
B|----3-x-3--3-x-------3-x-3--3-x--------------|
G|----0-x-0--0-x-------2-x-2--2-x--------------|
D|----0-x-0--0-x-x-----0-x-0--0-x-x------------|
A|------x------x---------x------x--------------|
E|-3----x-3----x-----2---x-2----x--------------|

Parte 6 de 7
   [Em7]               [C9]
E|------x------x----------x-------x------------|
B|----0-x-0--0-x--------3-x-3--3--x------------|
G|----0-x-0--0-x--------0-x-0--0--x------------|
D|----2-x-2--2-x-x------2-x-2--2--x-x----------|
A|------x------x-----3----x-3-----x------------|
E|-0----x-0----x----------x-------x------------|

Parte 7 de 7
      H.N .
   [G]             [D/F#]
E|---------------------------------------------|
B|-0-------------3-----------------------------|
G|-0--7----------2-----------------------------|
D|-0------7------0-----------------------------|
A|---------------------------------------------|
E|-3-------------2-----------------------------|


[G]                 [C/D]
  Se resolver trocar
                  [G]
O amor por um instante
    [D/F#]
Termina comigo antes
[Em]                [C9]           [G]
  Se pra você eu sou insignificante
    [D/F#]
Termina comigo antes

[Em]     [D/F#]  [G]      [G/B]  [C9]
   Se resol_ver trocar
                  [G]
O amor por um instante
    [D/F#]
Termina comigo antes
[Em]                [C9]           [G]
  Se pra você eu sou insignificante
    [D/F#]       [Em7]   [C9]  [G]  [D/F#]
Termina comigo antes

[Tab - Solo]

E|---------------------------------------------|
B|-3/5~--3/5~--3/5-3~-/7-7~--7/87-7/12-12~----|
G|---------------------------------------------|
D|---------------------------------------------|
A|---------------------------------------------|
E|---------------------------------------------|

[Pré-Refrão]

[Em7]        [C9]                [G]
    Tô sentindo você tão distante
        [D/F#]              [Em7]
Se arrumando demais pra sair
      [C9]             [G]
Cada dia tá mais elegante
       [D/F#]                [G]  [C9]  [D4]
Tô sentindo que não é pra mim

[Refrão Final]

[G]               [C9]
  Se resolver trocar
                  [G]
O amor por um instante
    [D/F#]
Termina comigo antes
[Em7]                 [C9]           [G]
    Se pra você eu sou insignificante
    [D/F#]
Termina comigo antes

[Em7]     [D/F#]  [G]      [G/B]  [C9]
    Se resol_ver trocar
                  [G]
O amor por um instante
    [D/F#]
Termina comigo antes
[Em7]                 [C9]           [G]
    Se pra você eu sou insignificante
    [D/F#]       [Em7]
Termina comigo antes

    [C9]         [G]
Termina comigo antes
    [D/F#]       [Em7]
Termina comigo antes
    [C9]         [G]
Termina comigo antes
      [D/F#]            [Em7]
Vai doer, mas termina antes`,
  },
  {
    id:            "gusttavo-lima-vagabundo-part-luis-fonsi",
    titulo:        "VAGABUNDO (part. Luis Fonsi)",
    artista:       "Gusttavo Lima",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2612,
    cifra: `[Dm]                          [Am]
Dizem que todo homem é vagabundo
        [G]           [Am]
Eu não sou, eu não sou
   [Dm]                         [Am]
Se existe alguém fiel nesse mundo
                [G]                [Am]
Esse alguém soy yo, esse alguém soy yo

  [G]                                  [Am]
Pergunta pra minha nega se eu vou pra rua
  [G]                             [Am]
Pergunta se já me viram no cabaré
  [G]                                 [Am]
Pergunta se eu frequento a vida noturna
          [Dm]                 [E7]              [Am]
Ela vai dizer que eu sou o sonho de toda mulher

[Refrão]

[Dm]                            [Am]
Dizem que todo homem é vagabundo
        [G]           [Am]
Eu não sou, eu não sou
   [Dm]                         [Am]
Se existe alguém fiel nesse mundo
                [G]                  [Am]
Esse alguém soy yo, esse alguém soy yo

( [Dm]  [Am]  [G]  [Am] )

[Dm]                                   [Am]
Dicen que to' los hombres son vagabundos
       [G]          [Am]
Yo no soy, yo no soy
    [Dm]                           [Am]
Si existe alguien fiel en este mundo
                [G]                           [Am]
Ese alguien soy yo (soy yo), ese alguien soy yo (ey)

 [G]                                      [Am]
Pregúntale a mi bebé si yo vivo en la calle
[G]                                      [Am]
Pregúntale si me han visto en un cabaret (oh)
[G]                                      [Am]
Pregunta si yo frecuento la vida nocturna
                [Dm]                   [E7]            [Am]
¿Qué te va a decir? Que yo soy el sueño de toda mujer (ay)

[Refrão]

[Dm]                            [Am]
Dizem que todo homem é vagabundo
        [G]                        [Am]
Eu não sou (eu não sou), eu não sou (eu não sou)
   [Dm]                         [Am]
Se existe alguém fiel nesse mundo
                [G]                  [Am]
Esse alguém soy yo, esse alguém soy yo

[Dm]                                   [Am]
Dicen que to' los hombres son vagabundos (son vagabundos)
        [G]                     [Am]
Yo no soy (yo no soy), yo no soy (yo no soy)
    [Dm]                           [Am]
Si existe alguien fiel en este mundo
                [G]
Ese alguien soy yo (ese alguien soy yo)
                [Am]
Ese alguien soy yo (ese alguien soy yo, ay)`,
  },
  {
    id:            "gusttavo-lima-a-noite-la-notte",
    titulo:        "A Noite (La Notte)",
    artista:       "Gusttavo Lima",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4885,
    cifra: `[Intro] [E]  [B]  [D#m7]  [C#m7]

[Tab - Intro]

E|-----------------------------------------------------|
B|---------------------------5/7---5p4-----------------|
G|-----------------4-4h6p4-3-----------4/6-------------|
D|-4/6-64-2-------------------------------------------|
A|-----------4/6---------------------------------------|
E|-----------------------------------------------------|

[Primeira Parte]

   [E]
Palavras não bastam, não dá pra entender
      [B]
Esse medo que cresce e não para
          [D#m7]
É uma história que se complicou
                  [C#m7]
Eu sei bem o porquê

          [E]
Qual é o peso da culpa

Que eu carrego nos braços?
      [B]
Me entorta as costas e dá um cansaço
       [D#m7]
A maldade do tempo fez
                    [C#m7]
Eu me afastar de você

[Refrão]

           [B/D#]   [E]
E quando chega a noite
                   [B]
Eu não consigo dormir
                [D#m7]
Meu coração acelera
           [G#m7]
Eu sozinho aqui
        [B/D#]    [E]
Mudo o lado da cama
                 [B]
Eu ligo a televisão
                      [D#m7]
Olhos nos olhos do espelho
               [G#m7]
O telefone na mão

[Segunda Parte]

              [E]
Pro tanto que eu te queria

O perto nunca bastava
       [B]
Essa proximidade não dava
       [D#m7]
Me perdi no que era real
                  [C#m7]  [D#m7]
E no que eu inventei
        [E]
Reescrevi as memórias

Deixei o cabelo crescer
        [B]
E te dedico uma linda história, confesso
          [D#m7]
Nem a maldade do tempo
                          [C#m7]
consegue me afastar de você

[Pré-Refrão]

           [D#m7]      [E]
Te contei tantos segredos
                    [B]
Que já não eram só meus
                    [D#m7]
Rimas de um velho diário
                    [G#m7]
Que nunca me pertenceu

                     [E]
Tentei palavras não ditas
                     [B]
Tantas palavras de amor
                  [D#m7]
Nossa paixão é antiga
                    [G#m7]
E o tempo nunca passou

[Refrão]

           [D#m7]   [E]
E quando chega a noite
                   [B]
Eu não consigo dormir
                [D#m7]
Meu coração acelera
           [G#m7]
Eu sozinho aqui
        [D#m7]    [E]
Mudo o lado da cama
                 [B]
Eu ligo a televisão
                      [D#m7]
Olhos nos olhos do espelho
                     [G#m7]
O telefone na minha mão

Yeah, yeah, yeah, yeah

( [E]  [B]  [D#m7]  [C#m7])

[Final]

                  [E]
E quando chega a noite
                   [B]
Eu não consigo dormir
                [D#m7]
Meu coração acelera
           [G#m7]
Eu sozinho aqui
        [D#m7]    [E]
Mudo o lado da cama
                 [B]
Eu ligo a televisão
                      [D#m7]
Olhos nos olhos do espelho
       [G#m7]
O telefone na minha mão

( [E] )

          [B]
Na minha mão`,
  },
  {
    id:            "gusttavo-lima-apelido-carinhoso",
    titulo:        "Apelido Carinhoso",
    artista:       "Gusttavo Lima",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4310,
    cifra: `[Intro]  [Dm]  [F]  [C]  [G]

[Primeira Parte]

[Dedilhado - Primeira Parte - Primeira Estrofe]

Parte 1 de 4
   [Am]
E|------------------------------------------|
B|-------1-----1-----1-----1p0--------------|
G|-----2---2-----2-----2-------2-0----------|
D|---2-------2-----2-----2------------------|
A|-0----------------------------------------|
E|------------------------------------------|

Parte 2 de 4
   [F9]
E|-------3-----3-----3-----3----------------|
B|-----1---1-----1-----1-----1--------------|
G|---2-------2-----2-----2-----2------------|
D|-3----------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 4
   [G]
E|------------------------------------------|
B|-----------------3-8~---------------------|
G|-----------0-2/4--------------------------|
D|---------0--------------------------------|
A|-0---0h2----------------------------------|
E|---3--------------------------------------|

Parte 4 de 4
   [Am]
E|-8-----7-----5----------------------------|
B|-5-5-----5-----5---8------5h6p5--3--------|
G|-5---5-----5-----5---5--------------------|
D|-7---------------------7--5h7p5--3--------|
A|------------------------------------------|
E|------------------------------------------|

[Dedilhado - Primeira Parte - Primeira Estrofe]

Parte 1 de 4
   [Am]
E|------------------------------------------|
B|-1-----1------1------1----1p0-------------|
G|-2--2-----2------2-----2------2-0---------|
D|-2----2-----2------2-----2----------------|
A|-0----------------------------------------|
E|------------------------------------------|

Parte 2 de 4
   [F9]
E|-------3-----3-----3----------------------|
B|-----1---1-----1-----1--------------------|
G|---2-------2-----2-----2-2p0--------------|
D|-3---------------------------3-2----------|
A|------------------------------------------|
E|------------------------------------------|

Parte 3 de 4
   [G]
E|------------------------------------------|
B|-------3-----3-----3-----3/53--1p0-------|
G|-----0---0-----0-----0--------------------|
D|---0-------0-----0-----0------------------|
A|------------------------------------------|
E|-3----------------------------------------|

Parte 4 de 4
   [Am]
E|--------------------0---------------------|
B|-------1-----1------1---------------------|
G|-----2---2-----2----2---------------------|
D|---2-------2--------2---------------------|
A|-0------------------0---------------------|
E|------------------------------------------|

[Am]                              [F9]
   Amor, não é segredo entre a gente
                          [G]
Que o meu término é recente
                                   [Am]
E você tá arrumando o que ela revirou

[Am]                          [F9]
   E esse sentimento pendente
                                 [G]
Que insiste em bagunçar a minha mente
                                     [Am]
Vai passar um dia, mas ainda não passou

[Pré-Refrão]

[Dm]
   Eu sei que você poderia ter
      [F]
Escolhido alguém menos complicado
[C]
  Que não tivesse no presente
        [G]
Uma pessoa do passado

[Dm]
   Aceitar essa situação
       [F]
É uma forma de amor
[C]
  Mas eu preciso que você
         [G]
Me faça só mais um favor

[Refrão]

[Dm]
   Ainda não me chame de meu nego
[F]                          [C]
  Ainda não me chame de bebê

Porque era assim que ela me chamava
[G]
  E um apelido carinhoso
                          [Dm]
É o mais difícil de esquecer

                           [C/E]  [F]
Ainda não me chame de meu nego
                         [C]
Ainda não me chame de bebê

Porque era assim que ela me chamava
[G]
  E um apelido carinhoso
                        [Dm]
É o mais difícil de esquecer

( [Dm]  [F]  [C]  [G] )

[Pré-Refrão]

[Dm]
   Eu sei que você poderia ter
      [F]
Escolhido alguém menos complicado
[C]
  Que não tivesse no presente
        [G]
Uma pessoa do passado

[Dm]
   Aceitar essa situação
       [F]
É uma forma de amor
[C]
  Mas eu preciso que você
         [G]
Me faça só mais um favor

[Refrão Final]

[Dm]
   Ainda não me chame de meu nego
[F]                          [C]
  Ainda não me chame de bebê

Porque era assim que ela me chamava
[G]
  E um apelido carinhoso
                          [Dm]
É o mais difícil de esquecer

                           [C/E]  [F]
Ainda não me chame de meu nego
                         [C]
Ainda não me chame de bebê

Porque era assim que ela me chamava
[G]
  E um apelido carinhoso
                        [Dm]
É o mais difícil de esquecer

   Ainda não me chame de meu nego
[F]                          [C]
  Ainda não me chame de bebê

Porque era assim que ela me chamava
[G]
  E um apelido carinhoso
                          [Dm]
É o mais difícil de esquecer

                           [C/E]  [F]
Ainda não me chame de meu nego
                         [C]
Ainda não me chame de bebê

Porque era assim que ela me chamava
[G]
  E um apelido carinhoso
                        [Dm7]
É o mais difícil de esquecer

[Tab - Frase Final]

   [Dm7]                      [F]
E|-5------------------------1---------------|
B|-6-5-6-5-6-5-6-5-6-5-6-5--1---------------|
G|-5-5-5-5-5-5-5-5-5-5-5-5--2---------------|
D|-7-5-7-5-7-5-7-5-7-5-7-5--3---------------|
A|-5------------------------3---------------|
E|--------------------------1---------------|`,
  },
  {
    id:            "gusttavo-lima-desejo-imortal",
    titulo:        "Desejo Imortal",
    artista:       "Gusttavo Lima",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1705,
    cifra: `[Intro] [A]  [D]

[Tab - Intro]

        [A]         [D]
E|-10-9---------------10-9------------------|
B|------10--10-12----------10---------------|
G|----------------11----------11-9----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

         [A]
Fecho os olhos, tiro a roupa
 [A/C#]   [D]          [E]
Só sua boca tem o mel
    [A]           [A/C#]  [D]
Que acalma meu de____sejo
   [A/C#]  [Bm7]        [E]
E me    leva até o céu

[Pré-Refrão 1]

     [F#m]   [E/G#]  [A]
Surreal e bom demais
               [D]  [E]
Pena que toda vez

[Refrão 1]

              [A]
A gente faz amor
            [A/C#]  [D]
E eu me sinto    mal
             [A/C#]  [Bm7]
Você já tem al___guém
  [F#m]      [E]
E acha normal
              [A]
A gente faz amor
               [D]
E eu me sinto mal
              [A/C#]  [Bm7]
Mas eu quero de    novo
         [F#m]        [E]  [F]
O meu desejo é imortal

[Segunda Parte]

         [Bb]
Fecho os olhos, tiro a roupa
        [Bb4]        [F]
Só sua boca tem o mel
    [Bb]          [Bb/D]  [Eb]
Que acalma meu de____sejo
   [Bb/D]  [Cm7]        [F]
E me    leva até o céu

[Pré-Refrão 2]

     [Gm]    [F/A]   [Bb]
Surreal e bom demais
               [Eb]
Pena que toda vez
               [F]
Pena que toda vez

[Refrão 2]

              [Bb]
A gente faz amor
            [Bb/D]  [Eb]
E eu me sinto    mal
                [Bb/D]  [Cm7]
Você já tem alguém
  [Gm]       [F]
E acha normal

              [Bb]
A gente faz amor
               [Bb/D]  [Eb]
E eu me sinto mal
              [Bb/D]  [Cm7]
Mas eu quero de    novo
         [Gm]         [F]
O meu desejo é imortal

              [Bb]
A gente faz amor
               [Fm]
E eu me sinto mal
                 [Eb]
Mas eu quero de novo
                 [F]
De novo, de novo
               [Bb]  [F]
Eu fecho os olhos`,
  },
  {
    id:            "gusttavo-lima-rosas-versos-e-vinhos",
    titulo:        "Rosas, Versos e Vinhos",
    artista:       "Gusttavo Lima",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 509,
    cifra: `[Intro] [B]  [E]  [B]  [E]  [B]

[Primeira Parte]

[B]                             [E]
É, às vezes acho que estou enlouquecendo
       [B]                           [E]
Por você fujo, viajo no tempo, me submetendo
  [B/D#] [C#m11]        [B]                     [F#/A#]
Pra você meu mundo gira em preto em branco
       [F#]
E colorido
       [C#m11]       [B]
Sem você saio do presente pro passado
   [F#/A#]              [F#]   [B]  [E]  [B]
E no futuro eu tô perdido

[Refrão]

             [B9]
Por você eu mudo o jeito de viver
             [G#m7]
Vou ouvir vinil em vez de ouvir CD
             [E]             [C#m7]
Por você eu deixo a badalação
          [F#]           ( [F#]  [E/G#]  [F#/A#] )
Faço serenata, voz e violão

              [B9]
Largo essa cidade pra morar no campo
          [G#m7]
Faço penitência troco até de santo
             [E9]         [C#m11]
Por você cancelo a reunião
             [F#]
O meu compromisso é com seu coração

          [F#/A#]       [B9]
Mas me espera que eu tô chegando
 [G#m7]
Tô levando
 [E]       [B/D#]     [C#m7]
Rosas e versos e vinhos
      [F#7]         [B9]
Me espera que eu tô chegando
 [G#m7]
Tô voltando
 [E]       [B/D#]      [C#m11]      [B9]       [F#/A#]
Seja no tempo que for eu só quero esse amor

( [G#m]  [F#] )

[B]                        [E]
É, agora separar a gente

O tempo é incapaz

Por você

[Solo] [B]  [E]  [A]  [F#]

E|------------------------------------------|
B|---------------75--4-----5p4-------------|
G|-------------8--------4~------4-----------|
D|---------6h9---------------------4/6------|
A|-----6h9-----------------------------7----|
E|-7h9-----------------------------------7~-|

           \/
E|------------------------------------------|
B|-/9-11-12-------12b14r12-------11--12--14-|
G|------------9-9----------9-9~-------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|-11b12r11p9-11~/-19~----------------------|
B|------------------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Refrão]

             [B]
Por você eu mudo o jeito de viver
             [G#m7]
Vou ouvir vinil em vez de ouvir CD
             [E9]            [C#m7]
Por você eu deixo a badalação
          [F#7]          ( [F#]  [E/G#]  [F#/A#] )
Faço serenata, voz e violão

              [B]
Largo essa cidade pra morar no campo
          [G#m]
Faço penitência troco até de santo
             [E]          [C#m7]
Por você cancelo a reunião
             [F#]
O meu compromisso é com seu coração

          [F#/A#]       [B9]
Mas me espera que eu tô chegando
 [G#m7]
Tô levando
 [E]       [B/D#]     [C#m11]
Rosas e versos e vinhos
      [F#7]         [B9]
Me espera que eu tô chegando
 [G#m7]
Tô voltando
 [E9]      [B/D#]      [C#m11]      [B9]       [F#/A#]
Seja no tempo que for eu só quero esse amor

( [G#m]  [F#] )

[B9]                      [E9]
É, eu acho que estou enlouquecendo
       [B7M]
Por você!`,
  },
  {
    id:            "gusttavo-lima-abre-o-portao-que-eu-cheguei",
    titulo:        "Abre o Portão Que Eu Cheguei",
    artista:       "Gusttavo Lima",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1758,
    cifra: `[Intro] [A]  [E]  [D2]

E|------------------------------------------|
B|-3/5-5-3---------3/5-5-3------------------|
G|---------4/6-4-2---------4/6-4-2----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-------------3-3-2-3-3/5-5----------------|
G|-2h4-4-4/6-2------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

      [A]
Tá me achando com cara de bobo?

Por que tá me ligando de novo?
       [D2]
Dessa vez eu só tô te atendendo pra dizer

Que ontem foi a nossa última vez
      [A]
Você deve se achar muito esperta

Toda vez com a mesma conversa
     [D2]
Me ilude me leva no chão

E quando vou dormir
                          [F#m]
Já estou com você na sua cama

[Pré-Refrão]

           [E]               [D2]
Eu não consigo entender você

Sempre me diz que é amor mas
                   [F#m]
Só me quer por prazer
           [E]
Olha pra trás veja tudo o que fez
[D2]
   Agora quer brincar comigo

E não vai ter outra vez

[Refrão]

[A]
  Tô cansando de sair no meio da noite e te satisfazer
[E/G#]
     E um minuto depois de matar minha vontade eu me arrepender
[F#m]                 [E]
    Sair de madrugada, do meio da balada
              [D2]
Largar minha vida pra vir ver você

Só pra vir ver você

[A]
  Cê sabe que eu sou louco por você e que me tem nas mãos
[E/G#]
     E confesso que às vezes me pego esperando a sua ligação
[F#m]                  [E]                     [D2]
    Tava fora de mim,  esquece o que eu falei
                          [A]  [E]  [D2]
Abre o portão que eu cheguei

[Solo]

E|------------------------------------------|
B|-3/5-5-3---------3/5-5-3------------------|
G|---------4/6-4-2---------4/6-4-2----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-------------3-3-2-3-3/5-5----------------|
G|-2h4-4-4/6-2------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Pré-Refrão]

[F#m]            [E]               [D2]
    Eu não consigo entender você

Sempre me diz que é amor mas
                   [F#m]
Só me quer por prazer
           [E]
Olha pra trás veja tudo o que fez
[D2]
   Agora quer brincar comigo

E não vai ter outra vez

[Refrão]

[A]
  Tô cansando de sair no meio da noite e te satisfazer
[E/G#]
     E um minuto depois de matar minha vontade eu me arrepender
[F#m]                 [E]
    Sair de madrugada, do meio da balada
              [D2]
Largar minha vida pra vir ver você

Só pra vir ver você

[A]
  Cê sabe que eu sou louco por você e que me tem nas mãos
[E/G#]
     E confesso que às vezes me pego esperando a sua ligação
[F#m]                  [E]                     [D2]
    Tava fora de mim,  esquece o que eu falei
                          [A]  [E]  [D2]
Abre o portão que eu cheguei

[Solo]

E|------------------------------------------|
B|-3/5-5-3---------3/5-5-3------------------|
G|---------4/6-4-2---------4/6-4-2----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-------------3-2---3-3/5-5----------------|
G|-2h4-4-4/6-2-----2------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Refrão]

[A]
  Tô cansando de sair no meio da noite e te satisfazer
[E/G#]
     E um minuto depois de matar minha vontade eu me arrepender
[F#m]                 [E]
    Sair de madrugada, do meio da balada
              [D2]
Largar minha vida pra vir ver você

Só pra vir ver você

[A]
  Cê sabe que eu sou louco por você e que me tem nas mãos
[E/G#]
     E confesso que às vezes me pego esperando a sua ligação
[F#m]                  [E]                     [D2]
    Tava fora de mim,  esquece o que eu falei
                          [A]  [E]  [D2]
Abre o portão que eu cheguei

[Final]

E|------------------------------------------|
B|-3/5-5-3---------3/5-5-3------------------|
G|---------4/6-4-2---------4/6-4-2----------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

E|------------------------------------------|
B|-3p2---3-3/5------------------------------|
G|-----2-------2----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|`,
  },
  {
    id:            "gusttavo-lima-sujeito",
    titulo:        "Sujeito",
    artista:       "Gusttavo Lima",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2255,
    cifra: `[Intro] [G]  [A]  [Bm]
        [G]  [A]  [Bm]

   [G]         [A]       [Bm]
E|------------------------------------------|
B|-----3-2------5----5/7-5-3----------------|
G|------------6---7----------4--------------|
D|---5--------------------------------------|
A|------------------------------------------|
E|-3--------5-------------------------------|

   [G]         [A]       [Bm]
E|-----------------------5------------------|
B|-----3-2------5----5/7---75-3------------|
G|------------6---7-------------------------|
D|---5--------------------------------------|
A|------------------------------------------|
E|-3--------5-------------------------------|

[Primeira Parte]

[G]                                       [D]
  Do que adianta apagar meu número da agenda
         [Bm7]                                     [A]
Se você sabe que ele tá gravado dentro da sua memória?
[G]                                         [D]
  Do que adianta tomar todas no fim de semana
    [Bm7]                                        [A]
Se na segunda feira vai se repetir a mesma história?

[Riff]

E|------------------------------------------|
B|-3p2--------------------------------------|
G|-----2-4----------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Pré-Refrão]

              [G]                  [D]
Você vai acordar, se olhar no espelho
              [Bm7]                 [A]
E aí vai lembrar que existe um sujeito
                                  [G]
Que você tenta e não consegue esquecer
                       [A]
Que não consegue esquecer

[Refrão]

    [G]
E quando se tocar que não tem volta
    [D9]
Cê vai querer voltar, faço uma aposta
 [Bm7]
Vai sentir, por dentro, tão vazia
     [A9]
Vai ver que era feliz e não sabia
 [G]
Vai sobrar espaço na sua cama
     [D9]
Mas vai faltar alguém pra dizer que te ama
     [Bm7]
Mas mesmo ele tendo mil defeitos
     [A9]
Ninguém te completava como aquele sujeito

[Solo] [G]  [A]  [Bm]
       [G]  [A]  [Bm]

   [G]         [A]       [Bm]
E|------------------------------------------|
B|-----3-2------5----5/7-5-3----------------|
G|------------6---7----------4--------------|
D|---5--------------------------------------|
A|------------------------------------------|
E|-3--------5-------------------------------|

   [G]         [A]       [Bm]
E|-----------------------5-----------5/7/10-|
B|-----3-2------5----5/7---75-3-5/7--------|
G|------------6---7-------------------------|
D|---5--------------------------------------|
A|------------------------------------------|
E|-3--------5-------------------------------|

[Pré-Refrão]

              [G]                  [D]
Você vai acordar, se olhar no espelho
              [Bm7]                 [A]
E aí vai lembrar que existe um sujeito
                                  [G]
Que você tenta e não consegue esquecer
                       [A]
Que não consegue esquecer

[Refrão]

    [G]
E quando se tocar que não tem volta
    [D9]
Cê vai querer voltar, faço uma aposta
 [Bm7]
Vai sentir, por dentro, tão vazia
     [A9]
Vai ver que era feliz e não sabia
 [G]
Vai sobrar espaço na sua cama
     [D9]
Mas vai faltar alguém pra dizer que te ama
     [Bm7]
Mas mesmo ele tendo mil defeitos
     [A9]
Ninguém te completava

    [G]
E quando se tocar que não tem volta
    [D9]
Cê vai querer voltar, faço uma aposta
 [Bm7]
Vai sentir, por dentro, tão vazia
     [A9]
Vai ver que era feliz e não sabia
 [G]
Vai sobrar espaço na sua cama
     [D9]
Mas vai faltar alguém pra dizer que te ama
     [Bm7]
Mas mesmo ele tendo mil defeitos
     [A9]
Ninguém te completava como aquele sujeito

[Final] [G]  [A]  [Bm]
        [G]  [A7M]

   [G]         [A]       [Bm]
E|------------------------------------------|
B|-----3-2------5----3-2--------------------|
G|------------6----------2------------------|
D|---5--------------------------------------|
A|------------------------------------------|
E|-3--------5-------------------------------|

   [G]              [A7M]  [G]  [D]
E|------------------------------------------|
B|-------3-5/7-5----------3-----------------|
G|-----4------------6--0--2-----------------|
D|---5------------6----0--4-----------------|
A|-5-------------------2--5-----------------|
E|---------------------3--------------------|

       [G]                              [D]
De que adianta apagar meu número da agenda`,
  },
  {
    id:            "gusttavo-lima-60-segundos",
    titulo:        "Segundos",
    artista:       "Gusttavo Lima",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1557,
    cifra: `[Intro] [A9]  [A9/B]  [C#m7]  [B9]  [F#/A#]
        [A9]  [A9/B]  [C#m7]  [B9]  [A]

[Primeira Parte]

            [E]          [A9]
Me dê um minuto pra falar
           [C#m7]      [B]        [E]
Que eu preciso de você, meu amor
                                   [A9]
Cinquenta e nove segundos é o que resta
          [C#m7]        [B]          [E]
Pra entender essa paixão no meu peito

[Pré-Refrão]

        [A9]
Cada segundo que se passa
        [A9/B]
Mais aumenta essa vontade
        [G#m7]
Esse desejo
         [C#m7]
Essa paixão

  [B9]      [A9]
Que me domina, me fascina
       [A9/B]                [F#m7]
O seu jeito de menina tão linda, aah
            [E]              [B4]
Você enlouquece o meu coração
              [A9]             [B4] ( [B] )
Você sabe que eu tô em suas mãos

[Refrão]

                  [E]
O tempo passa depressa
                    [B9]
Quando estou com você
                  [C#m7]
As horas viram minutos
                  [G#m7]
Não consigo entender
                           [A]
E o que eu mais quero é viver ao teu lado
 [E/G#]          [F#]  [B4]  [B]
Cada segundo amor

                  [E]
O tempo passa depressa
                    [B9]
Quando estou com você
                  [C#m7]
As horas viram minutos
                  [G#m7]
Não consigo entender
                           [A]
E o que eu mais quero é viver ao teu lado
 [E/G#]          [F#]
Cada segundo amor
      [B4]            [B]        [A9]
Te fazer feliz por toda vida

[Pré-Refrão]

        [A9]
Cada segundo que se passa
        [A9/B]
Mais aumenta essa vontade
        [G#m]
Esse desejo
         [C#m]
Essa paixão

          [A9]
Que me domina, me fascina
       [A9/B]                [F#m7]
O seu jeito de menina tão linda, aah
            [E]              [B9]
Você enlouquece o meu coração
              [A9]             [B4] ( [C] )
Você sabe que eu tô em suas mãos

[Refrão]

                  [F]
O tempo passa depressa
                    [C]
Quando estou com você
                  [Dm]
As horas viram minutos
                  [Am7]
Não consigo entender
                           [Bb9]
E o que eu mais quero é viver ao teu lado
 [F/A]           [G]  [C]
Cada segundo amor

                  [F]
O tempo passa depressa
                    [C]
Quando estou com você
                  [Dm]
As horas viram minutos
                  [Am7]
Não consigo entender
                           [Bb9]
E o que eu mais quero é viver ao teu lado
 [F/A]           [G]
Cada segundo amor
      [C]                    [Bb9]
Te fazer feliz por toda vida
                         [F]
Te fazer feliz por toda vida`,
  },
  {
    id:            "gusttavo-lima-jejum-de-amor",
    titulo:        "Jejum de Amor",
    artista:       "Gusttavo Lima",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1034,
    cifra: `Intro: [E/B]
       [C#m]  [B9]  [A9]  [B9]  [E]  [B/D#]
       [C#m]  [B9]  [A9]  [B9]  [E]

Solo :

E|--------------------------------------|
B|----------5-4-4/5--5-5-5-5-2/4-4-4-2--|
G|--4-4-4-4---------------------------4-|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|

E|----------------------|
B|----------------------|
G|-4-6-4h6p4-4-4/6------|
D|----------7-----4-4/6-|
A|----------------------|
E|----------------------|

E|-----------------------------------------|
B|-----------5-4-5/75--5-5-5-5-2/4-4-4-2--|
G|--4-4-4-4------------------------------4-|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|

E|----------------------|
B|----------------------|
G|--------4-4/6-4-------|
D|-6-7-6-7-------4-4/6--|
A|----------------------|
E|----------------------|


 [B/D#]         [C#m]               [B9]
Não sou de ficar mais de uma semana sem amor
 [A9]            [B9]            [E]
Sem um beijo, sem um corpo, tá difícil
 [B/D#]          [C#m]           [B9]
Deixa eu te falar, eu vou fazer jejum de amor
  [A9]
Pra provar o que eu sinto

[E]                [B/D#]      [C#m]
 Quer saber? Eu tô arrependido
                           [B/D#]
Porque não falei no seu ouvido
                       [A9]
As frases de amor que não falei
               [E]
Em nosso cobertor
      [B/D#]      [C#m]                   [B/D#]
Sentimento proibido, até parece impossível
                     [A9]                       [B9]
Quer saber? Eu necessito ter de volta seu calor

( [A/C#]  [B/D#] )

Refrão:

            [C#m]
Sua boca é minha
          [A9]
Domina a minha
                  [E]                        [B9]
E o que é que as duas estão fazendo tão sozinhas?
            [C#m]
Sua boca é minha
          [A9]
Domina a minha
                  [E]                        [B9]
E o que é que as duas estão fazendo tão sozinhas?
                  [C#m]
Ai, ai, ai, boca minha

Solo: [B9]  [A9]  [B9]  [E]  [B/D#]
      [C#m]  [B9]  [A9]  [B9]  [E]

E|--------------------------------------|
B|----------5-4-4/5--5-5-5-5-2/4-4-4-2--|
G|--4-4-4-4---------------------------4-|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|

E|----------------------|
B|----------------------|
G|-4-6-4h6p4-4-4/6------|
D|----------7-----4-4/6-|
A|----------------------|
E|----------------------|

E|-----------------------------------------|
B|-----------5-4-5/75--5-5-5-5-2/4-4-4-2--|
G|--4-4-4-4------------------------------4-|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|

E|----------------------|
B|----------------------|
G|--------4-4/6-4-------|
D|-6-7-6-7-------4-4/6--|
A|----------------------|
E|----------------------|

 [B/D#]         [C#m]               [B9]
Não sou de ficar mais de uma semana sem amor
 [A9]            [B9]            [E]
Sem um beijo, sem um corpo, tá difícil
 [B/D#]          [C#m]           [B9]
Deixa eu te falar, eu vou fazer jejum de amor
  [A9]
Pra provar o que eu sinto

[E]                [B/D#]      [C#m]
 Quer saber? Eu tô arrependido
                           [B/D#]
Porque não falei no seu ouvido
                       [A9]
As frases de amor que não falei
               [E]
Em nosso cobertor

      [B/D#]      [C#m]                   [B/D#]
Sentimento proibido, até parece impossível
                     [A9]                       [B9]
Quer saber? Eu necessito ter de volta seu calor

( [A/C#]  [B/D#] )

Refrão:

            [C#m]
Sua boca é minha
          [A9]
Domina a minha
                  [E]                        [B9]
E o que é que as duas estão fazendo tão sozinhas?
            [C#m]
Sua boca é minha
          [A9]
Domina a minha
                  [E]                        [B9]
E o que é que as duas estão fazendo tão sozinhas?
            [C#m]
Sua boca é minha
          [A9]
Domina a minha
                  [E]                        [B9]
E o que é que as duas estão fazendo tão sozinhas?
                  [C#m]
Ai, ai, ai, boca minha

Final: [B9]  [A9]  [B9]  [E]  [B/D#]
       [C#m]  [B9]  [A9]  [B9]  [E]

E|--------------------------------------|
B|----------5-4-4/5--5-5-5-5-2/4-4-4-2--|
G|--4-4-4-4---------------------------4-|
D|--------------------------------------|
A|--------------------------------------|
E|--------------------------------------|

E|----------------------|
B|----------------------|
G|-4-6-4h6p4-4-4/6------|
D|----------7-----4-4/6-|
A|----------------------|
E|----------------------|

E|-----------------------------------------|
B|-----------5-4-5/75--5-5-5-5-2/4-4-4-2--|
G|--4-4-4-4------------------------------4-|
D|-----------------------------------------|
A|-----------------------------------------|
E|-----------------------------------------|

E|----------------------|
B|----------------------|
G|--------4-4/6-4-------|
D|-6-7-6-7-------4-4/6--|
A|----------------------|
E|----------------------|`,
  },
  {
    id:            "gusttavo-lima-fui-fiel",
    titulo:        "Fui Fiel",
    artista:       "Gusttavo Lima",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 3805,
    cifra: `Intro:

E|------7--------------------------------5/7-----7-----------------|
B|--7/6---7-9-7------7-9-7------10-9-10------7/9---7-9-7-----7-9-7-|
G|--------------9-6--------9-6---------------------------9-6-------|
D|-----------------------------------------------------------------|
A|-----------------------------------------------------------------|
E|-----------------------------------------------------------------|

E|-----------|
B|-----------|
G|--9-6-6/9--|
D|-----------|
A|-----------|
E|-----------|


Primeira Parte:

[E]              [B]
  Foi bonito, foi, foi intenso
 [F#m]             [A]
Foi verdadeiro, mais sincero
[E]                [B]              [F#m]
  Sei que fui capaz, fiz até demais
         [A]
Te quis do teu jeito

[E]         [B]            [F#m]
  Te amei,  te mostrei     que o meu amor
       [A]
Foi o mais profundo
[E]         [B]                     [F#m]
  Me doei,  me entreguei, fui fiel
    [A]
Chorei, chorei

Refrão 2x:

 [E]                          [B]
Hoje eu acordei, me veio a falta de você
    [F#m]              [A]
Saudade de você, saudade de você
     [E]                         [B]
Lembrei que me acordava de manhã só pra dizer
     [F#m]              [A]
Bom dia, meu bebê, te amo, meu bebê

(repete tudo)`,
  },
  {
    id:            "gusttavo-lima-cor-de-ouro",
    titulo:        "Cor de Ouro",
    artista:       "Gusttavo Lima",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2664,
    cifra: `[Intro] [B5(9)]  [F#]  [G#m]  [E]
        [B5(9)]  [F#]  [G#m]  [E]

[Violão 1]

E|-------11---------9------------------------11---7--|
B|----12---------11---12-11h12p11---------12------9--|
G|-11---------11------------------11---11---------9--|
D|---------------------------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Violão 2]

E|---------------------------------------------------|
B|---------------------------------------------------|
G|--8-8-8-8-8-8-8-8--6-6-6-6-6-6-6-6-----------------|
D|--9-9-9-9-9-9-9-9--8-8-8-8-8-8-8-8-----------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

E|---------------------------------------------------|
B|---------------------------------------------------|
G|--8-8-8-8-8-8-8-8--9-9-9-9-9-9-9-9-----------------|
D|--9-9-9-9-9-9-9-9--9-9-9-9-9-9-9-9-----------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Primeira Parte]

[B5(9)]                     [F#]
     Nunca pensei que um dia fosse ser assim
[G#m]                        [E]
    Você chegou sem dizer nada tomou conta de mim
[B5(9)]                  [F#]
     Antes de você chegar só tinha solidão
[G#m]                     [E]
    Somente marcas e feridas no meu coração

[Frase Pré-Refrão - violão 2]

E|--3/4----------------------------------------------|
B|------7-5-4----------------------------------------|
G|------------6-4---6--------------------------------|
D|----------------6----------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Pré-Refrão]

[C#m]         [E]                   [B5(9)]
    Amor você é tudo que eu preciso
[C#m]                    [E]               [F#]
    Com você eu to no céu eu tô no paraíso

[Violão 2]

E|-11--9--7------------------------------------------|
B|-----------9-9p7-------------9h10p9----------------|
G|-11--9--8---------9-8------9--------9--------------|
D|----------------------9-11-------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Refrão]

[B5(9)]                   [F#]
     Esse cabelo cor de ouro é que me deixa louco
[C#m]                        [E]
    Esse sorriso nos seus lábios que eu me entrego todo
[B5(9)]                        [F#]
     Não sei mais ver minha vida sem você por perto
[C#m]                  [E]          [F#]
    Amor sem você comigo a vida é um deserto

[B5(9)]                   [F#]
     Esse cabelo cor de ouro é que me deixa louco
[C#m]                        [E]
    Esse sorriso nos seus lábios que eu me entrego todo
[B5(9)]                        [F#]
     Não sei mais ver minha vida sem você por perto
[C#m]                  [E]          [F#]
    Amor sem você comigo a vida é um deserto

[Solo] [B5(9)]  [F#]  [C#m]  [E]
       [B5(9)]  [F#]  [C#m]  [E]  [F#]

[Solo - violão 2]

E|---------------------------------------------------|
B|--------------------9-11-11/12---------------------|
G|-8-8-8-8-8-9-11-11-------------9-8-9-8------8-----|
D|----------------------------------------9-11-------|
A|---------------------------------------------------|
E|---------------------------------------------------|

E|---------------------------------------------------|
B|--------------------9-11-11/12---------------------|
G|-8-8-8--8-9-11-11--------------9-8-9-8------------|
D|----------------------------------------9-11-------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Primeira Parte]

[B5(9)]                     [F#]
     Nunca pensei que um dia fosse ser assim
[G#m]                        [E]
    Você chegou sem dizer nada tomou conta de mim
[B5(9)]                  [F#]
     Antes de você chegar só tinha solidão
[G#m]                     [E]
    Somente marcas e feridas no meu coração

[Frase Pré-Refrão - violão 2]

E|--3/4----------------------------------------------|
B|------7-5-4----------------------------------------|
G|------------6-4---6--------------------------------|
D|----------------6----------------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Pré-Refrão]

[C#m]         [E]                   [B5(9)]
    Amor você é tudo que eu preciso
[C#m]                    [E]               [F#]
    Com você eu to no céu eu tô no paraíso

[Violão 2]

E|-11--9--7------------------------------------------|
B|------------9-9p7------------9h10p9----------------|
G|-11--9--8---------9-8------9--------9--------------|
D|----------------------9-11-------------------------|
A|---------------------------------------------------|
E|---------------------------------------------------|

[Refrão]

[B5(9)]                   [F#]
     Esse cabelo cor de ouro é que me deixa louco
[C#m]                        [E]
    Esse sorriso nos seus lábios que eu me entrego todo
[B5(9)]                        [F#]
     Não sei mais ver minha vida sem você por perto
[C#m]                  [E]          [F#]
    Amor sem você comigo a vida é um deserto

[B5(9)]                   [F#]
     Esse cabelo cor de ouro é que me deixa louco
[C#m]                        [E]
    Esse sorriso nos seus lábios que eu me entrego todo
[B5(9)]                        [F#]
     Não sei mais ver minha vida sem você por perto
[C#m]                  [E]          [F#]
    Amor sem você comigo a vida é um deserto

[B5(9)]                   [F#]
     Esse cabelo cor de ouro é que me deixa louco
[C#m]                        [E]
    Esse sorriso nos seus lábios que eu me entrego todo
[B5(9)]                        [F#]
     Não sei mais ver minha vida sem você por perto
[C#m]                  [E]          [F#]           [B5(9)]
    Amor sem você comigo a vida é um deserto`,
  },
  {
    id:            "joao-mineiro-e-marciano-ainda-ontem-chorei-de-saudade",
    titulo:        "Ainda Ontem Chorei de Saudade",
    artista:       "João Mineiro e Marciano",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4364,
    cifra: `[Intro] [C]  [Dm]  [G]  [C]  [G]
        [C]  [C7]  [F]  [C]  [G]  [C]

[Primeira Parte]

 [C]               [Am]
Você me pede na carta
              [Dm]
Que eu desapareça
    [G]
Que eu nunca mais te procure
                  [C]   [G]
Pra sempre te esqueça

 [C]                  [Am]
Posso fazer sua vontade
               [Dm]
Atender seu pedido
 [G]
Mas esquecer é bobagem
            [C]   [G]
É tempo perdido

[Refrão]

[C]                         [G]
Ainda ontem chorei de saudade
                                [C]   [G]
Relendo a carta, sentindo o perfume
 [C]
Mas que fazer com essa dor
          [G]
Que me invade
                              [C]   [G]
Mato esse amor ou me mata o ciúme

( [C]  [Dm]  [G]  [C]  [G] )
( [C]  [C7]  [F]  [C]  [G]  [C] )

[Segunda Parte]

[C]                  [Am]
O dia inteiro te odeio
              [Dm]
Te busco, te caço
 [G]
Mas em meu sonho de noite
                 [C]   [G]
Te beijo e te abraço

 [C]                    [Am]
Porque os sonhos são meus
                     [Dm]
Ninguém rouba e nem tira
 [G]
Melhor sonhar na verdade
                [C]   [G]
Que amar na mentira

[Refrão Final]

[C]                         [G]
Ainda ontem chorei de saudade
                                [C]   [G]
Relendo a carta, sentindo o perfume
 [C]
Mas que fazer com essa dor
          [G]
Que me invade
                              [C]
Mato esse amor ou me mata o ciume

[Final] [F]  [C]  [G]
        [C]  [G]  [C]`,
  },
  {
    id:            "joao-mineiro-e-marciano-seu-amor-ainda-e-tudo",
    titulo:        "Seu Amor Ainda é Tudo",
    artista:       "João Mineiro e Marciano",
    tom:           "B",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 628,
    cifra: `[Intro] [Bm]  [Em]  [A]  [D]  [F#7]

[Primeira Parte]

  [Bm]                                  [Em]
Muito prazer em revê-la, você está bonita
[F#7]                                      [Bm]
Muito elegante, mais jovem, tão cheia de vida
[Bm]                                 [Em]
Eu ainda falo de flores e declamo seu nome
[F#7]                                    [B]     [F#7]
Mesmo meus dedos me traem e disco seu telefone

[Refrão]

 [B]      [B7M]       [B6]         [B7M] [B]
É, minha cara, mudei, minha cara
                      [E]
Mas por dentro eu não mudo
 [C#m]   [C#m7M]   [C#m7]      [C#m6]         [F#7]
O sentimento não para, a doença não sara
                 [B]     [F#7]
Seu amor ainda é tudo, tudo

[B]                  [G#m]             [C#m]  [C#m7M]  [C#m7]  [C#m6]
Daquele momento até hoje esperei você
   [F#7]                                 [B]  [E]  [F#7]
Daquele maldito momento até hoje, só você
   [B]                  [G#m]               [C#m]  [C#m7M]  [C#m7]  [C#m6]
Eu sei que o culpado de não ter você sou eu
 [F#7]                                [B] [F#7]   [B]
E esse medo terrível de amar outra vez é meu

( [Bm]  [Em]  [Bm] )
( [F#7]  [Bm]  [F#7] )

[Segunda Parte]

 [Bm]                             [Em]
Sei, não devia dizer, disse perdoa
[F#7]                                    [Bm]
Bem que eu queria encontrá-la e sorrir numa boa
[Bm]                                  [Em]
Mas convenhamos a vida nos faz tão pequenos
[F#7]                                    [B]     [F#7]
Nos preparamos pra muito e choramos por menos

[Refrão]

  [B]     [B7M]       [B6]         [B7M] [B]
É, minha cara, mudei, minha cara
                      [E]
Mas por dentro eu não mudo
 [C#m]   [C#m7M]   [C#m7]     [C#m6]         [F#7]
O sentimento não pára a doença não sara
                 [B]     [F#7]
Seu amor ainda é tudo, tudo

[B]                  [G#m]             [C#m]  [C#m7M]  [C#m7]  [C#m6]
Daquele momento até hoje esperei você
   [F#7]                                 [B]  [E]  [F#7]
Daquele maldito momento até hoje, só você
   [B]                  [G#m]               [C#m]  [C#m7M]  [C#m7]  [C#m6]
Eu sei que o culpado de não ter você sou eu
 [F#7]                                     [B]    [E]   [B]
E esse medo terrível de amar outra vez é meeeee...uuu`,
  },
  {
    id:            "joao-mineiro-e-marciano-aline",
    titulo:        "Aline",
    artista:       "João Mineiro e Marciano",
    tom:           "C#",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3155,
    cifra: `[Intro] [A]  [C#7]  [D]  [E]

           [A]
Ontem retornei
    [C#7]
Na areia
           [D]    [Bm]
Branca e ardente
            [E]
Então te esperei
             [A]
Ouvi os teus risos
         [C#7]
Que eram vindos
        [D]   [Bm]
Que uma onda
              [E]
Trouxe a meus pés

        [A]       [C#7]
E eu chamei, chamei
 [D]            [E]
Aline, estou aqui!
        [A]       [C#7]
E eu chorei, chorei
   [D]          [E]
Um mar só por ti

            [A]
Risquei na areia
          [C#7]
Teu lindo rosto
         [D]      [Bm]
Sempre sorrindo
          [E]
Talvez de mim
       [A]
A onda mansa
        [C#7]
Tudo apagou
            [D]     [Bm]
A mesma esperança
           [E]
De te encontrar

        [A]       [C#7]
E eu chamei, chamei
 [D]           [E]
Aline, estou aqui!
        [A]       [C#7]
E eu chorei, chorei
   [D]          [E]
Um mar só por ti

( [A]  [C#7]  [D]  [E] )

          [A]
Sei que ouvi
          [C#7]
O sino ao longe
          [D]   [Bm]
Que anunciava
        [E]
O amanhecer

        [A]       [C#7]
E eu chamei, chamei
 [D]           [E]
Aline, estou aqui!
        [A]       [C#7]
E eu chorei, chorei
   [D]          [E]
Um mar só por ti

        [A]       [C#7]
E eu chamei, chamei
 [D]           [E]
Aline, estou aqui!
        [A]       [C#7]
E eu chorei, chorei
   [D]          [E]
Um mar só por ti`,
  },
  {
    id:            "joao-mineiro-e-marciano-se-eu-nao-puder-te-esquecer",
    titulo:        "Se eu não puder te esquecer",
    artista:       "João Mineiro e Marciano",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1571,
    cifra: `[Intro] [F]  [G7]  [Em]  [A7]  [Dm]  [G7]  [C]  [G7]

[Primeira Parte]
[C]
Se eu não puder te esquecer
                   [G7]
Mando dizer numa flor
 [Dm]
Mando uma estrela avisar
 [G7]                   [C]  [G7]
Que o velho amor acordou

 [C]
Se não puder me esquecer
                 [G7]
Basta dizer por aí
 [Dm]
Quando você sussurrar
 [G7]                [C]   [C7]
Meu coração vai ouvir

[Refrão]
      [F]      [G7]      [C]
Esquecer, difícil demais
    [Am]       [Dm]
Ninguém é capaz
    [G7]         [C]     [C7]
Se amou um pouquinho

      [F]     [G7]        [C]
Esquecer você, nem pensar
   [Am]           [Dm]
E quando eu tentar
          [G7]    [C]
Que eu morra sozinho

(  [F]  [G7]  [Em]  [A7]  [Dm]  [G7]  [C]  [G7]  )

[Primeira Parte]
[C]
Se eu não puder te esquecer
                   [G7]
Mando dizer numa flor
 [Dm]
Mando uma estrela avisar
 [G7]                   [C]  [G7]
Que o velho amor acordou

 [C]
Se não puder me esquecer
                 [G7]
Basta dizer por aí
 [Dm]
Quando você sussurrar
 [G7]                [C]   [C7]
Meu coração vai ouvir

[Refrão]

      [F]      [G7]      [C]
Esquecer, difícil demais
    [Am]       [Dm]
Ninguém é capaz
    [G7]         [C]     [C7]
Se amou um pouquinho

      [F]     [G7]        [C]
Esquecer você, nem pensar
   [Am]           [Dm]
E quando eu tentar
          [G7]    [C]
Que eu morra sozinho

(  [C]  )`,
  },
  {
    id:            "joao-mineiro-e-marciano-paredes-azuis",
    titulo:        "Paredes Azuis",
    artista:       "João Mineiro e Marciano",
    tom:           "D",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 2520,
    cifra: `[Intro] [G]  [A]  [F#m]  [Bm7]  [Em]  [G]
        [A]  [G]
        [A]  [G]

[Primeira Parte]
       [D]  [G]                  [D]
Já se vai mais de uma semana sem você
   [G]                     [D]
E eu aqui lutando pra esquecer
    [Bm]              ( [Em]  [Em7+] )   [Em]
Tentando enganar meu coração

[Pré-Refrão]
       [G]  [A]                       [F#m]
Entre nós, tudo se tornou um caso sério
        [Bm7]                     [Em] [Em7]
Que por fim foi terminar em adultério
     [G]     [A7]              [D]        [D7]
Que muita gente chama de traição

[Refrão]
  [G]
Aqui todas paredes são azuis
  [A]                  [D]
Aquela mesma cor que escolhemos
  [Bm]                        [A]
Tudo ainda esta do mesmo jeito
 [Em]    [A7]            [D]            [D7]
Apenas seu amor que hoje é menos

 [G]
Resta uma saudade sem igual
 [A]                     [D]
Fumaça de cigarro em caracol
   [Bm]                         [A]
O gosto do seu corpo está na boca
     [Em]     [A7]                [D]     ( [D]  [D7] )
Seu cheiro ainda está no meu lençol

( [G]  [A]  [F#m]  [Bm7]  [Em]  [G] )
( [A]  [G] )
( [A]  [G]  )

[Segunda Parte]
       [D]          [G]                [D]
Olha aqui, que espécie de amor você me deu
    [G]                   [D]
Me fez gostar assim e me esqueceu
    [Bm]             ( [Em]  [Em7+] )   [Em]
Me fez acreditar sem merecer

[Pré-Refrão]
       [G]                [A]          [F#m]
Olha aqui pintamos de azul nossas paredes
   [Bm]                       [Em] [Em7]
Deixou minha esperança toda verde
   [G]          [A7]      [D]          [D7]
Depois tirou a cor do meu viver.

[Refrão]
   [G]
Aqui todas paredes são azuis
   [A]                 [D]
Aquela mesma cor que escolhemos
   [Bm]                       [A]
Tudo ainda esta do mesmo jeito
 [Em]    [A7]            [D]            [D7]
Apenas seu amor que hoje é menos

 [G]
Resta uma saudade sem igual
  [A]                    [D]
Fumaça de cigarro em caracol
    [Bm]                         [Em] [A]
O gosto do seu corpo está na boca
     [Em]     [A7]                [D]
Seu cheiro ainda está no meu lençol

(  [G]  [F#m]  [Em]  [D]  )`,
  },
  {
    id:            "joao-mineiro-e-marciano-amor-clandestino",
    titulo:        "Amor Clandestino",
    artista:       "João Mineiro e Marciano",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 911,
    cifra: `[A]                                                          [Bm]
Quando a porta se abrir, você vai sair, e pedir que eu esqueça
              [E]                                       [A]
Toda vez é assim, vai fugindo de mim, quase perco a cabeça
                                          [A7]                     [D]     [Dm]
Quando o relogio avisa, visto a minha camisa, me escondo da dor
                     [A]  [F#m]           [Bm] [E]             [A]     ( [E] )
Nem bem a porta se fecha, você me esquece, no elevador
            [A]                                            [Bm]
Fica a sensação, que essa nossa paixão, é um caso sem jeito
                   [E]                                           [A]     [E]
Pra te amar outra vez, lembro o que a gente fez, te procuro no peito
                 [A]                       [A7]                   [D]    [Dm]
Só encontro um vazio, feito um peixe sem rio, me falta um pedaço
                  [A]  [F#m]                 [Bm]  [E]                      [A]   ( [A] )
Sinto então sua boca, e o meu corpo sem roupa, dentro do seu abraço
                [A]                                         [Bm]
Esse amor de momento, quase nunca tem tempo, é feito as pressas
               [E]                                            [A]      [E]
Não divide segredos, não tem paz nem sossego, não admite promessas
                  [A]                     [A7]                            [D]    [Dm]
Esse amor clandestino, faz de mim um menino, que ao dormir também chora
               [A]    [F#m]             [Bm]   [E]   ( [E7] )            [A]        [E]
E adormece querendo, te ouvir me dizendo,    nunca mais vou embora`,
  },
  {
    id:            "joao-mineiro-e-marciano-no-mesmo-lugar",
    titulo:        "No Mesmo Lugar",
    artista:       "João Mineiro e Marciano",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3780,
    cifra: `[Intro] [E7]  [A]  [A7]
        [D]  [A]  [E7]  [A]  [E7]

[Primeira Parte]

[A]                       [D]                 [A]
Nem mesmo outro rosto bonito, me faz te esquecer
                             [D]            [E7]
Nem mesmo o sabor de outra boca te substitui
      [D]                                          [A]
Nem mesmo o melhor dos  momentos nos braços de alguém
   [E7]                                       [A]
Fará com que eu seja outra vez o mesmo que fui

[Refrão]

   [E7]                               [A]
A vida tem horas difíceis pra gente passar
  [E7]                   [D]              [A]       [A7]
Pedaços quase impossíveis pra se entender, hê
        [D]               [E7]               [A]
Por que uma coisa estranha marcou nosso fim
              [F#m]                [Bm]
Um pobre qualquer foi tirá-la de mim
              [E7]                [A]
Se nem mesmo Deus me tirou de você

( [E7]  [A]  [A7]  [D] )
( [A]  [E7]  [A]  [E7] )

[Segunda Parte]

[A]                     [D]                    [A]
Me sinto pregado em você, que já é minha cruz
                       [D]                  [E7]
Nem mesmo com mil orações consegui me livrar
   [D]                                 [A]
Você se livrou facilmente e saiu por aí
        [E7]                             [A]
Eu saio, porém eu me sinto no mesmo lugar

[Refrão]

   [E7]                               [A]
A vida tem horas difíceis pra gente passar
  [E7]                   [D]              [A]       [A7]
Pedaços quase impossíveis pra se entender, hê
        [D]               [E7]               [A]
Por que uma coisa estranha marcou nosso fim
              [F#m]                [Bm]
Um pobre qualquer foi tirá-la de mim
              [E7]                [A]
Se nem mesmo Deus me tirou de você
     [A]
De você`,
  },
  {
    id:            "joao-mineiro-e-marciano-minha-serenata",
    titulo:        "Minha Serenata",
    artista:       "João Mineiro e Marciano",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1684,
    cifra: `[Intro] [A]  [E7]  [A]  [E7]  [A]  [E7]  [A]

 [A]         [E7]          [A]        [E7]     [D]        [A]
Nesta rua deserta e calma no silencio da madrugada
 [E7]        [D]         [A]                      [E7]
Eu canto esta serenata para ti, oh minha amada
   [A]           [E7]       [A]    [E7]     [D]        [A]
Não sei se estás dormindo ou se estás acordada
   [E7]      [D]         [A]
Somente com meu violão
                    [E7]          [D]   [E7]     [A]  [A7]
Ofereço-te esta canção nesta noite enluarada

  [D]
Você sabe mulher, você sabe
  [A]
O motivo que vivo cantando
[E7]
Você sabe mulher, você sabe
          [D]      [E7]         [A]
Porque às vezes canto chorando

[A]        [E7]           [A]      [E7]    [D]        [A]
Meu bem se estás ouvindo, acenda a luz de fora
 [E7]       [D]         [A]                      [E7]
Venha me ver na janela, abrace, me beija agora
[A]          [E7]       [A]         [E7]         [D]         [A]
Estrelinha do infinito que brilha no romper da aurora
[E7]      [D]           [A]
A ti darei minha vida
                       [E7]       [D]      [E7]       [A]  [A7]
E tenho esperança querida que serás minha senhora

  [D]
Você sabe mulher, você sabe
  [A]
O motivo que vivo cantando
[E7]
Você sabe mulher, você sabe
          [D]      [E7]       [A]
Porque às vezes canto chorando`,
  },
  {
    id:            "joao-mineiro-e-marciano-esta-noite-como-lembranca",
    titulo:        "Esta Noite Como Lembrança",
    artista:       "João Mineiro e Marciano",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 4995,
    cifra: `Intro: [C] [G7] [C]
          [C]        [F]     [G7]          [C]
Você me pede nesta noite que estamos juntos
                               [G7]
Que eu fique e que faça você feliz
         [F]                               [C]
Peço desculpas mesmo chorando eu abro a porta
         [G7]                        [C]     [C7]
O seu destino infelizmente eu não fiz

  [F]            [G7]        [C]
Agora resta partir vida minha
                 [F]   [G7]    [C]
Eu tenho que deixar você aqui
   [F]                   [G7]         [C]
Chorando confessa que sem mim não dorme
                    [F]  [G7]        [C]
Confesso que sem você não vou dormir

Introdução

          [C]              [F]   [G7]        [C]
O seu destino foi construído por suas mãos
                                       [G7]
Faz dois anos que não é minha que se casou
         [F]                           [C]
A quero tanto mas eu enfrento a realidade
           [G7]                             [C]     [C7]
Fique esta noite como lembrança do que acabou

 [F]             [G7]        [C]
Agora resta partir vida minha
                [F]    [G7]    [C]
Eu tenho que deixar você aqui
   [F]                  [G7]          [C]
Chorando confessa que sem mim não dorme
                    [F]  [G7]        [C]
Confesso que sem você não vou dormir`,
  },
  {
    id:            "joao-mineiro-e-marciano-telefone-mais",
    titulo:        "Telefone Mais",
    artista:       "João Mineiro e Marciano",
    tom:           "C",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3918,
    cifra: `[Primeira Parte]

[C]                    [Dm]
Hoje de manhã meu telefone
[G]                        [C]
Resolveu me dar sinal de vida
          [Am]                       [Dm]
Me despertou tocou tocou e eu atendi
         [G]                            [C]     [G]
Ouvi uma voz que sempre foi tão pretendida
[C]                     [Dm]
Eu ouvi de novo a sua voz
[G]                        [C]
Pelo menos se lembrou de mim
[C7]                 [F]
Quanta alegria propiciou
 [C]            [G7]           [C]   [C7]
Por favor me faça sempre assim

[Refrão]

              [F]       [G]                   [C]
Me telefone mais eu preciso matar minha saudade
       [Am]                        [Dm]
Me telefone quantas vezes for possível
       [G]                  [C]
A sua voz sempre me traz felicidade

[Segunda Parte]

  [C]                       [Dm]
Você me chamou de meu amigo
[G]                            [C]
Mesmo assim gostei valeu demais
         [Am]                        [Dm]
Se não existe mais amor que seja assim
       [G]                       [C]   [G]
Sua amizade pode crer é bom demais
[C]                      [Dm]
Seja como for não me esqueça
[G]                       [C]
Mesmo ao telefone me agrada
[C7]                         [F]
Basta uma palavra em cada vez
[C]          [G7]              [C]  [C7]
Por favor repita esta chamada

[Refrão]

              [F]         [G]                 [C]
Me telefone mais eu preciso matar minha saudade
       [Am]                        [Dm]
Me telefone quantas vezes for possível
       [G]                  [C]
A sua voz sempre me traz felicidade`,
  },
  {
    id:            "joao-mineiro-e-marciano-pare-com-isso",
    titulo:        "Pare Com Isso",
    artista:       "João Mineiro e Marciano",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1502,
    cifra: `[Intro] [Bb]  [Ab]  [Bb]  [Eb]
        [Bb]  [F7]  [Bb]  [Bbm]

[Primeira Parte]

              [Bbm]
Eu vou e não volto
                  [F7]
Nem mesmo que eu tenha
                  [Bbm]
Que morrer de saudade

Pare com isso

Não tem cabimento
         [Ebm]
Você me seguir
           [F7]
É chato demais
                                [Bbm]
Na frente de amigos você aproximar
                                  [F7]
Com cara de anjo perguntando pra mim
              [Bb]
Você vai demorar

[Refrão]

        [Bb]
Sua atitude se torna tão feia
                [F]
Pra você e pra mim

Provoca sorrisos você dá na cara
          [Bb]
Não sabe fingir
                                [Bb7]
Ontem foi engraçado você aproximou
               [Eb]  [Ebm]
Com ternura pediu
             [Bb]                 [F]
Me leva pra casa você vinha de lá
      [Bb]
Todo mundo viu

( [Bb]  [Ab]  [Bb]  [Eb] )
( [Bb]  [F7]  [Bb]  [Bbm] )

[Segunda Parte]

           [Bbm]                 [F7]
Eu amo e odeio quase ao mesmo tempo
            [Bbm]
A mesma pessoa

Amor veja bem como é que eu posso
          [Ebm]
Continuar assim
             [F7]
Você me faz falta sem você comigo
              [Bbm]
Não dá pra viver
                             [F7]
Porém há lugares que preciso ir
             [Bb]
Sem levar você

[Refrão]

        [Bb]
Sua atitude se torna tão feia
                [F]
Pra você e pra mim

Provoca sorrisos você dá na cara
          [Bb]
Não sabe fingir
                                [Bb7]
Ontem foi engraçado você aproximou
               [Eb]  [Ebm]
Com ternura pediu
             [Bb]                 [F]
Me leva pra casa você vinha de lá
      [Bb]
Todo mundo viu`,
  },
  {
    id:            "joao-mineiro-e-marciano-a-bailarina",
    titulo:        "A Bailarina",
    artista:       "João Mineiro e Marciano",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3858,
    cifra: `[Fm]               [Bbm]   [Eb7]              [Ab]
Ela era quase criança nos sonhos bons de menina
                  [C7]                 [Fm]
Queria ser bem famosa queria ser bailarina
               [Bbm]      [Eb7]                [Ab]
E despediu-se bem nova contra a vontade dos pais
                   [C7]                       [Fm]
E foi tentar a carreira não retornou nunca mais

 [F]                  [C7]                [F]
Para contar sua história não preciso tanto
                                       [C7]
Ela foi sempre enganada e as coisas mudaram

No fim perdeu a carreira tornou-se na vida
[Bb]           [C7]              [F]
Uma famosa amante que tantos amaram
             [C7]              [F]
A bailarina venceu e tem fama demais
            [F7]                [Bb]
Apenas é diferente o caminho porém
                                      [F]
Ela não dança no palco recebe um por vez
                [C7]            [F]    [Fm]
Naquele quarto bonito a platéia vem

 [Fm]                   [Bbm]   [Eb7]                [Ab]
De vez em quando ela chora lembra do sonho passado
                     [C7]                 [Fm]
Pois se soubesse de tudo ela não tinha tentado
                   [Bbm]    [Eb7]               [Ab]
Nesse bailado de agora é muito triste a canção
                  [C7]                  [Fm]
Abraça o fã que lhe paga a fama foi ilusão

 [F]                  [C7]                [F]
Para contar sua história não preciso tanto
                                       [C7]
Ela foi sempre enganada e as coisas mudaram

No fim perdeu a carreira tornou-se na vida
[Bb]           [C7]              [F]
Uma famosa amante que tantos amaram
             [C7]              [F]
A bailarina venceu e tem fama demais
            [F7]                [Bb]
Apenas é diferente o caminho porém
                                      [F]
Ela não dança no palco recebe um por vez
                [C7]            [F]    [Fm]
Naquele quarto bonito a platéia vem`,
  },
  {
    id:            "joao-mineiro-e-marciano-crises-de-amor",
    titulo:        "Crises de amor",
    artista:       "João Mineiro e Marciano",
    tom:           "F",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 1954,
    cifra: `[Intro] [C]  [F]  [C]  [F]
        [C]  [F]  [C]  [Bb]
        [Am]  [Gm]  [Am]  [Gm]  [F]

[Primeira Parte]

 [F]            [Am]               [F]                                [Gm]
Só existe um caminho pra nos dois, não adianta nem tentar variações.
      [Bb]                              [C]                        [F]     [C]
Já bebeu da mesma água que bebi, batizou  com seu amor meu coração
[F]                [Am]            [F]        [F7]                       [Bb]
Não adianta lamentar o que passou, é por isso que eu peço não se vá

[Pré-Refrão]
                                [F]                                    [Gm]
Fui parceiro nos momentos mais felizes, se agora nosso amor esta em crise
        [Bb]           [C]            [F]    [F7]
Fique aqui pois haveremos de enfrentar

[Refrão]
                  [Bb]                             [C]                           [Bb]  [F]
São as crises de amor , nem por isso te amo menos...... nem por isso nem por nada
                               [C]                [Bb]          [C]                [F]
Não adianta nem tentar novos caminhos quando é fácil consertar a velha estrada

( [C]  [F]  [C]  [F] )
( [C]  [F]  [C]  [Bb] )
( [Am]  [Gm]  [Am]  [Gm]  [F] )

[Segunda Parte]

[F]               [Am]             [F]                                 [Gm]
Conhecemos mil segredos um do outro, muitas vezes nos amamos confiantes
     [Bb]                            [C]                        [F]      [C]
Conheci você no auge do amor, e você me conheceu no mesmo instante
[F]                                         [F7]                    [Bb]
Já é tarde pra jogarmos tudo fora, tanto tempo alimentando as ilusões

[Pré-Refrão]

                                [F]                                 [Gm]
Você sabe as reações dos meus sentidos, e eu já sei como você reagido
      [Bb]     [C]            [F]   [F7]
Tudo isso favorece as emoções

[Refrão]
                  [Bb]                             [C]                           [Bb]  [F]
São as crises de amor , nem por isso te amo menos...... nem por isso nem por nada
                               [C]                [Bb]        [C]                  [F]
Não adianta nem tentar novos caminhos quando é fácil consertar a velha estrada`,
  },
  {
    id:            "joao-mineiro-e-marciano-o-beijo-do-adeus",
    titulo:        "O Beijo do Adeus",
    artista:       "João Mineiro e Marciano",
    tom:           "F",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 447,
    cifra: `[Intro] [F]  [Em]  [Dm]  [C7]
        [Bb]  [F]  [C7]  [F]

 [F]                                        [C7]
Devolva todas minhas coisas porque não lhe servem
                 [Bb]       [C7]           [F]
Arrume tudo numa caixa que eu vou buscar
                    [F7]                 [Bb]
À noite vou bater na porta com toda tristeza
 [F]                    [C7]              [F]     [Em]  [Dm]
Você vai rever a quem que não consegue amar

  [C7]                                      [F]
Prefiro aparecer à noite pra esconder meu rosto
 [C7]                                 [F]     [Em]  [Dm]
Cansado por essa saudade que me fez sentir
 [C7]                                 [Bb]
Ainda quero lhe pedir com muita esperança
                                  [F]
Junto com as coisas quero por lembrança
             [C7]             [F]
O beijo do adeus pra depois sumir

( [F]  [Em]  [Dm]  [C7] )
( [Bb]  [F]  [C7]  [F] )

[F]                                     [C7]
Se acaso perceber em mim um cheiro de bebida
                      [Bb]        [C7]       [F]
Compreenda precisei coragem pra rever você
                      [F7]                 [Bb]
Não pense que eu seja um boêmio, pois não sou ainda
    [F]              [C7]              [F]     [Em]  [Dm]
Mas hoje para não chorar, tenho que beber

 [C7]                                       [F]
Prefiro aparecer à noite pra esconder meu rosto`,
  },
  {
    id:            "joao-mineiro-e-marciano-viola-esta-chorando",
    titulo:        "Viola Está Chorando",
    artista:       "João Mineiro e Marciano",
    tom:           "A",
    ritmo:         "Sertanejo Raiz",
    dificuldade:   "iniciante",
    tags:          ["sertanejo","raiz"],
    tocadasSemana: 3054,
    cifra: `[Intro] [E]  [A]  [A7]  [D]
        [E]  [A]  [E]

         [A]         [E/G#]          [F#m]
Trago no peito uma saudade tão doída
                  [A7]              [F#7]          [Bm]
Tão cruel tão atrevida que eu não posso controlar
                  [Bm/A]            [E/G#]
No pensamento aquela flor maravilhosa
                 [E]                           [A]   [E]
Flor morena e formosa que se foi pra não voltar

           [A]         [E/G#]           [F#m]
Lembro das noites de canções, de poesias
                       [A/E]        [A7]          [D]
Noite a dentro a gente ia e eu cantava só pra ela
                      [D#5-]            [C#m]
Meu canto é triste desde que ela foi embora
[F#m]              [Bm]  [E7]                [A]
Pois até minha viola chora de saudade dela

[Refrão]

              [E]
Viola está chorando
                  [A]       [A7]
Chorando está meu coração
                    [D]
Meu desespero meu sufoco
                 [E]                    [A]
Desabafo pouco a pouco na magia da canção

              [E]
Viola está chorando
                  [A]       [A7]
Chorando está meu coração
                    [D]
Meu desespero meu sufoco
                 [E]                    [A]
Desabafo pouco a pouco na magia da canção

( [E]  [A]  [A7] )
( [D]  [E]  [A]  [E] )

[Segunda Parte]

           [A]          [E/G#]          [F#m]
Preso nas garras dessa dor tão impulsiva
                    [A7]        [F#7]         [Bm]
Feito um barco à deriva vou vivendo por viver
                   [Bm/A]            [E/G#]
Viver sem ela é não ter sol nem ter abrigo
                 [E]                           [A]   [E]
É bem mais que um castigo é pior do que morrer

           [A]         [E/G#]           [F#m]
Solto meu grito meu apelo meu lamento
                       [A/E]   [A7]                 [D]
Vai meu canto vai no vento, vai até aonde ela está
                    [D#5-]        [C#m]
E pede à ela que devolva minha vida
[F#m]              [Bm]     [E7]               [A]
Tô num beco sem saída, pede à ela pra voltar

[Refrão]

              [E]
Viola está chorando
                  [A]       [A7]
Chorando está meu coração
                    [D]
Meu desespero meu sufoco
                 [E]                    [A]
Desabafo pouco a pouco na magia da canção

              [E]
Viola está chorando
                  [A]       [A7]
Chorando está meu coração
                    [D]
Meu desespero meu sufoco
                 [E]                    [A]
Desabafo pouco a pouco na magia da canção

              [E]
Viola está chorando
                  [A]       [A7]
Chorando está meu coração
                    [D]
Meu desespero meu sufoco
                 [E]                    [A]
Desabafo pouco a pouco na magia da canção

[Final] [E]  [A]  [A7]
        [D]  [E]  [A]  [E]`,
  },
  {
    id:            "jorge-e-mateus-gaivota",
    titulo:        "Gaivota",
    artista:       "Jorge e Mateus",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4521,
    cifra: `[Intro] [C]

[G4]                 [Am]
Eu não confio em mim
[F]                  [C]          [G]
Perto de você por mais nenhum segundo
[G]                   [Am]           [F]  [C]
Esse olhar sorrindo assim é covardia
             [G]
Não me leve a mal
                   [Am]
Não é questão de querer, quero tanto
[F]                     [C]
Talvez até mais que você

[C]                      [G]
Agora explica pro meu medo
                       [Am]
Que não vou ser seu brinquedo
                [F]                             [C]
Que eu posso confiar de olho fechado no seu beijo
                    [G]               [F]
Se existe alguma contra-indicação desse seu cheiro


[Refrão]
[Am]                       [F]         [C]
Tem gente que chega e que vai, não volta
             [G]                          [Am]
Cê vem pra ficar ou vai voar que nem gaivota
           [F]                              [C]
Se quer aplicar uma injeção de amor no peito

Oh-oh-oh-oh então faz direito

[Am]                       [F]         [C]
Tem gente que chega e que vai, não volta
             [G]                          [Am]
Cê vem pra ficar ou vai voar que nem gaivota
           [F]                              [C]
Se quer aplicar uma injeção de amor no peito

Oh-oh-oh-oh então faz direito

           [C]        [G]        [F]
[Passagem] Oh-oh-oh-oh-oh-oh-oh-oh-oh-oh

[G4]                 [Am]
Eu não confio em mim
[F]                  [C]          [G]
Perto de você por mais nenhum segundo
[G]                   [Am]           [F]  [C]
Esse olhar sorrindo assim é covardia
             [G]
Não me leve a mal
                   [Am]
Não é questão de querer, quero tanto
[F]                     [C]
Talvez até mais que você

[C]                      [G]
Agora explica pro meu medo
                       [Am]
Que não vou ser seu brinquedo
                [F]                             [C]
Que eu posso confiar de olho fechado no seu beijo
                    [G]               [F]
Se existe alguma contra-indicação desse seu cheiro


[Refrão]
[Am]                       [F]         [C]
Tem gente que chega e que vai, não volta
             [G]                          [Am]
Cê vem pra ficar ou vai voar que nem gaivota
           [F]                              [C]
Se quer aplicar uma injeção de amor no peito
             [G]
Oh-oh-oh-oh então faz direito

[Am]                       [F]         [C]
Tem gente que chega e que vai, não volta
             [G]                          [Am]
Cê vem pra ficar ou vai voar que nem gaivota
           [F]                              [C]
Se quer aplicar uma injeção de amor no peito

Oh-oh-oh-oh então faz direito

[Am]                       [F]         [C]
Tem gente que chega e que vai, não volta
             [G]                          [Am]
Cê vem pra ficar ou vai voar que nem gaivota
           [F]                              [C]
Se quer aplicar uma injeção de amor no peito

Oh-oh-oh-oh então faz direito`,
  },
  {
    id:            "jorge-e-mateus-memoria-tem-nada-a-ver-paredes",
    titulo:        "Memória / Tem Nada a Ver / Paredes",
    artista:       "Jorge e Mateus",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2827,
    cifra: `[C]
A minha memória
  [E]             [Am]        [Am/G]
Reprisa você tal qual uma tela
      [F]
Sou a chama da vela
    [G]                    [C4(9)]
Que quase se apaga com o sopro do ar

    [E]
Se volto ao passado
    [E7]                  [Am]      [Am/G]
E reviro os guardados, um tanto inseguro
       [F]
Por saber de verdade
     [G]               [C]           [G7]
Que nesse presente você não está

  [C]
Apago as luzes
   [E]               [Am]        [Am/G]
E deixo a porta da frente encostada
          [F]                 [G]
É que as vezes me perco no tempo
             [C4(9)]
Pensando que posso te esquecer

   [E]               [E7]
E cada manhã é um futuro incerto
    [Am]               [Am/G]
Que não a traz de volta
     [F]
A bater nessa porta
     [G]             [C]      [G7]
Que nunca fechou pra você

 [C]
Vem
 [E]              [Am]    [Am/G]
Nem que seja em sonho vem
        [F]                [G]
Eu te quero de qualquer jeito
      [C9]
Eu te quero como for

        [E]                  [E7]
Pois enquanto eu estiver sonhando
        [Am]    [Am/G]
Estará comigo
          [F]                    [G]
Entre os sonhos, o sonho mais lindo
               [C]  [G7]
É viver este amor

 [C]
Alguém me disse que você falou
         [G9]
Que acha graça e tem pena de mim
           [F]                                 [G9]
Que não me ama que o nosso caso já chegou ao fim

       [C]
Ao telefone não atende mais
          [G9]
Que pra você agora tanto faz
        [F]
Se é verdade que você não quer
         [G9]
Responda se puder
           [Am]              [E7]
Quem é que liga no meio da noite
               [Am]
Diz que está sozinha
                    [C7]                    [F]
Quem é que nos meus braços fala que é só minha
              [G7]                 [C]  [G7]
E chora de emoção na hora do prazer
          [Am]                 [E7]
Porque será que você não assume
                [Am]
Que eu sou seu homem
               [C7]                   [F]
Porque o tempo todo fala no meu nome
               [G7]                   [C]  [C7]
Confessa que você não sabe me esquecer
               [F]
Tem nada a ver
              [G7]     [E7]         [Am]
Você é quem está fugindo da verdade
               [C7]              [F]
Parece que tem medo da felicidade
                 [G7]                    [C]  [C7]
Você diz que não,   teu corpo diz que sim
               [F]               [G7]
Tem nada a ver,  a boca que me beija
      [E7]        [Am]
A mão que me apedreja
                  [C7]                [F]
Se deita em minha cama depois me difama
                   [G7]                    [C]  [G7]
Diz que não me quer   mas vive atrás de mim

                   [F#4]
Despertador tocou,    cadê o meu amor
        [G#m7]                 [E9]
Pra me dar o primeiro beijo do dia
    [B]            [F#4]
Na hora do café,    cadê minha mulher
        [G#m7]                [F#4]
Que os meus desejos, de cor    sabia

[Pré-Refrão]

    [E9]
Eu tentei trabalhar

Tá difícil concentrar
        [G#m7]                      [B]
Fim de tarde é pior, ao se pôr o sol
            [F#4]
Ela me esperava

Com o sorriso estampado na cara
        [E9]
Hoje o dia tá passando

A saudade apertando
        [F#4]
E eu sozinho nessa casa

[Refrão]

                            [E9]
Ah, se essas paredes não falassem
                             [B]
Ah, se o travesseiro não contasse
                     [F#]
Todas as noites de amor
                   [G#m7]
Que eu vivi com você

                          [E9]
Ah, se essa cama não lembrasse
                         [B]
Ah, se esse espelho mostrasse
       [D#m7]
Você aqui
                     [G#m7]
Pra eu conseguir dormir

                            [E9]
Ah, se essas paredes não falassem
                             [B]
Ah, se o travesseiro não contasse
                     [F#]
Todas as noites de amor
                   [G#m7]
Que eu vivi com você

                          [E9]
Ah, se essa cama não lembrasse
                         [B]
Ah, se esse espelho mostrasse
       [D#m7]
Você aqui
                     [G#m7]
Pra eu conseguir dormir`,
  },
  {
    id:            "jorge-e-mateus-orelha",
    titulo:        "Orelha",
    artista:       "Jorge e Mateus",
    tom:           "E",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4985,
    cifra: `[E]                                          [B9]
Não era de uma casa só, era de toda a rua, de todo coração
[E]                                      [B9]
Dormia em cada porta aberta, sempre encontrava um prato e um irmão
  [E]                                             [B9]
Mais de 10 anos nas vizinhas, viu criança crescer, viu o tempo passar
    [E]                                      [B9]
Cão comunitário, alma mansa, nunca soube o que era machucar
[E]                                       [B9]
Quem passa por aqui conhece seu jeito calmo de olhar
[E]                                        [B9]
A rua inteira hoje chora porque aprenderam a te amar

                     [E]                                          [B9]
Corre livre agora, orelha. Você foi de todo mundo, foi nosso também
                                  [E]                              [B9]
Se existe céu pros bons de alma, você tá lá cuidando da gente além
                                  [E]
Aqui ficou saudade espalhada no chão
                                  [B9]
Em cada esquina que você deitou, que o amor de uma vizinhança inteira
[E]                                          [B9]
Seja mais forte que a maldade que te levou

   [E]                                       [B9]
Florianópolis sabe teu nome, porque teu rabo abanava para qualquer um
[E]                                     [B9]                 [E]
Você confiava sem medo no mundo que nem sempre foi comum
                                        [B9]
Não pediu nada além de carinho, nem conhecia raiva ou defesa
[E]                                       [B9]
Pagou com a vida inocente a crueldade de quem perdeu a pureza
[E]                                    [B9]
Não foi descuido, foi escolha. E escolha também pesa
[E]                                        [B9]
Um cão que era de todos partiu por causa da frieza
                     [E]                                              [B9]
Corre livre agora, orelha. Você foi de todo mundo, foi nosso também
                                  [E]                                   [B9]
Se existe céu pros bons de alma, você tá lá cuidando da gente além
                                  [E]
Aqui ficou saudade espalhada no chão

                                  [B9]
Em cada esquina que você deitou, que o amor de uma vizinhança inteira
[E]                                          [B9]
Seja mais forte que a maldade que te levou

[E]                                  [B9]
Que nenhuma rua esqueça teu nome que nenhum latido morra em vão
[E]                                              [B9]
Orelha virou símbolo, virou promessa de mais cuidado e mais compaixão
                            [E]                                        [B9]
Eu.... corre livre agora orelha. Depois de tantos anos sendo abrigo e lá
                                [E]                         [B9]
A rua promete em silêncio proteger quem ainda e é confiar
                               [E]                           [B9]
Porque amor não morre não, nem com o tempo, nem com o fim
                               [E]                          [B9]
Orelha vive em cada cão que ainda acredita na gente. Mesmo assim. Ah`,
  },
  {
    id:            "luan-santana-te-esperando",
    titulo:        "Te Esperando",
    artista:       "Luan Santana",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2748,
    cifra: `[Intro] [G]  [C9]

[Solo Intro]

E|------------------------------------------|
B|-1/3-1-0h1p1------------------------------|
G|-------------0----------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

E|------------------------------------------|
B|-1-0-1/3----------------------------------|
G|---------0--------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

 [G]
Mesmo que você

Não caia na minha cantada

Mesmo que você conheça outro cara
    [C9]
Na fila de um banco

Um tal de Fernando

Um lance, assim, sem graça

 [G]
Mesmo que vocês fiquem sem se gostar

Mesmo que vocês casem sem se amar
   [C9]
E depois de seis meses

Um olhe pro outro

E aí, pois é, sei lá

 [G]
Mesmo que você suporte este casamento

Por causa dos filhos, por muito tempo
 [C9]
Dez, vinte, trinta anos

Até se assustar

Com os seus cabelos brancos

    [G]
Um dia vai sentar

Numa cadeira de balanço

Vai lembrar do tempo

Que tinha vinte anos
 [C9]
Vai lembrar de mim e se perguntar

Por onde esse cara deve estar

[Refrão]

            [G]
E eu vou estar

Te esperando
                            [C9]
Nem que já esteja velhinha gagá

Com noventa, viúva, sozinha
              [G]
Não vou me importar

Vou ligar
                               [C9]
Te chamar pra sair namorar no sofá

Nem que seja além dessa vida
          [G]
Eu vou estar
        [C9]   [Cm]
Te esperando

[Solo]

[Primeira Parte]

 [G]
Mesmo que você

Não caia na minha cantada

Mesmo que você conheça outro cara
    [C9]
Na fila de um banco

Um tal de Fernando

Um lance, assim, sem graça

 [G]
Mesmo que vocês fiquem sem se gostar

Mesmo que vocês casem sem se amar
   [C9]
E depois de seis meses

Um olhe pro outro

E aí, pois é, sei lá

 [G]
Mesmo que você suporte este casamento

Por causa dos filhos, por muito tempo
 [C9]
Dez, vinte, trinta anos

Até se assustar

Com os seus cabelos brancos

    [G]
Um dia vai sentar

Numa cadeira de balanço

Vai lembrar do tempo

Que tinha vinte anos
 [C9]
Vai lembrar de mim e se perguntar

Por onde esse cara deve estar

[Refrão]

            [G]
E eu vou estar

Te esperando
                            [C9]
Nem que já esteja velhinha gagá

Com noventa, viúva, sozinha
              [G]
Não vou me importar

Vou ligar
                               [C9]
Te chamar pra sair namorar no sofá

Nem que seja além dessa vida

            [G]
E eu vou estar

Te esperando
                            [C9]
Nem que já esteja velhinha gagá

Com noventa, viúva, sozinha
              [G]
Não vou me importar

Vou ligar
                               [C9]
Te chamar pra sair namorar no sofá

Nem que seja além dessa vida
          [G]
Eu vou estar
        [C9]
Te esperando
             [G]
Te esperando`,
  },
  {
    id:            "luan-santana-chuva-de-arroz",
    titulo:        "Chuva de Arroz",
    artista:       "Luan Santana",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 948,
    cifra: `[Intro] [Em]  [G]  [Bm]  [A]

[Em]       [G]
Oh oh oh oh
[Bm]       [A]
Oh oh oh oh

[Dedilhado Intro]

Parte 1 de 4
    [Em]               [G]
E|-------3-----2----------------------------|
B|-0----------------0-----------------------|
G|------------------------2-----0-----------|
D|------------------------------------------|
A|------------------------------------------|
E|-0-0-0---0-0---0--3-3-3---3-3---3---------|

Parte 2 de 4
    [Bm]               [A]
E|------------------------------------------|
B|------------------------------------------|
G|-2-----0----------------------------------|
D|-------------4/54--2-----0-2h4p2p0-------|
A|-2-2-2---2-2--------0-0-0-----------4-----|
E|------------------------------------------|

Parte 3 de 4
    [Em]               [G]
E|-------3-----2----------------------------|
B|-0----------------0-----------------------|
G|------------------------2-----0-----------|
D|------------------------------------------|
A|------------------------------------------|
E|-0-0-0---0-0---0--3-3-3---3-3---3---------|

Parte 4 de 4

    [Bm]               [A]
E|-------0-----2----------------------------|
B|-3----------------2-----------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-2-2-2---2-2---2--0-----------------------|
E|------------------------------------------|

[Primeira Parte]

     [Em]               [G]
Não mudei de cidade, nem de telefone
 [Bm]               [A]
Só escolhi ser feliz
     [Em]              [G]
É o mesmo endereço, mesmo apartamento
     [Bm]                [A]
Em frente à igreja matriz

[Dedilhado Primeira Parte]

Parte 1 de 4
    [Em]               [G]
E|------------------------------------------|
B|-0-----------3----0-----------3-----------|
G|-------0----------------2-----------------|
D|-2-2-2-2-2-2-2-2--------------------------|
A|------------------------------------------|
E|------------------3-3-3-3-3-3-3-3---------|

Parte 2 de 4
   [Bm]                [A]
E|------------------------------------------|
B|------------------------------------------|
G|-2-----0-----2----------------------------|
D|------------------2-----2-----------------|
A|-2-2-2-2-2-2-2-2--0-0-0-0-0-0-0-0---------|
E|------------------------------------------|

Parte 3 de 4
   [Em]                [G]
E|------------------------------------------|
B|-0-----------3----0-----------3/5---------|
G|-------0----------------2-----------------|
D|-2-2-2-2-2-2-2-2--------------------------|
A|------------------------------------------|
E|------------------3-3-3-3-3-3-------------|

Parte 4 de 4
   [Bm]               [A]
E|------------------------------------------|
B|-7-----7-----7----5-----------------------|
G|-7-----7-----7----------------6-----------|
D|-7-----7-----7----------7-----------------|
A|------------------0-0-0-0-0-0-0-0---------|
E|-7-7-7-7-7-7-7-7--------------------------|

[Segunda Parte]

          [Bm]
Por isso todo mundo passa
    [G]                    [D]     [A]
E quem nunca passou vai passar
         [Bm]
Já tô dizendo aos meus amigos
 [G]                       [D]
Calma, que eu não vou pirar
      [A]
Já pirei

[Dedilhado Segunda Parte]

Parte 1 de 4
   [Bm]                [G]
E|-------5----------------------------------|
B|---3--------------3-----3-----------------|
G|-4---4--------------4---------4-----------|
D|------------------------------------------|
A|-2-2-2-2-2-2-2-2--------------------------|
E|------------------3-3-3-3-3-3-3-3---------|

Parte 2 de 4
    [D]                [A]
E|-------0-----2----------------------------|
B|-3----------------2-----0-----------------|
G|------------------------------2-----------|
D|-0-0-0-0-0-0-0-0--------------------------|
A|------------------0-0-0-0-0-0-0-0---------|
E|------------------------------------------|

Parte 3 de 4
   [Bm]                [G]
E|-------5----------------------------------|
B|---3--------------3-----3-----------------|
G|-4---4--------------4---------4-----------|
D|------------------------------------------|
A|-2-2-2-2-2-2-2-2--------------------------|
E|------------------3-3-3-3-3-3-3-3---------|

Parte 4 de 4
    [D]                [A]
E|-------0-----2----------------------------|
B|-3----------------2-----------------------|
G|------------------------------------------|
D|-0-0-0-0-0-0-0-0--------------------------|
A|------------------0-----------------------|
E|------------------------------------------|

[Pré-Refrão]

          [G]          [A9]
Me apaixonei perdidamente
            [G]
E o que eu sei
                  [A9]
É que daqui pra frente

[Refrão]

     [Em]                [G]
Vai ser nossa cidade, nosso telefone
 [Bm]              [A]
Nosso endereço, nosso apartamento
 [Em]                  [G]
Sabe aquela igreja, tô aqui na frente
[Bm]              [A]
   Imaginando chuvas de arroz na gente

[Pós-Refrão]

[Em]  [G]  [Bm]       [A9]
       Oh oh oh oh
[Em]       [G]
Oh oh oh oh
[Bm]       [A9]
Oh oh oh oh

[Primeira Parte]

     [Em]               [G]
Não mudei de cidade, nem de telefone
 [Bm]               [A9]
Só escolhi ser feliz
     [Em]              [G]
É o mesmo endereço, mesmo apartamento
     [Bm]                [A9]
Em frente à igreja matriz

[Segunda Parte]

          [Bm]
Por isso todo mundo passa
    [G]                    [D]     [A9]
E quem nunca passou vai passar
         [Bm]
Já tô dizendo aos meus amigos
 [G]                       [D]
Calma, que eu não vou pirar
      [A9]
Já pirei

[Pré-Refrão]

          [G]          [A9]
Me apaixonei perdidamente
            [G]
E o que eu sei
                  [A9]
É que daqui pra frente

[Refrão]

     [Em]                [G]
Vai ser nossa cidade, nosso telefone
 [Bm]              [A9]
Nosso endereço, nosso apartamento
 [Em]                  [G]
Sabe aquela igreja, tô aqui na frente
[Bm]              [A9]
   Imaginando chuvas

     [Em]                [G]
Vai ser nossa cidade, nosso telefone
 [Bm]              [A9]
Nosso endereço, nosso apartamento
 [Em]                  [G]
Sabe aquela igreja, tô aqui na frente
[Bm]              [A9]
   Imaginando chuvas de arroz na gente

[Pós-Refrão]

[Em]  [G]  [Bm]       [A9]
       Oh oh oh oh
[Em]       [G]
Oh oh oh oh
[Bm]       [A9]
Oh oh oh oh

[Tab - Final]

E|------------------------------------------|
B|---0---8-----7----------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|-7---7---7-7---7--------------------------|
E|------------------------------------------|`,
  },
  {
    id:            "luan-santana-te-vivo",
    titulo:        "Te Vivo",
    artista:       "Luan Santana",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2767,
    cifra: `[Intro] [D]  [F#m/C#]  [Bm]
        [D]  [F#m/C#]  [Bm]

[Dedilhado - Intro]

Parte 1 de 2
   [D]               [F#m/C#]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------2-------2-----------|
G|---2---2---2--------2---2---2-------------|
D|-0----------------------------------------|
A|------------------4-----------------------|
E|------------------------------------------|

Parte 2 de 2
   [Bm]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------3-------3-----------|
G|---4---4---4--------4---4---4-------------|
D|------------------4-----------------------|
A|-2----------------------------------------|
E|------------------------------------------|

[Primeira parte]

[Dedilhado - Primeira Parte]

Parte 1 de 4
  [D]               [F#m/C#]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------2-------2-----------|
G|---2---2---2--------2---2---2-------------|
D|-0----------------------------------------|
A|------------------4-----------------------|
E|------------------------------------------|

Parte 2 de 4
   [Bm]               [G]
E|---------2-----2----------3-----3---------|
B|-----3-------3--------3-------3-----------|
G|---4---4---4--------4---4---4-------------|
D|------------------------------------------|
A|-2----------------------------------------|
E|------------------3-----------------------|

Parte 3 de 4
   [D]                [F#m/C#]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------2-------2-----------|
G|---2---2---2--------2---2---2-------------|
D|-0----------------------------------------|
A|------------------4-----------------------|
E|------------------------------------------|

Parte 4 de 4
   [Bm]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------3-------3-----------|
G|---4---4---4--------4---4---4-------------|
D|------------------4-----------------------|
A|-2----------------------------------------|
E|------------------------------------------|

[D]                  [F#m/C#]
  Quando me sinto só
                 [Bm]   [G]
Te faço mais presente
[D]                  [F#m/C#]
  Eu fecho os meus olhos
             [Bm]
E enxergo a gente

[Pré-refrão]

[Dedilhado - Pré-Refrão]

Parte 1 de 4
   [Em]
E|---------0-----0----------0-----0---------|
B|-----0-------0--------0-------0-----------|
G|---0---0---0--------0---0---0-------------|
D|------------------2-----------------------|
A|------------------------------------------|
E|-0----------------------------------------|

Parte 2 de 4
   [Bm]
E|------------------------------------------|
B|---------3-----3----------3-----3---------|
G|-----4-------4--------4-------4-----------|
D|---4---4---4--------4---4---4-------------|
A|-2----------------2-----------------------|
E|------------------------------------------|

Parte 3 de 4
   [G]               [Em]
E|--------------------------0-----0---------|
B|---------3-----3------0-------0-----------|
G|-----4-------4------0---0---0-------------|
D|---5---5---5------------------------------|
A|------------------------------------------|
E|-3----------------0-----------------------|

Parte 4 de 4
   [A]                [A4]
E|---------0-----0----------0-----0---------|
B|-----2-------2--------3-------3-----------|
G|---2---2---2--------2---2---2-------------|
D|------------------------------------------|
A|-0----------------0-----------------------|
E|------------------------------------------|

[Em]
   Em questão de segundos
               [Bm]
Voo pra outro mundo

Outra constelação
                  [G]
Não dá para explicar
                [Em]
Ao ver você chegando
             [A]  [A4]
Qual a sensação

[Refrão]

[Dedilhado - Refrão]

Parte 1 de 6
   [D]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------3-------3-----------|
G|---2---2---2--------2---2---2-------------|
D|-0----------------0-----------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 6
   [A]                [F#]
E|---------0-----0----------2-----2---------|
B|-----2-------2--------2-------2-----------|
G|---2---2---2--------3---3---3-------------|
D|------------------------------------------|
A|-0----------------------------------------|
E|------------------2-----------------------|

Parte 3 de 6
   [Bm]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------3-------3-----------|
G|---4---4---4--------4---4---4-------------|
D|------------------4-----------------------|
A|-2----------------------------------------|
E|------------------------------------------|

Parte 4 de 6
   [G]
E|---------3-----3----------3-----3---------|
B|-----3-------3--------3-------3-----------|
G|---4---4---4--------4---4---4-------------|
D|------------------------------------------|
A|------------------5-----------------------|
E|-3----------------------------------------|

Parte 1 de 6
   [D]
E|---------2-----2----------2-----2---------|
B|-----3-------3--------3-------3-----------|
G|---2---2---2--------2---2---2-------------|
D|-0----------------0-----------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 6
   [A]                [F#]
E|---------0-----0----------2-----2---------|
B|-----2-------2--------2-------2-----------|
G|---2---2---2--------3---3---3-------------|
D|------------------------------------------|
A|-0----------------------------------------|
E|------------------2-----------------------|

Parte 5 de 6
   [G2]
E|------------------------------------------|
B|---------3-----3----------3-----3---------|
G|-----2-------2--------2-------2-----------|
D|---0---0---0--------0---0---0-------------|
A|------------------------------------------|
E|-3----------------3-----------------------|

Parte 6 de 6
   [Em7]             [A4]
E|------------------0-----------------------|
B|---------3-----3--3-----------------------|
G|-----0-------0----2-----------------------|
D|---0---0---0------------------------------|
A|------------------0-----------------------|
E|-0----------------------------------------|

[D]
  A gente não precisa
                  [A]
Tá colado pra tá junto
                        [F#]
Os nossos corpos se conversam

Por horas e horas
[Bm]
   Sem palavras

Tão dizendo a todo instante
[G]
Um pro outro o quanto se adoram

[D]
  Eu não preciso te olhar
                   [A]
Pra te ter em meu mundo
                          [F#]
Porque aonde quer que eu vá
              [G2]
Você está em tudo
                      [Em7]  [A4]
Tudo, tudo que eu preciso  oh
    [D]   [F#m/C#]  [Bm]
Te vivo

( [D]  [F#m/C#]  [Bm]  )

[Primeira parte]

[D]                  [F#m/C#]
  Quando me sinto só
                 [Bm]   [G]
Te faço mais presente
[D]                  [F#m/C#]
  Eu fecho os meus olhos
             [Bm]
E enxergo a gente

[Pré-refrão]

[Em]
   Em questão de segundos
               [Bm]
Voo pra outro mundo

Outra constelação
                  [G]
Não dá para explicar
                [Em]
Ao ver você chegando
             [A]  [A4]
Qual a sensação

[Refrão Final]

[D]
  A gente não precisa
                  [A]
Tá colado pra tá junto
                        [F#]
Os nossos corpos se conversam

Por horas e horas
[Bm]
   Sem palavras

Tão dizendo a todo instante
[G]
Um pro outro o quanto se adoram

[D]
  Eu não preciso te olhar
                   [A]
Pra te ter em meu mundo
                          [F#]
Porque aonde quer que eu vá
              [G2]
Você está em tudo
                      [Em7]  [A4]
Tudo, tudo que eu preciso  oh

[D]
  A gente não precisa
                  [A]
Tá colado pra tá junto
                        [F#]
Os nossos corpos se conversam

Por horas e horas
[Bm]
   Sem palavras

Tão dizendo a todo instante
[G]
Um pro outro o quanto se adoram

[D]
  Eu não preciso te olhar
                   [A]
Pra te ter em meu mundo
                          [F#]
Porque aonde quer que eu vá
              [G2]
Você está em tudo
                      [Em7]  [A4]
Tudo, tudo que eu preciso  oh
    [D]   [F#m/C#]  [D]
Te vivo`,
  },
  {
    id:            "luan-santana-tudo-que-voce-quiser",
    titulo:        "Tudo Que Você Quiser",
    artista:       "Luan Santana",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 3380,
    cifra: `[Intro]

[C]       [F7M/C]     [C]
  Oh oh oh, oh oh oh
      [Am]    [G]
Oh oh oh oh oh
      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]
Oh oh oh oh oh

[Primeira Parte]

     [C]
Tem dias que eu acordo pensando em você
                                        [F7M/C]
Em fração de segundos vejo o mundo desabar
   [C]
E aí que cai a ficha que eu não vou te ver
                                         [F7M/C]
Será que esse vazio um dia vai me abandonar

[Pré-Refrão]

     [Dm]
Tem gente que tem cheiro de rosa, de avelã
    [F7M/C]
Tem o perfume doce de toda manhã
   [C]
Você tem tudo, você tem muito

 [Dm]
Muito mais que um dia eu sonhei pra mim
    [F7M/C]
Tem a pureza de um anjo querubim
     [C]                   [G]
Eu trocaria tudo pra te ter aqui

[Refrão]

     [C]
Eu troco minha paz por um beijo seu

Eu troco meu destino pra viver o seu
     [F7M/C]
Eu troco minha cama pra dormir na sua

Eu troco mil estrelas pra te dar a lua
   [Am]
E tudo que você quiser
                                  [C]
E se você quiser te dou meu sobrenome

[Pós-Refrão]

      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]
Oh oh oh oh oh
      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]
Oh oh oh oh oh

[Pré-Refrão]

     [Dm]
Tem gente que tem cheiro de rosa, de avelã
    [F7M/C]
Tem o perfume doce de toda manhã
   [C]
Você tem tudo, você tem muito

 [Dm]
Muito mais que um dia eu sonhei pra mim
    [F7M/C]
Tem a pureza de um anjo querubim
     [C]                   [G]
Eu trocaria tudo pra te ter aqui

[Refrão]

     [C]
Eu troco minha paz por um beijo seu

Eu troco meu destino pra viver o seu
     [F7M/C]
Eu troco minha cama pra dormir na sua

Eu troco mil estrelas pra te dar a lua
   [Am]
E tudo que você quiser
                                  [F7M/C]
E se você quiser te dou meu sobrenome

     [C]
Eu troco minha paz por um beijo seu

Eu troco meu destino pra viver o seu
     [F7M/C]
Eu troco minha cama pra dormir na sua

Eu troco mil estrelas pra te dar a lua
   [Am]
E tudo que você quiser
                                  [C]
E se você quiser te dou meu sobrenome

[Pós-Refrão]

      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]
Oh oh oh oh oh
      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]  [C]
Oh oh oh oh oh

[Final]

      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]
Oh oh oh oh oh
      [F7M/C]     [C]
Oh oh oh, oh oh oh
      [Am]    [G]  [C]
Oh oh oh oh oh`,
  },
  {
    id:            "luan-santana-sinais",
    titulo:        "Sinais",
    artista:       "Luan Santana",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 465,
    cifra: `[Intro] [A9]  [F#m7(11)]  [D9]
        [A9]  [F#m7(11)]  [D9]

[Tab - Intro]

Parte 1 de 2
E|-8-----3--------------------------------------------|
B|---3-----3---6-----5-----3---5----------------------|
G|-----5-----5---5-5---5-5---5---5--------------------| (3x)
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

E|-8-----3------3--3----------------------------------|
B|---3-----3----6--6----------------------------------|
G|-----5-----5--5--5----------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 2
E|-8-8-8--3-3-3--3-3-3--3-3-3--3-3--3-3---------------|
B|-3-3-3--3-3-3--6-6-6--5-5-5--3-3--5-5---------------|
G|-5-5-5--5-5-5--5-5-5--5-5-5--5-5--5-5---------------| (3x)
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

E|-8-8-8--3-3-3--3-3----------------------------------|
B|-3-3-3--3-3-3--6-6----------------------------------|
G|-5-5-5--5-5-5--5-5----------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

[A9]                        [F#m7(11)]
   Vi seu sorriso em meu sonho
[D9]                       [E]
   Segui seu rastro na areia do deserto
[A9]                        [F#m7(11)]
   Eu escutei sua voz ao vento
[D9]                        [E]
   Senti seu cheiro cada vez de mim mais perto

[Segunda Parte]

[F#m7(11)]                        [E]
         Virei um louco meio obsecado
     [D9]
Pra te encontrar em algum lugar do mundo
[F#m7(11)]                        [E]
         E mesmo sem nunca ter te tocado
    [D9]       [Bm]            [E]
Me pertencia    bem lá no fundo

[Pré-Refrão]

   [D9]                                 [F#m7(11)]
Sinais, me mostraram o caminho até você
                             [D9]
Vagalumes guiam-me sem perceber
                [Bm]       [E]
E no fim da estrada uma luz parece ser você

[Refrão]

   [A9]          [E]
Sinais, me ajudaram
   [F#m7(11)]         [D9]
A perceber o meu caminho é você
[D9/C#]  [Bm]
E ninguém no mundo vai fazer
                       [E]  [D9]  [E]
Eu me sentir denovo assim

   [A9]             [E]
Sinais, vindos de um lugar
     [F#m7(11)]            [D9]
Tão longe às vezes se encondem
 [D9/C#]  [Bm]
No   farol em uma ilha
                         [E]
Numa noite tão vazia eu beijei você
        [A9]
Até o amanhecer

[Solo] [A9]  [F#m7(11)]  [D9]
       [A9]  [F#m7(11)]  [D9]

[Tab - Solo]

E|-8-8-8--3-3-3--3-3-3--3-3-3--3-3--3-3---------------|
B|-3-3-3--3-3-3--6-6-6--5-5-5--3-3--5-5---------------|
G|-5-5-5--5-5-5--5-5-5--5-5-5--5-5--5-5---------------| (3x)
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

E|-8-8-8--3-3-3--3-3----------------------------------|
B|-3-3-3--3-3-3--6-6----------------------------------|
G|-5-5-5--5-5-5--5-5----------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

[Primeira Parte]

[A9]                        [F#m7(11)]
   Vi seu sorriso em meu sonho
[D9]                       [E]
   Segui seu rastro na areia do deserto
[A9]                        [F#m7(11)]
   Eu escutei sua voz ao vento
[D9]                        [E]
   Senti seu cheiro cada vez de mim mais perto

[Segunda Parte]

[F#m7(11)]                        [E]
         Virei um louco meio obsecado
     [D9]
Pra te encontrar em algum lugar do mundo
[F#m7(11)]                        [E]
         E mesmo sem nunca ter te tocado
    [D9]        [Bm]        [E]
Me pertencia bem lá no fundo

[Pré-Refrão]

   [D9]                                 [F#m7(11)]
Sinais, me mostraram o caminho até você
                             [D9]
Vagalumes guiam-me sem perceber
                [Bm]       [E]
E no fim da estrada uma luz parece ser você

[Refrão]

   [A9]          [E]
Sinais, me ajudaram
   [F#m7(11)]         [D9]
A perceber o meu caminho é você
[D9/C#]  [Bm]
E ninguém no mundo vai fazer
                       [E]  [D9]  [E]
Eu me sentir denovo assim

   [A9]             [E]
Sinais, vindos de um lugar
     [F#m7(11)]            [D9]
Tão longe às vezes se encondem
 [D9/C#]  [Bm]
No   farol em uma ilha
                         [E]
Numa noite tão vazia eu beijei você
        [A9]
Até o amanhecer`,
  },
  {
    id:            "luan-santana-escreve-ai",
    titulo:        "Escreve Ai",
    artista:       "Luan Santana",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2976,
    cifra: `[Intro] [F7M]  [Em7]  [F7M]  [Em7]

[Tab - Intro]

  [F7M]   [Em7]  [F7M]        [Em7]  [F7M]
E|-0--0-------0----0--0-------0--------------|
B|-1--1--3----1----1--1--3----1--------------|
G|-2--2--4----2----2--2--4----2--------------|
D|-3--3--5----3----3--3--5----3--------------|
A|-------------------------------------------|
E|-------0---------------0-------------------|

[Primeira Parte]

[Tab - Primeira Parte]

Parte 1 de 4
   [C]
E|------------------------------------------|
B|-1---1---1---1---1---1---1---1------------|
G|-0---0---0---0---0---0---0---0------------|
D|---2---2---2---2---2---2---2---2----------|
A|-3---------------3------------------------|
E|------------------------------------------|

Parte 2 de 4
   [Am7]
E|------------------------------------------|
B|-1---1---1---1---1---1---1---1------------|
G|-0---0---0---0---0---0---0---0------------|
D|---2---2---2---2---2---2---2---2----------|
A|-0---------------0------------------------|
E|------------------------------------------|

Parte 3 de 4
   [F]        [F7M]   [Em7]  [F7M]
E|-----------0--0-------0-------------------|
B|-1---1-----1--1--3----1-------------------|
G|-2---2-----2--2--4----2-------------------|
D|---3---3---3--3--5----3-------------------|
A|------------------------------------------|
E|-1---------------0------------------------|

Parte 4 de 4
   [C]
E|------------------------------------------|
B|-1---1---1---1----------------------------|
G|-0---0---0---0----------------------------|
D|---2---2---2---2--------------------------|
A|-3----------------------------------------|
E|------------------------------------------|

[C]
  Te falo tanta coisa

Enquanto tento segurar a lágrima
                [Am7]
Que insiste em cair

Entro no meu carro, abro o vidro

E antes de ir embora
                   [F]
Eu te digo olha aqui
       [F7M]       [Em7]  [F7M]
Ainda vou te esque___cer
        [C]
Escreve aí

[Segunda Parte]

[C]
  Chego em casa dou de cara com sua foto
                              [Am7]
Uma ducha e um vinho pra acalmar

E eu penso vou partir pra outra logo

Mas quem é que eu tô
              [F]  [F7M]  [Em7]  [F7M]
Tentando enganar

Mas quem é que eu tô
              [C]
Tentando enganar

[Pré-Refrão]

[Tab - Pré-Refrão]

Parte 1 de 2
   [G4]    [G]  [F]
E|-3-3-3-3----------------------------------|
B|-1-1-1-0--1---1---1---1-------------------|
G|-0-0-0-0--2---2---2---2-------------------|
D|------------3---3---3---3-----------------|
A|------------------------------------------|
E|-3-3-3-3--1-------------------------------|

Parte 2 de 2
   [G4]    [G]  [F/A]            [G/B]        [C/E]
E|-3-3-3-3------------------3---3---3--0----|
B|-1-1-1-0--1---1---1---1---3---3---3--1----|
G|-0-0-0-0--2---2---2---2-----0---0----0----|
D|------------3---3---3---3------------2----|
A|----------0---------------2----------x----|
E|-3-3-3-3-----------------------------0----|

        [G4]            [G]
É só você fazer assim
        [F]
Que eu volto
       [G4]             [G]
É só você fazer assim
        [F/A]
Que eu volto
         [G/B]  [C/E]
Que eu volto

[Refrão]

            [F]
É que eu te amo e falo na sua cara
            [G]
Se tirar você de mim não sobra nada
          [Em7]
O teu sorriso me desmonta inteiro
        [Am7]
Até um simples estalar de dedos

          [F]
Talvez você tenha deixado eu ir
           [G]
Pra ter o gosto de me ver aqui
         [Em7]
Fraco demais para continuar
          [Am7]
Juntando forças pra poder falar

[Pós-Refrão]

        [F]             [G]
Que eu volto, é só você sorrir
        [F]             [G]
Que eu volto, é só fazer assim
        [C]         [F]
Que eu volto, eu volto
    [C]    [F7M]  [Em7]  [F7M]
Eu volto

[Segunda Parte]

[C]
  Chego em casa dou de cara com sua foto
                              [Am7]
Uma ducha e um vinho pra acalmar

E eu penso vou partir pra outra logo

Mas quem é que eu tô
              [F]  [F7M]  [Em7]  [F7M]
Tentando enganar

Mas quem é que eu tô
              [C]
Tentando enganar

[Pré-Refrão]

        [G4]
É só você fazer assim
        [F]
Que eu volto
        [G4]
É só você fazer assim
        [F/A]
Que eu volto
        [G/B]
Que eu volto

[Refrão]

[C/E]         [F]
É que eu te amo e falo na sua cara
            [G]
Se tirar você de mim não sobra nada
          [Em7]
O teu sorriso me desmonta inteiro
        [Am7]
Até um simples estalar de dedos

          [F]
Talvez você tenha deixado eu ir
           [G]
Pra ter o gosto de me ver aqui
         [Em7]
Fraco demais para continuar
          [Am7]
Juntando forças pra poder falar

[Pós-Refrão]

        [F]             [G]
Que eu volto, é só você sorrir
        [F]             [G]
Que eu volto, é só fazer assim

[Final]

[Tab - Final]

Parte 1 de 3
   [F]                 [G]
E|-------------------3----------------------|
B|-1---1---1---1-----3----------------------|
G|-2---2---2---2-----0----------------------|
D|---3---3---3---3---0----------------------|
A|-------------------2----------------------|
E|-1-----------------3----------------------|

Parte 2 de 3
   [C]                [F]
E|------------------------------------------|
B|-1---1---1---1----1---1---1---1-----------|
G|-0---0---0---0----2---2---2---2-----------|
D|---2---2---2---2----3---3---3---3---------|
A|-3----------------------------------------|
E|------------------1-----------------------|

Parte 3 de 3
   [C]                [F7M]   [Em7]  [F7M]
E|-------------------0--0-------0-----------|
B|-1---1---1---1-----1--1--3----1-----------|
G|-0---0---0---0-----2--2--4----2-----------|
D|---2---2---2---2---3--3--5----3-----------|
A|-3----------------------------------------|
E|-------------------------0----------------|

        [F]             [G]
Que eu volto, é só fazer assim
        [C]         [F]
Que eu volto, eu volto
        [C]    [F7M]  [Em7]  [F7M]
Que eu volto`,
  },
  {
    id:            "luan-santana-ilha",
    titulo:        "Ilha",
    artista:       "Luan Santana",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2484,
    cifra: `[Intro] [Bm]  [D2]  [G]  [Em]

[Tab - Solo Intro]

Parte 1 de 2
               [Bm]       [D2]        [G]        [Em]
E|------------------------------------------|
B|--3p2----2-2h3--3-3/5-3-----5-5/7----8---5|
G|--4----4---------------------------7---4--|
D|--4----------------------7----------------|
A|------------------------------------------|
E|------------------------------------------|
  P.m

Parte 2 de 2
E|------------------------------------------|
B|--3/5/3-----------------------------------|
G|------------------------------------------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Primeira Parte]

[D2]                                 [A4]  [A]
   Quero que prometa que se comprometa
                                      [Bm]
A ir procurar outro amor em outro planeta
                                   [G]
Pra que eu não te veja sentada na mesa
                                    [D2]
Rindo à toa enquanto outra boca te beija
        [A4]  [A]
Ai, ai, ah

[Pré-Refrão]

 [Bm]                  [G]
Vou engolir meu coração pra me amar por dentro
  [D2]
Que nós dois sabemos que tanto sofrimento
[A4]
É perda de tempo, é perda de tempo
 [Bm]                   [G]
Vou transformar decepção em novo começo
   [D2]
O passado é um erro, o presente é só acerto
  [A4]
Amor, eu te prometo

[Refrão]

                 [Bm]
Também vou procurar outro amor em outro planeta
  [G]
Guarda o seu ciúme em qualquer gaveta
[D]                                          [A4]
  Primeiro a gente peita, depois a gente aceita
                        [Bm]
Que amores vêm, amores vão
                            [G]
Cê vai pro céu, volta pro chão
                                     [A]
E quando tá pra se afogar no mar da vida
        [G]           [A4]              [Bm]
Vem alguém, vem alguém, que se torna ilha

[Solo] [Bm]  [G]  [D2]  [F#m]

[Tab - Solo]

Parte 1 de 2
             [Bm]       [G]        [D2]         [F#m]
E|------------------------------------------|
B|--3p2----2h3--3-5-5/7----8---7------7/2-2-|
G|-------4---------------7---7------7-------|
D|------------------------------------------|
A|------------------------------------------|
E|------------------------------------------|

Parte 2 de 2
E|------------------------------------------|
B|-x-x-5/7/5-x-x-3/5/3----------------------|
G|-x-x-------x-x----------------------------|
D|-x-x-------x-x----------------------------|
A|------------------------------------------|
E|------------------------------------------|

[Pré-Refrão]

 [Bm]                  [G]
Vou engolir meu coração pra me amar por dentro
  [D2]
Que nós dois sabemos que tanto sofrimento
[A4]
É perda de tempo, é perda de tempo
 [Bm]                   [G]
Vou transformar decepção em novo começo
   [D2]
O passado é um erro, o presente é só acerto
  [A4]
Amor, eu te prometo

[Refrão]

                 [Bm]
Também vou procurar outro amor em outro planeta
 [G]
Guarda o seu ciúme em qualquer gaveta
[D]                                          [A4]   [A]
  Primeiro a gente peita, depois a gente aceita
                        [Bm]
Que amores vêm, amores vão
                            [G]
Cê vai pro céu, volta pro chão
                                     [A4]
E quando tá pra se afogar no mar da vida
        [G]           [A4]
Vem alguém, vem alguém

                 [Bm]
Também vou procurar outro amor em outro planeta
  [G]
Guarda o seu ciúme em qualquer gaveta
[D]                                          [A]
  Primeiro a gente peita, depois a gente aceita
                        [Bm]
Que amores vêm, amores vão
                            [G]
Cê vai pro céu, volta pro chão
                                     [A]
E quando tá pra se afogar no mar da vida
        [G]           [A]               [D]
Vem alguém, vem alguém, que se torna ilha`,
  },
  {
    id:            "luan-santana-tanto-faz",
    titulo:        "Tanto Faz",
    artista:       "Luan Santana",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2264,
    cifra: `Primeira Parte:

[Am]
   O quarto meio escuro

A janela aberta
   [F7M]
A porta encostada
                [C]
A lua está tão bela
          [G]
E eu to aqui sentindo falta de você

    [Am]
Já vi todos os filmes

Li todos os livros
[F7M]
E to esperando
             [C]
A próxima novela
          [G]
Tudo porque eu to tentando te esquecer

Pré-refrão:

[Dm]                       [F7M]
   Em qualquer lugar que eu vou
                     [C]
Onde você está eu estou

Refrão:

O meu pensamento te segue

Minha saudade te persegue
        [Dm]
O meu amor não envelhece

Você não sai da minha mente

   [C]
É que você me causa febre

De uns 40 graus ou um pouco mais
         [Dm]
Eu quero é você

Eu amo só você
     [F7M]   [G]     [C]
E o resto tanto faz
          [Dm]  [F7M]
Tanto faz

Pré-refrão:

[Dm]                       [F7M]
   Em qualquer lugar que eu vou
                     [C]
Onde você está eu estou

Refrão:

O meu pensamento te segue

Minha saudade te persegue
        [Dm]
O meu amor não envelhece

Você não sai da minha mente

   [C]
É que você me causa febre

De uns 40 graus ou um pouco mais
         [Dm]
Eu quero é você

Eu amo só você
     [F7M]  [G]
E o resto

[C]
O meu pensamento te segue

Minha saudade te persegue
        [Dm]
O meu amor não envelhece

Você não sai da minha mente

   [C]
É que você me causa febre

De uns 40 graus ou um pouco mais
         [Dm]
Eu quero é você

Eu amo só você
     [F7M]   [G]     [C]
E o resto tanto faz
          [Dm]
Tanto faz
     [F7M]   [G]     [C]
E o resto tanto faz`,
  },
  {
    id:            "luan-santana-amar-nao-e-pecado",
    titulo:        "Amar Não É Pecado",
    artista:       "Luan Santana",
    tom:           "B",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2544,
    cifra: `[Intro] [G#m7]  [E]  [B5]  [F#11]
        [G#m7]  [E]  [B5]  [F#11]

[Tab - Intro]

   [G#m7]         [E]            [B5]             [F#11]
E|-----------------------------------------------------|
B|-------0------------0------------0-------------0-----|
G|-----4---4--------1---1--------4---4---------3---3---|
D|---4-------4----2-------2----4-------4-----4-------4-|
A|---------------------------2-------------------------|
E|-4------------0---------------------------2----------|

[Primeira Parte]

           [G#m7]             [E]
Eu não sei      de onde vem
      [B5]           [F#11]
Essa força que me leva pra você
[G#m7]           [E]
     Eu só sei   que faz bem
        [B5]           [F#11]
Mas confesso que no fundo eu duvidei

[G#m7]           [E]              [B5]
     Tive medo   e em segredo
                     [F#11]
Guardei o sentimento e me sufoquei
[G#m7]           [E]
     Mas agora   é a hora
           [B5]                        [F#11]
Eu vou gritar pra todo mundo de uma vez

[Refrão]

             [B9]
Eu tô apaixonado
                [F#]
Eu tô contando tudo
                [G#m]                    [E]
E não tô nem ligando pro que vão dizer
              [B9]
Amar não é pecado
                 [F#]
E se eu tiver errado
               [G#m]                    [E]
Que se dane o mundo, eu só quero você

             [B9]
Eu tô apaixonado
                [F#]
Eu tô contando tudo
                [G#m]                    [E]
E não tô nem ligando pro que vão dizer
              [B9]
Amar não é pecado
                 [F#]
E se eu tiver errado
               [G#m]                    [E]
Que se dane o mundo, eu só quero você

[Ponte] [G#m7]  [E]  [B5]  [F#11]
        [G#m7]  [E]  [B5]  [F#11]

[Tab - Ponte]

   [G#m7]         [E]            [B5]             [F#11]
E|-----------------------------------------------------|
B|-------0------------0------------0-------------0-----|
G|-----4---4--------1---1--------4---4---------3---3---|
D|---4-------4----2-------2----4-------4-----4-------4-|
A|---------------------------2-------------------------|
E|-4------------0---------------------------2----------|

[Primeira Parte]

           [G#m7]             [E]
Eu não sei      de onde vem
      [B5]           [F#11]
Essa força que me leva pra você
[G#m7]           [E]
     Eu só sei   que faz bem
        [B5]           [F#11]
Mas confesso que no fundo eu duvidei

[G#m7]           [E]              [B5]
     Tive medo   e em segredo
                     [F#11]
Guardei o sentimento e me sufoquei
[G#m7]           [E]
     Mas agora   é a hora
           [B5]                        [F#11]
Eu vou gritar pra todo mundo de uma vez

[Refrão]

             [B9]
Eu tô apaixonado
                [F#]
Eu tô contando tudo
                [G#m]                    [E]
E não tô nem ligando pro que vão dizer
              [B9]
Amar não é pecado
                 [F#]
E se eu tiver errado
               [G#m]                    [E]
Que se dane o mundo, eu só quero você

             [B9]
Eu tô apaixonado
                [F#]
Eu tô contando tudo
                [G#m]                    [E]
E não tô nem ligando pro que vão dizer
              [B9]
Amar não é pecado
                 [F#]
E se eu tiver errado
               [G#m]                    [E]
Que se dane o mundo, eu só quero você`,
  },
  {
    id:            "luan-santana-meteoro",
    titulo:        "Meteoro",
    artista:       "Luan Santana",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 5090,
    cifra: `[Refrão]

[A]                         [E]
  Te dei o sol, te dei o mar
                    [F#m]
Pra ganhar seu coração
                   [D]
Você é raio de saudade
               [A]
Meteoro da paixão
                  [E]
Explosão de sentimentos
                        [F#m]
Que eu não puder acreditar
            [D]
Ah! como é bom poder te amar

[Solo] [A]  [E]  [F#m]  [D]
       [A]  [E]  [F#m]  [D]

[Tab - Solo]

Parte 1 de 6
E|--------------------------------------------|
B|--------------------------------------------|
G|-------2-2-2-2-2-2-2-2----------------------|
D|-------2-2-2-2-2-2-2-2----------------------|
A|-0-2/4--------------------------------------|
E|--------------------------------------------|

Parte 2 de 6
E|--------------------------------------------|
B|-3/5-5-5-5-5-5-5----------------------------|
G|-2/4-4-4-4-4-4-4----------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

Parte 3 de 6
E|---------2-0-2------------------------------|
B|--3-------------2---------------------------|
G|-2---1/2---1-2--2---------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

Parte 4 de 6
E|--------------------------------------------|
B|--------------------------------------------|
G|-2-2-2-2-2-2--------------------------------|
D|-2-2-2-2-2-2--------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

Parte 5 de 6
E|--------------------------------------------|
B|-3/5-5-5-5-5-5-5----------------------------|
G|-2/4-4-4-4-4-4-4----------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

Parte 6 de 6
E|--------9-7-7/9-95-------------------------|
B|-3------------------------------------------|
G|2---7h9-9-7-7/9-96-------------------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

[Primeira Parte]

[A]                        [E]
  Depois que eu te conheci
            [F#m]
Fui mais feliz
             [D]
Você é exatamente
                     [A]
O que eu sempre quis
                   [E]             [F#m]
Ela se encaixa perfeitamente em mim
                  [D]
O nosso quebra-cabeça teve fim

[Pré-Refrão]

[Tab - Pré-Refrão]

   [A4]
E|-----10p9----12-----10p9---12-----10p9---12-|
B|---9------9-------9------9------9------9----|
G|-9--------------9-------------9-------------|
D|--------------------------------------------|
A|--------------------------------------------|
E|--------------------------------------------|

   [F#m]          [D9]
E|-------3------------5--------5-------5------|
B|-----3---3----------5--------5-------5------|
G|---3-------3------7------7---------7-----7--|
D|-4--------------7------7---7-----7-----7---7|
A|--------------5----------------5------------|
E|--------------------------------------------|

[A4]
   Se for sonho não me acorde
       [F#m]      [D9]
Eu preciso flutuar

Pois só quem sonha
    [E]
Consegue alcançar

[Refrão]

[A]                         [E]
  Te dei o sol, te dei o mar
                    [F#m]
Pra ganhar seu coração
                   [D]
Você é raio de saudade
               [A]
Meteoro da paixão
                  [E]
Explosão de sentimentos
                        [F#m]
Que eu não puder acreditar
            [D]
Ah! Como é bom poder te amar

( [A]  [E]  [D]  [F#m]  [E] )
( [A]  [E]  [D]  [F#m]  [E] )

[Primeira Parte]

[A]                        [E]
  Depois que eu te conheci
            [F#m]
Fui mais feliz
             [D]
Você é exatamente
                     [A]
O que eu sempre quis
                   [E]             [F#m]
Ela se encaixa perfeitamente em mim
                  [D]         [A]
O nosso quebra-cabeça teve fim

[Pré-Refrão]

        [E]             [F#m]
Se for sonho não me acorde
                   [D]
Eu preciso flutuar

Pois só quem sonha
    [E]
Consegue alcançar

[Refrão]

[A]                         [E]
  Te dei o sol, te dei o mar
                    [F#m]
Pra ganhar seu coração
                   [D]
Você é raio de saudade
               [A]
Meteoro da paixão
                  [E]
Explosão de sentimentos
                        [F#m]
Que eu não puder acreditar
            [D]
Ah! Como é bom poder te amar

[Terceira Parte]

[A]     [G#m]    [F#m]          [E]
  Tão     veloz quanto a luz
         [D]           [A]
Pelo Universo eu viajei
         [F#m]        [E]
Vem me guia, me conduz
         [D]            [E]
Que pra sempre te amarei

[Refrão]

[A]                         [E]
  Te dei o sol, te dei o mar
                    [F#m]
Pra ganhar seu coração
                   [D]
Você é raio de saudade
               [A]
Meteoro da paixão
                  [E]
Explosão de sentimentos
                        [F#m]
Que eu não puder acreditar
            [D]
Ah! Como é bom poder te amar

[A]                         [E]
  Te dei o sol, te dei o mar
                    [F#m]
Pra ganhar seu coração
                   [D]
Você é raio de saudade
               [A]
Meteoro da paixão
                  [E]
Explosão de sentimentos
                        [F#m]
Que eu não puder acreditar
            [D]
Ah! Como é bom poder te amar

[F#m]         [D]
Ah! Como é bom poder te amar

[Final] [A]  [E]  [F#m]  [D]  [A]

[Tab - Solo Final]

E|--------------------------------------------|
B|----------------------3/5-5-5-5-5-5-5-------|
G|-------2-2-2-2-2-2-2--2/4-4-4-4-4-4-4-------|
D|-------2-2-2-2-2-2-2------------------------|
A|-0-2/4--------------------------------------|
E|--------------------------------------------|

E|-----------5--------------------------------|
B|-----7-5-7-----7-5--------------------------|
G|-5/7---------------7-76-64-4-----2--------|
D|-------------------------------2h4----------|
A|--------------------------------------------|
E|--------------------------------------------|`,
  },
  {
    id:            "luan-santana-dia-lugar-e-hora",
    titulo:        "Dia, Lugar e Hora",
    artista:       "Luan Santana",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2700,
    cifra: `Intro: [E]  [Am9]  [E]  [Am9]  [E]  [A9]
       [E]  [A/E]  [E]  [E4]

Primeira Parte - Primeira Estrofe:

      [E]
Se a moça do café não demorasse tanto

Pra me dar o troco
   [E7]  [D/F#]  [E/G#]  [A7M]
Se eu não   ti____vesse

Discutido na calçada
                 [Am]
Com aquele cara louco
                       [E]
E ó que eu nem sou de rolo

Parte 1 de 3

   [E]   [E7]    [D/F#]  [E/G#]
E|-0---4-----2-----4------------------------|
B|-0---3-----3-----5------------------------|
G|-1---4-----2-----4------------------------|
D|-2----------------------------------------|
A|-2----------------------------------------|
E|-0---0-----2-----4------------------------|

Parte 2 de 3

        [A7M]              [Am]
E|-2/4----------4---4-----------------------|
B|----------5---5---5----5------------------|
G|--------6---6---6---6--5------------------|
D|------------------------------------------|
A|------0----------------0------------------|
E|------------------------------------------|

Parte 3 de 3

   [E]
E|------------------------------------------|
B|-9--9--10--9--7--9------------------------|
G|-9--9---9--9--8--9------------------------|
D|-9--9--11--9-----9------------------------|
A|------------------------------------------|
E|-0----------------------------------------|

Primeira Parte - Segunda Estrofe:

       [E]
Se eu não tivesse atravessado
                         [E7]
Aquela hora no sinal vermelho
(lick 1)     A9
Se eu não parasse bem na hora do almoço
                [Am]
Pra cortar o cabelo
                      (lick 2)
E ó que eu nem sou vaidoso

Parte 1 de 4

E|-0-0--0-0-0-0--0-0-0---0-0-0-0------------|
B|-0-0--0-0-0-0--0-0-0---0-0-0-0------------|
G|-1-1--1-1-1-1--1-1-1---1-1-1-1------------|
D|-2-2--2-2-2-2--2-2-2---0-0-0-0------------|
A|-2-2--2-2-2-2--2-2-2---2-2-2-2------------|
E|-0-0--0-0-0-0--0-0-0---0-0-0-0------------|
   ↓ ↓  ↑ ↓ ↑ ↓  ↓ ↓ ↑    ↓ ↓ ↓ ↑

Parte 2 de 4(Lick 1)

E|------------------------------------------|
B|-7/9-7-5----------------------------------|
G|------------------------------------------|
D|-7/9-7-6----------------------------------|
A|------------------------------------------|
E|---------73------------------------------|

Parte 3 de 4

E|-0-0--0-0-0-0--0-0-0---0-0-0-0-0----------|
B|-0-0--0-0-0-0--0-0-0---1-1-1-1-1----------|
G|-2-2--2-2-2-2--2-2-2---2-2-2-2-2----------|
D|-2-2--2-2-2-2--2-2-2---2-2-2-2-2----------|
A|-0-0--0-0-0-0--0-0-0---0-0-0-0-0----------|
E|------------------------------------------|
   ↓ ↓  ↑ ↓ ↑ ↓  ↓ ↓ ↑    ↓ ↓ ↓ ↑ ↓

Lick 2:

E|------------------------------------------|
B|-9h10-9--7/95----------------------------|
G|-9----9-----------------------------------|
D|-9h11-9--7/96----------------------------|
A|------------------------------------------|
E|------------------------------------------|

Pré-refrão:

    [E]            [B/D#]
Eu não teria te encontrado
    [Bm/D]          [D/E]  [E/G#]
Eu não teria me apaixonado
    [A]
Mas   aconteceu
           [Am]              [E]  [B]
Foi mais forte que eu e você

Aí eu disse

Parte 1 de 2

   [E]        [B/D#]      [Bm/D]     [D/E]  [E/G#]
E|-0---0-----------------------2----4-------|
B|-0---0----7---7-----7---7----3----5-------|
G|---1---1--4---4-----4---4------2----4-----|
D|------------4---4-----4---4---------------|
A|----------6---------5---------------------|
E|-0---------------------------0----4-------|

Parte 2 de 2

   [A]                         [E]    [B]
E|-----------0--0---0-0-0----0-0----0-0h2---|
B|-0h2-----0-----------------0-0--4-------0-|
G|-2-----2------4/5-4-2-2h4--1-1------------|
D|-----2--------------------------4---------|
A|-0------------------------------2---------|
E|---------------------------0--------------|

Refrão:

 [E]                     [F#m7(11)]
Quer que eu faça um café?
               [B4]
Ou faça minha vida
                [C#m7]
Se encaixar na sua?
  [B4]           [A9]
Aqui mesmo na rua
  [E/G#]        [F#m7(11)]
Era pra ser agora
               [E/G#]  [A9]
Quando é pra acon_tecer

Tem dia, lugar e tem hora

Intro: [E]  [Am9]  [E]  [Am9]  [E]  [A9]
       [E]  [A/E]  [E]  [E4]

Repetição Primeira Parte - Segunda Estrofe:

       [E]
Se eu não tivesse atravessado
                         [E7]
Aquela hora no sinal vermelho
(lick 1)     A9
Se eu não parasse bem na hora do almoço
                [Am]
Pra cortar o cabelo
                       [E]
E ó que eu nem sou vaidoso

Repetição Pré-refrão:

    [E]            [B/D#]
Eu não teria te encontrado
    [Bm/D]          [D/E]  [E/G#]
Eu não teria me apaixonado
    [A9]
Mas    aconteceu
           [Am]              [E]
Foi mais forte que eu e você

Aí eu disse

Refrão:

 [E]                     [F#m7(11)]
Quer que eu faça um café?
               [B4]
Ou faça minha vida
                [C#m7]
Se encaixar na sua?
  [B4]           [A9]
Aqui mesmo na rua
  [E/G#]        [F#m7(11)]
Era pra ser agora
               [E/G#]  [A9]
Quando é pra acon_tecer
     [B4]               [E]
Tem dia, lugar e tem hora
[B4]
Eu disse

 [E]                     [F#m7(11)]
Quer que eu faça um café?
               [B4]
Ou faça minha vida
                [C#m7]
Se encaixar na sua?
  [B4]           [A9]
Aqui mesmo na rua
  [E/G#]        [F#m7(11)]
Era pra ser agora
               [E/G#]  [A9]
Quando é pra acon_tecer
     [B4]
Tem dia, lugar e tem hora

Intro: [E]  [Am9]  [E]  [Am9]  [E]  [A9]
       [E]  [A/E]  [E]  [E4]

      [E]
Se a moça do café não demorasse tanto

Base Solo: [C#m7]  [B4]  [A9] (8x)

Solo:

Parte 1 de 6

E|----------------------------------------------------|
B|------------12~-------------------12p11p97---7-----|
G|-11b13r11p9-------11/13---------------------9---9/11|
D|------------------------11~9/119-------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 2 de 6

E|-----9--11b12~~r11p9--------14-16-------------------|
B|-/9-------------------17b19-------14~~b\------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 3 de 6

E|-19-------------------------------------------------|
B|----17----------2119p17----------------14-16-------|
G|-------14/16-18----------16-------11/13-------------|
D|----------------------------1814-------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 4 de 6

E|----------------------------------------------------|
B|----------------------------------------------------|
G|-11/13-13~~-----------------------------------------|
D|----------------------------------------------------|
A|----------------------------------------------------|
E|----------------------------------------------------|

Parte 5 de 6

E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-11~~9-11------------------------------------------|
A|------------9/11~-----------------------------------|
E|----------------------------------------------------|

Parte 6 de 6

E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|------9---------------------------------------------|
A|-9/11---11-9-7-9------------------------------------|
E|-----------------9~---------------------------------|`,
  },
  {
    id:            "luan-santana-eu-voce-o-mar-e-ela",
    titulo:        "Eu, Você, o Mar e Ela",
    artista:       "Luan Santana",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1658,
    cifra: `Intro: [Dm7]  [F]  [Am]  [G4(6)]

Intro e Primeira Parte:

Parte 01 de 02

   [Dm7]              [F]
E|---------------5--------5-----7-8---------|
B|-------6-----8--------6-----6-------------|
G|-----5-----5--------5-----5---------------|
D|---7-----7--------------------------------|
A|-5----------------8-----------------------|
E|------------------------------------------|

Parter 02 de 02

   [Am]                [G4(6)]
E|-------8-----10-7--------7-----8-5--------|
B|-----5-----5-----------5-----5------------|
G|---5-----5-----------5-----5--------------|
D|-7-----------------5----------------------|
A|------------------------------------------|
E|------------------------------------------|

Primeira Parte:

[Dm7]        [F]          [Am]     [G4(6)]
    Ser romântico às vezes ajuda
[Dm7]         [F]
    Mas se fecho os olhos
 [Am]         [G4(6)]
Te imagino nua

[Dm7]           [F]
    Talvez pareça
          [Am]      [G4(6)]
Uma cena de Hollywood
[Dm7]        [F]                  [Am]
    Se tá pensando isso, por favor
         [G4(6)]
Não se ilude

[Dm7]        [F]         [Am]        [G4(6)]
    Eu só quero uma noite de amor
[Dm7]         [F]
    Como as outras
        [Am]          [G4(6)]
Só mais uma que passou

Refrão:

                       [Am]
Mas foi só a porta fechar
     [G]               [Dm]
Pra mudar minha cabeça
   [F]                [Am]
A sua boca vale o preço
                 [G]              [Dm]
Pra perder o sossego que eu tinha


   [F]                [Am]
A lua até beijou o mar
     [G]                [Dm]
Pra não ficar de vela
    [F]                   [Am]
Os quatro perdidos de amor
       [G]          [Dm]  [F]
Eu, você, o mar e ela
[Am]        [G]          [Dm]  [F]  [Am]  [G]
   Eu, você, o mar e ela

Primeira Parte:

[Dm]        [F]          [Am]     [G]
   Ser romântico às vezes ajuda
[Dm]         [F]
   Mas se fecho os olhos
 [Am]         [G]
Te imagino nua

[Dm]           [F]
   Talvez pareça
          [Am]      [G]
Uma cena de Hollywood
[Dm]        [F]                  [Am]
   Se tá pensando isso, por favor
         [G]
Não se ilude

[Dm]        [F]         [Am]        [G]
   Eu só quero uma noite de amor
[Dm]         [F]
   Como as outras
        [Am]          [G]
Só mais uma que passou

Refrão:

                       [Am]
Mas foi só a porta fechar
     [G]               [Dm]
Pra mudar minha cabeça
   [F]                [Am]
A sua boca vale o preço
                 [G]              [Dm]
Pra perder o sossego que eu tinha

   [F]                [Am]
A lua até beijou o mar
     [G]                [Dm]
Pra não ficar de vela
    [F]                   [Am]
Os quatro perdidos de amor
       [G]          [Dm]  [F]
Eu, você, o mar e ela
[Am]        [G]          [Dm]  [F]  [Am]
   Eu, você, o mar e ela

     [F]                 [Am]
Mas foi só a porta fechar
     [G]               [Dm]
Pra mudar minha cabeça
   [F]                [Am]
A sua boca vale o preço
                 [G]              [Dm]
Pra perder o sossego que eu tinha

                    [Am]
A lua até beijou o mar
     [G]                [Dm]
Pra não ficar de vela
    [F]                   [Am]
Os quatro perdidos de amor
       [G]          [Dm]  [F]  [Am]  [G]
Eu, você, o mar e ela
        [Dm]  [F]  [Am]
O mar e ela
       [G]
Eu, você, o mar e ela`,
  },
  {
    id:            "luan-santana-garotas-nao-merecem-chorar",
    titulo:        "Garotas Não Merecem Chorar",
    artista:       "Luan Santana",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4728,
    cifra: `[Primeira Parte]

[Em7]
Ela é uma mulher menina que precisa
   [G]
Urgentemente ser mais forte
[Am7]
Ela quer alguém que leia seu sorriso
   [G]
Antes de olhar seu decote

[Em7]
Ela vê suas amigas se entregando
     [G]
Ao primeiro que aparecer
 [Am]        [G]         [D]
Numa tentativa boba de se preencher

        [Am]               [G]
E|------------------------------------------|
B|------------0h1p0-------------------------|
G|--------2---------2------0---2h4p2-0------|
D|----------2---------2------0--------------|
A|-10\--0-----------------------------------|
E|-----------------------3------------------|

   [D]
E|------------------------------------------|
B|-----3------------------------------------|
G|---2---2----------------------------------|
D|-4----------------------------------------|
A|-5----------------------------------------|
E|------------------------------------------|

[Pré-refrão]

[C9]
   Garotas querem mais
  [G]                   [D]
Amor de verdade mais sinceridade
[C9]
   Garotos são todos iguais
     [G]                [D]
Têm necessidade, não passam vontade
[Am7]                     [C9]  [D]
    Mas tô aqui pra provar

[Refrão]

    [G]                                  [Em7]
Eu não te deixaria por uma aventura à toa e nem
[D]
  Te trocaria por qualquer outra pessoa
[Am7]                    [C9]         [D]
    Só pra matar a vontade, o crime não compensa

   [G]                              [Em7]
Garotas inocentes não merecem chorar
     [D]
Por garotos que não tem a verdade no olhar
[Am7]                  [C9]         [D]             [G]
    Escolhi ser diferente amor,   só pra te amar

[Primeira Parte]

[Em7]
Ela é uma mulher menina que precisa
   [G]
Urgentemente ser mais forte
[Am7]
Ela quer alguém que leia seu sorriso
   [G]
Antes de olhar seu decote

[Em7]
Ela vê suas amigas se entregando
     [G]
Ao primeiro que aparecer
 [Am]        [G]         [D]
Numa tentativa boba de se preencher

[Pré-refrão]

[C9]
   Garotas querem mais
  [G]                   [D]
Amor de verdade mais sinceridade
[C9]
   Garotos são todos iguais
     [G]                [D]
Têm necessidade, não passam vontade
[Am7]                     [C9]  [D]
    Mas tô aqui pra provar

[Refrão]

    [G]                                  [Em7]
Eu não te deixaria por uma aventura à toa e nem
[D]
  Te trocaria por qualquer outra pessoa
[Am7]                    [C9]         [D]
    Só pra matar a vontade, o crime não compensa

   [G]                              [Em7]
Garotas inocentes não merecem chorar
     [D]
Por garotos que não tem a verdade no olhar
[Am7]                  [C9]        [D]
    Escolhi ser diferente amor

    [G]                                  [Em7]
Eu não te deixaria por uma aventura à toa e nem
[D]                                     [Am7]
  Te trocaria por qualquer outra pessoa
[C9]       [D]
   O crime não compensa

   [G]                              [Em7]
Garotas inocentes não merecem chorar
     [D]
Por garotos que não tem a verdade no olhar
[A]                  [C9]        [D]
  Escolhi ser diferente amor
            [G]  [Em7]
Só pra te amar
[C9]                  [Am7]       [D]
   Escolhi ser diferente amor
            [G]
Só pra te amar`,
  },
  {
    id:            "luan-santana-agua-com-acucar",
    titulo:        "Água Com Açúcar",
    artista:       "Luan Santana",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1811,
    cifra: `[Primeira Parte]

                               [C]
Você terminou com ele é tá chorando
                           [Am7]
Quer água com açúcar ou o meu amor?
                             [F7M]
E se eu te contar que a água acabou
                        [C]             [G]
E o açúcar que tem é só   do meu amor?

[Pré-Refrão]

                  [F7M]
Que coincidência, ó
                [G]
Eu sozinho e você só
                            [Em]
Porque que a gente não se amarra?
                    [Am7]
Um no outro e da um nó?
                      [F7M]
Eu sei você quer desistir
                       [G]
Mas tenho uma opção melhor

[Refrão]

               [C]
Antes de desistir do amor
                  [Am7]
Tenta o meu, por favor

Se não servir, cê joga fora
                         [F7M]
Vai embora e diz que não deu
     [G]                          [C]   [G]
Mas antes disso prova um beijo meu

( [C]  [Am7]  [F7M]  [G]  [C] )

[Pré-Refrão]

                  [F7M]
Que coincidência, ó
               [G]
Eu sozinho e você só
                            [Em]
Porque que a gente não se amarra?
                    [Am7]
Um no outro e da um nó?
                     [F7M]
Eu sei você quer desistir
                       [G]
Mas tenho uma opção melhor

[Refrão]

              [C]
Antes de desistir do amor
                  [Am7]
Tenta o meu, por favor

Se não servir, cê joga fora
                         [F7M]
Vai embora e diz que não deu
     [G]                          [C]   [G]
Mas antes disso prova um beijo meu

              [C]
Antes de desistir do amor
                  [Am7]
Tenta o meu, por favor

Se não servir, cê joga fora
                         [F7M]
Vai embora e diz que não deu
     [G]                          [C]
Mas antes disso prova um beijo meu

                             [Am7]
Não vai embora sem um beijo meu
     [F7M]        [G]
Não vai embora sem

[Final] [C]  [Am7]  [F7M]
        [G]  [C]  [G]
        [C]  [Am7]  [F7M]  [G]
        [C]  [Am7]  [F7M]  [G]  [C]`,
  },
  {
    id:            "luan-santana-cantada",
    titulo:        "Cantada",
    artista:       "Luan Santana",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1438,
    cifra: `Intro 2x: (Lick 1)

Lick 1
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----0-0---0-0--------------------------------------|
A|-4/5-----------0-0----------------------------------|
E|----------------------------------------------------|

Primeira Parte:

(Lick 1) (2x)
Pela luz do sol que me ilumina

Não existe nada mais que me fascina
        [G]
Que te ver chegar

      (Lick 1) (2x)
Com a pele bronzeada e a boca vermelha

E esse sorrisão de orelha a orelha
     [G]
Vai me faltando o ar
Primeira Parte - Parte 1 de 2 (2x)

E|------------------------------------------|
B|------------------------------------------|
G|------------------------------------------|
D|-----0-0---0-0----------------------------|
A|-4/5-----------0-0------------------------|
E|------------------------------------------|

Primeira Parte - Parte 2 de 2

E|-x-x--3-3-3-3-----------------------------|
B|-x-x--3-3-3-3-----------------------------|
G|-x-x--0-0-0-0-----------------------------|
D|-x-x--0-0-0-0-----------------------------|
A|-x-x--2-2-2-2-----------------------------|
E|-x-x--3-3-3-3-----------------------------|
   ↓ ↑  ↓ ↑ ↑ ↓

Pré-refrão:

      [A9]
Se esse sorriso for pra mim
          [G]
Eu sou o cara
                      (Lick 1)
Que tem mais sorte no mundo

  [A9]                           [G]
Azar de quem perdeu, agora sou eu
                            [Em]
Quem vai te queimar no meu fogo
                     [A9]
E amanhã vai ter de novo

Refrão - Parte 1 de 2:

 (lick 2)     Em
E às 9 da manhã
                 [A9]
Quando você acordar
            [D]                 [G]
E se perguntar como foi, como é
   Em                   A5 (lick 3)
A gente só saiu pra jantar
Lick 2
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----0---0------------------------------------------|
A|-0h2---0--------------------------------------------|
E|-----------3-2-0------------------------------------|

Lick 3
   [A5]
E|----------------------------------------------------|
B|----------------------------------------------------|
G|-2--------------------------------------------------|
D|-2-0------------------------------------------------|
A|-0---4-2-0------------------------------------------|
E|-----------3-2--------------------------------------|

Refrão - Parte 2 de 2:
E foi ficando
         [Em]                   [A9]
É que a gente só saiu pra jantar
           (lick 4)
E foi ficando
   [Em]
A gente saiu
G/A               (lick 1)  (lick 5)
    E ficou pro café
Lick 4
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|----------------------------------------------------|
A|-0--------------------------------------------------|
E|---3-2----------------------------------------------|

Lick 1
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----0-0---0-0--------------------------------------|
A|-4/5-----------0-0----------------------------------|
E|----------------------------------------------------|

Lick 5
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-0--------------------------------------------------|
A|-4h5-4-2-0-----0------------------------------------|
E|-----------0h2--------------------------------------|

Primeira Parte:

 [D]
Pela luz do sol que me ilumina

Não existe nada mais que me fascina
 [G]
Que te ver chegar

       [D]
Com a pele bronzeada e a boca vermelha

E esse sorrisão de orelha a orelha
     [G]
Vai me faltando o ar

Pré-refrão:

      [A9]
Se esse sorriso for pra mim
          [G]
Eu sou o cara
                       [D]
Que tem mais sorte no mundo

  [A9]                           [G]
Azar de quem perdeu, agora sou eu
                            [Em]
Quem vai te queimar no meu fogo
                     [A9]
E amanhã vai ter de novo

Refrão Final:

 (lick 2)     Em
E às 9 da manhã
                 [A9]
Quando você acordar
            [D]                 [G]
E se perguntar como foi, como é
   [Em]                   [A9]
A gente só saiu pra jantar

E foi ficando
         [Em]                   [A9]
É que a gente só saiu pra jantar
               [D]
E ficou pro café

 (lick 2)     Em
E às 9 da manhã
                 [A9]
Quando você acordar
            [D]                 [G]
E se perguntar como foi, como é
   [Em]                   [A9]
A gente só saiu pra jantar
           (lick 4)
E foi ficando
         [Em]                   [A9]
É que a gente só saiu pra jantar
           (lick 4)
E foi ficando
   [Em]
A gente saiu
[G/A]
    E ficou pro café

Final: (lick 1) (lick 6)

 [D/F#]
Pela luz do sol que me ilumina

Não existe nada mais que me fascina
        [G]
Que te ver chegar

Lick 1
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----0-0---0-0--------------------------------------|
A|-4/5-----------0-0----------------------------------|
E|----------------------------------------------------|

Lick 6
E|----------------------------------------------------|
B|----------------------------------------------------|
G|----------------------------------------------------|
D|-----0-0---0-0--------------------------------------|
A|-4/5-----------0-----0------------------------------|
E|-----------------2h3--------------------------------|`,
  },
  {
    id:            "renato-teixeira-romaria",
    titulo:        "Romaria",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 512,
    cifra: `[Intro] [D]  [G]  [D]  [G]

[Primeira Parte]

[D]                  [G]
  É de sonho e de pó
[D]                  [G]
  O destino de um só
      [D]              [F#7]  [Bm]
Feito eu perdido em pensamentos
               [F#7]
Sobre o meu cavalo
[Bm]                 [E]        [Bm]        [E]
   É de laço e de nó, de gibeira o jiló
       [Bm]        [F#7]    [Bm]  [B7]
Dessa vida, cumprida a sol

[Refrão]

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]   [F#7]  [Bm]
Senhora de Apare_cida
    [G]                    [A7]
Ilumina a mina escura e funda
                 [D]   [D7]
O trem da minha vida

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]   [F#7]  [Bm]
Senhora de Apare_cida
    [G]                    [A7]
Ilumina a mina escura e funda
                 [D]   [D7]
O trem da minha vida

[Segunda Parte]

[D]                 [G]
  O meu pai foi peão
[D]                [G]
  Minha mãe solidão
        [D]             [F#7]   [Bm]
Meus irmãos perderam-se na vida
                [F#7]
A custa de aventuras
[Bm]               [E]         [Bm]       [E]
   Descasei, joguei, investi, desisti
       [Bm]            [F#7]        [Bm]  [B7]
Se há sorte, eu não sei, nunca vi

[Refrão]

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]   [F#7]  [Bm]
Senhora de Apare_cida
    [G]                    [A7]
Ilumina a mina escura e funda
                 [D]   [D7]
O trem da minha vida

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]   [F#7]  [Bm]
Senhora de Apare_cida
    [G]                    [A7]
Ilumina a mina escura e funda
                 [D]   [D7]
O trem da minha vida

[Terceira Parte]

[D]                [G]
  Me disseram porém
[D]                  [G]
  Que eu viesse aqui
       [D]        [F#7]      [Bm]
Pra pedir de romaria e prece
             [F#7]
Paz nos desaventos
[Bm]                    [E]
   Como eu não sei rezar
[Bm]                [E]
   Só queria mostrar
       [Bm]         [F#7]        [Bm]  [B7]
Meu olhar, meu olhar, meu olhar

[Refrão]

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]   [F#7]  [Bm]
Senhora de Apare_cida
    [G]                    [A7]
Ilumina a mina escura e funda
                 [D]   [D7]
O trem da minha vida

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]   [F#7]  [Bm]
Senhora de Apare_cida
    [G]                    [A7]
Ilumina a mina escura e funda
                 [D]   [D7]
O trem da minha vida

        [G]              [A7]
Sou caipira, pirapora nossa
         [D]    [F#7]  [G]   [D/F#]
Senhora de, Apare_cida`,
  },
  {
    id:            "renato-teixeira-tocando-em-frente",
    titulo:        "Tocando Em Frente",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 667,
    cifra: `[D]                             [C]
Ando devagar porque já tive pressa
                                    [G]
E levo esse sorriso porque já chorei demais
[D]
Hoje me sinto mais forte
               [C]
Mais feliz quem sabe
                           [G]
Eu só levo a certeza de que muito pouco eu sei
 [D7]
E nada sei

[Am]           [C]          [Am]
  Conhecer as manhas e as manhãs
       [C]               [G]
O sabor das massas e das maçãs
[Am]         [C]        [Am]
  É preciso amor pra poder pulsar
       [C]         [Am]
É preciso paz pra poder sorrir
               [G]
É preciso a chuva para florir

[D]                       [C]
Penso que cumprir a vida seja simplesmente
                     [G]
Compreender a marcha e ir tocando em frente
[D]                              [C]
Como um velho boiadeiro levando a boiada
                                 [G]
Eu vou tocando os dias pela longa estrada eu vou
 [D7]
Estrada eu sou

[Am]         [C]       [Am]
  Conhecer as manhas e as manhãs
       [C]               [G]
O sabor das massas e das maçãs
[Am]         [C]          [Am]
  É preciso amor pra poder pulsar
       [C]         [Am]
É preciso paz pra poder sorrir
          [G]
É preciso a chuva para florir

( [D]  [C]  [G] )
( [D]  [C]  [G] )
( [D]  [C]  [G] )

[D]                 [C]
Todo mundo ama um dia todo mundo chora
                          [G]
Um dia a gente chega e no outro vai embora
[D]                 [C]
Cada um de nós compõe a sua própria história
                        [G]
E cada ser em si carrega o dom de ser capaz
[D7]
De ser feliz

[Am]         [C]       [Am]
  Conhecer as manhas e as manhãs
       [C]               [G]
O sabor das massas e das maçãs
[Am]         [C]          [Am]
  É preciso amor pra poder pulsar
       [C]         [Am]
É preciso paz pra poder sorrir
          [G]
É preciso a chuva para florir

[D]                            [C]
Ando devagar porque já tive pressa
                                    [G]
E levo esse sorriso porque já chorei demais
[D]                 [C]
Cada um de nós compõe a sua própria história
                        [G]
E cada ser em si carrega o dom de ser capaz
[D7]
De ser feliz`,
  },
  {
    id:            "renato-teixeira-voce-vai-gostar-casinha-branca",
    titulo:        "Você Vai Gostar (Casinha Branca)",
    artista:       "Renato Teixeira",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4430,
    cifra: `[Am]
Fiz uma casinha branca

Lá no pé da serra
               [E7]
Pra nós dois morar
     [Dm]               [E7]
Fica perto da barranca
           [Am]
Do Rio Paraná

A paisagem é uma beleza
            [A7]
Eu tenho certeza
            [Dm]
Você vai gostar
            [Am]
Fiz uma capela
                   [E7]
Bem do lado da janela
               [A]
Pra nós dois rezar

Quando for dia de festa
                                [E]
Você veste o seu vestido de algodão

Quebro meu chapéu na testa
                  [A]
Para arrematar as coisas do leilão
[A7]                  [D]
Satisfeito eu vou levar
              [C#7]
Você de braço dado
               [F#m]
Atrás da procissão

[D]                    [A]
Vou com meu terno riscado
    [F#7]     [Bm]            [E7]     [A]
Uma flor do lado e meu chapéu na mão
[D]                    [A]
Vou com meu terno riscado
    [F#7]     [Bm]            [E7]     [A]
Uma flor do lado e meu chapéu na mão

( [E7]  [A] )`,
  },
  {
    id:            "renato-teixeira-amanheceu-peguei-a-viola",
    titulo:        "Amanheceu, Peguei a Viola",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4270,
    cifra: `[Intro] [G]  [D]  [B7]
        [Em]  [A7]  [D]  [D7]
        [G]  [D]  [B7]
        [Em]  [A7]  [D]

[Refrão]

  [G]    [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar
  [G]    [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar

[Primeira Parte]

          [D7]
Sou cantador e tudo nesse mundo
                 [G]
Vale pra que eu cante e possa praticar
        [Bb7]     [A7]        [D]
A minha arte sapateia as cordas
             [E]                    [A7]
E esse povo gosta de me ouvir cantar

[Refrão]

       [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar
  [G]    [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar

[Segunda Parte]

         [D7]
Ao meio-dia eu tava em mato grosso
              [G]
Do sul ou do norte, não sei explicar
          [Bb7]         [A7]      [D]
Só sei dizer que foi de tardezinha
               [E]                   [A7]
Eu já tava cantando em belém do pará

[Refrão]

       [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar
  [G]    [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar

[Terceira Parte]

           [D7]
Em Porto Alegre um tal de coronel
                  [G]
Pediu que eu musicasse um verso que ele fez
           [Bb7]       [A7]      [D]
Para uma china, que pela poesia
              [E]                   [A7]
Nem lá em pequim se vê tanta altivez

[Refrão]

       [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar
  [G]    [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar

[Quarta Parte]

          [D7]
Parei em minas pra trocar as cordas
           [G]
E segui direto para o ceará
        [Bb7]       [A7]          [D]
E no caminho fui pensando, é lindo
                 [E]                [A7]
Essa grande aventura de poder cantar

[Refrão]

       [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]
Botei na sacola e fui viajar
  [G]    [D]          [G]   [D]
Amanheceu, peguei a viola
       [G]    [D]          [A7] [D]  [A7]
Botei na sacola e fui viajar

[E]   [A]    [E]          [A]   [E]
  Amanheceu, peguei a viola
       [A]    [E]          [B7] [E]
Botei na sacola e fui viajar

[Quinta Parte]

          [E7]
Chegou a noite e me pegou cantando
             [A]
Num bailão, no norte lá do paraná
          [C7]        [B7]            [E]
Daí pra frente ninguém mais se espanta
                 [F#]                   [B7]
E o resto da noitada eu não posso contar

[Refrão]

       [E]            [A]       [E]
Anoiteceu, e eu voltei pra casa
       [A]       [E]                 [B7]    [E]
Que o dia foi longo e o sol foi descansar
  [A]    [E]          [A]   [E]
Amanheceu, peguei a viola
       [A]    [E]          [B7] [E]
Botei na sacola e fui viajar
  [A]    [E]          [A]   [E]
Amanheceu, peguei a viola
       [A]    [E]          [B7] [E]
Botei na sacola e fui viajar

  [A]    [E]  [A]  [E]
Amanheceu

[Final] [A]  [E]  [B7]  [E]`,
  },
  {
    id:            "renato-teixeira-um-violeiro-toca",
    titulo:        "Um Violeiro Toca",
    artista:       "Renato Teixeira",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 5242,
    cifra: `[G]                   [D/G]
Quando uma estrela cai
No escurão da noite
[C]
E um violeiro toca suas mágoas
[D]
Então os olhos dos bichos
Vão ficando iluminados
[C]
Rebrilham neles estrelas
De um sertão enluarado
[G]
Quando um amor termina
[D/G]
Perdido numa esquina
[C]
E um violeiro toca sua sina
[D]
Então os olhos dos bichos
Vão ficando entristecidos
[C]
Rebrilham neles lembranças
Dos amores esquecidos

[G]               [D]
Tudo é sertão, tudo é paixão
[C]              [D]
Se um violeiro toca
[C]
A viola e o violeiro
             [G]
E o amor se tocam (2V)

[G]                [D]
Quando um amor começa
Nossa alegria chama
[C]
E um violeiro toca em nossa cama
[D]
Então os olhos dos bichos
São os olhos de quem ama
 [C]
Pois a natureza é isso
                       [G]
Sem medo, nem dó, nem drama...`,
  },
  {
    id:            "renato-teixeira-amora",
    titulo:        "Amora",
    artista:       "Renato Teixeira",
    tom:           "A",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 726,
    cifra: `[A]                   [D]           [F#]       [Bm]   [B7]  [B]
     Depois da curva da estrada tem um pé de araçá
                         [B7]                       [Em]  [E4]  [E]
     Sinto vir água nos olhos, toda vez que passo lá
                         [G]         [C]         [G]      [G#]  [A]
     Sinto o coração flechado, cercado de solidão
                         [D]   [D#]      [E]            [A]
     Penso que deve ser doce,    a fruta do coração
     [A7]                        [A7]   [A7(4)]  [A7]
        Vou contar para o seu pai
                  [D]   [D4]   [D]
     Que você namora
                       [D7]                   [G]     [G4]  [G]
     Vou contar prá sua mãe, que você me ignora
                         [C]        [B7]          [Bº]   [Bbº]
     Vou pintar a minha boca, no vermelho da amora
                       [D]      [D#]  [E]                    [A]
     Que nasce lá no quintal,       da casa onde você mora

[Solo] [A]  [D]  [F#]  [Bm]  [B7]
       [Em]  [G]  [C]  [G]  [A]  [D]  [E]  [A]

     [A7]                        [A7]   [A7(4)]  [A7]
        Vou contar para o seu pai
                  [D]   [D4]   [D]
     Que você namora
                      [D7]                   [G]     [G4]  [G]
     Vou contar prá sua mãe, que você me ignora
                         [C]        [B7]          [Bº]   [Bbº]
     Vou pintar a minha boca, no vermelho da amora
                       [D]      [D#]  [E]                    [A]
     Que nasce lá no quintal,       da casa onde você mora
                            [D]           [F#]       [G]   [C]  [G]
     Depois da curva da estrada tem um pé de araçá`,
  },
  {
    id:            "renato-teixeira-frete",
    titulo:        "Frete",
    artista:       "Renato Teixeira",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4146,
    cifra: `[Am]                                                        [C]
Eu conheço cada palmo desse chão  é só me mostrar qual é a direção
      [F]                          [A#]           [A7]                       [Dm]
Quantas idas e vindas meu Deus quantas voltas  viajar é preciso é preciso
[G7]                              [E]  [C]  [D]  [D#]  [E/D]    [Am]
Com a carroceria sobre as costas       vou fazendo frete cortando o estradão
      [G]                [C]             [A]                  [Dm]
Eu conheço todos os sotaques  desse povo todas as paisagens
      [B]                [Em]             [A]                  [D]
Dessa terra todas as cidades  das mulheres todas as vontades
      [F]                    [C]             [B7]                   [E]
Eu conheço as minhas liberdades  pois a vida não me cobra o frete
[Am]                                                      [C]
Por onde eu passei deixei saudades  a poeira é minha vitamina
      [F]                      [A#]   [A7]                            [Dm]
Nunca misturei mulher com parafuso  mas não nego a elas meus apertos
[G7]                        [E]    [C]  [D]  [D#]  [E/D]        [Am]
Coisas do destino e do meu jeito    sou irmão de estrada e acho muito bom
    [G]                  [C]             [A]                 [Dm]
Eu conheço todos os sotaques  desse povo todas as paisagens
      [B]                 [Em]         [A]                     [D]
Dessa terra todas as cidades  das mulheres todas as vontades
      [F]                    [C]             [B7]                   [E]
Eu conheço as minhas liberdades  pois a vida não me cobra o frete

[Am]                                                              [C]
Mas quando eu me lembro lá de casa  a mulher e os filhos esperando
      [F]                         [A#]       [A7]                          [Dm]
Sinto que me morde a boca da saudade  e a lembrança me agarra e profana
[G7]                        [E]    [C]  [D]  [D#]  [E/D]    [Am]
o meu tino forte de homem           e é quando a estrada me acode
    [G]                  [C]             [A]                  [Dm]
Eu conheço todos os sotaques  desse povo todas as paisagens
      [B]                 [Em]         [A]                     [D]
Dessa terra todas as cidades  das mulheres todas as vontades
      [F]                    [C]             [B7]                   [E]
Eu conheço as minhas liberdades  pois a vida não me cobra o frete`,
  },
  {
    id:            "renato-teixeira-cuitelinho",
    titulo:        "Cuitelinho",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2608,
    cifra: `[D]                                    [A7]  [G]  [A7]
Cheguei na beira do porto onde as onda se espaia
      [D]                                      [A7]  [G]  [A7]
As garça dá meia volta e senta na beira da praia
                      [A7]                            [D]
E o cuitelinho não gosta       que o botão de rosa caia, ai, ai

              [D]                                  [A7]  [G]  [A7]
Ai quando eu vim da minha terra despedi da parentaia
      [D]                                     [A7]  [G]  [A7]
Eu entrei no Mato Grosso dei em terras paraguaia
                [A7]                             [D]
Lá tinha revolução         enfrentei fortes batáia, ai, ai

    [D]                              [A7]  [G]  [A7]
A tua saudade corta feito aço de naváia
       [D]                                 [A7]  [G]  [A7]
O coração fica aflito bate uma, a outra faia
                   [A7]                                [D]
E os óio se enche d´água     que até a vista se atrapáia, ai`,
  },
  {
    id:            "renato-teixeira-irmaos-da-lua",
    titulo:        "Irmãos da Lua",
    artista:       "Renato Teixeira",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2695,
    cifra: `[C]      [C7]
Somos todos irmãos da lua
           [F]     [Fm]
Moramos na mesma rua
 [C]            [Em] [Am]
Bebemos do mesmo copo
          [D7]    [G]
A mesma bebida crua
             [C]     [C7]
O caminho já não é novo
           [F]     [Fm]
Por ele é que passa o povo
 [C]            [Em] [Am]
Farinha do mesmo saco
           [D7]    [G]
Galinha do mesmo ovo
               [C]         [C7]
Mas nada é melhor, que a água
              [F]      [Fm]
E a terra é a mãe de todos
 [C]            [Em] [Am]
O ar é que toca o homem
            [D7]     [G]
E o homem maneja o fogo
              [C]    [C7]
E o homem possui a fala
           [F]     [Fm]
E a fala edifica o canto
 [C]            [Em] [Am]
E o canto repousa a alma
           [D7]      [G]
Pra alma depende a calma
               [C]    [C7]
E a calma é irmã do simples
              [F]     [Fm]
E o simples resolve tudo
 [C]            [Em] [Am]
Mas tudo na vida às vezes
                [D7]     [G]
Consiste em não se ter nada

Solo: ([C] [C7] [F] [Fm] [C] [Am] [D7] [G]) 2x
       E e eeeê uh uh uh êe...`,
  },
  {
    id:            "renato-teixeira-amizade-sincera",
    titulo:        "Amizade Sincera",
    artista:       "Renato Teixeira",
    tom:           "C",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4824,
    cifra: `(intro) [G]

[G]
Amizade sincera é um santo remédio
                [D]
É um abrigo seguro
É natural da amizade
                                  [G]
O abraço, o aperto de mão, o sorriso
Por isso se for preciso
         [G7]             [C]
Conte comigo, amigo disponha
                       [G]
Lembre-se sempre que mesmo modesta
     [D]          [C]    [F]  [C]
Minha casa será sempre sua
[G]     [G]  [C]
Amigo

 [G]
Os verdadeiros amigos
Do peito, de fé
              [D]
Os melhores amigos
[Am]                   [D]
Não trazem dentro da boca
          [C]                    [G]
Palavras fingidas ou falsas histórias
Sabem entender o silêncio
              [G7]                   [C]
E manter a presença mesmo quando ausentes
                [G]
Por isso mesmo apesar de tão raro

             [D]                                    [C]        [G]       [D]                        [G]
Não há nada melhor do que um grande  amigo...amigo... amigo...

[G]
Por isso se for preciso
         [G7]             [C]
Conte comigo, amigo disponha
                       [G]
Lembre-se sempre que mesmo modesta
     [D]          [C]    [F]  [C]                         [G]
Minha casa será sempre sua.... amigo`,
  },
  {
    id:            "renato-teixeira-trem-do-pantanal",
    titulo:        "Trem do Pantanal",
    artista:       "Renato Teixeira",
    tom:           "E",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 334,
    cifra: `[Intro] [E]  [G#7]  [C#m]  [E]  [A]
        [E]  [G#7]  [C#m]  [C]  [F#m]  [B7]  [E]

    [E]
Enquanto este velho trem
     [G#7]
Atravessa o pantanal
[C#m]                [E]                [A]
As estrelas do cruzeiro fazem um sinal
     [E]                    [G#7]
De que este é o melhor caminho
         [C#m]    [C]
Pra quem é como eu
         [F#m]          [B7]  [E]
Mais um fugitivo da guer-ra
    [E]
Enquanto este velho trem
       [G#7]
Atravessa o pantanal
   [C#m]
O povo lá em casa
   [E]                       [A]
Espera que eu mande um postal
   [E]                [G#7]       [C#m]   [C]
Dizendo que eu estou muito bem vivo
        [F#m]              [B7]  [E]
Rumo a Santa Cruz de La Sierra

[E]
Enquanto este velho trem
     [G#7]
Atravessa o pantanal
 [C#m]              [E]               [A]
Só meu coração está batendo desigual
           [E]          [G#7]   [C#m]     [C]
Ele agora sabe que o medo viaja também
       [F#m]                 [B7]  [E]  [C]
Sobre todos os trilhos da ter-ra

[Solo] [E]  [G#7]  [C#m]  [E]  [A]
       [E]  [G#7]  [C#m]  [C]  [F#m]  [B7]  [E]

[E]
Enquanto este velho trem
     [G#7]
Atravessa o pantanal
 [C#m]              [E]               [A]
Só meu coração está batendo desigual
           [E]          [G#7]   [C#m]     [C]
Ele agora sabe que o medo viaja também
       [F#m]                 [B7]  [E]  [C]
Sobre todos os trilhos da ter-ra
        [F#m]              [B7]  [E]  [C]
Rumo a Santa Cruz de La Sierra
       [F#m]                 [B7]  [E]
Sobre todos os trilhos da ter-ra`,
  },
  {
    id:            "renato-teixeira-raizes",
    titulo:        "Raízes",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 2353,
    cifra: `[Intro] [G]

                [G]
Galo cantou
Madrugada da Campina
Manhã menina
      [G7]             [C]
Tá na flor do meu jardim
         [D]
Hoje é domingo
      [C]               [G]
Me desculpe eu tô sem pressa
       [E]          [A7]
Nem preciso de conversa
                   [D]     [D11]   [D]
Não há nada pra cumprir
         [C]
Passar o dia
          [C#º]          [G]
Ouvindo o som de uma viola
   [E]                  [A7]
Eu quero que o mundo agora
   [D7]                 [G]   [G7]
Se mostre pros bem-te-vi
        [C]
Mando daqui
           [C#º]         [G]
Das bandas do rural lembranças
     [E]            [A7]
Vibrações da nova hora
      [D7]             [G]
Pra você que não tá aqui
      [D]
Amanhecer
        [C]          [G]
É uma lição do universo
           [D]
Que nos ensina
          [C]         [G]
Que é preciso renascer
  [C]  [D]     [C]  [G]
O novo amanhece
  [C]  [D]     [C]  [G]
O novo amanhece

Já tem rolinha
Lá no terreiro varrido
E o orvalho brilha
     [G7]         [C]
Como pérolas ao sol
        [D]
Tem uma nuvem
      [C]             [G]
Que caminha pras montanhas
       [E]          [A7]
Se enfiando feito alma
                  [D]    [D11]   [D]
Por dentro do matagal
         [C]
E quanto mais
      [C#º]                 [G]
A luz     vai invadindo a terra
        [E]           [A7]
O que a noite não revela
  [D7]             [G]      [G7]
O dia mostra pra mim
         [C]
A rádio agora
     [C#º]          [G]
Tá tocando Rancho Fundo
      [E]         [A7]
Somos só eu e o mundo
  [D7]           [G]
E tudo começa aqui

      [D]
Amanhecer
        [C]          [G]
É uma lição do universo
           [D]
Que nos ensina
          [C]         [G]
Que é preciso renascer
  [C]  [D]     [C]  [G]
O novo amanhece
  [C]  [D]     [C]  [G]
O novo amanhece`,
  },
  {
    id:            "renato-teixeira-sina-de-violeiro",
    titulo:        "Sina de Violeiro",
    artista:       "Renato Teixeira",
    tom:           "G",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4769,
    cifra: `[Intro] ( [D]  [G]  [D]  [G]  [Am]  [Bm]  [C]  [Am]  [Bm]  [G] )2X    [D]  [G]  [D]  [G]  [D]  [G]

[G]             [G7]
   Meu pai chegou aqui
           [C]
Num fim de dia
         [D7]
Há muito tempo
                [G]
Em cima de um cavalo
      [E7]
E era pobre e moço
        [Am]
E só queria
          [D7]
Semear de calo
                 [G]
As mãos de plantador
          [G7]
Com minha mãe
                   [C]
Casou-se assim que pode
         [D7]
Achar um rancho
              [G]
No jeito e na cor
         [E7]
Da terra boa
           [Am]
E semeou o milho
            [D7]
E semeou os filhos
            [G]
E semeou o amor

( [D]  [G]  [D]  [G]  [Am]  [Bm]  [C]  [Am]  [Bm]  [G] )   [D]  [G]  [D]  [G]  [D]  [G]

          [G7]
E assim a vida
               [C]
Foi-se como um rio
          [D7]
Meu pai dizia
            [G]
Um dia será mar
       [E7]
E toda noite
         [Am]
Reunia a prole
             [D7]
E tinha cantorias
           [G]
Para se cantar
        [G7]
Não era fácil a lida
      [C]
Mas valia
          [D7]
Porque um homem
          [G]
Precisa lutar
             [E7]
Nem quando a morte
            [Am]
Nos levou Rosinha
              [D7]
A mais pequenininha
              [G]
Deu pra fraquejar

( [D]  [G]  [D]  [G]  [Am]  [Bm]  [C]  [Am]  [Bm]  [G] )   [D]  [G]  [D]  [G]  [D]  [G]

         [G7]
De sol a sol
              [C]
O braço do trabalho
            [D7]
Foi como um laço
            [G]
Mas nunca sonhou
         [E7]
Por isso Pedro
                 [Am]
Nosso irmão mais velho
             [D7]
Foi para bem longe
                [G]
E nunca mais voltou
     [G7]
Mariazinha
             [C]
Se casou bem moça
          [D7]
E foi com Bento
              [G]
Homem trabalhador
            [E7]
Mas veio um tempo
             [Am]
Negro em sua vida
              [D7]
Ele garrou na pinga
                [G]
E nunca mais largou

( [D]  [G]  [D]  [G]  [Am]  [Bm]  [C]  [Am]  [Bm]  [G] )   [D]  [G]  [D]  [G]  [D]  [G]

      [G7]
Uma cegueira triste
      [C]
Certo dia
          [D7]
Nos olhos calmos
             [G]
Do meu pai entrou
          [E7]
Varreu as cores
            [Am]
Do seu pensamento
              [D7]
Ele deitou na cama
               [G]
E nunca mais falou
        [G7]
A minha mãe
               [C]
Mulher de raça forte
          [D7]
Pegou nas rédeas
            [G]
Com as duas mãos
             [E7]
E eu me enterrei
             [Am]
De alma na viola
                 [D7]
Onde plantei tristezas
           [G]
E colhi canções

( [D]  [G]  [D]  [G]  [Am]  [Bm]  [C]  [Am]  [Bm]  [G] )   [D]  [G]  [D]  [G]  [D]  [G]

         [G7]
Por isso mesmo amigo
             [C]
É que eu lhe digo
           [D7]
Não tem sentido
               [G]
Em peito de cantor
         [E7]
Brotar o riso
             [Am]
Onde foi semeada
              [D7]
A consciência viva
           [G]
Do que é a dor`,
  },
  {
    id:            "renato-teixeira-rio-de-lagrimas",
    titulo:        "Rio de lágrimas",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 4924,
    cifra: `[D]        [A7]  [D]
O rio de Piracicaba
    [A7]             [D]     [A7]
Vai jogar água pra fora
[D]         [A7]    [D]
Quando chegar a água
    [A7]                  [D]
Dos olhos de alguém que chora
                     [A]
Lá no bairro onde eu moro
                 [Bm]
Só existe uma nascente
                    [A]
A nascente dos meus olhos
                  [D]
Já formou água corrente
   [D7]             [G]
Pertinho da minha casa
           [A]    [D]
Já formou uma lagoa
                      [A7]
Com lágrimas dos meus olhos
                    [D]
Por causa de uma pessoa
                     [A]
Eu quero apanhar uma rosa
                   [Bm]
Minha mão já não alcança
                [A]
Eu choro desesperado
                    [D]
Igualzinho a uma criança
  [D7]                  [G]
Duvido alguém que não chore
             [A]     [D]
Pela dor de uma saudade
                      [A]
Eu quero ver quem não chora
                 [D]
Quando ama de verdade`,
  },
  {
    id:            "renato-teixeira-assim-os-dias-passarao-part-almir-sater",
    titulo:        "Assim Os Dias Passarão (Part. Almir Sater)",
    artista:       "Renato Teixeira",
    tom:           "D",
    ritmo:         "Modão",
    dificuldade:   "iniciante",
    tags:          ["modao","raiz"],
    tocadasSemana: 1603,
    cifra: `[Intro]  [Bm]  [E]  [Bm]  [E]

[Bm]                     [E]
Dezembro vai , janeiro vem
[Bm]                          [E]
O tempo passa veloz como um trem
[G]                               [D]
No rádio a noticia, um amigo se foi
[A]                                 [Bm]
Atrás dos mistérios que sempre buscou
[G]                                    [D]
Mais uma pra estrada, mais um fim de show
[A]                                  [Bm]    [E]  [Bm]  [E]
Ao som das guitarras do bom rock n roll

[Bm]                  [E]
O tempo trás suas lições
[Bm]                       [E]
E as grava em nossos corações
[G]                               [D]
Contando a história assim como foi
[A]                                    [Bm]
Mostrando os caminhos que irão nos levar
[G]                                [D]
Como se fosse o rio correndo pro mar
[A]                               [Bm]   [G]  [E]  [A]
Como se fossem pedras no rio a rolar

( [Bm]  [E]  [Bm]  [E] )
( [G]  [D]  [A]  [Bm] )
( [G]  [D]  [A]  [Bm] )
( [G]  [E]  [A] )

[Bm]                 [E]
Assim os dias passarão
[Bm]                 [E]
Virão as novas gerações
[G]                              [D]
Outras perguntas, provaveis canções
[A]                                     [Bm]
Outro mundo, outra gente, outras dimensões
[G]                             [D]
E na hora marcada, em algum lugar
[A]                              [Bm]   [G]  [E]  [A]   [Bm]
Uma estrela virá pra lhe acompanhar`,
  },
  {
    id:            "rick-renner-ela-e-demais",
    titulo:        "Ela é Demais",
    artista:       "Rick & Renner",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4711,
    cifra: `[Intro] [F]  [Dm]  [Bb]  [C7(4/9)]
        [F]  [Dm]  [Bb]  [C]

[Tab - Intro]

Parte de 1 de 4
              [F]                    [Dm]
E|--------------------------------------------------|
B|-------------------------3--5--5/6----------------|
G|------------2--3--5--5----------------------------|
D|-----2-3-5----------------------------------------|
A|-3-5----------------------------------------------|
E|--------------------------------------------------|

Parte de 2 de 4
             [Bb]
E|-------------6--6---------------------------------|
B|-6--5---------------------------------------------|
G|-------5-5/7--------------------------------------|
D|--------------------------------------------------|
A|--------------------------------------------------|
E|--------------------------------------------------|

Parte de 3 de 4
   [C7(4/9)]                   [F]                    [Dm]
E|-6--5-----------------------------------8-10----8-|
B|-------8--6----------------------6-8/10------10---|
G|-------------7-5-------------5-7------------------|
D|-----------------8-7-5---5-7----------------------|
A|-----------------------8--------------------------|
E|--------------------------------------------------|

Parte de 4 de 4
          [Bb]               [C]
E|-13p12--12---10--10--8-8-8--6-6-6--5h6p5----------|
B|-----------------------------------------8--------|
G|--------------------------------------------------|
D|--------------------------------------------------|
A|--------------------------------------------------|
E|--------------------------------------------------|

[Primeira Parte]

[Tab - Primeira Parte]

Parte de 1 de 4
   [F]                [Dm]                   [Bb]
E|--------8------8----------8------8---------------|
B|-------------------------------------------------|
G|---9h10---9h10-------9h10---9h10-----------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

Parte de 2 de 4
   [C]         [Bb6]  [C]
E|-------------------------------------------------|
B|----5h6--5------5h6--8---------------------------|
G|-------------------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

Parte de 3 de 4
   [F]  [Dm]              [Bb]
E|-----------------------6-5-5h6-------------------|
B|---------5-6-8-8/10------------------------------|
G|-------7-----------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

Parte de 4 de 4
   [C]         [Bb6]  [C]
E|-------------------------------------------------|
B|----5h6--5------5h6--8--6------------------------|
G|-------------------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

[F]
  Ela tem um jeito lindo
                [Dm]
De me olhar nos olhos
                [Bb]
Me despertando sonhos
              [C]  [Bb6]  [C]
Loucuras de amor

[F]
  Ela tem um jeito doce
              [Dm]
De tocar meu corpo
              [Bb]
Que me deixa louco
               [C]  [Bb6]  [C]
Um louco sonhador

[Pré-Refrão]

[F]                  [Dm]
  Ela sabe me prender como ninguém
[Bb2]  [C]           [F]
    Tem seus mistérios
           [Dm]           [Bb2]
Sabe se fazer como ninguém
          [C]    [Bb/D]  [C/E]
Meu caso sério

[Refrão]

[F]                 [Dm]
  Uma deusa, uma louca
          [Bb2]
Uma feiticeira
[C]
Ela é demais

[F]                     [Dm]
  Quando beija minha boca
                [Bb2]
E se entrega inteira
     [C]
Meu Deus, ela é demais

[F]                 [Dm]
  Uma deusa, uma louca
          [Bb2]
Uma feiticeira
[C]
Ela é demais

[F]                     [Dm]
  Quando beija minha boca
                [Bb2]
E se entrega inteira
     [C]
Meu Deus, ela é demais

[Interlúdio] [F]  [Dm]  [Bb]  [C]
             [F]  [Dm]  [Bb]  [C]

[Tab - Interlúdio]

Parte de 1 de 4
              [F]                    [Dm]
E|--------------------------------------------------|
B|-------------------------3--5--5/6----------------|
G|------------2--3--5--5----------------------------|
D|-----2-3-5----------------------------------------|
A|-3-5----------------------------------------------|
E|--------------------------------------------------|

Parte de 2 de 4
             [Bb]
E|-------------6--6---------------------------------|
B|-6--5---------------------------------------------|
G|-------5-5/7--------------------------------------|
D|--------------------------------------------------|
A|--------------------------------------------------|
E|--------------------------------------------------|

Parte de 3 de 4
   [C]                         [F]                    [Dm]
E|-6--5-----------------------------------8-10----8-|
B|-------8--6----------------------6-8/10------10---|
G|-------------7-5-------------5-7------------------|
D|-----------------8-7-5---5-7----------------------|
A|-----------------------8--------------------------|
E|--------------------------------------------------|

Parte de 4 de 4
          [Bb]               [C]
E|-13p12--12---10--10--8-8-8--6-6-6--5h6p5----------|
B|-----------------------------------------8--------|
G|--------------------------------------------------|
D|--------------------------------------------------|
A|--------------------------------------------------|
E|--------------------------------------------------|

[Segunda Parte]

[Tab - Segunda Parte]

Parte de 1 de 4
   [F]                 [Dm]              [Bb]
E|-------8--------8--------------------6-6-6-5-----|
B|--------------8--------5-6-8-8/10------------6---|
G|--9h10---9-10--------7-------------------------7-|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

Parte de 2 de 4
   [C]         [Bb6]  [C]
E|-------------------------------------------------|
B|----5-6/8-------5-6--8---------------------------|
G|-------------------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

Parte de 3 de 4
   [F]            [Dm]              [Bb]
E|-----------8-----5-5-5-6-8-----------------------|
B|---------------------------6------6-6-6-8-8/10---|
G|------9h10-------------------------------------7-|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

Parte de 4 de 4
   [C]         [Bb6]  [C]
E|-------------------------------------------------|
B|----5h6/8------5h6--8--6-------------------------|
G|-------------------------------------------------|
D|-------------------------------------------------|
A|-------------------------------------------------|
E|-------------------------------------------------|

[F]
  Ela tem um brilho forte
                 [Dm]
Brilha feito estrela
              [Bb]
Ah, eu adoro vê-la
                 [C]  [Bb6]  [C]
Fazendo aquele amor

[F]
  Que me enlouquece, me embriaga
              [Dm]
Me envolve inteiro
                [Bb]
E me faz prisioneiro
               [C]  [Bb6]  [C]
Um louco sonhador

[Pré-Refrão]

[F]                  [Dm]
  Ela sabe me prender como ninguém
[Bb2]  [C]           [F]
    Tem seus mistérios
           [Dm]           [Bb2]
Sabe se fazer como ninguém
          [C]    [Bb/D]  [C/E]
Meu caso sério

[Refrão]

[F]                 [Dm]
  Uma deusa, uma louca
          [Bb2]
Uma feiticeira
[C]
Ela é demais

[F]                     [Dm]
  Quando beija minha boca
                [Bb2]
E se entrega inteira
     [C]
Meu Deus, ela é demais

[F]                 [Dm]
  Uma deusa, uma louca
          [Bb2]
Uma feiticeira
[C]
Ela é demais

[F]                     [Dm]
  Quando beija minha boca
                [Bb2]
E se entrega inteira
     [C]
Meu Deus, ela é demais

[F]                 [Dm]
  Uma deusa, uma louca
          [Bb2]
Uma feiticeira
[C]
Ela é demais

[F]                     [Dm]
  Quando beija minha boca
                [Bb2]
E se entrega inteira
     [C]
Meu Deus, ela é demais

[F]                 [Dm]
  Uma deusa, uma louca
          [Bb2]
Uma feiticeira
[C]
Ela é demais

[F]                     [Dm]
  Quando beija minha boca
                [Bb2]
E se entrega inteira
     [C]
Meu Deus, ela é demais

[Final] [F]  [Bb2]  [F]

[Tab - Final]

Parte 1 de 2
            [F]                    [Bb2]
E|------------------------------------------------|
B|-----------------------3--5--5/6----------------|
G|----------2--3--5--5----------------------------|
D|---2-3-5----------------------------------------|
A|-5----------------------------------------------|
E|------------------------------------------------|

Parte 2 de 2
                  [F]
E|-1----------------------------------------------|
B|-----1----------1----1--------------------------|
G|---------3------0h2--0h2------------------------|
D|-------------3--0h3--0h3------------------------|
A|------------------------------------------------|
E|------------------------------------------------|`,
  },
  {
    id:            "rick-renner-mae",
    titulo:        "Mãe",
    artista:       "Rick & Renner",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1000,
    cifra: `[Intro] [A7M]  [D7M]  [A7M]  [D7M]
        [A/C#]  [Bm]  [Bm/A]
        [E/G#]  [D/F#]  [E]  [D/F#]  [E/G#]

[Primeira Parte]

 [A]                  [E/G#]            [F#m]
Mãe, hoje eu descobri que eu cresci
            [C#m]         [D]
É que de repente eu me vi
       [A/C#]          [Bm]  [F#7(13-)]  [F#]
Tão sozinho na estrada
 [Bm]                [Bm/A]     [E/G#]
Mãe, hoje eu precisei de você
             [D/F#]     [E]
Eu não sabia o que fazer
                  [A]  [E4]  [E]
Me vi de mãos atadas

[Pré-Refrão]

 [A]              [E/G#]     [F#m]
Mãe o que é que a gente faz
                       [Em7]
Quando o sucesso não traz
               [A/C#]     [D]   [D4]  [D]
A paz a que a gente procura
                  [D#º]           [A/E]
Mãe, hoje aqui sozinho eu rezei
             [A4]           [A]    [B]
Aqui no meu cantinho eu chorei
            [E]       [A]   [E4]  [E]
E chorando fiz uma jura

[Refrão]

 [A]                    [E/G#]
Juro que a partir de hoje
                       [F#m]
Eu vou fazer meu tempo
                [C#m]                    [D]
Vou ficar mais perto do teu sentimento
                [A/C#]               [Bm]  [F#7(13-)]  [F#]
Vou ficar mais perto, mãe do teu amor
 [Bm]                [Bm/A]                [E/G#]
Juro não deixar jamais a minha ambição
               [D/F#]                 [E]
Falar tão mais alto que meu coração
             [D]             [A/C#]    [D/F#]  [E/G#]
Se minha riqueza, mãe é o teu amor

 [A]
Mãe, me dá teu colo
 [C#m]                    [Bm]
Mãe, mulher que adoro, mãe
                  [E4]          [E]
Se existo devo a ti meu respirar
 [A]                    [C#m]
Mãe tão puro amor de mãe
                     [Bm]
Que as vezes não me vem
                    [E/G#]  [D/F#]  [E]
Palavras pra expressar
 [D]             [E]             [A]
Mãe pra ti conjugo o verbo amar

( [A7M]  [D7M]  [A7M]  [D7M] )
( [A/C#]  [Bm]  [Bm/A] )
( [E/G#]  [D/F#]  [E]  [D/F#]  [E/G#] )

[Segunda Parte]

 [A]                 [E/G#]      [F#m]
Mãe, teu conselho me orienta
             [C#m7]       [D]
Teu carinho me alimenta
             [A/C#]           [Bm]  [F#7(13-)]  [F#]
Da paz, do amor, da esperança
 [Bm]                 [Bm/A]       [E/G#]
Mãe hoje eu sou um homem eu sei
               [D/F#]        [E]
Mas as vezes que eu chorei
        [D]            [A]    [E4]  [E]
Não passei de uma criança

[Pré-Refrão]

 [A]              [E/G#]     [F#m]
Mãe o que é que a gente faz
                       [Em7]
Quando o sucesso não traz
               [A/C#]     [D]   [D4]  [D]
A paz a que a gente procura
                  [D#º]        [A/E]
Mãe, hoje aqui sozinho eu rezei
             [A4]           [A]    [B]
Aqui no meu cantinho eu chorei
            [E]       [A]   [E4]  [E]
E chorando fiz uma jura

[Refrão]

 [A]                    [E/G#]
Juro que a partir de hoje
                       [F#m]
Eu vou fazer meu tempo
                [C#m]                    [D]
Vou ficar mais perto do teu sentimento
                [A/C#]               [Bm]  [F#7(13-)]  [F#]
Vou ficar mais perto, mãe do teu amor
 [Bm]                [Bm/A]                [E/G#]
Juro não deixar jamais a minha ambição
               [D/F#]                 [E]
Falar tão mais alto que meu coração
             [D]             [A/C#]    [D/F#]  [E/G#]
Se minha riqueza, mãe é o teu amor

 [A]
Mãe, me dá teu colo
 [C#m]                    [Bm]
Mãe, mulher que adoro, mãe
                  [E4]          [E]
Se existo devo a ti meu respirar
 [A]                    [C#m]
Mãe tão puro amor de mãe
                     [Bm]
Que as vezes não me vem
                    [E/G#]  [D/F#]  [E]
Palavras pra expressar
 [D]             [E]             [A7M]  [D7M]
Mãe pra ti conjugo o verbo amar
 [A7M]
Mãe`,
  },
  {
    id:            "rick-renner-nos-bares-da-cidade",
    titulo:        "Nos Bares da Cidade",
    artista:       "Rick & Renner",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1635,
    cifra: `[Intro] [D]  [D4]  [D]  [D4]

    [D]                     [D4]          [D]
Garçom, me traga outra garrafa de cerveja
             [D4]          [D]
Vou ficar sozinho nessa mesa
                            [A7]
Eu quero beber e chorar por ela

   [G]
Garçom, a minha vida agora
               [D]
Tá de ponta cabeça

Já tentei mas nada
                   [A]
Faz com que eu esqueça
              [G]                  [D]  [G]  [A]  [G]
Os olhos e os lábios daquela mulher

   [D]                 [D4]           [D]
Garçom, ela saiu de vez da minha vida
            [D4]         [D]
E agora eu busco uma saída
                [D7]               [G]
Minha história de amor acaba em solidão
   [G]
Garçom, se eu ficar muito chato
               [D]
E der algum vexame
                                 [A]
Pegue toda a minha cerveja e derrame
                [G]         [A]         [D]  [A7]
Faça o que ela fez com a minha paixão

   [D]
Derrama cerveja, derrama
               [A]
Derrama a tristeza do meu coração
    [A]                     [A7]
Que essa angústia é uma bebida
              [D]             [A7]
Misturada, batida com a solidão
   [D]
Derrama cerveja, derrama
               [D7]                [G]
Enquanto eu derramo toda essa saudade
   [G]                 [D]                      [A]
Eu sou apenas um qualquer bebendo por mulher
                 [D]
Nos bares da cidade

( [D]  [D4]  [D]  [D4] )

    [D]                     [D4]          [D]
Garçom, me traga outra garrafa de cerveja
             [D4]           [D]
Vou ficar sozinho nessa mesa
                            [A7]
Eu quero beber e chorar por ela

   [G]
Garçom, a minha vida agora
               [D]
Tá de ponta cabeça

Já tentei mas nada
                    [A]
Faz com que eu esqueça
     [G]                           [D]  [G]  [A]  [G]
Os olhos e os lábios daquela mulher

   [D]                 [D4]           [D]
Garçom, ela saiu de vez da minha vida
           [D4]           [D]
E agora eu busco uma saída
                [D7]             [G]
Minha história de amor acaba em solidão
   [G]
Garçom, se eu ficar muito chato
              [D]
E der algum vexame
                                [A]
Pegue toda a minha cerveja e derrame
                [G]         [A]         [D]  [A7]
Faça o que ela fez com a minha paixão

   [D]
Derrama cerveja, derrama
               [A]
Derrama a tristeza do meu coração
    [A]                     [A7]
Que essa angústia é uma bebida
              [D]             [A7]
Misturada, batida com a solidão
   [D]
Derrama cerveja, derrama
               [D7]                [G]
Enquanto eu derramo toda essa saudade
   [G]                 [D]                      [A]
Eu sou apenas um qualquer bebendo por mulher
                 [D]
Nos bares da cidade

   [D]
Derrama cerveja, derrama
               [A]
Derrama a tristeza do meu coração
    [A]                     [A7]
Que essa angústia é uma bebida
              [D]             [A7]
Misturada, batida com a solidão
   [D]
Derrama cerveja, derrama
               [D7]                [G]
Enquanto eu derramo toda essa saudade
   [G]                 [D]                      [A]
Eu sou apenas um qualquer bebendo por mulher
                 [D]
Nos bares da cidade

   [G]                 [D]                      [A]
Eu sou apenas um qualquer bebendo por mulher
                 [D]
Nos bares da cidade`,
  },
  {
    id:            "rick-renner-so-pensando-em-voce",
    titulo:        "Só Pensando Em Você?",
    artista:       "Rick & Renner",
    tom:           "G",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4232,
    cifra: `[Intro] [Gm]  [Eb7M]  [F]  [Gm]

[Tab - Intro]

E|-6-5--8--6----6-5---5--6-5--8--6--|
B|------------------8---------------|
G|----------------------------------|
D|----------------------------------|
A|----------------------------------|
E|----------------------------------|

[Primeira Parte]

[Gm]
 Recordações não param
                                       [Cm7]
De atormentar minha cabeça com o que passou

Nossa história
      [Eb7M]                                  [F]
Fica na minha memória como um filme que marcou

E me faz questionar
   [D7]                               [Gm]
Se tudo o que nós vivemos juntos acabou

[Segunda Parte]

[Gm]
 Você foi embora
                                       [Cm7]
Mas deixou uma saudade e com ela a solidão

Que me apavora
       [Eb7M]                      [F]
Que maltrata e machuca o meu coração

Que sofre por não ter
[D7]                            [Gm]   [F/A]  [Bb]
A felicidade que está em suas mãos

[Pré-Refrão]

[Bb]               [Eb] [Bb]
 E quanto tempo mais
                                       [F]           [Bb] [F]
Você vai demorar pra refletir sobre a nossa relação
[Bb]                [Eb] [Bb]
 O teu silêncio traz
                                      [F]
O desespero e eu já não aguento essa sua indecisão
      [D7]
Eu preciso dar um tempo
             [G]
Pro meu coração

[Refrão]

                 [Em]
Já chorei pra valer
      [Bm]         [Am]
Só pensando em você
            [D7]
É inútil tentar te esquecer, ié
[G]                [Em]
 Posso até disfarçar
       [Bm]         [Am]
Que deixei de te amar (de te amar, de te amar)
         [Cm7]                 [D7]          [Gm]
Só que a minha vida não tem graça sem você

[Solo] [Gm]  [Eb7M]  [F]
       [Gm]  [Cm7]  [F]

[Segunda Parte]

[Gm]
 Você foi embora
                                       [Cm7]
Mas deixou uma saudade e com ela a solidão

Que me apavora
       [Eb7M]                      [F]
Que maltrata e machuca o meu coração

Que sofre por não ter
[D7]                            [Gm]   [F/A]  [Bb]
A felicidade que está em suas mãos

[Pré-Refrão]

[Bb]               [Eb] [Bb]
 E quanto tempo mais
                                       [F]           [Bb] [F]
Você vai demorar pra refletir sobre a nossa relação
[Bb]                [Eb] [Bb]
 O teu silêncio traz
                                      [F]
O desespero e eu já não aguento essa sua indecisão
      [D7]
Eu preciso dar um tempo
             [G]
Pro meu coração

[Refrão]

                 [Em]
Já chorei pra valer
      [Bm]         [Am]
Só pensando em você
            [D7]
É inútil tentar te esquecer, ié
[G]                [Em]
 Posso até disfarçar
       [Bm]         [Am]
Que deixei de te amar (de te amar, de te amar)
         [Cm7]                 [D7]          [G]
Só que a minha vida não tem graça sem você

                 [Em]
Já chorei pra valer
      [Bm]         [Am]
Só pensando em você
            [D7]
É inútil tentar te esquecer
[G]                [Em]
 Posso até disfarçar
       [Bm]         [Am]
Que deixei de te amar (de te amar, de te amar)
         [Cm7]                 [D7]          [Gm]
Só que a minha vida não tem graça sem você
[Gm]
Cadê você?`,
  },
  {
    id:            "rick-renner-filha",
    titulo:        "Filha",
    artista:       "Rick & Renner",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 3497,
    cifra: `[Intro] [D]  [A]  [G]  [D]  [A]

 [D]
Hoje eu parei pra escrever
        [A]
Alguma coisa assim sobre você
          [G]
E simplesmente me deixei levar
         [D]                  [A]
Pela emoção de poder lhe falar
    [D]
Do dia em que você nasceu
           [A]
Vinda do amor de sua mãe e eu
             [G]
Um lindo presente que o Senhor nos deu
        [D]                [A]
A realidade de um sonho meu
    [D]
E quando você chorou
             [A]
Deus me ensinou uma nova canção
     [Em]                   [G]
Seus olhos de um anjo pequeno
          [D]                [A]
Iam se fazendo minha religião
 [D]
Coisas que de mim não saem
            [A]
A primeira vez que me chamou de pai
               [Em]               [G]
Vou lhe confessar agora, minha filha
[Em]                          [A]                   [D]    [A]
Com você eu aprendi que um homem tem que ter família
  [D]
Quinze anos faz agora
          [A]
É de alegria que meus olhos choram
             [G]
Meu pequeno anjo que agora fascina
              [D]                    [A]
Para mim vai ser sempre minha menina
[D]
Filha onde você vai
             [A]
Pode não sobrar um lugar pro seu pai
              [Em]                       [G]
Mas tenha certeza que eu vou sempre estar
            [D]                 [A]
Perto de você onde quer que vá
    [Em]                  [A]
Não é que eu vá te vigiar
    [D]               [A/C#]     [Bm]
Não é que eu queira ser seu dono
         [G]               [A]
Isso é só um cuidado de pai
              [D]   [A]
Filha eu te amo

[Solo] [D]  [F#7]  [Bm]  [Em]  [G]  [D]  [A]
       [D]  [F#7]  [Bm]  [G]  [Em]  [A]

    [D]
E quando você chorou
             [A]
Deus me ensinou uma nova canção
      [Em]                    [G]
Seus olhos de um anjo pequeno
          [D]                 [A]
Iam se fazendo minha religião
[D]
Coisas que de mim não saem
            [A]
A primeira vez que me chamou de pai
              [Em]                 [G]
Vou lhe confessar agora minha filha
  [Em]                         [A]                   [D]   [A]
Com você eu aprendi que um homem tem que ter família
[D]
15 Anos faz agora
          [A]
É de alegria que meus olhos choram
             [G]
Meu pequeno anjo que agora fascina
               [D]                   [A]
Para mim vai ser sempre minha menina
[D]
Filha onde você vai
             [A]
Pode não sobrar um lugar pro seu pai
              [Em]                       [G]
Mas tenha certeza que eu vou sempre estar
         [D]                   [A]
Perto de você onde quer que vá
    [Em]                  [A]
Não é que eu vá te vigiar
 [D]                  [A/C#]     [Bm]
Não é que eu queira ser seu dono
    [G]                     [A]
Isso é só um cuidado de pai
             [D]  [A]
Filha eu te amo
     [Em]               [A]
Não é que eu vá te vigiar
    [D]               [A/C#]     [Bm]
Não é que eu queira ser seu dono
        [G]                [A]
Isso é só um cuidado de pai
             [D]
Filha, eu te amo`,
  },
  {
    id:            "rick-renner-sem-direcao",
    titulo:        "Sem Direção",
    artista:       "Rick & Renner",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4472,
    cifra: `[Intro] [Bb]  [F]  [Bb]  [F]  [C]  [Bb]  [F]

E|------------------------------------------------------|
B|------------------------------------------------------|
G|---------------------------------5--------------------|
D|-5/7-5----5/7-5-----5/7-5----5-7--7-5-5-7/10--5-3-3---|
A|------8-5-------8--------8-5--------------------------|
E|-----------------8------------------------------------|

[F]                                 [Bb]
Sem direção, meu coração, anda perdido
[F]                                       [Bb]
Seja onde for, por esse amor, vive esquecido
[Bb]        [C]             [Bb]     [F]     [Bb]  [F]
Dia sem sol, noite sem lua, ferido

[F]                                         [Bb]
Não posso mais, machuca demais, esse desacerto
[F]                                      [Bb]
Pra solidão, já disse não, mas não tem jeito,
[Bb]        [C]                [Bb]             [F]      [C7]
Vivendo assim, sou alvo do fim, é tiro no peito

[F]        [Am7]           [Dm]                       [Bb]
Por esse amor eu me engano, que fazer se eu amo
       [Gm]      [Bb]         [C]
Quem sabe amanhã vai voltar
[F]          [Am7]          [Dm]        [C]        [Bb]
Por esse amor eu me entrego, juro não nego
    [Gm]        [C]              [Bb]   [F]
Preciso desse amor pra caminhar

( [Bb]  [F]  [Bb]  [F]  [C]  [Bb]  [F] )

E|------------------------------------------------------|
B|------------------------------------------------------|
G|---------------------------------5--------------------|
D|-5/7-5----5/7-5-----5/7-5----5-7--7-5-5-7/10--5-3-3---|
A|------8-5-------8--------8-5--------------------------|
E|-----------------8------------------------------------|

[F]                                         [Bb]
Não posso mais, machuca demais, esse desacerto
[F]                                      [Bb]
Pra solidão, já disse não, mas não tem jeito,
[Bb]        [C]                [Bb]             [F]      [C7]
Vivendo assim, sou alvo do fim, é tiro no peito

[F]        [Am7]           [Dm]                       [Bb]
Por esse amor eu me engano, que fazer se eu amo
       [Gm]      [Bb]         [C]
Quem sabe amanhã vai voltar
[F]          [Am7]          [Dm]        [C]        [Bb]
Por esse amor eu me entrego, juro não nego
    [Gm]        [C]              [Bb]   [F]
Preciso desse amor pra caminhar

[F]        [Am7]           [Dm]                       [Bb]
Por esse amor eu me engano, o que fazer se eu amo
       [Gm]      [Bb]         [C]
Quem sabe amanhã vai voltar
[F]          [Am7]          [Dm]        [C]        [Bb]
Por esse amor eu me entrego, juro não nego
    [Gm]        [C]              [Bb]   [F]
Preciso desse amor pra caminhar`,
  },
  {
    id:            "rick-renner-escolta-de-vagalumes",
    titulo:        "Escolta de Vagalumes",
    artista:       "Rick & Renner",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 5061,
    cifra: `[Intro] [A]  [Bm]  [E7]  [A]  [A7]
        [D]  [E7]  [A]  [A9]

   [A]                 [E/G#]          [F#m]  [A7]
Voltando pra minha terra, eu renasci
    [D]                  [A7]                  [D]  [D]  [C#]  [D]
Nos anos que fiquei distante, acho que morri
[E7]                    [D]                    [A]
Morri de saudade dos pais, irmãos e companheiros
                              [E7]
Que ao cair da tarde no velho terreiro
          [D]                       [A]
A gente cantava as mais lindas canções

  [E7]               [D]            [A]
Viola afinada e na voz dueto perfeito
                               [E7]
Longe eu não cantava doia meu peito
           [D]    ( [E7] )    [A]
Na cidade grande só tive ilusões

       [E7]                     [F#m]
Mas voltei, mas voltei, eu voltei
  [E7]               [D]                [A]
E ao passar a porteira,a mata e o perfume
                           [E7]
Eu fui escoltado pelos vagalumes
             [D]               [A]
Pois era uma linda noite de luar

       [E7]                     [F#m]
Mas chorei, mas chorei, eu chorei
   [E7]                     [D]                  [A]
Ao ver meus pais, meus irmãos vindo ao meu encontro
                            [E7]
A felicidade misturou o meu pranto
                [D]        ( [E7] )  [A]
Com o orvalho da noite desse meu lugar

( [A]  [Bm]  [E7]  [A]  [A7] )
( [D]  [E7]  [A]  [A9] )

   [A]                 [E/G#]                 [F#m]  [A7]
Ganhei dinheiro lá fora, mas foi tudo em vão
   [D]              [A7]                 [D]  [C#]  [D]
A natureza é meu mundo, eu sou o sertão
    [E7]                 [D]                 [A]
Correr pelos campos floridos feito um menino
                            [E7]
Esquecer as mágoas e os desatinos
              [D]              [A]
Que a vida lá fora me proporcionou

  [E7]            [D]             [A]
Ouvir o sabiá cantando e a juriti
                             [E7]
E a felicidade de um bem-ti-vi
            [D]     ( [E7] )    [A]
Que parece dizer: meu amigo voltou

[E7]                     [F#m]
Mas voltei, mas voltei, eu voltei
  [E7]               [D]                 [A]
E ao passar a porteira, a mata e o perfume
                           [E7]
Eu fui escoltado pelos vagalumes
             [D]               [A]
Pois era uma linda noite de luar

       [E7]                     [F#m]
Mas chorei, mas chorei, eu chorei
   [E7]                     [D]                  [A]
Ao ver meus pais, meus irmãos vindo ao meu encontro
                            [E7]
A felicidade misturou o meu pranto
                [D]        ( [E7] )  [A]
Com o orvalho da noite desse meu lugar

[Final] [A]  [Bm]  [E7]  [A]  [A7]
        [D]  [E7]  [A]  [A9]`,
  },
  {
    id:            "rick-renner-preciso-te-encontrar",
    titulo:        "Preciso te encontrar",
    artista:       "Rick & Renner",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4498,
    cifra: `[Intro] [C]  [G7]  [F]  [C]
        [C]  [G7]  [F]  [C]

[C]                                  [G7]
Andei seguindo o teu olhar em cada rua em que eu passei
            [F]                                 [G7]
Em cada esquina em que eu parei, tentei te encontrar
[C]                                      [G7]
Em cada rosto eu quis te ver, eu quis fugir da solidão
          [F]                           [G7]
Mas este vazio no coração me diz que não vai dar
[C]                                    [G7]
Onde você anda? Que eu não consigo achar o teu caminho
            [Am]                          [G7]
Ficar assim sozinho sem você me dá uma vontade de morrer
[C]                                   [G7]
Eu estou perdido, nem sei que dia é hoje da semana
                      [Am]                             [G7]    [F]
Mas sei que pra quem ama qualquer dia é bom pra se amar, amar
               [C]      [F]              [C]      [F]               [C]
Preciso te encontrar,  preciso te encontrar,  preciso te encontrar

[C]                                      [G7]
Em cada rosto eu quis te ver, eu quis fugir da solidão
          [F]                           [G7]
Mas este vazio no coração me diz que não vai dar
[C]                                    [G7]
Onde você anda? que eu não consigo achar o teu caminho
            [Am]                          [G7]
Ficar assim sozinho sem você me dá uma vontade de morrer
[C]                                   [G7]
Eu estou perdido, nem sei que dia é hoje da semana
                      [Am]                             [G7]
Mas sei que pra quem ama qualquer dia é bom pra se amar, amar

 [C]                                   [G7]
Onde você anda? que eu não consigo achar o teu caminho
            [Am]                          [G7]
Ficar assim sozinho sem você me dá uma vontade de morrer
[C]                                   [G7]
Eu estou perdido, nem sei que dia é hoje da semana
                      [Am]                             [G7]
Mas sei que pra quem ama qualquer dia é bom pra se amar, amar
               [C]      [F]               [C]       [F]
Preciso te encontrar,   preciso te encontrar,   preciso te
           [F]               [C]
Encontrar,   preciso te encontrar
               [C]
Preciso te encontrar`,
  },
  {
    id:            "rick-renner-eu-mereco",
    titulo:        "Eu Mereço",
    artista:       "Rick & Renner",
    tom:           "F",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2041,
    cifra: `[Intro] [F9]  [Bb9]  [F9]  [Bb9]

[F9]                  [F4]   [F9]
Foi só uma noite e nada mais
                    [F4]      [F9]
Era pra ser só uma transa a mais
                              [Bb] [Bb9]
Mas não foi assim como eu pensei
[Bb]                           [Gm]
De repente um vinho um clima bom
                           [Bb]
Um toque de carinho aquele som
                 [C]              [F9]
Sem perceber aos poucos me entreguei

                   [F4]     [F9]
Foi um lance de desejo antigo
                    [F9]     [F4]
Não sei o que aconteceu comigo
                           [Bb] [Bb9]
Eu nunca transei ninguém assim
[Bb]                         [Gm]
Só que eu dormi depois do amor
                        [Bb]
E quando a manhã me acordou
            [C]        [F]
Estava sem ela e sem mim

[C]
O que é que a gente faz
                          [Bb]
Quando a paixão vem de repente
                                                 [F]
Feito um raio rouba a paz e invade o coração da gente
                    [C]
Assim da noite pro dia
                      [F]
Um sentimento por alguém

[C]
O que é que a gente faz
                       [Bb]
Quando a noite foi gostosa
                                            [F]
Você fez e aconteceu com uma mulher maravilhosa
                 [C]
Mas acorda no silêncio
              [F]
De um quarto sem ninguém

[Refrão]

[C]                           [Dm]
É, vira inferno o que era céu
                    [C]
Tô num quarto de motel
      [Bb]  [C]      [F]
Sem nome, sem endereço

[C]                        [Dm]
É, quem mandou me dar assim
                     [C]
Isso é bem feito pra mim
      [Bb]      [C]       [F]
Manda outra que eu mereço

[Segunda Parte]

 [F]  [Bb]  [F]  [Bb]


   [F4]     [F9]
Foi um lance de desejo antigo
                    [F9]     [F4]
Não sei o que aconteceu comigo
                           [Bb] [Bb9]
Eu nunca transei ninguém assim
[Bb]                         [Gm]
Só que eu dormi depois do amor
                        [Bb]
E quando a manhã me acordou
            [C]        [F]
Estava sem ela e sem mim

[C]
O que é que a gente faz
                          [Bb]
Quando a paixão vem de repente
                                                 [F]
Feito um raio rouba a paz e invade o coração da gente
                    [C]
Assim da noite pro dia
                      [F]
Um sentimento por alguém

[C]
O que é que a gente faz
                       [Bb]
Quando a noite foi gostosa
                                            [F]
Você fez e aconteceu com uma mulher maravilhosa
                 [C]
Mas acorda no silêncio
              [F]
De um quarto sem ninguém

[Refrão]

[C]                           [Dm]
É, vira inferno o que era céu
                    [C]
Tô num quarto de motel
      [Bb]  [C]      [F]
Sem nome, sem endereço

[C]                        [Dm]
É, quem mandou me dar assim
                     [C]
Isso é bem feito pra mim
      [Bb]      [C]       [F]
Manda outra que eu mereço

[C]                           [Dm]
É, vira inferno o que era céu
                    [C]
Tô num quarto de motel
      [Bb]  [C]      [F]
Sem nome, sem endereço

[C]                        [Dm]
É, quem mandou me dar assim
                     [C]
Isso é bem feito pra mim
      [Bb]              [F]
Manda outra que eu mereço

 [F]  [Bb]  [F]  [Bb]  [F]`,
  },
  {
    id:            "rick-renner-casa-de-caboclo",
    titulo:        "Casa de Caboclo",
    artista:       "Rick & Renner",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 2361,
    cifra: `[Intro]  [A] [E] [A] [E] [A] [E] [A] [E] [A]

[A]
Seja bem-vindo nessa casa de caboclo
O que eu tenho é muito pouco
                      [E]
Aqui nesse fim de estrada
Tem um ditado aqui no nosso recanto
Que o pouco com Deus é muito
                       [A]
E o muito sem Deus é nada
Não repare minha estrada esburacada
                  [A7]
Ela é trilha de boiada,
                   [D]
Ela é rota de tropeiro
                              [A]
Quando chove é uma lama grudadera
                    [E]
Quando é sol vira poeira
                   [A]
Parecendo um fumaceiro


[Refrão]
            [E]                       [A]
Seu carro moço é o primeiro que aparece
                     [E]
Meu cachorro não conhece,
                    [A]
Nunca viu um trem assim
             [E]                    [A]
Pode até parecer surpresa pro senhor
                   [E]
Mas o progresso passou
                        [A]     [E]
E acho que esqueceu de mim


[A]
A minha água vem da fonte, não tem cano
Café coado no pano,
                  [E]
Meu açúcar é rapadura
Mas é da boa, feita de cana caiana
O melado dessa cana
                   [A]
Adoça qualquer margura
Se o senhor não tá com pressa, eu vou mandar
                 [A7]
Minha véia preparar
                     [D]
Um franguinho com quiabo
                                     [A]
Aqui na roça eu não tenho o tal do Uísque
                [E]
Pra abrir o apetite,
                           [A]
Eu vou buscar um esquenta-rabo


[Refrão]
            [E]                       [A]
Seu carro moço é o primeiro que aparece
                     [E]
Meu cachorro não conhece,
                    [A]
Nunca viu um trem assim
             [E]                    [A]
Pode até parecer surpresa pro senhor
                   [E]
Mas o progresso passou
                        [A] [E] [A] [E] [A] [E] [A] [E] [A]
E acho que esqueceu de mim


[A]
Agora que a gente já forrô o peito
Se quiser eu dô um jeito
                     [E]
Pro senhor fazer o quilo
Não se preocupe, não tem barulho de nada
Aqui na minha morada
                    [A]
É só passarinho e grilo
Tem uma coisa que eu vou pedir pro senhor
                  [A7]
Pra me fazer um favor
                   [D]
Na hora que for embora
                                    [A]
Feche a porteira que me serve de escudo
                     [E]
Pra proteger o meu mundo
                   [A]
Desse mundo lá de fora


[Refrão]
            [E]                       [A]
Seu carro moço é o primeiro que aparece
                     [E]
Meu cachorro não conhece
                    [A]
Nunca viu um trem assim
           [E]                    [A]
Pode até parecer surpresa pro senhor
                   [E]
Mas o progresso passou
                        [A]
E acho que esqueceu de mim

            [E]                       [A]
Seu carro moço é o primeiro que aparece
                     [E]
Meu cachorro não conhece
                    [A]
Nunca viu um trem assim
           [E]                    [A]
Pode até parecer surpresa pro senhor
                   [E]
Mas o progresso passou
                        [A]   [E]
E acho que esqueceu de mim`,
  },
  {
    id:            "rick-renner-eu-sem-voce",
    titulo:        "Eu sem você",
    artista:       "Rick & Renner",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 4192,
    cifra: `[Intro] [A]  [D]  [A]  [D]
        [A]  [A]  [A4]
        [A]  [D]  [D4]
        [D]  [A]  [E7]
        [A]  [D]  [A]

E|--------------------------------------------------------|
B|--------------------------------------------------------|
G|--------------------------------------------------------|
D|--------------------------------------------------------|
A|---0-0--2--4--4-----0-0--2--4--5-5-5-4--2---0-0---------|
E|-0---------------0-------------------------------0--2---|

E|--14-14-14-12-10--9--12-12-12-10--9-7--10-10-10--9-7--9-|
B|--15-15-15-14-12-10--14-14-14-12-10-9--12-12-12-10-9-10-|
G|--------------------------------------------------------|
D|--------------------------------------------------------|
A|--------------------------------------------------------|
E|--------------------------------------------------------|

E|--------------------------------------------------------|
B|--------------------------------------------------------|
G|--------------------------------------------------------|
D|--------------------------------------------------------|
A|------4--7--5-4-----------------------------------------|
E|--5-5-------------7--5-5-5~-----------------------------|

                   [A]  [A4]  [A]                        [A]  [A4]  [A]
Meus dias sem te ver      são difíceis de viver
                                                 [D]  [D4]  [D]
Feito um louco na cidade        com saudade de você
                   [D]  [D4]  [D]                     [A]  [A4]  [A]
Durmo em qualquer lugar olhos vermelhos de chorar
                 [E7]
É uma pena que você     não consegue entender
                          [A]  [D/A]  [A]
Meu jeito louco de te amar

          [A7]     [D]
E se eu pareço um vagabundo
É que o amor maior do mundo
                    [A]   [A4]   [A]
Mora aqui no peito meu
                           [E7]
E se eu sofro assim por ela

É que aprendi que a vida é ela
                        [A]  [A4]  [A]
E que o amor dela sou eu

          [A7]     [D]
E se eu pareço um vagabundo
É que o amor maior do mundo
                    [A]   [A4]   [A]
Mora aqui no peito meu
                           [E7]
E se eu sofro assim por ela

É que aprendi que a vida é ela
                        [A]  [A4]  [A]
E que o amor dela sou eu

( [A]  [D]  [A]  [D] )
( [A]  [A]  [A4] )
( [A]  [D]  [D4] )
( [D]  [A]  [E7] )
( [A]  [D]  [A] )

                   [A]  [A4]  [A]                    [A]  [A4]  [A]
Meus dias sem te ver         dá vontade de morrer
                                          [D]  [D4]  [D]
Eu tô enlouquecendo, tô bebendo pra esquecer
                                           [A]  [A4]  [A]
Não sei nem me cuidar   longe de você não dá
                 [E7]
É uma pena que você     não consegue entender
                        [A]  [A4]  [A]
Meu jeito louco de te amar

          [A7]     [D]
E se eu pareço um vagabundo
É que o amor maior do mundo
                    [A]   [A4]   [A]
Mora aqui no peito meu
                           [E7]
E se eu sofro assim por ela

É que aprendi que a vida é ela
                        [A]  [A4]  [A]
E que o amor dela sou eu

          [A7]     [D]
E se eu pareço um vagabundo
É que o amor maior do mundo
                    [A]   [A4]   [A]
Mora aqui no peito meu
                           [E7]
E se eu sofro assim por ela

É que aprendi que a vida é ela
                        [A]  [A4]  [A]
E que o amor dela sou eu

          [A7]     [D]
E se eu pareço um vagabundo
É que o amor maior do mundo
                    [A]   [A4]   [A]
Mora aqui no peito meu
                           [E7]
E se eu sofro assim por ela

É que aprendi que a vida é ela
                        [A]  [A4]  [A]
E que o amor dela sou eu

[A7]     [D]
E se eu pareço um vagabundo
É que o amor maior do mundo
                    [A]   [A4]   [A]
Mora aqui no peito meu
                           [E7]
E se eu sofro assim por ela

É que aprendi que a vida é ela
                        [A]  [A4]  [A]
E que o amor dela sou eu

( [A]  [D]  [A]  [D] )
( [A]  [A]  [A4] )
( [A]  [D]  [D4] )
( [D]  [A]  [E7] )
( [A]  [D]  [A] )`,
  },
  {
    id:            "rick-renner-paixao-de-peao",
    titulo:        "Paixão de Peão",
    artista:       "Rick & Renner",
    tom:           "D",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 921,
    cifra: `[Intro] [D]

[D]
O meu amor foi embora

Estou numa boa agora
                     [A]
De olho noutra paixão


Na maior felicidade

Curtindo minha liberdade
                 [D]
Minha vida de peão


Estou feliz vivendo assim
[D]
 Na dor eu botei um fim
                        [G]
Tristeza, joguei no chão

                          [D]
Saudade, eu mandei embora
                       [A]
Solidão, cortei de espora
                  [D]
Como faz um campeão

                      [A]                    [D]
Meu amor fugiu de mim, meu cavalo se mandou
                     [A]         [G]          [D]
Chorei pelo meu cavalo, sorri pelo meu amor
                   [G]                    [D]
Cavalo bom é difícil, difícil de se achar
                         [A]                            [D]
Mulher bonita é mais fácil, se encontra em qualquer lugar


[Refrão]
                                         [A]
Paixão de peão é boi, de violeiro é viola
                           [G]                [D]
Dor de amor que se foi, só outro amor consola
                                         [A]
Banana só dá no cacho, melancia dá na rama
                      [G]           [A]              [D]
Minha paixão é aquela fruta gostosa que dá na cama

                                         [A]
Paixão de peão é boi, de violeiro é viola
                           [G]                [D]
Dor de amor que se foi, só outro amor consola
                                         [A]
Banana só dá no cacho, melancia dá na rama
                      [G]           [A]              [D]
Minha paixão é aquela fruta gostosa que dá na cama

[D]
O meu amor foi embora

Estou numa boa agora
                     [A]
De olho noutra paixão


Na maior felicidade

Curtindo minha liberdade
                 [D]
Minha vida de peão


Estou feliz vivendo assim
[D]
 Na dor eu botei um fim
                        [G]
Tristeza, joguei no chão

                         [D]
Saudade, eu mandei embora
                       [A]
Solidão, cortei de espora
                  [D]
Como faz um campeão

                     [A]                    [D]
Meu amor fugiu de mim, meu cavalo se mandou
                     [A]         [G]          [D]
Chorei pelo meu cavalo, sorri pelo meu amor
                   [G]                    [D]
Cavalo bom é difícil, difícil de se achar
                         [A]                            [D]
Mulher bonita é mais fácil, se encontra em qualquer lugar


[Refrão]
                                         [A]
Paixão de peão é boi, de violeiro é viola
                           [G]                [D]
Dor de amor que se foi, só outro amor consola
                                         [A]
Banana só dá no cacho, melancia dá na rama
                      [G]           [A]              [D]
Minha paixão é aquela fruta gostosa que dá na cama

                                        [A]
Paixão de peão é boi, de violeiro é viola
                           [G]                [D]
Dor de amor que se foi, só outro amor consola
                                         [A]
Banana só dá no cacho, melancia dá na rama
                      [G]           [A]              [D]
Minha paixão é aquela fruta gostosa que dá na cama`,
  },
  {
    id:            "rick-renner-mil-vezes-cantarei",
    titulo:        "Mil Vezes Cantarei",
    artista:       "Rick & Renner",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 5109,
    cifra: `[Intro] [C]

E|----------------------------------------------------------------|
B|----------------------------------------------------------------|
G|-5---4-5-7/9-7--------------------------------------------------|
D|---7-----------9---5---5-7--5-7--5/7-5--------------------------|
A|---------------------8-----------------8-7-5-3-5----------------|
E|----------------------------------------------------------------|

E|----------------------------------------------------------------|
B|---------5------------------------------------------------------|
G|-5---4-5----12-9----2-4-5--4-5----------------------2--7-5-4----|
D|---7------------9---3-5-7--5-7---5/7-5--------------3--9-5-5----|
A|----------------------------------------8-7--5-3-5--------------|
E|----------------------------------------------------------------|

[C9]                         [Em]
Toda vez que eu penso em você
        [F]                       [C9]
Dói lembrar tanto amor que eu te dei
    [F]                   [C9]
Teu amor que um dia foi meu
             [G]  [G4]
Hoje eu não sei

          [C9]                [Em]
Quando o dia amanhece eu sinto
      [F]                    [C9]
Que você ainda está nessa cama
     [F]                    [C9]
E em minha emoção se derrama
           [F/G]  [G]
Choro por ti

[Am]                    [Em]
Se não fosse por essa canção
    [F]                [C9]
Já teria morrido de amor
        [F]                 [C/E]
Mas eu tenho a estranha ilusão
         [F]                [G]  [F/G]
Que me escute e volte pra mim

                      [C9]
Mais de mil vezes cantarei
           [G/B]         [Am]
Porque não morre a ilusão
          [Am/G]        [Dm]
E onde quer que você vá
[C/E]                  [F/G]
Me escutará seu coração

                      [C9]
Mais de mil vezes cantarei
            [G/B]         [Am]
Porque não morre essa paixão
      [Am/G]         [Dm]
E eu estou seguro que
[C/E]            [F/G]          [C9]
Me escutará seu coração oh, oh

( [C] )

[Am]                    [Em]
Se não fosse por essa canção
    [F]                [C9]
Já teria morrido de amor
        [F]                 [C/E]
Mas eu tenho a estranha ilusão
         [F]                [G]  [F/G]
Que me escute e volte pra mim

                      [C9]
Mais de mil vezes cantarei
           [G/B]         [Am]
Porque não morre a ilusão
          [Am/G]        [Dm]
E onde quer que você vá
[C/E]                  [F/G]
Me escutará seu coração

                      [C9]
Mais de mil vezes cantarei
            [G/B]         [Am]
Porque não morre essa paixão
      [Am/G]         [Dm]
E eu estou seguro que
[C/E]            [F/G]          [C9]
Me escutará seu coração oh, oh


         [G/B]           [Am]
Que não morra o nosso amor
         [Dm]    [C/E]
Que não morra
       [F/G]
Por favor
             [C9]  [G/B]  [Am]  [F]  [C9]
Não o nosso amor`,
  },
  {
    id:            "rick-renner-quarto-de-motel",
    titulo:        "Quarto de Motel",
    artista:       "Rick & Renner",
    tom:           "A",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 1490,
    cifra: `[Intro] [F]  [Bb9]

 [F]
Foi só uma noite e nada mais

Era pra ser só uma transa a mais
                             [Bb9]
Mas não foi assim como eu pensei
                             [Gm]
De repente um vinho,um clima bom
                            [Bb9]
Um toque de carinho, aquele som
                                [F]
Sem perceber aos poucos me entreguei

Foi um lance de desejo antigo

Não sei o que aconteceu comigo
             [F7]            [Bb9]
Eu nunca transei ninguém assim
                               [Gm]
Só que eu dormi depois do amor
                        [C]
E quando a manhã me acordou
        [Bb9]         [F]        [C]
Estava sem ela e sem mim

                                               [Bb9]
O que que a gente faz quando a paixão vem de repente
                                              [F]
Feito um raio,rouba a paz invade o coração da gente
                     [Bb9]                     [F]       [C]
E assim da noite pro dia um sentimento por alguém
                                            [Bb9]
O que que a gente faz quando a noite foi gostosa
                                        [F]
Você fez aconteceu com uma mulher maravilhosa
                [C]                          [F]
Mas acorda no silêncio de um quarto sem ninguém

[C]                         [Dm]
É, vira inferno o que era céu
                   [C]
Tô num quarto de Motel
    [Bb9]           [F]
Sem nome, sem endereço
[C]                       [Dm]
É, quem mandou me dar assim
                     [C]
Isso é bem feito pra mim
      [Bb9]          [F]
Manda outra que eu... mereço

( [F]  [Bb9] )
( [F]  [Bb9] )

[F]
 Foi um lance de desejo antigo

Não sei o que aconteceu comigo
             [F7]            [Bb9]
Eu nunca transei ninguém assim
                               [Gm]
Só que eu dormi depois do amor
                        [C]
E quando a manhã me acordou
        [Bb9]         [F]        [C]
Estava sem ela e sem mim

                                               [Bb9]
O que que a gente faz quando a paixão vem de repente
                                              [F]
Feito um raio,rouba a paz invade o coração da gente
                     [Bb9]                     [F]       [C]
E assim da noite pro dia um sentimento por alguém
                                            [Bb9]
O que que a gente faz quando a noite foi gostosa
                                        [F]
Você fez aconteceu com uma mulher maravilhosa
                [C]                          [F]
Mas acorda no silêncio de um quarto sem ninguém

[C]                          [Dm]
É, vira inferno o que era céu
                   [C]
Tô num quarto de Motel
    [Bb9]           [F]
Sem nome, sem endereço
[C]                       [Dm]
É, quem mandou me dar assim
                     [C]
Isso é bem feito pra mim
      [Bb9]          [F]
Manda outra que eu... mereço

[Final] [F]  [Bb9]
        [F]  [Bb9]`,
  },
  {
    id:            "rick-renner-fim-de-semana",
    titulo:        "Fim De Semana",
    artista:       "Rick & Renner",
    tom:           "C",
    ritmo:         "Sertanejo",
    dificuldade:   "iniciante",
    tags:          ["sertanejo"],
    tocadasSemana: 3426,
    cifra: `[Intro] [F]  [G]  [F]

[C]            [F]       [G]
Do jeito que você me olha
 [F]         [C]    [F] [G] [F]
Você me fascina
[C]        [F]           [G]
Eu fico louco por você
        [F]        [C]    [F] [G] [F]
E esse amor me domina

[C]         [F]      [G]  [F]
Podemos sair por ai
  [C]           [F]      [G]   [F]
Fazer um programa legal
[C]            [F]        [G]
E o fim de semana curtir
 [F]            [C]     [F] [G] [F]
Que tal? Que tal?
 [C]           [F]       [G]    [F]
Chega mais perto de mim
[C]             [F]       [G]   [F]
Mais perto do meu coração
[C]            [F]       [G]
Se tudo der certo assim
[F]             [C]   [F] [G]
Que bom, que bom
[F]            [C]    [F] [G] [F]
Que bom, que bom

[C]             [F]        [G]
Do jeito que você me olha
 [F]             [C]    [F]  [G]  [F]
Você não me engana
 [C]           [F]          [G]
Quem sabe a gente se encontra
     [F]        [C]    [F] [G] [F]
E a gente se ama

[C]         [F]      [G]  [F]
Podemos sair por ai
  [C]           [F]      [G]   [F]
Fazer um programa legal
[C]            [F]        [G]
E o fim de semana curtir
 [F]            [C]     [F] [G] [F]
Que tal? Que tal?
 [C]           [F]       [G]    [F]
Chega mais perto de mim
[C]             [F]       [G]   [F]
Mais perto do meu coração
[C]            [F]       [G]
Se tudo der certo assim
[F]             [C]   [F] [G]
Que bom, que bom
[F]            [C]    [F] [G] [F]
Que bom, que bom

[C]            [F]       [G]
Do jeito que você me olha
 [F]         [C]    [F] [G] [F]
Você me fascina
[C]        [F]           [G]
Eu fico louco por você
        [F]        [C]    [F] [G] [F]
E esse amor me domina

[C]         [F]      [G]  [F]
Podemos sair por ai
  [C]           [F]      [G]   [F]
Fazer um programa legal
[C]            [F]        [G]
E o fim de semana curtir
 [F]            [C]     [F] [G] [F]
Que tal? Que tal?
 [C]           [F]       [G]    [F]
Chega mais perto de mim
[C]             [F]       [G]   [F]
Mais perto do meu coração
[C]            [F]       [G]
Se tudo der certo assim
[F]             [C]   [F] [G]
Que bom, que bom
[F]            [C]    [F] [G] [F]
Que bom, que bom
[F]             [C]   [F] [G]
Que bom, que bom
[F]            [C]    [F] [G] [F]
Que bom, que bom
[F]             [C]   [F] [G]
Que bom, que bom
[F]            [C]    [F] [G] [F]
Que bom, que bom
[F]             [C]   [F] [G]
Que bom, que bom
[F]            [C]    [F] [G] [F]
Que bom, que bom`,
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
