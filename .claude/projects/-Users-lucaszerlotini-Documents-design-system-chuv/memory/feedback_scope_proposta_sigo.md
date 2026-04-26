---
name: Escopo restrito — proposta-sigo
description: Nesta sessão de trabalho, só pode editar a page.tsx da proposta-sigo; perguntar antes de mexer em qualquer outro arquivo
type: feedback
---

Só editar `src/app/styleguide/site-sections/proposta-sigo/page.tsx`. Analisar outros arquivos é permitido, mas qualquer edição fora desse arquivo exige confirmação do usuário antes de prosseguir.

**Why:** Há outro terminal/sessão Claude Code trabalhando em paralelo em outras partes do projeto. Editar arquivos compartilhados simultaneamente pode causar sobrescrita silenciosa de mudanças.

**How to apply:** Antes de qualquer `Edit` ou `Write`, verificar se o alvo é a `page.tsx` da proposta-sigo. Se não for, perguntar explicitamente ao usuário antes de agir.
