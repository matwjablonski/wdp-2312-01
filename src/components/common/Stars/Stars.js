import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './Stars.module.scss';

const Stars = ({ stars }) => {
  const [personalStars, setPersonalStars] = useState(stars);
  const [hoveredStars, setHoveredStars] = useState(0);

  const handleStarClick = clickedStar => {
    setPersonalStars(clickedStar);
    console.log('User clicked star:', clickedStar);
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => setHoveredStars(i)}
          onMouseLeave={() => setHoveredStars(0)}
          className={`${styles.star} ${
            i <= (hoveredStars || personalStars) ? styles.gold : ''
          }`}
        >
          <FontAwesomeIcon
            icon={i <= (hoveredStars || personalStars) ? faStar : farStar}
            className={
              i <= (hoveredStars || personalStars) ? styles.goldStar : styles.star
            }
          >
            {i} stars
          </FontAwesomeIcon>
        </a>
      ))}
    </div>
  );
};

export default Stars;
