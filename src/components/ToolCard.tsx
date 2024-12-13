import React from 'react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onSelect: (tool: Tool) => void;
}

export function ToolCard({ tool, onSelect }: ToolCardProps) {
  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(tool)}
    >
      <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
      <p className="text-gray-600 text-sm">{tool.description}</p>
    </div>
  );
}