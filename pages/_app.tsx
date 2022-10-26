import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MapIcon from "@mui/icons-material/Map";
import TimelineIcon from "@mui/icons-material/Timeline";
import TelegramIcon from '@mui/icons-material/Telegram';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "../styles/globals.css";
import styles from "../styles/Home.module.scss";

import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <main className={styles.container}>
        <div className={styles.main}>
          <Component {...pageProps} />
        </div>
        <BottomNavigation showLabels>
          <Link href="/">
            <BottomNavigationAction label="Time" icon={<AccessTimeIcon />} />
          </Link>
          <Link href="/money">
            <BottomNavigationAction label="Money" icon={<TimelineIcon />} />
          </Link>
          <Link href="/map">
            <BottomNavigationAction label="Map" icon={<MapIcon />} />
          </Link>
          <Link href="/telegram">
            <BottomNavigationAction label="Telegram" icon={<TelegramIcon />} />
          </Link>
        </BottomNavigation>
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
