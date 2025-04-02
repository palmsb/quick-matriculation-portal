
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TurnCard from "@/components/TurnCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, CheckCircle2, Shield } from "lucide-react";

// Determina qual turno está ativo com base na hora atual
const getCurrentTurn = (): "turno1" | "turno2" | null => {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 13 && currentHour < 14) {
    return "turno1";
  } else if (currentHour >= 0 && currentHour < 1) {
    return "turno2";
  }
  
  return null;
};

const Index = () => {
  const activeTurn = getCurrentTurn();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:space-x-16">
              <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
                  Ajuste de Matrículas
                  <span className="text-blue block">
                    Simples e Transparente
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 animate-slide-in">
                  O ajuste de matrículas ficou mais rápido, justo e transparente!
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link to="/login">
                    <Button className="btn-primary w-full sm:w-auto">
                      Acessar Sistema
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/ajuda">
                    <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                      Como Funciona
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl font-semibold text-center mb-6">Turnos de Atualização</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <TurnCard
                      title="Turno 1"
                      time="13h às 14h"
                      description="Mostra o resultado das tentativas de ajuste da manhã."
                      isActive={activeTurn === "turno1"}
                    />
                    <TurnCard
                      title="Turno 2"
                      time="Ao virar o dia (00h)"
                      description="Atualização com as solicitações da tarde."
                      isActive={activeTurn === "turno2"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Funciona</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nosso sistema foi desenvolvido para tornar o processo de ajuste de matrículas mais eficiente e justo para todos os estudantes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Clock size={28} className="text-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atualizações em Tempo Real</h3>
                <p className="text-gray-600">
                  Visualize em tempo real a disponibilidade de vagas e acompanhe suas solicitações.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <CheckCircle2 size={28} className="text-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Feedback Imediato</h3>
                <p className="text-gray-600">
                  Receba notificações sobre o status de suas solicitações assim que forem processadas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield size={28} className="text-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sistema de Priorização</h3>
                <p className="text-gray-600">
                  Critérios claros de priorização garantem um processo justo para todos os estudantes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para começar seu ajuste de matrícula?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Acesse o sistema agora e acompanhe em tempo real todas as atualizações do seu processo de ajuste.
            </p>
            <Link to="/login">
              <Button className="bg-white text-blue hover:bg-blue-50 font-medium px-8 py-3 text-lg">
                Acessar o Sistema
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
