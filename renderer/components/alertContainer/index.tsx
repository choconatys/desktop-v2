import { useTransition } from "react-spring";

import AlertBox from "../alertBox";
import { AlertMessage } from "../../providers/alert";
import { Container } from "./styles";

interface AlertContainerProps {
  alerts: AlertMessage[];
}

const AlertContainer: React.FC<AlertContainerProps> = ({
  alerts,
  children,
  ...props
}) => {
  const transitions = useTransition(alerts, {
    from: { right: "-120%", opacity: 0 },
    enter: { right: "0%", opacity: 1 },
    leave: { right: "-120%", opacity: 0 },
  });

  return (
    <Container>
      {transitions(({ opacity, right }, item) => (
        <AlertBox
          key={item.id}
          id={item.id}
          severity={item.severity}
          style={{
            zIndex: 9999,
            opacity,
            right,
          }}
        >
          {item.message}
        </AlertBox>
      ))}
    </Container>
  );
};

export default AlertContainer;
