
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
          {/* Logo and info */}
          <div className="md:w-1/3">
            <img 
              src="/lovable-uploads/f2a989ca-dbc6-4d5c-b40e-bacdc24e3ab2.png" 
              alt="Tendas Chamon" 
              className="h-16 mb-4" 
            />
            <p className="text-gray-600 mb-4">
              Soluções estruturadas para eventos de sucesso. Tendas, freezers e equipamentos para 
              casamentos, feiras, eventos corporativos e públicos.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div>
              <h3 className="text-chamon-blue font-display font-semibold text-lg mb-3">Navegação</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-chamon-blue transition-colors">Página Inicial</Link></li>
                <li><Link to="/quem-somos" className="text-gray-600 hover:text-chamon-blue transition-colors">Quem Somos</Link></li>
                <li><Link to="/catalogo" className="text-gray-600 hover:text-chamon-blue transition-colors">Catálogo</Link></li>
                <li><Link to="/galeria" className="text-gray-600 hover:text-chamon-blue transition-colors">Galeria</Link></li>
                <li><Link to="/orcamento" className="text-gray-600 hover:text-chamon-blue transition-colors">Orçamento</Link></li>
                <li><Link to="/contato" className="text-gray-600 hover:text-chamon-blue transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-chamon-blue font-display font-semibold text-lg mb-3">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  (xx) xxxx-xxxx
                </li>
                <li className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M12 17.5v.5"></path></svg>
                  WhatsApp
                </li>
                <li className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  contato@tendaschamon.com.br
                </li>
                <li className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Rua Exemplo, 123 - Bairro - Cidade/UF
                </li>
                <li className="flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Seg a Sex, das 08h às 18h
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-chamon-blue font-display font-semibold text-lg mb-3">Redes Sociais</h3>
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
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-center text-sm">
            © {currentYear} Tendas Chamon Locações para Eventos - CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
