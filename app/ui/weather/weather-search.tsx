"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { Search as SearchIcon } from "lucide-react";
import { useWeather } from "../../context/weather-context";
import { WeatherData } from "@/app/types/types";
import { getHourlyForecast } from "@/app/lib/api";

export default function WeatherSearch() {
  const [search, setSearch] = useState("");
  const { searchCity, error, weather } = useWeather();

  useEffect(() => {
    setSearch("");
  }, [error]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    searchCity(search);
  };

  // const handleGetForecast = async (currentWeather: WeatherData) => {
  //   await getHourlyForecast(currentWeather);
  // };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Enter your city"
        value={search}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <Button
        variant={"outline"}
        className="absolute right-0 "
        onClick={handleSubmit}
      >
        Search
        <SearchIcon />
      </Button>
      {/* <Button
        variant={"default"}
        onClick={() => {
          if (weather) handleGetForecast(weather);
        }}
      >
        get hourly forecast
      </Button> */}
    </div>
  );
}
