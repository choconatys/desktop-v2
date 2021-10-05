import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

import GlobalStyle, { myTheme } from "../styles/global";

import Head from "next/head";

import Loading from "../components/loading";
import { Router, useRouter } from "next/dist/client/router";
import { useAuth } from "../providers/auth";
import AppProvider from "../providers";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const {} = useAuth();
  const router = useRouter();

  useEffect(() => {
    Router.events.on("routeChangeComplete", (e) => {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    });

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>Carregando...</title>
      </Head>

      <ThemeProvider theme={myTheme}>
        {loading ? (
          <Loading />
        ) : (
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        )}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
