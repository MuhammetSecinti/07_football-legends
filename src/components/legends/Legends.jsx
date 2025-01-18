import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../../helpers/data";
import { useState } from "react";



const Legends = () => {
  const [show, setShow] = useState(false);

  return (
    <Container className="text-center">
      <Form.Control type="search" placeholder="" />
      <Container>
        <Row>
          {data.map((legends) => (
            <Col className="mt-4">
              <Card style={{ width: '18rem' }} onClick={()=> setShow(!show)} >
                {!show ? (
                  <Card.Img variant="top" src={legends.img} />
                ) : (
                  <>
                    <Card.Header>
                      <Card.Title>{legends.name}</Card.Title>
                    </Card.Header>
                    <ul className="m-auto">
                      {legends.statistics.map((statistic) => {
                        return (
                          <li className="list-unstyled h5 text-start">
                            ⚽{statistic}
                          </li>
                        );
                      })}
                    </ul>

                    <span>{legends.official_career}</span>
                  </>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Legends;
