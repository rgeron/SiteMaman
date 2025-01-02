import React from "react";
import { Heart, Users, Brain, Sunrise, BookCopy } from "lucide-react";

interface ExpertiseItem {
  title: string;
  icon: React.ReactNode;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "La mort",
    icon: <Heart className="h-8 w-8 mb-4 text-gray-700" />,
  },
  {
    title: "Le deuil",
    icon: <Users className="h-8 w-8 mb-4 text-gray-700" />,
  },
  {
    title: "La dépendance",
    icon: <Brain className="h-8 w-8 mb-4 text-gray-700" />,
  },
  {
    title: "La retraite",
    icon: <Sunrise className="h-8 w-8 mb-4 text-gray-700" />,
  },
  {
    title: "La transmission de la mémoire",
    icon: <BookCopy className="h-8 w-8 mb-4 text-gray-700" />,
  },
];

const ExpertiseGrid = () => {
  return (
    <section className="max-w-6xl mx-auto space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {expertiseItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
          >
            {item.icon}
            <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="space-y-8 bg-white p-8 rounded-xl">
        <p className="text-gray-600 leading-relaxed">
          La retraite constitue le dernier tiers du temps de notre vie. Les
          expériences de deuil deviennent plus fréquentes et nous confrontent à
          notre propre finitude.
        </p>

        <p className="text-gray-600 leading-relaxed">
          L'allongement de l'espérance de vie allié aux progrès médicaux permet
          d'atteindre le grand âge et vivre les dépendances naturelles
          associées.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Les thèmes de la mort et de la transmission de mémoire sont essentiels
          à la pérénnité de notre civilisation.
        </p>

        <p className="text-gray-600 leading-relaxed">
          La transmission de la mémoire est un ancrage donné aux jeunes
          générations pour poursuivre le chemin de la connaissance et de la
          croissance.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Enfin, le thème de la mort, tabou et passionnant, mérite d'être mieux
          connu afin de pouvoir apprivoiser les décisions à prendre pour soi, et
          pour ceux que l'on aime.
        </p>

        <p className="text-gray-900 font-medium mt-8">
          Je vous accompagne à sensibiliser et à apporter les connaissances
          nécessaires à vos salariés, vos clients et vos étudiants pour enrichir
          leurs parcours professionnels et à être plus à l'écoute des offres
          commerciales prévoyance et assurance.
        </p>
      </div>
    </section>
  );
};

export default ExpertiseGrid;
