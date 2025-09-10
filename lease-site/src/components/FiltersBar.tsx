"use client";

import { useState } from "react";

export type Filters = {
  bairro: string;
  tipo: string;
  quartos: string;
  preco: string;
  vagas: string;
  pet: boolean;
};

export default function FiltersBar({ onChange }: { onChange: (f: Filters) => void }) {
  const [f, setF] = useState<Filters>({ bairro: "", tipo: "", quartos: "", preco: "", vagas: "", pet: false });
  function update<K extends keyof Filters>(k: K, v: Filters[K]) {
    const next = { ...f, [k]: v };
    setF(next); onChange(next);
  }
  return (
    <form className="search-grid" onSubmit={(e)=> e.preventDefault()} aria-label="Filtros de imóveis">
      <label className="sr-only" htmlFor="fb-bairro">Bairro</label>
      <input id="fb-bairro" className="search-field focus-ring" placeholder="Bairro" value={f.bairro} onChange={(e)=>update('bairro', e.target.value)} />
      <label className="sr-only" htmlFor="fb-tipo">Tipo</label>
      <select id="fb-tipo" className="search-select focus-ring" value={f.tipo} onChange={(e)=>update('tipo', e.target.value)}>
        <option value="">Tipo</option>
        <option>Apartamento</option>
        <option>Casa</option>
        <option>Sala/Loja</option>
      </select>
      <label className="sr-only" htmlFor="fb-quartos">Quartos</label>
      <select id="fb-quartos" className="search-select focus-ring" value={f.quartos} onChange={(e)=>update('quartos', e.target.value)}>
        <option value="">Quartos</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
      </select>
      <label className="sr-only" htmlFor="fb-preco">Preço</label>
      <select id="fb-preco" className="search-select focus-ring" value={f.preco} onChange={(e)=>update('preco', e.target.value)}>
        <option value="">Faixa de preço</option>
        <option>Até R$ 2.000</option>
        <option>R$ 2.000 a R$ 4.000</option>
        <option>R$ 4.000+</option>
      </select>
      <label className="sr-only" htmlFor="fb-vagas">Vagas</label>
      <select id="fb-vagas" className="search-select focus-ring" value={f.vagas} onChange={(e)=>update('vagas', e.target.value)}>
        <option value="">Vagas</option>
        <option>1</option>
        <option>2</option>
        <option>3+</option>
      </select>
      <label className="search-checkbox focus-ring" htmlFor="fb-pet">
        <input id="fb-pet" type="checkbox" checked={f.pet} onChange={(e)=>update('pet', e.target.checked)} /> Pet-friendly
      </label>
    </form>
  );
}


