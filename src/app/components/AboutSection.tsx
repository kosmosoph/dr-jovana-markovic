"use client";

import { Award, GraduationCap, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-secondary to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: "url(/imports/IMG_5810.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>

          <div>
            <h2 className="font-sans text-4xl md:text-5xl text-foreground mb-6">
              dr Jovana Marković
            </h2>
            {/* <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Doktor stomatologije sa specijalizacijom iz estetske medicine, posvećena pružanju
              vrhunskih tretmana koji kombinuju medicinsku ekspertizu sa umetničkim pristupom lepoti.
            </p> */}
             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
         Doktorka stomatologije i stručnjak za estetsku i anti-age medicinu. Verujem u umerenost i suptilne korekcije – one koje vam vraćaju svežinu, a ističu ono najlepše na vašem licu.</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground mb-1">Obrazovanje</h3>
                  <p className="text-muted-foreground">
                    Stomatološki fakultet, Univerzitet u Beogradu
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground mb-1">Dodatne edukacije</h3>
                  <p className="text-muted-foreground">
                    Estetska medicina i anti-aging tretmani
                  </p>
                </div>
              </div> */}

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-foreground mb-1">Etika</h3>
                  <p className="text-muted-foreground">
                    Prirodan izgled i individualan pristup svakom pacijentu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
