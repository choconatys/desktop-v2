import { AlertProps } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAlert } from "../../providers/alert";
import { Container } from "./styles";

interface AlertBoxProps extends AlertProps {
  style: any;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  id,
  severity,
  children,
  style,
  ...props
}) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();

  const { removeAlert } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      removeAlert(id);
    }, 3000);
  }, []);

  if (inView) {
    animationControl.start({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1,
        restSpeed: 4,
      },
    });
  }

  return (
    <Container
      ref={ref}
      initial={{ x: 20, opacity: 0 }}
      animate={animationControl}
      style={style}
    >
      <Alert severity={severity} onClose={() => removeAlert(id)}>
        {children}
      </Alert>
    </Container>
  );
};

export default AlertBox;
