import { useState } from "react";
import { Card, Col } from "react-bootstrap";

const LegendsCard = ({ legends }) => {
  const [show, setShow] = useState(false);

  return (
    <Col>
      <Card className="player-card m-2" role="button" style={{ width: "18rem" }} onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img variant="top" src={legends.img} 
          title={legends.name}
          alt={legends.name}
          />
        ) : (
          <>
            <Card.Header>
              <Card.Title>{legends.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {legends.statistics.map((statistic) => {
                return (
                  <li className="list-unstyled h5 text-start">⚽{statistic}</li>
                );
              })}
            </ul>

            <span>{legends.official_career}</span>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendsCard;
