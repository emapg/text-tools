export interface TextState {
  input: string;
  output: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  process: (text: string) => string;
}

export type ToolCategory = 
  | 'formatting'
  | 'cleaning'
  | 'analysis'
  | 'generation'
  | 'conversion';