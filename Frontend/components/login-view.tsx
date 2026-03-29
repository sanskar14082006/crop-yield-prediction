'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sprout, Lock, User, ArrowRight, Loader2 } from 'lucide-react';

interface LoginViewProps {
  onLogin: () => void;
}

export default function LoginView({ onLogin }: LoginViewProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication delay for a dynamic feel
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200 dark:from-emerald-950 dark:via-emerald-900 dark:to-emerald-950 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob" />
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000" />

      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-8 duration-1000 z-10">
        <div className="glass bg-white/60 dark:bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-white/10 ring-1 ring-black/5">
          
          {/* Logo & Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-600 text-white mb-6 shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50 transform transition hover:scale-105 duration-300">
              <Sprout className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-emerald-950 dark:text-emerald-50 tracking-tight mb-2">
              Agri-Intel Plus
            </h1>
            <p className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">
              Secure access to AI crop predictions
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider ml-1">
                Farmer ID / Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500 group-focus-within:text-emerald-600 transition-colors">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-black/20 border border-emerald-100 dark:border-emerald-800/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-emerald-300 dark:placeholder:text-emerald-700 text-emerald-950 dark:text-emerald-50 font-medium"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider ml-1">
                Passcode
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500 group-focus-within:text-emerald-600 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-black/20 border border-emerald-100 dark:border-emerald-800/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-emerald-300 dark:placeholder:text-emerald-700 text-emerald-950 dark:text-emerald-50 font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-200 dark:shadow-emerald-900/20 active:scale-[0.98] disabled:opacity-80 group text-lg"
            >
              {isLoading ? (
                <span className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Authenticating...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Access Dashboard
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          {/* Footer branding */}
          <div className="mt-8 text-center">
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              Powered by Advanced XGBoost Inference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
