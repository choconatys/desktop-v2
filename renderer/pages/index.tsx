import { Paper } from "@mui/material";
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

const Dashboard: React.FC = () => {
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
                  <h1>R$ 0,00</h1>
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
                  <h1>1</h1>
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
                  <h1>R$ 0,00</h1>
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

export default Dashboard;
