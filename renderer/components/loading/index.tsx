import React from "react";

import { CircularProgress } from "@mui/material";

import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CircularProgress size={70} />
      </Container>
  );
}

export default Loading;
