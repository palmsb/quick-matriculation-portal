
import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetHour: number;
  targetMinute: number;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetHour,
  targetMinute,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let target = new Date();
      target.setHours(targetHour, targetMinute, 0, 0);

      // If target time has passed today, set it for tomorrow
      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        if (onComplete) onComplete();
        return { hours: 0, minutes: 0, seconds: 0 };
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetHour, targetMinute, onComplete]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className="bg-white border border-border rounded-lg p-4">
      <div className="flex items-center text-gray-700 mb-2">
        <Clock size={18} className="mr-2 text-blue" />
        <h3 className="font-medium">Próxima atualização em:</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="bg-blue/5 rounded-md p-2">
          <div className="text-2xl font-bold text-blue">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs text-gray-500">Horas</div>
        </div>
        <div className="bg-blue/5 rounded-md p-2">
          <div className="text-2xl font-bold text-blue">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-xs text-gray-500">Minutos</div>
        </div>
        <div className="bg-blue/5 rounded-md p-2">
          <div className="text-2xl font-bold text-blue">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs text-gray-500">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
