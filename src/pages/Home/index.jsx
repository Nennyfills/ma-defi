import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import useFormData from '../../utils/customizedHooks';
import FormComponent from '../../components/FormComponent';
import TableComponent from '../../components/TableComponent';
import './home.scss';

const Home = ({ form }) => {
  const {
    brandDecorator,
    handleChange,
    handleDateChange,
    handleSubmit,
  } = useFormData(form);
  const formData = useSelector((state) => state.formData);
  const { loading, data } = formData;

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
        <TableComponent data={data} />
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
