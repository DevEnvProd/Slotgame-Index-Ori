export type VolatilityLevel = 'Low' | 'Medium' | 'High' | 'Extreme';

export interface SlotGame {
  id: string;
  slug: string;
  name: string;
  provider: string;
  volatility: VolatilityLevel;
  rtp: number;
  maxWin: number; // x bet
  minBet: number;
  maxBet: number;
  description: string;
  strategyTips: string[];
  popularity: number; // 1-100
}

export interface VolatilityInfo {
  level: VolatilityLevel;
  color: string;
  description: string;
  winFrequency: string;
  playingTime: string;
  riskLevel: string;
  bestFor: string[];
  bankrollRecommendation: string;
  strategy: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML format to hold custom links and formatting naturally
  publishDate: string; // YYYY-MM-DD
  readTime: string;
  author: string;
  imageUrl: string;
  category: string;
}
