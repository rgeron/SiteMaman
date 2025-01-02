import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

interface ContactCTAProps {
  email?: string;
  onContactClick?: () => void;
}

const ContactCTA = ({
  email = "contact@example.com",
  onContactClick = () => {},
}: ContactCTAProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
  };

  return (
    <div className="bg-gray-100 rounded-xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl text-gray-900 font-medium">Contactez-moi</h2>
          <p className="text-gray-600">
            Notre objectif est de vous permettre de mieux vendre, plus vendre
            tout en accompagnant vos collaborateurs à devenir plus agiles sur
            des sujets tabous et intimes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">
              Nom *
            </Label>
            <Input
              id="name"
              required
              className="border-gray-200"
              placeholder="Votre nom"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Adresse email *
            </Label>
            <Input
              id="email"
              type="email"
              required
              className="border-gray-200"
              placeholder="votre@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              required
              className="border-gray-200 min-h-[120px]"
              placeholder="Votre message..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            <Mail className="mr-2 h-4 w-4" />
            Envoyer le message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactCTA;
