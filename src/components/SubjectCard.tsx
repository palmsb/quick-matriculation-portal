
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, Users, Book, Check, X } from "lucide-react";
import { toast } from "sonner";

interface SubjectCardProps {
  code: string;
  name: string;
  vacancies: number;
  schedule: string;
  professor: string;
  isEnrolled?: boolean;
  onRequestEnrollment?: () => void;
  onRequestUnenrollment?: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  code,
  name,
  vacancies,
  schedule,
  professor,
  isEnrolled = false,
  onRequestEnrollment,
  onRequestUnenrollment,
}) => {
  const handleEnrollment = () => {
    if (onRequestEnrollment) {
      onRequestEnrollment();
      toast.success("Solicitação de inclusão enviada com sucesso!");
    }
  };

  const handleUnenrollment = () => {
    if (onRequestUnenrollment) {
      onRequestUnenrollment();
      toast.success("Solicitação de exclusão enviada com sucesso!");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <span className="text-sm font-medium text-gray-500">{code}</span>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Users size={16} className="mr-2" />
          <span>Vagas: <span className={vacancies > 0 ? "text-success font-medium" : "text-destructive font-medium"}>
            {vacancies}
          </span></span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={16} className="mr-2" />
          <span>{schedule}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <Book size={16} className="mr-2" />
          <span>{professor}</span>
        </div>
      </div>
      
      <div className="flex justify-end">
        {isEnrolled ? (
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={handleUnenrollment}
            className="flex items-center"
          >
            <X size={16} className="mr-1" />
            Solicitar Exclusão
          </Button>
        ) : (
          <Button 
            variant="default" 
            size="sm" 
            onClick={handleEnrollment}
            disabled={vacancies <= 0}
            className={`flex items-center ${vacancies > 0 ? 'bg-blue hover:bg-blue-dark' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            <Check size={16} className="mr-1" />
            Solicitar Inclusão
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubjectCard;
