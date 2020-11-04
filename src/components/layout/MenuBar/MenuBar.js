import React from 'react';
//import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      activeIndex: 0,
    };
  }

  toggleClass(i, e) {
    this.setState({ activeIndex: i });
  }

  render() {
    return (
      <div className={ styles.root }>
        <div className='container'>
          <div className={styles.menuBar}>
            <div className={styles.menuBar__left}>
              <div
                className={ this.state.activeIndex === 0 ? 'active' : styles.menuBar__left__item }
                onClick={this.toggleClass.bind(this, 0)}>
                <a href='/USA'>USA</a>
              </div>
              <div
                className={ this.state.activeIndex === 1 ? 'active' : styles.menuBar__left__item }
                onClick={this.toggleClass.bind(this, 1)}>
                <a href='/germany'>Germany</a>
              </div>
              <div
                className={ this.state.activeIndex === 2 ? 'active' : styles.menuBar__left__item }
                onClick={this.toggleClass.bind(this, 2)}>
                <a href='/ussr'>U.S.S.R.</a>
              </div>
              <div
                className={ this.state.activeIndex === 3 ? 'active' : styles.menuBar__left__item }
                onClick={this.toggleClass.bind(this, 3)}>
                <a href='/france'>France</a>
              </div>
              <div
                className={ this.state.activeIndex === 4 ? 'active' : styles.menuBar__left__item }
                onClick={this.toggleClass.bind(this, 4)}>
                <a href='/gb'>GB</a>
              </div>
              <div
                className={ this.state.activeIndex === 5 ? 'active' : styles.menuBar__left__item }
                onClick={this.toggleClass.bind(this, 5)}>
                <a href='/poland'>Poland</a>
              </div>
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
  }
}

export {
  Component as MenuBar,
  //Container as MenuBar,
  //Component as MenuBarComponent,
};
