import ErrorModel from "../components/errorModel";

import Button from "../components/button";

import Head from "next/head";
import { useRouter } from "next/dist/client/router";

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Choconatys | 404</title>
      </Head>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <ErrorModel
          title="Erro!"
          subTitle="Nada foi encontrado aqui!"
          type="notFoundPage"
        />
      </div>
    </>
  );
};

export default NotFound;
