import React, { useEffect } from "react";
import WeatherCard from "../ui/weather/weather-card";
import Search from "../ui/weather/weather-search";
import { useWeather } from "../context/weather-context";

export default function Weather() {
  const { weather, loading, error } = useWeather();

  return (
    <main className="flex justify-center flex-col space-y-5 w-full max-w-[500px]">
      <h1 className="text-4xl mt-20">
        <strong>Next-gen</strong> Weather
      </h1>
      <Search />

      <WeatherCard
        weather={weather}
        loading={loading}
        error={error}
      />
    </main>
  );
}
