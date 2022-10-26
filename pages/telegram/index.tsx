import useSwr from "swr";
import Telegram from "../../components/telegram/telegram";


const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

  //const url = `https://api.telegram.org/bot5734386519:AAGD5H0KcorviESqWpgaZXbmDPQnoMwM9Hk/setWebhook?url=https://api.telegram.org/api/tlg`
  const url = `https://api.telegram.org/bot5734386519:AAGD5H0KcorviESqWpgaZXbmDPQnoMwM9Hk/getUpdates`

const TelegramPage = () => {
    const {data,error} = useSwr<any>(url, fetcher);
      console.log(data,error)
  return <Telegram></Telegram>
};

export default TelegramPage;
