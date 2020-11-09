import React from 'react';
//import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {getCartItems} from '../../../redux/CartRedux';
import {connect} from 'react-redux';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.cartItem = JSON.parse(localStorage.getItem('cartItem'));
  }
  componentDidMount() {

  }

  priceSum = () => {
    if (!this.cartItem) return '--$';
    else{
      const sum = this.cartItem.quantity * this.cartItem.basePrice;
      return sum + '$';
    }
  }

  render() {
    //console.log('cart: ', this.props.cart.item);

    return (
      <div className={ styles.root }>
        <div className='container'>
          <div className={styles.menuBar}>
            <a className={styles.menuBar__linkCart} href='/cart'>
              <div className={styles.menuBar__right}>
                <FontAwesomeIcon className={styles.menuBar__right__cart} icon={ faShoppingBasket } />
                <div className={styles.menuBar__right__sum}>{ this.priceSum()}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}


Component.defaultProps = {
  sum: '',
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
});

/*const mapDispatchToProps = dispatch => ({

});*/

const Container = connect(mapStateToProps)(Component);

export {
  //Component as MenuBar,
  Container as MenuBar,
  Component as MenuBarComponent,
};
