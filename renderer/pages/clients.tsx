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

const Clients: React.FC = () => {
  const [clientList, setClientList] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { addAlert } = useAlert();

  useEffect(() => {
    api
      .get("/users")
      .then((response: any) => {
        setClientList(response.data.data);
      })
      .catch(() =>
        addAlert({
          severity: "error",
          message: "Erro ao procurar os clientes!",
        })
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Choconatys | Clientes</title>
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
                    <TableCell align="left">Nome</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Endereço</TableCell>
                    <TableCell align="left">Cargo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clientList?.map((clientData) => {
                    return (
                      <TableRow key={clientData.id}>
                        <TableCell component="th" scope="row">
                          {clientData.name}
                        </TableCell>
                        <TableCell align="left">{clientData.email}</TableCell>
                        <TableCell align="left">{clientData.address}</TableCell>
                        <TableCell align="left">
                          <b>{clientData.role.name}</b>
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

export default Clients;
