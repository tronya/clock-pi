import type { NextPage } from 'next'
import { Fragment} from 'react'
import styles from '../styles/Home.module.scss'
import Clock from '../components/clock/clock'
import Weather from '../components/weather/weather'

const Home: NextPage = () => {
  return (
    <Fragment>
        <div className={styles.row + " " + styles.clock_wrap}>
          <Clock></Clock>
        </div>
        <div className={styles.row}>
          <Weather></Weather>
        </div>
    </Fragment>
  )
}

export default Home
