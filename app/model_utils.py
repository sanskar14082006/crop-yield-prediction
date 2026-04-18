import xgboost as xgb
import pandas as pd
import numpy as np
import joblib
import os

# --- 1. DYNAMIC PATH RESOLUTION ---
# Identifies the 'app' folder where this script lives
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Default paths pointing to the new 'app/models/' structure
DEFAULT_MODEL_PATH = os.path.join(BASE_DIR, "models", "crop_model.json")
DEFAULT_SCALER_PATH = os.path.join(BASE_DIR, "models", "scaler.joblib")

# ✅ ALIGNED: Must match your CSV and Notebook features exactly
FEATURES = ['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH_Value', 'Rainfall']

CROP_MAP = {
    0: 'apple', 1: 'banana', 2: 'blackgram', 3: 'chickpea', 4: 'coconut', 
    5: 'coffee', 6: 'cotton', 7: 'grapes', 8: 'jute', 9: 'kidneybeans', 
    10: 'lentil', 11: 'maize', 12: 'mango', 13: 'mothbeans', 14: 'mungbean', 
    15: 'muskmelon', 16: 'orange', 17: 'papaya', 18: 'pigeonpeas', 
    19: 'pomegranate', 20: 'rice', 21: 'watermelon'
}

class YieldPredictor:
    def __init__(self):
        self.model = None
        self.scaler = None

    def load_resources(self, model_path, scaler_path):
        """
        Loads the artifacts. Uses passed paths or defaults.
        Ensures the AI Brain and Scaler are synchronized[cite: 32, 77].
        """
        if self.model is None:
            self.model = xgb.XGBClassifier()
            # If no path is passed from main.py, use the resolved default
            self.model.load_model(model_path or DEFAULT_MODEL_PATH)
            
        if self.scaler is None:
            # If no path is passed from main.py, use the resolved default
            self.scaler = joblib.load(scaler_path or DEFAULT_SCALER_PATH)
            
        print("✅ System Check: AI Model and Scaler are synchronized and online.")

    def predict_all(self, input_dict: dict, model_path=None, scaler_path=None):
        """
        Main inference function called by the FastAPI backend[cite: 33, 71].
        """
        # Load resources before prediction
        self.load_resources(model_path, scaler_path)
        
        # 1. Convert raw input dictionary to a DataFrame for processing
        df_raw = pd.DataFrame([input_dict])[FEATURES]

        # 2. FEATURE NORMALIZATION: Scale data to 0-1 range [cite: 31, 77]
        # This is a critical technical driver to prevent range bias.
        df_scaled = pd.DataFrame(self.scaler.transform(df_raw), columns=FEATURES)

        # 3. PERFORM INFERENCE
        pred_id = int(self.model.predict(df_scaled)[0])
        probs = self.model.predict_proba(df_scaled)
        
        confidence = np.max(probs) * 100
        crop_name = CROP_MAP.get(pred_id, "Unknown")
        
        # Log to terminal for Technical Lead verification
        print(f"DEBUG: Inference Success -> Recommended: {crop_name} ({confidence:.2f}%)")
        
        return crop_name.capitalize(), float(confidence)

# Initialize a single instance to be used across the app
predictor = YieldPredictor()