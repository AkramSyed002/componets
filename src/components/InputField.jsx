import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function InputField({
  isValid,
  label,
  type,
  placeholder,
  value,
  defaultValue,
  onChange,
  name,
  isInvalid,
  errorMessage,
  style = {
    padding: "12px",
    borderRadius: "10px",
    backgroundColor: "##FFFFFF",
  },
  className = "",
}) {
  return (
    <Form.Group className="mb-3">
      {label && (
        <Form.Label>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "14px",
              lineHeight: "16px",
              fontFamily: "Open Sans",
              color: "#34333B",
            }}
          >
            {label}
          </span>
        </Form.Label>
      )}
      <Form.Control
        isInvalid={isInvalid}
        style={style}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        value={value}
      />

      <Form.Control.Feedback
        type={"invalid" || isInvalid}
        style={{ fontWeight: "500", fontSize: "16px", color: "#FF5655" }}
      >
        {errorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
