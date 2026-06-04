import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

interface ContactSectionProps {
  onBookNow?: () => void;
}

export function ContactSection({ onBookNow }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Zakažite svoj tretman ili nas kontaktirajte za više informacija
          </p>
          {onBookNow && (
            <button
              onClick={onBookNow}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Zakaži tretman
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-foreground mb-1">Adresa</h3>
                <p className="text-muted-foreground">
                  Blagoja Parovića 42<br />
                  Beograd, Srbija
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-foreground mb-1">Radno vreme</h3>
                <p className="text-muted-foreground">
                  Ponedeljak - Petak: 11:00 - 19:00<br />
                  Subota: Zakazivanje<br />
                  Nedelja: Zatvoreno
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-foreground mb-1">Telefon</h3>
                <a href="tel:+381112345678" className="text-muted-foreground hover:text-primary transition-colors">
                  +381 63 110 3972
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-foreground mb-1">Email</h3>
                <a href="mailto:info@drjovanamarkovic.rs" className="text-muted-foreground hover:text-primary transition-colors">
                  ordinacija.drmarkovic@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-foreground mb-6 text-xl">Pratite nas</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/dr.jovana.markovic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="text-white" size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61585950676999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="text-white" size={24} />
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/zj1RoeBbvAkKktUr8"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center hover:from-primary/20 hover:to-primary/10 transition-all group"
            >
              <div className="text-center">
                <MapPin className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" size={48} />
                <p className="text-sm text-muted-foreground">Vidi na mapi</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-border pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2026 dr Jovana Marković. Sva prava zadržana.</p>
            <p className="text-sm">Stomatologija i estetska medicina</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
