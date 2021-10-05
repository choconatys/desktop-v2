import { Button } from "@mui/material";
import { motion } from "framer-motion";

import styled from "styled-components";

export const Container = styled(motion.section)`
  width: 100%;
  max-width: 400px;

  position: absolute;
  z-index: 9999;

  top: 1rem;
  right: 1rem;

  section + section {
    margin-top: 0.5rem;
  }

  @media (max-width: 429px) {
    width: 100%;
    padding: 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
