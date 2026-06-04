export interface FAQ {
  question: string;
  answer: string;
}

export interface Treatment {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  benefits: string[];
  whyChoose: string[];
  faqs: FAQ[];
}

export const treatments: Treatment[] = [
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