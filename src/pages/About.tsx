
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Quem Somos
            </h1>
            <div className="w-20 h-1 bg-chamon-blue mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Conheça a história e os valores da Tendas Chamon, uma empresa dedicada a fornecer 
              soluções completas para eventos de todos os portes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Nossa <span className="text-chamon-blue">História</span>
              </h2>
              <p className="text-gray-700 mb-4">
                A Tendas Chamon Locações para Eventos nasceu da evolução da antiga "Tendas e Brinquedos", 
                com o objetivo de atender com excelência os mais diversos tipos de eventos.
              </p>
              <p className="text-gray-700 mb-4">
                Hoje, atuamos com foco em eventos de médio e grande porte, como casamentos, feiras, 
                celebrações municipais, eventos corporativos, jogos esportivos e muito mais.
              </p>
              <p className="text-gray-700 mb-4">
                Com estrutura sólida, frota própria e equipe qualificada, oferecemos a locação de tendas 
                profissionais e freezers, além da sublocação de equipamentos e mobiliários sob demanda, 
                garantindo praticidade, segurança e conforto ao seu evento.
              </p>
              <p className="font-medium text-chamon-blue text-lg">
                Nosso compromisso é montar a estrutura ideal para que você só se preocupe com o sucesso do seu evento.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/6ec6640f-4431-4140-aa08-0fb14ec7f9df.png" 
                  alt="Tenda montada em evento" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/b77b041c-623f-47c9-83cb-46fc42613598.png" 
                  alt="Tenda em área de piscina" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/0a36c839-39fa-41dc-a80f-504842b84936.png" 
                  alt="Tendas acopladas" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/lovable-uploads/639b33d6-f28b-40f6-9368-baef98ec3496.png" 
                  alt="Tenda para evento" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
            Nossos <span className="text-chamon-blue">Valores</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-chamon-green text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M7 9h14v13H7a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Qualidade</h3>
              <p className="text-gray-600">
                Trabalhamos apenas com materiais de primeira linha e equipes treinadas para 
                garantir um serviço impecável do início ao fim do evento.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-chamon-blue text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6.56 10.42 2.54-2.55 2.54 2.55a3.59 3.59 0 0 1 0 5.08 3.59 3.59 0 0 1-5.08 0 3.59 3.59 0 0 1 0-5.08Z"></path><path d="m17.37 19.24-2.54-2.55a3.59 3.59 0 0 1 0-5.08 3.59 3.59 0 0 1 5.08 0 3.59 3.59 0 0 1 0 5.08l-2.54 2.55"></path><path d="m15.9 17.77-7.48-7.48"></path><path d="m8.42 6.32 2.55-2.54 2.54 2.54a3.59 3.59 0 0 1 0 5.08 3.59 3.59 0 0 1-5.09 0 3.59 3.59 0 0 1 0-5.08Z"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Confiabilidade</h3>
              <p className="text-gray-600">
                Cumprimos rigorosamente prazos e especificações acordados, dando 
                tranquilidade para que nossos clientes possam focar em outros aspectos do evento.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-chamon-orange text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">Solução Completa</h3>
              <p className="text-gray-600">
                Oferecemos não só o aluguel de equipamentos, mas o planejamento integrado 
                de toda a estrutura necessária para o seu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-chamon-blue text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Vamos estruturar o seu próximo evento?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para conhecer nossas soluções e obter um orçamento 
              personalizado para o seu projeto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/orcamento">
                <Button size="lg" className="bg-white text-chamon-blue hover:bg-gray-100">
                  Solicitar Orçamento
                </Button>
              </Link>
              <Link to="/catalogo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Ver Nossos Produtos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
