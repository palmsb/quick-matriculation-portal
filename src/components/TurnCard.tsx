
import React from "react";
import { Clock, ArrowDown } from "lucide-react";

interface TurnCardProps {
  title: string;
  time: string;
  description: string;
  isActive: boolean;
}

const TurnCard: React.FC<TurnCardProps> = ({ title, time, description, isActive }) => {
  return (
    <div className={`turn-card ${isActive ? 'border-blue ring-1 ring-blue/30' : ''} card-hover`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className={isActive ? "badge-active" : "badge-inactive"}>
          {isActive ? "Ativo" : "Inativo"}
        </span>
      </div>
      
      <div className="flex items-center mb-4 text-sm text-gray-500">
        <Clock size={16} className="mr-2" />
        <span>{time}</span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex justify-center">
        <ArrowDown size={24} className={`${isActive ? "text-blue animate-pulse-light" : "text-gray-300"}`} />
      </div>
    </div>
  );
};

export default TurnCard;
