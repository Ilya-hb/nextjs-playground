"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  CachedData,
  ErrorMessage,
  WeatherContextType,
  WeatherData,
} from "../types/types";
import { getWeather } from "../lib/api";

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<ErrorMessage | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!weather) {
      getCache();
    }
  }, []);

  const writeCache = (weather: WeatherData) => {
    localStorage.removeItem("cache");
    const serializedWeather = JSON.stringify({
      weather,
      timestamp: Date.now(),
      expiresIn: 43200,
    });
    localStorage.setItem("cache", serializedWeather);
  };

  const searchCity = async (city: string) => {
    setLoading(true);
    if (!city.trim()) return;
    try {
      const res = await getWeather(city);
      if (res)
        if ("weather" in res) {
          setWeather(res);
          writeCache(res);
        } else {
          setError(res);
          console.log(res);
        }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown error while fetchin weather";
      console.log(message);
    }
    setLoading(false);
  };

  const getCache = () => {
    const cache = localStorage.getItem("cache");
    if (cache) {
      const cachedWeather: CachedData = JSON.parse(cache);
      const isCacheValid =
        Date.now() - cachedWeather.timestamp < cachedWeather.expiresIn;
      if (isCacheValid) {
        console.log("Cache got: ", cachedWeather.weather);
        setWeather(cachedWeather.weather);
      } else {
        console.log("Cache is old, fetching new data");
        localStorage.removeItem("cache");
        searchCity("Kiev");
      }
    } else searchCity("Kiev");
  };

  return (
    <WeatherContext.Provider value={{ weather, searchCity, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
