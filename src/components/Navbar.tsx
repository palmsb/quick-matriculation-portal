
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = location.pathname.includes("/dashboard");

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue font-bold text-xl">MatrículaFácil</span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-blue' : 'text-gray-500 hover:text-blue'}`}>
              Home
            </Link>
            <Link to="/sobre" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/sobre' ? 'text-blue' : 'text-gray-500 hover:text-blue'}`}>
              Sobre
            </Link>
            <Link to="/ajuda" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/ajuda' ? 'text-blue' : 'text-gray-500 hover:text-blue'}`}>
              Ajuda
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center">
            {!isLoggedIn ? (
              <Link to="/login">
                <Button className="flex items-center space-x-2 bg-blue hover:bg-blue-dark text-white">
                  <User size={18} />
                  <span>Entrar</span>
                </Button>
              </Link>
            ) : (
              <Link to="/dashboard">
                <Button className="flex items-center space-x-2 bg-blue hover:bg-blue-dark text-white">
                  <User size={18} />
                  <span>Dashboard</span>
                </Button>
              </Link>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue"
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'text-blue bg-blue/5' : 'text-gray-500 hover:text-blue hover:bg-gray-100'}`}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/sobre' ? 'text-blue bg-blue/5' : 'text-gray-500 hover:text-blue hover:bg-gray-100'}`}
            >
              Sobre
            </Link>
            <Link
              to="/ajuda"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/ajuda' ? 'text-blue bg-blue/5' : 'text-gray-500 hover:text-blue hover:bg-gray-100'}`}
            >
              Ajuda
            </Link>
            {!isLoggedIn ? (
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-blue text-white hover:bg-blue-dark"
              >
                Entrar
              </Link>
            ) : (
              <Link
                to="/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-blue text-white hover:bg-blue-dark"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
