import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  name, phone, email, company
}) => (
  <div className="col-md-4">
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{phone}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <p>
          <span className="badge badge-success">{company}</span>
        </p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
};

export default Card;
