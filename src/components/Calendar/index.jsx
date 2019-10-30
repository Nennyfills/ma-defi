import React from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';

const Calender = ({ onChange }) => {
  const dateFormat = 'DD/MM/YYYY';

  return (
    <div>
      <DatePicker
        format={dateFormat}
        placeholder="Birthday"
        name="date"
        onChange={onChange}
        size="large"
        style={{ width: '100%' }}
      />
    </div>
  );
};

Calender.propTypes = {
  onChange: PropTypes.func,
};
Calender.defaultProps = {
  onChange: () => ('Hello'),
};

export default Calender;
