import React from 'react';
//import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      CompanyClaim!
    </div>
  </div>
);

export {
  Component as CompanyClaim,
  // Container as CompanyClaim,
  Component as CompanyClaimComponent,
};
