/* ============================================================
   KARINNY LASH — Interatividade do site
   ============================================================ */

/* ============================================================
   ⚠️  KARINNY, PARA MUDAR PREÇOS É SÓ AQUI EMBAIXO ⚠️
   ------------------------------------------------------------
   Cada serviço tem:
     nome        -> o nome que aparece no card
     categoria   -> "natural", "intermediario" ou "sobrancelhas"
     preco       -> só o número, sem "R$" (ex.: 160)
     descricao   -> o textinho do card
     manutencao  -> lista de manutenções [dias, valor] OU
                    { nota: "texto livre" } quando não tem manutenção
   Para tirar um serviço do site, apague o bloco dele.
   Para adicionar, copie um bloco inteiro e mude os dados.
   ============================================================ */
const SERVICOS = [
  {
    nome: 'Efeito Rímel',
    categoria: 'natural',
    preco: 160,
    descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
    manutencao: [ { dias: 15, valor: 100 }, { dias: 20, valor: 125 } ]
  },
  {
    nome: 'Volume Brasileiro',
    categoria: 'natural',
    preco: 165,
    descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
    manutencao: [ { dias: 15, valor: 110 }, { dias: 20, valor: 125 } ]
  },
  {
    nome: 'Volume Brasileiro Marrom',
    categoria: 'intermediario',
    preco: 165,
    descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
    manutencao: [ { dias: 15, valor: 110 }, { dias: 20, valor: 130 } ]
  },
  {
    nome: 'Volume Glamour',
    categoria: 'intermediario',
    preco: 175,
    descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
    manutencao: [ { dias: 15, valor: 115 }, { dias: 20, valor: 130 } ]
  },
  {
    nome: 'Volume Egípcio Marrom',
    categoria: 'intermediario',
    preco: 180,
    descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
    manutencao: [ { dias: 15, valor: 115 }, { dias: 20, valor: 130 } ]
  },
  {
    nome: 'Fox Eyes',
    categoria: 'intermediario',
    preco: 185,
    descricao: 'Técnica perfeita, um cílios delicado e natural que vai combinar com você!',
    manutencao: [ { dias: 15, valor: 115 }, { dias: 20, valor: 130 } ]
  },
  {
    nome: 'Mega Brasileiro',
    categoria: 'intermediario',
    preco: 210,
    descricao: 'Técnica perfeita, um cílios delicado e marcante ao mesmo tempo, que vai combinar com você!',
    manutencao: { nota: 'Técnica sem manutenção, com durabilidade de 30 a 40 dias.' }
  },
  {
    /* ⚠️ ATENÇÃO KARINNY: a categoria e a manutenção do Mega Egípcio não estavam
       na lista que você mandou. Coloquei igual ao Mega Brasileiro.
       Se estiver diferente, é só corrigir as duas linhas abaixo. */
    nome: 'Mega Egípcio',
    categoria: 'intermediario',
    preco: 215,
    descricao: 'Elegante e delicado, pode ser feito tanto no tamanho grande quanto no pequeno — você escolhe o efeito que mais combina com você!',
    manutencao: { nota: 'Técnica sem manutenção, com durabilidade de 30 a 40 dias.' }
  },
  {
    nome: 'Design Personalizado',
    categoria: 'sobrancelhas',
    preco: 45,
    descricao: 'Design estratégico e personalizado para cada cliente, respeitando o formato do seu rosto.',
    manutencao: null
  },
  {
    nome: 'Design com Henna',
    categoria: 'sobrancelhas',
    preco: 65,
    descricao: 'Design estratégico e personalizado para cada cliente, com henna para preencher e realçar.',
    manutencao: null
  },
  {
    nome: 'Brow Lamination',
    categoria: 'sobrancelhas',
    preco: 120,
    descricao: 'Design estratégico e personalizado para cada cliente, com fios alinhados e efeito de sobrancelha cheia. Inclui tintura e óleo para hidratação no pós em casa.',
    manutencao: null
  }
];

/* Dados de contato — se o WhatsApp mudar, troque só aqui */
const WHATSAPP = '5567981714627';

