import { WeatherProvider } from "../context/weather-context";

export default function WeatherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WeatherProvider>{children}</WeatherProvider>;
}
