from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware # ✅ Step 1: Import CORS
from pydantic import BaseModel
from .model_utils import predictor

app = FastAPI(title="Agri-Intel API - REFRESHED")

# ✅ Step 2: Add the Handshake logic
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows your dashboard to connect
    allow_credentials=True,
    allow_methods=["*"], # Allows POST and OPTIONS
    allow_headers=["*"],
)

class CropInput(BaseModel):
    Nitrogen: float
    Phosphorus: float
    Potassium: float
    Temperature: float
    Humidity: float
    pH_Value: float
    Rainfall: float

@app.get("/")
def home():
    return {"status": "LIVE", "msg": "If you see this, the code is updated!"}

@app.post("/predict")
def predict_crop(data: CropInput):
    try:
        # Pass the dictionary to our predict_all function
        crop, conf = predictor.predict_all(data.model_dump())
        
        return {
    "recommended_crop": crop,
    "confidence_score": round(conf, 2),  # ✅ Return as a NUMBER (e.g., 99.52)
    "status": "Success"
       }
    except Exception as e:
        print(f"❌ API CRASH: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))