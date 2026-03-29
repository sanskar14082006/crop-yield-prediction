'use client';

import { SoilParameters } from './crop-prediction-dashboard';

interface SoilInputSectionProps {
  parameters: SoilParameters;
  onParameterChange: (parameter: keyof SoilParameters, value: number) => void;
}

const parameterConfig = {
  Nitrogen: { min: 0, max: 140, unit: 'mg/kg', icon: '🌿' },
  Phosphorus: { min: 0, max: 145, unit: 'mg/kg', icon: '⚡' },
  Potassium: { min: 0, max: 205, unit: 'mg/kg', icon: '✨' },
  Temperature: { min: 8, max: 43, unit: '°C', icon: '🌡️' },
  Humidity: { min: 14, max: 99, unit: '%', icon: '💧' },
  pH_Value: { min: 3.5, max: 9.5, unit: 'pH', icon: '⚖️' },
  Rainfall: { min: 20, max: 225, unit: 'mm', icon: '🌧️' },
};

export default function SoilInputSection({
  parameters,
  onParameterChange,
}: SoilInputSectionProps) {
  return (
    <div className="space-y-8">
      {(Object.entries(parameterConfig) as Array<
        [keyof SoilParameters, (typeof parameterConfig)[keyof SoilParameters]
      ]>).map(([key, config]) => (
        <div key={key} className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-semibold text-emerald-900 dark:text-emerald-50">
              <span className="text-xl">{config.icon}</span>
              {key}
            </label>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                {parameters[key].toFixed(1)}
              </span>
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                {config.unit}
              </span>
            </div>
          </div>
          <input
            type="range"
            min={config.min}
            max={config.max}
            step={0.1}
            value={parameters[key]}
            onChange={(e) => onParameterChange(key, parseFloat(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-emerald-200 to-emerald-400 dark:from-emerald-800 dark:to-emerald-600 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, 
                rgb(167, 243, 208) 0%, 
                rgb(52, 211, 153) ${((parameters[key] - config.min) / (config.max - config.min)) * 100}%, 
                rgb(209, 250, 229) ${((parameters[key] - config.min) / (config.max - config.min)) * 100}%, 
                rgb(209, 250, 229) 100%
              )`,
            }}
          />
          <div className="flex justify-between text-xs text-emerald-500 dark:text-emerald-400">
            <span>{config.min}</span>
            <span>{config.max}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
