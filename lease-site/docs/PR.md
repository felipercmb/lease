# Landing de Locação — Goiânia (LEASE IMÓVEIS)

Antes/Depois (placeholders):
- Desktop: before-desktop.png → after-desktop.png
- Mobile: before-mobile.png → after-mobile.png

Resumo das mudanças
- UI baseada em tokens (styles/tokens.css), utilitários (ui/utilities.css) e componentes (ui/components.css)
- Header sticky com blur, underline animado e dark mode por :has(#toggle-dark)
- Hero com filtros e cartão com glow cônico
- Lista de imóveis com cards, ordenação e skeleton loading
- Seções institucionais: Como alugar, Captação de proprietário, FAQ, Bairros populares (Goiânia)
- Acessibilidade/SEO: linguagem pt-BR, hierarchy de headings, aria/*, JSON-LD LocalBusiness
- Microinterações: underline-from-left, reveal via IntersectionObserver

Como trocar a paleta/tema
1. Edite `src/styles/tokens.css` nas variáveis: `--brand`, `--brand-2`, `--accent`, `--bg`, `--card`, etc.
2. Ajuste também o bloco `html:has(#toggle-dark:checked)` para a versão escura.

Checklist de acessibilidade e métricas
- [x] Contraste AA nas superfícies principais
- [x] `:focus-visible` com outline consistente (var(--outline))
- [x] Labels/aria em inputs e botões
- [x] H1 único por página e hierarquia coerente de H2/H3
- [x] Open Graph e Twitter Card
- [x] JSON-LD (LocalBusiness / Goiânia)
- [x] Lazy-loading de imagens (Next Image já otimiza; `loading="lazy"` usado nos cards)
- [x] Lighthouse alvo: Perf ≥ 85, A11y ≥ 90, SEO ≥ 90

Pronto para dados reais
- O mock em `src/lib/content.ts` pode ser substituído por uma chamada a API futuramente.
- As funções `sortData` e favoritos via `localStorage` já estão isoladas.


