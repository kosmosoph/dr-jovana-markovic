"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { X, ChevronDown } from "lucide-react";
import { Treatment, treatments } from "@/data/treatments";

interface TreatmentsSectionProps {
  onBookNow: (treatment: string) => void;
}

export function TreatmentsSection({ onBookNow }: TreatmentsSectionProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null,
  );

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
              <p className="text-sm text-muted-foreground">
                {treatment.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Saznaj više</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={!!selectedTreatment}
        onOpenChange={() => setSelectedTreatment(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-300" />
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
                          Šta postižemo {selectedTreatment.title.toLowerCase()}
                          om
                        </h3>
                        <ul className="space-y-3">
                          {selectedTreatment.benefits.map((benefit, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="text-primary mt-1.5 flex-shrink-0">
                                •
                              </span>
                              <span className="text-foreground/80 leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-border"></div>

                      <div>
                        <h3 className="text-xl md:text-2xl text-foreground mb-4">
                          Zašto izabrati {selectedTreatment.title.toLowerCase()}{" "}
                          u našoj ordinaciji
                        </h3>
                        <ul className="space-y-3">
                          {selectedTreatment.whyChoose.map((reason, index) => (
                            <li key={index} className="flex gap-3">
                              <span className="text-primary mt-1.5 flex-shrink-0">
                                •
                              </span>
                              <span className="text-foreground/80 leading-relaxed">
                                {reason}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-px bg-border"></div>

                      <div>
                        <h3 className="text-xl md:text-2xl text-foreground mb-4">
                          Često postavljana pitanja (FAQ)
                        </h3>
                        <Accordion.Root
                          type="single"
                          collapsible
                          className="space-y-2"
                        >
                          {selectedTreatment.faqs.map((faq, index) => (
                            <Accordion.Item
                              key={index}
                              value={`item-${index}`}
                              className="border border-border rounded-lg overflow-hidden"
                            >
                              <Accordion.Header>
                                <Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-4 text-left hover:bg-secondary/50 transition-colors">
                                  <span className="text-foreground pr-4">
                                    {faq.question}
                                  </span>
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
