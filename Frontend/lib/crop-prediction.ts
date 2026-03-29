import { SoilParameters } from '@/components/crop-prediction-dashboard';

interface CropData {
  crop: string;
  N_min: number;
  N_max: number;
  P_min: number;
  P_max: number;
  K_min: number;
  K_max: number;
  temp_min: number;
  temp_max: number;
  humidity_min: number;
  humidity_max: number;
  ph_min: number;
  ph_max: number;
  rainfall_min: number;
  rainfall_max: number;
}

const cropData: CropData[] = [
  {
    crop: 'Rice',
    N_min: 70,
    N_max: 120,
    P_min: 40,
    P_max: 60,
    K_min: 40,
    K_max: 60,
    temp_min: 21,
    temp_max: 37,
    humidity_min: 60,
    humidity_max: 95,
    ph_min: 5.5,
    ph_max: 7.5,
    rainfall_min: 100,
    rainfall_max: 200,
  },
  {
    crop: 'Maize',
    N_min: 120,
    N_max: 150,
    P_min: 60,
    P_max: 90,
    K_min: 60,
    K_max: 90,
    temp_min: 18,
    temp_max: 27,
    humidity_min: 50,
    humidity_max: 80,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 50,
    rainfall_max: 100,
  },
  {
    crop: 'Chickpea',
    N_min: 20,
    N_max: 40,
    P_min: 45,
    P_max: 75,
    K_min: 40,
    K_max: 80,
    temp_min: 15,
    temp_max: 30,
    humidity_min: 30,
    humidity_max: 60,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 40,
    rainfall_max: 90,
  },
  {
    crop: 'Kidneybeans',
    N_min: 30,
    N_max: 60,
    P_min: 50,
    P_max: 80,
    K_min: 50,
    K_max: 100,
    temp_min: 20,
    temp_max: 30,
    humidity_min: 50,
    humidity_max: 80,
    ph_min: 5.8,
    ph_max: 7.2,
    rainfall_min: 50,
    rainfall_max: 100,
  },
  {
    crop: 'Pigeonpeas',
    N_min: 20,
    N_max: 30,
    P_min: 40,
    P_max: 60,
    K_min: 40,
    K_max: 80,
    temp_min: 21,
    temp_max: 30,
    humidity_min: 40,
    humidity_max: 70,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 60,
    rainfall_max: 120,
  },
  {
    crop: 'Moth',
    N_min: 15,
    N_max: 25,
    P_min: 35,
    P_max: 55,
    K_min: 35,
    K_max: 70,
    temp_min: 15,
    temp_max: 25,
    humidity_min: 25,
    humidity_max: 50,
    ph_min: 5.8,
    ph_max: 7.5,
    rainfall_min: 25,
    rainfall_max: 60,
  },
  {
    crop: 'Mungbean',
    N_min: 20,
    N_max: 40,
    P_min: 40,
    P_max: 60,
    K_min: 50,
    K_max: 100,
    temp_min: 20,
    temp_max: 30,
    humidity_min: 40,
    humidity_max: 70,
    ph_min: 5.8,
    ph_max: 7.2,
    rainfall_min: 30,
    rainfall_max: 80,
  },
  {
    crop: 'Masoor',
    N_min: 20,
    N_max: 40,
    P_min: 50,
    P_max: 80,
    K_min: 40,
    K_max: 80,
    temp_min: 15,
    temp_max: 28,
    humidity_min: 30,
    humidity_max: 60,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 40,
    rainfall_max: 90,
  },
  {
    crop: 'Wheat',
    N_min: 80,
    N_max: 120,
    P_min: 50,
    P_max: 90,
    K_min: 40,
    K_max: 80,
    temp_min: 10,
    temp_max: 23,
    humidity_min: 30,
    humidity_max: 60,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 40,
    rainfall_max: 100,
  },
  {
    crop: 'Barley',
    N_min: 60,
    N_max: 100,
    P_min: 40,
    P_max: 70,
    K_min: 40,
    K_max: 80,
    temp_min: 8,
    temp_max: 22,
    humidity_min: 25,
    humidity_max: 55,
    ph_min: 6.0,
    ph_max: 8.0,
    rainfall_min: 25,
    rainfall_max: 75,
  },
  {
    crop: 'Banana',
    N_min: 60,
    N_max: 100,
    P_min: 35,
    P_max: 65,
    K_min: 120,
    K_max: 160,
    temp_min: 24,
    temp_max: 30,
    humidity_min: 70,
    humidity_max: 95,
    ph_min: 5.5,
    ph_max: 7.5,
    rainfall_min: 100,
    rainfall_max: 200,
  },
  {
    crop: 'Mango',
    N_min: 40,
    N_max: 60,
    P_min: 25,
    P_max: 45,
    K_min: 50,
    K_max: 100,
    temp_min: 24,
    temp_max: 30,
    humidity_min: 50,
    humidity_max: 80,
    ph_min: 5.5,
    ph_max: 7.5,
    rainfall_min: 60,
    rainfall_max: 120,
  },
  {
    crop: 'Grapes',
    N_min: 40,
    N_max: 80,
    P_min: 30,
    P_max: 60,
    K_min: 80,
    K_max: 130,
    temp_min: 15,
    temp_max: 25,
    humidity_min: 30,
    humidity_max: 70,
    ph_min: 6.0,
    ph_max: 8.0,
    rainfall_min: 40,
    rainfall_max: 100,
  },
  {
    crop: 'Watermelon',
    N_min: 60,
    N_max: 100,
    P_min: 50,
    P_max: 80,
    K_min: 80,
    K_max: 130,
    temp_min: 20,
    temp_max: 30,
    humidity_min: 40,
    humidity_max: 80,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 40,
    rainfall_max: 80,
  },
  {
    crop: 'Muskmelon',
    N_min: 60,
    N_max: 100,
    P_min: 50,
    P_max: 80,
    K_min: 100,
    K_max: 150,
    temp_min: 21,
    temp_max: 32,
    humidity_min: 30,
    humidity_max: 70,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 40,
    rainfall_max: 80,
  },
  {
    crop: 'Apple',
    N_min: 40,
    N_max: 60,
    P_min: 25,
    P_max: 50,
    K_min: 50,
    K_max: 100,
    temp_min: 10,
    temp_max: 22,
    humidity_min: 40,
    humidity_max: 70,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 50,
    rainfall_max: 100,
  },
  {
    crop: 'Orange',
    N_min: 40,
    N_max: 80,
    P_min: 30,
    P_max: 60,
    K_min: 80,
    K_max: 130,
    temp_min: 20,
    temp_max: 30,
    humidity_min: 60,
    humidity_max: 85,
    ph_min: 5.5,
    ph_max: 7.5,
    rainfall_min: 75,
    rainfall_max: 150,
  },
  {
    crop: 'Papaya',
    N_min: 60,
    N_max: 100,
    P_min: 30,
    P_max: 60,
    K_min: 100,
    K_max: 150,
    temp_min: 22,
    temp_max: 30,
    humidity_min: 60,
    humidity_max: 90,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 100,
    rainfall_max: 180,
  },
  {
    crop: 'Coconut',
    N_min: 40,
    N_max: 80,
    P_min: 30,
    P_max: 60,
    K_min: 100,
    K_max: 160,
    temp_min: 24,
    temp_max: 30,
    humidity_min: 70,
    humidity_max: 95,
    ph_min: 5.5,
    ph_max: 7.5,
    rainfall_min: 125,
    rainfall_max: 225,
  },
  {
    crop: 'Cotton',
    N_min: 80,
    N_max: 120,
    P_min: 40,
    P_max: 70,
    K_min: 50,
    K_max: 100,
    temp_min: 18,
    temp_max: 32,
    humidity_min: 40,
    humidity_max: 80,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 50,
    rainfall_max: 100,
  },
  {
    crop: 'Sugarcane',
    N_min: 100,
    N_max: 140,
    P_min: 50,
    P_max: 80,
    K_min: 80,
    K_max: 130,
    temp_min: 20,
    temp_max: 30,
    humidity_min: 50,
    humidity_max: 80,
    ph_min: 6.0,
    ph_max: 7.5,
    rainfall_min: 75,
    rainfall_max: 150,
  },
  {
    crop: 'Tobacco',
    N_min: 60,
    N_max: 100,
    P_min: 40,
    P_max: 70,
    K_min: 80,
    K_max: 120,
    temp_min: 15,
    temp_max: 27,
    humidity_min: 40,
    humidity_max: 75,
    ph_min: 5.5,
    ph_max: 7.0,
    rainfall_min: 50,
    rainfall_max: 100,
  },
];

