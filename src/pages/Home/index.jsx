/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import FormComponent from '../../components/FormComponent';
import TableComponent from '../../components/TableComponent';
import './home.scss';

const Home = ({ form }) => {
  const [userData, setUserData] = useState({});
  const [updateData, setUpdateUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { validateFields, getFieldDecorator, resetFields } = form;
  const brandDecorator = (value) => getFieldDecorator(value, {
    rules: [{ required: true, message: `${value} is required!` }],
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleDateChange = (value) => {
    const date = [];
    date.push(value);
    // eslint-disable-next-line no-underscore-dangle
    const newDate = [date[0]._d];
    setUserData({
      ...userData,
      date: newDate.toString().split` `.slice(0, 4).join` `,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    validateFields((err) => {
      if (err) {
        setLoading(false);
      }
      if (!err) {
        setLoading(false);
        updateData.push({ ...userData, key: userData.age + userData.date });
        setUpdateUserData([...updateData]);
        resetFields();
      }
    });
  };

  return (
    <div className="home-container">
      <div className="home-container_inner">
        <FormComponent
          onSubmit={handleSubmit}
          firstNameError={brandDecorator('First Name')}
          lastNameError={brandDecorator('Last Name')}
          ageError={brandDecorator('Age')}
          dofError={brandDecorator('Date of Birth')}
          formHandleChange={handleChange}
          formhandleDateChange={handleDateChange}
          loading={loading}
        />
      </div>
      <div className="home-container_table">
        <TableComponent data={updateData} />
      </div>
    </div>
  );
};

Home.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func,
    getFieldDecorator: PropTypes.func,
  }),
};
Home.defaultProps = {
  form: {},
};
export default Form.create()(Home);
