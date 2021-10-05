import { ButtonProps } from "@mui/material";

import { Container } from "./styles";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Container
      variant={"contained"}
      size={"medium"}
      disableElevation
      {...props}
    >
      {children}
    </Container>
  );
};

export default Button;
