import type { SocialPostPageData } from "@/components/social-media/post-page-template"

export const apple2030LanguagePost: SocialPostPageData = {
  title: "Apple 2030 virou linguagem de produto",
  description:
    "Como a Apple transformou meta ambiental em decisão visível de material, processo e produto.",
  approvedTopic:
    "Apple 2030 virou linguagem de produto — MacBook Neo, materiais reciclados e embalagem como design industrial.",
  copy: {
    page1: {
      title: "Sustentabilidade que vira forma",
      subtitle:
        "Na Apple, meta ambiental deixou de ser relatório e virou decisão de produto.",
    },
    page2: {
      title: "O caso mais claro é o MacBook Neo",
      paragraph: "60% reciclado. E isso aparece.",
    },
    page3: {
      statement: "Design também é cadeia produtiva.",
    },
    page4: {
      highlight: "O gesto não foi cosmético",
      bullets: [
        "30% reciclado",
        "cobalto reciclado",
        "embalagem sem plástico",
        "anodização circular",
      ],
    },
    page5: {
      closing: "Quando engenharia e forma se alinham, ESG deixa de ser verniz.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://www.apple.com/newsroom/images/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/article/Apple-Earth-Day-2026-hero_big.jpg.large.jpg",
      alt: "Imagem principal da Apple sobre avanço em materiais reciclados nos produtos de 2026",
      label: "Apple Earth Day 2026 hero",
      referenceUrl:
        "https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/",
    },
    {
      page: 2,
      src: "https://www.apple.com/newsroom/images/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/article/Apple-Earth-Day-2026-circuit-board-with-recycled-gold-plating-and-tin-soldering_inline.jpg.large.jpg",
      alt: "Close técnico de placa com ouro e estanho reciclados em componente Apple",
      label: "Recycled circuit board",
      referenceUrl:
        "https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/",
    },
    {
      page: 5,
      src: "https://www.apple.com/newsroom/images/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/article/Apple-Earth-Day-2026-student-using-Macbook-Neo_inline.jpg.large.jpg",
      alt: "Pessoa usando MacBook Neo em contexto educacional",
      label: "MacBook Neo in use",
      referenceUrl:
        "https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Abertura com headline forte e imagem institucional da Apple aplicada como prova visual.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "A placa reciclada dá materialidade técnica ao argumento do post.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "Frase curta para sustentar a tese de design como infraestrutura industrial.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Quatro sinais concretos do sistema produtivo traduzidos em leitura editorial.",
    },
    {
      page: "05",
      title: "Closing",
      body: "Fecha com o MacBook Neo em uso para conectar cadeia produtiva e experiência.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes são oficiais da Apple Newsroom.",
  ],
  imageSources: [
    "Page 1 — Apple Earth Day 2026 hero image.",
    "Page 2 — close técnico de circuito com materiais reciclados.",
    "Page 5 — MacBook Neo em contexto de uso real.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "A adaptação 4:5 mantém as imagens nas páginas 1, 2 e 5, e preserva a leitura técnica do argumento sem aumentar densidade textual.",
}

export const metaWearablePost: SocialPostPageData = {
  title: "Meta está redesenhando o wearable para uso real",
  description:
    "O projeto Ray-Ban Meta Optics desloca o foco de demo tecnológica para conforto, prescrição e rotina.",
  approvedTopic:
    "Meta está redesenhando o wearable para uso real — os novos Ray-Ban Meta Optics tratam conforto como feature de produto.",
  copy: {
    page1: {
      title: "O wearable ficou mais cotidiano",
      subtitle:
        "A Meta saiu do gadget chamativo e aproximou o produto da lógica da óptica.",
    },
    page2: {
      title: "Blayzer e Scriber mostram a virada",
      paragraph: "Menos demo. Mais uso diário.",
    },
    page3: {
      statement: "Conforto também projeta confiança.",
    },
    page4: {
      highlight: "O design resolveu fricções reais",
      bullets: [
        "armação mais leve",
        "nose pads trocáveis",
        "hastes ajustáveis",
        "quase toda prescrição",
      ],
    },
    page5: {
      closing: "Quando o hardware some no rosto, a tecnologia finalmente entra na rotina.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://about.fb.com/de/wp-content/uploads/sites/10/2026/03/Ray-Ban-Meta-Blayzer-Optics.png?resize=960%2C541&w=960",
      alt: "Modelo Blayzer Optics da linha Ray-Ban Meta",
      label: "Blayzer Optics",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 2,
      src: "https://about.fb.com/de/wp-content/uploads/sites/10/2026/03/Ray-Ban-Meta-Scriber-Optics.png?resize=960%2C539&w=960",
      alt: "Modelo Scriber Optics da linha Ray-Ban Meta",
      label: "Scriber Optics",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 5,
      src: "https://about.fb.com/de/wp-content/uploads/sites/10/2026/03/Ray-Ban-Meta-Optics-Charging-Case.png?resize=960%2C538&w=960",
      alt: "Estojo de carregamento da linha Ray-Ban Meta Optics",
      label: "Charging case",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A abertura usa a nova família Blayzer como sinal visual da mudança de linguagem do produto.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "Scriber reforça a ideia de variedade sem abandonar a premissa de uso contínuo.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "Frase curta para deslocar a discussão de gadget para confiança de uso.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "As bullets traduzem melhoria ergonômica, ajuste físico e amplitude de prescrição.",
    },
    {
      page: "05",
      title: "Closing",
      body: "Fecha com o estojo para sublinhar portabilidade e integração no cotidiano.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes vêm da comunicação oficial da Meta.",
  ],
  imageSources: [
    "Page 1 — modelo Ray-Ban Meta Blayzer Optics.",
    "Page 2 — modelo Ray-Ban Meta Scriber Optics.",
    "Page 5 — estojo da linha Meta Optics.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "No 4:5, a narrativa continua centrada em objeto e ergonomia: capa com produto, apoio com segunda armação e fechamento com estojo.",
}

export const figmaWeavePost: SocialPostPageData = {
  title: "Figma Weave troca prompt solto por sistema visual",
  description:
    "A leitura editorial do Weave está menos na geração pontual e mais no workflow criativo estruturado.",
  approvedTopic:
    "Figma Weave troca prompt solto por sistema visual — workflow criativo com IA, referência e escala.",
  copy: {
    page1: {
      title: "O prompt perdeu o protagonismo",
      subtitle:
        "No Figma Weave, o valor está menos na frase e mais no workflow.",
    },
    page2: {
      title: "A mudança é simples de entender",
      paragraph: "Prompt gera. Sistema sustenta.",
    },
    page3: {
      statement: "IA boa é IA dirigida.",
    },
    page4: {
      highlight: "O produto empilha controle",
      bullets: [
        "referências visuais",
        "nós conectados",
        "variações escaláveis",
        "saída multiformato",
      ],
    },
    page5: {
      closing:
        "O futuro da criação com IA parece menos chat e mais canvas operacional.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/aa01d597cc9556f8243eab17691187f7dfee01f7-1631x918.png?auto=format&fit=max&h=919&q=75&rect=1%2C0%2C1630%2C918&w=1632",
      alt: "Interface principal do Figma Weave com visual de workflow criativo",
      label: "Weave workflow",
      referenceUrl: "https://www.figma.com/blog/five-figma-weave-workflows/",
    },
    {
      page: 2,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/718518ac6ff4fcd999efece86972e835d05c9f90-1608x1206.png?auto=format&fit=max&h=603&q=75&w=804",
      alt: "Canvas do Weave com nós encadeados e múltiplas saídas",
      label: "Connected nodes",
      referenceUrl: "https://www.figma.com/blog/five-figma-weave-workflows/",
    },
    {
      page: 5,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/6be0eea6545f28299645195b71c9c1ef3ebe73a0-984x984.png?auto=format&fit=max&h=390&q=75&w=390",
      alt: "Saída visual de template do Figma Weave para workflow criativo",
      label: "Weave output",
      referenceUrl: "https://www.figma.com/blog/five-figma-weave-workflows/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Abertura com a interface do Weave para marcar o deslocamento de chat para sistema visual.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "A imagem de nós conectados sustenta a tese de orchestration e não de geração isolada.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "A frase concentra a leitura do produto como direção, filtro e estrutura.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Os blocos resumem os pilares de controle que sustentam o argumento do post.",
    },
    {
      page: "05",
      title: "Closing",
      body: "Fecha com um output do Weave para conectar sistema, formato e resultado.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes vêm do blog oficial da Figma.",
  ],
  imageSources: [
    "Page 1 — hero do workflow no Figma Weave.",
    "Page 2 — canvas com nós conectados e saídas encadeadas.",
    "Page 5 — exemplo visual de saída do Weave.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "A versão 4:5 preserva a leitura de sistema: hero de interface, apoio de fluxo e fechamento com output visual.",
}

export const liquidGlassMaterialPost: SocialPostPageData = {
  title: "Liquid Glass marcou a volta da interface como matéria",
  description:
    "Uma leitura do update de software da Apple como mudança de vocabulário visual e não apenas de UI polish.",
  approvedTopic:
    "Liquid Glass, da Apple, marcou a volta da interface como matéria — um update de software tratado como linguagem visual.",
  copy: {
    page1: {
      title: "Quando software voltou a ter matéria",
      subtitle:
        "O Liquid Glass recolocou textura, refração e profundidade no centro da UI.",
    },
    page2: {
      title: "O ponto não era decorar tela",
      paragraph: "Era dar hierarquia com luz.",
    },
    page3: {
      statement: "Interface também é material.",
    },
    page4: {
      highlight: "O update foi estrutural",
      bullets: [
        "lógica cross-platform",
        "controles translúcidos",
        "ícones em camadas",
        "mais foco no conteúdo",
      ],
    },
    page5: {
      closing:
        "Alguns updates mudam funções. Outros mudam o vocabulário visual inteiro.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-hero-250609_big.jpg.large.jpg",
      alt: "Hero oficial do anúncio da linguagem Liquid Glass da Apple",
      label: "Liquid Glass hero",
      referenceUrl: "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
    {
      page: 2,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Home-Screen-clear-look-250609_big.jpg.large.jpg",
      alt: "Home screen com o tratamento visual translúcido do Liquid Glass",
      label: "Home Screen clear look",
      referenceUrl: "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
    {
      page: 5,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Icon-Composer-250609_big.jpg.large.jpg",
      alt: "Composição de ícones e elementos de interface do Liquid Glass",
      label: "Icon Composer",
      referenceUrl: "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Abertura com o hero oficial para marcar o salto de linguagem do software.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "A home screen reforça a discussão de hierarquia, luz e legibilidade material.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "A frase centraliza a tese do post sem expandir a copy além do necessário.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Os quatro pontos resumem a mudança como sistema e não como efeito isolado.",
    },
    {
      page: "05",
      title: "Closing",
      body: "Fecha com a composição de ícones para cristalizar o novo vocabulário visual.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes são oficiais da Apple Newsroom.",
  ],
  imageSources: [
    "Page 1 — hero do anúncio oficial do Liquid Glass.",
    "Page 2 — home screen com tratamento translúcido.",
    "Page 5 — composição de ícones da nova linguagem visual.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "No 4:5, a hierarquia permanece visual: hero, detalhe de interface e fechamento com sistema de ícones.",
}

export const craftAiPost: SocialPostPageData = {
  title: "Na era da IA, craft não perdeu valor",
  description:
    "A pesquisa da Figma sugere que velocidade cresceu, mas o olhar crítico segue definindo padrão de qualidade.",
  approvedTopic:
    "Na era da IA, craft não perdeu valor — ele virou o filtro que separa velocidade de qualidade.",
  copy: {
    page1: {
      title: "Velocidade não substitui craft",
      subtitle:
        "O novo diferencial não é gerar mais. É saber o que merece ficar.",
    },
    page2: {
      title: "O dado da Figma é direto",
      paragraph: "IA acelera. Craft decide.",
    },
    page3: {
      statement: "Qualidade virou filtro.",
    },
    page4: {
      highlight: "O relatório aponta a direção",
      bullets: [
        "91% melhor design",
        "89% mais rápido",
        "80% colaboração",
        "58% visual polish",
      ],
    },
    page5: {
      closing: "Se a IA amplia produção, o olhar continua definindo padrão.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/8933b0df528b5ce8a07d94f60b731618c13646a7-3204x1800.png?auto=format&fit=max&h=917&q=75&rect=1%2C0%2C3203%2C1800&w=1632",
      alt: "Hero da pesquisa State of the Designer 2026",
      label: "State of the Designer 2026",
      referenceUrl: "https://www.figma.com/blog/state-of-the-designer-2026/",
    },
    {
      page: 2,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/e86018460b23d1b1e12e5c15eada3cb00dd15284-1785x1128.png?auto=format&fit=max&h=682&q=75&rect=0%2C1%2C1785%2C1127&w=1080",
      alt: "Gráfico da pesquisa mostrando impacto de IA no trabalho de design",
      label: "AI impact chart",
      referenceUrl: "https://www.figma.com/blog/state-of-the-designer-2026/",
    },
    {
      page: 5,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/ecd86c22ead47b581279cf3ada994abe2722022d-1785x981.png?auto=format&fit=max&h=594&q=75&rect=1%2C0%2C1784%2C981&w=1080",
      alt: "Visual do relatório com dados de craft e qualidade em design",
      label: "Craft and quality",
      referenceUrl: "https://www.figma.com/blog/state-of-the-designer-2026/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "O hero da pesquisa abre o post com lastro quantitativo e não com opinião solta.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "O gráfico sustenta a leitura de aceleração sem perder o papel de julgamento humano.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "A frase fixa a tese: velocidade aumenta, mas filtro crítico continua central.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Os dados condensam a pesquisa em uma leitura editorial curta e utilizável.",
    },
    {
      page: "05",
      title: "Closing",
      body: "Fecha retomando o papel do olhar como definidor do padrão final.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes vêm do blog oficial da Figma.",
  ],
  imageSources: [
    "Page 1 — hero do State of the Designer 2026.",
    "Page 2 — gráfico sobre impacto de IA no trabalho de design.",
    "Page 5 — visual complementar sobre craft e qualidade.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "A versão 4:5 mantém a ordem argumento-dado-síntese, sem aumentar texto e sem perder leitura editorial.",
}

export const macbookNeoCarbonLanguagePost: SocialPostPageData = {
  title: "MacBook Neo torna baixo carbono visível",
  description:
    "A leitura editorial do MacBook Neo não está só no discurso ambiental, mas na forma como material, embalagem e processo passam a aparecer no produto.",
  approvedTopic:
    "MacBook Neo torna baixo carbono visível — quando sustentabilidade sai do relatório e entra na linguagem do objeto.",
  copy: {
    page1: {
      title: "Baixo carbono que aparece",
      subtitle:
        "No MacBook Neo, sustentabilidade deixou de ser rodapé e virou forma legível.",
    },
    page2: {
      title: "O projeto não fala só de meta",
      paragraph: "Ele mostra processo em superfície.",
    },
    page3: {
      statement: "Material também comunica.",
    },
    page4: {
      highlight: "Os sinais estão no produto",
      bullets: [
        "60% reciclado",
        "fibra no pack",
        "cobalto total",
        "água em loop",
      ],
    },
    page5: {
      closing:
        "Quando a cadeia produtiva aparece no objeto, o argumento ganha forma própria.",
    },
  },
  images: [
    {
      page: 1,
      src: "/social-media/macbook-neo-hero.jpg",
      alt: "MacBook Neo em quatro cores na imagem principal do relatório ambiental da Apple",
      label: "MacBook Neo hero",
      referenceUrl:
        "https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/",
    },
    {
      page: 2,
      src: "/social-media/macbook-neo-circuit-board.jpg",
      alt: "Detalhe técnico de placa com ouro e estanho reciclados em componente Apple",
      label: "Circuit board detail",
      referenceUrl:
        "https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/",
    },
    {
      page: 5,
      src: "/social-media/macbook-neo-in-use.jpg",
      alt: "Pessoa usando MacBook Neo em sala de aula",
      label: "MacBook Neo in use",
      referenceUrl:
        "https://www.apple.com/newsroom/2026/04/apple-accelerates-progress-with-highest-ever-recycled-material-in-its-products/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A capa usa a família de cores do Neo para mostrar que o tema ambiental já virou linguagem industrial.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "A placa reciclada desloca o argumento do branding para a prova material de processo.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "Frase curta para resumir o ponto central: sustentabilidade também é vocabulário visual.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Os quatro bullets condensam matéria, embalagem, bateria e manufatura circular.",
    },
    {
      page: "05",
      title: "Closing",
      body: "Fecha com o Neo em uso para ligar infraestrutura produtiva e experiência cotidiana.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes vêm da Apple Newsroom.",
  ],
  imageSources: [
    "Page 1 — hero do relatório ambiental com a linha MacBook Neo.",
    "Page 2 — close de placa com materiais reciclados.",
    "Page 5 — MacBook Neo em contexto de uso real.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "A versão 4:5 mantém a leitura de produto e processo, preservando a capa com família cromática, o close técnico no apoio e o uso real no fechamento.",
}

export const metaOpticsConfidencePost: SocialPostPageData = {
  title: "Meta Optics trata conforto como interface",
  description:
    "Os novos Ray-Ban Meta Optics mostram que wearable maduro não grita tecnologia: ele reduz fricção física, óptica e social.",
  approvedTopic:
    "Meta Optics trata conforto como interface — quando o wearable começa a parecer menos demo e mais hábito.",
  copy: {
    page1: {
      title: "O wearable ficou mais discreto",
      subtitle:
        "A linha Optics troca o gesto de demo por uma lógica de uso diário e prescrição.",
    },
    page2: {
      title: "Blayzer e Scriber explicam a virada",
      paragraph: "Menos showcase. Mais aderência.",
    },
    page3: {
      statement: "Conforto projeta confiança.",
    },
    page4: {
      highlight: "O desenho reduz atrito real",
      bullets: [
        "armação leve",
        "pads trocáveis",
        "hastes ajustáveis",
        "prescrição ampla",
      ],
    },
    page5: {
      closing:
        "Quando o hardware se comporta como ótica, a tecnologia enfim entra na rotina.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://about.fb.com/de/wp-content/uploads/sites/10/2026/03/Ray-Ban-Meta-Blayzer-Optics.png?resize=960%2C541&w=960",
      alt: "Óculos Ray-Ban Meta Blayzer Optics em vista frontal",
      label: "Blayzer Optics",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 2,
      src: "https://about.fb.com/de/wp-content/uploads/sites/10/2026/03/Ray-Ban-Meta-Scriber-Optics.png?resize=960%2C539&w=960",
      alt: "Óculos Ray-Ban Meta Scriber Optics em vista frontal",
      label: "Scriber Optics",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 5,
      src: "https://about.fb.com/de/wp-content/uploads/sites/10/2026/03/Ray-Ban-Meta-Optics-Charging-Case.png?resize=960%2C538&w=960",
      alt: "Estojo de carregamento da linha Ray-Ban Meta Optics",
      label: "Charging case",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A capa usa a Blayzer para marcar a mudança do wearable chamativo para o objeto de rotina.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "A segunda armação sustenta a leitura de família óptica e não de peça única demonstrativa.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "A frase concentra a tese de que ergonomia e confiança são parte da experiência da interface.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "As bullets resumem ajuste físico, conforto prolongado e amplitude de prescrição.",
    },
    {
      page: "05",
      title: "Closing",
      body: "O estojo fecha a narrativa reforçando portabilidade e incorporação na rotina.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes vêm da comunicação oficial da Meta.",
  ],
  imageSources: [
    "Page 1 — modelo Blayzer Optics.",
    "Page 2 — modelo Scriber Optics.",
    "Page 5 — estojo da linha Meta Optics.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "No 4:5, o post preserva a leitura de objeto, variação e ecossistema com produto na capa, segunda armação no apoio e estojo no fechamento.",
}

export const metaOpticsUsoContinuoPost: SocialPostPageData = {
  title: "Meta Optics sai da demo e entra no uso contínuo",
  description:
    "A nova linha Ray-Ban Meta Optics trata ergonomia, prescrição e discrição como partes centrais do design do produto.",
  approvedTopic:
    "Meta Optics sai da demo e entra no uso contínuo — quando o wearable amadurece ao se comportar como óculos de verdade.",
  copy: {
    page1: {
      title: "Quando o wearable aprende a parecer óculos",
      subtitle:
        "A nova linha Meta Optics amadurece o produto ao tratar ajuste, prescrição e conforto como interface.",
    },
    page2: {
      title: "O salto não está no chip. Está no comportamento do objeto.",
      paragraph:
        "Blayzer e Scriber foram desenhados para caber na rotina de quem usa óculos o dia inteiro.",
    },
    page3: {
      intro: "Na prática, a Meta trocou o eixo da conversa:",
      statement: "menos demo, mais aderência",
      attribution: "O produto sai do showcase e entra no uso contínuo.",
    },
    page4: {
      highlight: "O desenho reduz atrito em quatro frentes",
      bullets: [
        "peso e balanço",
        "ajuste de rosto",
        "prescrição ampla",
        "manutenção simples",
      ],
    },
    page6: {
      title: "Isso muda o significado do hardware no rosto",
      paragraph:
        "Quando a armação aceita quase toda prescrição e mais ajuste físico, confiança deixa de ser detalhe.",
    },
    page7: {
      intro: "Em wearable, conforto não é acabamento.",
      statement: "é interface física",
      attribution: "Se o objeto incomoda, a inteligência perde espaço no uso real.",
    },
    page8Text: {
      title: "O mérito de design está na invisibilidade certa",
      paragraph:
        "Quanto menos o produto pede adaptação social e corporal, mais natural fica usar câmera, áudio e IA.",
    },
    page9Closing: {
      closing: "Tecnologia madura não parece protótipo. Parece hábito.",
    },
  },
  images: [
    {
      page: 1,
      src: "/social-media/meta-optics-blayzer.png",
      alt: "Óculos Ray-Ban Meta Blayzer Optics em vista frontal",
      label: "Blayzer Optics",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 2,
      src: "/social-media/meta-optics-scriber.png",
      alt: "Óculos Ray-Ban Meta Scriber Optics em vista frontal",
      label: "Scriber Optics",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 6,
      src: "/social-media/meta-optics-blayzer-detail.png",
      alt: "Detalhe da armação Ray-Ban Meta Blayzer Optics em fundo neutro",
      label: "Blayzer detail",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
    {
      page: 10,
      src: "/social-media/meta-optics-case.png",
      alt: "Estojo de carregamento da linha Ray-Ban Meta Optics",
      label: "Charging case",
      referenceUrl: "https://about.fb.com/news/2026/03/meta-ai-glasses-built-for-prescriptions/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A capa usa a Blayzer para marcar a virada do wearable chamativo para o objeto de rotina.",
    },
    {
      page: "02",
      title: "Context",
      body: "A segunda página contextualiza a mudança como comportamento do objeto, não como ficha técnica.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a leitura de demo tecnológica para aderência no uso diário.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Os quatro pontos resumem ajuste físico, ergonomia e suporte real a prescrição.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "A quinta página aprofunda a consequência de design: confiança de uso deixa de ser detalhe.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "A sexta página fixa a leitura central de que conforto é parte da interface física do wearable.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "A sétima página funciona como síntese textual sem imagem, ampliando a utilidade do argumento.",
    },
    {
      page: "08",
      title: "Closing",
      body: "O fechamento conecta maturidade tecnológica com naturalidade de hábito e rotina.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes vêm da comunicação oficial da Meta.",
  ],
  imageSources: [
    "Page 1 — modelo Ray-Ban Meta Blayzer Optics.",
    "Page 2 — modelo Ray-Ban Meta Scriber Optics.",
    "Page 5 — detalhe da armação Blayzer em linguagem consistente com o restante do post.",
    "Page 8 — estojo da linha Ray-Ban Meta Optics.",
  ],
  practicalDemoSubtitle: "Post de teste — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "A versão 4:5 preserva a lógica de capa, contexto, apoio intermediário, síntese e fechamento, mantendo produto na abertura, segunda armação no apoio, detalhe do objeto no meio e estojo no encerramento.",
}

export const figmaWeaveWorkflowPost: SocialPostPageData = {
  title: "Figma Weave troca prompt por workflow",
  description:
    "No Weave, o salto não está na imagem isolada, mas no modo como a IA passa a operar com direção, sequência e escala visual.",
  approvedTopic:
    "Figma Weave troca prompt por workflow — quando a criação com IA deixa de ser chute e vira sistema visual.",
  copy: {
    page1: {
      title: "O prompt perdeu o centro",
      subtitle:
        "No Weave, o valor está menos na frase inicial e mais na lógica que sustenta a saída.",
    },
    page2: {
      title: "A mudança é de estrutura",
      paragraph: "Menos gesto solto. Mais encadeamento.",
    },
    page3: {
      statement: "IA boa precisa direção.",
    },
    page4: {
      highlight: "O canvas organiza o controle",
      bullets: [
        "fluxo visual",
        "referência viva",
        "saída escalável",
        "edição em série",
      ],
    },
    page5: {
      closing:
        "Quando a IA ganha sequência e contexto, o resultado deixa de parecer acidente feliz.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/aa01d597cc9556f8243eab17691187f7dfee01f7-1631x918.png?auto=format&fit=max&h=919&q=75&rect=1%2C0%2C1630%2C918&w=1632",
      alt: "Interface do Figma Weave com workflow visual em canvas",
      label: "Weave workflow",
      referenceUrl: "https://www.figma.com/blog/five-figma-weave-workflows/",
    },
    {
      page: 2,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/718518ac6ff4fcd999efece86972e835d05c9f90-1608x1206.png?auto=format&fit=max&h=603&q=75&w=804",
      alt: "Canvas do Figma Weave com nós e saídas conectadas",
      label: "Connected nodes",
      referenceUrl: "https://www.figma.com/blog/five-figma-weave-workflows/",
    },
    {
      page: 5,
      src: "https://cdn.sanity.io/images/599r6htc/regionalized/6be0eea6545f28299645195b71c9c1ef3ebe73a0-984x984.png?auto=format&fit=max&h=390&q=75&w=390",
      alt: "Saída visual gerada no Figma Weave dentro de um fluxo criativo",
      label: "Weave output",
      referenceUrl: "https://www.figma.com/blog/five-figma-weave-workflows/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A interface do Weave abre o post como prova de que a unidade de criação passou a ser o fluxo.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "Os nós conectados sustentam visualmente a tese de encadeamento e direção.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "Frase curta para tirar a IA do território do acaso e trazer para o da direção criativa.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Os quatro blocos resumem os elementos que transformam geração em sistema operativo.",
    },
    {
      page: "05",
      title: "Closing",
      body: "O output final conecta método e resultado sem depender de promessa abstrata.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "Todas as fontes vêm do blog oficial da Figma.",
  ],
  imageSources: [
    "Page 1 — workflow principal do Figma Weave.",
    "Page 2 — canvas com nós e conexões entre etapas.",
    "Page 5 — output visual gerado dentro do workflow.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "Na adaptação 4:5, a lógica continua sistêmica: hero de workflow, apoio de conexões e fechamento com saída visual do processo.",
}

export const vignelliClarityPost: SocialPostPageData = {
  title: "Vignelli provou que clareza pode vencer geografia",
  description:
    "O mapa de 1972 segue relevante porque mostrou que, em sistemas complexos, leitura pode ser mais importante que fidelidade topográfica.",
  approvedTopic:
    "Vignelli provou que clareza pode vencer geografia — o mapa de 1972 ainda explica o valor de abstração bem dirigida.",
  copy: {
    page1: {
      title: "Clareza acima do território",
      subtitle:
        "Em 1972, Vignelli tratou o metrô como sistema legível, não como paisagem literal.",
    },
    page2: {
      title: "A ruptura foi deliberada",
      paragraph: "Menos topografia. Mais orientação.",
    },
    page3: {
      statement: "Abstrair também informa.",
    },
    page4: {
      highlight: "O mapa mudou a conversa",
      bullets: [
        "linhas retas",
        "geografia reduzida",
        "sistema unificado",
        "leitura rápida",
      ],
    },
    page5: {
      closing:
        "Quando o sistema é complexo, simplificar a leitura pode ser mais honesto que simular o real.",
    },
  },
  images: [
    {
      page: 1,
      src: "/social-media/vignelli-primeira.jpg",
      alt: "Mapa do metrô de Nova York associado ao legado de Vignelli",
      label: "Vignelli map cover",
      referenceUrl: "https://www.nytransitmuseum.org/vignelli/",
    },
    {
      page: 2,
      src: "/social-media/massimo-vignelli-process.jpg",
      alt: "Material de processo ligado ao trabalho de Massimo Vignelli",
      label: "Vignelli process",
      referenceUrl: "https://www.nytransitmuseum.org/vignelli/",
    },
    {
      page: 5,
      src: "/social-media/vignelli-segunda.jpg",
      alt: "Peça visual final ligada ao mapa do metrô de Nova York de 1972",
      label: "Vignelli map detail",
      referenceUrl: "https://www.nytransitmuseum.org/vignelli/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A capa ancora o post no ícone visual do mapa e introduz a tese de abstração útil.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "O material de processo sustenta a ideia de que a ruptura foi uma decisão de sistema, não de estilo.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "A frase resume o argumento histórico do post com a densidade curta que o deck pede.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "Os quatro bullets condensam os gestos formais que fizeram o mapa permanecer relevante.",
    },
    {
      page: "05",
      title: "Closing",
      body: "O fechamento usa detalhe do mapa para devolver o post ao objeto que sustenta toda a tese.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "As referências visuais estão hospedadas no próprio projeto.",
  ],
  imageSources: [
    "Page 1 — mapa e arte de abertura associados ao legado de Vignelli.",
    "Page 2 — imagem de processo ligada ao projeto e ao sistema visual.",
    "Page 5 — detalhe final do mapa do metrô de 1972.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "A versão 4:5 mantém a leitura histórica com capa forte, apoio processual e fechamento no próprio artefato cartográfico.",
}

export const editingOverGenerationPost: SocialPostPageData = {
  title: "Na era da IA, edição vale mais que geração",
  description:
    "Se gerar ficou barato, o diferencial volta a estar em critério, sistema, corte e coerência entre partes.",
  approvedTopic:
    "Na era da IA, edição vale mais que geração — quando velocidade cresce, autoria volta a morar em restrição e escolha.",
  copy: {
    page1: {
      title: "Gerar ficou fácil demais",
      subtitle:
        "Por isso, o que diferencia um trabalho agora não é volume. É critério.",
    },
    page2: {
      title: "A nova vantagem está no corte",
      paragraph: "Escolher virou mais raro que produzir.",
    },
    page3: {
      statement: "Autoria hoje é edição.",
    },
    page4: {
      highlight: "O valor voltou ao filtro",
      bullets: [
        "gosto treinado",
        "sistema claro",
        "corte firme",
        "coerência geral",
      ],
    },
    page5: {
      closing:
        "Quando todo mundo consegue gerar, quem decide melhor passa a desenhar a diferença.",
    },
  },
  images: [
    {
      page: 1,
      src: "/social-media/dieter-rams-cover.jpg",
      alt: "Imagem de abertura ligada ao repertório de Dieter Rams",
      label: "Rams cover",
      referenceUrl: "https://www.moma.org/collection/works/2649",
    },
    {
      page: 2,
      src: "/social-media/dieter-rams-product.jpg",
      alt: "Produto ligado ao repertório moderno de Dieter Rams",
      label: "Rams product",
      referenceUrl: "https://www.moma.org/collection/works/143636",
    },
    {
      page: 5,
      src: "/social-media/massimo-vignelli-works.jpg",
      alt: "Conjunto de trabalhos gráficos associados a Massimo Vignelli",
      label: "Vignelli works",
      referenceUrl: "https://www.nytransitmuseum.org/vignelli/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A capa parte de repertório moderno para enquadrar a ideia de critério acima de volume.",
    },
    {
      page: "02",
      title: "Support Page",
      body: "O segundo objeto reforça a tese de que intenção e corte seguem sendo o verdadeiro diferencial.",
    },
    {
      page: "03",
      title: "Statement Page",
      body: "A frase central condensa o insight amplo sem inflar a página com explicação.",
    },
    {
      page: "04",
      title: "Bullet Card",
      body: "As bullets transformam o insight em quatro capacidades concretas de direção criativa.",
    },
    {
      page: "05",
      title: "Closing",
      body: "O fechamento usa repertório gráfico para devolver o insight ao território da autoria visual.",
    },
  ],
  imageRules: [
    "Este post usa 3 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2 e 5.",
    "As referências visuais estão hospedadas no próprio projeto.",
  ],
  imageSources: [
    "Page 1 — abertura com repertório moderno de produto.",
    "Page 2 — objeto de produto para reforçar corte e decisão.",
    "Page 5 — repertório gráfico para fechar a ideia de autoria visual.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16",
  adaptationNotes:
    "No 4:5, o post continua apoiado em repertório e não em excesso textual: objeto na capa, apoio de produto e fechamento gráfico.",
}

export const ios26LiquidGlassInterfacePost: SocialPostPageData = {
  title: "iOS 26 — Liquid Glass redesenhou a lógica da interface",
  description:
    "O maior redesign de software da Apple em mais de uma década não foi sobre estética. Foi sobre material como sistema de interface.",
  approvedTopic:
    "Apple Liquid Glass — iOS 26 e o redesign de interface mais abrangente da Apple desde o iOS 7, com um novo material que redefine profundidade, hierarquia e percepção de conteúdo.",
  copy: {
    page1: {
      title: "O vidro que redesenhou o iOS",
      subtitle:
        "Como a Apple transformou um material em sistema de interface.",
    },
    page2: {
      title: "O maior redesign de software da Apple em mais de uma década",
      paragraph: "Não é só estética. É uma nova lógica de camadas.",
    },
    page3: {
      intro: "O Liquid Glass não é uma textura. É uma arquitetura.",
      statement: "Profundidade legível",
      attribution:
        "A translucidez reorganiza a hierarquia visual sem romper a continuidade.",
    },
    page4: {
      highlight: "O que o material faz",
      bullets: [
        "Reflete contexto",
        "Absorve cor ambiente",
        "Foco no conteúdo",
        "Some quando precisa",
      ],
    },
    page6: {
      title: "O sistema que se adapta ao que está por trás dele",
      paragraph:
        "Cada elemento responde à cena. O interface some para o conteúdo aparecer.",
    },
    page7: {
      intro: "iOS 7 quebrou o skeuomorfismo. iOS 26 o reimaginou.",
      statement: "Vidro sem peso",
      attribution: "A profundidade voltou, mas agora serve à função.",
    },
    page8Text: {
      title: "Por que o Liquid Glass importa além do visual",
      paragraph: "Material como decisão de sistema. Não como ornamento.",
    },
    page9Closing: {
      closing: "Interface que some é interface que funciona.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-hero-250609_big.jpg.large.jpg",
      alt: "Hero oficial do anúncio do Liquid Glass da Apple no WWDC 2025",
      label: "Liquid Glass hero",
      referenceUrl:
        "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
    {
      page: 2,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Home-Screen-clear-look-250609_big.jpg.large.jpg",
      alt: "Home screen com tratamento translúcido do Liquid Glass no iOS 26",
      label: "Home Screen clear look",
      referenceUrl:
        "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
    {
      page: 6,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Home-Screen-dark-tint-250609_big.jpg.large.jpg",
      alt: "Home screen com tint escuro do Liquid Glass mostrando adaptação de cor",
      label: "Home Screen dark tint",
      referenceUrl:
        "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
    {
      page: 10,
      src: "https://www.apple.com/newsroom/images/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/article/Apple-WWDC25-Liquid-Glass-Icon-Composer-250609_big.jpg.large.jpg",
      alt: "Composição de ícones e elementos de interface do Liquid Glass",
      label: "Icon Composer",
      referenceUrl:
        "https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Hero oficial do WWDC 2025 para marcar a escala do redesign.",
    },
    {
      page: "02",
      title: "Context",
      body: "A home screen com Liquid Glass mostra como o material reorganiza hierarquia sem romper continuidade.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a leitura de estética para arquitetura de interface.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Os quatro comportamentos do material resumem sua lógica como sistema.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "O dark tint mostra a adaptação do material ao contexto de fundo em tempo real.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "Conecta o Liquid Glass com o legado do iOS 7 como último grande redesign.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sem imagem: material como decisão de sistema, não como ornamento.",
    },
    {
      page: "08",
      title: "Closing",
      body: "Fechamento com composição de ícones para cristalizar o novo vocabulário visual.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes são oficiais da Apple Newsroom.",
  ],
  imageSources: [
    "Page 1 — hero do anúncio oficial do Liquid Glass no WWDC 2025.",
    "Page 2 — home screen com tratamento translúcido e hierarquia de conteúdo.",
    "Page 5 — dark tint mostrando adaptação do material ao contexto.",
    "Page 8 — composição de ícones da nova linguagem visual.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a hierarquia permanece visual: hero do material, detalhe de interface claro, variação de tint e fechamento com sistema de ícones.",
}

export const samsungDesignActOfLovePost: SocialPostPageData = {
  title: "Samsung usou Milão para explicar uma filosofia de produto",
  description:
    "A exposição 'Design is an Act of Love' no Milan Design Week 2026 transformou 12 zonas em argumento físico sobre o porquê de cada decisão de design.",
  approvedTopic:
    "Samsung 'Design is an Act of Love' — exposição imersiva de 12 zonas no Milan Design Week 2026 como extensão física da filosofia de produto da marca.",
  copy: {
    page1: {
      title: "Samsung transformou design em espaço",
      subtitle:
        "12 zonas imersivas para explicar uma filosofia de produto.",
    },
    page2: {
      title: "Milan Design Week 2026 como extensão da identidade da marca",
      paragraph: "O espaço físico como argumento de design.",
    },
    page3: {
      intro: '"Design is an Act of Love" não é slogan.',
      statement: "É uma curadoria",
      attribution:
        "Cada zona traduz uma decisão de produto em experiência sensorial.",
    },
    page4: {
      highlight: "O que a exposição comunica",
      bullets: [
        "Design como cuidado",
        "Produto como relação",
        "IA com intenção",
        "Forma com sentido",
      ],
    },
    page6: {
      title: "Como uma marca usa espaço físico para defender escolhas de produto",
      paragraph: "Não é showroom. É manifesto habitável.",
    },
    page7: {
      intro: "A Samsung não mostrou produtos. Mostrou razões.",
      statement: "Filosofia visível",
      attribution: "Design como posição, não como acabamento.",
    },
    page8Text: {
      title: "O que diferencia uma exposição de uma campanha de marca",
      paragraph: "Quando o argumento precede o objeto.",
    },
    page9Closing: {
      closing: "A marca que explica o porquê tem mais a dizer.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/04/20140416/Samsung-Corporate-Design-Milan-Design-Week-2026-Design-is-an-Act-of-Love-Samsung-Design-Open-Lab_main1.jpg",
      alt: "Entrada principal da exposição Samsung Design is an Act of Love no Milan Design Week 2026",
      label: "Samsung Milan 2026 main",
      referenceUrl:
        "https://news.samsung.com/global/samsung-unveils-design-is-an-act-of-love-exhibition-at-milan-design-week-2026",
    },
    {
      page: 2,
      src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/04/20140505/Samsung-Corporate-Design-Milan-Design-Week-2026-Design-is-an-Act-of-Love-Samsung-Design-Open-Lab_main2.jpg",
      alt: "Zona imersiva da exposição Samsung mostrando interface entre produto e visitante",
      label: "Samsung Milan 2026 zone",
      referenceUrl:
        "https://news.samsung.com/global/samsung-unveils-design-is-an-act-of-love-exhibition-at-milan-design-week-2026",
    },
    {
      page: 6,
      src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/04/21100519/Samsung-Corporate-Design-Milan-Design-Week-2026-Design-is-an-Act-of-Love-Samsung-Design-Open-Lab_main3F.jpg",
      alt: "Terceira zona imersiva da exposição Samsung Design Open Lab em Milão",
      label: "Samsung Milan 2026 zone 3",
      referenceUrl:
        "https://news.samsung.com/global/samsung-unveils-design-is-an-act-of-love-exhibition-at-milan-design-week-2026",
    },
    {
      page: 10,
      src: "https://img.global.news.samsung.com/global/wp-content/uploads/2026/04/20140709/Samsung-Corporate-Design-Milan-Design-Week-2026-Design-is-an-Act-of-Love-Samsung-Design-Open-Lab_main4.jpg",
      alt: "Vista final do espaço Samsung Design Open Lab no Milan Design Week 2026",
      label: "Samsung Milan 2026 close",
      referenceUrl:
        "https://news.samsung.com/global/samsung-unveils-design-is-an-act-of-love-exhibition-at-milan-design-week-2026",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Entrada principal da exposição para marcar a escala do projeto como argumento físico.",
    },
    {
      page: "02",
      title: "Context",
      body: "Uma zona imersiva mostra como o espaço opera como extensão da identidade de produto.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a leitura de campanha para manifesto de marca.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Os quatro pilares comunicados pela exposição condensam a posição da Samsung como marca.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "A terceira zona aprofunda a leitura de espaço como argumento, não como showroom.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "Descreve a Samsung como marca que explica decisões — não apenas exibe produtos.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese textual sobre o que separa exposição de campanha de marca.",
    },
    {
      page: "08",
      title: "Closing",
      body: "Fechamento com vista final do espaço para cristalizar a ideia de filosofia habitável.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes são da Samsung Newsroom oficial.",
  ],
  imageSources: [
    "Page 1 — entrada principal do Samsung Design Open Lab no Milan Design Week 2026.",
    "Page 2 — zona imersiva mostrando interação entre produto e visitante.",
    "Page 5 — terceira zona imersiva do Samsung Design Open Lab.",
    "Page 8 — vista de fechamento do espaço expositivo.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura de espaço como argumento se mantém: entrada como capa, zona como contexto, interior como apoio intermediário e fechamento com vista geral.",
}

export const nikeFootballRebrand2026Post: SocialPostPageData = {
  title: "Nike Football tem um novo sistema visual para a Copa 2026",
  description:
    "A iLoveDust redesenhou a identidade da Nike Football com um shield angular, novo sistema tipográfico e linguagem visual direcionada à Copa do Mundo 2026.",
  approvedTopic:
    "Nike Football rebrand (iLoveDust) — novo sistema visual com shield angular, tipografia agressiva e identidade direcionada à Copa do Mundo 2026.",
  copy: {
    page1: {
      title: "Nike Football tem um novo sistema visual",
      subtitle:
        "iLoveDust redesenhou a identidade para uma nova era do futebol.",
    },
    page2: {
      title: "Um shield angular como ponto de partida para toda a linguagem",
      paragraph: "Forma agressiva com raiz histórica.",
    },
    page3: {
      intro: "O novo símbolo não é apenas um logo.",
      statement: "É um sistema",
      attribution:
        "Tipografia, movimento e identidade construídos a partir de um ângulo central.",
    },
    page4: {
      highlight: "As decisões visuais",
      bullets: [
        "Shield angular moderno",
        "Tipografia de ataque",
        "Paleta de contraste",
        "Movimento como extensão",
      ],
    },
    page6: {
      title: "Por que a Copa 2026 exigiu uma identidade nova para o esporte",
      paragraph: "Momento de ruptura com a era genérica do futebol global.",
    },
    page7: {
      intro: "A iLoveDust não fez um redesign. Fez uma posição.",
      statement: "Identidade de jogo",
      attribution: "O escudo como metáfora de postura, não de proteção.",
    },
    page8Text: {
      title: "O que a Nike está dizendo sobre como o futebol deve parecer",
      paragraph: "Quando o estilo visual de uma marca antecipa o estilo de jogo.",
    },
    page9Closing: {
      closing: "Um novo sistema visual muda como o esporte é percebido.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://www.creativeboom.com/upload/articles/3a/3ab0020b6cff800561a3863e382749d315793884_944.jpg",
      alt: "Hero do rebranding Nike Football pela iLoveDust com o novo shield angular",
      label: "Nike Football rebrand hero",
      referenceUrl:
        "https://www.creativeboom.com/inspiration/ilovedust-rebrands-nike-football-with-a-fearless-new-identity-rooted-in-attacking-play/",
    },
    {
      page: 2,
      src: "https://www.creativeboom.com/upload/articles/fe/fe90525df2214a8d7d98b3f2a0235b3030accec7_944.jpg",
      alt: "Sistema tipográfico e visual do rebranding Nike Football",
      label: "Nike Football type system",
      referenceUrl:
        "https://www.creativeboom.com/inspiration/ilovedust-rebrands-nike-football-with-a-fearless-new-identity-rooted-in-attacking-play/",
    },
    {
      page: 6,
      src: "https://www.creativeboom.com/upload/articles/28/28f98cd31b8b57d045e2868ff5b8720fdf9b509c_944.jpg",
      alt: "Aplicação do novo sistema visual da Nike Football em contexto de marca",
      label: "Nike Football brand application",
      referenceUrl:
        "https://www.creativeboom.com/inspiration/ilovedust-rebrands-nike-football-with-a-fearless-new-identity-rooted-in-attacking-play/",
    },
    {
      page: 10,
      src: "https://www.creativeboom.com/upload/articles/5c/5caeab275da34d7f1f287a76c613552428c1c5fe_944.jpg",
      alt: "Fechamento visual do rebranding Nike Football com a nova identidade completa",
      label: "Nike Football identity close",
      referenceUrl:
        "https://www.creativeboom.com/inspiration/ilovedust-rebrands-nike-football-with-a-fearless-new-identity-rooted-in-attacking-play/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Hero do rebrand para marcar a ruptura visual com a era anterior.",
    },
    {
      page: "02",
      title: "Context",
      body: "O sistema tipográfico aprofunda como o ângulo do shield gerou toda a linguagem.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a leitura de logo novo para sistema visual completo.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Os quatro pilares do rebrand resumem as decisões centrais do novo sistema.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "A aplicação de marca mostra como o sistema opera em contexto real.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "Posiciona a iLoveDust e o rebrand como tomada de posição editorial, não como refresh.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre como a identidade visual de uma marca antecipa o comportamento do esporte.",
    },
    {
      page: "08",
      title: "Closing",
      body: "Fechamento com a identidade completa para cristalizar o argumento de sistema.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes vêm do editorial oficial da Creative Boom sobre o rebrand.",
  ],
  imageSources: [
    "Page 1 — hero do rebranding Nike Football com o novo shield angular.",
    "Page 2 — sistema tipográfico e linguagem visual do rebrand.",
    "Page 5 — aplicação do sistema em contexto de marca.",
    "Page 8 — fechamento com identidade completa.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura de sistema se mantém: hero do shield, tipografia no contexto, aplicação no apoio intermediário e fechamento com identidade completa.",
}

export const ipod2001ProdutoCoerente: SocialPostPageData = {
  title: "O iPod resolveu um problema que ninguém sabia nomear",
  description:
    "Em 2001, a Apple lançou o objeto mais coerente de sua história: forma, interface e narrativa condensadas em um único produto que até hoje não foi replicado com a mesma precisão.",
  approvedTopic:
    "iPod 2001 — scroll wheel mecânica como o pico da interface física antes do touchscreen. Como um único produto condensou forma industrial, interface e narrativa de marca.",
  copy: {
    page1: {
      title: "O iPod resolveu um problema que ninguém sabia nomear",
      subtitle:
        "Forma, interface e narrativa condensadas em um único objeto.",
    },
    page2: {
      title: "Em 2001, a Apple lançou o dispositivo mais coerente de sua história",
      paragraph: "Cada detalhe servia ao mesmo argumento.",
    },
    page3: {
      intro: "O scroll wheel não era uma solução técnica.",
      statement: "Era uma metáfora",
      attribution:
        "Girar para avançar tornou a navegação intuitiva antes do touchscreen.",
    },
    page4: {
      highlight: "Por que o iPod não foi replicado",
      bullets: [
        "Forma sem excesso",
        "Interface háptica",
        "Um propósito claro",
        "Zero ambiguidade",
      ],
    },
    page6: {
      title: "O objeto que provou que redução é uma decisão de design, não de orçamento",
      paragraph: "Menos funções, mais coerência. Produto mais forte.",
    },
    page7: {
      intro: "O iPod não era sobre música. Era sobre controle.",
      statement: "Precisão na palma",
      attribution:
        "A scroll wheel mecânica como o pico da interface física antes do multi-touch.",
    },
    page8Text: {
      title: "O que o iPod ainda ensina sobre produto e identidade",
      paragraph: "Quando o objeto inteiro é o argumento.",
    },
    page9Closing: {
      closing: "O melhor produto é aquele que não precisa de explicação.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://www.macworld.com/wp-content/uploads/2025/05/ipod-20th-anniversary.jpg?quality=50&strip=all&w=1024",
      alt: "iPod no 20º aniversário do produto — imagem editorial da Macworld",
      label: "iPod 20th anniversary",
      referenceUrl: "https://www.macworld.com/article/546753/ipod-mini-shuffle-nano-touch-complete-timeline.html",
    },
    {
      page: 2,
      src: "https://b2c-contenthub.com/wp-content/uploads/2021/10/original-ipod.jpg?quality=50&strip=all&w=1200",
      alt: "iPod de primeira geração com scroll wheel mecânica — 2001",
      label: "Original iPod 1G",
      referenceUrl: "https://www.macworld.com/article/546753/ipod-mini-shuffle-nano-touch-complete-timeline.html",
    },
    {
      page: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Ipod_1G.png",
      alt: "iPod primeira geração — vista frontal com scroll wheel mecânica original",
      label: "iPod 1G frontal",
      referenceUrl: "https://en.wikipedia.org/wiki/IPod",
    },
    {
      page: 10,
      src: "https://b2c-contenthub.com/wp-content/uploads/2021/10/ipod-6th-gen.jpg?quality=50&strip=all&w=1200",
      alt: "iPod Classic sexta geração — o último da linha antes da descontinuação em 2014",
      label: "iPod Classic 6G",
      referenceUrl: "https://www.macworld.com/article/546753/ipod-mini-shuffle-nano-touch-complete-timeline.html",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Imagem editorial do aniversário para marcar o objeto como referência histórica de produto.",
    },
    {
      page: "02",
      title: "Context",
      body: "O iPod 1G mostra a forma original — scroll wheel, monobloco branco e zero adorno.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca o scroll wheel de solução técnica para metáfora de navegação.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Os quatro pontos resumem por que o iPod não foi replicado com a mesma coerência.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "A vista frontal do 1G reforça a ideia de redução como decisão intencional de design.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "Posiciona o scroll wheel mecânico como pico da interface háptica antes do touchscreen.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre o que o iPod ainda ensina sobre produto como argumento único.",
    },
    {
      page: "08",
      title: "Closing",
      body: "O iPod Classic fecha a linha e cristaliza a tese de produto que não precisa de explicação.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Fontes: Macworld, Wikimedia Commons.",
  ],
  imageSources: [
    "Page 1 — editorial do 20º aniversário do iPod pela Macworld.",
    "Page 2 — iPod 1G original com scroll wheel mecânica.",
    "Page 5 — vista frontal do iPod 1G via Wikimedia Commons.",
    "Page 8 — iPod Classic 6G como fechamento da linha original.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, o post preserva a leitura cronológica e de produto: aniversário na capa, original como contexto, frontal no apoio intermediário e Classic no fechamento.",
}

export const materialComoLinguagemPost: SocialPostPageData = {
  title: "O material é uma decisão de marca",
  description:
    "Quando a escolha da superfície, textura ou acabamento deixa de ser decisão de engenharia e passa a ser o argumento central da identidade de produto.",
  approvedTopic:
    "Material como linguagem de produto — quando a escolha do acabamento, superfície ou textura deixa de ser decisão de produção e passa a ser o argumento central da identidade.",
  copy: {
    page1: {
      title: "O material é uma decisão de marca",
      subtitle:
        "Quando a superfície deixa de ser acabamento e vira argumento.",
    },
    page2: {
      title: "A escolha do material comunica antes de qualquer forma ou cor",
      paragraph: "Alumínio escovado diz uma coisa. Vidro diz outra.",
    },
    page3: {
      intro: "Textura é linguagem antes de ser toque.",
      statement: "Superfície como sinal",
      attribution: "O que a mão sente influencia o que o olho acredita.",
    },
    page4: {
      highlight: "Como o material age na percepção",
      bullets: [
        "Define categoria",
        "Antecipa qualidade",
        "Posiciona preço",
        "Cria memória tátil",
      ],
    },
    page6: {
      title: "Por que marcas premium controlam o material com a mesma atenção que controlam o logo",
      paragraph: "A consistência tátil é parte do sistema de identidade.",
    },
    page7: {
      intro: "A Apple não escolheu alumínio por custo. Escolheu por posição.",
      statement: "Material como tese",
      attribution:
        "Cada superfície é uma declaração de onde a marca quer estar.",
    },
    page8Text: {
      title: "O que muda quando o material deixa de ser decisão de engenharia",
      paragraph: "Quando passa a ser decisão de marca, tudo muda.",
    },
    page9Closing: {
      closing: "O melhor material é aquele que parece inevitável.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://images.unsplash.com/photo-1776278515631-caba01f30f9b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      alt: "Superfície de material de produto com textura de design premium",
      label: "Product material surface",
      referenceUrl: "https://unsplash.com/",
    },
    {
      page: 2,
      src: "https://images.unsplash.com/photo-1552499166-bf7492d04a4f?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      alt: "Close de textura de material mostrando a linguagem sensorial da superfície",
      label: "Material close-up",
      referenceUrl: "https://unsplash.com/",
    },
    {
      page: 6,
      src: "https://images.unsplash.com/photo-1756758932992-3cac25c395f7?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      alt: "Superfície de metal escovado com textura sutil de produto premium",
      label: "Brushed metal surface",
      referenceUrl: "https://unsplash.com/",
    },
    {
      page: 10,
      src: "https://images.unsplash.com/photo-1673201159882-725f2b63dc39?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      alt: "Textura de material industrial como encerramento visual do argumento de marca",
      label: "Material identity close",
      referenceUrl: "https://unsplash.com/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Superfície de material como capa para marcar o argumento de linguagem tátil.",
    },
    {
      page: "02",
      title: "Context",
      body: "Close de textura para aprofundar a ideia de que material comunica antes da forma.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a textura de acabamento para sinal de posicionamento.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Os quatro comportamentos do material resumem como a superfície age na percepção do produto.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "Metal escovado como exemplo visual da consistência tátil como parte do sistema de identidade.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "A referência ao alumínio da Apple ancora a tese em decisão real de marca.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre o que muda quando o material deixa de ser engenharia e vira posição.",
    },
    {
      page: "08",
      title: "Closing",
      body: "Fechamento com textura industrial para cristalizar a ideia de inevitabilidade do material certo.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes vêm do Unsplash com licença livre de uso.",
  ],
  imageSources: [
    "Page 1 — superfície de material de produto premium.",
    "Page 2 — close de textura mostrando a linguagem sensorial da superfície.",
    "Page 5 — metal escovado como exemplo de consistência tátil.",
    "Page 8 — textura industrial para o fechamento.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura de material como linguagem se mantém: superfície na capa, close no contexto, metal no apoio intermediário e textura industrial no fechamento.",
}

export const audiConceptCClarityPost: SocialPostPageData = {
  title: "Audi Concept C — Clarity como filosofia de design",
  description:
    "O Concept C venceu o Car Design Award 2026 com uma tese simples: nenhuma superfície sem razão. Clarity é a nova filosofia da Audi — e ela aparece em cada centímetro do carro.",
  approvedTopic:
    "Audi Concept C — Car Design Award 2026 e a filosofia 'Clarity': quando radical simplicity vira argumento de produto elétrico.",
  copy: {
    page1: {
      title: "O carro que justifica cada centímetro",
      subtitle:
        "Clarity: a nova filosofia da Audi. Nada sem razão. Nada sem forma.",
    },
    page2: {
      title: "Car Design Award 2026. ADI Museum, Milão. Abril.",
      paragraph: "O júri não premiou beleza. Premiou argumento de produto.",
    },
    page3: {
      intro: "Clarity não é minimalismo.",
      statement: "É precisão como posição",
      attribution:
        "Cada superfície existe porque precisa existir. A forma nasce da remoção do supérfluo.",
    },
    page4: {
      highlight: "O que o Concept C entrega",
      bullets: [
        "Sem adorno",
        "Forma como consequência",
        "Elétrico de 4,68m",
        "Um painel, um foco",
      ],
    },
    page6: {
      title: "Massimo Frascella: simplicidade radical no centro de tudo",
      paragraph:
        "Não é vazio. É consequência. A forma nasce de remover o que não serve à função.",
    },
    page7: {
      intro: "A Audi não lançou um carro-conceito. Lançou um ponto de vista.",
      statement: "Design como responsabilidade",
      attribution: "Radical simplicity at the heart of our approach.",
    },
    page8Text: {
      title: "Por que o Concept C importa como referência de linguagem",
      paragraph: "Quando o produto inteiro é o argumento, dispensa discurso.",
    },
    page9Closing: {
      closing: "O produto que justifica cada centímetro nunca precisa de retórica.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://uploads.audi-mediacenter.com/system/production/media/128611/images/2d78102858d21d5ce0d87c96474c2836715a0294/A251443_web_2880.jpg",
      alt: "Audi Concept C vista superior em estúdio — forma limpa sobre fundo escuro",
      label: "Audi Concept C studio top",
      referenceUrl:
        "https://www.audi-mediacenter.com/en/press-releases/audi-concept-c-manifestation-of-a-new-design-philosophy-16808",
    },
    {
      page: 2,
      src: "https://uploads.audi-mediacenter.com/system/production/media/128904/images/5c1a6f247d1de305272d57f4c27de48da35ddc91/A251704_web_2880.jpg",
      alt: "Audi Concept C em movimento — três quartos frontal dinâmico",
      label: "Audi Concept C dynamic front",
      referenceUrl:
        "https://www.audi-mediacenter.com/en/press-releases/audi-concept-c-manifestation-of-a-new-design-philosophy-16808",
    },
    {
      page: 6,
      src: "https://uploads.audi-mediacenter.com/system/production/media/128911/images/2dd24b2203631c4ea061729bb06f1156348e4480/A251711_web_2880.jpg",
      alt: "Audi Concept C três quartos traseiro — linha de teto e superfícies em evidência",
      label: "Audi Concept C rear quarter",
      referenceUrl:
        "https://www.audi-mediacenter.com/en/press-releases/audi-concept-c-manifestation-of-a-new-design-philosophy-16808",
    },
    {
      page: 10,
      src: "https://uploads.audi-mediacenter.com/system/production/media/128909/images/7d424c228c314d6ce372a06683d3263598d03812/A251709_web_2880.jpg",
      alt: "Audi Concept C comparado com TT, R8, RS 6 e Auto Union — herança de design",
      label: "Audi heritage comparison",
      referenceUrl:
        "https://www.audi-mediacenter.com/en/press-releases/audi-concept-c-manifestation-of-a-new-design-philosophy-16808",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Vista superior em estúdio — a forma limpa do Concept C como argumento de abertura.",
    },
    {
      page: "02",
      title: "Context",
      body: "O Concept C em movimento ancora o prêmio em produto real, não em render.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca Clarity de estética para posição de design.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Quatro pontos condensam a filosofia Clarity em decisões concretas de produto.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "Três quartos traseiro mostra onde a superfície comunica — sem adorno, com intenção.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "A citação de Frascella ancora a filosofia em voz institucional da Audi.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre o que Clarity significa como referência de linguagem de produto.",
    },
    {
      page: "08",
      title: "Closing",
      body: "A comparação com a herança da marca fecha com contexto histórico e posição.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes são oficiais do Audi MediaCenter.",
  ],
  imageSources: [
    "Page 1 — vista superior do Concept C em estúdio.",
    "Page 2 — três quartos frontal dinâmico.",
    "Page 5 — três quartos traseiro mostrando superfícies.",
    "Page 8 — comparação de herança com modelos icônicos da Audi.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura de Clarity se mantém: forma em estúdio na capa, dinâmica no contexto, traseiro no apoio e herança no fechamento.",
}

export const philadelphiaArtMuseumRebrandPost: SocialPostPageData = {
  title: "Philadelphia Museum of Art virou Philadelphia Art Museum",
  description:
    "Em outubro de 2025, a instituição de 150 anos mudou o nome, encomendou a Gretel uma nova identidade e ganhou a Fairmount Serif — uma tipografia customizada que divide opiniões e não pede desculpa.",
  approvedTopic:
    "Philadelphia Art Museum rebrand 2025 — Gretel, Fairmount Serif e o griffin: quando uma instituição centenária encomendar sua própria voz tipográfica.",
  copy: {
    page1: {
      title: "Philadelphia Museum of Art virou Philadelphia Art Museum",
      subtitle:
        "E ganhou uma tipografia customizada que divide opiniões — e uma identidade que não pede desculpa.",
    },
    page2: {
      title: "Gretel + Ryan Bugden. Brooklyn. Outubro de 2025.",
      paragraph:
        "Uma tipografia customizada desenhada para uma instituição com 150 anos de história.",
    },
    page3: {
      intro: "Fairmount Serif não é apenas uma fonte.",
      statement: "É uma declaração de pertencimento",
      attribution:
        "Inspirada em Sol Hess, nascida em Philadelphia, desenhada para durar mais de uma era.",
    },
    page4: {
      highlight: "O que o rebrand entrega",
      bullets: [
        "Nome novo",
        "Fairmount Serif",
        "Griffin reativado",
        "Identidade local",
      ],
    },
    page6: {
      title: "A tipografia que dividiu o público fez exatamente o que devia",
      paragraph:
        "Rebrands que não incomodam ninguém não dizem nada. Esse disse onde a instituição está.",
    },
    page7: {
      intro: "Hess Neobold, Sol Hess, 1920s. Fairmount Serif, Ryan Bugden, 2025.",
      statement: "Tipo como memória ativa",
      attribution: "A fonte é um arquivo que ainda faz serviço.",
    },
    page8Text: {
      title: "Por que uma tipografia customizada é uma decisão institucional",
      paragraph: "Licenciar é conveniente. Encomendar é posição.",
    },
    page9Closing: {
      closing: "A instituição que desenha sua própria letra escolheu ter voz própria.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-BPO-review-logo-branding-Museum-Facade.jpg",
      alt: "Fachada do Philadelphia Art Museum com nova identidade visual aplicada",
      label: "PhAM museum facade",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
    {
      page: 2,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-print-logo-branding-bpo-review.png",
      alt: "Identidade visual impressa do Philadelphia Art Museum — logo e Fairmount Serif em aplicação editorial",
      label: "PhAM print identity",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
    {
      page: 6,
      src: "https://bpando.org/wp-content/uploads/0-Philadelphia-art-museum-gretel-BPO-review-logo-branding-signage.jpg",
      alt: "Sinalização do Philadelphia Art Museum com Fairmount Serif aplicada em escala arquitetônica",
      label: "PhAM signage",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
    {
      page: 10,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-BPO-review-logo-branding-Vernacular-typography-Library.png",
      alt: "Biblioteca tipográfica vernacular da identidade do Philadelphia Art Museum — Gretel 2025",
      label: "PhAM vernacular type library",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "A fachada do museu com nova identidade aplicada — escala arquitetônica como abertura.",
    },
    {
      page: "02",
      title: "Context",
      body: "A identidade impressa mostra a Fairmount Serif em sistema editorial completo.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a tipografia de escolha estética para declaração de pertencimento local.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Quatro decisões do rebrand condensam o alcance da mudança institucional.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "A sinalização em escala real ancora a tipografia no espaço físico da instituição.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "Conecta Fairmount Serif com Hess Neobold para mostrar a camada histórica da decisão.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre o que separar licenciar de encomendar significa como posição de identidade.",
    },
    {
      page: "08",
      title: "Closing",
      body: "A biblioteca vernacular fecha com a profundidade do sistema tipográfico construído.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes vêm do BP&O (Brand New & Opinion), cobertura especializada do rebrand.",
  ],
  imageSources: [
    "Page 1 — fachada do museu com nova identidade.",
    "Page 2 — identidade impressa com Fairmount Serif.",
    "Page 5 — sinalização arquitetônica com tipografia em escala.",
    "Page 8 — biblioteca tipográfica vernacular completa.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura tipográfica se mantém: fachada na capa, sistema editorial no contexto, sinalização no apoio e biblioteca no fechamento.",
}

export const googleGeminiRedesign2026Post: SocialPostPageData = {
  title: "Gemini redesenhou a IA como interface discreta",
  description:
    "Em abril de 2026, o Google lançou o maior redesign do Gemini no Android: a tela inteira virou pílula flutuante. Progressive disclosure como princípio — o assistente que aprende a sair do caminho.",
  approvedTopic:
    "Google Gemini redesign 2026 — progressive disclosure, pílula flutuante no Android e overlay que se encolhe: quando a IA aprende a ocupar menos tela.",
  copy: {
    page1: {
      title: "Gemini redesenhou a IA como interface discreta",
      subtitle: "Quando o assistente aprende a sair do caminho.",
    },
    page2: {
      title: "Abril de 2026. Android. Redesign completo.",
      paragraph:
        "A tela inteira virou pílula flutuante. O foco voltou para quem usa.",
    },
    page3: {
      intro: "Progressive disclosure não é tendência.",
      statement: "É o próximo passo da interface",
      attribution:
        "Mostrar só o que é necessário, no momento certo, é o trabalho invisível do bom design.",
    },
    page4: {
      highlight: "O que o redesign entrega",
      bullets: [
        "Pílula flutuante",
        "Overlay que some",
        "Menu unificado",
        "Ícones mais finos",
      ],
    },
    page6: {
      title: "A mudança que parece pequena é a mais difícil de fazer",
      paragraph:
        "Reduzir presença visual de um produto com ambição de estar em tudo exige coragem de marca.",
    },
    page7: {
      intro: "A interface que ocupa menos tela pensa mais sobre o usuário.",
      statement: "Menos presença, mais contexto",
      attribution: "O overlay some para o conteúdo do usuário aparecer.",
    },
    page8Text: {
      title: "Por que a discretização da IA é uma decisão de design madura",
      paragraph: "A IA que aprende a recuar é a que fica.",
    },
    page9Closing: {
      closing: "Interface que some é interface que confia no usuário.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://9to5google.com/wp-content/uploads/sites/4/2026/03/gemini-android-app-icon.jpg?quality=82&strip=all&w=1600",
      alt: "Ícone do aplicativo Google Gemini no Android",
      label: "Gemini Android app icon",
      referenceUrl: "https://9to5google.com/2026/04/07/gemini-live-redesign-android/",
    },
    {
      page: 2,
      src: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/04/Gemini-overlay-redesign-Apr-26-1.jpg?ssl=1",
      alt: "Novo overlay do Gemini no Android — interface redesenhada com pílula flutuante",
      label: "Gemini overlay redesign 1",
      referenceUrl: "https://9to5google.com/2026/04/07/gemini-live-redesign-android/",
    },
    {
      page: 6,
      src: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/04/Gemini-overlay-redesign-Apr-26-3.jpg?ssl=1",
      alt: "Gemini overlay redesign — painel de anexos unificado com carrossel de opções",
      label: "Gemini overlay redesign 3",
      referenceUrl: "https://9to5google.com/2026/04/07/gemini-live-redesign-android/",
    },
    {
      page: 10,
      src: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2026/04/Gemini-Live-redesign-Apr-26-2.jpg?ssl=1",
      alt: "Gemini Live redesign — nova interface de conversa ao vivo com pílula flutuante",
      label: "Gemini Live redesign",
      referenceUrl: "https://9to5google.com/2026/04/19/gemini-live-app-redesign/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "O ícone do Gemini abre o post — marca como âncora antes da tese de interface.",
    },
    {
      page: "02",
      title: "Context",
      body: "O overlay redesenhado mostra a mudança mais visível: de fullscreen para pílula discreta.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese posiciona progressive disclosure como princípio de design maduro, não como feature.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Quatro decisões do redesign condensam a lógica de redução de presença visual.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "O painel de anexos unificado mostra a segunda camada do redesign — organização de ferramentas.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "A tese da coragem de marca ancora a decisão de redução em posição estratégica.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre o que significa ter uma IA que aprende a recuar como decisão de maturidade.",
    },
    {
      page: "08",
      title: "Closing",
      body: "O Gemini Live redesenhado fecha com o produto na forma mais discreta — pílula e foco.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes vêm do 9to5Google, cobertura especializada em Android.",
  ],
  imageSources: [
    "Page 1 — ícone do Gemini no Android.",
    "Page 2 — overlay redesenhado com pílula flutuante.",
    "Page 5 — painel de anexos unificado.",
    "Page 8 — Gemini Live na nova interface discreta.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a narrativa de discretização se mantém: ícone na capa, overlay no contexto, painel no apoio e Live no fechamento.",
}

export const otlAicherMunich1972Post: SocialPostPageData = {
  title: "Otl Aicher desenhou a linguagem universal dos Jogos",
  description:
    "Munich, 1972. Otl Aicher criou 20 pictogramas esportivos sobre um grid modular rígido — e mudou a sinalização pública mundial para sempre. Os DOT pictograms americanos vieram dois anos depois.",
  approvedTopic:
    "Otl Aicher e os pictogramas de Munich 1972 — como um sistema visual sem texto se tornou a base da sinalização pública moderna e influenciou o design de orientação global.",
  copy: {
    page1: {
      title: "Otl Aicher desenhou a linguagem universal dos Jogos",
      subtitle:
        "Munich, 1972. 20 esportes. Um sistema que mudou a sinalização pública para sempre.",
    },
    page2: {
      title: "1966. Aicher recebe a comissão para liderar o design olímpico.",
      paragraph:
        "A tarefa não era ilustrar. Era criar um vocabulário que dispensasse idioma.",
    },
    page3: {
      intro: "Cada pictograma é uma gramática.",
      statement: "Grid modular como argumento",
      attribution:
        "Aicher construiu os ícones sobre uma malha geométrica rígida — a regra que garante que qualquer esporte caiba na mesma lógica.",
    },
    page4: {
      highlight: "O que o sistema entrega",
      bullets: [
        "20 esportes",
        "Grid modular",
        "Sem texto",
        "Sem fronteira",
      ],
    },
    page6: {
      title: "Os pictogramas influenciaram os sinais públicos americanos em 1974",
      paragraph:
        "O DOT adotou o mesmo princípio dois anos depois: forma como informação universal.",
    },
    page7: {
      intro: "Aicher também criou Waldi, a mascote dachshund dos Jogos de 1972.",
      statement: "Sistema e símbolo",
      attribution:
        "Do pictograma abstrato ao mascote afetivo — a mesma mente ordenou os dois.",
    },
    page8Text: {
      title: "Por que o sistema de Aicher ainda é referência 50 anos depois",
      paragraph: "Quando o grid é o argumento, o tempo não apaga o design.",
    },
    page9Closing: {
      closing: "O design que prescinde de idioma é o que dura mais.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Olympic_games_1972_pictogramms_olympic_station_0877_a.jpg/500px-Olympic_games_1972_pictogramms_olympic_station_0877_a.jpg",
      alt: "Painel de pictogramas olímpicos de Otl Aicher na estação olímpica de Munich 1972",
      label: "Aicher pictograms Olympic station",
      referenceUrl: "https://en.wikipedia.org/wiki/Otl_Aicher",
    },
    {
      page: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Olympic_games_1972_basketball_0501.JPG/330px-Olympic_games_1972_basketball_0501.JPG",
      alt: "Pictograma de basquete dos Jogos Olímpicos de Munich 1972 — Otl Aicher",
      label: "Aicher basketball pictogram",
      referenceUrl: "https://en.wikipedia.org/wiki/Otl_Aicher",
    },
    {
      page: 6,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Olympic_parc_munich_pictogramms_ice_rink_0651.JPG/960px-Olympic_parc_munich_pictogramms_ice_rink_0651.JPG",
      alt: "Pictogramas de Otl Aicher no parque olímpico de Munich — pista de gelo",
      label: "Aicher pictograms ice rink",
      referenceUrl: "https://en.wikipedia.org/wiki/Otl_Aicher",
    },
    {
      page: 10,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Piktogramm_Schwimmer_an_der_Muenchner_Olympia_Schwimmhalle.JPG/250px-Piktogramm_Schwimmer_an_der_Muenchner_Olympia_Schwimmhalle.JPG",
      alt: "Pictograma do nadador de Otl Aicher aplicado na fachada da piscina olímpica de Munich",
      label: "Aicher swimmer pictogram pool",
      referenceUrl: "https://en.wikipedia.org/wiki/Otl_Aicher",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Painel completo de pictogramas na estação — escala como argumento de sistema.",
    },
    {
      page: "02",
      title: "Context",
      body: "O pictograma individual de basquete mostra a lógica do grid em um único elemento.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca o pictograma de ícone funcional para gramática visual de sistema.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Quatro qualidades do sistema condensam o que tornou os pictogramas universais.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "O parque olímpico com pictogramas mostra o sistema em contexto de uso real e escala.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "A influência nos DOT pictograms ancora a tese em impacto histórico real e mensurável.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre por que o grid como argumento garante longevidade ao design.",
    },
    {
      page: "08",
      title: "Closing",
      body: "O pictograma do nadador aplicado na piscina real fecha com a prova de que o sistema dura.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes são do Wikimedia Commons — licença livre de uso.",
  ],
  imageSources: [
    "Page 1 — painel completo de pictogramas na estação olímpica.",
    "Page 2 — pictograma individual de basquete.",
    "Page 5 — pictogramas no parque olímpico, pista de gelo.",
    "Page 8 — pictograma do nadador na fachada da piscina olímpica.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura de sistema visual se mantém: painel completo na capa, detalhe individual no contexto, escala urbana no apoio e aplicação arquitetônica no fechamento.",
}

export const tipografiaCustomizadaMarcaPost: SocialPostPageData = {
  title: "Licenciar ou encomendar — essa escolha define a voz da marca",
  description:
    "Apple (SF Pro), NYT, IBM (IBM Plex), Philadelphia Art Museum (Fairmount Serif). Quando a tipografia deixa de ser ferramenta e passa a ser a voz mais silenciosa e mais duradoura de diferenciação.",
  approvedTopic:
    "Tipografia customizada como posição de marca — o que separa licenciar de encomendar, e por que as marcas que desenham sua própria letra escolheram não soar como ninguém.",
  copy: {
    page1: {
      title: "Licenciar ou encomendar — essa escolha define a voz da marca",
      subtitle:
        "Apple, NYT, IBM, PhAM. Quando a tipografia é decisão estratégica, não estética.",
    },
    page2: {
      title: "A tipografia customizada deixou de ser privilégio de grandes orçamentos",
      paragraph:
        "Hoje é uma das decisões de identidade mais claras que uma marca pode tomar.",
    },
    page3: {
      intro: "Fonte licenciada é vocabulário compartilhado.",
      statement: "Fonte customizada é voz própria",
      attribution:
        "Quando você encomendar uma tipografia, está comprando algo que nenhum concorrente pode ter.",
    },
    page4: {
      highlight: "Quem fez esse movimento",
      bullets: [
        "Apple — SF Pro",
        "NYT — NYT Fonts",
        "IBM — IBM Plex",
        "PhAM — Fairmount Serif",
      ],
    },
    page6: {
      title: "O Fairmount Serif da Philadelphia Art Museum é o caso mais recente",
      paragraph:
        "Ryan Bugden. Brooklyn. 2025. Uma tipografia que carrega 150 anos de história e uma decisão de futuro.",
    },
    page7: {
      intro: "A tipografia é a voz antes da palavra.",
      statement: "Tipo como posição",
      attribution:
        "Antes de ler o conteúdo, você já sentiu a personalidade da marca.",
    },
    page8Text: {
      title: "Por que a tipografia customizada é investimento de identidade, não de estética",
      paragraph:
        "A fonte que nenhum outro tem é o sinal mais silencioso e mais duradouro de diferenciação.",
    },
    page9Closing: {
      closing: "A marca que encomendar sua tipografia escolheu não soar como ninguém.",
    },
  },
  images: [
    {
      page: 1,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-BPO-review-logo-branding-Cafe_Poster_Wall.1.jpg",
      alt: "Aplicação do Fairmount Serif em pôsteres no Philadelphia Art Museum — tipografia como identidade de marca",
      label: "PhAM Fairmount Serif posters",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
    {
      page: 2,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-BPO-review-logo-branding-.png",
      alt: "Sistema de identidade do Philadelphia Art Museum — Fairmount Serif em todas as aplicações",
      label: "PhAM identity system",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
    {
      page: 6,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-BPO-review-logo-branding-exhibition-design-Timeline.jpg",
      alt: "Design de exposição do Philadelphia Art Museum — tipografia Fairmount Serif em timeline histórica",
      label: "PhAM exhibition timeline",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
    {
      page: 10,
      src: "https://bpando.org/wp-content/uploads/philadelphia-art-museum-gretel-merch-logo-branding-bpo-review.png",
      alt: "Merchandising do Philadelphia Art Museum com Fairmount Serif — tipografia em produto físico",
      label: "PhAM merchandise type",
      referenceUrl:
        "https://bpando.org/2025/10/21/institutional-branding-philadelphia-art-museum-by-gretel/",
    },
  ],
  contentMapping: [
    {
      page: "01",
      title: "Cover Hook",
      body: "Os pôsteres do PhAM abrem com Fairmount Serif em escala — tipografia como argumento visual.",
    },
    {
      page: "02",
      title: "Context",
      body: "O sistema de identidade completo ancora a tese em decisão real e abrangente de marca.",
    },
    {
      page: "03",
      title: "Core Thesis",
      body: "A tese desloca a tipografia de escolha visual para posição estratégica de voz própria.",
    },
    {
      page: "04",
      title: "Proof Stack",
      body: "Quatro marcas que fizeram o movimento provam que encomendar tipografia é padrão de mercado.",
    },
    {
      page: "05",
      title: "Second Context",
      body: "A timeline de exposição mostra a tipografia em contexto narrativo e histórico dentro do museu.",
    },
    {
      page: "06",
      title: "Second Thesis",
      body: "Fairmount Serif como caso mais recente ancora a tese em decisão contemporânea e verificável.",
    },
    {
      page: "07",
      title: "Text Synthesis",
      body: "Síntese sobre o que uma tipografia customizada comunica antes de qualquer conteúdo.",
    },
    {
      page: "08",
      title: "Closing",
      body: "O merchandising fecha com a tipografia em produto físico — identidade que sai da tela.",
    },
  ],
  imageRules: [
    "Este post usa 4 imagens aprovadas.",
    "As imagens entram nas páginas 1, 2, 5 e 8 do carrossel.",
    "Todas as fontes vêm do BP&O, cobertura especializada do rebrand do Philadelphia Art Museum.",
  ],
  imageSources: [
    "Page 1 — Fairmount Serif em pôsteres do PhAM.",
    "Page 2 — sistema de identidade completo com tipografia.",
    "Page 5 — design de exposição com tipografia em timeline.",
    "Page 8 — merchandising com Fairmount Serif em produto físico.",
  ],
  practicalDemoSubtitle: "Post aprovado — formato 9:16 com narrativa em 8 páginas",
  adaptationNotes:
    "No 4:5, a leitura de tipografia como voz se mantém: pôsteres na capa, sistema completo no contexto, exposição no apoio e produto físico no fechamento.",
}
