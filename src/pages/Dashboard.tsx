
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Filter, Book, ClipboardList, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubjectCard from "@/components/SubjectCard";
import NotificationItem from "@/components/NotificationItem";
import PriorityGroup from "@/components/PriorityGroup";
import CountdownTimer from "@/components/CountdownTimer";
import ActivityHistoryItem from "@/components/ActivityHistoryItem";

// Mock subjects data
const mockSubjects = [
  { 
    id: 1, code: "COMP101", name: "Introdução à Computação", vacancies: 5, 
    schedule: "Seg/Qua 10:00-12:00", professor: "Dr. Silva" 
  },
  { 
    id: 2, code: "MATH202", name: "Cálculo Avançado", vacancies: 0, 
    schedule: "Ter/Qui 14:00-16:00", professor: "Dra. Santos" 
  },
  { 
    id: 3, code: "PHYS103", name: "Física Básica", vacancies: 3, 
    schedule: "Sex 08:00-12:00", professor: "Dr. Oliveira" 
  },
  { 
    id: 4, code: "CHEM250", name: "Química Orgânica", vacancies: 7, 
    schedule: "Ter/Qui 16:00-18:00", professor: "Dra. Fernandes" 
  },
  { 
    id: 5, code: "BIO115", name: "Biologia Celular", vacancies: 2, 
    schedule: "Seg/Qua 08:00-10:00", professor: "Dr. Costa" 
  },
  { 
    id: 6, code: "ENG300", name: "Engenharia de Software", vacancies: 0, 
    schedule: "Qua/Sex 14:00-16:00", professor: "Dr. Martins" 
  },
];

// Mock notifications
const mockNotifications = [
  { 
    id: 1, type: "success", message: "Inclusão na disciplina COMP101 aprovada!", 
    timestamp: "Hoje, 13:15", isNew: true 
  },
  { 
    id: 2, type: "error", message: "Não foi possível incluir MATH202. Sem vagas disponíveis.", 
    timestamp: "Hoje, 13:10", isNew: false 
  },
  { 
    id: 3, type: "info", message: "O Turno 1 está ativo! Verifique suas solicitações.", 
    timestamp: "Hoje, 13:00", isNew: false 
  },
  { 
    id: 4, type: "success", message: "Exclusão da disciplina ENG300 aprovada!", 
    timestamp: "Ontem, 15:45", isNew: false 
  },
];

// Mock activity history
const mockActivityHistory = [
  {
    id: 1, type: "enrollment", subject: "Introdução à Computação", code: "COMP101",
    status: "approved", timestamp: "Hoje, 13:15"
  },
  {
    id: 2, type: "enrollment", subject: "Cálculo Avançado", code: "MATH202",
    status: "rejected", timestamp: "Hoje, 13:10"
  },
  {
    id: 3, type: "unenrollment", subject: "Engenharia de Software", code: "ENG300",
    status: "approved", timestamp: "Ontem, 15:45"
  },
  {
    id: 4, type: "enrollment", subject: "Física Básica", code: "PHYS103",
    status: "pending", timestamp: "Hoje, 14:30"
  },
];

