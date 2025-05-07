
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center text-white relative pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Soluções Estruturadas para Eventos de Sucesso
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
              Aluguel de tendas, freezers e apoio completo para casamentos, feiras, eventos corporativos e públicos.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link to="/orcamento">
                <Button size="lg" className="bg-chamon-blue hover:bg-chamon-blue/90 text-white">
                  Solicite um Orçamento
                </Button>
              </Link>
              <Link to="/catalogo">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
                  Ver Catálogo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Nossos <span className="text-chamon-blue">Diferenciais</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-gradient p-8 rounded-lg shadow-md">
              <div className="bg-chamon-blue text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21 4.2 18.2a1 1 0 0 1-.2-1.1l1.2-3.2-3.2-1.2a1 1 0 0 1-.6-1.5L4.8 7l-3.4-4.2a1 1 0 0 1 .6-1.5L9.1 0l1.9 2.4a1 1 0 0 1 0 1.2L9.1 6l5.5 1.9c.5.2.8.5.8 1v10.1a1 1 0 0 1-1 1h-2.4a1 1 0 0 1-.9-.5L7.4 13H5a1 1 0 0 0-.9.5L3 15"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Tendas reforçadas e seguras</h3>
              <p className="text-gray-600">
                Estruturas de alta qualidade com especificação técnica e montagem profissional para garantir total segurança ao seu evento.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-gradient p-8 rounded-lg shadow-md">
              <div className="bg-chamon-orange text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Freezers para apoio logístico</h3>
              <p className="text-gray-600">
                Equipamentos de refrigeração de diferentes capacidades para manter bebidas e alimentos na temperatura ideal durante todo o evento.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-gradient p-8 rounded-lg shadow-md">
              <div className="bg-chamon-green text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"></rect><rect width="10" height="14" x="15" y="2" rx="2"></rect></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Sublocação de equipamentos</h3>
              <p className="text-gray-600">
                Parceria com fornecedores de confiança para oferecer mesas, cadeiras, iluminação e outros itens essenciais para seu evento.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-gradient p-8 rounded-lg shadow-md">
              <div className="bg-chamon-pink text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a4 4 0 0 0-4-4H8"></path><path d="M10 16v.25A1.75 1.75 0 0 0 11.75 18H16a4 4 0 0 0 4-4v-2"></path><path d="M2 12h10"></path><path d="m7 15 3-3-3-3"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Atendimento para eventos públicos e privados</h3>
              <p className="text-gray-600">
                Soluções adaptadas para diferentes tipos de eventos, desde celebrações particulares até grandes eventos municipais.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="feature-gradient p-8 rounded-lg shadow-md">
              <div className="bg-chamon-purple text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10v3h3l-4.5 5-4.5-5h3v-3h3z"></path><path d="M15 5H9v5h6V5Z"></path><rect width="16" height="6" x="4" y="15" rx="2"></rect></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Montagem e desmontagem profissional</h3>
              <p className="text-gray-600">
                Equipe especializada para instalação e retirada dos equipamentos com agilidade, preservando o local do evento.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="feature-gradient p-8 rounded-lg shadow-md">
              <div className="bg-chamon-blue text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 6H2c1.5 0 2 .5 2 2v10c0 1.5.5 2 2 2h10c1.5 0 2-.5 2-2V8c0-1.5.5-2 2-2Z"></path><path d="M8 6V3c0-1.5.5-2 2-2h10c1.5 0 2 .5 2 2v10c0 1.5-.5 2-2 2h-3"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Soluções completas para eventos</h3>
              <p className="text-gray-600">
                Planejamento integrado de infraestrutura para que você se preocupe apenas com o sucesso do seu evento.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/catalogo">
              <Button className="bg-chamon-blue hover:bg-chamon-blue/90">
                Conheça Nossos Produtos
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-chamon-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Pronto para estruturar seu evento?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Entre em contato conosco hoje mesmo e solicite um orçamento personalizado para o seu evento.
            </p>
            <Link to="/orcamento">
              <Button size="lg" className="bg-white text-chamon-blue hover:bg-gray-100">
                Solicitar Orçamento Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
            Nossos <span className="text-chamon-blue">Projetos</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/0a36c839-39fa-41dc-a80f-504842b84936.png" 
                alt="Evento com tenda" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-display text-lg">Evento ao ar livre</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/415e7acb-16bb-4c00-9d36-f99924b987a1.png" 
                alt="Tenda em área verde" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-display text-lg">Área de lazer</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/ff0ee9c9-98b6-411a-8892-ca0afba29135.png" 
                alt="Tenda em área com piscina" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-display text-lg">Cobertura para piscina</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/galeria">
              <Button className="bg-chamon-blue hover:bg-chamon-blue/90">
                Ver Galeria Completa
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
