import { Drawer } from "@mui/material";
import { Container } from "./styles";

import EqualizerIcon from "@material-ui/icons/Equalizer";
import PeopleIcon from "@material-ui/icons/People";
import StoreIcon from "@material-ui/icons/Store";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ListAltIcon from "@material-ui/icons/ListAlt";

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Header: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <Drawer variant="permanent" anchor="left">
      <Container>
        <Link href="/">
          <a className={pathname === "/" ? "active" : ""}>
            <EqualizerIcon />
            Dashboard
          </a>
        </Link>

        <Link href="/products">
          <a
            className={
              pathname === "/products" || pathname === "/productsCreate"
                ? "active"
                : ""
            }
          >
            <DehazeIcon />
            Produtos
          </a>
        </Link>

        <Link href="/orders">
          <a className={pathname === "/orders" ? "active" : ""}>
            <ListAltIcon />
            Pedidos
          </a>
        </Link>

        <Link href="/clients">
          <a className={pathname === "/clients" ? "active" : ""}>
            <PeopleIcon />
            Clientes
          </a>
        </Link>
      </Container>
    </Drawer>
  );
};

export default Header;
