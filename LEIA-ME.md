# Site Karinny Lash — guia rápido

Bem-vinda, Karinny! Este é o seu site. Ele funciona sozinho, sem programa nenhum
instalado. Este guia explica as 4 coisas que você pode querer fazer.

---

## 1. Como abrir o site no seu computador

Dê **dois cliques** no arquivo `index.html`. Ele abre no navegador. Só isso.

---

## 2. Suas fotos

**As 12 fotos dos procedimentos já estão no portfólio do site**, cada uma com o
nome do procedimento, a categoria e o preço embaixo. Clicando na foto, ela abre
grande com a descrição completa e um botão de agendar direto no WhatsApp.

**A sua foto também já está no site**, na seção "Prazer, eu sou a Karinny"
(arquivo `imagens/karinny.jpg`). Para trocar, salve outra foto em pé por cima,
com o mesmo nome.

Falta só uma, e enquanto não chegar o site funciona normalmente sem ela:

| Onde aparece | Nome do arquivo | Formato |
|---|---|---|
| Imagem do link ao mandar o site no WhatsApp | `capa.jpg` | deitada, 1200 x 630 |

**Regra de ouro para o nome de qualquer foto nova:** tudo em letra minúscula,
sem acento e sem espaço (use `-` no lugar do espaço). Ex.: `fox-eyes-2.jpeg`.
Isso evita foto quebrada depois que o site estiver publicado.

Para **trocar** uma foto do portfólio por outra melhor, salve a nova por cima
com o mesmo nome — o site pega sozinho, sem mexer em código.

Para **acrescentar** uma foto nova, veja o passo a passo no `LEIA-ME.txt`
dentro da pasta `imagens`.

---

## 3. Como mudar os preços

Abra o arquivo `js/script.js` com o **Bloco de Notas** (clique com o botão
direito → Abrir com → Bloco de Notas).

Logo no comecinho do arquivo você vê a lista de serviços. Cada um é assim:

```javascript
{
  nome: 'Volume Brasileiro',
  categoria: 'natural',
  preco: 165,
  descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
  manutencao: [ { dias: 15, valor: 110 }, { dias: 20, valor: 125 } ]
},
```

- **Mudar o preço:** troque só o número depois de `preco:` (sem `R$`, sem vírgula).
- **Mudar a manutenção:** troque os números depois de `valor:`.
- **Técnica sem manutenção:** deixe assim →
  `manutencao: { nota: 'Técnica sem manutenção, com durabilidade de 30 a 40 dias.' }`
- **Serviço sem manutenção nenhuma** (sobrancelhas): `manutencao: null`
- **Categoria:** só pode ser `'natural'`, `'intermediario'` ou `'sobrancelhas'`.
- **Tirar um serviço:** apague o bloco inteiro, das chaves `{` até `},`
- **Adicionar um serviço:** copie um bloco inteiro, cole embaixo e troque os dados.

Depois é só **salvar** o arquivo e atualizar a página no navegador (tecla F5).

O preço muda de uma vez no card, no botão de agendar, na lista do formulário
e no portfólio.

**Um único lugar extra:** no fim do `index.html` existe uma lista de preços
usada só pelo Google (procure por `"price":`). Ela não se atualiza sozinha —
quando mudar um preço, troque lá também (ex.: `"price": "165.00"`).

> ⚠️ **Confira o Mega Egípcio.** Você não me passou a categoria nem a manutenção
> dele. Deixei igual ao Mega Brasileiro (intermediário, sem manutenção, 30 a 40 dias).
> Se estiver diferente, corrija no `js/script.js` — tem um comentário marcando o lugar.

---

## 4. Como colocar o site no ar (de graça)

O jeito mais fácil, sem cadastro complicado e sem pagar nada:

1. Entre em **https://app.netlify.com/drop**
2. **Arraste a pasta inteira** `karinny lash` para dentro da área indicada na tela.
3. Espere alguns segundos. Pronto — o site está no ar e a Netlify te dá um
   endereço, algo como `nome-aleatorio.netlify.app`.
4. Crie uma conta grátis (pode entrar com o Google) para o site não sair do ar
   e para poder trocar o endereço por algo bonito, tipo `karinnylash.netlify.app`.
5. Copie esse link e cole na **bio do seu Instagram**, no lugar do "Agende seu horário ⬇️".

