
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-blue font-bold text-xl">MatrículaFácil</span>
            <p className="mt-2 text-sm text-gray-500">
              O ajuste de matrículas ficou mais rápido, justo e transparente!
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Recursos</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">Calendário Acadêmico</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">Manual do Estudante</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">FAQ</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Contato</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">Suporte</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">Secretaria</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">Política de Privacidade</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-500 hover:text-blue">Termos de Uso</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 sm:mx-auto" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {currentYear} MatrículaFácil™. Todos os direitos reservados.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
