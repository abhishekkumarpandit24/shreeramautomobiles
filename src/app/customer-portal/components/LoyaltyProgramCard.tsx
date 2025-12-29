'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LoyaltyReward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  icon: string;
  available: boolean;
}

interface LoyaltyProgramCardProps {
  currentPoints: number;
  tier: string;
  nextTierPoints: number;
  rewards: LoyaltyReward[];
  onRedeemReward: (id: string) => void;
}

const LoyaltyProgramCard = ({
  currentPoints,
  tier,
  nextTierPoints,
  rewards,
  onRedeemReward,
}: LoyaltyProgramCardProps) => {
  const progressToNextTier = (currentPoints / nextTierPoints) * 100;

  const tierColors = {
    Bronze: 'bg-orange-100 text-orange-800',
    Silver: 'bg-gray-100 text-gray-800',
    Gold: 'bg-yellow-100 text-yellow-800',
    Platinum: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg p-6 text-primary-foreground">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-1">Loyalty Rewards</h3>
          <p className="text-sm opacity-90">Your exclusive benefits program</p>
        </div>
        <div className="text-right">
          <span
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              tierColors[tier as keyof typeof tierColors] || tierColors.Bronze
            }`}
          >
            {tier} Member
          </span>
        </div>
      </div>

      <div className="bg-white/10 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm opacity-90">Current Points</span>
          <span className="text-3xl font-bold">{currentPoints.toLocaleString('en-IN')}</span>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs opacity-80 mb-1">
            <span>Progress to Next Tier</span>
            <span>{nextTierPoints.toLocaleString('en-IN')} points</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressToNextTier, 100)}%` }}
            />
          </div>
        </div>
        <p className="text-xs opacity-80">
          {nextTierPoints - currentPoints > 0
            ? `${(nextTierPoints - currentPoints).toLocaleString('en-IN')} points to next tier`
            : 'Maximum tier achieved!'}
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-lg mb-3">Available Rewards</h4>
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`bg-white/10 rounded-lg p-4 ${!reward.available ? 'opacity-50' : ''}`}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={reward.icon} size={20} variant="solid" />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold mb-1">{reward.title}</h5>
                <p className="text-sm opacity-90 mb-2">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">
                    {reward.pointsRequired.toLocaleString('en-IN')} points
                  </span>
                  {reward.available ? (
                    <button
                      onClick={() => onRedeemReward(reward.id)}
                      className="px-4 py-1 bg-white text-primary rounded text-sm font-medium hover:bg-white/90 transition-colors duration-300"
                    >
                      Redeem
                    </button>
                  ) : (
                    <span className="text-xs opacity-70">Not enough points</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-white/20">
        <button className="w-full px-4 py-3 bg-white text-primary rounded hover:bg-white/90 transition-colors duration-300 font-medium flex items-center justify-center gap-2">
          <Icon name="GiftIcon" size={18} variant="solid" />
          View All Rewards
        </button>
      </div>
    </div>
  );
};

export default LoyaltyProgramCard;
