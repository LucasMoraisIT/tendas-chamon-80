
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type GalleryImage = {
  id: number;
  url: string;
  title: string;
  description: string;
  category: 'all' | 'wedding' | 'corporate' | 'fair' | 'public';
};

const Gallery = () => {
  const [openImage, setOpenImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      url: '/lovable-uploads/639b33d6-f28b-40f6-9368-baef98ec3496.png',
      title: 'Evento da Prefeitura',
      description: 'Cobertura completa com tenda 10x10m para evento municipal.',
      category: 'public'
    },
    {
      id: 2,
      url: '/lovable-uploads/0a36c839-39fa-41dc-a80f-504842b84936.png',
      title: 'Casamento ao Ar Livre',
      description: 'Tendas com laterais + freezer para bebidas em casamento.',
      category: 'wedding'
    },
    {
      id: 3,
      url: '/lovable-uploads/415e7acb-16bb-4c00-9d36-f99924b987a1.png',
      title: 'Área de Lazer',
      description: 'Tenda instalada em área de lazer para pequenos eventos.',
      category: 'corporate'
    },
    {
      id: 4,
      url: '/lovable-uploads/ff0ee9c9-98b6-411a-8892-ca0afba29135.png',
      title: 'Cobertura para Piscina',
      description: 'Tenda 5x5m instalada em área de piscina para evento corporativo.',
      category: 'corporate'
    },
    {
      id: 5,
      url: '/lovable-uploads/b77b041c-623f-47c9-83cb-46fc42613598.png',
      title: 'Evento em Área Externa',
      description: 'Tenda com estrutura reforçada para evento ao ar livre em área rural.',
      category: 'public'
    },
    {
      id: 6,
      url: '/lovable-uploads/6ec6640f-4431-4140-aa08-0fb14ec7f9df.png',
      title: 'Feira de Artesanato',
      description: 'Montagem modular com tendas 5x5m para feira de artesanato.',
      category: 'fair'
    },
    {
      id: 7,
      url: '/lovable-uploads/04aea700-1408-41f9-95dc-ec298bc4bf96.png',
      title: 'Evento Esportivo',
      description: 'Área técnica com cobertura e refrigeração para evento esportivo.',
      category: 'public'
    },
    {
      id: 8,
      url: '/lovable-uploads/420ef8cf-d754-4729-8cb9-871f9e401450.png',
      title: 'Festa Infantil',
      description: 'Tendas para área de recreação em festa infantil.',
      category: 'wedding'
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Galeria de Projetos
            </h1>
            <div className="w-20 h-1 bg-chamon-blue mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Veja alguns eventos que contaram com a estrutura da Tendas Chamon. 
              Montagens feitas com cuidado, segurança e atenção aos detalhes.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-12">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="wedding">Casamentos</TabsTrigger>
              <TabsTrigger value="corporate">Corporativos</TabsTrigger>
              <TabsTrigger value="fair">Feiras</TabsTrigger>
              <TabsTrigger value="public">Eventos Públicos</TabsTrigger>
            </TabsList>
            
            {/* All Content */}
            <TabsContent value="all" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id}
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                    onClick={() => setOpenImage(image)}
                  >
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-display font-semibold">{image.title}</h3>
                      <p className="text-sm">{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Wedding Content */}
            <TabsContent value="wedding" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages
                  .filter(img => img.category === 'wedding')
                  .map((image) => (
                    <div 
                      key={image.id}
                      className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => setOpenImage(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="font-display font-semibold">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            {/* Corporate Content */}
            <TabsContent value="corporate" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages
                  .filter(img => img.category === 'corporate')
                  .map((image) => (
                    <div 
                      key={image.id}
                      className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => setOpenImage(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="font-display font-semibold">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            {/* Fair Content */}
            <TabsContent value="fair" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages
                  .filter(img => img.category === 'fair')
                  .map((image) => (
                    <div 
                      key={image.id}
                      className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => setOpenImage(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="font-display font-semibold">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            {/* Public Content */}
            <TabsContent value="public" className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {galleryImages
                  .filter(img => img.category === 'public')
                  .map((image) => (
                    <div 
                      key={image.id}
                      className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => setOpenImage(image)}
                    >
                      <img 
                        src={image.url} 
                        alt={image.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="font-display font-semibold">{image.title}</h3>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Image Modal */}
          <Dialog open={!!openImage} onOpenChange={() => setOpenImage(null)}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>{openImage?.title}</DialogTitle>
                <DialogDescription>{openImage?.description}</DialogDescription>
              </DialogHeader>
              {openImage && (
                <div className="mt-4">
                  <img 
                    src={openImage.url} 
                    alt={openImage.title} 
                    className="w-full rounded-md object-contain max-h-[60vh]"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-chamon-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Gostou do que viu?
            </h2>
            <p className="text-xl mb-8">
              Entre em contato conosco para saber como podemos estruturar o seu próximo evento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orcamento">
                <Button size="lg" className="bg-white text-chamon-blue hover:bg-gray-100">
                  Solicitar Orçamento
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Falar com um Consultor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
