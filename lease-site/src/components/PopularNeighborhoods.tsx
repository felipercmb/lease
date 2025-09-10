export default function PopularNeighborhoods({ onPick }: { onPick: (bairro: string) => void }) {
  const bairros = ["Setor Bueno", "Setor Marista", "Setor Oeste", "Jardim Goiás", "Alto da Glória"];
  return (
    <section className="container" style={{paddingBlock:'2rem'}} aria-labelledby="bairros">
      <h2 id="bairros" style={{fontFamily:'var(--font-heading)', fontSize:'1.5rem', marginBottom:'.75rem'}}>Bairros populares</h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:'.5rem'}}>
        {bairros.map(b => (
          <button key={b} className="chip focus-ring" onClick={()=>onPick(b)} aria-label={`Filtrar por ${b}`}>{b}</button>
        ))}
      </div>
    </section>
  );
}


