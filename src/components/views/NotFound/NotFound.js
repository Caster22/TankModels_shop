import React from 'react';
import PropTypes from 'prop-types';
//import styles from './NotFound.module.scss';

const Component = children => (
  <div>
    <h2>Page not found, please Log in</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
