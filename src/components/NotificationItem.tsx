
import React from "react";
import { Check, X, Bell, Clock } from "lucide-react";

interface NotificationItemProps {
  type: "success" | "error" | "info";
  message: string;
  timestamp: string;
  isNew?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  type,
  message,
  timestamp,
  isNew = false,
}) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <Check size={18} className="text-success" />;
      case "error":
        return <X size={18} className="text-destructive" />;
      case "info":
      default:
        return <Bell size={18} className="text-blue" />;
    }
  };

  const getContainerClass = () => {
    switch (type) {
      case "success":
        return "notification-success";
      case "error":
        return "notification-error";
      case "info":
      default:
        return "bg-blue/10 border-l-4 border-blue text-blue p-3 rounded";
    }
  };

  return (
    <div className={`${getContainerClass()} mb-3 relative ${isNew ? 'animate-slide-in' : ''}`}>
      {isNew && (
        <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
      )}
      <div className="flex items-start">
        <div className="mr-3">{getIcon()}</div>
        <div className="flex-1">
          <p className="text-sm">{message}</p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            <span>{timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
