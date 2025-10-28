import React from 'react';
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import ButtonFilled from '../ui/ButtonFilled';
import ButtonOutlined from '../ui/ButtonOutlined';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative text-white pt-32 pb-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/engenharia-principal.jpg"
          alt="Melucky Engenharia - Manutenção Predial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Excelência em <span className="text-primary-400">Manutenção Predial</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Mais de 20 anos de experiência em engenharia civil, oferecendo soluções completas e seguras para seu patrimônio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ButtonOutlined onClick={scrollToContact} icon={ArrowRight}>
              Solicitar Orçamento
            </ButtonOutlined>
            <ButtonFilled onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
              Nossos Serviços
            </ButtonFilled>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="mx-auto mb-3 text-primary-400" size={40} />
              <h3 className="font-semibold text-lg mb-2">Segurança Garantida</h3>
              <p className="text-sm text-gray-200">Responsabilidade técnica em todos os serviços</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Award className="mx-auto mb-3 text-primary-400" size={40} />
              <h3 className="font-semibold text-lg mb-2">+20 Anos de Experiência</h3>
              <p className="text-sm text-gray-200">Especialização em Patologias das Construções</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="mx-auto mb-3 text-primary-400" size={40} />
              <h3 className="font-semibold text-lg mb-2">Atendimento Ágil</h3>
              <p className="text-sm text-gray-200">Equipe qualificada e disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
