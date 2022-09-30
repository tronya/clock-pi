import React, { Fragment } from 'react';
import styles from "../../styles/Map.module.scss";

const Map = () => {
    return (
        <div className={styles.map}>
             <iframe src="https://alerts.in.ua/"></iframe>
        </div>
    )
}

export default Map;