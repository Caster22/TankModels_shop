import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Component = () => {
  return (
    <div className={ styles.root }>
      Header start:<br/>
      Header stop:
      <br/>
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
