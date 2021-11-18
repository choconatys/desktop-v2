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
import Loading from "../components/loading";
import balance from "../services/balance";
import { api } from "../services/api";
import { useAuth } from "../providers/auth";

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [quantityUsers, setQuantityUsers] = useState(0);
  const [faturamentoTotal, setFaturamentoTotal] = useState(0);
  const [faturamentoDiario, setFaturamentoDiario] = useState(0);

  const { user } = useAuth();

  useEffect(() => {
    api
      .get("/users/quantity")
      .then((response: any) => {
        setQuantityUsers(response.data.data.length);
      })
      .then(() => {
        api
          .get("/requests")
          .then((response: any) => {
            setFaturamentoTotal(response.data.data.faturamento.total || 0);
            setFaturamentoDiario(response.data.data.faturamento.diario || 0);
          })
          .finally(() => setLoading(false));
      });
  }, []);

  return (
    <>
      <Head>
        <title>Choconatys | Dashboard</title>
      </Head>

      <Container>
        <Header />

        {loading ? (
          <Loading />
        ) : (
          <Content>
            <BackgroundsWrapper>
              <BackgroundInfo>
                <div className="info">
                  <h1>Bem vindo de volta {user.name}!</h1>

                  <p>
                    A plataforma foi recentemente atualizada, caso tenha algum
                    problema entre em contato no nosso email: eu@choconatys.com
                  </p>
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
                    <h1>{balance(faturamentoDiario)}</h1>
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
                    <h1>{quantityUsers}</h1>
                  </section>
                </InformationCard>
                <div className="icon"></div>
              </Card>

              <Card elevation={0}>
                <InformationCard>
                  <section className="top">
                    <p>Faturamento Total</p>
                  </section>

                  <section className="info">
                    <h1>{balance(faturamentoTotal)}</h1>
                  </section>
                </InformationCard>
                <div className="icon"></div>
              </Card>
            </Cards>
          </Content>
        )}
      </Container>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { req } = ctx;

//   const { cookies } = req;

//   const token = cookies["choconatys.token"];

//   api.defaults.headers["Authorization"] = `Bearer ${token}`;

//   const usersQuantity = await api
//     .get("/users/quantity")
//     .then((response: any) => {
//       return response.data.data;
//     });

//   const requests = await api.get("/requests").then((response: any) => {
//     return response.data.data;
//   });

// return {
//   props: {
//     data: {
//       quantityUsers: usersQuantity.length,
//       faturamentoDiario: requests.faturamento.diario,
//       faturamentoTotal: requests.faturamento.mensal,
//     },
//   },
// };
// };

export default Dashboard;
