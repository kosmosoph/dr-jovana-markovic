"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { X, ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface Treatment {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  benefits: string[];
  whyChoose: string[];
  faqs: FAQ[];
}

const treatments: Treatment[] = [
  {
    id: "fileri",
    title: "Hijaluronski fileri",
    description: "Popunjavanje i volumizacija lica",
    details: "Hijaluronski fileri su standard u estetskoj medicini za vraćanje volumena, ublažavanje bora i suptilno modeliranje kontura lica. Bilo da želite senzualnije usne, naglašene jagodice ili definisanu liniju brade, naša misija je umerenost.",
    icon: "💧",
    benefits: [
      "Povećanje i hidratacija usana (postizanje prirodnog volumena i simetrije)",
      "Oblikovanje jagodica i obraza (vraćanje izgubljenog volumena)",
      "Definicija brade i donje vilice (jawline konturisanje)",
      "Popunjavanje bora (nazolabijalne i marionetske bore)"
    ],
    whyChoose: [
      "Potpuna bezbednost: Koristimo isključivo vrhunske, sertifikovane filere na bazi hijaluronske kiseline koja je prirodni sastojak vašeg organizma.",
      "Bezbolna procedura: Tretman se radi pod lokalnom ili topikalnom (anestetik krema) anestezijom, što ga čini maksimalno komfornim.",
      "Brz oporavak: Rezultati su vidljivi odmah, a nakon tretmana se možete odmah vratiti svojim svakodnevnim aktivnostima."
    ],
    faqs: [
      {
        question: "Koliko traju rezultati?",
        answer: "U zavisnosti od regije i vašeg metabolizma, efekat filera traje od 6 do 12 meseci, nakon čega se hijaluron bezbedno i prirodno razgrađuje."
      },
      {
        question: "Da li boli?",
        answer: "Tretman je minimalno invazivan. Zahvaljujući anesteziji, pacijenti najčešće osećaju samo blag pritisak."
      }
    ]
  },
  {
    id: "botoks",
    title: "Botoks",
    description: "Relaksacija mišića i redukcija bora",
    details: "Botulinum toksin (Botoks) je najpopularniji svetski tretman za prevenciju i uklanjanje mimičkih bora. Naš pristup se bazira na preciznom doziranju koje opušta mišiće, ali zadržava vašu prirodnu ekspresiju. Rezultat je osveženo, zategnuto i vidno odmoreno lice, uz potpunu prirodnost pokreta.",
    icon: "✨",
    benefits: [
      "Uklanjanje bora na čelu i između obrva: Uspešno briše bore i namršten izgled.",
      "Ublažavanje bora oko očiju: Osvežava pogled i vraća sjaj zoni oko očiju.",
      "Lečenje bruksizma (škrgutanja zubima): Primenom botoksa u maseterične mišiće uspešno se opušta vilica, smanjuje bol i štite zubi od trošenja.",
      "Rešavanje problema prekomernog znojenja (hiperhidroza): Efikasno blokira rad znojnih žlezda pod pazuhom, na dlanovima ili stopalima."
    ],
    whyChoose: [
      "Premijum preparati: Koristimo isključivo originalne, klinički ispitane i odobrene toksine vrhunskog kvaliteta.",
      "Brza i komforna procedura: Tretman traje do 30 minuta, izvodi se veoma tankim iglicama i praktično je bezbolan.",
      "Prirodan prelaz: Efekat nastupa postepeno u roku od 3 do 7 dana, a pun efekat dostiže se nakon dve nedelje."
    ],
    faqs: [
      {
        question: "Koliko traju rezultati botoksa?",
        answer: "Efekat tretmana traje u proseku od 4 do 6 meseci. Nakon tog perioda, mišići se potpuno prirodno vraćaju u prvobitno stanje, a tretman se može bezbedno ponoviti."
      },
      {
        question: "Da li ću izgubiti ekspresiju lica?",
        answer: "Apsolutno ne. Radimo sa umerenim dozama kako bismo ublažili bore, a ne blokirali vaše emocije i osmeh."
      }
    ]
  },
  {
    id: "biorevitalizacija",
    title: "Biorevitalizacija",
    description: "Hidratacija i pomlađivanje kože",
    details: "Biorevitalizacija je anti-age tretman koji koži vraća ono što joj godine i spoljašnji faktori oduzimaju – dubinsku hidrataciju, tonus i prirodan sjaj. Za razliku od krema koje deluju samo na površini, biorevitalizacija direktno u duboke slojeve kože unosi čistu hijaluronsku kiselinu, vitamine, minerale i antioksidanse. Rezultat je trenutno osveženo lice koje zrači zdravljem i jedrinom.",
    icon: "💫",
    benefits: [
      "Intenzivna, dubinska hidratacija: Vraća vlagu suvoj, dehidriranoj i umornoj koži.",
      "Poboljšanje teksture i elastičnosti: Stimuliše prirodnu proizvodnju kolagena i elastina, čineći kožu čvršćom.",
      "Prirodan sjaj i ujednačen ten: Uspešno briše sivilo sa lica, smanjuje sitne linije i umor oko očiju.",
      "Moćna prevencija starenja: Idealna nega koja usporava pojavu prvih bora i štiti kožu od štetnih uticaja iz okruženja."
    ],
    whyChoose: [
      "Kokteli vrhunskog kvaliteta: Koristimo isključivo premijum, sertifikovane biorevitalizacione koktele bogate čistom hijaluronskom kiselinom i aminokiselinama.",
      "Potpuno prirodan izgled: Ovaj tretman ne menja vaše konture niti dodaje veštački volumen – on isključivo regeneriše i podmlađuje vašu kožu.",
      "Minimalno invazivna i komforna procedura: Tretman se izvodi veoma tankim iglicama (mezoterapijski pristup) uz upotrebu efikasne anestetik kreme, što proceduru čini prijatnom.",
      "Brz oporavak i efekat: Prvi znaci svežine vidljivi su već nakon nekoliko dana, a koža nastavlja da se poboljšava iznutra."
    ],
    faqs: [
      {
        question: "Kome je namenjena biorevitalizacija?",
        answer: "Svima koji primete da im je koža suva, beživotna, opuštena ili umorna. Odličan je izbor kako za mlađu kožu (kao prevencija), tako i za zreliju kožu (kao intenzivna regeneracija)."
      },
      {
        question: "Koliko tretmana je potrebno?",
        answer: "Za maksimalne i dugotrajne rezultate preporučuje se serija od 3 do 5 tretmana u razmaku od nekoliko nedelja, nakon čega se radi održavanje jednom u nekoliko meseci."
      }
    ]
  },
  {
    id: "mezoterapija",
    title: "Mezoterapija",
    description: "Nutritvna terapija za kožu",
    details: "Mezoterapija je jedan od najefikasnijih nehirurških tretmana koji koži pruža dubinsku ishranu i regeneraciju. Koristeći mikroinjekcije, unosimo koktel vitamina, minerala, aminokiselina i antioksidanasa direktno u središnji deo kože (mezoderm). Ovaj tretman budi vašu kožu iznutra, podstiče prirodnu cirkulaciju i pokreće intenzivnu proizvodnju kolagena.",
    icon: "💉",
    benefits: [
      "Dubinska ishrana i revitalizacija: Vraća energiju umornoj, 'beživotnoj' koži i koži pušača.",
      "Ublažavanje tamnih kolutova i podočnjaka: Specijalni kokteli uspešno osvežavaju i posvetljuju osetljivu zonu oko očiju.",
      "Ujednačavanje tena i uklanjanje fleka: Pomaže u smanjenju hiperpigmentacija, pega od sunca i fleka od akni.",
      "Snažan anti-age efekat: Pegla sitne mimičke bore, poboljšava tonus i vraća koži mladalačku jedrost."
    ],
    whyChoose: [
      "Kokteli krojeni po vašoj meri: Ne koristimo univerzalna rešenja. Pre svakog tretmana radimo analizu vaše kože i pravimo jedinstvenu kombinaciju sastojaka za vaš problem.",
      "Maksimalan komfor: Tretman se izvodi izuzetno tankim, specijalnim iglicama, uz prethodno nanošenje visokoefikasne anestetik kreme koja proceduru čini bezbolnom.",
      "Brz povratak obavezama: Blago crvenilo nakon tretmana prolazi veoma brzo, a vaša koža odmah počinje da poprima odmoran i svež izgled."
    ],
    faqs: [
      {
        question: "Koja je razlika između mezoterapije i biorevitalizacije?",
        answer: "Dok se biorevitalizacija bazira na visokoj koncentraciji hijaluronske kiseline radi dubinske hidratacije, mezoterapija koristi bogate vitaminske koktele koji rešavaju specifične probleme poput fleka, podočnjaka, umora i nedostatka sjaja."
      },
      {
        question: "Koliko često se ponavlja tretman?",
        answer: "Za najbolje rezultate preporučuje se početni ciklus od 4 do 6 tretmana, koji se rade na svakih 15 do 20 dana, nakon čega sledi održavanje jednom u nekoliko meseci."
      }
    ]
  },
  {
    id: "kolagen",
    title: "Kolagen stimulatori",
    description: "Prirodno pomlađivanje i učvršćivanje",
    details: "Kolagen stimulatori predstavljaju revoluciju u anti-age medicini. Ovi napredni preparati dubinski podstiču vaš organizam da sam ponovo proizvodi sopstveni kolagen. Rezultat je postepeno, potpuno prirodno zatezanje, učvršćivanje i obnavljanje kvaliteta kože čiji efekti traju godinama.",
    icon: "🌟",
    benefits: [
      "Moćan i prirodan lifting efekat: Uspešno podiže opuštene konture lica i nadoknađuje izgubljeni volumen.",
      "Dugotrajno peglanje dubokih bora: Efikasno ublažava nazolabijalne i marionetske bore, kao i opuštenost kože na obrazima.",
      "Vraćanje čvrstine i elastičnosti: Poboljšava samu arhitekturu kože, čineći je jedrom i otpornijom na starenje.",
      "Podmlađivanje vrata i dekoltea: Pored lica, idealan je tretman za regeneraciju i zatezanje tanke i opuštene kože na vratu, dekolteu ili šakama."
    ],
    whyChoose: [
      "Vrhunski svetski brendovi: Koristimo isključivo originalne, klinički dokazane stimulatore kolagena najnovije generacije, koji poseduju sve medicinske sertifikate.",
      "Diskretna i postepena promena: Niko neće znati da ste bili na tretmanu. Vaša koža postaje lepša, čvršća i mlađa iz meseca u mesec, prateći prirodni ritam regeneracije vašeg tela.",
      "Dugotrajnost: Dok klasični tretmani traju nekoliko meseci, rezultati stimulacije kolagena mogu trajati i preko 2 godine."
    ],
    faqs: [
      {
        question: "Kada se vide prvi rezultati i koliko traju?",
        answer: "Prve promene u tonusu primetićete nakon nekoliko nedelja, dok se pun efekat razvija u periodu od 2 do 4 meseca, koliko je telu potrebno da izgradi novu mrežu kolagena. Rezultati su izuzetno dugotrajni i vidljivi su i do 24 meseca."
      },
      {
        question: "Koja je razlika između kolagen stimulatora i hijaluronskih filera?",
        answer: "Hijaluronski fileri daju trenutan volumen i zadržavaju vodu, dok kolagen stimulatori ne menjaju vaše lice odmah, već deluju kao 'biološki aktivatori' koji teraju vašu kožu da samu sebe obnovi i zategne."
      }
    ]
  },
  {
    id: "dermapen",
    title: "Dermapen",
    description: "Mikroneedling za regeneraciju kože",
    details: "Dermapen (microneedling) je jedan od najpopularnijih i najefikasnijih tretmana za dubinsko obnavljanje teksture kože. Koristeći aparat sa mikroiglicama, ovaj tretman na potpuno prirodan način budi odbrambeni mehanizam kože, podstičući je da stvara nov, zdrav kolagen i elastin. Rezultat je regenerisana, zategnuta koža sa drastično smanjenim nesavršenostima.",
    icon: "🔬",
    benefits: [
      "Smanjenje ožiljaka od akni: Uspešno poravnava teksturu kože i ublažava ožiljke.",
      "Sužavanje proširenih pora: Reguliše lučenje sebuma i vidno 'skuplja' pore, dajući licu uglačan izgled.",
      "Brisanje fleka i hiperpigmentacija: Ujednačava ten i posvetljuje tamne mrlje nastale od sunca ili upalnih procesa.",
      "Ublažavanje finih linija i bora: Vraća tonus opuštenoj koži lica, vrata i dekoltea."
    ],
    whyChoose: [
      "Kombinacija sa premijum koktelima: Tokom tretmana koristimo visoko koncentrovane vitaminske i hijaluronske serume. Dermapen otvara hiljade mikro-kanala kroz koje koža ove sastojke upija i do 80% dublje nego obično.",
      "Potpuno bezbolan proces: Pre tretmana na lice nanosimo medicinsku anestetik kremu visoke efikasnosti, tako da je procedura maksimalno komforna i prijatna.",
      "Precizna kontrola: Aparat nam omogućava da milimetarski prilagođavamo dubinu iglica u zavisnosti od regije lica, čime postižemo maksimalan rezultat uz minimalno vreme oporavka."
    ],
    faqs: [
      {
        question: "Kakav je oporavak nakon Dermapena i koliko traje crvenilo?",
        answer: "Neposredno nakon tretmana koža će biti crvena, nalik blagom crvenilu od sunčanja. Ovo je potpuno normalna reakcija koja uglavnom prolazi u roku od 24 do 48 sati, nakon čega počinje faza fine regeneracije i blagog ljuštenja."
      },
      {
        question: "Koliko tretmana je potrebno za vidljive rezultate?",
        answer: "Prvi znaci svežine i blistavosti vide se već nakon nekoliko dana. Za rešavanje dubljih problema poput ožiljaka od akni ili proširenih pora, preporučuje se serija od 3 do 5 tretmana u razmaku od mesec dana."
      }
    ]
  },
  {
    id: "piling",
    title: "Hemijski piling",
    description: "Eksfolijacija i obnavljanje kože",
    details: "Hemijski piling je jedna od najpouzdanijih i najduže primenjivanih metoda za dubinsko obnavljanje i podmlađivanje kože. Ovaj tretman koristi pažljivo odabrane, prirodne kiseline koje nežno i kontrolisano uklanjaju sloj mrtvih ćelija sa površine lica. Time se oslobađa nova, mlada koža, dok se istovremeno podstiče dubinska regeneracija, stvaranje kolagena i brisanje nesavršenosti.",
    icon: "🧪",
    benefits: [
      "Moćno ublažavanje hiperpigmentacija: Uspešno bledi fleke od sunca, staračke pege i mrlje nastale nakon akni.",
      "Dubinsko čišćenje i sužavanje pora: Reguliše lučenje masnoće, sprečava nastanak mitisera i poboljšava izgled masne kože.",
      "Peglanje finih linija i bora: Podstiče ćelijsku smenu, čime se vidno smanjuje dubina površinskih bora.",
      "Popravljanje teksture i blistavosti: Briše sivilo i umoran izgled, ostavljajući kožu baršunasto mekom, glatkom i sjajnom."
    ],
    whyChoose: [
      "Pilinzi medicinske gradacije: Koristimo isključivo profesionalne, medicinski sertifikovane pilinge proverenih svetskih brendova, koji prodiru tačno do željenog sloja kože.",
      "Kontrolisan i bezbedan proces: Tretman je potpuno bezbolan.",
      "Tretman je potpuno bezbolan"
    ],
    faqs: [
      {
        question: "Da li je hemijski piling bolan i kako izgleda oporavak?",
        answer: "Tretman nije bolan, već može izazvati blago peckanje. U zavisnosti od jačine pilinga (površinski ili srednje duboki), narednih dana možete očekivati blago crvenilo i finu, diskretnu eksfolijaciju (ljuštenje) kože, što je potpuno normalan deo procesa obnove."
      },
      {
        question: "Kada je najbolje vreme za ovaj tretman i koliko je serija potrebno?",
        answer: "Hemijski pilinzi se tradicionalno rade u periodu od jeseni do proleća, kada nema jakog sunčevog zračenja, uz obavezno korišćenje SPF krema. Za optimalne rezultate preporučuje se serija od 3 do 4 tretmana u razmaku od nekoliko nedelja."
      }
    ]
  }
];

