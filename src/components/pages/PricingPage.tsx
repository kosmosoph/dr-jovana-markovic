"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PriceItem {
  category: string;
  items: {
    name: string;
    price: string;
  }[];
}

const estetikaServices: PriceItem[] = [
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

const stomatologijaServices: PriceItem[] = [
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

export function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Nazad na početnu
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-sans text-4xl md:text-5xl text-foreground mb-4">
            Cenovnik
          </h1>
          <p className="text-lg text-muted-foreground">
            Transparentne cene za sve naše tretmane
          </p>
        </div>

        <div className="mb-20">
          <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-8 text-center">
            Estetika
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {estetikaServices.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
                  <h3 className="text-xl">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b border-border last:border-b-0"
                      >
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-primary whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-sans text-3xl md:text-4xl text-foreground mb-8 text-center">
            Stomatologija
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stomatologijaServices.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6">
                  <h3 className="text-xl">{category.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b border-border last:border-b-0"
                      >
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-primary whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-foreground text-xl mb-4">Napomena</h3>
          <p className="text-muted-foreground">
            Cene su informativnog karaktera. Konačna cena se određuje nakon
            konsultacije sa doktorom, u zavisnosti od individualnih potreba
            pacijenta. Sve cene uključuju besplatnu konsultaciju.
          </p>
        </div>
      </div>
    </div>
  );
}
