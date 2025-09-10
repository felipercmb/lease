export default function FAQ() {
  const items = [
    { q: "Quais documentos preciso?", a: "Documento com foto, comprovante de renda e cadastro básico." },
    { q: "Aceita pet?", a: "Vários imóveis são pet-friendly. Use o filtro 'Pet-friendly'." },
    { q: "Garantias?", a: "Trabalhamos com seguro-fiança e outras modalidades." },
  ];
  return (
    <section className="container" style={{paddingBlock:'2rem'}} aria-labelledby="faq">
      <h2 id="faq" style={{fontFamily:'var(--font-heading)', fontSize:'1.75rem', marginBottom:'1rem'}}>Dúvidas frequentes</h2>
      <div className="stack">
        {items.map((i, idx) => (
          <details key={idx} className="faq reveal">
            <summary>
              {i.q}
              <span className="icon" aria-hidden>+</span>
            </summary>
            <div style={{marginTop:'.5rem', color:'var(--muted)'}}>{i.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}


