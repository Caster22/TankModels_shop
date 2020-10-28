import React from 'react';
//import PropTypes from 'prop-types';
import styles from './TopBar.module.scss';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      TopBar!
    </div>
  </div>
);

export {
  Component as TopBar,
  // Container as TopBar,
  // Component as TopBarComponent,
};
