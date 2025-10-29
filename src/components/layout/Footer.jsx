import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">MELUCKY ENGENHARIA</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em manutenção predial e serviços técnicos de engenharia para condomínios.
              Mais de 20 anos de experiência no setor.
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={18} className="text-primary-400" />
              <span>Curitiba - PR</span>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+5541995311272" className="hover:text-primary-400 transition">
                  (41) 99531-1272
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:engenharia@melucky.com.br" className="hover:text-primary-400 transition">
                  engenharia@melucky.com.br
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Clock size={18} className="text-primary-400 mt-1" />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Principais Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-primary-400 transition cursor-pointer">• Revitalização de Fachadas</li>
              <li className="hover:text-primary-400 transition cursor-pointer">• Impermeabilização</li>
              <li className="hover:text-primary-400 transition cursor-pointer">• Serviços Hidráulicos</li>
              <li className="hover:text-primary-400 transition cursor-pointer">• Serviços Elétricos</li>
              <li className="hover:text-primary-400 transition cursor-pointer">• Laudos Técnicos</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Melucky Engenharia Eireli. Todos os direitos reservados.</p>
          <p className="mt-2">CREA-PR | Ana Paula - Engenheira Civil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
