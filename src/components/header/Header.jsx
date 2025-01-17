import { Container, Image } from "react-bootstrap";
import logo from "../../assets/Football-Legends-Icons-Who-Transformed-the-Beautiful-Game-768x465.webp";

const Header = () => {
  return (
    <Container className="text-center mt-5">
      <Image src={logo} width="200px" rounded />
      <h1>FOOTBALL LEGENDS</h1>
    </Container>
  );
};

export default Header;
