export interface NavItem {
  name: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
      { name: "Section System", href: "/styleguide/section-system" },
      { name: "Card System", href: "/styleguide/card-system" },
    ],
  },
  {
    title: "Components",
    items: [
      { name: "Accordion", href: "/styleguide/components/accordion" },
      { name: "Alert", href: "/styleguide/components/alert" },
      { name: "Alert Dialog", href: "/styleguide/components/alert-dialog" },
      { name: "Aspect Ratio", href: "/styleguide/components/aspect-ratio" },
      { name: "Badge", href: "/styleguide/components/badge" },
      { name: "Button Group", href: "/styleguide/components/button-group" },
      { name: "Buttons", href: "/styleguide/components/buttons" },
      { name: "Calendar", href: "/styleguide/components/calendar" },
      { name: "Carousel", href: "/styleguide/components/carousel" },
      { name: "Checkbox", href: "/styleguide/components/checkbox" },
      { name: "Hover Card", href: "/styleguide/components/hover-card" },
      { name: "Tabs", href: "/styleguide/components/tabs" },
      { name: "Toggle", href: "/styleguide/components/toggle" },
      { name: "Toggle Group", href: "/styleguide/components/toggle-group" },
      { name: "Tooltip", href: "/styleguide/components/tooltip" },
      { name: "Typography", href: "/styleguide/components/typography" },
    ],
  },
  {
    title: "Social Media",
    items: [
      { name: "Vertical Post · 5 Pages", href: "/styleguide/social-media/vertical-post" },
      { name: "Liquid Glass", href: "/styleguide/social-media/liquid-glass" },
      {
        name: "Produtos que ensinam sem tutorial",
        href: "/styleguide/social-media/produtos-que-ensinam-sem-tutorial",
      },
      { name: "Visual Post Creation", href: "/styleguide/social-media/visual-post-creation" },
      {
        name: "IA e autoria visual",
        href: "/styleguide/social-media/ia-e-autoria-visual",
      },
      {
        name: "Motion como linguagem",
        href: "/styleguide/social-media/motion-como-linguagem",
      },
      {
        name: "O designer que não sabe dizer não",
        href: "/styleguide/social-media/o-designer-que-nao-sabe-dizer-nao",
      },
      {
        name: "MacBook Neo — Cores e Segmentação",
        href: "/styleguide/social-media/macbook-neo-cores-e-segmentacao",
      },
      {
        name: "LoveFrom + Ferrari — 5 anos, um interior",
        href: "/styleguide/social-media/lovefrom-ferrari-5-anos",
      },
      {
        name: "Spatial UI tem gramática própria",
        href: "/styleguide/social-media/spatial-ui-gramatica-propria",
      },
      {
        name: "John Ternus — Novo CEO da Apple",
        href: "/styleguide/social-media/john-ternus-novo-ceo-apple",
      },
      {
        name: "Vignelli — Mapa do Metrô de NY",
        href: "/styleguide/social-media/vignelli-mapa-metro-ny",
      },
      {
        name: "Amazônia — Primeira Marca Oficial",
        href: "/styleguide/social-media/amazonia-marca-oficial",
      },
      {
        name: "Steve Lemay — VP Human Interface Design",
        href: "/styleguide/social-media/steve-lemay-vp-hid-apple",
      },
      {
        name: "Molly Anderson — VP Industrial Design",
        href: "/styleguide/social-media/molly-anderson-vp-industrial-design",
      },
      {
        name: "Apple 2030 virou linguagem de produto",
        href: "/styleguide/social-media/apple-2030-linguagem-de-produto",
      },
      {
        name: "Meta redesenha o wearable",
        href: "/styleguide/social-media/meta-wearable-uso-real",
      },
      {
        name: "Figma Weave — sistema visual",
        href: "/styleguide/social-media/figma-weave-sistema-visual",
      },
      {
        name: "Liquid Glass — matéria de interface",
        href: "/styleguide/social-media/liquid-glass-materia-interface",
      },
      {
        name: "Craft na era da IA",
        href: "/styleguide/social-media/craft-na-era-da-ia",
      },
      {
        name: "MacBook Neo — baixo carbono visível",
        href: "/styleguide/social-media/macbook-neo-baixo-carbono-visivel",
      },
      {
        name: "Meta Optics — conforto como interface",
        href: "/styleguide/social-media/meta-optics-conforto-interface",
      },
      {
        name: "Meta Optics — uso contínuo",
        href: "/styleguide/social-media/meta-optics-uso-continuo",
      },
      {
        name: "Figma Weave — workflow em vez de prompt",
        href: "/styleguide/social-media/figma-weave-workflow-em-vez-de-prompt",
      },
      {
        name: "Vignelli — clareza acima da geografia",
        href: "/styleguide/social-media/vignelli-clareza-acima-da-geografia",
      },
      {
        name: "Edição vale mais que geração",
        href: "/styleguide/social-media/edicao-vale-mais-que-geracao",
      },
      {
        name: "Audi Concept C — Clarity",
        href: "/styleguide/social-media/audi-concept-c-clarity",
      },
      {
        name: "Google Gemini Redesign 2026",
        href: "/styleguide/social-media/google-gemini-redesign-2026",
      },
      {
        name: "iOS 26 — Liquid Glass Interface",
        href: "/styleguide/social-media/ios-26-liquid-glass-interface",
      },
      {
        name: "iPod 2001 — Produto Coerente",
        href: "/styleguide/social-media/ipod-2001-produto-coerente",
      },
      {
        name: "Material como Linguagem de Marca",
        href: "/styleguide/social-media/material-como-linguagem-de-marca",
      },
      {
        name: "Nike Football Rebrand 2026",
        href: "/styleguide/social-media/nike-football-rebrand-2026",
      },
      {
        name: "OTL Aicher — Munique 1972",
        href: "/styleguide/social-media/otl-aicher-munich-1972",
      },
      {
        name: "Philadelphia Art Museum Rebrand",
        href: "/styleguide/social-media/philadelphia-art-museum-rebrand",
      },
      {
        name: "Samsung Design — Act of Love",
        href: "/styleguide/social-media/samsung-design-act-of-love",
      },
      {
        name: "Tipografia Customizada como Posição",
        href: "/styleguide/social-media/tipografia-customizada-como-posicao",
      },
    ],
  },
  {
    title: "Site Sections",
    items: [
      { name: "Soluções Completas", href: "/styleguide/site-sections/solucoes-completas" },
    ],
  },
];
