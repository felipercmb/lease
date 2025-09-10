export type Property = {
  id: string;
  title: string;
  bairro: string;
  metragem: number;
  quartos: number;
  vagas: number;
  preco: number;
  tags?: string[];
  img: string;
  createdAt: string;
};

export const MOCK_PROPERTIES: Property[] = [
  { id: "1", title: "Apto alto padrão com varanda gourmet", bairro: "Setor Bueno", metragem: 92, quartos: 3, vagas: 2, preco: 4200, tags: ["Pet", "Varanda", "Sol da manhã"], img: "/next.svg", createdAt: "2025-09-01" },
  { id: "2", title: "Studio mobiliado próximo ao Vaca Brava", bairro: "Setor Oeste", metragem: 36, quartos: 1, vagas: 1, preco: 2100, tags: ["Mobiliado", "Academia"], img: "/window.svg", createdAt: "2025-09-05" },
  { id: "3", title: "Casa térrea com quintal amplo", bairro: "Alto da Glória", metragem: 180, quartos: 3, vagas: 2, preco: 3500, tags: ["Pet", "Quintal"], img: "/globe.svg", createdAt: "2025-08-28" },
  { id: "4", title: "Apto 2q próximo ao Flamboyant", bairro: "Jardim Goiás", metragem: 64, quartos: 2, vagas: 1, preco: 2600, tags: ["Varanda"], img: "/next.svg", createdAt: "2025-09-03" },
  { id: "5", title: "Sala comercial Setor Marista", bairro: "Setor Marista", metragem: 48, quartos: 0, vagas: 1, preco: 3000, tags: ["Comercial"], img: "/file.svg", createdAt: "2025-09-07" },
];

export function moeda(v: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);
}

export type SortKey = "recentes" | "menor" | "maior";
export function sortData(data: Property[], key: SortKey): Property[] {
  const arr = [...data];
  if (key === "menor") return arr.sort((a,b)=> a.preco - b.preco);
  if (key === "maior") return arr.sort((a,b)=> b.preco - a.preco);
  return arr.sort((a,b)=> +new Date(b.createdAt) - +new Date(a.createdAt));
}

const FAV_KEY = "lease:favs";
export function getFavs(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); } catch { return []; }
}
export function toggleFav(id: string) {
  if (typeof window === "undefined") return;
  const curr = new Set(getFavs());
  curr.has(id) ? curr.delete(id) : curr.add(id);
  localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(curr)));
}
export function isFav(id: string): boolean { return getFavs().includes(id); }




