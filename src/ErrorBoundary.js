import React from "react";
import Error from "./Error";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props); // this must be first.
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error }; // this update our state
  }

  render() {
    if (this.state.hasError) return <Error error={this.state.error} />;
    return this.props.children; // render child components.
  }
}

export default ErrorBoundary;
