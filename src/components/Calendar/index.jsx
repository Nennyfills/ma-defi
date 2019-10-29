/* eslint-disable react/prop-types */
import React from 'react';
import { DatePicker } from 'antd';

import PropTypes from 'prop-types';

const Calender = ({ onChange, name }) => (
  <div>
    <DatePicker
      placeholder="DOB"
      name={name}
      onChange={onChange}
      size="large"
      style={{ width: '100%' }}
    />
  </div>
);

Calender.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};
Calender.defaultProps = {
  onChange: () => ('Hello'),
  name: 'calender',
};

export default Calender;
