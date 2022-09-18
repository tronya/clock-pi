import { Button } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useRef, useState } from "react";
import styles from "../../styles/money.module.scss"

function useInterval(callback: any, delay: number) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}

const Money: NextPage = () => {
    const [money, setMoney] = useState<number>(0)
    const [celary, setCelary] = useState<number>(2900)

    const counterCalculator = celary / 20 / 8 / 24 / 60;

    useInterval(() => {
        const total = Number((counterCalculator + money).toFixed(2))
        setMoney(total)
    }, 1000);

    return (
        <Fragment>
            <Head>
                <title>Money</title>
            </Head>
            <div className={styles.container}>
                <small>{celary}</small>
                <div className={styles.money}>
                    <p>{money}</p>
                    <b>$</b>
                </div>
                <div className={styles.money}>
                    <p>{(money * 42).toFixed(2)}</p>
                    <b>hrn</b>
                </div>
                <Button onClick={() => setMoney(0)}>Reset</Button>
            </div>
        </Fragment>
    )
}

export default Money;