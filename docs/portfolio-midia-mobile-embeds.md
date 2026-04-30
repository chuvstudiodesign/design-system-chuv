# Portfolio Midia Mobile - Embeds Oficiais

Este arquivo registra a entrega oficial de embed para as sections publicadas de `portfolio-midia-mobile`.

## Fonte de verdade

- Rotas publicadas: `src/lib/published-sections.ts`
- Shell publicado com auto-height: `src/components/published-sections/portfolio-midia-mobile.tsx`
- Resize reporter: `src/components/published-sections/auto-height-reporter.tsx`
- Helper oficial de embed: `getPublishedSectionEmbedCode()` em `src/lib/published-sections.ts`

## Regras deste pacote

- usar URL de producao em `https://design-system-chuv.vercel.app`
- usar o script com `data.path === expectedPath`
- nao substituir por variantes manuais com `e.source === iframe.contentWindow`
- manter `height:10px` inicial no iframe e deixar o resize ajustar
- usar o `.txt` como artefato pronto para colar

## Arquivo final para uso

- [portfolio-midia-mobile-embeds.txt](/Users/lucaszerlotini/Documents/design-system-chuv/portfolio-midia-mobile-embeds.txt)

## URLs publicadas

1. `/sections/portfolio-midia-mobile/disciplinas`
2. `/sections/portfolio-midia-mobile/midias-atuais`
3. `/sections/portfolio-midia-mobile/valorizacao-produto`
4. `/sections/portfolio-midia-mobile/feed-harmonico`
5. `/sections/portfolio-midia-mobile/reels-virais`
6. `/sections/portfolio-midia-mobile/vfx`
7. `/sections/portfolio-midia-mobile/motion-2d-3d`
8. `/sections/portfolio-midia-mobile/posts-virais`
9. `/sections/portfolio-midia-mobile/posts-com-ia`
10. `/sections/portfolio-midia-mobile/seguimento-identidade-visual`
11. `/sections/portfolio-midia-mobile/seguimento-identidade-diversas-areas`

## Observacao

O erro anterior veio de um snippet fora do padrao do projeto. O padrao correto neste repositório e o mesmo usado como referencia para `proposta-sigo`: pagina publicada limpa + `AutoHeightReporter` + script de embed com `expectedPath`.
