
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Contato
            </h1>
            <div className="w-20 h-1 bg-chamon-blue mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl">
              Fale com a Tendas Chamon e leve estrutura e confiança para o seu evento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                Informações de <span className="text-chamon-blue">Contato</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-chamon-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Telefone</h3>
                    <p className="text-gray-700">(xx) xxxx-xxxx</p>
                    <p className="text-sm text-gray-500 mt-1">Segunda a Sexta, das 08h às 18h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M12 17.5v.5"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">WhatsApp</h3>
                    <p className="text-gray-700">(xx) xxxxx-xxxx</p>
                    <p className="text-sm text-gray-500 mt-1">Atendimento rápido via mensagem</p>
                    <a 
                      href="https://wa.me/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    >
                      Enviar Mensagem
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-chamon-orange text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">E-mail</h3>
                    <p className="text-gray-700">contato@tendaschamon.com.br</p>
                    <p className="text-sm text-gray-500 mt-1">Para orçamentos e informações</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-chamon-pink text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Endereço</h3>
                    <p className="text-gray-700">Rua Exemplo, 123 - Bairro</p>
                    <p className="text-gray-700">Cidade/UF - CEP: 00000-000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-chamon-purple text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-700">Segunda a Sexta</p>
                    <p className="text-gray-700">08h às 18h</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-display font-semibold text-lg mb-3">Siga-nos nas redes sociais</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-chamon-pink hover:text-white rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-chamon-blue hover:text-white rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-green-500 hover:text-white rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"></path><path d="M15 11v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or image placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-display font-semibold mb-3">Visite nossa sede</h3>
                <p className="text-gray-600 mb-4">
                  Estamos localizados em um ponto de fácil acesso na cidade. 
                  Venha conhecer nossa estrutura.
                </p>
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  * Mapa interativo indisponível no momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Prefere solicitar um orçamento?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Utilize nosso formulário de orçamento para receber uma proposta personalizada 
              para o seu evento.
            </p>
            <Link to="/orcamento">
              <Button size="lg" className="bg-chamon-blue hover:bg-chamon-blue/90">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
