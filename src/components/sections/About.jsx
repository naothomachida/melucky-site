import React from 'react';
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import engenhariaImg from '../../assets/images/engenharia-principal.jpg';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre a Melucky Engenharia</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>

          {/* História */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A Melucky Engenharia foi fundada em 2019 pela Engenheira Civil Ana Paula, profissional com
                mais de 20 anos de experiência no setor da construção civil e pós-graduação em Patologias das Construções.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Com uma trajetória consolidada em manutenção predial e gestão de obras em condomínios, Ana Paula
                identificou a necessidade de uma empresa que unisse excelência técnica, agilidade e atendimento
                especializado às demandas do dia a dia dos empreendimentos residenciais e comerciais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Desde então, a empresa vem se destacando pelo atendimento personalizado a condomínios, construtoras
                e administradoras, oferecendo soluções técnicas de alto desempenho e suporte contínuo aos clientes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img
                src={engenhariaImg}
                alt="Engenharia Civil - Melucky"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Equipe Qualificada</h4>
                    <p className="text-gray-600 text-sm">Profissionais capacitados e supervisionados</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Conformidade Técnica</h4>
                    <p className="text-gray-600 text-sm">Seguindo todas as normas vigentes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparência Total</h4>
                    <p className="text-gray-600 text-sm">Relatórios detalhados e acompanhamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Target className="text-primary-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-700 leading-relaxed">
                Garantir segurança, durabilidade e qualidade às edificações, oferecendo soluções técnicas
                completas em manutenção predial e engenharia.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Eye className="text-primary-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconhecida como referência em engenharia de manutenção predial no Sul do Brasil,
                destacando-se pela excelência técnica e relacionamento de confiança.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <Heart className="text-primary-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="text-gray-700 text-left space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Ética e Transparência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Qualidade Técnica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Segurança</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">•</span>
                  <span>Comprometimento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
