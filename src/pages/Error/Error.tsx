import React from 'react';
import './Error.scss';

class Error extends React.Component {
  render() {
    return (
      <div className="error-page">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the requested page could not be found.</p>
      </div>
    );
  }
}

export default Error;
