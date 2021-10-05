import User from "../interface/user";
import { api } from "./api";

export type LoginData = {
  email: string;
  password: string;
};

export type AuthResponseLogin = {};

export async function loginRequest({
  email,
  password,
}: LoginData): Promise<AuthResponseLogin> {
  return await api
    .post("/sessions", {
      email,
      password,
    })
    .then((responseLogin: any) => {
      const { user, token }: any = responseLogin.data.data;

      return {
        user,
        token,
      };
    })
    .catch((errorLogin) => {
      return {
        user: null,
        token: null,
      };
    });
}

export async function verifyToken(token: string): Promise<AuthResponseLogin> {
  return await api
    .post("/sessions/verify", {
      token,
    })
    .then((responseLogin: any) => {
      const { user, token }: any = responseLogin.data.data;

      return {
        user,
        token,
      };
    })
    .catch((errorLogin) => {
      console.log(errorLogin);
      return null;
    });
}
