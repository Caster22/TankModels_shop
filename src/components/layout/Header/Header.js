import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Component = () => {
  return (
    <div className={ styles.root }>
      <div className='container'>
        <br/>
        Header start:<br/>
        Header stop:
        <br/>
        <br/>
      </div>
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
