import React from "react";
import CelsiusIcon from "../../../public/celsius.png";
import Image from "next/image";
import { kelvinToCelcius } from "@/app/lib/utils";
import WeatherDetails from "./weather-details";
import type { ErrorMessage, WeatherData } from "@/app/types/types";
import WeatherCardSkeleton from "./weather-card-skeleton";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
};

interface WeatherCardProps {
  weather: WeatherData | null;
  error: ErrorMessage | null;
  loading: boolean;
}

export default function WeatherCard({
  weather,
  error,
  loading,
}: WeatherCardProps) {
  console.log(loading);
  if (!weather) {
    return <WeatherCardSkeleton />;
  }

  const currentDate = new Date().toLocaleString("en-GB", dateOptions);
  const celcius = kelvinToCelcius(weather.main.temp);
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  return (
    <>
      <div className="px-5 py-2 border-1 rounded-sm bg-gray-50">
        <div className="flex w-full items-center justify-between">
          <p className="font-light text-3xl">{weather.name}</p>
          <h2 className="text-neutral-400">{currentDate}</h2>
        </div>
        <div className="flex gap-3 justify-center text-center py-10 items-center bg-gradient-to-bl from-blue-300 to-cyan-300 rounded-t-xl">
          <Image
            src={iconUrl}
            alt="2"
            width={80}
            height={80}
          />
          <h1 className="text-7xl font-extralight">{celcius} </h1>
          <Image
            src={CelsiusIcon}
            alt="Celsius"
            width={60}
          />
        </div>
        <WeatherDetails
          feelsLike={weather.main.feels_like}
          humidity={weather.main.humidity}
          tempMax={weather.main.temp_max}
          tempMin={weather.main.temp_min}
          visibility={weather.visibility}
          windSpeed={weather.wind.speed}
        />
      </div>
    </>
  );
}
