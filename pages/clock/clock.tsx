import { Head } from 'next/document';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import styles from '../../styles/Clock.module.scss'

const delay = 5000;

const Clock = () => {
  const [timestamp, setTimeStamp] = useState<Date>(new Date("December 17, 1995 03:24:00"))

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTimeStamp(date)
    }, delay);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className={styles.clock}>
        <p className={styles.digits}>{timestamp.getHours().toString().padStart(2, '0')}</p><b className={styles.dot}>:</b>
        <p className={styles.digits}>{timestamp.getMinutes().toString().padStart(2, '0')}</p>
      </div>
  )
}

export default Clock