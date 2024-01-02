import React from 'react';
// import PropTypes from 'prop-types';

import styles from './CompanyClaim.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import {
  getTotalQuantity,
  updateQuantity,
  removeProduct,
} from '../../../redux/cartRedux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CompanyClaim = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCounter = useSelector(getTotalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cartProducts = useSelector(({ cart }) => cart.products);
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const handleRemoveProduct = id => {
    dispatch(removeProduct(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    newQuantity = parseInt(newQuantity, 10) || 0;

    if (newQuantity < 1) {
      newQuantity = 1;
    }
    handleUpdateQuantity(id, newQuantity);
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={`col text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className={`col text-center ${styles.logo}`}>
            <a href='#'>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon} onClick={toggleCart}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>
                {cartCounter.toString().slice(0, 5)}
              </div>
            </a>
            {isCartOpen && (
              <div className={styles.cartList}>
                {cartProducts.map(product => (
                  <div key={product.id} className={styles.cartItem}>
                    <div className={styles.productDetails}>
                      <span className={styles.productName}>{product.name}</span>
                      <span className={styles.productPrice}>
                        {' '}
                        - Price: ${product.price * product.quantity}
                      </span>
                    </div>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.decrementQuantity}
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        type='number'
                        className={styles.quantityInput}
                        value={product.quantity}
                        onChange={e => handleQuantityChange(product.id, e.target.value)}
                      />
                      <button
                        className={styles.incrementQuantity}
                        onClick={() =>
                          handleQuantityChange(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className={styles.removeIcon}
                      onClick={() => handleRemoveProduct(product.id)}
                    />
                  </div>
                ))}
                <div className={styles.cartSummary}>
                  <div>Delivery price: $5.00</div>
                  <div>Total price: ${totalPrice + 5}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

//Comment
// CompanyClaim.propTypes = {};

export default CompanyClaim;
