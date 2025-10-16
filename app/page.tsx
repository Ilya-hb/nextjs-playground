"use client";
import { useWeather } from "./context/weather-context";
import { Header } from "./ui/header";
import WeatherCard from "./ui/weather/weather-card";
import { toast } from "sonner";
import WeatherSearch from "./ui/weather/weather-search";
import { useEffect } from "react";

export default function Home() {
  const { weather, loading, error } = useWeather();

  useEffect(() => {
    if (error) toast.error(`Error: ${error.message}`);
  }, [error]);
  return (
    <>
      <Header />
      <div className="font-sans container mx-auto items-center justify-center flex mt-10">
        <main className="flex justify-center flex-col space-y-5 w-full max-w-[500px]">
          <h1 className="text-4xl mt-20">
            <strong>Next-gen</strong> Weather
          </h1>
          <WeatherSearch />

          <WeatherCard
            weather={weather}
            loading={loading}
            error={error}
          />
        </main>
      </div>
    </>
  );
}
