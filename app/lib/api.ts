import type { ErrorMessage, WeatherData } from "../types/types";
import type { Comment } from "../pagination/page";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const isWeatherData = (data: unknown): data is WeatherData => {
  return (
    typeof data === "object" &&
    data !== null &&
    "weather" in data &&
    "main" in data
  );
};
const isErrorMessage = (data: unknown): data is ErrorMessage => {
  return (
    typeof data === "object" &&
    data !== null &&
    "cod" in data &&
    "message" in data
  );
};

export async function getWeather(city: string) {
  try {
    const res = await fetch(
      BASE_URL +
        "weather?q=" +
        city +
        "&appid=" +
        process.env.NEXT_PUBLIC_OPENWEATHER_API
    );
    const data: unknown = await res.json();
    if (isWeatherData(data)) return data;
    if (isErrorMessage(data)) return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getHourlyForecast(currentCity: WeatherData) {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast?lat=${currentCity.coord.lat}&lon=${currentCity.coord.lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API}`
    );
    const data: unknown = await res.json();
    console.log(data);
    if (isWeatherData(data)) return data;
    if (isErrorMessage(data)) return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getComments(limit: number, page: number) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`
    );
    if (!res.ok) throw new Error("Failed to fetch comments");
    const data: Comment[] | null = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
