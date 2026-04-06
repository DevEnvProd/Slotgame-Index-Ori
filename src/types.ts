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
