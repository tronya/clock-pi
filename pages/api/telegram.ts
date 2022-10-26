import { NextApiRequest, NextApiResponse } from "next";

var TelegramBot = require('telegrambot');

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
  ) {
    console.log("Hre",req,res)
    var api = new TelegramBot(process.env.TELEGRAM_TOKEN);
    api.getMe(console.log);
    console.log(api)
    res.status(200).json()
  };