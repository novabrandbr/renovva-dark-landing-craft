
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            RENNOVA
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#results" className="text-gray-300 hover:text-white transition-colors">
              Resultados
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contato
            </a>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              Solicitar Proposta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-800 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#results" className="text-gray-300 hover:text-white transition-colors">
                Resultados
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contato
              </a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white w-full">
                Solicitar Proposta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
