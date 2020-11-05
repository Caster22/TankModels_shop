import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

const Component = () => (
  <div className={ styles.root }>
    <div className='container'>
      <section className={styles.home}>
        <h2 className='text-center mb-4'>
          <FontAwesomeIcon className='mx-4' icon={ faLongArrowAltDown } />
          Promotion of the Month!
          <FontAwesomeIcon className='mx-4' icon={ faLongArrowAltDown } />
        </h2>
        <div className={styles.home__promotion}>
          <div className='row'>
            <div className='col-6'>
              <div className={styles.home__promotion__pic}>
                <img
                  src='https://eu-wotp.wgcdn.co/dcont/tankopedia_images/a05_m4_sherman/a05_m4_sherman_image_resized.png'
                  alt='TankPic'/>
              </div>
            </div>
            <div className='col-6 pt-4 text-center'>
              <div className={styles.home__promotion__offer}>
                <h3>We gladly announce our special offer of the month:</h3>
                <h4>Tank Name</h4>
                <p>Tank Type</p>
                <p>Tank country</p>
                <p>Tank desc</p>
                <div className='row'>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                  <div className='col-3'>
                    <div className='col-12'>Price:</div>
                    <div className='col-12'>$$$</div>
                  </div>
                </div>
                <button className={styles.home__promotion__btn}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center my-5 w-75 mx-auto'>
          <h2 className='text-center mb-4'>
            Welcome in our models shop!
          </h2>
          <p>
            Ladies and Gentlemen, our model shop is not only a place where model
            making takes place. First of all, the unique space and offer,
            which includes the most modern models. Our Little Metal Army Store
            consists of people who share a passion for modern structures and machines
            - miniature, technological works of art.
          </p>
          <p>
            In our shop you will find many popular tank models in scale <strong>1:35 </strong>
            which could be pre-assembled by us or on your demand dear customer we can send it for you
            to assembly model by yourself!
          </p>
          <p>
            Our collection of models consist of wide range from many nations like <strong>USA </strong>
            <strong>Germany </strong><strong>USSR </strong> and many others. This collection have many tanks used
            in WW2 but also tank that weren’t mass produced or existed only in blueprints!
          </p>
          <p>
            Just navigate in our shop by choosing country origin of tanks in our menu and when ordering choose from what material
            your tank should be made! We offer <strong>Paper, plastic, wood and metal </strong> models!
          </p>
        </div>
      </section>
    </div>
  </div>
);

export {
  Component as Homepage,
  // Container as Homepage,
  // Component as HomepageComponent,
};
