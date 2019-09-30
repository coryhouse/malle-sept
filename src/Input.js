import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      ></input>
      {props.error && <p style={{ color: "red" }}>{props.error}</p>}
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
