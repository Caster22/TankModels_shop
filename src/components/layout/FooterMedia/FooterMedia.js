import React from 'react';
//import PropTypes from 'prop-types';
import styles from './FooterMedia.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';

/* Components */

const Component = () => {
  return (
    <div className={ styles.root }>
      <div className='container'>
        <div className='row align-items-center py-2'>
          <div className={'col-lg-6 col-md-6 col-12 text-center ' + styles.copyright}>
            <p>©Copyright 2020 LMA | All Rights Reserved</p>
          </div>
          <div className={'col-lg-6 col-md-6 col-12 text-center ' + styles.socialMedia}>
            <ul>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faGooglePlusG}>Google Plus</FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href='/#'>
                  <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {

};

export {
  Component as FooterMedia,
  //Container as FooterMedia,
  Component as FooterMediaComponent,
};
