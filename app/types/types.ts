export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  name: string;
}

export interface WeatherContextType {
  weather: WeatherData | null;
  searchCity: (city: string) => Promise<void>;
  loading: boolean;
  error: ErrorMessage | null;
}

export interface ErrorMessage {
  cod: string;
  message: string;
}

export interface CachedData {
  weather: WeatherData;
  timestamp: number;
  expiresIn: number;
}
