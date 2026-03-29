"use client";

import { useState } from "react";
import LoginView from "@/components/login-view";
import CropPredictionDashboard from "@/components/crop-prediction-dashboard";

export default function Home() {
  // 1. ✅ Start with isAuthenticated as FALSE
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 2. ✅ This function runs when the login button is clicked
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <main>
      {!isAuthenticated ? (
        // 3. ✅ Show Login if NOT authenticated
        <LoginView onLogin={handleLoginSuccess} />
      ) : (
        // 4. ✅ Show Dashboard ONLY after successful login
        <div className="animate-in fade-in duration-1000">
           <CropPredictionDashboard />
        </div>
      )}
    </main>
  );
}