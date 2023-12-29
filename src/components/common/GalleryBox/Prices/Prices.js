import React from 'react';
import PropTypes from 'prop-types';
import styles from './Prices.module.scss';

const Prices = ({ price, oldPrice }) => {
  return (
    <div className={styles.pricesCircle}>
      <h4>$ {price}</h4>
      {oldPrice && <h6 className={styles.oldPrice}>$ {oldPrice}</h6>}
    </div>
  );
};

Prices.propTypes = {
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};
export default Prices;