/* ============================================================
   FOTOS DO PORTFÓLIO
   ------------------------------------------------------------
   Cada linha é uma foto da galeria, na ordem em que aparece.
     arquivo -> nome do arquivo dentro da pasta "imagens"
     servico -> tem que ser IGUALZINHO ao "nome" de um serviço
                da lista SERVICOS lá em cima
   A descrição, o preço e a categoria vêm sozinhos de SERVICOS,
   então você nunca precisa reescrever esse texto aqui.

   PARA ACRESCENTAR UMA FOTO NOVA:
     1. Salve a foto na pasta "imagens" com nome em letra minúscula,
        sem acento e sem espaço (use - no lugar do espaço).
        Ex.: volume-glamour-2.jpeg
     2. Copie uma linha abaixo, cole e troque o arquivo e o serviço.
   PARA TIRAR UMA FOTO DO SITE: apague a linha dela.
   ============================================================ */
const GALERIA = [
  { arquivo: 'efeito-rimel.jpeg',             servico: 'Efeito Rímel' },
  { arquivo: 'volume-brasileiro.jpeg',        servico: 'Volume Brasileiro' },
  { arquivo: 'volume-brasileiro-marrom.jpeg', servico: 'Volume Brasileiro Marrom' },
  { arquivo: 'volume-glamour.jpeg',           servico: 'Volume Glamour' },
  { arquivo: 'volume-egipcio-marrom.jpeg',    servico: 'Volume Egípcio Marrom' },
  { arquivo: 'fox-eyes.jpeg',                 servico: 'Fox Eyes' },
  { arquivo: 'mega-brasileiro.jpeg',          servico: 'Mega Brasileiro' },
  { arquivo: 'mega-egipcio-3.jpeg',           servico: 'Mega Egípcio' },
  { arquivo: 'design-personalizado.jpeg',     servico: 'Design Personalizado' },
  { arquivo: 'design-com-henna-1.jpeg',       servico: 'Design com Henna' },
  { arquivo: 'design-com-henna-2.jpeg',       servico: 'Design com Henna' },
  { arquivo: 'brow-lamination.jpeg',          servico: 'Brow Lamination' }
];

/* Nomes bonitos das categorias, usados nos filtros e nas etiquetas */
const CATEGORIAS = {
  todos:         'Todos os serviços',
  natural:       'Cílios · Natural',
  intermediario: 'Cílios · Intermediário',
  sobrancelhas:  'Sobrancelhas'
};

