import { Paper } from "@mui/material";
import { motion } from "framer-motion";

import styled from "styled-components";

export const Container = styled(motion.main)`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Content = styled.section`
  position: relative;
  width: calc(100% - 240px);
  height: 100vh;

  margin-left: 240px;

  padding: 2rem 3rem;
`;
