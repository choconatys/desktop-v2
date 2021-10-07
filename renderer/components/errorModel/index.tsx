import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Background } from "./styles";

import Button from "../../components/button";

import { useRouter } from "next/router";

export interface ErrorModelProps {
  type: "internalError" | "notFound" | "notFoundPage";
  title: string;
  subTitle: string;
}

const ErrorModel: React.FC<ErrorModelProps> = ({
  type,
  title,
  subTitle,
  children,
}) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();

  const router = useRouter();

  if (inView) {
    animationControl.start({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        restSpeed: 4,
      },
    });
  }

  return (
    <Container
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={animationControl}
    >
      <Background type={type} />

      <section className="info">
        <h1>{title}</h1>

        <p>{subTitle}</p>
      </section>

      {type === "notFoundPage" && (
        <Button style={{ marginTop: "3rem" }} onClick={() => router.push("/")}>
          Voltar para o início
        </Button>
      )}
    </Container>
  );
};

export default ErrorModel;
