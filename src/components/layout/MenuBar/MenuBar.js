import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class Component extends React.Component {

  render() {
    const { sum } = this.props;
    return (
      <div className={ styles.root }>
        <div className='container'>
          <div className={styles.menuBar}>
            <a className={styles.menuBar__linkCart} href='/orders/cart'>
              <div className={styles.menuBar__right}>
                <FontAwesomeIcon className={styles.menuBar__right__cart} icon={ faShoppingBasket } />
                <div className={styles.menuBar__right__sum}>{ !sum ? '0$' : sum}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Component.propTypes = {
  sum: PropTypes.string,
};

Component.defaultProps = {
  sum: '',
};

export {
  Component as MenuBar,
  //Container as MenuBar,
  //Component as MenuBarComponent,
};
