import React from "react";
import { mockData } from "../mockData";
import { kelvinToCelcius } from "../lib/utils";
import CelsiusIcon from "../../public/celsius.png";
import Image from "next/image";
import WeatherDetails from "./weather-details";

const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
};
export default async function WeatherCard() {
  const currentDate = new Date().toLocaleString("en-GB", dateOptions);
  const celcius = kelvinToCelcius(mockData.main.temp);
  const iconUrl = `https://openweathermap.org/img/wn/${mockData.weather[0].icon}.png`;

  return (
    <>
      <div className="px-5 py-2 border-1 rounded-sm">
        <div className="flex w-full items-center justify-between">
          <p className="font-light text-3xl">{mockData.name}</p>
          <h2 className="text-neutral-400">{currentDate}</h2>
        </div>
        <div className="flex gap-3 justify-center text-center py-10 items-center">
          <Image
            src={iconUrl}
            alt="2"
            width={80}
            className="invert "
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
          feelsLike={mockData.main.feels_like}
          humidity={mockData.main.humidity}
          tempMax={mockData.main.temp_max}
          tempMin={mockData.main.temp_min}
          visibility={mockData.visibility}
          windSpeed={mockData.wind.speed}
        />
      </div>
    </>
  );
}
