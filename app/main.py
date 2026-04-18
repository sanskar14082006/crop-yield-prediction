import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from . import model_utils

# --- 1. DYNAMIC PATH RESOLUTION ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "models", "crop_model.json")
SCALER_PATH = os.path.join(BASE_DIR, "models", "scaler.joblib")

# --- 2. INITIALIZE APP ---
app = FastAPI(
    title="Agri-Intel Plus API", 
    version="2.1.0"
)

# --- 3. CORS CONFIGURATION ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- 4. DATA VALIDATION SCHEMA (CRITICAL FIX) ---
# This must exist BEFORE the @app.post function
class CropInput(BaseModel):
    Nitrogen: float = Field(..., ge=0, le=140)
    Phosphorus: float = Field(..., ge=5, le=145)
    Potassium: float = Field(..., ge=5, le=205)
    Temperature: float = Field(..., ge=8, le=45)
    Humidity: float = Field(..., ge=14, le=100)
    pH_Value: float = Field(..., ge=3.5, le=10)
    Rainfall: float = Field(..., ge=20, le=300)

# --- 5. HEALTH CHECK ---
@app.get("/")
def home():
    model_exists = os.path.exists(MODEL_PATH)
    scaler_exists = os.path.exists(SCALER_PATH)
    return {
        "status": "LIVE", 
        "project": "Agri-Intel Plus",
        "verification": {
            "model_found": model_exists,
            "scaler_found": scaler_exists
        }
    }

# --- 6. PREDICTION ENDPOINT ---
@app.post("/predict")
def predict_crop(data: CropInput):
    try:
        # data.model_dump() uses the CropInput class defined above
        crop, conf = model_utils.predictor.predict_all(
            data.model_dump(), 
            MODEL_PATH, 
            SCALER_PATH
        )
        
        return {
            "recommended_crop": crop,
            "confidence_score": round(conf, 2),
            "status": "Success"
        }
    except Exception as e:
        print(f"❌ INFERENCE ERROR: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))