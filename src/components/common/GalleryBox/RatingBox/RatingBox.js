import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingBox.module.scss';
import Stars from '../../Stars/Stars';

const RatingBox = ({ name, id, stars, personalStars }) => {
  return (
    <div className={styles.box}>
      <h5>{`${name}`}</h5>
      <div>
        <Stars id={id} stars={stars} personalStars={personalStars} />
      </div>
    </div>
  );
};

RatingBox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  personalStars: PropTypes.number,
  stars: PropTypes.number,
};

export default RatingBox;
