import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        type="text"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      ></input>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Input;
