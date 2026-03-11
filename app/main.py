from fastapi import FastAPI
from pydantic import BaseModel, Field
from .model_utils import predictor

app = FastAPI(title="Crop Yield Prediction API")

class CropInput(BaseModel):
    Nitrogen: float = Field(..., ge=0, le=140)
    Phosphorus: float = Field(..., ge=5, le=145)
    Potassium: float = Field(..., ge=5, le=205)
    Temperature: float = Field(..., ge=8, le=45)
    Humidity: float = Field(..., ge=14, le=100)
    pH_Value: float = Field(..., ge=3.5, le=10)
    Rainfall: float = Field(..., ge=20, le=300)

@app.get("/")
def home():
    return {"status": "Online", "phase": "Week 5 Deployment"}

@app.post("/predict")
def predict_yield(data: CropInput):
    result = predictor.predict(data.dict())
    return {"recommended_crop": result}