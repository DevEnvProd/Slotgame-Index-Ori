import { VolatilityInfo } from '../types';

export const volatilityData: VolatilityInfo[] = [
  {
    level: 'Low',
    color: '#4CAF50',
    description: 'Frequent small wins with low risk to your bankroll.',
    winFrequency: 'High (Frequent)',
    playingTime: 'Long',
    riskLevel: 'Low',
    bestFor: ['Beginners', 'Small budgets', 'Casual players', 'Clearing bonuses'],
    bankrollRecommendation: '100x - 200x your average bet size.',
    strategy: 'Focus on longer sessions and enjoying the game features. Great for players who want to play for a long time without losing their bankroll quickly.'
  },
  {
    level: 'Medium',
    color: '#FFC107',
    description: 'A balanced experience with a mix of small and medium-sized wins.',
    winFrequency: 'Moderate',
    playingTime: 'Average',
    riskLevel: 'Medium',
    bestFor: ['Most players', 'Balanced bankrolls', 'Players who enjoy bonus rounds'],
    bankrollRecommendation: '200x - 400x your average bet size.',
    strategy: 'The most popular slot type. It offers a good balance of entertainment and potential for decent payouts. Suitable for players who want a bit of excitement without extreme risk.'
  },
  {
    level: 'High',
    color: '#FF9800',
    description: 'Less frequent wins, but with the potential for much larger payouts.',
    winFrequency: 'Low',
    playingTime: 'Variable',
    riskLevel: 'High',
    bestFor: ['Experienced players', 'Patient players', 'Jackpot hunters', 'Larger bankrolls'],
    bankrollRecommendation: '400x - 800x your average bet size.',
    strategy: 'Requires patience and a larger bankroll to weather the "dry spells" between wins. The goal is to hit the bonus feature or a high-multiplier win.'
  },
  {
    level: 'Extreme',
    color: '#F44336',
    description: 'Very rare wins, but with massive payout potential (10,000x to 300,000x).',
    winFrequency: 'Very Low',
    playingTime: 'Short (unless you hit big)',
    riskLevel: 'Very High',
    bestFor: ['High rollers', 'Thrill seekers', 'Players chasing life-changing wins'],
    bankrollRecommendation: '800x+ your average bet size.',
    strategy: 'High-risk, high-reward. Be prepared for your bankroll to disappear quickly. Only play with money you are completely comfortable losing. The potential for a massive win is the main draw.'
  }
];
