import React from 'react';
import { SkillItem } from '../types';
import { Zap, Star, Trophy, Award } from 'lucide-react';

interface Props {
  skill: SkillItem;
  index?: number;
}

const getIcon = (level: string) => {
  switch(level) {
    case 'Legend': return <Trophy className="w-4 h-4 text-yellow-500" />;
    case 'Expert': return <Star className="w-4 h-4 text-gamma-accent" />;
    case 'Advanced': return <Zap className="w-4 h-4 text-gamma-primary" />;
    default: return <Award className="w-4 h-4 text-gray-500" />;
  }
}

const getBadgeColor = (level: string) => {
  switch(level) {
    case 'Legend': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    case 'Expert': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'Advanced': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    default: return 'bg-gray-800 text-gray-400 border-gray-700';
  }
}

const SkillCard: React.FC<Props> = ({ skill, index = 0 }) => {
  return (
    <div 
      className="flex items-center justify-between p-3 bg-gamma-card border border-gamma-border rounded-lg hover:border-gamma-primary/50 transition-colors group animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-md bg-black/50 group-hover:scale-110 transition-transform`}>
          {getIcon(skill.level)}
        </div>
        <span className="font-medium text-gray-200">{skill.name}</span>
      </div>
      <span className={`text-xs px-2 py-1 rounded border font-mono ${getBadgeColor(skill.level)}`}>
        {skill.level}
      </span>
    </div>
  );
};

export default SkillCard;