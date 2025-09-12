"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import FiltersBar, { type Filters } from "@/components/FiltersBar";
import PropertyCard from "@/components/PropertyCard";
import { MOCK_PROPERTIES, sortData, type Property } from "@/lib/content";

function paramsToFilters(params: URLSearchParams): Filters {
  return {
    bairro: params.get("bairro") || "",
    tipo: params.get("tipo") || "",
    quartos: params.get("quartos") || "",
    preco: params.get("preco") || "",
    vagas: params.get("vagas") || "",
    pet: params.get("pet") === "1",
  };
}

function filtersToParams(f: Filters): URLSearchParams {
  const p = new URLSearchParams();
  if (f.bairro) p.set("bairro", f.bairro);
  if (f.tipo) p.set("tipo", f.tipo);
  if (f.quartos) p.set("quartos", f.quartos);
  if (f.preco) p.set("preco", f.preco);
  if (f.vagas) p.set("vagas", f.vagas);
  if (f.pet) p.set("pet", "1");
  return p;
}

export default function PageImoveis() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState<"recentes" | "menor" | "maior">((searchParams.get("ord") as any) || "recentes");
  const [filters, setFilters] = useState<Filters>(paramsToFilters(searchParams));
  const [loading, setLoading] = useState(false);

  // Sync URL when filters change
  function onChangeFilters(next: Filters) {
    setFilters(next);
    const p = filtersToParams(next);
    if (order) p.set("ord", order);
    router.replace(`/imoveis?${p.toString()}`);
  }

  // Sync URL when order changes
  function onChangeOrder(value: "recentes" | "menor" | "maior") {
    setOrder(value);
    const p = filtersToParams(filters);
    p.set("ord", value);
    router.replace(`/imoveis?${p.toString()}`);
  }

  // Compute filtered/sorted data
  const data = useMemo(() => {
    let d: Property[] = sortData(MOCK_PROPERTIES, order);
    const f = filters;
    if (f.bairro) d = d.filter(i => i.bairro.toLowerCase().includes(f.bairro.toLowerCase()));
    if (f.tipo) d = d.filter(i => (f.tipo === "Sala/Loja" ? i.quartos === 0 : i.quartos > 0));
    if (f.quartos) d = d.filter(i => i.quartos >= parseInt(f.quartos));
    if (f.vagas) d = d.filter(i => i.vagas >= parseInt(f.vagas));
    if (f.preco === "Até R$ 2.000") d = d.filter(i => i.preco <= 2000);
    if (f.preco === "R$ 2.000 a R$ 4.000") d = d.filter(i => i.preco > 2000 && i.preco <= 4000);
    if (f.preco === "R$ 4.000+") d = d.filter(i => i.preco > 4000);
    if (f.pet) d = d.filter(i => i.tags?.includes("Pet"));
    return d;
  }, [filters, order]);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [filters, order]);

  return (
    <main className="container" style={{paddingBlock: '1.5rem'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'.75rem', marginBottom:'1rem'}}>
        <h1 style={{fontFamily:'var(--font-heading)', fontSize:'1.7rem'}}>Imóveis para alugar</h1>
        <label className="sr-only" htmlFor="ord">Ordenação</label>
        <select id="ord" className="search-select focus-ring" value={order} onChange={(e)=> onChangeOrder(e.target.value as any)} aria-label="Ordenar">
          <option value="recentes">Recentes</option>
          <option value="menor">Menor preço</option>
          <option value="maior">Maior preço</option>
        </select>
      </div>

      <div className="search-card" style={{marginBottom:'1rem'}}>
        <FiltersBar value={filters} onChange={onChangeFilters} />
      </div>

      <div className="grid-imm">
        {loading ? Array.from({length:6}).map((_,i)=> (
          <div key={i} className="card skeleton" style={{height:260, borderRadius:'var(--radius)'}} />
        )) : data.map(item => (
          <PropertyCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}


