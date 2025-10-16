"use client";
import { useWeather } from "./context/weather-context";
import { Header } from "./ui/header";
import WeatherCard from "./ui/weather/weather-card";
import { toast } from "sonner";
import WeatherSearch from "./ui/weather/weather-search";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="font-sans container mx-auto items-center justify-center flex mt-10">
      <h1 className="mt-20">main page</h1>
    </div>
  );
}
