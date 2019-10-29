import React from 'react';

import notFound from '../../assets/images/404-error.png';
import './notFound.scss';

const NotFound = () => (
  <div className="notFound-container">
    <img className="notFound" src={notFound} alt="Loading" />
  </div>
);

export default NotFound;
