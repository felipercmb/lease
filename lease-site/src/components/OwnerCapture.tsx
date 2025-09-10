"use client";

import { useState } from "react";

export default function OwnerCapture() {
  const [msg, setMsg] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg("Recebemos seus dados. Em breve entraremos em contato.");
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <section className="container" style={{paddingBlock:'2rem'}} aria-labelledby="cap-prop">
      <h2 id="cap-prop" style={{fontFamily:'var(--font-heading)', fontSize:'1.75rem', marginBottom:'1rem'}}>Para proprietário</h2>
      <div className="owner-panel reveal">
        <ul className="stack" aria-label="Vantagens">
          <li>• Fotos profissionais</li>
          <li>• Vistoria detalhada</li>
          <li>• Seguro-fiança e análise de risco</li>
          <li>• Gestão completa da locação</li>
        </ul>
        <form className="stack" onSubmit={onSubmit} aria-label="Formulário de captação">
          <label>
            <span className="sr-only">Nome</span>
            <input required className="search-field focus-ring" placeholder="Nome" aria-label="Nome" />
          </label>
          <label>
            <span className="sr-only">Telefone</span>
            <input required className="search-field focus-ring" placeholder="Telefone" inputMode="tel" aria-label="Telefone" />
          </label>
          <label>
            <span className="sr-only">Endereço</span>
            <input className="search-field focus-ring" placeholder="Endereço (opcional)" aria-label="Endereço" />
          </label>
          <label>
            <span className="sr-only">Mensagem</span>
            <textarea className="search-field focus-ring" placeholder="Mensagem" aria-label="Mensagem" rows={3} />
          </label>
          <button className="btn btn-primary" type="submit">Quero anunciar meu imóvel</button>
          {msg ? <p role="status" style={{color:'var(--brand)'}}>{msg}</p> : null}
        </form>
      </div>
    </section>
  );
}


