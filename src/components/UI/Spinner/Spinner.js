import React from 'react';
import Loader from 'react-loader-spinner';

import './Spinner.css';

const spinner = (props) => {
  return (
    <div className='loader-wrapper'>
      <Loader type='TailSpin' height='30%' width='30%' color='#2a9c76' />
    </div>
  );
};

export default spinner;
