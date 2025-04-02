
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Ajuda = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-border">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h1>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700">
                Encontre respostas para as dúvidas mais comuns sobre o sistema de ajuste de matrículas.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como funciona o sistema de ajuste de matrículas?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-3">
                    O sistema opera com dois turnos diários de processamento:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3 text-gray-700">
                    <li>
                      <strong>Turno 1 (13h às 14h):</strong> Processa as solicitações feitas durante a manhã.
                    </li>
                    <li>
                      <strong>Turno 2 (Meia-noite):</strong> Processa as solicitações da tarde e noite.
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    As solicitações são processadas de acordo com critérios de priorização, garantindo um sistema justo para todos os estudantes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Quais são os critérios de prioridade?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-3">
                    Os critérios de prioridade são aplicados na seguinte ordem:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-700">
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
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Como sei se minha solicitação foi aprovada?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Você receberá uma notificação no sistema assim que sua solicitação for processada. Todas as notificações ficam disponíveis na aba "Notificações" do seu dashboard, e você também pode verificar o status de todas as suas solicitações na aba "Histórico".
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Posso cancelar uma solicitação de ajuste?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Sim, você pode cancelar qualquer solicitação que ainda não tenha sido processada. Basta acessar a aba "Histórico" no seu dashboard, localizar a solicitação com status "Pendente" e clicar em "Cancelar Solicitação".
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Por que minha solicitação foi recusada?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-3">
                    Há várias razões pelas quais uma solicitação pode ser recusada:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Não há vagas disponíveis na disciplina</li>
                    <li>Há um conflito de horário com outras disciplinas em que você já está matriculado</li>
                    <li>Você não atende aos pré-requisitos da disciplina</li>
                    <li>Existem estudantes com maior prioridade que ocuparam as vagas disponíveis</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger>O que é o "score acadêmico" usado nos critérios de desempate?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    O score acadêmico é calculado com base no seu histórico escolar, considerando fatores como média global, número de reprovações, semestre atual e outros critérios acadêmicos. Este score é usado como critério de desempate quando dois ou mais estudantes do mesmo grupo de prioridade solicitam a mesma vaga.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger>Esqueci minha senha. Como posso recuperá-la?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Na página de login, clique em "Esqueceu a senha?" e siga as instruções para redefinir sua senha. Você receberá um e-mail com um link para criar uma nova senha. Se não receber o e-mail, verifique sua pasta de spam ou entre em contato com o suporte técnico.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger>Quem devo contatar se tiver problemas com o sistema?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-3">
                    Se você encontrar problemas técnicos ou tiver dúvidas sobre o sistema, entre em contato com nossa equipe de suporte:
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ajuda;
