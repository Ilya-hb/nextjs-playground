"use client";
import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="relative">
      <Input
        placeholder="Enter your city"
        onChange={(e) => handleInputChange(e)}
      />
      <Button
        variant={"outline"}
        className="absolute right-0 "
        onSubmit={handleSubmit}
      >
        Search
        <SearchIcon />
      </Button>
    </div>
  );
}
