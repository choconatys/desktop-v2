import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.main)`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled(motion.section)`
  position: relative;

  width: 100%;
  max-width: 45%;
  background: var(--white);

  padding: 5rem 2rem;

  border-radius: 0.5rem;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 5%), 0px 4px 16px rgb(0 0 0 / 6%);
`;

export const FormAnimation = styled(motion.section)`
  .titles {
    max-width: 28rem;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    h2 {
      font-weight: 400;
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1400px;
  height: calc(100vh - 15rem);

  margin: 0 auto;

  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SignInForm = styled.form`
  width: 100%;
  max-width: 90%;

  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
`;

export const MoreInformation = styled.section`
  margin-top: 1rem;

  a {
    color: var(--primary);

    &:hover {
      text-decoration: underline;
    }
  }
`;
