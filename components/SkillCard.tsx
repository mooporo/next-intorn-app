import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SkillCardProps {
  icon: React.ReactNode; // <-- แก้ตรงนี้
  name: string;
  percentage: number;
}

export default function SkillCard({ icon, name, percentage }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-20 h-20">
        <({
            pathColor: '#f97316',
            textColor: '#f97316',
            trailColor: '#333',
          })}
        />
      </div>
      <div className="text-white flex flex-col items-center mt-2">
        <div className="text-3xl">{icon}</div>
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
}
