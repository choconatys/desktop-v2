import { motion } from "framer-motion";

import styled from "styled-components";

interface BackgroundProps {
  photo: any;
}

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

export const FormCreate = styled.form`
  margin: 3rem 0;

  max-width: 600px;
`;

export const PreviewBackground = styled.div<BackgroundProps>`
  height: 12rem;
  width: 12rem;
  border-radius: 50%;

  ${(props) =>
    !!props.photo
      ? `background: url('${props.photo}');`
      : `background: var(--background);`}

  background-size: cover;
  background-position: center;

  margin-bottom: 2rem;
`;
