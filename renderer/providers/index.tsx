import React from "react";

import { AuthProvider } from "./auth";
import { AlertProvider } from "./alert";
import { CartProvider } from "react-use-cart";

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <AlertProvider>{children}</AlertProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default AppProvider;
