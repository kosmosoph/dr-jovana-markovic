"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatment?: string;
}

const treatments = [
  "Hijaluronski fileri",
  "Botoks",
  "Biorevitalizacija",
  "Mezoterapija",
  "Kolagen stimulatori",
  "Dermapen",
  "Hemijski piling",
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
];

export function BookingModal({ isOpen, onClose, selectedTreatment }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: selectedTreatment || "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Booking submitted:", formData);
    handleClose();
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      treatment: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
    });
    onClose();
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!formData.treatment;
      case 2:
        return !!formData.date && !!formData.time;
      case 3:
        return !!formData.name && !!formData.phone && !!formData.email;
      default:
        return true;
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-300"
        />
        <Dialog.Content
          className="fixed z-50 bg-white shadow-2xl
            md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-3xl md:max-w-2xl md:w-full md:max-h-[90vh]
            max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:rounded-t-3xl max-md:max-h-[90vh]
            data-[state=open]:animate-in data-[state=closed]:animate-out
            md:data-[state=closed]:fade-out-0 md:data-[state=open]:fade-in-0
            md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95
            max-md:data-[state=closed]:slide-out-to-bottom max-md:data-[state=open]:slide-in-from-bottom
            duration-300 ease-out
            overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <Dialog.Title className="font-sans text-2xl text-foreground">
              Zakazivanje tretmana
            </Dialog.Title>
            <Dialog.Close className="text-muted-foreground hover:text-foreground transition-colors">
              <X size={24} />
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            Formu za zakazivanje tretmana u 4 koraka
          </Dialog.Description>

          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      step >= s
                        ? "bg-primary text-white"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {step > s ? <Check size={20} /> : s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        step > s ? "bg-primary" : "bg-secondary"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Tretman</span>
              <span>Datum</span>
              <span>Podaci</span>
              <span>Potvrda</span>
            </div>
          </div>

          <div className="mb-8">
            {step === 1 && (
              <div>
                <h3 className="text-foreground mb-4">Izaberite tretman</h3>
                <div className="grid grid-cols-2 gap-3">
                  {treatments.map((treatment) => (
                    <button
                      key={treatment}
                      onClick={() => setFormData({ ...formData, treatment })}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        formData.treatment === treatment
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {treatment}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-foreground mb-4">Izaberite datum i vreme</h3>
                <div className="mb-6">
                  <label className="block text-sm mb-2 text-foreground">Datum</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none bg-input-background"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-foreground">Vreme</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setFormData({ ...formData, time })}
                        className={`p-2 rounded-lg border-2 transition-all ${
                          formData.time === time
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-foreground mb-4">Unesite vaše podatke</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-foreground">Ime i prezime</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none bg-input-background"
                      placeholder="Petar Petrović"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-foreground">Telefon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none bg-input-background"
                      placeholder="+381 11 234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-foreground">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none bg-input-background"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-primary" size={40} />
                </div>
                <h3 className="text-foreground text-xl mb-4">Potvrda zakazivanja</h3>
                <div className="bg-secondary p-6 rounded-lg mb-6 text-left">
                  <div className="space-y-3">
                    <div>
                      <span className="text-muted-foreground text-sm">Tretman:</span>
                      <p className="text-foreground">{formData.treatment}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">Datum i vreme:</span>
                      <p className="text-foreground">{formData.date} u {formData.time}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">Ime:</span>
                      <p className="text-foreground">{formData.name}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-sm">Kontakt:</span>
                      <p className="text-foreground">{formData.phone}</p>
                      <p className="text-foreground">{formData.email}</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Potvrda dolazi odmah na vaš email
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between gap-4">
            {step > 1 && step < 4 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary transition-colors"
              >
                <ChevronLeft size={20} />
                Nazad
              </button>
            )}
            {step < 4 && (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105 ml-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Dalje
                <ChevronRight size={20} />
              </button>
            )}
            {step === 4 && (
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
              >
                Potvrdi zakazivanje
              </button>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
