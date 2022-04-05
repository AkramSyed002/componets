import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import InputField from "./../components/InputField";

const RenderComponents = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <Row
      className="d-flex justify-content-center align-items-center"
      style={{ height: "800px" }}
    >
      <Col md={3}></Col>
      <Col md={6}>
        <InputField
          label={"Label"}
          placeholder={"Placeholder"}
          type={"text"}
          onChange={handleInputChange}
          value={input}
          // isInvalid
        />
      </Col>
      <Col md={3}></Col>
    </Row>
  );
};

export default RenderComponents;
