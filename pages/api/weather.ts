// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export interface WeatherResp {
  name:string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  clouds: {
    all: number
  };
  sys: { country: string, sunrise: Date, sunset: Date };
  timezone?: number;
  visibility?: number,
  weather?: WeatherItem[]
}

interface WeatherItem {
  description: string;
  icon: string;
  id: number;
  main: string;
}



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherResp>
) {
  res.status(200).json({
    name: 'John Doe',
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max:0,
      temp_min: 0
    },
    clouds: {
      all: 0
    },
    sys:{
      country:"",
      sunrise: new Date(),
      sunset: new Date()
    },
    weather:[]
  })
}
