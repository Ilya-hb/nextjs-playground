import type { WeatherData } from "../types/types";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";
// const GEOCODE_URL = "http://api.openweathermap.org/geo/1.0/";
// export function getUsersGeo() {
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   };
//   function success(pos: any) {
//     let crd = pos.coords;
//     console.log(crd);
//   }
//   const result = navigator.geolocation.getCurrentPosition(
//     success,
//     (err) => {
//       console.log(err);
//     },
//     options
//   );
//   return result;
// }

export async function getWeather(city: string) {
  try {
    const res = await fetch(
      BASE_URL +
        "weather?q=" +
        city +
        "&appid=" +
        process.env.NEXT_PUBLIC_OPENWEATHER_API
    );
    const data: WeatherData = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDefaultWeather() {
  try {
    const res = await fetch(
      BASE_URL +
        "weather?q=Kiev&appid=" +
        process.env.NEXT_PUBLIC_OPENWEATHER_API,
      { next: { revalidate: 86400 } }
    );
    const data: WeatherData = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export async function getCoordsByName(q: string) {
//   try {
//     const res = await fetch(
//       GEOCODE_URL +
//         "direct?q=" +
//         q +
//         "&limit=3&appid=" +
//         process.env.NEXT_PUBLIC_OPENWEATHER_API
//     );
//     const data: GeocodeData[] = await res.json();
//     const { name, lat, lon } = data[0];
//     return { name, lat, lon };
//   } catch (error) {
//     console.log(error);
//   }
// }
