'use client';

import { useEffect, useState } from 'react';

interface ResultsSectionProps {
  prediction: {
    crop: string;
    confidence: number;
  };
}

export default function ResultsSection({ prediction }: ResultsSectionProps) {
  const [animatedConfidence, setAnimatedConfidence] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1 second animation
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setAnimatedConfidence(progress * prediction.confidence);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [prediction.confidence]);

  const confidencePercent = animatedConfidence;
  const gaugeRotation = (confidencePercent / 100) * 180 - 90;

  const cropEmojis: Record<string, string> = {
    Rice: '🍚',
    Maize: '🌽',
    Chickpea: '🫘',
    Kidneybeans: '🫘',
    Pigeonpeas: '🫘',
    Mothbeans: '🌿',
    Mungbean: '🫘',
    Blackgram: '🫘',
    Coffee: '☕',
    Masoor: '🫘',
    Lentil: '🫘',
    Pomegranate: '🍎',
    Banana: '🍌',
    Mango: '🥭',
    Grapes: '🍇',
    Watermelon: '🍉',
    Muskmelon: '🍈',
    Apple: '🍎',
    Orange: '🍊',
    Papaya: '🧡',
    Coconut: '🥥',
    Cotton: '🤍',
    Sugarcane: '🍃',
    Tobacco: '🌿',
    Arecanut: '🌴',
    Jute: '🌿',
    Barley: '🌾',
    Wheat: '🌾',
    Ragi: '🌾',
  };

  const cropEmoji = cropEmojis[prediction.crop] || '🌱';

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8">
      {/* Crop Recommendation */}
      <div className="w-full text-center">
        <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium uppercase tracking-wide mb-3">
          Recommended Crop
        </p>
        <div className="text-6xl mb-4">{cropEmoji}</div>
        <h3 className="text-4xl font-bold text-emerald-900 dark:text-emerald-50 mb-2">
          {prediction.crop}
        </h3>
        <p className="text-emerald-700 dark:text-emerald-300 text-sm">
          Based on your soil analysis
        </p>
      </div>

      {/* Confidence Gauge */}
      <div className="w-full">
        <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium uppercase tracking-wide mb-6 text-center">
          Model Confidence
        </p>

        {/* Circular Gauge */}
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48">
            {/* Background circle */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
            >
              {/* Gauge background */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-emerald-100 dark:text-emerald-900"
              />

              {/* Gauge fill */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#confidenceGradient)"
                strokeWidth="8"
                strokeDasharray={`${(confidencePercent / 100) * 565} 565`}
                className="transition-all duration-300"
                style={{
                  transform: 'rotate(-90deg)',
                  transformOrigin: '100px 100px',
                }}
              />

              {/* Gradient definition */}
              <defs>
                <linearGradient
                  id="confidenceGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                  <stop offset="100%" stopColor="rgb(134, 239, 172)" />
                </linearGradient>
              </defs>

              {/* Center circle */}
              <circle
                cx="100"
                cy="100"
                r="75"
                fill="currentColor"
                className="text-emerald-50 dark:text-emerald-950/50"
              />
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-emerald-900 dark:text-emerald-50">
                {confidencePercent.toFixed(0)}%
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                Confidence
              </span>
            </div>
          </div>
        </div>

        {/* Confidence bar */}
        <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-1">
          <div
            className="bg-gradient-to-r from-emerald-500 to-emerald-400 dark:from-emerald-400 dark:to-emerald-300 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${confidencePercent}%` }}
          />
        </div>

        {/* Confidence label */}
        <div className="mt-4 text-center">
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            {confidencePercent >= 85
              ? '✨ Excellent match for your conditions'
              : confidencePercent >= 70
                ? '👍 Good match for your conditions'
                : confidencePercent >= 50
                  ? '⚠️ Moderate match, monitor conditions'
                  : '⚠️ Marginal conditions, review soil parameters'}
          </p>
        </div>
      </div>
    </div>
  );
}
