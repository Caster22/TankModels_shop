import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {getCartItems} from '../../../redux/CartRedux';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Component extends React.Component {

  itemSum = () => {
    const { items } = this.props.cartItems;
    return items.length;
  }

  render() {
    return (
      <div className={ styles.root }>
        <div className='container'>
          <div className={styles.menuBar}>
            <NavLink className={styles.menuBar__linkCart} to='/cart'>
              <div className={styles.menuBar__right}>
                <FontAwesomeIcon className={styles.menuBar__right__cart} icon={ faShoppingBasket } />
                <div className={styles.menuBar__right__sum}>{this.itemSum()} </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  cartItems: PropTypes.object,
};

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
