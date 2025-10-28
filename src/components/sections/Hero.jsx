import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import ButtonFilled from '../ui/ButtonFilled';
import ButtonOutlined from '../ui/ButtonOutlined';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/engenharia-principal.jpg',
    '/shutter/4.jpg',
    '/shutter/6.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

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
    }
  };

  const scrollToContact = () => scrollToSection('contato');

  return (
    <section id="home" className="relative text-white pt-32 pb-32 md:pb-32 min-h-[85vh] md:min-h-[90vh]">
      {/* Background image carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Melucky Engenharia - Manutenção Predial"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Mobile version - centered */}
      <div className="md:hidden relative z-10 px-4 pt-12 pb-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              Excelência em <span className="text-primary-400">Manutenção Predial</span>
            </h1>
            <p className="text-lg mb-6 text-gray-100">
              Mais de 20 anos de experiência em engenharia civil, oferecendo soluções completas e seguras para seu patrimônio
            </p>
            <div className="flex flex-col gap-4 items-center">
              <ButtonOutlined onClick={scrollToContact} icon={ArrowRight}>
                Solicitar Orçamento
              </ButtonOutlined>
              <ButtonFilled onClick={() => scrollToSection('servicos')}>
                Nossos Serviços
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop version - left aligned */}
      <div className="hidden md:block absolute bottom-32 left-0 right-0 z-10 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl text-left w-full">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Excelência em <span className="text-primary-400">Manutenção Predial</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-2xl">
              Mais de 20 anos de experiência em engenharia civil, oferecendo soluções completas e seguras para seu patrimônio
            </p>
            <div className="flex flex-row gap-4 justify-start">
              <ButtonOutlined onClick={scrollToContact} icon={ArrowRight}>
                Solicitar Orçamento
              </ButtonOutlined>
              <ButtonFilled onClick={() => scrollToSection('servicos')}>
                Nossos Serviços
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators - positioned at the border */}
      <div className="relative md:absolute bottom-0 left-0 right-0 z-20 md:transform md:translate-y-1/2 px-4 md:px-0 mt-8 md:mt-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl border border-white/20">
              <Shield className="mx-auto mb-3 text-primary-400" size={40} />
              <h3 className="font-semibold text-lg mb-2 text-center">Segurança Garantida</h3>
              <p className="text-sm text-gray-200 text-center">Responsabilidade técnica em todos os serviços</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl border border-white/20">
              <Award className="mx-auto mb-3 text-primary-400" size={40} />
              <h3 className="font-semibold text-lg mb-2 text-center">+20 Anos de Experiência</h3>
              <p className="text-sm text-gray-200 text-center">Especialização em Patologias das Construções</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl border border-white/20">
              <Clock className="mx-auto mb-3 text-primary-400" size={40} />
              <h3 className="font-semibold text-lg mb-2 text-center">Atendimento Ágil</h3>
              <p className="text-sm text-gray-200 text-center">Equipe qualificada e disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
