"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { esteticsServices, dentistServices } from "@/data/pricing";

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
            {esteticsServices.map((category) => (
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
            {dentistServices.map((category) => (
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
