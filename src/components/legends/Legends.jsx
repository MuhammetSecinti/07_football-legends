import { Container, Form, Row } from "react-bootstrap";
import { data } from "../../helpers/data";
import LegendsCard from "./LegendsCard";
import { useState } from "react";

const Legends = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
  );

  return (
    <Container className="text-center">
      <Form.Control type="search" placeholder="" onChange={handleChange} />
      <Container>
        <Row>
          {filteredData.map((legends) => (
            <LegendsCard key={legends.id} legends={legends} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Legends;
