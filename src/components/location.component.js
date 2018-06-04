import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
    <div className="card-title">
        <h2> {city} </h2>
    </div>
);

Location.prototype = {
    city: PropTypes.string.isRequired
};

export default Location;