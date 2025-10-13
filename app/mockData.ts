import { CityWeather } from "./types/types";

export const mockData: CityWeather = {
  coord: {
    lon: 30.5167,
    lat: 50.4333,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  main: {
    temp: 287.99,
    feels_like: 287.15,
    temp_min: 287.99,
    temp_max: 287.99,
    pressure: 1015,
    humidity: 62,
  },
  visibility: 10000,
  wind: {
    speed: 0.45,
  },
  clouds: {
    all: 32,
  },
  dt: 1760267475,
  name: "Kyiv",
};
