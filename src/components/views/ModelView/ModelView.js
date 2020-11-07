import React from 'react';
//import PropTypes from 'prop-types';
import styles from './ModelView.module.scss';

import {
  faArrowLeft,
  faArrowRight,
  faShoppingBasket,
  faMinus,
  faPlus,
  faExpandAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Component extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.frame}>
            <div className='row'>
              <div className='col-5'>
                <div className='row'>
                  <div className='col-12'>
                    <div className={styles.bigPic}>
                      <img alt='' />
                      <button className={styles.biggerImg}>
                        <FontAwesomeIcon icon={faExpandAlt} />
                      </button>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.slide}>
                      <div className={styles.slideGallery}>
                        <button className={styles.buttonLeft}>
                          <FontAwesomeIcon icon={faArrowLeft}/>
                        </button>
                        <img alt='' />
                        <img alt='' />
                        <img alt='' />
                        <img alt='' />
                        <button className={styles.buttonRight}>
                          <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-7'>
                <div className='row'>
                  <div className='col-12'>
                    <div className={styles.lvl}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className={styles.lvlOne}>
                            <div className={styles.title}>Sunbaby Magic Bear Chair</div>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className={styles.lvlOne2}>
                            <div className={styles.rating}>
                              <span className={styles.views}>(0 reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl + ' ' + styles.shorterLvl}>
                      <div className={styles.lvlTwo}>
                        <div className={styles.newPrice}>
                          123$
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className={styles.lvlThree}>
                            <button>
                              <FontAwesomeIcon
                                icon={faShoppingBasket}/>
                              <strong>ADD TO CART</strong>
                            </button>
                            <button>
                              <FontAwesomeIcon icon={faEnvelope}/>
                              <strong>ASK ABOUT PRODUCT</strong>
                            </button>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className={styles.lvlThree}>
                            <div className={styles.quant}>Quantity: </div>
                            <button className={styles.number}>2</button>
                            <button>
                              <FontAwesomeIcon icon={faMinus}/>
                            </button>
                            <button>
                              <FontAwesomeIcon icon={faPlus}/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className={styles.lvlFour}>
                            <span className={styles.overview}>Information:</span>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className={styles.lvlFour2}>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration in some
                            form, by injected humour.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className={styles.lvlFive}>
                            <div>Availability:</div>
                            <span>In Stock</span>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className={styles.lvlFive}>
                            <div>Category:</div>
                            <span>Furniture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl + ' ' + styles.lastLvl}>
                      <div className={styles.lvlSix}>
                        <button className={styles.facebook}>
                          <FontAwesomeIcon icon={faFacebookF} />
                          <span>Share</span>
                        </button>
                        <button className={styles.google}>
                          <FontAwesomeIcon icon={faGooglePlusG} />
                          <span>Google+</span>
                        </button>
                        <button className={styles.twitter}>
                          <FontAwesomeIcon icon={faTwitter} />
                          <span>Tweet</span>
                        </button>
                        <button className={styles.pinterest}>
                          <FontAwesomeIcon icon={faPinterestP} />
                          <span>Pinterest</span>
                        </button>
                        <button className={styles.linkedin}>
                          <FontAwesomeIcon icon={faLinkedinIn} />
                          <span>Linkedin</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {

};

export {
  Component as ModelView,
  //Container as ModelView,
  Component as ModelViewComponent,
};
