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
      { name: "Buttons", href: "/styleguide/components/buttons" },
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
];
