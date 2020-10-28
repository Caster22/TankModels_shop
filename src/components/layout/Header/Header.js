import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import {TopBar} from '../TopBar/TopBar';
import {CompanyClaim} from '../CompanyClaim/CompanyClaim';

const Component = () => {
  return (
    <div className={ styles.root }>
      <TopBar />
      <br/>
      <CompanyClaim />
      <br/>
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
