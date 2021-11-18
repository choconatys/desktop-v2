import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router, { useRouter } from "next/dist/client/router";

import {
  LoginData,
  loginRequest,
  AuthResponseLogin,
  verifyToken,
} from "../services/auth";
import { api } from "../services/api";
import User from "../interface/user";
import { useAlert } from "./alert";

type AuthContextProps = {
  user: User;
  isAuthenticated: boolean;
  login: ({ email, password }: LoginData) => Promise<any>;
  logout: () => void;
  updateUser: (user: User) => void;
  createUser: (data: any) => Promise<any>;
};

const AuthContext = createContext({} as AuthContextProps);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>();

  const isAuthenticated = !!user;

  const { addAlert } = useAlert();
  const router = useRouter();

  useEffect(() => {
    const { "choconatys.token": token } = parseCookies();

    if (token) {
      verifyToken(token).then(({ user, token }: any) => {
        setCookie(undefined, "choconatys.token", token, {
          maxAge: 60 * 60 * 1, // UMA HORA
        });

        setCookie(undefined, "choconatys.user", JSON.stringify(user), {
          maxAge: 60 * 60 * 1, // UMA HORA
        });

        api.defaults.headers["Authorization"] = `Bearer ${token}`;

        setUser(user);
      });
    }
  }, []);

  function updateUser(user): void {
    setCookie(undefined, "choconatys.user", JSON.stringify(user), {
      maxAge: 60 * 60 * 1, // UMA HORA
    });

    setUser(user);
  }

  async function createUser(data) {
    return await api
      .post("/users", data)
      .then(async (responseLogin) => {
        await login({ email: data.email, password: data.password });
      })
      .catch((error) => {
        return "Não foi possivel criar a conta!";
      });
  }

  async function login({ email, password }: LoginData) {
    await api
      .post("/sessions", {
        email,
        password,
      })
      .then((responseLogin: any) => {
        const { user, token, isAdmin }: any = responseLogin.data.data;

        if (user && token && isAdmin) {
          setCookie(undefined, "choconatys.token", token, {
            maxAge: 60 * 60 * 1, // UMA HORA
          });

          setCookie(undefined, "choconatys.user", JSON.stringify(user), {
            maxAge: 60 * 60 * 1, // UMA HORA
          });

          api.defaults.headers["Authorization"] = `Bearer ${token}`;

          setUser(user);

          router.push("/");
          return;
        }

        if (isAdmin == false) {
          addAlert({
            severity: "error",
            message: "Você não tem permissão de acesso!",
          });
          return;
        } else {
          addAlert({
            severity: "error",
            message: "Email ou Senha inválida!",
          });
          return;
        }
      })
      .catch((errorLogin) => {
        addAlert({
          severity: "error",
          message: "Verifique os campos!",
        });
        return;
      });
  }

  const logout = useCallback(async () => {
    await Router.push("/login");
    destroyCookie(undefined, "choconatys.token");
    destroyCookie(undefined, "choconatys.user");
    api.defaults.headers["Authorization"] = null;
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, updateUser, createUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
