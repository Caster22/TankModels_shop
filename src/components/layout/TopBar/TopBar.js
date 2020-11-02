import React from 'react';
//import PropTypes from 'prop-types';
import styles from './TopBar.module.scss';
import icon from '../../../Images/Tank_small.png';


class Component extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.topBar}>
            <div className={styles.topBar__left}>
              <a href='/'>
                <img className='pr-2' src={ icon } alt='tank_icon'/>
                <span>Home</span>
              </a>
            </div>
            <div className={styles.topBar__right}>
              <a href='https://www.google.com'>
                Login via Google
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {};

/*const mapStateToProps = state => ({
  po: getLogo(state),
});

const container = connect(mapStateToProps)(Component);
*/
export {
  Component as TopBar,
  //container as TopBar,
  Component as TopBarComponent,
};
