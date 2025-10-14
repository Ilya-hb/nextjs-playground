import { kelvinToCelcius } from "../lib/utils";
import WeatherDetailsItem from "./weather-details-item";

interface WeatherDetailsProps {
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  windSpeed: number;
  humidity: number;
  visibility: number;
}

export default function WeatherDetails(props: WeatherDetailsProps) {
  const minTemp = kelvinToCelcius(props.tempMin);
  const maxTemp = kelvinToCelcius(props.tempMax);
  const feelsLike = kelvinToCelcius(props.feelsLike);
  return (
    <div className="bg-white rounded-b-xl  border">
      <div className="grid grid-cols-2 divide-x divide-y divide-gray-200">
        <WeatherDetailsItem
          label="Feels like"
          value={`${feelsLike}°C`}
        />
        <WeatherDetailsItem
          label="Min temp"
          value={`${minTemp}°C`}
        />
        <WeatherDetailsItem
          label="Max temp"
          value={`${maxTemp}°C`}
        />
        <WeatherDetailsItem
          label="Wind"
          value={`${props.windSpeed} m/s`}
        />
        <WeatherDetailsItem
          label="Humidity"
          value={`${props.humidity}%`}
        />
        <WeatherDetailsItem
          label="Visibility"
          value={`${props.visibility / 1000} km`}
        />
      </div>
    </div>
  );
}
