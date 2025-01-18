import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../../helpers/data";
import { useState } from "react";
import LegendsCard from "./LegendsCard";



const Legends = () => {
  

  return (
    <Container className="text-center">
      <Form.Control type="search" placeholder="" />
      <Container>
        <Row>
          {data.map((legends) => (
           
              <LegendsCard legends = {legends} />
           
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Legends;
