import React from 'react';
import { Building2, Users, CheckCircle, Award } from 'lucide-react';

const CondominiumSpecialty = () => {
  const specialties = [
    {
      icon: Building2,
      title: 'Experiência Comprovada',
      description: 'Mais de 20 anos atuando exclusivamente em manutenção predial de condomínios residenciais e comerciais.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e treinados para atender as demandas específicas de condomínios.',
    },
    {
      icon: CheckCircle,
      title: 'Soluções Completas',
      description: 'Desde pequenos reparos até grandes reformas, com responsabilidade técnica e garantia.',
    },
    {
      icon: Award,
      title: 'Compromisso com Qualidade',
      description: 'Atendimento personalizado, prazos cumpridos e total transparência em todos os processos.',
    },
  ];

  return (
    <section className="pt-20 md:pt-40 pb-20 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Especializados em <span className="text-primary-400">Condomínios</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Nossa expertise está focada em oferecer soluções personalizadas para condomínios,
              entendendo as necessidades únicas de cada edifício e seus moradores
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="bg-primary-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{specialty.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{specialty.description}</p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">+20</div>
              <div className="text-gray-200 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">+500</div>
              <div className="text-gray-200 text-sm">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-200 text-sm">Responsabilidade Técnica</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-200 text-sm">Atendimento de Emergência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CondominiumSpecialty;
