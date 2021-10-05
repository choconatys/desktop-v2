import { Button } from "@mui/material";
import { motion } from "framer-motion";

import styled from "styled-components";

export const Container = styled(motion.section)`
  overflow: hidden;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
`;
