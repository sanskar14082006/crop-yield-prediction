'use client';

import CropPredictionDashboard from '@/components/crop-prediction-dashboard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 py-12 px-4">
      <CropPredictionDashboard />
    </main>
  );
}
