"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import FiltersBar, { type Filters } from "@/components/FiltersBar";
import PropertyCard from "@/components/PropertyCard";
import Steps from "@/components/Steps";
import OwnerCapture from "@/components/OwnerCapture";
import FAQ from "@/components/FAQ";
import PopularNeighborhoods from "@/components/PopularNeighborhoods";
import { MOCK_PROPERTIES, sortData, type Property } from "@/lib/content";

export default function Home() {
  const [filters, setFilters] = useState<Filters | null>(null);
  const [order, setOrder] = useState<"recentes" | "menor" | "maior">("recentes");
  const [loading, setLoading] = useState(false);

  const data = useMemo(() => {
    let d: Property[] = sortData(MOCK_PROPERTIES, order);
    if (!filters) return d;
    if (filters.bairro) d = d.filter(i => i.bairro.toLowerCase().includes(filters.bairro.toLowerCase()));
    if (filters.tipo) d = d.filter(i => (filters.tipo === "Sala/Loja" ? i.quartos === 0 : i.quartos > 0));
    if (filters.quartos) d = d.filter(i => i.quartos >= parseInt(filters.quartos));
    if (filters.vagas) d = d.filter(i => i.vagas >= parseInt(filters.vagas));
    if (filters.preco === "Até R$ 2.000") d = d.filter(i => i.preco <= 2000);
    if (filters.preco === "R$ 2.000 a R$ 4.000") d = d.filter(i => i.preco > 2000 && i.preco <= 4000);
    if (filters.preco === "R$ 4.000+") d = d.filter(i => i.preco > 4000);
    if (filters.pet) d = d.filter(i => i.tags?.includes("Pet"));
    return d;
  }, [filters, order]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [filters, order]);
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="stack-lg">
            <h1 className="hero-title">Aluguel sem dor de cabeça em Goiânia.</h1>
            <p className="hero-sub">Imóveis verificados, processo transparente e atendimento próximo nos bairros mais desejados: Setor Bueno, Marista, Oeste, Jardim Goiás e Alto da Glória.</p>
            <div className="stack" style={{display:'flex', gap: '.75rem', flexWrap:'wrap'}}>
              <Link href="#lista" className="btn btn-primary">Ver imóveis para alugar</Link>
              <a className="btn" href="https://wa.me/5562999999999?text=Quero%20alugar%20um%20im%C3%B3vel%20com%20a%20LEASE&utm_source=site&utm_medium=hero&utm_campaign=cta_whatsapp" target="_blank" rel="noopener noreferrer">Falar com um especialista</a>
            </div>
          </div>
          <div className="search-card" role="search" aria-label="Buscar imóveis">
            <form className="search-grid" onSubmit={(e)=>{e.preventDefault(); const el=document.getElementById('lista'); if(el) el.scrollIntoView({behavior:'smooth'});}}>
              <label className="sr-only" htmlFor="f-bairro">Bairro</label>
              <input id="f-bairro" className="search-field focus-ring" placeholder="Bairro (ex.: Setor Marista)" />

              <label className="sr-only" htmlFor="f-tipo">Tipo</label>
              <select id="f-tipo" className="search-select focus-ring" defaultValue="">
                <option value="">Tipo</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Sala/Loja</option>
              </select>

              <label className="sr-only" htmlFor="f-quartos">Quartos</label>
              <select id="f-quartos" className="search-select focus-ring" defaultValue="">
                <option value="">Quartos</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
              </select>

              <label className="sr-only" htmlFor="f-preco">Faixa de preço</label>
              <select id="f-preco" className="search-select focus-ring" defaultValue="">
                <option value="">Faixa de preço</option>
                <option>Até R$ 2.000</option>
                <option>R$ 2.000 a R$ 4.000</option>
                <option>R$ 4.000+</option>
              </select>

              <label className="sr-only" htmlFor="f-vagas">Vagas</label>
              <select id="f-vagas" className="search-select focus-ring" defaultValue="">
                <option value="">Vagas</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>

              <label className="search-checkbox focus-ring" htmlFor="f-pet">
                <input id="f-pet" type="checkbox" aria-label="Aceita pet" /> Pet-friendly
              </label>

              <button className="btn btn-primary" style={{gridColumn:'1 / -1'}} aria-label="Buscar imóveis">Buscar imóveis</button>
            </form>
          </div>
        </div>
      </section>
      <section id="lista" className="container" style={{paddingBlock: '2rem'}} aria-labelledby="lista-imoveis">
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'.75rem', marginBottom:'1rem'}}>
          <h2 id="lista-imoveis" style={{fontFamily:'var(--font-heading)', fontSize:'1.5rem'}}>Imóveis em Goiânia</h2>
          <label className="sr-only" htmlFor="ord">Ordenação</label>
          <select id="ord" className="search-select focus-ring" value={order} onChange={(e)=> setOrder(e.target.value as any)} aria-label="Ordenar">
            <option value="recentes">Recentes</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
        </div>
        <div className="search-card" style={{marginBottom:'1rem'}}>
          <FiltersBar onChange={setFilters} />
        </div>
        <PopularNeighborhoods onPick={(b)=> setFilters({ ...(filters||{ bairro:"", tipo:"", quartos:"", preco:"", vagas:"", pet:false }), bairro: b })} />
        <div className="grid-imm">
          {loading ? Array.from({length:6}).map((_,i)=> (
            <div key={i} className="card skeleton" style={{height:260, borderRadius:'var(--radius)'}} />
          )) : data.map(item => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <Steps />
      <OwnerCapture />
      <FAQ />
    </main>
  );
}
