import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Stars.module.scss';
import { addPersonalStars } from '../../../redux/productsRedux';
import { useDispatch } from 'react-redux';

const Stars = ({ stars, id, personalStars }) => {
  const [displayStars, setDisplayStars] = useState(personalStars || stars);
  const [hoveredStars, setHoveredStars] = useState(0);

  const dispatch = useDispatch();

  const handleStarClick = value => {
    dispatch(addPersonalStars({ id, personalStars: value }));
    setDisplayStars(value);
  };

  const shouldBeFilled = i => {
    if (!hoveredStars && i <= displayStars) {
      return true;
    }
    if (i <= hoveredStars) {
      return true;
    }
    return false;
  };

  const shouldHaveExtraColor = i => {
    if (!hoveredStars && i <= personalStars) {
      return true;
    }
    if (i <= hoveredStars) {
      return true;
    }
    return false;
  };

  return (
    <div className={`${styles.stars}`}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => setHoveredStars(i)}
          onMouseLeave={() => setHoveredStars(0)}
          className={`${styles.star} ${shouldHaveExtraColor(i) ? styles.gold : ''}`}
        >
          <FontAwesomeIcon icon={shouldBeFilled(i) ? faStar : farStar}>
            {i} stars
          </FontAwesomeIcon>
        </a>
      ))}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
  id: PropTypes.string,
  personalStars: PropTypes.number,
};

export default Stars;
