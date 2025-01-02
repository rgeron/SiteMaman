import React from "react";
import { Presentation, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Conférences & Ateliers */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <Presentation className="h-8 w-8 text-gray-700" />
              <h3 className="text-2xl font-medium text-gray-900">
                Conférences & Ateliers
              </h3>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-800">
                  CONFERENCE
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>À partir de 25 participants</li>
                  <li>La conférence n'excède pas 2h</li>
                  <li>
                    Un temps d'échange avec les participants est prévu en fin de
                    chaque conférence
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-gray-800">ATELIER</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Pour moins de 20 participants</li>
                  <li>L'atelier a une durée variant entre 2h et 4h</li>
                  <li>
                    Ce format permet à chaque participant de prendre la parole
                    tout au long de l'atelier
                  </li>
                  <li>
                    C'est un format adapté à une interactivité forte entre les
                    participants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Formations */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="h-8 w-8 text-gray-700" />
              <h3 className="text-2xl font-medium text-gray-900">Formations</h3>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-gray-800 mb-4">Thèmes disponibles :</p>
                <ul className="grid grid-cols-1 gap-3 text-gray-600">
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Le funéraire
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Ritualisation, inhumation & crémation
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Qu'est-ce que la mort?
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Grand âge & dépendance
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Traverser le deuil
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Comprendre les contrats obsèques
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Transmettre ses expériences de vie
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    La retraite 3ème temps de la vie
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-800 mb-4">Public concerné :</p>
                <ul className="space-y-2 text-gray-600">
                  <li>Ecoles d'études supérieures</li>
                  <li>Universités</li>
                  <li>Banque-assurances et institutions de prévoyance</li>
                  <li>Associations</li>
                  <li>Institutions sociales et médico-sociales</li>
                  <li>Instituts de formation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
