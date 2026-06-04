export interface PriceItem {
  category: string;
  items: {
    name: string;
    price: string;
  }[];
}

export const esteticsServices: PriceItem[] = [
  {
    category: "Injekcione procedure",
    items: [
      { name: "Botkos", price: "od 200 EUR" },
      { name: "Hijaluronski fileri (1ml)", price: "300 EUR" },
      { name: "Kolagen stimulatori", price: "od 450 EUR" },
    ],
  },
  {
    category: "Dubinska hidratacija i regeneracija",
    items: [
      { name: "Biorevitalizacija", price: "od 200 EUR" },
      { name: "Mezoterapija lica i tela", price: "od 80 EUR" },
    ],
  },
  {
    category: "Tekstura kože",
    items: [
      { name: "Derampen", price: "od 80 EUR" },
      { name: "Hemijski piling", price: "80 EUR" },
    ],
  },
  {
    category: "Konturisanje lica i tela",
    items: [{ name: "Lipoliza", price: "od 80 EUR" }],
  },
];

export const dentistServices: PriceItem[] = [
  {
    category: "Bolesti zuba",
    items: [
      { name: "Kompozitna plomba (bela)", price: "od 3.000 RSD" },
      { name: "Kompozitna nadogradnja", price: "5.000 RSD" },
      { name: "Endodontski tretman (vađenje živca)", price: "2.500 RSD" },
      { name: "Aplikovanje leka", price: "1.500 RSD" },
      { name: "Definitivno punjenje kanala (po kanalu)", price: "1.500 RSD" },
      { name: "Drenaža zuba (prva pomoć)", price: "2.000 RSD" },
    ],
  },
  {
    category: "Parodontologija",
    items: [
      { name: "Uklanjanje čvrstih i mekih naslaga", price: "3.000 RSD" },
      { name: "Peskiranje", price: "2.500 RSD" },
    ],
  },
  {
    category: "Dečija i preventivna stomatologija",
    items: [
      {
        name: "Uklanjanje mekih naslaga i instrukcije za održavanje oralne higijene",
        price: "2.000 RSD",
      },
      { name: "Zalivanje fisura", price: "1.500 RSD" },
      { name: "Fluorizacija zuba", price: "3.000 RSD" },
      { name: "Plomba na mlečnim zubima", price: "2.500 RSD" },
      { name: "Vađenje mlečnog zuba", price: "1.500 RSD" },
      { name: "Splint za bruksizam", price: "5.000 RSD" },
    ],
  },
  {
    category: "Protetika",
    items: [
      { name: "Metalokeramička krunica", price: "12.000 RSD" },
      { name: "Bezmetalna keramička krunica", price: "24.000 RSD" },
      { name: "Livena nadogradnja", price: "3.600 RSD" },
      { name: "FRC nadogradnja", price: "5.000 RSD" },
      { name: "Privremena kruna", price: "3.600 RSD" },
      { name: "Totalna proteza (po vilici)", price: "36.000 RSD" },
      {
        name: "Parcijalna skeletirana proteza (vizil proteza, po vilici)",
        price: "54.000 RSD",
      },
    ],
  },
  {
    category: "Oralna hirurgija",
    items: [
      { name: "Vađenje zuba", price: "3.000 RSD" },
      { name: "Komplikovano vađenje zuba", price: "6.000 RSD" },
    ],
  },
  {
    category: "Ortopedija vilica",
    items: [
      { name: "Pregled lekara specijaliste", price: "3.600 RSD" },
      { name: "Mobilni aparat (po vilici)", price: "30.000 RSD" },
      { name: "Fiksni aparat (po vilici)", price: "96.000 RSD" },
      { name: "Retencione folije (po vilici)", price: "6.000 RSD" },
      { name: "Folije za ispravljanje zuba", price: "12.000 RSD" },
    ],
  },
  {
    category: "Estetska stomatologija",
    items: [
      { name: "Ordinacijsko izbeljivanje zuba", price: "18.000 RSD" },
      { name: "Kućno izbeljivanje zuba (po vilici)", price: "12.000 RSD" },
      { name: "Izbeljivanje avitalnog zuba", price: "5.000 RSD" },
    ],
  },
];