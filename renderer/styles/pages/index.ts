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
  width: 100%;
  max-width: 1600px;
  height: 100vh;

  margin-left: 240px;

  padding: 2rem 3rem;
`;

export const Cards = styled.section`
  width: 100%;
  max-width: 1300px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Card = styled(Paper)`
  width: 100%;
  max-width: 400px;
  height: 160px;

  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--gray);
`;

export const InformationCard = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
  }

  .info {
    margin-top: 0.5rem;
  }
`;

export const BackgroundsWrapper = styled.section`
  width: 100%;

  display: flex;
  align-items: center;

  margin-bottom: 2rem;
`;

export const BackgroundInfo = styled.div`
  width: 60%;
  height: 25rem;
  background: var(--backgroundCard);
  border-radius: 1rem;

  display: flex;

  padding: 4rem;

  .info {
    h1 {
      max-width: 400px;
      font-size: 2rem;
    }

    p {
      max-width: 700px;
      margin-top: 2rem;
      font-size: 1.3rem;
    }
  }
`;
