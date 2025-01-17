import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../../helpers/data";

const Legends = () => {
  return (
    <Container className="text-center">
      <Form.Control type="search" placeholder="" />
      <Container>
        <Row>
          {data.map((legends) => (
            <Col className="mt-4">
              <Card style={{ width: "18rem", height: "400px" }}>
                <Card.Img variant="top" src={legends.img} />
                <Card.Header>
                  <Card.Title>{legends.name}</Card.Title>
                </Card.Header>
                <ul className="m-auto">
                  {legends.statistics.map((statistic) => {
                    return <li className="list-unstyled h5 text-start">⚽{statistic}</li>;
                  })}
                </ul>
                <span>{legends.official_career}</span>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Legends;
