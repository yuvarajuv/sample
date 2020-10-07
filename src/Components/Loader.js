import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ defaultText }) => (
  <div className="loader">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">{defaultText}</span>
    </div>
  </div>
);

Loader.propTypes = {
  defaultText: PropTypes.string.isRequired
};

export default Loader;
