import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { SkillItem } from '../types';

interface ChartProps {
  data: SkillItem[];
  color?: string;
  onClick?: (data: any, index: number) => void;
}

export const SkillBarChart: React.FC<ChartProps> = ({ data, color = "#4285F4", onClick }) => {
  return (
    <div className="h-[400px] w-full bg-gamma-card/30 rounded-xl p-4 border border-gamma-border">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={120} 
            tick={{ fill: '#e0e0e0', fontSize: 12, fontFamily: 'monospace' }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#121212', borderColor: '#333' }}
            itemStyle={{ color: '#fff' }}
            cursor={{fill: 'transparent'}}
          />
          <Bar 
            dataKey="score" 
            radius={[0, 4, 4, 0]} 
            barSize={20}
            onClick={(data, index) => onClick && onClick(data, index)}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.score === 100 ? '#A142F4' : (entry.score > 80 ? '#4285F4' : '#333')} 
                style={{ cursor: onClick ? 'pointer' : 'default' }}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const SkillRadarChart: React.FC<ChartProps> = ({ data, color = "#34A853" }) => {
  return (
    <div className="h-[400px] w-full bg-gamma-card/30 rounded-xl p-4 border border-gamma-border">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ fill: '#a0a0a0', fontSize: 11 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="score"
            stroke={color}
            strokeWidth={2}
            fill={color}
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#121212', borderColor: '#333' }}
            itemStyle={{ color: color }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};