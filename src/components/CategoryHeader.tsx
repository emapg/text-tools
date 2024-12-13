import React from 'react';
import { 
  Type, 
  Eraser, 
  BarChart2, 
  Wand2, 
  ArrowLeftRight 
} from 'lucide-react';
import { ToolCategory } from '../types';

const categoryIcons: Record<ToolCategory, React.ReactNode> = {
  formatting: <Type className="w-5 h-5" />,
  cleaning: <Eraser className="w-5 h-5" />,
  analysis: <BarChart2 className="w-5 h-5" />,
  generation: <Wand2 className="w-5 h-5" />,
  conversion: <ArrowLeftRight className="w-5 h-5" />,
};

interface CategoryHeaderProps {
  category: ToolCategory;
  title: string;
}

export function CategoryHeader({ category, title }: CategoryHeaderProps) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
        {categoryIcons[category]}
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}