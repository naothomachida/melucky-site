import React from 'react';
import { Users, FileText, Award, Clock, CheckCircle2, Shield } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: '+20 anos de atuação com pós-graduação em Patologias das Construções',
    },
    {
      icon: Users,
      title: 'Equipe Própria',
      description: 'Profissionais capacitados e supervisionados diretamente pela empresa',
    },
    {
      icon: Shield,
      title: 'Responsabilidade Técnica',
      description: 'Todos os serviços com ART e conformidade com normas técnicas',
    },
    {
      icon: FileText,
      title: 'Transparência Total',
      description: 'Relatórios fotográficos detalhados e laudos técnicos completos',
    },
    {
      icon: Clock,
      title: 'Cumprimento de Prazos',
      description: 'Gestão eficiente com respeito aos cronogramas estabelecidos',
    },
    {
      icon: CheckCircle2,
      title: 'Atendimento Personalizado',
      description: 'Soluções sob medida para cada condomínio e necessidade',
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Por Que Escolher a Melucky?</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos diferenciais garantem segurança, qualidade e confiança em cada projeto
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{diff.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{diff.description}</p>
                </div>
              );
            })}
          </div>

          {/* Quote Section */}
          <div className="bg-primary-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
                <path d="M45,0 L45,45 L0,45 L0,100 L55,100 L55,0 Z M145,0 L145,45 L100,45 L100,100 L155,100 L155,0 Z" />
              </svg>
            </div>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                "A Melucky Engenharia entrega mais do que serviços — entrega tranquilidade técnica,
                credibilidade e soluções completas para o ciclo de vida das edificações."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-xl">AP</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Ana Paula</p>
                  <p className="text-primary-200">Engenheira Civil - Fundadora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
