import React from "react";
import PropTypes from "prop-types";

function Input({ id, label, type, name, onChange, value, ...rest }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
      ></input>
      {rest.error && <p style={{ color: "red" }}>{rest.error}</p>}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "phone", "number", "date"]),
  value: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: "text"
};

export default Input;
