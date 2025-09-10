export default function Steps() {
  const items = [
    { n: 1, t: "Encontre", d: "Filtre por bairro, tipo e preço" },
    { n: 2, t: "Visite", d: "Agende com nosso time" },
    { n: 3, t: "Aprove", d: "Análise ágil e digital" },
    { n: 4, t: "Mude", d: "Assinatura e entrega das chaves" },
  ];
  return (
    <section className="container" style={{paddingBlock:'2rem'}} aria-labelledby="como-alugar">
      <h2 id="como-alugar" style={{fontFamily:'var(--font-heading)', fontSize:'1.75rem', marginBottom:'1rem'}}>Como alugar</h2>
      <div className="steps">
        {items.map(i => (
          <div key={i.n} className="step-card reveal">
            <div className="chip" aria-hidden>{String(i.n).padStart(2,'0')}</div>
            <h3 style={{fontWeight:600}}>{i.t}</h3>
            <p style={{color:'var(--muted)'}}>{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


