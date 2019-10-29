import React from 'react';
import {
  Form, Icon, Input, Button, Row, Col, Spin,
} from 'antd';
import PropTypes from 'prop-types';

import Calender from '../Calendar';

const FormComponent = ({
  onSubmit,
  firstNameError,
  lastNameError,
  ageError,
  dofError,
  formHandleChange,
  formhandleDateChange,
  loading,
}) => (
  <Form onSubmit={onSubmit} className="login-form">
    <Row gutter={8}>
      <Col span={12}>
        <Form.Item className="">
          {firstNameError(
            <Input
              name="firstName"
              onChange={formHandleChange}
              size="large"
              prefix={<Icon type="user" />}
              placeholder="First Name"
            />,
          )}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item className="">
          {lastNameError(
            <Input
              name="lastName"
              onChange={formHandleChange}
              size="large"
              prefix={<Icon type="user" />}
              placeholder="Last Name"
            />,
          )}
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={8}>
      <Col span={12}>
        <Form.Item className="">
          {ageError(
            <Input
              name="age"
              onChange={formHandleChange}
              size="large"
              type="number"
              prefix={<Icon type="user" />}
              placeholder="Age"
            />,
          )}
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item className="">
          {dofError(<Calender name="date" onChange={formhandleDateChange} />)}
        </Form.Item>
      </Col>
    </Row>
    <Form.Item>
      <Input
        name="hobby"
        onChange={formHandleChange}
        placeholder="Add a Hobby"
      />
    </Form.Item>
    <Form.Item>
      <Button
        size="large"
        block
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        {!loading ? 'Submit' : <Spin />}
      </Button>
    </Form.Item>
  </Form>
);

FormComponent.propTypes = {
  onSubmit: PropTypes.func,
  firstNameError: PropTypes.func,
  lastNameError: PropTypes.func,
  ageError: PropTypes.func,
  dofError: PropTypes.func,
  formHandleChange: PropTypes.func,
  formhandleDateChange: PropTypes.func,
  loading: PropTypes.bool,
};
FormComponent.defaultProps = {
  onSubmit: () => 'Form',
  firstNameError: () => 'Form',
  lastNameError: () => 'Form',
  ageError: () => 'Form',
  dofError: () => 'Form',
  formHandleChange: () => 'Form',
  formhandleDateChange: () => 'Form',
  loading: false,
};

export default FormComponent;
