
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre o Sistema de Ajuste de Matrículas</h1>
            
            <div className="prose prose-blue max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                O Sistema de Ajuste de Matrículas foi desenvolvido para simplificar e tornar mais transparente o processo 
                de ajuste de matrículas para estudantes universitários. Nosso objetivo é proporcionar uma experiência 
                justa e eficiente para todos.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Nossa Missão</h2>
              <p className="text-gray-700 mb-6">
                Facilitar o acesso às disciplinas desejadas pelos estudantes, otimizando o uso das vagas disponíveis 
                e proporcionando um processo transparente e equitativo para todos.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Como Funciona</h2>
              <p className="text-gray-700 mb-4">
                O sistema opera com dois turnos diários de processamento:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                <li>
                  <strong>Turno 1 (13h às 14h):</strong> Processa as solicitações feitas durante a manhã e atualiza 
                  as vagas disponíveis.
                </li>
                <li>
                  <strong>Turno 2 (Meia-noite):</strong> Processa as solicitações da tarde e noite, atualizando novamente 
                  o sistema para o dia seguinte.
                </li>
              </ul>
              <p className="text-gray-700 mb-6">
                Durante esses turnos, o sistema analisa todas as solicitações recebidas e aplica os critérios de 
                priorização para determinar quais serão atendidas quando há mais solicitações do que vagas disponíveis.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Critérios de Priorização</h2>
              <p className="text-gray-700 mb-4">
                Os seguintes critérios são aplicados em ordem decrescente de prioridade:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-700">
                <li>
                  <strong>Formandos:</strong> Estudantes em seu último semestre têm prioridade máxima.
                </li>
                <li>
                  <strong>Estudantes do curso:</strong> Alunos matriculados no curso ao qual a disciplina pertence.
                </li>
                <li>
                  <strong>Calouros:</strong> Estudantes em seus primeiros semestres.
                </li>
                <li>
                  <strong>Outros cursos:</strong> Estudantes de outros programas acadêmicos.
                </li>
              </ol>
              <p className="text-gray-700 mb-6">
                Em caso de empate dentro de um mesmo grupo de prioridade, o sistema usa o score acadêmico do estudante 
                como critério de desempate.
              </p>
              
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contato e Suporte</h2>
              <p className="text-gray-700 mb-2">
                Se você tiver dúvidas ou precisar de assistência, entre em contato com nossa equipe de suporte:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> suporte@matriculafacil.edu
                </li>
                <li>
                  <strong>Telefone:</strong> (00) 1234-5678
                </li>
                <li>
                  <strong>Horário de atendimento:</strong> Segunda a Sexta, das 8h às 18h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
