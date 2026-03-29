import xgboost as xgb
import pandas as pd
import numpy as np
import joblib
import os

# ✅ ALIGNED: These must match your CSV and Notebook features exactly
FEATURES = ['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH_Value', 'Rainfall']

CROP_MAP = {
    0: 'apple', 1: 'banana', 2: 'blackgram', 3: 'chickpea', 4: 'coconut', 
    5: 'coffee', 6: 'cotton', 7: 'grapes', 8: 'jute', 9: 'kidneybeans', 
    10: 'lentil', 11: 'maize', 12: 'mango', 13: 'mothbeans', 14: 'mungbean', 
    15: 'muskmelon', 16: 'orange', 17: 'papaya', 18: 'pigeonpeas', 
    19: 'pomegranate', 20: 'rice', 21: 'watermelon'
}

class YieldPredictor:
    def __init__(self, model_path="notebooks/crop_model.json", scaler_path="notebooks/scaler.joblib"):
        self.model_path = model_path
        self.scaler_path = scaler_path
        self.model = None
        self.scaler = None

    def load_resources(self):
        """Loads both the XGBoost model and the MinMaxScaler."""
        if self.model is None:
            self.model = xgb.XGBClassifier()
            self.model.load_model(self.model_path)
            
        if self.scaler is None:
            self.scaler = joblib.load(self.scaler_path)
            
        print("✅ AI Brain and Scaler are synchronized and online.")

    def predict_all(self, input_dict: dict):
        self.load_resources()
        
        # 1. Convert raw input dictionary to a DataFrame
        df_raw = pd.DataFrame([input_dict])[FEATURES]

        # 2. ⚡ THE MAGIC FIX: Scale the data to 0-1 range
        # This prevents the model from defaulting to 'Apple'
        df_scaled = pd.DataFrame(self.scaler.transform(df_raw), columns=FEATURES)

        # 3. Perform Inference
        pred_id = int(self.model.predict(df_scaled)[0])
        probs = self.model.predict_proba(df_scaled)
        
        confidence = np.max(probs) * 100
        crop_name = CROP_MAP.get(pred_id, "Unknown")
        
        # Log to terminal so you can verify the math is working
        print(f"DEBUG: Scaled Input -> Predicted: {crop_name} ({confidence:.2f}%)")
        
        return crop_name.capitalize(), float(confidence)

predictor = YieldPredictor()