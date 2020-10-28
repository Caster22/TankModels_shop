import React from 'react';
//import PropTypes from 'prop-types';
import styles from './CompanyClaim.module.scss';
import logo from '../../../Images/Tank_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      <div className={styles.company}>
        <div className={styles.company__left}>
          <h3 className='text-center'>Little Metal</h3>
          <h3 className='text-center'>Army</h3>
        </div>
        <div className={styles.company__middle}>
          <img src={ logo } alt='Tank_logo'/>
        </div>
        <div className={styles.company__right}>
          <div className='row align-items-center'>
            <div className='col-auto'>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt}/>
            </div>
            <div className='col-auto pl-0'>
              693-396-936
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export {
  Component as CompanyClaim,
  // Container as CompanyClaim,
  Component as CompanyClaimComponent,
};