const Dashboard = () => {
  const [enrolledSubjects, setEnrolledSubjects] = useState<number[]>([1]);
  const [subjects, setSubjects] = useState(mockSubjects);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);
  const [newNotifications, setNewNotifications] = useState(1);
  
  const handleEnrollmentRequest = (subjectId: number) => {
    // In a real app, this would make an API request
    // For now, we'll just simulate a successful enrollment
    setEnrolledSubjects([...enrolledSubjects, subjectId]);
    
    // Add a pending activity to the history
    const subject = subjects.find(s => s.id === subjectId);
    if (subject) {
      toast.success(`Solicitação de inclusão em ${subject.name} enviada com sucesso!`);
    }
  };
  
  const handleUnenrollmentRequest = (subjectId: number) => {
    // In a real app, this would make an API request
    // For now, we'll just simulate a successful unenrollment
    setEnrolledSubjects(enrolledSubjects.filter(id => id !== subjectId));
    
    // Add a pending activity to the history
    const subject = subjects.find(s => s.id === subjectId);
    if (subject) {
      toast.success(`Solicitação de exclusão de ${subject.name} enviada com sucesso!`);
    }
  };
  
  const handleSearch = () => {
    const filtered = subjects.filter(subject => 
      subject.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      subject.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subject.professor.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSubjects(filtered);
  };
  
  const markAllAsRead = () => {
    setNewNotifications(0);
    toast.info("Todas as notificações foram marcadas como lidas");
  };
  
  // Update filtered subjects when search query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredSubjects(subjects);
    } else {
      handleSearch();
    }
  }, [searchQuery, subjects]);
  
  // Play a sound when a new notification arrives
  const playNotificationSound = () => {
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3");
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play failed:", e));
  };
  
  // Simulate receiving a new notification
  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotification = {
        id: Date.now(),
        type: "info" as const,
        message: "Lembrete: O Turno 2 começará à meia-noite!",
        timestamp: "Agora",
        isNew: true
      };
      
      setNotifications([newNotification, ...notifications]);
      setNewNotifications(prev => prev + 1);
      playNotificationSound();
      
      toast.info("Nova notificação recebida!", {
        duration: 3000,
      });
    }, 30000); // After 30 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard do Estudante</h1>
              <p className="text-gray-500">Bem-vindo de volta, acompanhe seu ajuste de matrícula</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <div className="relative">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="relative"
                  onClick={() => document.getElementById("notifications-tab")?.click()}
                >
                  <Bell size={18} />
                  {newNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {newNotifications}
                    </span>
                  )}
                </Button>
              </div>
              <CountdownTimer
                targetHour={23}
                targetMinute={59}
                onComplete={() => toast.info("O Turno 2 está começando agora!")}
              />
            </div>
          </div>
          
          <Tabs defaultValue="subjects" className="space-y-6">
            <TabsList className="grid grid-cols-4 md:w-[400px]">
              <TabsTrigger value="subjects" className="flex items-center">
                <Book size={16} className="mr-2 hidden md:block" />
                <span>Disciplinas</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" id="notifications-tab" className="flex items-center">
                <Bell size={16} className="mr-2 hidden md:block" />
                <span>Notificações</span>
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center">
                <ClipboardList size={16} className="mr-2 hidden md:block" />
                <span>Histórico</span>
              </TabsTrigger>
              <TabsTrigger value="priority" className="flex items-center">
                <Clock size={16} className="mr-2 hidden md:block" />
                <span>Prioridade</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="subjects" className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Buscar disciplinas, códigos ou professores..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon" className="md:w-auto">
                    <Filter size={18} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {filteredSubjects.map((subject) => (
                    <SubjectCard
                      key={subject.id}
                      code={subject.code}
                      name={subject.name}
                      vacancies={subject.vacancies}
                      schedule={subject.schedule}
                      professor={subject.professor}
                      isEnrolled={enrolledSubjects.includes(subject.id)}
                      onRequestEnrollment={() => handleEnrollmentRequest(subject.id)}
                      onRequestUnenrollment={() => handleUnenrollmentRequest(subject.id)}
                    />
                  ))}
                </div>
                
                {filteredSubjects.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-gray-500">Nenhuma disciplina encontrada.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Notificações</h2>
                  {newNotifications > 0 && (
                    <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                      Marcar todas como lidas
                    </Button>
                  )}
                </div>
                
                <div className="space-y-1">
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      message={notification.message}
                      timestamp={notification.timestamp}
                      isNew={notification.isNew}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
                <h2 className="text-lg font-medium mb-4">Histórico de Atividades</h2>
                
                <div className="space-y-1">
                  {mockActivityHistory.map((activity) => (
                    <ActivityHistoryItem
                      key={activity.id}
                      type={activity.type as "enrollment" | "unenrollment"}
                      subject={activity.subject}
                      code={activity.code}
                      status={activity.status as "pending" | "approved" | "rejected"}
                      timestamp={activity.timestamp}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="priority">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
                <h2 className="text-lg font-medium mb-4">Sistema de Priorização</h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Seu Status</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-blue text-white">Veterano</Badge>
                    <Badge variant="outline">Score: 7.8</Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    Os critérios de priorização são aplicados quando há mais solicitações do que vagas disponíveis. Seu grupo e posição no ranking determinam suas chances de conseguir uma vaga.
                  </p>
                  
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Grupos de Prioridade</h3>
                  <div className="space-y-4">
                    <PriorityGroup
                      name="Formandos"
                      description="Estudantes em seu último semestre"
                      score={10}
                      maxScore={10}
                    />
                    
                    <PriorityGroup
                      name="Veteranos"
                      description="Estudantes do mesmo curso da disciplina"
                      score={7.8}
                      maxScore={10}
                      isUserGroup={true}
                    />
                    
                    <PriorityGroup
                      name="Calouros"
                      description="Estudantes em seus primeiros semestres"
                      score={6.5}
                      maxScore={10}
                    />
                    
                    <PriorityGroup
                      name="Outros Cursos"
                      description="Estudantes de outros cursos e programas"
                      score={4}
                      maxScore={10}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
