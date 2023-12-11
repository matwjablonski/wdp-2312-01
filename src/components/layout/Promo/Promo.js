import styles from './Promo.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Promo = ({ promo }) => {

  const promoData = useSelector(state => state.promo);
  
  console.log('promoData', promoData);

  return (
    <div>
      {promoData.titleLeft}
    </div>
  );};

Promo.propTypes = {
  promo: PropTypes.object,
};

export default Promo;



