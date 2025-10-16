"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { Search as SearchIcon } from "lucide-react";
import { useWeather } from "../../context/weather-context";

export default function WeatherSearch() {
  const [search, setSearch] = useState("");
  const { searchCity, loading, error } = useWeather();

  useEffect(() => {
    setSearch("");
  }, [error]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async () => {
    searchCity(search);
  };

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
    </div>
  );
}
