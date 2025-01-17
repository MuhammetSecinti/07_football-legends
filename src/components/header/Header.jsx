import { Container, Image } from "react-bootstrap";
import logo from "../../assets/2.png";
import logo2 from "../../assets/pngegg.png";

const Header = () => {
  return (
    <Container className="text-center mt-5">
      <Image src={logo} width="200px" />
      <Image src={logo2} width="200px" /> <br />
      <h1 className="my-2 title">FOOTBALL LEGENDS</h1>
    </Container>
  );
};

export default Header;
