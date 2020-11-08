import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ShoppingCart.module.scss';

class Component extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container my-5'>
          Shopping carts

        </div>
      </div>
    );
  }
}


export {
  Component as ShoppingCart,
  //Container as ShoppingCart,
  Component as ShoppingCartComponent,
};
