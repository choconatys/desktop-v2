import { useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import Button from "../components/button";
import Input from "../components/input";

import { HiOutlineChevronLeft } from "react-icons/hi";

import { useAuth } from "../providers/auth";
import { ButtonBack } from "../styles/global";
import {
  Container,
  Content,
  SignInForm,
  FormWrapper,
  FormAnimation,
} from "../styles/pages/signin";
import { useAlert } from "../providers/alert";

const SignIn: React.FC = () => {
  const [continueWithEmail, setContinueWithEmail] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [emailField, setEmailField] = useState<string>("");
  const [passwordField, setPasswordField] = useState<string>("");

  const { login } = useAuth();

  const { addAlert } = useAlert();

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await login({
      email: emailField,
      password: passwordField,
    })
      .catch(() => {
        addAlert({
          severity: "error",
          message: "Email ou Senha inválida!",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Head>
        <title>Choconatys | Entrar</title>
      </Head>

      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Content>
          {!continueWithEmail && (
            <FormWrapper
              initial={{ height: "610px" }}
              animate={{ height: "420px" }}
            >
              <FormAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
              >
                <section className="titles">
                  <h1>Área de controle</h1>
                  <h2>Como deseja continuar?</h2>
                </section>

                <Button
                  variant={"outlined"}
                  onClick={() => setContinueWithEmail(!continueWithEmail)}
                  style={{ marginTop: 60 }}
                >
                  Continuar com Email
                </Button>
              </FormAnimation>
            </FormWrapper>
          )}

          {continueWithEmail && (
            <FormWrapper
              initial={{ height: "420px" }}
              animate={{ height: "610px" }}
            >
              <FormAnimation
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
              >
                <ButtonBack
                  onClick={() => setContinueWithEmail(!continueWithEmail)}
                >
                  <HiOutlineChevronLeft />
                </ButtonBack>

                <section className="titles">
                  <h1>Entrar com Email</h1>
                  <h2>
                    Não compartilhe credenciais para acesso ao sistema com
                    ninguém!
                  </h2>
                </section>

                <SignInForm onSubmit={(e) => handleSubmitForm(e)}>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu email"
                    label="Email"
                    onChange={(event: any) => setEmailField(event.target.value)}
                    required
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    label="Senha"
                    onChange={(event: any) =>
                      setPasswordField(event.target.value)
                    }
                    required
                  />

                  <Button
                    type="submit"
                    style={{ marginTop: 40 }}
                    disabled={!passwordField && !emailField}
                  >
                    {loading ? "Carregando..." : "Entrar"}
                  </Button>
                </SignInForm>
              </FormAnimation>
            </FormWrapper>
          )}
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
