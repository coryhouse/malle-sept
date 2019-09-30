import React from "react";
import PropTypes from "prop-types";

function Error(props) {
  return (
    <>
      <h1>Sorry, an error occurred. 😞 </h1>
      {/* <p>{props.error.message}</p> */}
    </>
  );
}

Error.propTypes = {
  error: PropTypes.object
};

export default Error;
