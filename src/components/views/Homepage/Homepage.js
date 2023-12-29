import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../features/Promoted/Promoted';
import Promo from '../../layout/Promo/PromoContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <NewFurniture />
    <Promo />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
