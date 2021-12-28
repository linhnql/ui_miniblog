import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
        <Link to="/" className="link-home">
          Go Home
        </Link>
      </div>
    );
  }
}

export default NotFound;