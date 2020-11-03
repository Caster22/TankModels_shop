import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

/* Components */
import { FooterMedia } from '../FooterMedia/FooterMedia';


const Component = () => {
  return (
    <div className={ styles.root }>
      <FooterMedia />
    </div>
  );
};

Component.propTypes = {

};

export {
  Component as Footer,
  //Container as Footer,
  Component as FooterComponent,
};
