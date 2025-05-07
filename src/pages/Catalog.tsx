
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Catalog = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Catálogo de Produtos
            </h1>
            <div className="w-20 h-1 bg-chamon-blue mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Conheça nossos principais produtos e soluções. Todos os itens são revisados, higienizados e 
              entregues com montagem especializada. Atendemos de forma personalizada de acordo com o porte 
              e as necessidades do seu evento.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tents" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="tents">Tendas</TabsTrigger>
              <TabsTrigger value="freezers">Freezers</TabsTrigger>
              <TabsTrigger value="equipment">Equipamentos</TabsTrigger>
            </TabsList>
            
            {/* Tendas Content */}
            <TabsContent value="tents" className="animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-center mb-12">
                Nossas <span className="text-chamon-blue">Tendas</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Tent 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/415e7acb-16bb-4c00-9d36-f99924b987a1.png" 
                    alt="Tenda 3x3m" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-chamon-blue">
                      Tenda 3x3m
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Estrutura prática para eventos menores ou cobertura pontual. Ideal para pontos 
                      de apoio ou stands individuais.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Montagem rápida
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Área de 9m²
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Estrutura metálica robusta
                      </li>
                    </ul>
                    <Link to="/orcamento">
                      <Button className="w-full bg-chamon-blue hover:bg-chamon-blue/90">Solicitar Orçamento</Button>
                    </Link>
                  </div>
                </div>
                
                {/* Tent 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/0a36c839-39fa-41dc-a80f-504842b84936.png" 
                    alt="Tenda 5x5m" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-chamon-blue">
                      Tenda 5x5m
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Espaço intermediário com cobertura reforçada. Ótima para recepções, cerimoniais e 
                      barracas gastronômicas.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Área de 25m²
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Capacidade para até 30 pessoas
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Cobertura reforçada para chuva
                      </li>
                    </ul>
                    <Link to="/orcamento">
                      <Button className="w-full bg-chamon-blue hover:bg-chamon-blue/90">Solicitar Orçamento</Button>
                    </Link>
                  </div>
                </div>
                
                {/* Tent 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/639b33d6-f28b-40f6-9368-baef98ec3496.png" 
                    alt="Tenda 10x10m" 
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-chamon-blue">
                      Tenda 10x10m
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Excelente para eventos maiores. Possibilidade de acoplamento modular. Proteção 
                      contra sol e chuva com estrutura reforçada.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Área de 100m²
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Capacidade para até 100 pessoas
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Opção de acoplamento modular
                      </li>
                    </ul>
                    <Link to="/orcamento">
                      <Button className="w-full bg-chamon-blue hover:bg-chamon-blue/90">Solicitar Orçamento</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-display font-semibold mb-3">Laterais fechadas (opcional)</h3>
                <p className="text-gray-700">
                  Disponíveis para proteção contra vento, chuva ou privacidade. Todas as nossas tendas podem 
                  ser equipadas com laterais para maior proteção e conforto do seu evento.
                </p>
              </div>
            </TabsContent>
            
            {/* Freezers Content */}
            <TabsContent value="freezers" className="animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-center mb-12">
                Nossos <span className="text-chamon-blue">Freezers</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Freezer 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-56 bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="18" height="11" x="3" y="10" rx="2"></rect><path d="M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4H5z"></path></svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-chamon-blue">
                      Freezer Horizontal
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Ideal para manter bebidas geladas ou armazenar alimentos durante o evento. 
                      Capacidade variada.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Capacidades: 220L, 310L ou 410L
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Temperatura ajustável
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Entrega e instalação
                      </li>
                    </ul>
                    <Link to="/orcamento">
                      <Button className="w-full bg-chamon-blue hover:bg-chamon-blue/90">Solicitar Orçamento</Button>
                    </Link>
                  </div>
                </div>
                
                {/* Freezer 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-56 bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M5 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Z"></path><path d="M16 3v18"></path><path d="M5 8h11"></path><path d="M5 13h11"></path><path d="M5 18h11"></path></svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-chamon-blue">
                      Freezer Vertical (sob consulta)
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Usado em cozinhas temporárias ou backstage de eventos. Ideal para 
                      armazenamento organizado.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Disponível sob consulta
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Ideal para cozinhas temporárias
                      </li>
                      <li className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Capacidade conforme necessidade
                      </li>
                    </ul>
                    <Link to="/orcamento">
                      <Button className="w-full bg-chamon-blue hover:bg-chamon-blue/90">Solicitar Orçamento</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Equipment Content */}
            <TabsContent value="equipment" className="animate-fade-in">
              <h2 className="text-3xl font-display font-bold text-center mb-12">
                Sublocação de <span className="text-chamon-blue">Equipamentos</span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-6 text-lg">
                    Trabalhamos com parceiros para fornecer outros itens que complementam seu evento. 
                    Esses itens são intermediados sob consulta e disponibilidade, sempre com a garantia 
                    de entrega confiável.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-4 text-chamon-blue">
                        Mobiliário
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Mesas e cadeiras plásticas ou de madeira
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Toalhas e capas decorativas
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Palcos e tablados (sob demanda)
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-display font-semibold mb-4 text-chamon-blue">
                        Equipamentos
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Iluminação básica ou decorativa
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Extensões e acessórios elétricos
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-chamon-green"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          Som ambiente ou para cerimônia
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link to="/orcamento">
                      <Button className="bg-chamon-blue hover:bg-chamon-blue/90">
                        Solicitar Informações e Orçamento
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Entre em contato conosco! Podemos encontrar soluções personalizadas para as necessidades 
              específicas do seu evento.
            </p>
            <Link to="/contato">
              <Button className="bg-chamon-blue hover:bg-chamon-blue/90">
                Falar com um Consultor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
