import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import { getCartItems } from '../../../redux/CartRedux';
import {connect} from 'react-redux';

class Component extends React.Component {
  state = {
    name: '',
    address: '',
    email: '',
    phone: '',
    question: '',
    shipping: '',
    order: this.props.cartItems,
  }

  sum = () => {
    const { items } = this.props.cartItems;
    let sum = 0;
    items.forEach(item => {
      sum += item.quantity * item.basePrice;
    });
    return sum;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      question: this.state.question,
      shipping: this.state.shipping,
      order: this.props.cartItems,
    };

    /* send to mongoDB */
    console.log('form: ', form);
  }

  render() {


    return (
      <div className={styles.root}>
        <div className='container'>
          <h1 className={styles.order}>Order Form:</h1>
          <div className={styles.formWrapper}>
            <form onSubmit={this.handleSubmit}>
              <div className={styles.formBar}>
                <div className='col-12'>
                  <h2 className={styles.title}>Name:</h2>
                  <div className={styles.input}>
                    <input
                      type='text'
                      name='name'
                      onChange={e => this.handleChange(e)}
                      placeholder='Your Name'
                      value={this.state.name}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <h2 className={styles.title}>Email:</h2>
                  <div className={styles.input}>
                    <input
                      type='text'
                      name='email'
                      onChange={e => this.handleChange(e)}
                      placeholder='Your Email'
                      value={this.state.email}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <h2 className={styles.title}>Address:</h2>
                  <div className={styles.input}>
                    <input
                      type='text'
                      name='address'
                      onChange={e => this.handleChange(e)}
                      placeholder='Your Address'
                      value={this.state.address}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <h2 className={styles.title}>Phone:</h2>
                  <div className={styles.input}>
                    <input
                      type='Number'
                      name='phone'
                      onChange={e => this.handleChange(e)}
                      placeholder='Your number'
                      value={this.state.phone}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <h2 className={styles.title}>Your Wishes:</h2>
                  <div className={styles.input}>
                    <textarea
                      name='question'
                      onChange={e => this.handleChange(e)}
                      placeholder='your wishes about order:'
                      value={this.state.question}
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <h2 className={styles.title}>Shipping:</h2>
                  <div className={styles.input}>
                    <select
                      name='shipping'
                      onChange={e => this.handleChange(e)}
                      value={this.state.shipping}
                    >
                      <option>Inpost packer locker</option>
                      <option>UPS Standard 24H</option>
                      <option>Pickup</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='my-5 font-weight-bold'>This will cost you: {this.sum()}$</div>
              <button className={styles.btn} type='submit'>Order</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  cartItems: PropTypes.object,
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
});


const mapDispatchToProps = dispatch => ({

});

const Container = connect(mapStateToProps, mapDispatchToProps())(Component);

export {
  //Component as Form,
  Container as Form,
  Component as FormComponent,
};
