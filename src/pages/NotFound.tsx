
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-6">
          <h1 className="text-9xl font-bold text-blue mb-6">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button className="bg-blue hover:bg-blue-dark flex items-center">
              <Home size={18} className="mr-2" />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
