import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ExpertiseItem {
  title: string;
  description: string;
  href: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Conférences & Ateliers",
    description:
      "Deux formats pour sensibiliser, éduquer et partager sur 5 thèmes de la retraite à la mort : la conférence permettant l'accueil un grand nombre de participants en présentiel et Webinar, l'atelier permettant des échanges plus longs, plus interactifs et des partages.",
    href: "/events",
  },
  {
    title: "Formations",
    description:
      "Les sujets abordés : Les seniors salariés de + 50 ans, Les impacts liés à la retraite, La transmission des savoirs et des compétences, La ritualsation, Le deuil, Le funéraire, L'intéligence émotionnelle et relationnelle.",
    href: "/training",
  },
  {
    title: "Mes expertises",
    description:
      "Les sujets abordés sont interdépendants les uns des autres. Ils racontent et retracent l'histoire de la seconde moitié de la vie. Comprendre, s'adapter, oser, se transformer sont autant d'étapes à apprivoiser pour agir sans subir.",
    href: "/expertises",
  },
];

const ExpertiseGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {expertiseItems.map((item, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
          <Button
            variant="outline"
            className="w-full justify-between border-gray-200 hover:bg-gray-50 hover:text-gray-900"
            onClick={() => (window.location.href = item.href)}
          >
            En savoir plus
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseGrid;
