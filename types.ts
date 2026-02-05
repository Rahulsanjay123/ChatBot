
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface SkillData {
  name: string;
  category: string;
  currentDemand: number; // 0-100 score
  growthRate: number; // percentage
  topIndustries: string[];
  historicalDemand: { year: number; score: number }[];
  description: string;
}

export interface ForecastResponse {
  summary: string;
  predictedTrend: 'Rising' | 'Stable' | 'Declining';
  reasons: string[];
  suggestedRoadmap: string[];
  estimatedGrowthNext3Years: number;
}

export type ViewType = 'dashboard' | 'explorer' | 'ai-forecasting' | 'dataset' | 'about';
