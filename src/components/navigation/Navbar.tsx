import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Expertises", href: "/expertises" },
  { name: "Conférences & Ateliers", href: "/events" },
  { name: "Formations", href: "/training" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-full fixed top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Anne Géron
          </Link>

          <nav className="flex items-center gap-12">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-lg font-medium hover:text-gray-900",
                  location.pathname === item.href
                    ? "text-gray-900"
                    : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
