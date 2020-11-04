import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

/* Components */
import { FooterMedia } from '../FooterMedia/FooterMedia';
import { FooterInfo } from '../FooterInfo/FooterInfo';
import Newsletter from '../../Features/Newsletter/Newsletter';


const Component = () => {
  return (
    <footer className={ styles.root }>
      <Newsletter />
      <FooterInfo />
      <FooterMedia />
    </footer>
  );
};

Component.propTypes = {

};

export {
  Component as Footer,
  //Container as Footer,
  Component as FooterComponent,
};
