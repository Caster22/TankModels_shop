import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { fetchPromotions, getPromotions } from '../../../redux/PromotionsRedux';
import { connect } from 'react-redux';
import { fetchAllModels, getAllModels } from '../../../redux/ModelsRedux';
import { ProductBox} from '../../common/ProductBox/ProductBox';
import { fetchAllCountries, getAllCountries } from '../../../redux/CountriesRedux';

class Component extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'USA',
    productsOnPage: 10,
  }

  componentDidMount() {
    const { selectedPromotion, fetchModels, fetchCountries } = this.props;
    selectedPromotion();
    fetchModels();
    fetchCountries();
  }

  addClass(domElement, className) {
    domElement.current.classList.add(className);
  }

  removeClass(domElement, className) {
    domElement.current.classList.remove(className);
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  handleCategoryChangeFade(newCategory, event) {
    if (event !== undefined) event.preventDefault();
    this.removeClass(this.props.modelsListRef, styles.fadeIn);
    this.addClass(this.props.modelsListRef, styles.fadeOut);

    setTimeout(() => {
      this.handlePageChange(0);
      this.handleCategoryChange(newCategory);
      this.addClass(this.props.modelsListRef, styles.fadeIn);
      this.removeClass(this.props.modelsListRef, styles.fadeOut);
    }, 1000);
  }

  handlePageChangeFade(newPage, event) {
    if (event !== undefined) event.preventDefault();
    this.removeClass(this.props.modelsListRef, styles.fadeIn);
    this.addClass(this.props.modelsListRef, styles.fadeOut);

    setTimeout(() => {
      this.setState({ activePage: newPage });
      this.addClass(this.props.modelsListRef, styles.fadeIn);
      this.removeClass(this.props.modelsListRef, styles.fadeOut);
    }, 1000);
  }

  render() {
    const { promotion, models, countries } = this.props;
    const { activeCategory, activePage, productsOnPage } = this.state;

    if (!promotion || !models || !countries) {

      return (
        <div className='text-center text-warning pt-5'>
          LOADING DATA...
        </div>
      );
    } else {

      const categoryProducts = models.filter(item => item.country.name === activeCategory);
      const pagesCount = Math.ceil(categoryProducts.length / productsOnPage);

      const dots = [];
      for (let i = 0; i < pagesCount; i++) {
        dots.push(
          <li key={i}>
            <a
              href='/#'
              onClick={event => this.handlePageChangeFade(i, event)}
              className={i === activePage ? styles.active : undefined}
            >
              page {i}
            </a>
          </li>
        );
      }
      const thisModels = this;
      window.addEventListener('resize', () => {
        if (pagesCount < activePage) thisModels.handlePageChange(pagesCount - 1);
      });

      return (
        <div className={ styles.root }>
          <div className='container'>
            <section className={styles.home}>
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

              <h2 className='text-center mb-4'>
                <FontAwesomeIcon className='mx-4' icon={ faLongArrowAltDown } />
                Our Models
                <FontAwesomeIcon className='mx-4' icon={ faLongArrowAltDown } />
              </h2>
              <div className={styles.panelBar}>
                <div className='row justify-content-center no-gutters align-items-end'>
                  <div className={'col-12 col-md-3 ' + styles.heading}>
                    <h3>Our Models</h3>
                  </div>
                  <div className={'col-12 col-md-7 ' + styles.menu}>
                    <ul>
                      {countries.map(item => (
                        <li key={item._id}>
                          <a
                            href='/#'
                            className={
                              item.name === activeCategory ? styles.active : undefined
                            }
                            onClick={event =>
                              this.handleCategoryChangeFade(item.name, event)
                            }
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={'col-auto ' + styles.dots}>
                    <ul>{ dots }</ul>
                  </div>
                </div>
              </div>
              <div className={`row ${styles.fadeIn}`} ref={this.props.modelsListRef}>

              </div>
              <div className={`col col-sm-12`}>
                <div className='row'>
                  {models
                    .slice(activePage * productsOnPage, (activePage + 1) * productsOnPage)
                    .map(data => (
                      <div key={data._id} className='col-lg-3 col-md-4 col-6'>
                        <ProductBox {...data} />
                      </div>
                    ))}
                </div>
              </div>
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
                  <div className='col-6 pt-4 text-center pr-5'>
                    { promotion.map(data => (
                      <div key={data._id} className={styles.home__promotion__offer}>
                        <h3 className='pb-4'>We gladly announce our special offer of the month:</h3>
                        <h4>{ data.name }</h4>
                        <p>{ data.type }</p>
                        <p>{ data.country.name }</p>
                        <div className='row pb-4'>
                          <div className='col-3'>
                            <div className='col-12'>Paper Model:</div>
                            <div className='col-12'>{`${ data.paperPrice} $`}</div>
                          </div>
                          <div className='col-3'>
                            <div className='col-12'>Plastic Model:</div>
                            <div className='col-12'>{`${ data.plasticPrice} $`}</div>
                          </div>
                          <div className='col-3'>
                            <div className='col-12'>Wood Model:</div>
                            <div className='col-12'>{`${ data.woodPrice} $`}</div>
                          </div>
                          <div className='col-3'>
                            <div className='col-12'>Metal Model:</div>
                            <div className='col-12'>{`${ data.metalPrice} $`}</div>
                          </div>
                        </div>
                        <button className={styles.home__promotion__btn}>
                          Add to cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }
}

Component.propTypes = {
  promotion: PropTypes.array,
  selectedPromotion: PropTypes.func,
  fetchModels: PropTypes.func,
  fetchCountries: PropTypes.func,
  modelsListRef: PropTypes.object,
  models: PropTypes.array,
  countries: PropTypes.array,
};
Component.defaultProps = {
  models: [],
  countries: [],
  modelsListRef: React.createRef(),
};

const mapStateToProps = state => ({
  promotion: getPromotions(state),
  models: getAllModels(state),
  countries: getAllCountries(state),
});

const mapDispatchToProps = dispatch => ({
  selectedPromotion: () => dispatch(fetchPromotions()),
  fetchModels: () => dispatch(fetchAllModels()),
  fetchCountries: () => dispatch(fetchAllCountries()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
