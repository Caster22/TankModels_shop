import React from 'react';
//import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      <div className={styles.menuBar}>
        <div className={styles.menuBar__left}>
          <div className={styles.menuBar__left__item}><a href='/shop/USA'>USA</a></div>
          <div className={styles.menuBar__left__item}><a href='/shop/germany'>Germany</a></div>
          <div className={styles.menuBar__left__item}><a href='/shop/zsrr'>ZSRR</a></div>
          <div className={styles.menuBar__left__item}><a href='/shop/france'>France</a></div>
          <div className={styles.menuBar__left__item}><a href='/shop/gb'>GB</a></div>
          <div className={styles.menuBar__left__item}><a href='/shop/poland'>Poland</a></div>
        </div>
        <a className={styles.menuBar__linkCart} href='/shop/cart'>
          <div className={styles.menuBar__right}>
            <FontAwesomeIcon className={styles.menuBar__right__cart} icon={ faShoppingBasket } />
            <div className={styles.menuBar__right__sum}>$Sum$</div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export {
  Component as MenuBar,
  //Container as MenuBar,
  //Component as MenuBarComponent,
};
