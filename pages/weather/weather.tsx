import React from 'react'
import useSwr from 'swr'
import { WeatherResp } from '../api/weather'
import styles from "./../../styles/weather.module.scss"

const API_KEY = "de0a4534bb8fafcd50bb9112600d7a3d"
const city = "Lviv,ua"
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
const fetcher = (url: string) => fetch(url).then((res) => res.json())

const toTimeString = (time: Date) => new Date(time).toLocaleTimeString()
const Weather = () => {
    const { data, error } = useSwr<WeatherResp>(weatherUrl, fetcher, {refreshInterval: 120000})
    console.log(data, error)
    if (error) return <div>Failed to load users</div>
    if (!data) return <div>Loading...</div>

    const img_link = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    return (
        <div className={styles.weather}>
            <div className={styles.temperature}>
                <p className={styles.degrees}>{Math.floor(data.main.temp)} <span>&#8451;</span></p>
                <p className={styles.feels_like}>Feels like: <span>{data.main.feels_like}</span></p>
            </div>
            <div className={styles.image}>
            <img src={img_link} alt="" />
            </div>
            <div className={styles.weather__info}>
                <p>City: <span>{data.name}</span></p>
                <p>Sunrise: <span>{toTimeString(data.sys.sunrise)}</span></p>
                <p>Sunset: <span>{toTimeString(data.sys.sunset)}</span></p>

                <p>visibility: <span>{data.visibility}</span></p>
            </div>
        </div>
    )
}
export default Weather;