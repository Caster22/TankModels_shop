import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ImageSlider = ({ images }) => { // takes in images as props
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div className={styles.root}>
        <div className='row'>
          <div className='col-12'>
            <img className={styles.img} src={images[index]} alt={index} />
          </div>
          <div className='col-12'>
            <div className={styles.btns}>
              <div onClick={slideLeft}><FontAwesomeIcon icon={faArrowLeft}/></div>
              <div onClick={slideRight}><FontAwesomeIcon icon={faArrowRight}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;
