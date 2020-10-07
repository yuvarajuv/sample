import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, type, onClick, children,
}) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
