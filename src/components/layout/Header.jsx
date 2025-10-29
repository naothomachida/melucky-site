import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ButtonOutlined from '../ui/ButtonOutlined';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-slate-600 shadow-md fixed w-full top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+5541995311272" className="flex items-center gap-2 hover:text-primary-400 transition">
              <Phone size={16} />
              <span>(41) 99531-1272</span>
            </a>
            <a href="mailto:engenharia@melucky.com.br" className="flex items-center gap-2 hover:text-primary-400 transition">
              <Mail size={16} />
              <span>engenharia@melucky.com.br</span>
            </a>
          </div>
          <div className="text-primary-400 font-medium md:text-right w-full md:w-auto text-center">
            Melucky Engenharia | Curitiba, Paraná, Brasil
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo-melucky.png" alt="Melucky Engenharia" className="h-12" />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary-400 transition font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-primary-400 transition font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-primary-400 transition font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-white hover:text-primary-400 transition font-medium">
              Diferenciais
            </button>
            <ButtonOutlined onClick={() => scrollToSection('contato')} size="sm">
              Contato
            </ButtonOutlined>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-primary-400 transition font-medium text-left py-3">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-primary-400 transition font-medium text-left py-3">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-primary-400 transition font-medium text-left py-3">
              Serviços
            </button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-white hover:text-primary-400 transition font-medium text-left py-3">
              Diferenciais
            </button>
            <div className="border-t border-slate-500 my-2"></div>
            <a
              href="https://wa.me/5541995311272"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition font-medium text-left py-3 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>(41) 99531-1272</span>
            </a>
            <a
              href="mailto:engenharia@melucky.com.br"
              className="text-white hover:text-primary-400 transition font-medium text-left py-3 flex items-center gap-2"
            >
              <Mail size={18} />
              <span>engenharia@melucky.com.br</span>
            </a>
            <div className="mt-2">
              <ButtonOutlined onClick={() => scrollToSection('contato')} size="md">
                Contato
              </ButtonOutlined>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
