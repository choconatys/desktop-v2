import { useEffect, useState } from "react";
import Head from "next/head";

import Header from "../components/header";
import Button from "../components/button";

import {
  Container,
  Content,
  Cards,
  Card,
  InformationCard,
  BackgroundsWrapper,
  BackgroundInfo,
} from "../styles/pages";
import { api } from "../services/api";
import Loading from "../components/loading";
import balance from "../services/balance";
import { GetServerSideProps } from "next";

const Dashboard: React.FC = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Choconatys | Dashboard</title>
      </Head>

      <Container>
        <Header />
        <Content>
          <BackgroundsWrapper>
            <BackgroundInfo>
              <div className="info">
                <h1>Bem vindo de volta CHOCONATYS_ADMIN!</h1>

                <p>
                  A plataforma foi recentemente atualizada, caso tenha algum
                  problema entre em contato no nosso email: eu@choconatys.com
                </p>

                <Button
                  style={{
                    marginTop: 40,
                    width: 300,
                  }}
                >
                  ENTRAR EM CONTATO
                </Button>
              </div>
            </BackgroundInfo>
          </BackgroundsWrapper>

          <Cards>
            <Card elevation={0}>
              <InformationCard>
                <section className="top">
                  <p>Faturamento Diário</p>
                </section>

                <section className="info">
                  <h1>{balance(data.faturamentoDiario)}</h1>
                </section>
              </InformationCard>
              <div className="icon"></div>
            </Card>

            <Card elevation={0}>
              <InformationCard>
                <section className="top">
                  <p>Total de Clientes</p>
                </section>

                <section className="info">
                  <h1>{data.quantityUsers}</h1>
                </section>
              </InformationCard>
              <div className="icon"></div>
            </Card>

            <Card elevation={0}>
              <InformationCard>
                <section className="top">
                  <p>Faturamento Mensal</p>
                </section>

                <section className="info">
                  <h1>{balance(data.faturamentoMensal)}</h1>
                </section>
              </InformationCard>
              <div className="icon"></div>
            </Card>
          </Cards>
        </Content>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;

  const { cookies } = req;

  const token = cookies["choconatys.token"];

  api.defaults.headers["Authorization"] = `Bearer ${token}`;

  const usersQuantity = await api
    .get("/users/quantity")
    .then((response: any) => {
      return response.data.data;
    });

  const requests = await api.get("/requests").then((response: any) => {
    return response.data.data;
  });

  return {
    props: {
      data: {
        quantityUsers: usersQuantity.length,
        faturamentoDiario: requests.faturamento.diario,
        faturamentoMensal: requests.faturamento.mensal,
      },
    },
  };
};

export default Dashboard;
