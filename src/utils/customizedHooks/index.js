import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { requestUserDataSuccess } from '../../store/modules/formData';

const useFormData = (form) => {
  const [userData, setUserData] = useState({});
  const [updateData] = useState([]);
  const dispatch = useDispatch();
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
    if (date) {
      // eslint-disable-next-line no-underscore-dangle
      const newDate = [date[0]._d];
      setUserData({
        ...userData,
        date: newDate.toString().split` `.slice(0, 4).join` `,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFields((err) => {
      if (!err) {
        updateData.push({ ...userData, key: userData.age + userData.date });
        dispatch(requestUserDataSuccess([...updateData]));
        resetFields();
      }
    });
  };
  return {
    brandDecorator,
    handleChange,
    handleDateChange,
    handleSubmit,
  };
};

export default useFormData;
