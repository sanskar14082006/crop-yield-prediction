from locust import HttpUser, task, between
import random

class CropApiUser(HttpUser):
    # Simulate a user waiting between 1 to 5 seconds between requests
    wait_time = between(1, 5)

    @task
    def predict_crop(self):
        # Randomized soil data based on your Kaggle dataset ranges
        payload = {
            "Nitrogen": random.uniform(0, 140),
            "Phosphorus": random.uniform(5, 145),
            "Potassium": random.uniform(5, 205),
            "Temperature": random.uniform(10, 40),
            "Humidity": random.uniform(15, 95),
            "pH_Value": random.uniform(4, 9),
            "Rainfall": random.uniform(30, 250)
        }
        self.client.post("/predict", json=payload)