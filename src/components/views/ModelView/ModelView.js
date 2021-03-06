import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModelView.module.scss';

import {connect} from 'react-redux';
import {faMinus, faPlus, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fetchSelectedModel, getAllModels} from '../../../redux/ModelsRedux';
import ImageSlider from '../../Features/Slider/Slider';
import {addItem} from '../../../redux/CartRedux';
import shortid from 'shortid';

const img1 = 'https://n7.nextpng.com/sticker-png/1004/477/sticker-png-world-of-tanks-blitz-kv-2-kv-1-wot-tiger-131-game-self-propelled-artillery-vehicle-desktop-wallpaper.png';
const img2 = 'https://c0.klipartz.com/pngpicture/767/447/gratis-png-stridsvagn-103-churchill-tank-world-of-tanks-tank-destructor-tank.png';
const img3 = 'https://b7.pngbarn.com/png/225/18/world-of-tanks-germany-self-propelled-gun-tank-destroyer-tank-png-clip-art.png';

class Component extends React.Component {
  state = {
    quantity: 1,
    price: '',
  }

  changeQuantity = (plusMinus, e) => {
    e.preventDefault();
    if (plusMinus === '-' && this.state.quantity > 1) this.setState({ quantity: this.state.quantity - 1 });
    else if (plusMinus === '+' && this.state.quantity < 9) this.setState({ quantity: this.state.quantity + 1 });
  }

  changePrice = (price, e) => {
    e.preventDefault();
    this.setState({ price: price});
  }

  sendToCart = (model, e) => {
    e.preventDefault();
    if(!this.state.price) console.log('error');
    else {
      const cartItem = {
        id: shortid.generate(),
        model: model.name,
        quantity: this.state.quantity,
        basePrice: parseInt(this.state.price),
        image: model.image,
      };
      this.props.addItem(cartItem);
    }
  }

  componentDidMount = () => {
    const { selectedModel } = this.props;

    selectedModel(this.props.match.params.id);
  }

  mockArrayGallery = (images) => {
    const { model } = this.props;
    if (!model.image){
      return <div>Loading</div>;
    }
    else {
      return [images, img1, img2, img3];
    }
  }

  render() {
    const { model } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.frame}>
            <div className='row'>
              <div className='col-5'>
                <div className='row my-5 py-5'>
                  <div className='col-12'>
                    <div className={styles.bigPic}>
                      <ImageSlider images={this.mockArrayGallery(model.image)}/>
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
                            <div className={styles.title}>{ model.name }</div>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className={styles.lvlOne2}>
                            <div className={styles.rating}>
                              <span className={styles.origin}>{!model.country ? '' : 'Origin: ' + model.country.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl + ' ' + styles.shorterLvl}>
                      <div className={styles.lvlTwo}>
                        <div className={styles.price}>
                          Paper: {model.paperPrice}$
                        </div>
                        <div className={styles.price}>
                          Plastic: {model.plasticPrice}$
                        </div>
                        <div className={styles.price}>
                          Wood: {model.woodPrice}$
                        </div>
                        <div className={styles.price}>
                          Metal: {model.metalPrice}$
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
                              <FontAwesomeIcon icon={faEnvelope}/>
                              <strong>ASK ABOUT PRODUCT</strong>
                            </button>
                          </div>
                        </div>
                        <div className='col-12'>
                          <form className={styles.lvlThree}>
                            <div className={styles.quant}>Quantity: </div>
                            <div className={styles.number}>{this.state.quantity}</div>
                            <button onClick={event => this.changeQuantity('-', event)}>
                              <FontAwesomeIcon icon={faMinus}/>
                            </button>
                            <button onClick={event => this.changeQuantity('+', event)}>
                              <FontAwesomeIcon icon={faPlus}/>
                            </button>
                            <div className='mr-5 ml-3'>
                              <select onChange={event => this.changePrice(event.currentTarget.value, event)}>
                                <option name='' key='' value=''>---</option>
                                <option name='Paper' key='paperPrice' value={model.paperPrice}>Paper</option>
                                <option name='Plastic' key='plasticPrice' value={model.plasticPrice}>Plastic</option>
                                <option name='Wood' key='woodPrice' value={model.woodPrice}>Wood</option>
                                <option name='Metal' key='metalPrice' value={model.metalPrice}>Metal</option>
                              </select>
                            </div>
                            <button onClick={event => this.sendToCart(model, event)} type='submit'>
                              <FontAwesomeIcon icon={faShoppingBasket}/>
                              <strong>ADD TO CART</strong>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl + ' ' + styles.longerLvl}>
                      <div className='row'>
                        <div className='col-12'>
                          <div className={styles.lvlFour}>
                            <span className={styles.overview}>Information:</span>
                          </div>
                        </div>
                        <div className='col-12'>
                          <div className={styles.lvlFour2}>
                            {model.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className={styles.lvl + ' ' + styles.lastLvl}>
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
                            <span>{model.type}</span>
                          </div>
                        </div>
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
  selectedModel: PropTypes.func,
  model: PropTypes.object,
  match: PropTypes.object,
  addItem: PropTypes.func,
};

Component.defaultProps = {
  model: {},
};

const mapStateToProps = state => ({
  model: getAllModels(state),
});

const mapDispatchToProps = dispatch => ({
  selectedModel: id => dispatch(fetchSelectedModel(id)),
  addItem: value => dispatch(addItem(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export {
  //Component as ModelView,
  Container as ModelView,
  Component as ModelViewComponent,
};