interface TreatmentsSectionProps {
  onBookNow: (treatment: string) => void;
}

export function TreatmentsSection({ onBookNow }: TreatmentsSectionProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl text-foreground mb-4">
            Estetski i anti-age tretmani
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detaljnije o tretmanima
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {treatments.map((treatment) => (
            <button
              key={treatment.id}
              onClick={() => setSelectedTreatment(treatment)}
              className="group bg-gradient-to-br from-white to-secondary p-6 rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 text-left"
            >
              <h3 className="text-foreground mb-2 group-hover:text-primary transition-colors">
                {treatment.title}
              </h3>
              <p className="text-sm text-muted-foreground">{treatment.description}</p>
              <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Saznaj više</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!selectedTreatment} onOpenChange={() => setSelectedTreatment(null)}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-300"
          />
          <Dialog.Content
            className="flex flex-col overflow-hidden fixed z-50 bg-white shadow-2xl
              md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-3xl md:max-w-3xl md:w-full md:max-h-[90vh]
              max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:rounded-t-3xl max-md:max-h-[95vh]
              data-[state=open]:animate-in data-[state=closed]:animate-out
              md:data-[state=closed]:fade-out-0 md:data-[state=open]:fade-in-0
              md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95
              max-md:data-[state=closed]:slide-out-to-bottom max-md:data-[state=open]:slide-in-from-bottom
              duration-300 ease-out
              flex flex-col"
          >
            {selectedTreatment && (
              <>
               
                <div className="p-6 md:p-8 border-b border-border flex justify-between items-start">
                  <Dialog.Title className="font-sans text-3xl md:text-4xl text-foreground pr-8 leading-tight">
                    {selectedTreatment.title}
                  </Dialog.Title>
                  <Dialog.Close className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 p-2 hover:bg-secondary rounded-full">
                    <X size={24} />
                  </Dialog.Close>
                </div>

                 <div className="flex-1 overflow-y-auto pb-32 md:pb-36">
                <div className="flex-1 overflow-y-auto p-6 md:p-8 pb-32">
                  <Dialog.Description className="text-foreground/80 leading-relaxed text-base md:text-lg mb-8">
                    {selectedTreatment.details}
                  </Dialog.Description>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl md:text-2xl text-foreground mb-4">
                        Šta postižemo {selectedTreatment.title.toLowerCase()}om
                      </h3>
                      <ul className="space-y-3">
                        {selectedTreatment.benefits.map((benefit, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span className="text-foreground/80 leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-px bg-border"></div>

                    <div>
                      <h3 className="text-xl md:text-2xl text-foreground mb-4">
                        Zašto izabrati {selectedTreatment.title.toLowerCase()} u našoj ordinaciji
                      </h3>
                      <ul className="space-y-3">
                        {selectedTreatment.whyChoose.map((reason, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span className="text-foreground/80 leading-relaxed">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="h-px bg-border"></div>

                    <div>
                      <h3 className="text-xl md:text-2xl text-foreground mb-4">
                        Često postavljana pitanja (FAQ)
                      </h3>
                      <Accordion.Root type="single" collapsible className="space-y-2">
                        {selectedTreatment.faqs.map((faq, index) => (
                          <Accordion.Item
                            key={index}
                            value={`item-${index}`}
                            className="border border-border rounded-lg overflow-hidden"
                          >
                            <Accordion.Header>
                              <Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left hover:bg-secondary/50 transition-colors">
                                <span className="text-foreground pr-4">{faq.question}</span>
                                <ChevronDown
                                  className="text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0"
                                  size={20}
                                />
                              </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                              <div className="px-5 pb-4 pt-2 text-foreground/80 leading-relaxed">
                                {faq.answer}
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                        ))}
                      </Accordion.Root>
                    </div>
                  </div>
                </div>

              </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <button
                    onClick={() => {
                      onBookNow(selectedTreatment.title);
                      setSelectedTreatment(null);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-full transition-all hover:scale-105 shadow-lg text-lg"
                  >
                    Zakaži tretman
                  </button>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
