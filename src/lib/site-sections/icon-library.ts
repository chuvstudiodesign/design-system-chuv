const FIGMA_ASSET_BASE = "https://www.figma.com/api/mcp/asset"

const figmaAsset = (id: string) => `${FIGMA_ASSET_BASE}/${id}`

export interface IconLibraryEntry {
  id: string
  name: string
  src: string
  fw: number
  fh: number
}

export const ICON_COLOR = "#4820CC"

export const SITE_SECTION_ICON_COLOR_FILTER = "none"

export const ICON_LIBRARY: IconLibraryEntry[] = [
  { id: "calendar", name: "Calendar", src: figmaAsset("557b4eeb-8553-43e3-a5d3-5643ef6d6e53"), fw: 374.1, fh: 348.3 },
  { id: "selo-qualidade", name: "Selo Qualidade", src: figmaAsset("3506677a-f595-449f-9998-c015008fb300"), fw: 228, fh: 349.1 },
  { id: "foco", name: "Foco", src: figmaAsset("e2f3595c-f972-4713-8ffd-363cc92b9220"), fw: 373, fh: 382 },
  { id: "predio-comercial", name: "Prédio Comercial", src: figmaAsset("9203b752-7fcf-4d60-babc-44acb3b8dc14"), fw: 287, fh: 352 },
  { id: "balao-texto", name: "Balão de Texto", src: figmaAsset("f328747a-d229-4ac7-a069-45bbc37ecc81"), fw: 373, fh: 351.9 },
  { id: "casa", name: "Casa", src: figmaAsset("c962b6e4-4898-479a-8c2b-19ef0442299a"), fw: 322.6, fh: 351.3 },
  { id: "pasta", name: "Pasta", src: figmaAsset("525c5216-4103-4969-a475-410d225679a3"), fw: 373, fh: 302 },
  { id: "sino", name: "Sino", src: figmaAsset("f6efa9a2-24af-4603-ae3a-7d7287763491"), fw: 344, fh: 360 },
  { id: "camera", name: "Câmera", src: figmaAsset("d8acc6ac-fc6f-48af-92e4-afe0bb96ea27"), fw: 373, fh: 301 },
  { id: "cadeado", name: "Cadeado", src: figmaAsset("bd1fe837-6bde-483e-b609-48544422d578"), fw: 287, fh: 350 },
  { id: "imagem", name: "Imagem", src: figmaAsset("93c990ee-e505-449b-b716-775685d8340c"), fw: 373, fh: 297 },
  { id: "texto-esquerda", name: "Texto Esquerda", src: figmaAsset("e93538ab-9988-4d29-8eb6-3731389b7b08"), fw: 373, fh: 297 },
  { id: "texto-direita", name: "Texto Direita", src: figmaAsset("241b1786-d2be-4aac-91cf-cd47353b6f27"), fw: 373, fh: 297 },
  { id: "email", name: "Email", src: figmaAsset("d0f0a150-08b4-4a71-b707-62eda68a3ed5"), fw: 373, fh: 274 },
  { id: "olho", name: "Olho", src: figmaAsset("92cfd10f-c4cd-43b8-b65f-939e3f2b5f43"), fw: 373, fh: 302 },
  { id: "grafico", name: "Gráfico / Crescimento", src: figmaAsset("70571e5d-21ff-43f3-97e6-564ed27b9489"), fw: 373, fh: 338 },
  { id: "lupa", name: "Lupa", src: figmaAsset("c6d71b85-cda0-4ca7-93a1-0cc3dad270ee"), fw: 373, fh: 338 },
  { id: "developer", name: "Developer", src: figmaAsset("ec8a0cf5-a1ac-4d94-8e7e-65feeaaa0f09"), fw: 373, fh: 297 },
  { id: "document", name: "Document", src: figmaAsset("97f00123-6642-4eba-83cc-a3ecc05aeda6"), fw: 373, fh: 296 },
  { id: "instagram", name: "Instagram", src: figmaAsset("409e1539-0ec8-4b02-ac01-052fcc1a3373"), fw: 373, fh: 350 },
  { id: "celular", name: "Celular", src: figmaAsset("6bebd866-15db-4f50-a8d9-9b7fda9cb430"), fw: 219, fh: 328 },
  { id: "filmadora", name: "Filmadora", src: figmaAsset("9dceed72-4cfe-4fb5-a273-e615ea4e4ce9"), fw: 453, fh: 296 },
  { id: "video-2", name: "Video 2", src: figmaAsset("ff5d991e-d117-4082-b750-5631a238fbf4"), fw: 373, fh: 315 },
  { id: "3d", name: "3D", src: figmaAsset("ce2aa220-c660-4790-891c-e62e9147603e"), fw: 412.1, fh: 410 },
  { id: "3d2", name: "3D2", src: figmaAsset("628049c6-5a8c-47c8-b93a-828e6e0c7aa9"), fw: 373, fh: 338 },
  { id: "design-system", name: "Design System", src: figmaAsset("3c1ac1c4-1233-4d4c-9dc7-7fa4cb6663e0"), fw: 373, fh: 350 },
  { id: "luz", name: "Luz", src: figmaAsset("91508b25-bfa0-442e-8671-99ca50f1022f"), fw: 344, fh: 356.5 },
  { id: "link", name: "Link", src: figmaAsset("5313f938-1b60-44a5-b0e8-d2fe523e969f"), fw: 373, fh: 294 },
  { id: "equipe", name: "Equipe", src: figmaAsset("6312acca-8753-489a-b1c6-8c88b8edd722"), fw: 373, fh: 343 },
  { id: "type", name: "Type", src: figmaAsset("374bd59f-b1b6-4e21-a69b-f275ad5614d7"), fw: 334, fh: 304 },
  { id: "motion-2d", name: "Motion 2D", src: figmaAsset("1117abca-9d8f-4e9e-96ec-4499f168d3fb"), fw: 453, fh: 296 },
  { id: "motion-3d", name: "Motion 3D", src: figmaAsset("fb9066c9-1086-4b23-bd24-2c3100e17d48"), fw: 412, fh: 410 },
  { id: "edicao-video", name: "Edição de vídeo", src: figmaAsset("40a3e2a6-9bb5-4bc3-8b05-e53de7bd0808"), fw: 373, fh: 301 },
  { id: "design-grafico", name: "Design gráfico", src: figmaAsset("d566a719-d696-45c4-b2f0-1f698dfa909d"), fw: 373, fh: 297 },
  { id: "type-design", name: "Type design", src: figmaAsset("e0dbcc69-2b1b-4cb1-be77-d9f29480743a"), fw: 334, fh: 304 },
  { id: "web-design", name: "Web design", src: figmaAsset("16d1066a-95e0-4a91-a068-d616c7f90225"), fw: 373, fh: 294 },
  { id: "development", name: "Development", src: figmaAsset("1aad00ad-b3c0-4755-b9e3-7ab94536742d"), fw: 373, fh: 297 },
  { id: "ia-aplicada", name: "IA aplicada", src: figmaAsset("1696bebe-c4a3-4bde-bc84-038e5ddd50e9"), fw: 344, fh: 357 },
  { id: "motion-oficial", name: "Motion Oficial", src: figmaAsset("5d8ebcb0-9414-488e-aee8-84803216d55d"), fw: 373, fh: 333 },
  { id: "3d-light", name: "3D Light", src: figmaAsset("5c371133-2c89-45ef-ac48-e6a2271190c1"), fw: 412.3, fh: 367 },
  { id: "3d-flat", name: "3D Flat", src: figmaAsset("0ef4d8f5-7552-46f8-94f0-1bff1027c570"), fw: 393, fh: 309 },
  { id: "3d-motion", name: "3D Motion", src: figmaAsset("313e4c5b-087a-4214-b607-68d8560113ac"), fw: 410.7, fh: 322 },
  { id: "video-light", name: "Video Light", src: figmaAsset("f8ef451f-1094-484e-af2e-1268ce7b98a2"), fw: 453, fh: 270 },
  { id: "site", name: "Site", src: figmaAsset("257fb67d-25d0-4274-aeff-1e0c48bf0d43"), fw: 393.5, fh: 249.1 },
]

export const ICON_LIBRARY_BY_ID = Object.fromEntries(
  ICON_LIBRARY.map((icon) => [icon.id, icon])
) as Record<string, IconLibraryEntry>
