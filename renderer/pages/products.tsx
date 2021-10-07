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
import { GetServerSideProps, GetStaticProps } from "next";
import { api } from "../services/api";

import ProductsData from "../interface/products";
import { HiPlus } from "react-icons/hi";
import { useRouter } from "next/dist/client/router";
import balance from "../services/balance";
import { useAlert } from "../providers/alert";
import Loading from "../components/loading";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const { addAlert } = useAlert();

  useEffect(() => {
    api
      .get("/products/all")
      .then((response: any) => {
        setProducts(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleStatus = async (id) => {
    setLoading(true);

    await api
      .patch(`/products/available/${id}`)
      .then((response: any) => {
        setProducts(response.data.data);

        addAlert({
          severity: "success",
          message: "Status do produto alterado com sucesso!",
        });
      })
      .catch((error) => {
        addAlert({
          severity: "error",
          message: "Erro ao alterar status!",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Head>
        <title>Choconatys | Produtos</title>
      </Head>

      <Container>
        <Header />

        {loading ? (
          <Loading />
        ) : (
          <Content>
            <Button
              onClick={() => router.push("/productsCreate")}
              style={{
                width: 60,
                position: "absolute",
                right: "3rem",
                bottom: "3rem",
              }}
            >
              <HiPlus />
            </Button>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Nome</TableCell>
                    <TableCell align="left">Descrição</TableCell>
                    <TableCell align="left">Preço</TableCell>
                    <TableCell align="left">Quantidade</TableCell>
                    <TableCell align="left">Disponível</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products?.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell component="th" scope="row">
                        {product.name}
                      </TableCell>
                      <TableCell align="left">{product.description}</TableCell>
                      <TableCell align="left">
                        {balance(product.price)}
                      </TableCell>
                      <TableCell align="left">{product.quantity}</TableCell>
                      <TableCell align="left">
                        {product.available ? (
                          <div
                            className="circle green"
                            onClick={() => toggleStatus(product.id)}
                          ></div>
                        ) : (
                          <div
                            className="circle red"
                            onClick={() => toggleStatus(product.id)}
                          ></div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Content>
        )}
      </Container>
    </>
  );
};

export default Products;
