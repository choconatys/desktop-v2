import { TextFieldProps } from "@mui/material";

import { Container } from "./styles";

const Input: React.FC<TextFieldProps> = ({ ...props }) => {
  return <Container {...props} />;
};

export default Input;
