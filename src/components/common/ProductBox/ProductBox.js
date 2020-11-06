import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Component = ({ _id, name, type, image, paperPrice/*, plasticPrice, woodPrice, metalPrice, country*/ }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {type && <div className={styles.sale}>promo</div>}
      <a href={'/models/' + _id}>
        <img className={styles.image} src={image} alt='productFurniture' />
      </a>
      <div className={styles.buttons}>
        <a href={'/models/' + _id} >
          Quick View
        </a>
        <button>
          <FontAwesomeIcon icon={faShoppingBasket}/>
          ADD TO CART
        </button>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{ name }</h5>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
      </div>
      <div className={styles.price}>
        <button className={styles.priceButton}>
          { paperPrice }
        </button>
      </div>
    </div>
  </div>
);


Component.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  paperPrice: PropTypes.string,
};

export {
  Component as ProductBox,
  //Container as ProductBox,
  //Component as ProductBoxComponent,
};