Para atualizar depois (mudou um preço, colocou fotos novas): entre na sua conta
da Netlify, vá em **Deploys** e arraste a pasta de novo. O endereço continua o mesmo.

---

## O que já está pronto no site

- Botão de WhatsApp em **cada serviço**, que abre a conversa com a mensagem escrita
  ("Oi Karinny! Vim pelo site. Gostaria de agendar: *Volume Glamour* — R$ 175,00...")
- **Formulário de agendamento** com prévia da mensagem em tempo real
- **Botão flutuante** do WhatsApp acompanhando a rolagem da página
- **Filtros** de serviços por categoria (Natural, Intermediário, Sobrancelhas)
- **A foto de cada procedimento fica dentro da própria tabela de valores**, junto
  do preço e da manutenção — a cliente vê o resultado e o valor no mesmo cartão.
  Clicando na foto, ela abre grande com a descrição, a manutenção e um botão para
  agendar. Funciona com setas, teclado e arrastando o dedo no celular.
  Quem tem mais de uma foto (o Design com Henna) mostra a primeira no cartão e a
  segunda nas setas. Quem liga a foto ao serviço é a lista `GALERIA`, no
  `js/script.js` — o passo a passo está no `LEIA-ME.txt` da pasta `imagens`.
- **Barrinha de comparação no Mega Egípcio**: as fotos do tamanho grande e do
  tamanho pequeno aparecem juntas no cartão, e a cliente arrasta a barrinha para
  o lado para comparar os dois resultados. Para ligar a comparação em outro
  serviço, no `js/script.js`:
  1. acrescente `comparar: true,` no serviço, dentro da lista `SERVICOS`;
  2. deixe duas fotos dele na lista `GALERIA`, cada uma com a sua `legenda`
     (ex.: `legenda: 'Tamanho grande'`). A legenda vira a etiqueta de cada lado.
- **10 perguntas frequentes** respondidas, para diminuir mensagem repetida no direct
- **Política de Agendamento** com o seu texto, numa seção própria logo antes do
  formulário, abrindo com o destaque de que todo agendamento precisa do sinal.
  O aviso do sinal também aparece na primeira tela do site, com link para a política.
- **Regras de atendimento**, repetidas no formulário e nas dúvidas frequentes:
  - **Sinal de R$ 30,00** no ato do agendamento, para qualquer serviço;
    atendimento confirmado só após o envio do comprovante
  - **24 horas de antecedência** para cancelar ou reagendar — assim o sinal é
    transferido para o novo agendamento. Com menos de 24h ou faltando, o sinal
    não é reembolsado
  - **Tolerância de 15 minutos** de atraso

  Para mudar qualquer um desses valores, procure no `index.html` por `R$ 30,00`,
  `24 horas` ou `15 minutos` e troque em **todos** os lugares onde aparecer
  (topo do site, política, formulário, dúvidas e formas de pagamento).
- **Endereço completo** na seção "Onde me encontrar" e no rodapé: Rua São Remo, 602
  — Vilas Boas, Campo Grande/MS, com botão de traçar rota
- Formas de pagamento: dinheiro, PIX e cartão (com aviso do acréscimo)
- Funciona bem em **celular, tablet e computador**
- Preparado para o **Google** encontrar seu estúdio (nome, cidade, telefone e preços)

## Espaço para depoimentos

Tem uma seção de depoimentos pronta dentro do `index.html`, desativada.
Quando você tiver **depoimentos verdadeiros** de clientes, me chame que eu ativo —
ou siga as instruções que estão escritas ali no arquivo. Não coloque depoimento
inventado: além de ser errado com as clientes, hoje as pessoas percebem na hora.

---

## Seus dados usados no site

- **WhatsApp:** (67) 98171-4627 → link `https://wa.me/5567981714627`
- **Instagram:** @karinnylash
- **Endereço:** Rua São Remo, 602 — Vilas Boas, Campo Grande/MS
- **Slogan:** *Naturalidade que encanta, olhar que marca.*
  (dentro do `index.html` tem outras duas opções de slogan, é só trocar)

Se algum desses dados mudar, o WhatsApp fica em dois lugares: no `js/script.js`
(linha `const WHATSAPP = '5567981714627';`) e nos links do `index.html`.
