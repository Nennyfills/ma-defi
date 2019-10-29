import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './index';

it('renders properly', () => {
  const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>);

  expect(wrapper.find('Routes')).toBeTruthy();
});
