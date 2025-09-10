export default function Footer() {
  return (
    <footer className="site-footer mt-16">
      <div className="container" style={{padding: '2rem 1rem'}}>
        <div className="grid-imm" style={{gridTemplateColumns: 'repeat(4, minmax(0,1fr))'}}>
          <div className="stack" style={{gridColumn: 'span 2'}}>
            <p className="brand" style={{fontSize:'1rem'}}><span className="mark" aria-hidden /> LEASE IMÓVEIS</p>
            <p className="text-sm" style={{color: 'var(--muted)'}}>Locação residencial e comercial com transparência.</p>
            <a className="btn btn-primary" href="https://wa.me/5562999999999?text=Quero%20alugar%20um%20im%C3%B3vel%20com%20a%20LEASE&utm_source=site&utm_medium=footer&utm_campaign=cta_whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
              Falar no WhatsApp
            </a>
          </div>
          <nav>
            <ul className="stack text-sm">
              <li><a href="/imoveis" className="underline-link">Imóveis</a></li>
              <li><a href="/proprietario" className="underline-link">Para proprietário</a></li>
              <li><a href="/sobre" className="underline-link">Sobre</a></li>
              <li><a href="/contato" className="underline-link">Contato</a></li>
            </ul>
          </nav>
          <div className="text-sm" style={{color: 'var(--muted)'}}>
            <p>Endereço: Rua 9, Setor Marista, Goiânia–GO</p>
            <p>Atendimento: Seg a Sex, 9h–18h</p>
            <p>CRECI 000000</p>
            <p><a className="underline-link" href="#">Política de privacidade</a> • <a className="underline-link" href="#">Termos</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}




