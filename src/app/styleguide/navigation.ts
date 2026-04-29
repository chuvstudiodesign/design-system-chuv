import { PORTFOLIO_MIDIA_PUBLISHED_SECTIONS, PROPOSTA_KITO_PUBLISHED_SECTIONS, PROPOSTA_SIGO_PUBLISHED_SECTIONS, PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS, PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS, type PublishedSectionLink } from "@/lib/published-sections";

export interface NavItem {
  name: string;
  href: string;
  publishedLinks?: readonly PublishedSectionLink[];
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
      { name: "Ícones", href: "/styleguide/components/icons" },
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
    ],
  },
  {
    title: "Site Sections",
    items: [
      { name: "Soluções Completas", href: "/styleguide/site-sections/solucoes-completas" },
      {
        name: "Portfólio de Mídia",
        href: "/styleguide/site-sections/portfolio-midia",
        publishedLinks: PORTFOLIO_MIDIA_PUBLISHED_SECTIONS,
      },
      {
        name: "Proposta Comercial — Sigo",
        href: "/styleguide/site-sections/proposta-sigo",
        publishedLinks: PROPOSTA_SIGO_PUBLISHED_SECTIONS,
      },
      {
        name: "Proposta Website — Sigo",
        href: "/styleguide/site-sections/proposta-website-sigo",
        publishedLinks: PROPOSTA_WEBSITE_SIGO_PUBLISHED_SECTIONS,
      },
      {
        name: "Proposta Website — Black Bells",
        href: "/styleguide/site-sections/proposta-website-blackbells",
        publishedLinks: PROPOSTA_WEBSITE_BLACKBELLS_PUBLISHED_SECTIONS,
      },
      {
        name: "Proposta Comercial — Black Bells",
        href: "/styleguide/site-sections/proposta-kito",
        publishedLinks: PROPOSTA_KITO_PUBLISHED_SECTIONS,
      },
    ],
  },
];