function calculateCropSuitability(
  params: SoilParameters,
  crop: CropData
): number {
  let score = 100;

  // Nitrogen score
  const nitrogenRange = crop.N_max - crop.N_min;
  const nitrogenDist = Math.abs(params.Nitrogen - (crop.N_min + crop.N_max) / 2);
  const nitrogenScore = Math.max(
    0,
    100 - (nitrogenDist / (nitrogenRange / 2)) * 100
  );
  score *= nitrogenScore / 100;

  // Phosphorus score
  const phosphorusRange = crop.P_max - crop.P_min;
  const phosphorusDist = Math.abs(
    params.Phosphorus - (crop.P_min + crop.P_max) / 2
  );
  const phosphorusScore = Math.max(
    0,
    100 - (phosphorusDist / (phosphorusRange / 2)) * 100
  );
  score *= phosphorusScore / 100;

  // Potassium score
  const potassiumRange = crop.K_max - crop.K_min;
  const potassiumDist = Math.abs(params.Potassium - (crop.K_min + crop.K_max) / 2);
  const potassiumScore = Math.max(
    0,
    100 - (potassiumDist / (potassiumRange / 2)) * 100
  );
  score *= potassiumScore / 100;

  // Temperature score
  if (
    params.Temperature >= crop.temp_min &&
    params.Temperature <= crop.temp_max
  ) {
    const tempRange = crop.temp_max - crop.temp_min;
    const tempDist = Math.abs(
      params.Temperature - (crop.temp_min + crop.temp_max) / 2
    );
    const tempScore = 100 - (tempDist / (tempRange / 2)) * 100;
    score *= tempScore / 100;
  } else {
    score *= 0.5;
  }

  // Humidity score
  if (
    params.Humidity >= crop.humidity_min &&
    params.Humidity <= crop.humidity_max
  ) {
    const humidityRange = crop.humidity_max - crop.humidity_min;
    const humidityDist = Math.abs(
      params.Humidity - (crop.humidity_min + crop.humidity_max) / 2
    );
    const humidityScore =
      100 - (humidityDist / (humidityRange / 2)) * 100;
    score *= humidityScore / 100;
  } else {
    score *= 0.6;
  }

  // pH score
  if (params.pH_Value >= crop.ph_min && params.pH_Value <= crop.ph_max) {
    const phRange = crop.ph_max - crop.ph_min;
    const phDist = Math.abs(params.pH_Value - (crop.ph_min + crop.ph_max) / 2);
    const phScore = 100 - (phDist / (phRange / 2)) * 100;
    score *= phScore / 100;
  } else {
    score *= 0.4;
  }

  // Rainfall score
  if (
    params.Rainfall >= crop.rainfall_min &&
    params.Rainfall <= crop.rainfall_max
  ) {
    const rainfallRange = crop.rainfall_max - crop.rainfall_min;
    const rainfallDist = Math.abs(
      params.Rainfall - (crop.rainfall_min + crop.rainfall_max) / 2
    );
    const rainfallScore =
      100 - (rainfallDist / (rainfallRange / 2)) * 100;
    score *= rainfallScore / 100;
  } else {
    score *= 0.5;
  }

  return Math.max(0, Math.min(100, score));
}

export function predictCrop(
  params: SoilParameters
): { crop: string; confidence: number } {
  let bestCrop = cropData[0];
  let bestScore = 0;

  for (const crop of cropData) {
    const score = calculateCropSuitability(params, crop);
    if (score > bestScore) {
      bestScore = score;
      bestCrop = crop;
    }
  }

  return {
    crop: bestCrop.crop,
    confidence: Math.round(bestScore * 10) / 10, // Round to 1 decimal place
  };
}
