import { motion } from "framer-motion";

import BackgroundInternalError from "../../assets/error500.png";
import BackgroundNotFoundError from "../../assets/error404.png";
import BackgroundNotFoundPageError from "../../assets/error404Page.png";

import styled from "styled-components";

interface ErrorModelBackgroundProps {
  type: "internalError" | "notFound" | "notFoundPage";
}

export const Container = styled(motion.section)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .info {
    margin-top: 2rem;

    text-align: center;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 400;
  }
`;

export const Background = styled.section<ErrorModelBackgroundProps>`
  width: 100%;
  height: 29rem;

  ${(props) =>
    props.type === "internalError" &&
    `background: url(${BackgroundInternalError}) center;`}
  ${(props) =>
    props.type === "notFound" &&
    `background: url(${BackgroundNotFoundError}) center;`}
    ${(props) =>
    props.type === "notFoundPage" &&
    `background: url(${BackgroundNotFoundPageError}) center;`}
    background-size: contain;
  background-repeat: no-repeat;
`;
