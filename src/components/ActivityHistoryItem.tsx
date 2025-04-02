
import React from "react";
import { CheckCircle2, XCircle, Clock } from "lucide-react";

interface ActivityHistoryItemProps {
  type: "enrollment" | "unenrollment";
  subject: string;
  code: string;
  status: "pending" | "approved" | "rejected";
  timestamp: string;
}

const ActivityHistoryItem: React.FC<ActivityHistoryItemProps> = ({
  type,
  subject,
  code,
  status,
  timestamp,
}) => {
  const getStatusIcon = () => {
    switch (status) {
      case "approved":
        return <CheckCircle2 size={18} className="text-success" />;
      case "rejected":
        return <XCircle size={18} className="text-destructive" />;
      case "pending":
      default:
        return <Clock size={18} className="text-amber-500" />;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "approved":
        return "Aprovado";
      case "rejected":
        return "Rejeitado";
      case "pending":
      default:
        return "Pendente";
    }
  };

  return (
    <div className="border-b border-border py-3 last:border-b-0">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <div className="mr-3">
            {getStatusIcon()}
          </div>
          <div>
            <h4 className="text-sm font-medium">
              {type === "enrollment" ? "Inclusão" : "Exclusão"} - {subject}
            </h4>
            <div className="text-xs text-gray-500">{code}</div>
          </div>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          status === "approved" ? "bg-success/10 text-success" :
          status === "rejected" ? "bg-destructive/10 text-destructive" :
          "bg-amber-500/10 text-amber-500"
        }`}>
          {getStatusText()}
        </span>
      </div>
      <div className="flex items-center mt-2 text-xs text-gray-500 ml-7">
        <Clock size={12} className="mr-1" />
        <span>{timestamp}</span>
      </div>
    </div>
  );
};

export default ActivityHistoryItem;
