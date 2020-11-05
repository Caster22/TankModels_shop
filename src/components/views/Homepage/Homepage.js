import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      <section className={styles.home}>
        <h2 className='text-center mb-4'>
          <FontAwesomeIcon className='mx-4' icon={ faLongArrowAltDown } />
          Promotion of the Month!
          <FontAwesomeIcon className='mx-4' icon={ faLongArrowAltDown } />
        </h2>
        <div className={styles.home__promotion}>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.home__promotion__pic}>
                <img
                  src='https://eu-wotp.wgcdn.co/dcont/tankopedia_images/a05_m4_sherman/a05_m4_sherman_image_resized.png'
                  alt='TankPic'/>
              </div>
            </div>
            <div className='col-6 pt-4 text-center'>
              <div className={styles.home__promotion__offer}>
                <h3>We gladly announce our special offer of the month:</h3>
                <h4>Tank Name</h4>
                <p>Tank Type</p>
                <p>Tank country</p>
                <p>Tank desc</p>
                <div className='row'>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                </div>
                <button className={styles.home__promotion__btn}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export {
  Component as Homepage,
  // Container as Homepage,
  // Component as HomepageComponent,
};
