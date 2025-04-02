
import React from "react";
import { Progress } from "@/components/ui/progress";

interface PriorityGroupProps {
  name: string;
  description: string;
  score: number;
  maxScore: number;
  isUserGroup?: boolean;
}

const PriorityGroup: React.FC<PriorityGroupProps> = ({
  name,
  description,
  score,
  maxScore,
  isUserGroup = false,
}) => {
  const percentage = (score / maxScore) * 100;

  return (
    <div className={`border ${isUserGroup ? 'border-blue bg-blue/5' : 'border-border bg-white'} rounded-lg p-4 mb-3`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className={`font-medium ${isUserGroup ? 'text-blue' : 'text-gray-900'}`}>{name}</h3>
        {isUserGroup && (
          <span className="text-xs font-medium bg-blue text-white px-2 py-1 rounded-full">
            Seu grupo
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Score de Prioridade</span>
          <span className="text-xs font-medium">{score} / {maxScore}</span>
        </div>
        <Progress value={percentage} className={`h-2 ${isUserGroup ? 'bg-blue/20' : ''}`} />
      </div>
    </div>
  );
};

export default PriorityGroup;
