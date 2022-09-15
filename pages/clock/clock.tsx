import { useEffect, useState } from 'react';
import styles from './../../styles/Clock.module.scss';

const Clock = () => {
    const [timestamp, setTimeStamp] = useState<Date>(new Date())

    useEffect(() => {
      const timer = setInterval(() => {
        const date = new Date();
        setTimeStamp(date)
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    
    return (
        <div className={styles.clock}>
            <p className={styles.digits}>{timestamp.getHours()}</p><b className={styles.dot}>:</b>
            <p className={styles.digits}>{timestamp.getMinutes().toString().padStart(2,'0')}</p><b className={styles.dot}>:</b>
            <p className={styles.digits}>{timestamp.getSeconds().toString().padStart(2,'0')}</p>
        </div>
    )
}

export default Clock