import React from 'react';
//import PropTypes from 'prop-types';
import styles from './MenuBar.module.scss';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      MenuBar!
    </div>
  </div>
);

export {
  Component as MenuBar,
  // Container as MenuBar,
  Component as MenuBarComponent,
};
