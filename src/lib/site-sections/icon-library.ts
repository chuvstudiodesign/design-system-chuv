export interface IconLibraryEntry {
  id: string
  name: string
  src: string
  fw: number
  fh: number
}

export const ICON_COLOR = "#5628E8"

export const SITE_SECTION_ICON_COLOR_FILTER = "none"

export const ICON_LIBRARY: IconLibraryEntry[] = [
  { id: "calendar",          name: "Calendar",                src: "/icons/calendar.svg",        fw: 374.1,  fh: 348.3  },
  { id: "selo-qualidade",    name: "Selo Qualidade",          src: "/icons/selo-qualidade.svg",  fw: 228,    fh: 349.1  },
  { id: "foco",              name: "Foco",                    src: "/icons/foco.svg",            fw: 373,    fh: 382    },
  { id: "predio-comercial",  name: "Prédio Comercial",        src: "/icons/predio-comercial.svg",fw: 287,    fh: 352    },
  { id: "balao-texto",       name: "Balão de Texto",          src: "/icons/balao-texto.svg",     fw: 373,    fh: 351.9  },
  { id: "casa",              name: "Casa",                    src: "/icons/casa.svg",            fw: 322.6,  fh: 351.3  },
  { id: "pasta",             name: "Pasta",                   src: "/icons/pasta.svg",           fw: 373,    fh: 302    },
  { id: "sino",              name: "Sino",                    src: "/icons/sino.svg",            fw: 344,    fh: 360    },
  { id: "camera",            name: "Câmera",                  src: "/icons/camera.svg",          fw: 373,    fh: 301    },
  { id: "cadeado",           name: "Cadeado",                 src: "/icons/cadeado.svg",         fw: 287,    fh: 350    },
  { id: "imagem",            name: "Imagem",                  src: "/icons/imagem.svg",          fw: 373,    fh: 297    },
  { id: "texto-esquerda",    name: "Texto Esquerda",          src: "/icons/texto-esquerda.svg",  fw: 373,    fh: 297    },
  { id: "texto-direita",     name: "Texto Direita",           src: "/icons/texto-direita.svg",   fw: 373,    fh: 297    },
  { id: "email",             name: "Email",                   src: "/icons/email.svg",           fw: 373,    fh: 274    },
  { id: "olho",              name: "Olho",                    src: "/icons/olho.svg",            fw: 373,    fh: 302    },
  { id: "grafico",           name: "Gráfico / Crescimento",   src: "/icons/grafico.svg",         fw: 373,    fh: 338    },
  { id: "lupa",              name: "Lupa",                    src: "/icons/lupa.svg",            fw: 373,    fh: 338    },
  { id: "developer",         name: "Developer",               src: "/icons/developer.svg",       fw: 373,    fh: 297    },
  { id: "document",          name: "Document",                src: "/icons/document.svg",        fw: 373,    fh: 296    },
  { id: "instagram",         name: "Instagram",               src: "/icons/instagram.svg",       fw: 373,    fh: 350    },
  { id: "celular",           name: "Celular",                 src: "/icons/celular.svg",         fw: 219,    fh: 328    },
  { id: "filmadora",         name: "Filmadora",               src: "/icons/filmadora.svg",       fw: 453,    fh: 270    },
  { id: "video-2",           name: "Video 2",                 src: "/icons/video-2.svg",         fw: 373,    fh: 315    },
  { id: "3d",                name: "3D",                      src: "/icons/3d.svg",              fw: 412.3,  fh: 410    },
  { id: "3d2",               name: "3D2",                     src: "/icons/3d2.svg",             fw: 373,    fh: 338    },
  { id: "design-system",     name: "Design System",           src: "/icons/design-system.svg",   fw: 373,    fh: 350    },
  { id: "luz",               name: "Luz",                     src: "/icons/luz.svg",             fw: 344,    fh: 356.5  },
  { id: "link",              name: "Link",                    src: "/icons/link.svg",            fw: 373,    fh: 294    },
  { id: "equipe",            name: "Equipe",                  src: "/icons/equipe.svg",          fw: 373,    fh: 343    },
  { id: "type",              name: "Type",                    src: "/icons/type.svg",            fw: 334,    fh: 304    },
  { id: "motion-oficial",    name: "Motion Oficial",          src: "/icons/motion-oficial.svg",  fw: 373,    fh: 333    },
  { id: "3d-light",          name: "3D Light",                src: "/icons/3d-light.svg",        fw: 412.3,  fh: 367    },
  { id: "3d-flat",           name: "3D Flat",                 src: "/icons/3d-flat.svg",         fw: 393,    fh: 309    },
  { id: "3d-motion",         name: "3D Motion",               src: "/icons/3d-motion.svg",       fw: 410.7,  fh: 322    },
  { id: "video-light",       name: "Video Light",             src: "/icons/video-light.svg",     fw: 453,    fh: 270    },
  { id: "site",              name: "Site",                    src: "/icons/site.svg",            fw: 393.5,  fh: 249.1  },
  { id: "infinito",          name: "Infinito / Ilimitado",    src: "/icons/infinito.svg",        fw: 373,    fh: 294    },
  { id: "infinito-flat",     name: "Infinito / Ilimitado Flat",src: "/icons/infinito-flat.svg", fw: 348,    fh: 145    },
  // Aliases para disciplinas (apontam para o ícone mais próximo existente no Figma)
  { id: "motion-2d",         name: "Motion 2D",               src: "/icons/filmadora.svg",       fw: 453,    fh: 270    },
  { id: "motion-3d",         name: "Motion 3D",               src: "/icons/3d.svg",              fw: 412.3,  fh: 410    },
  { id: "edicao-video",      name: "Edição de vídeo",         src: "/icons/camera.svg",          fw: 373,    fh: 301    },
  { id: "design-grafico",    name: "Design gráfico",          src: "/icons/texto-esquerda.svg",  fw: 373,    fh: 297    },
  { id: "type-design",       name: "Type design",             src: "/icons/type.svg",            fw: 334,    fh: 304    },
  { id: "web-design",        name: "Web design",              src: "/icons/link.svg",            fw: 373,    fh: 294    },
  { id: "development",       name: "Development",             src: "/icons/developer.svg",       fw: 373,    fh: 297    },
  { id: "ia-aplicada",       name: "IA aplicada",             src: "/icons/luz.svg",             fw: 344,    fh: 356.5  },
]

export const ICON_LIBRARY_BY_ID = Object.fromEntries(
  ICON_LIBRARY.map((icon) => [icon.id, icon])
) as Record<string, IconLibraryEntry>
