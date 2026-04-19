'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, Loader2, BarChart3, Search } from 'lucide-react';
import SoilInputSection from './soil-input-section';
import ResultsSection from './results-section';

// ✅ Interface matches the exact keys your XGBoost model expects
export interface SoilParameters {
  Nitrogen: number;
  Phosphorus: number;
  Potassium: number;
  Temperature: number;
  Humidity: number;
  pH_Value: number;
  Rainfall: number;
}

export default function CropPredictionDashboard() {
  // 1. Unified State for Soil Data
  const [parameters, setParameters] = useState<SoilParameters>({
    Nitrogen: 50,
    Phosphorus: 45,
    Potassium: 40,
    Temperature: 25,
    Humidity: 65,
    pH_Value: 6.5,
    Rainfall: 100,
  });

  // 2. Consistent Loading & Prediction States
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<{
    crop: string;
    confidence: number; 
  } | null>(null);

  // 3. Updated Parameter Handler
  const handleParameterChange = (parameter: keyof SoilParameters, value: number) => {
    setParameters(prev => ({
      ...prev,
      [parameter]: value,
    }));
  };

  // 4. 🔥 HARDCODED PRODUCTION ANALYZE FUNCTION
  // This guarantees the frontend finds the Render backend regardless of local environment settings.
  const handleAnalyze = async () => {
    setIsPredicting(true);
    try {
      // 🚀 DIRECT CLOUD ENDPOINT
      const API_URL = "https://agri-intel-plus-api.onrender.com/predict";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parameters), 
      });

      if (!response.ok) throw new Error(`Server Error: ${response.status}`);

      const data = await response.json();

      // ✅ Map backend response to frontend state
      setPrediction({
        crop: data.recommended_crop,
        confidence: data.confidence_score 
      });

    } catch (error) {
      console.error("Connection Failed:", error);
      // Helpful alert for the Render "Free Tier" sleep behavior
      alert("AI Server is waking up... Please wait 30 seconds and try again.");
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-12 text-center animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600 text-white mb-4 shadow-lg shadow-emerald-200">
          <Sprout className="h-6 w-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 dark:text-emerald-50 mb-2 tracking-tight">
          Agricultural Crop Predictor
        </h1>
        <p className="text-lg text-emerald-700 dark:text-emerald-200 opacity-80">
          Analyze soil conditions and get AI-powered crop recommendations
        </p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Input Section */}
        <section className="glass bg-white/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/40 ring-1 ring-black/5">
          <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-50 mb-8 flex items-center gap-3">
            <span className="p-2 bg-emerald-100 rounded-lg">🌱</span>
            Soil Analysis
          </h2>
          
          <SoilInputSection
            parameters={parameters}
            onParameterChange={handleParameterChange}
          />
          
          <Button
            onClick={handleAnalyze} 
            disabled={isPredicting}
            className="w-full mt-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-7 rounded-2xl transition-all duration-300 shadow-xl shadow-emerald-200 active:scale-[0.98] disabled:opacity-70"
          >
            {isPredicting ? (
              <span className="flex items-center gap-3">
                <Loader2 className="h-5 w-5 animate-spin" />
                AI Inference in Progress...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Analyze Soil & Predict
              </span>
            )}
          </Button>
        </section>

        {/* Right Column: Results Section */}
        <section className="glass bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 min-h-[500px] flex flex-col">
          <h2 className="text-2xl font-semibold text-emerald-900 dark:text-emerald-50 mb-8 flex items-center gap-3">
            <span className="p-2 bg-emerald-100 rounded-lg">🌾</span>
            Prediction Results
          </h2>
          
          <div className="flex-grow flex flex-col justify-center">
            {prediction ? (
              <ResultsSection prediction={prediction} />
            ) : (
              <div className="text-center py-12 animate-pulse">
                <div className="text-7xl mb-6 grayscale opacity-20">📊</div>
                <p className="text-emerald-600 dark:text-emerald-300 text-lg font-medium max-w-[250px] mx-auto">
                  Adjust soil parameters on the left to generate recommendations
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer Data Display */}
      {prediction && (
        <footer className="glass bg-emerald-900/5 backdrop-blur-md rounded-3xl p-8 mt-8 shadow-xl border border-emerald-100 animate-in zoom-in-95 duration-500">
          <div className="flex items-center gap-2 mb-6 text-emerald-900 font-bold uppercase tracking-wider text-sm">
            <BarChart3 className="h-4 w-4" />
            Telemetry Data Sent to Model
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {Object.entries(parameters).map(([key, value]) => (
              <div
                key={key}
                className="bg-white/60 p-4 rounded-2xl border border-emerald-100 flex flex-col shadow-sm"
              >
                <p className="text-[10px] text-emerald-500 font-bold uppercase mb-1">
                  {key.replace('_', ' ')}
                </p>
                <p className="text-xl font-black text-emerald-900">
                  {value.toFixed(1)}
                </p>
              </div>
            ))}
          </div>
        </footer>
      )}
    </div>
  );
}