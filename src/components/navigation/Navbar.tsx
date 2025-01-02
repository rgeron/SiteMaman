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
    <div className="w-full fixed top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center py-4">
          <Link to="/" className="mb-4">
            <img src="/logo.svg" alt="Anne Géron" className="h-12" />
          </Link>

          <nav className="flex justify-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-link",
                  location.pathname === item.href && "active",
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
