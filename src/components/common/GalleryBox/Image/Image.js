import PropTypes from 'prop-types';
import React from 'react';
import styles from './Image.module.scss';

const Image = ({ id }) => {
  return (
    <img
      className={styles.image}
      src={`${process.env.PUBLIC_URL}/images/products/${id}.jpg`}
      alt='chair'
    />
  );
};

Image.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Image;
