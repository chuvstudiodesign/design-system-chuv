# Site Sections Publishing Standard

Este documento registra o padrão oficial para qualquer `site section` reutilizável criada dentro do design system.

## Regra principal

Toda `site section` reutilizável deve existir em duas formas ao mesmo tempo:

1. Uma página editável no style guide em `src/app/styleguide/site-sections/...`
2. Uma página publicada e limpa em `src/app/sections/...`, pronta para embed via Vercel

Criar só a versão do style guide não fecha o trabalho.

## O que toda nova site section precisa entregar

- `content.json` local com o copy da section
- renderização do copy com `EditableText`
- página no style guide seguindo o `site-sections` layout
- versão publicada como rota limpa em `/sections/...`
- uso do shell publicado com auto height reporting para iframe responsivo
- URL final de produção em `https://design-system-chuv.vercel.app/...`
- snippet HTML de embed pronto para colar

## Regra de embed responsivo

Toda página publicada em `/sections/...` que será embedada precisa:

- medir a altura do conteúdo real da section
- enviar essa altura por `postMessage`
- evitar que `html` ou `body` imponham altura mínima artificial
- crescer e reduzir corretamente quando o conteúdo muda no desktop ou no mobile

Isso vale para accordion, carousel com altura variável, reflow de mobile e qualquer mudança de layout que altere a altura final da section.

## Fluxo obrigatório de implementação

1. Criar ou editar a source page em `src/app/styleguide/site-sections/...`
2. Garantir o padrão de edição inline com `content.json` + `EditableText`
3. Criar a versão publicada em `/sections/...`
4. Registrar a rota publicada em `src/lib/published-sections.ts` quando aplicável
5. Garantir que a página publicada use o shell de embed responsivo do projeto
6. Rodar `npm run build`
7. Fazer push para GitHub
8. Publicar em produção no Vercel
9. Entregar a URL de produção e o HTML de embed final

## Formato de entrega quando alguém pedir um embed

Ao pedir o embed de uma site section publicada, a resposta final deve incluir:

- a URL de produção da section
- o HTML completo do iframe
- o script de resize com o `path` correto da rota

Não entregar link parcial, URL de preview temporária ou snippet incompleto quando o pedido for por embed final.

## Escopo desta regra

Esta regra vale para `site-sections`.

Ela não obriga automaticamente:

- páginas genéricas do style guide
- páginas de componentes
- páginas de documentação
- páginas internas de experimento

## Referências do projeto

- `AGENTS.md`
- `docs/framer-site-sections-workflow.md`
- `src/components/published-sections/auto-height-reporter.tsx`
- `src/lib/published-sections.ts`
