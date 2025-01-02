import React from "react";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

interface QuickIntroProps {
  portraitUrl?: string;
}

const QuickIntro = ({
  portraitUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop",
}: QuickIntroProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-600 mb-4">
          Votre performance business décollera en formant vos équipes à la
          culture et la pédagogie. Bien vieillir nécessite un apprentissage pour
          tous.
        </p>

        <p className="text-gray-600 mb-4">
          Vous, vos clients, vos salariés, vos étudiants: nous sommes tous
          concernés par ces mots et cet avenir. À travers des conférences, des
          ateliers et des formations, je vous invite à apprivoiser, à mieux
          comprendre, à mieux vivre ces passages.
        </p>

        <p className="text-gray-900 font-medium">
          Mieux écouter pour conseiller de manière éclairée puis vendre en
          sécurité éthique et émotionnelle.
        </p>
      </div>

      <div className="relative">
        <img
          src={portraitUrl}
          alt="Portrait"
          className="w-full aspect-square object-cover rounded-xl"
        />
        <Button
          variant="secondary"
          className="absolute bottom-4 left-4 bg-white/90 hover:bg-white"
          onClick={() => (window.location.href = "/about")}
        >
          <User className="mr-2 h-4 w-4" />
          Qui suis-je ?
        </Button>
      </div>
    </div>
  );
};

export default QuickIntro;
