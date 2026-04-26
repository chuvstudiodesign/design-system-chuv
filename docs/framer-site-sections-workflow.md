# Framer Site Sections Workflow

Este documento registra o padrão oficial para levar as `Site Sections` do style guide para o Framer da Chuv Studio.

Leitura complementar obrigatória para sections reutilizáveis:

- `docs/site-sections-publishing-standard.md`

## Fonte de verdade

- O style guide local é a fonte de verdade para estrutura, tokens e hierarquia visual.
- Antes de criar ou editar qualquer section no Framer, revisar:
  - `Design Tokens`
  - `Section System`
  - `Card System`
  - a page específica em `src/app/styleguide/site-sections/*`

## Hierarquia obrigatória

Toda section no Framer deve respeitar esta ordem:

1. `Base Canvas`
2. `Section Container`
3. `Conteúdo interno`
4. `Cards`

Tradução prática:

- A página inteira fica sobre `background` branco puro.
- Cada section é um bloco independente em cinza claro.
- Todo conteúdo real vive dentro da section.
- Cards vivem dentro da section, nunca direto no canvas branco.

## Padrão estrutural da Home no Framer

Na página principal do Framer, editar sempre o breakpoint primário `Desktop`.

Estrutura atual:

- `Desktop`
- `Main`
- sections empilhadas em auto-layout com `gap: 10px`

Regras da `Main`:

- auto-layout vertical
- `gap: 10px`
- sections com largura relativa
- a ordem visual das sections deve ser mantida por reordenação dentro de `Main`

## Padrão oficial de section

Toda nova section inserida na Home deve seguir:

- usar `Frame`/section nativa do Framer
- `width: 100%`
- `maxWidth: 2000px`
- `borderRadius: 10px`
- `backgroundColor: #efefef`
- altura variável conforme o conteúdo
- inserção dentro de `Main`

Regras adicionais:

- o fundo geral continua branco
- o radius de `10px` pertence à section, não aos cards
- o espaçamento entre sections na Home permanece `10px`
- preferir reaproveitar uma section existente do Framer como base quando ela já tiver a mecânica certa, como carrossel, navegação ou estrutura interna

## Padrão oficial de card

Todo card dentro de uma section deve seguir o `Card System`:

- `background: #f9f9f9`
- `border: 1px solid #ffffff`
- `borderRadius: 0px`
- `padding: 45px`
- proporção definida pela necessidade da section

Para cards quadrados como `Soluções completas`:

- usar `531px x 531px`
- manter layout interno alinhado à esquerda
- manter iconografia e textos dentro do mesmo card, sem criar sub-cards

## Fluxo recomendado para implementar uma section do style guide no Framer

1. Ler a page da section no style guide local.
2. Confirmar tokens e hierarquia em `Section System` e `Card System`.
3. Confirmar se a section também precisa virar página publicada em `/sections/...` para embed.
4. Se for reutilizável, fechar primeiro o fluxo de publicação no design system antes da etapa de embed no Framer.
5. Abrir a página alvo do Framer e localizar `Main`.
6. Identificar se já existe uma section com estrutura compatível para reaproveitamento.
7. Duplicar essa section quando houver carrossel, botões ou comportamento estrutural já resolvido.
8. Reordenar a cópia para a posição final correta dentro de `Main`.
9. Substituir título, conteúdo e cards sem quebrar o padrão do Framer.
10. Preservar fundo branco da página, `gap: 10px` entre sections, `#efefef` na section e `#f9f9f9` nos cards.

## Regra adicional para sections publicadas via embed

Quando a entrega envolver embed:

- a section deve existir como página limpa no Vercel
- a rota publicada deve responder com altura dinâmica correta
- o embed final deve apontar para a URL de produção, não para preview temporária
- a entrega deve incluir o HTML completo do iframe já pronto para colar

## Regra específica para carrosséis

Quando a section do style guide usar carrossel:

- priorizar o carrossel já existente no Framer, se houver um compatível
- reaproveitar `NavigationBox` e os botões de navegação quando essa base já estiver pronta
- trocar apenas os itens internos do carrossel
- evitar reconstruir do zero se a mecânica visual já estiver resolvida no projeto

## Implementação atual: Soluções completas

Para `Soluções completas` na Home do Framer:

- duplicar a section `Segurança e Benefícios`
- posicionar a nova section abaixo de `Segurança e Benefícios`
- manter antes de `Contato`
- preservar o carrossel e os botões laterais existentes
- trocar o título para `Soluções completas`
- manter o título no mesmo posicionamento do bloco original:
  - `top: 85px`
  - `left: 85px`
- manter o padrão visual do título usado na Home
- substituir os itens de imagem do `NavigationBox` pelos cards da section do style guide

Conteúdo dos cards de `Soluções completas`:

1. `Olhar macro do design da sua empresa`
2. `Consultoria de design e tecnologia`
3. `Escala de produção`
4. `Reconhecimento de possibilidades`
5. `Aplicação multidisciplinar`
6. `Entrega rápida e disponibilidade`

## Observações sobre tecnologia

- O style guide local usa `Next.js`, `TypeScript` e `React`.
- O Framer também trabalha com `React` e `TypeScript` em `Code Components`.
- Mesmo assim, ao transportar uma section para o Framer, a prioridade não é copiar o código JSX literalmente.
- A prioridade é reconstruir a section com os primitives e layouts nativos do Framer, preservando tokens, hierarquia e comportamento visual.
