import React from 'react';
import styles from './ShoppingCart.module.scss';
import { /*addItem, */getCartItems, minusQuantity, plusQuantity} from '../../../redux/CartRedux';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

let quantity = 0;

class Component extends React.Component {

  sum = () => {
    const { items } = this.props.cartItems;
    let sum = 0;
    items.forEach(item => {
      sum += item.quantity * item.basePrice;
    });
    return sum;
  }

  quantityMath = (plusMinus, modelId, e) => {
    e.preventDefault();

    const id = {
      id: modelId,
    };

    if (plusMinus === '-') {
      this.props.minus(id);
    } else if (plusMinus === '+') {
      this.props.plus(id);
    }
  };

  render() {
    const { items } = this.props.cartItems;
    return (
      <div className={ styles.root }>
        <div className='container'>
          <div className={styles.cart}>
            <div className={styles.cart__items}>
              {items.map(item => (
                <div key={item.id} className={styles.cart__items__item}>
                  <div className={styles.cart__items__desc}>
                    <div className={styles.cart__items__desc__left}>
                      <img src={item.image} alt='shopTankImg'/>
                      <h4>{item.model}</h4>
                      <span>Quantity:</span>
                      <div className={styles.number}>{quantity === 0 ? item.quantity : this.quantityMath()}</div>
                      <button  onClick={event => this.quantityMath('-', item.id, event)}>
                        <FontAwesomeIcon icon={faMinus}/>
                      </button>
                      <button onClick={event => this.quantityMath('+', item.id, event)}>
                        <FontAwesomeIcon icon={faPlus}/>
                      </button>
                    </div>
                    <div>
                      <button className={styles.btn}>Remove product</button>
                    </div>
                    <div className={styles.cart__items__desc__right}>
                      <h3 className='text-right'>{item.basePrice}$</h3>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.cart__items__item}>
                <div className='row justify-content-end mx-5'>
                  <h3 className={styles.cart__items__sum}>SUM: {this.sum()}$</h3>
                </div>
              </div>
            </div>
            <div className={styles.submit}>
              <NavLink to='/form'>
                <div className={styles.btn}>
                  Place Order
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  cartItems: PropTypes.object,
  minus: PropTypes.func,
  plus: PropTypes.func,
};


Component.defaultProps = {
  sum: '',
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
});

const mapDispatchToProps = dispatch => ({
  plus: value => dispatch(plusQuantity(value)),
  minus: value => dispatch(minusQuantity(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
