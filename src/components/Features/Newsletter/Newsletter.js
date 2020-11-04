import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Newsletter.module.scss';

const Newsletter = () => (
  <div className={styles.root}>
    <div className='container'>
      <h2 className={styles.title}>Newsletter:</h2>
      <div className={styles.newsInput}>
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        <input type='email' placeholder='Enter your email address' required />
      </div>
      <button className={styles.newsletterBtn}>
        <a className={styles.newsletterLink} href='/#'><FontAwesomeIcon icon={ faArrowRight }/></a>
      </button>
    </div>
  </div>
);

export default Newsletter;
