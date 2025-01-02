import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface ContactCTAProps {
  email?: string;
  onContactClick?: () => void;
}

const ContactCTA = ({
  email = "contact@example.com",
  onContactClick = () => {},
}: ContactCTAProps) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 text-center">
      <h2 className="text-2xl text-white mb-6 font-medium">
        Notre objectif est de vous permettre de mieux vendre, plus vendre tout
        en accompagnant vos collaborateurs à devenir plus agiles sur des sujets
        tabous et intimes.
      </h2>

      <Button
        size="lg"
        variant="secondary"
        className="bg-white hover:bg-gray-50"
        onClick={onContactClick}
      >
        <Mail className="mr-2 h-5 w-5" />
        Contactez-moi
      </Button>
    </div>
  );
};

export default ContactCTA;
