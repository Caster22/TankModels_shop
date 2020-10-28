import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Header.module.scss';

/* Components */
import { TopBar } from '../TopBar/TopBar';
import { CompanyClaim } from '../CompanyClaim/CompanyClaim';
import { MenuBar } from '../MenuBar/MenuBar';

const Component = () => {
  return (
    <div className={ styles.root }>
      <TopBar />
      <CompanyClaim />
      <MenuBar />
    </div>
  );
};

Component.propTypes = {

};

export {
  Component as Header,
  //Container as Header,
  Component as HeaderComponent,
};
