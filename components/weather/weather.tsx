import { Skeleton } from "@mui/material";
import Image, { ImageLoaderProps } from "next/image";
import useSwr from "swr";
import { WeatherResp } from "../../pages/api/weather";
import styles from "./../../styles/weather.module.scss";

const API_KEY = "de0a4534bb8fafcd50bb9112600d7a3d";
const city = "Lviv,ua";
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`;
const fetcher = (url: string): Promise<WeatherResp> =>
  fetch(url).then((res) => res.json());
const ImageLoader = ({ src }: ImageLoaderProps): string => {
  if (!src) throw Error("Image is not provided");
  return `http://openweathermap.org/img/wn/${src}@2x.png`;
};

const generateFirstItemIcon = (data: WeatherResp): string => {
  if (!data) throw Error("No Data Provided");
  if (!data.weather) throw Error("No Weather Provided");
  if (!data.weather[0].icon) throw Error("Can not find icon");
  return data.weather[0].icon;
};
const toTimeString = (time: Date) => new Date(time).toLocaleTimeString();

const Weather = () => {
  const { data, error } = useSwr<WeatherResp>(weatherUrl, fetcher, {
    refreshInterval: 120000,
  });

  if (error) return <div>Failed to load users</div>;
  if (!data) return <Skeleton variant="rectangular" width={210} height={80} />;

  return (
    <div className={styles.weather}>
      <div className={styles.temperature}>
        <p className={styles.degrees}>
          {Math.floor(data.main.temp)} <span>&#8451;</span>
        </p>
        <p className={styles.feels_like}>
          Feels like: <span>{data.main.feels_like}</span>
        </p>
      </div>
      <div className={styles.image}>
        <Image
          loader={ImageLoader}
          src={generateFirstItemIcon(data)}
          alt=""
          width={80}
          height={80}
          quality="2x"
        />
      </div>
      <div className={styles.weather__info}>
        <p>
          City: <span>{data.name}</span>
        </p>
        <p>
          Sunrise: <span>{toTimeString(data.sys.sunrise)}</span>
        </p>
        <p>
          Sunset: <span>{toTimeString(data.sys.sunset)}</span>
        </p>

        <p>
          visibility: <span>{data.visibility}</span>
        </p>
      </div>
    </div>
  );
};
export default Weather;
