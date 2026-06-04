"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/imports/IMG_5810.jpg", alt: "Tretman rezultat 1" },
  { id: 2, src: "/imports/IMG_6285.PNG", alt: "Tretman rezultat 2" },
  { id: 3, src: "/imports/1ee7aad5-5d70-41b9-98e2-1afd54f640d5.JPG", alt: "Tretman rezultat 3" },
  { id: 4, src: "/imports/IMG_6580.jpg", alt: "Tretman rezultat 4" },
  { id: 5, src: "/imports/IMG_6612.jpg", alt: "Tretman rezultat 5" },
  { id: 6, src: "/imports/88d29ff8-e2c4-467a-aa87-1427f9ea39c0.JPG", alt: "Tretman rezultat 6" },
  { id: 7, src: "/imports/IMG_5954.jpg", alt: "Tretman rezultat 7" },
  { id: 8, src: "/imports/IMG_6442.jpg", alt: "Tretman rezultat 8" },
  { id: 9, src: "/imports/IMG_5650.jpg", alt: "Tretman rezultat 9" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl text-foreground mb-4">
            Galerija
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre i posle tretmana naših zadovoljnih pacijenata
          </p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-sm">Klikni za uvećanje</span>
              </div>
            </button>
          ))}
        </div>

        <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <Dialog.Portal>
            <Dialog.Overlay
              className="fixed inset-0 bg-black/90 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-all duration-300"
            />
            <Dialog.Content
              className="fixed z-50
                md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-6xl md:w-full md:max-h-[90vh]
                max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:max-h-[90vh]
                data-[state=open]:animate-in data-[state=closed]:animate-out
                md:data-[state=closed]:fade-out-0 md:data-[state=open]:fade-in-0
                md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95
                max-md:data-[state=closed]:slide-out-to-bottom max-md:data-[state=open]:slide-in-from-bottom
                duration-300 ease-out
                p-4"
            >
              {selectedImage && (
                <>
                  <Dialog.Title className="sr-only">
                    {galleryImages.find((img) => img.id === selectedImage)?.alt}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Prikaz slike u punoj veličini
                  </Dialog.Description>
                  <div className="relative">
                    <img
                      src={galleryImages.find((img) => img.id === selectedImage)?.src}
                      alt={galleryImages.find((img) => img.id === selectedImage)?.alt}
                      className="w-full h-full max-h-[85vh] object-contain rounded-lg"
                    />
                    <Dialog.Close className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all">
                      <X size={24} />
                    </Dialog.Close>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
