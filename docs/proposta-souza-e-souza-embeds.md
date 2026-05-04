# Proposta Souza e Souza - Embeds Oficiais

Este arquivo registra a entrega oficial de embed para as sections publicadas de `proposta-souza-e-souza`.

## Fonte de verdade

- Rotas publicadas: `src/lib/published-sections.ts`
- Shell publicado com auto-height: `src/components/published-sections/proposta-souza-e-souza.tsx`
- Resize reporter: `src/components/published-sections/auto-height-reporter.tsx`
- Helper oficial de embed: `getPublishedSectionEmbedCode()` em `src/lib/published-sections.ts`

## Regras deste pacote

- usar URL de producao em `https://design-system-chuv.vercel.app`
- usar o script com `data.path === expectedPath`
- nao substituir por variantes manuais com `e.source === iframe.contentWindow`
- manter `height:10px` inicial no iframe e deixar o resize ajustar
- usar o `.txt` como artefato pronto para colar

## Arquivo final para uso

- [proposta-souza-e-souza-embeds.txt](/Users/lucaszerlotini/Documents/design-system-chuv/proposta-souza-e-souza-embeds.txt)

## URLs publicadas

1. `/sections/proposta-souza-e-souza/nossas-areas-de-atuacao`
2. `/sections/proposta-souza-e-souza/objetivos-do-projeto`
3. `/sections/proposta-souza-e-souza/escopo-do-projeto`
4. `/sections/proposta-souza-e-souza/frente-1-design-system-e-identidade-digital`
5. `/sections/proposta-souza-e-souza/frente-2-atualizacao-e-modernizacao-do-site`
6. `/sections/proposta-souza-e-souza/frente-3-automacao-inteligente-de-atendimento`
7. `/sections/proposta-souza-e-souza/frente-4-consulta-processual-via-ia`
8. `/sections/proposta-souza-e-souza/frente-5-seo-e-presenca-no-google`
9. `/sections/proposta-souza-e-souza/frente-6-aplicacao-da-marca-nos-espacos-fisicos`
10. `/sections/proposta-souza-e-souza/comparativo-dos-pacotes`
11. `/sections/proposta-souza-e-souza/pacotes-e-investimento`

## Observacao

Na data desta verificacao, as rotas ainda estavam retornando `404` em producao. O pacote de embed abaixo ja esta pronto, mas a confirmacao final de funcionamento depende do proximo deploy da Vercel publicar essas routes.
