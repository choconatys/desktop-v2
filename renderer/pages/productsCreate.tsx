import { useState } from "react";
import Head from "next/head";

import Header from "../components/header";
import Input from "../components/input";
import Button from "../components/button";

import {
  Container,
  Content,
  FormCreate,
  PreviewBackground,
} from "../styles/pages/productsCreate";

import NumericInput from "material-ui-numeric-input";
import { api } from "../services/api";
import { useRouter } from "next/dist/client/router";
import { useAlert } from "../providers/alert";

const ProductsCreate: React.FC = () => {
  const [nameInput, setNameInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [priceInput, setPriceInput] = useState<number>(0);
  const [quantityInput, setQuantityInput] = useState<number>(0);
  const [fileInput, setFileInput] = useState<any>();
  const [previewUrlInput, setPreviewUrlInput] = useState<any>();

  const router = useRouter();

  const { addAlert } = useAlert();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", nameInput);
    formData.append("description", descriptionInput);
    formData.append("price", String(priceInput));
    formData.append("quantity", String(quantityInput));
    formData.append("photo", fileInput);

    api
      .post("/products", formData)
      .then((response: any) => {
        router.push("/products");
      })
      .catch((error) => {
        addAlert({
          severity: "error",
          message: "Erro a criar um produto!",
        });
      });
  };

  const changeImage = (event: any) => {
    setFileInput(event.target.files[0]);
    setPreviewUrlInput(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <Head>
        <title>Choconatys | Criar Produto</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Criar Produto</h1>
          <FormCreate onSubmit={(e) => handleSubmit(e)}>
            <PreviewBackground photo={previewUrlInput} />

            <input
              type="file"
              name="photo"
              className="photoField"
              accept="image/*"
              onChange={(event: any) => changeImage(event)}
            />

            <Input
              type="text"
              name="name"
              placeholder="Digite o nome"
              label="Nome"
              onChange={(event) => setNameInput(event.target.value)}
              required
            />

            <Input
              name="description"
              placeholder="Digite uma descrição breve"
              label="Breve descrição"
              rows={4}
              maxRows={4}
              onChange={(event) => setDescriptionInput(event.target.value)}
              multiline
              required
            />

            <NumericInput
              id="price"
              label="Preço"
              variant="outlined"
              precision="2"
              decimalSeparator=","
              thousandSeparator="."
              onChange={(e) => {
                setPriceInput(e);
              }}
            />

            <Input
              name="quantity"
              placeholder="Digite uma quantidade"
              label="Quantidade"
              style={{ marginTop: "1.2rem" }}
              onChange={(event) => setQuantityInput(Number(event.target.value))}
              required
            />

            <Button type="submit">CRIAR PRODUTO</Button>
          </FormCreate>
        </Content>
      </Container>
    </>
  );
};

export default ProductsCreate;
