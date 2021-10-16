import Head from "next/head";

import { useEffect, useState } from "react";

import Header from "../components/header";
import Button from "../components/button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Container, Content } from "../styles/pages/products";
import { Paper } from "@mui/material";
import { api } from "../services/api";

import { HiPlus } from "react-icons/hi";
import { useRouter } from "next/dist/client/router";
import balance from "../services/balance";
import { useAlert } from "../providers/alert";
import Loading from "../components/loading";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { addAlert } = useAlert();

  useEffect(() => {
    api
      .get("/requests")
      .then((response: any) => {
        setOrders(response.data.data.requests);
      })
      .catch(() =>
        addAlert({
          severity: "error",
          message: "Erro ao procurar os pedidos!",
        })
      )
      .finally(() => setLoading(false));
  }, []);

  const updateStatus = async (code) => {
    try {
      setLoading(true);

      await api.patch(`/requests/status/${code}`).then((response: any) => {
        api
          .get("/requests")
          .then((response: any) => {
            setOrders(response.data.data.requests);
          })
          .catch(() =>
            addAlert({
              severity: "error",
              message: "Erro ao procurar os pedidos!",
            })
          )
          .finally(() => setLoading(false));
      });
    } catch (error) {
      addAlert({
        severity: "error",
        message: "Erro ao tentar atualizar o status!",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Choconatys | Pedidos</title>
      </Head>

      <Container>
        <Header />

        {loading ? (
          <Loading />
        ) : (
          <Content>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Cliente</TableCell>
                    <TableCell align="left">Código</TableCell>
                    <TableCell align="left">Data</TableCell>
                    <TableCell align="left">Total</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders?.map((orderData) => {
                    const order = orderData[String(Object.keys(orderData))];
                    console.log(order.username);

                    return (
                      <TableRow key={order.id}>
                        <TableCell component="th" scope="row">
                          {order.username}
                        </TableCell>
                        <TableCell align="left">{order.code}</TableCell>
                        <TableCell align="left">{order.data}</TableCell>
                        <TableCell align="left">
                          {balance(order.total)}
                        </TableCell>
                        <TableCell align="left">
                          <button onClick={() => updateStatus(order.code)}>
                            {order.status}
                          </button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Content>
        )}
      </Container>
    </>
  );
};

export default Orders;
