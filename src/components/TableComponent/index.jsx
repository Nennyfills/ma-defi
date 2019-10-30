import React from 'react';
import PropTypes from 'prop-types';
import { Table, Row, Col } from 'antd';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Birthday',
    dataIndex: 'date',
  },
  {
    title: 'Hobby',
    dataIndex: 'hobby',
  },
];

const TableComponent = ({ data }) => (
  <Row gutter={[16, 32]}>
    <Col span={12} offset={6}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }} />
      </div>
      <Table columns={columns} dataSource={data} />
    </Col>
  </Row>
);

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
TableComponent.defaultProps = {
  data: [],
};

export default TableComponent;
