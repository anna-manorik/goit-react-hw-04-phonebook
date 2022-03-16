import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ changeFilter, filter }) => (
  <label>
    Search:
    <input type="text" value={filter} onChange={changeFilter} />
  </label>
);

Filter.propTypes = {
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
