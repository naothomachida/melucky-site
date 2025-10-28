import React from 'react';
import { Building2, Droplets, Zap, Wrench, FileCheck, Paintbrush, Shield, ClipboardCheck } from 'lucide-react';
import ButtonFilled from '../ui/ButtonFilled';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Revitalização de Fachadas',
      description: 'Recuperação completa incluindo reparos em emboço, rejuntes, pintura e substituição de revestimentos cerâmicos.',
    },
    {
      icon: Droplets,
      title: 'Impermeabilização',
      description: 'Sistemas completos de proteção de áreas molhadas, lajes e correção de infiltrações com injeção de polímeros.',
    },
    {
      icon: Wrench,
      title: 'Serviços Hidráulicos',
      description: 'Instalações completas de água fria, água quente e esgoto, com manutenção e correções especializadas.',
    },
    {
      icon: Zap,
      title: 'Serviços Elétricos',
      description: 'Instalações em baixa tensão, correção, ampliação e adequação conforme NBR 5410.',
    },
    {
      icon: Paintbrush,
      title: 'Acabamento e Pintura',
      description: 'Assentamento de pisos e azulejos, pintura profissional, instalação de paver e correção de superfícies.',
    },
    {
      icon: Shield,
      title: 'Manutenção de Esquadrias',
      description: 'Reparos e manutenção em esquadrias de alumínio, vidros e sistemas de vedação.',
    },
    {
      icon: FileCheck,
      title: 'Laudos Técnicos',
      description: 'Inspeções de recebimento de condomínios, vistorias de unidades privativas e relatórios técnicos detalhados.',
    },
    {
      icon: ClipboardCheck,
      title: 'Assistência Técnica',
      description: 'Pós-obra e suporte a construtoras, com execução de reparos em unidades privativas e áreas comuns.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em manutenção predial, com equipe própria e responsabilidade técnica
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-600" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Precisa de um serviço especializado?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e solicite um orçamento personalizado para as necessidades do seu condomínio
            </p>
            <div className="flex justify-center">
              <ButtonFilled
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                size="md"
              >
                Solicitar Orçamento Gratuito
              </ButtonFilled>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
