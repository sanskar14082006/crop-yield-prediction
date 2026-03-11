import xgboost as xgb
import pandas as pd
import os

FEATURES = ['Nitrogen', 'Phosphorus', 'Potassium', 'Temperature', 'Humidity', 'pH_Value', 'Rainfall']

# This must match the order of your LabelEncoder in the notebook
CROP_MAP = {
    0: 'apple', 1: 'banana', 2: 'blackgram', 3: 'chickpea', 4: 'coconut', 
    5: 'coffee', 6: 'cotton', 7: 'grapes', 8: 'jute', 9: 'kidneybeans', 
    10: 'lentil', 11: 'maize', 12: 'mango', 13: 'mothbeans', 14: 'mungbean', 
    15: 'muskmelon', 16: 'orange', 17: 'papaya', 18: 'pigeonpeas', 
    19: 'pomegranate', 20: 'rice', 21: 'watermelon'
}

class YieldPredictor:
    def __init__(self, model_path="notebooks/crop_model.json"):
        self.model_path = model_path
        self.model = None
        
    def load_model(self):
        if os.path.exists(self.model_path):
            # 🚨 FIX: Changed from Regressor to Classifier
            self.model = xgb.XGBClassifier()
            self.model.load_model(self.model_path)
            return True
        return False

    def predict(self, data_dict):
        if self.model is None:
            if not self.load_model():
                return "Model file not found. Ensure crop_model.json is in notebooks/."

        input_df = pd.DataFrame([data_dict])
        input_df = input_df[FEATURES] 
        
        # Get numerical prediction
        prediction_id = int(self.model.predict(input_df)[0])
        
        # Return readable name
        return CROP_MAP.get(prediction_id, "Unknown Crop")

predictor = YieldPredictor()