/* ============================================================
   Daqui para baixo é o funcionamento do site.
   Você não precisa mexer. 🙂
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------
     Utilitários
     ------------------------------------------------------------ */
  const formatarPreco = valor =>
    valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const linkWhatsApp = mensagem =>
    'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(mensagem);

  const iconeZap = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5a1.8 1.8 0 00.2-.4.4.4 0 000-.4c0-.1-.5-1.3-.7-1.8s-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1 4.9 4.9 0 001 2.6 11.2 11.2 0 004.3 3.8 14 14 0 001.4.5 3.4 3.4 0 001.6.1 2.6 2.6 0 001.7-1.2 2.1 2.1 0 00.1-1.2c0-.1-.2-.2-.4-.3z"/></svg>`;

  /* ------------------------------------------------------------
     1. Ano do rodapé
     ------------------------------------------------------------ */
  const ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------
     2. Cabeçalho: fundo ao rolar + menu mobile
     ------------------------------------------------------------ */
  const cabecalho  = document.getElementById('cabecalho');
  const menu       = document.getElementById('menu');
  const hamburguer = document.getElementById('hamburguer');
  const menuFundo  = document.getElementById('menu-fundo');
  const voltarTopo = document.getElementById('voltar-topo');

  function abrirMenu(abrir) {
    menu.classList.toggle('aberto', abrir);
    hamburguer.setAttribute('aria-expanded', String(abrir));
    hamburguer.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
    menuFundo.hidden = !abrir;
    document.body.style.overflow = abrir ? 'hidden' : '';
  }

  hamburguer.addEventListener('click', () =>
    abrirMenu(hamburguer.getAttribute('aria-expanded') !== 'true'));

  menuFundo.addEventListener('click', () => abrirMenu(false));

  menu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => abrirMenu(false)));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('aberto')) {
      abrirMenu(false);
      hamburguer.focus();
    }
  });

  /* Fecha o painel se a tela crescer (girar o celular, por exemplo) */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860 && menu.classList.contains('aberto')) abrirMenu(false);
  });

  function aoRolar() {
    const y = window.scrollY;
    cabecalho.classList.toggle('cabecalho--rolado', y > 40);
    voltarTopo.classList.toggle('visivel', y > 600);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  voltarTopo.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ------------------------------------------------------------
     3. Link do menu que acende conforme a seção visível
     ------------------------------------------------------------ */
  const secoes = Array.from(document.querySelectorAll('main section[id]'));
  const linksMenu = Array.from(document.querySelectorAll('.menu__link'));

  if ('IntersectionObserver' in window && secoes.length) {
    const observadorSecao = new IntersectionObserver(entradas => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        const id = entrada.target.id;
        linksMenu.forEach(link =>
          link.classList.toggle('ativo', link.getAttribute('href') === '#' + id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    secoes.forEach(secao => observadorSecao.observe(secao));
  }

  /* ------------------------------------------------------------
     4. Animação de entrada das seções
     ------------------------------------------------------------ */
  const paraAnimar = document.querySelectorAll('[data-animar]');

  if ('IntersectionObserver' in window) {
    const observadorAnimacao = new IntersectionObserver((entradas, obs) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visivel');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    paraAnimar.forEach(el => observadorAnimacao.observe(el));
  } else {
    paraAnimar.forEach(el => el.classList.add('visivel'));
  }

  /* ------------------------------------------------------------
     5. Cards de serviços + filtros por categoria
     ------------------------------------------------------------ */
  const grade   = document.getElementById('servicos-grade');
  const filtros = document.getElementById('filtros');

  /* Junta cada foto da lista GALERIA com os dados do serviço correspondente
     (descrição, preço, categoria e manutenção vêm de SERVICOS — nada é repetido).
     Uma foto apontando para um serviço que não existe é ignorada com aviso,
     em vez de derrubar a página inteira. */
  const posicoesGaleria = GALERIA.map(foto => {
    const servico = SERVICOS.find(s => s.nome === foto.servico);
    if (!servico) {
      console.warn(`Galeria: o serviço "${foto.servico}" não existe em SERVICOS. `
                 + `Confira a escrita na lista GALERIA (foto ${foto.arquivo}).`);
      return null;
    }
    return {
      src: 'imagens/' + foto.arquivo,
      alt: `${servico.nome}${foto.legenda ? ', ' + foto.legenda.toLowerCase() : ''}`
         + ` — trabalho feito pela Karinny, Lash Designer em Campo Grande`,
      legenda: foto.legenda || '',   /* ex.: "Tamanho pequeno" — opcional */
      servico: servico,
      carregada: false
    };
  }).filter(Boolean);

  /* Só as fotos que realmente carregaram — é o que a foto ampliada usa */
  const fotosDisponiveis = () => posicoesGaleria.filter(f => f.carregada);

  /* A foto de capa de um serviço é a primeira da lista que aponta para ele.
     Se houver mais de uma (como o Design com Henna), as outras continuam
     acessíveis pelas setas ao ampliar. */
  const fotoDoServico = servico => posicoesGaleria.find(f => f.servico === servico);
  const fotosDoServico = servico => posicoesGaleria.filter(f => f.servico === servico);

  /* Carrega uma foto e, se falhar, tenta mais uma vez antes de desistir:
     numa internet instável a primeira tentativa pode ser cortada no meio, e sem
     isso o espaço "Foto em breve" ficaria para sempre numa foto que existe. */
  function carregarFoto(img, registro, aoCarregar, aoFalhar) {
    let tentativas = 0;
    img.addEventListener('load', () => {
      registro.carregada = true;
      aoCarregar();
    });
    img.addEventListener('error', () => {
      if (tentativas++ === 0) {
        setTimeout(() => { img.src = registro.src + '?r=' + Date.now(); }, 1200);
        return;
      }
      aoFalhar();   /* foto realmente não está na pasta */
    });
  }

  /* ---------- Barrinha de comparação (ex.: Mega Egípcio grande × pequeno) ----------
     A foto A fica inteira ao fundo e a foto B por cima, recortada pela
     variável --pos. Arrastar só muda essa variável, então o movimento é leve.
     O recorte é feito com clip-path — nunca com "hidden" — para o
     carregamento preguiçoso das duas imagens continuar funcionando. */
  const iconeSetas = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6"/></svg>`;

  function blocoComparacao(servico, a, b) {
    return `
      <div class="comparar comparar--vazio" style="--pos:50%">
        <img class="comparar__img" src="${a.src}" alt="${a.alt}" loading="lazy" draggable="false">
        <img class="comparar__img comparar__img--b" src="${b.src}" alt="${b.alt}" loading="lazy" draggable="false">
        <span class="comparar__rotulo comparar__rotulo--a">${a.legenda || 'Opção 1'}</span>
        <span class="comparar__rotulo comparar__rotulo--b">${b.legenda || 'Opção 2'}</span>
        <div class="comparar__linha" aria-hidden="true"></div>
        <span class="comparar__alca" role="slider" tabindex="0"
              aria-label="Arraste para comparar os tamanhos do ${servico.nome}"
              aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"
              aria-valuetext="50% ${a.legenda || 'opção 1'}">${iconeSetas}</span>
        <span class="comparar__dica" aria-hidden="true">↔ Arraste para comparar</span>
        <button type="button" class="comparar__ampliar" aria-label="Ver as fotos do ${servico.nome} ampliadas">⤢</button>
        <div class="galeria__vazio">
          <span>✦</span>
          <p>Carregando fotos…</p>
        </div>
      </div>`;
  }

  function ativarComparacao(caixa, a, b) {
    const alca  = caixa.querySelector('.comparar__alca');
    const dica  = caixa.querySelector('.comparar__dica');
    const vazio = caixa.querySelector('.galeria__vazio');
    const [imgA, imgB] = caixa.querySelectorAll('.comparar__img');
    let arrastando = false;

    /* As duas fotos precisam estar prontas para tirar o "Carregando" */
    let prontas = 0;
    const umaPronta = () => {
      if (++prontas < 2) return;
      vazio.hidden = true;
      caixa.classList.remove('comparar--vazio');
    };
    carregarFoto(imgA, a, umaPronta, () => {});
    carregarFoto(imgB, b, umaPronta, () => {});

    function posicionar(pct) {
      pct = Math.min(97, Math.max(3, pct));   /* a alça nunca some da borda */
      caixa.style.setProperty('--pos', pct + '%');
      const valor = Math.round(pct);
      alca.setAttribute('aria-valuenow', valor);
      alca.setAttribute('aria-valuetext',
        `${valor}% ${valor >= 50 ? (a.legenda || 'opção 1') : (b.legenda || 'opção 2')}`);
      /* cada etiqueta some quando o lado dela fica estreito demais */
      caixa.classList.toggle('comparar--so-b', pct < 22);
      caixa.classList.toggle('comparar--so-a', pct > 78);
    }

    function primeiraInteracao() { dica.classList.add('comparar__dica--oculta'); }

    function pelaPosicaoDoDedo(e) {
      const r = caixa.getBoundingClientRect();
      posicionar(((e.clientX - r.left) / r.width) * 100);
    }

    caixa.addEventListener('pointerdown', e => {
      if (e.target.closest('.comparar__ampliar')) return;   /* o botão de ampliar é outra coisa */
      arrastando = true;
      caixa.setPointerCapture(e.pointerId);
      caixa.classList.add('comparar--arrastando');
      primeiraInteracao();
      pelaPosicaoDoDedo(e);
    });
    caixa.addEventListener('pointermove', e => { if (arrastando) pelaPosicaoDoDedo(e); });
    const soltar = e => {
      if (!arrastando) return;
      arrastando = false;
      caixa.classList.remove('comparar--arrastando');
      if (caixa.hasPointerCapture(e.pointerId)) caixa.releasePointerCapture(e.pointerId);
    };
    caixa.addEventListener('pointerup', soltar);
    caixa.addEventListener('pointercancel', soltar);

    /* Teclado: setas andam de 5 em 5, Home/End vão às pontas */
    alca.addEventListener('keydown', e => {
      const atual = parseFloat(caixa.style.getPropertyValue('--pos')) || 50;
      const passos = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 };
      if (e.key in passos) posicionar(atual + passos[e.key]);
      else if (e.key === 'Home') posicionar(0);
      else if (e.key === 'End') posicionar(100);
      else return;
      e.preventDefault();
      primeiraInteracao();
    });

    caixa.querySelector('.comparar__ampliar').addEventListener('click', () => abrirLightbox(a.src));
  }

  const nomeCategoria = cat =>
    cat === 'sobrancelhas' ? 'Sobrancelhas' : cat === 'natural' ? 'Natural' : 'Intermediário';

  function blocoManutencao(servico) {
    const m = servico.manutencao;
    if (!m) return '';

    let conteudo;
    if (Array.isArray(m)) {
      conteudo = '<ul class="servico__manutencao-lista">' + m.map(item =>
        `<li><span>${item.dias} dias</span><strong>R$ ${formatarPreco(item.valor)}</strong></li>`
      ).join('') + '</ul>';
    } else {
      conteudo = `<p class="servico__manutencao-nota">${m.nota}</p>`;
    }

    return `<div class="servico__manutencao">
              <span class="servico__manutencao-titulo">Manutenção</span>
              ${conteudo}
            </div>`;
  }

  function criarCard(servico) {
    const artigo = document.createElement('article');
    artigo.className = 'servico';
    artigo.dataset.categoria = servico.categoria;

    const mensagem =
      `Oi Karinny! Vim pelo site.\n\n` +
      `Gostaria de agendar: *${servico.nome}* — R$ ${formatarPreco(servico.preco)}\n\n` +
      `Quais horários você tem disponíveis?`;

    /* Foto do trabalho, no topo do card. O espaço decorado fica POR CIMA da
       imagem e sai quando ela carrega. (Não dá para esconder a imagem com
       "hidden": o carregamento preguiçoso nunca dispara em imagem escondida,
       e a foto jamais apareceria.) */
    const fotos = fotosDoServico(servico);
    const comparacao = servico.comparar && fotos.length >= 2;
    const foto = fotos[0];

    let blocoFoto = '';
    if (comparacao) {
      blocoFoto = blocoComparacao(servico, fotos[0], fotos[1]);
    } else if (foto) {
      blocoFoto = `
      <div class="servico__foto">
        <img src="${foto.src}" alt="${foto.alt}" loading="lazy">
        <div class="galeria__vazio">
          <span>✦</span>
          <p>Foto em breve</p>
          <small>${foto.src}</small>
        </div>
        <span class="galeria__lupa" aria-hidden="true">⤢</span>
      </div>`;
    }

    artigo.innerHTML = `
      ${blocoFoto}
      <div class="servico__conteudo">
        <div class="servico__topo">
          <h3 class="servico__nome">${servico.nome}</h3>
          <span class="servico__etiqueta servico__etiqueta--${servico.categoria}">${nomeCategoria(servico.categoria)}</span>
        </div>
        <p class="servico__descricao">${servico.descricao}</p>
        <p class="servico__preco">
          <span class="servico__preco-moeda">R$</span>
          <span class="servico__preco-valor">${formatarPreco(servico.preco)}</span>
        </p>
        ${blocoManutencao(servico)}
        <a class="servico__botao" href="${linkWhatsApp(mensagem)}" target="_blank" rel="noopener">
          ${iconeZap} Agendar este serviço
        </a>
      </div>`;

    if (comparacao) {
      ativarComparacao(artigo.querySelector('.comparar'), fotos[0], fotos[1]);
    } else if (foto) {
      /* Clicar na foto abre ela ampliada, com a descrição completa do procedimento */
      const areaFoto = artigo.querySelector('.servico__foto');
      const img = areaFoto.querySelector('img');
      const vazio = areaFoto.querySelector('.galeria__vazio');
      areaFoto.classList.add('servico__foto--vazia');

      carregarFoto(img, foto, () => {
        vazio.hidden = true;
        areaFoto.classList.remove('servico__foto--vazia');
        areaFoto.tabIndex = 0;
        areaFoto.setAttribute('role', 'button');
        areaFoto.setAttribute('aria-label', `Ver a foto do ${servico.nome} ampliada`);
      }, () => img.remove());

      areaFoto.addEventListener('click', () => abrirLightbox(foto.src));
      areaFoto.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirLightbox(foto.src); }
      });
    }

    return artigo;
  }

  if (grade) {
    SERVICOS.forEach((servico, i) => {
      const card = criarCard(servico);
      card.style.animationDelay = (i % 6) * 0.06 + 's';
      grade.appendChild(card);
    });
  }

  /* Cria os botões de filtro só para as categorias que realmente existem */
  if (filtros) {
    const categoriasUsadas = ['todos'].concat(
      Object.keys(CATEGORIAS).filter(chave =>
        chave !== 'todos' && SERVICOS.some(s => s.categoria === chave))
    );

    categoriasUsadas.forEach((chave, i) => {
      const botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'filtro' + (i === 0 ? ' ativo' : '');
      botao.dataset.filtro = chave;
      botao.textContent = CATEGORIAS[chave];
      botao.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      filtros.appendChild(botao);
    });

    filtros.addEventListener('click', e => {
      const botao = e.target.closest('.filtro');
      if (!botao) return;

      filtros.querySelectorAll('.filtro').forEach(b => {
        const ativo = b === botao;
        b.classList.toggle('ativo', ativo);
        b.setAttribute('aria-pressed', String(ativo));
      });

      const escolhida = botao.dataset.filtro;
      let visiveis = 0;

      grade.querySelectorAll('.servico').forEach(card => {
        const mostrar = escolhida === 'todos' || card.dataset.categoria === escolhida;
        card.classList.toggle('oculto', !mostrar);
        if (mostrar) {
          /* reinicia a animação de entrada do card */
          card.style.animation = 'none';
          void card.offsetWidth;
          card.style.animation = '';
          card.style.animationDelay = (visiveis % 6) * 0.05 + 's';
          visiveis++;
        }
      });
    });
  }

  /* ------------------------------------------------------------
     6. Fotos extras + foto ampliada (lightbox)
     ------------------------------------------------------------ */

  /* Um serviço pode ter mais de uma foto (o Design com Henna tem duas).
     Só a primeira vira capa de card; as outras são carregadas aqui para
     ficarem disponíveis nas setas da foto ampliada. */
  posicoesGaleria.forEach(registro => {
    if (registro === fotoDoServico(registro.servico)) return;  /* já é capa de um card */
    const img = new Image();
    img.addEventListener('load', () => { registro.carregada = true; });
    img.src = registro.src;
  });

  const lightbox     = document.getElementById('lightbox');
  const lbConteudo   = document.getElementById('lightbox-conteudo');
  const lbFechar     = document.getElementById('lightbox-fechar');
  const lbAnterior   = document.getElementById('lightbox-anterior');
  const lbProximo    = document.getElementById('lightbox-proximo');
  let indiceAtual    = 0;
  let elementoAnterior = null;

  function mostrarFoto(indice) {
    const fotos = fotosDisponiveis();
    if (!fotos.length) return;
    indiceAtual = (indice + fotos.length) % fotos.length;
    const foto = fotos[indiceAtual];
    const servico = foto.servico;

    /* Mesma mensagem dos cards de serviço, para a cliente já chegar
       no WhatsApp dizendo exatamente o que viu na foto */
    const mensagem =
      `Oi Karinny! Vim pelo site.\n\n` +
      `Vi a foto do *${servico.nome}* no seu portfólio e gostaria de agendar ` +
      `— R$ ${formatarPreco(servico.preco)}\n\n` +
      `Quais horários você tem disponíveis?`;

    lbConteudo.innerHTML = `
      <img src="${foto.src}" alt="${foto.alt}">
      <figcaption class="lightbox__descricao">
        <span class="lightbox__contador">Foto ${indiceAtual + 1} de ${fotos.length}</span>
        <h3 class="lightbox__nome">${servico.nome}</h3>
        ${foto.legenda ? `<span class="lightbox__legenda-foto">${foto.legenda}</span>` : ''}
        <span class="servico__etiqueta servico__etiqueta--${servico.categoria}">${nomeCategoria(servico.categoria)}</span>
        <p class="lightbox__texto">${servico.descricao}</p>
        <p class="lightbox__preco">R$ ${formatarPreco(servico.preco)}</p>
        ${blocoManutencao(servico)}
        <a class="servico__botao" href="${linkWhatsApp(mensagem)}" target="_blank" rel="noopener">
          ${iconeZap} Agendar este procedimento
        </a>
      </figcaption>`;

    const temVarias = fotos.length > 1;
    lbAnterior.hidden = !temVarias;
    lbProximo.hidden  = !temVarias;
  }

  function abrirLightbox(src) {
    const indice = fotosDisponiveis().findIndex(f => f.src === src);
    if (indice === -1) return;      /* foto ainda não existe: não abre nada */

    elementoAnterior = document.activeElement;
    mostrarFoto(indice);
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbFechar.focus();
  }

  function fecharLightbox() {
    lightbox.hidden = true;
    lbConteudo.innerHTML = '';
    document.body.style.overflow = '';
    if (elementoAnterior) elementoAnterior.focus();
  }

  if (lightbox) {
    lbFechar.addEventListener('click', fecharLightbox);
    lbAnterior.addEventListener('click', () => mostrarFoto(indiceAtual - 1));
    lbProximo.addEventListener('click', () => mostrarFoto(indiceAtual + 1));

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) fecharLightbox();
    });

    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape')     fecharLightbox();
      if (e.key === 'ArrowLeft')  mostrarFoto(indiceAtual - 1);
      if (e.key === 'ArrowRight') mostrarFoto(indiceAtual + 1);
    });

    /* Arrastar o dedo no celular para trocar de foto */
    let toqueX = null;
    lightbox.addEventListener('touchstart', e => { toqueX = e.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', e => {
      if (toqueX === null) return;
      const distancia = e.changedTouches[0].clientX - toqueX;
      if (Math.abs(distancia) > 50) mostrarFoto(indiceAtual + (distancia < 0 ? 1 : -1));
      toqueX = null;
    }, { passive: true });
  }

  /* ------------------------------------------------------------
     7. Acordeão das dúvidas
     ------------------------------------------------------------ */
  const faq = document.getElementById('faq');

  if (faq) {
    faq.addEventListener('click', e => {
      const pergunta = e.target.closest('.faq__pergunta');
      if (!pergunta) return;

      const item = pergunta.closest('.faq__item');
      const abrindo = !item.classList.contains('aberto');

      /* fecha os outros para a leitura ficar limpa */
      faq.querySelectorAll('.faq__item').forEach(outro => {
        outro.classList.remove('aberto');
        outro.querySelector('.faq__pergunta').setAttribute('aria-expanded', 'false');
      });

      item.classList.toggle('aberto', abrindo);
      pergunta.setAttribute('aria-expanded', String(abrindo));
    });
  }

  /* ------------------------------------------------------------
     8. Formulário de agendamento com prévia ao vivo
     ------------------------------------------------------------ */
  const formulario   = document.getElementById('formulario');
  const selectServico= document.getElementById('campo-servico');
  const previaTexto  = document.getElementById('previa-texto');
  const previaHora   = document.getElementById('previa-hora');

  /* Preenche o seletor de serviços agrupado por categoria */
  if (selectServico) {
    Object.keys(CATEGORIAS).filter(c => c !== 'todos').forEach(chave => {
      const doGrupo = SERVICOS.filter(s => s.categoria === chave);
      if (!doGrupo.length) return;

      const grupo = document.createElement('optgroup');
      grupo.label = CATEGORIAS[chave];

      doGrupo.forEach(servico => {
        const opcao = document.createElement('option');
        opcao.value = servico.nome;
        opcao.textContent = `${servico.nome} — R$ ${formatarPreco(servico.preco)}`;
        opcao.dataset.preco = servico.preco;
        grupo.appendChild(opcao);
      });

      selectServico.appendChild(grupo);
    });

    /* Opção final para quem ainda está em dúvida */
    const outra = document.createElement('option');
    outra.value = 'Ainda não sei, quero uma indicação';
    outra.textContent = 'Ainda não sei — quero sua indicação';
    selectServico.appendChild(outra);
  }

  function montarMensagem() {
    const nome     = document.getElementById('campo-nome').value.trim();
    const servico  = selectServico.value;
    const data     = document.getElementById('campo-data').value;
    const periodo  = document.getElementById('campo-periodo').value;
    const obs      = document.getElementById('campo-obs').value.trim();

    /* Monta a mensagem por blocos e descarta os vazios,
       assim nunca sobra linha em branco solta na prévia */
    const linhas = [];

    if (nome) linhas.push(`Meu nome é ${nome}.`);

    if (servico) {
      const escolhido = SERVICOS.find(s => s.nome === servico);
      linhas.push(escolhido
        ? `Gostaria de agendar: *${escolhido.nome}* — R$ ${formatarPreco(escolhido.preco)}`
        : 'Ainda não sei qual serviço escolher, queria sua indicação.');
    }

    if (data) {
      const [a, m, d] = data.split('-');
      linhas.push(`Dia de preferência: ${d}/${m}/${a}` +
                  (periodo ? ` (${periodo.toLowerCase()})` : ''));
    } else if (periodo) {
      linhas.push(`Prefiro no período da ${periodo.toLowerCase()}.`);
    }

    const blocos = ['Oi Karinny! Vim pelo site.'];
    if (linhas.length) blocos.push(linhas.join('\n'));
    if (obs) blocos.push(`Observação: ${obs}`);
    blocos.push('Quais horários você tem disponíveis?');

    return blocos.join('\n\n');
  }

  function atualizarPrevia() {
    if (!previaTexto) return;
    previaTexto.textContent = montarMensagem();
    previaHora.textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  }

  function marcarErro(idCampo, idErro, mensagem) {
    const campo = document.getElementById(idCampo);
    const erro  = document.getElementById(idErro);
    campo.closest('.campo').classList.toggle('invalido', Boolean(mensagem));
    erro.textContent = mensagem || '';
    return !mensagem;
  }

  if (formulario) {
    formulario.addEventListener('input', atualizarPrevia);
    formulario.addEventListener('change', atualizarPrevia);
    atualizarPrevia();

    /* Não deixa escolher uma data que já passou */
    const campoData = document.getElementById('campo-data');
    const hoje = new Date();
    campoData.min = [
      hoje.getFullYear(),
      String(hoje.getMonth() + 1).padStart(2, '0'),
      String(hoje.getDate()).padStart(2, '0')
    ].join('-');

    formulario.addEventListener('submit', e => {
      e.preventDefault();

      const nome = document.getElementById('campo-nome').value.trim();
      const okNome = marcarErro('campo-nome', 'erro-nome',
        nome.length < 2 ? 'Por favor, me diga como posso te chamar.' : '');
      const okServico = marcarErro('campo-servico', 'erro-servico',
        !selectServico.value ? 'Escolha um serviço para eu já saber o que preparar.' : '');

      if (!okNome)    { document.getElementById('campo-nome').focus(); return; }
      if (!okServico) { selectServico.focus(); return; }

      window.open(linkWhatsApp(montarMensagem()), '_blank', 'noopener');
    });
  }

});
