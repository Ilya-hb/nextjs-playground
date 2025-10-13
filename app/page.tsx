import { Header } from "./ui/header";
import Search from "./ui/search";
import WeatherCard from "./ui/weather-card";

export default function Home() {
  return (
    <>
      <Header />
      <div className="font-sans container mx-auto items-center justify-center flex mt-10">
        <main className="flex justify-center flex-col space-y-5 w-full max-w-[500px]">
          <h1 className="text-4xl mt-20">
            <strong>Next-gen</strong> Weather
          </h1>
          <Search />
          <WeatherCard />
        </main>
      </div>
    </>
  );
}
