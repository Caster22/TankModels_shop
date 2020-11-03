import React from 'react';
//import PropTypes from 'prop-types';
import styles from './FooterInfo.module.scss';


const Component = () => {
  return (
    <div className={ styles.root }>
      <div className='container'>
        <div className={styles.info}>
          <div className='row text-start py-4'>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.info__wrapper}>
                <h6>Information</h6>
                <ul>
                  <li>
                    <a href='/#'>About us</a>
                  </li>
                  <li>
                    <a href='/#'>Policy</a>
                  </li>
                  <li>
                    <a href='/#'>Online support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.info__wrapper}>
                <h6>Account</h6>
                <ul>
                  <li>
                    <a href='/#'>login</a>
                  </li>
                  <li>
                    <a href='/#'>My cart</a>
                  </li>
                  <li>
                    <a href='/#'>logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.info__wrapper}>
                <h6>Specials</h6>
                <ul>
                  <li>
                    <a href='/#'>New models</a>
                  </li>
                  <li>
                    <a href='/#'>Best Sellers</a>
                  </li>
                  <li>
                    <a href='/#'>Promotions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <div className={styles.info__wrapper}>
                <h6>Orders</h6>
                <ul>
                  <li>
                    <a href='/#'>Payment options</a>
                  </li>
                  <li>
                    <a href='/#'>Shipping and delivery</a>
                  </li>
                  <li>
                    <a href='/#'>Returns</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {

};

export {
  Component as FooterInfo,
  //Container as FooterInfo,
  Component as FooterInfoComponent,
};
