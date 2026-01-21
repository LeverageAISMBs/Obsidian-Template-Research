export type Category = 'all' | 'neural' | 'productivity' | 'academic' | 'creative';

export interface TemplateStats {
  automation: number;
  ease: number;
  aesthetics: number;
  mobile: number;
  cost: number;
}

export interface Template {
  id: number;
  name: string;
  category: Category;
  author: string;
  tagline: string;
  desc: string;
  stats: TemplateStats;
  plugins: string[];
  structure: string;
  users: string;
}

export interface TrendDataPoint {
  year: string;
  neural: number;
  para: number;
  zettel: number;
}

export interface MarketShareDataPoint {
  name: string;
  value: number;
  fill: string;
}

export interface PersonaFormData {
  role: string;
  complexity: string;
}
