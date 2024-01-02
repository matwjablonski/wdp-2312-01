import styles from './Feedback.module.scss';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllFeedbacks } from '../../../redux/feedbacksRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../Swipeable/Swipeable';

const Feedback = () => {
  const allFeedbacks = useSelector(getAllFeedbacks);

  const [activePage, setActivePage] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePageChange = newPage => {
    setFade(false);
    setTimeout(() => {
      setActivePage(newPage);
      setFade(true);
    }, 500);
  };

  const handleSwipeLeft = () => {
    if (activePage > 0) {
      handlePageChange(activePage - 1);
    }
  };

  const handleSwipeRight = () => {
    if (activePage < allFeedbacks.length - 1) {
      handlePageChange(activePage + 1);
    }
  };

  const dots = [];
  for (let i = 0; i < 3; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : ''}
        >
          Page {i + 1}
        </a>
      </li>
    );
  }

  return (
    <Swipeable leftAction={handleSwipeLeft} rightAction={handleSwipeRight}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div
            className={`${styles.feedbackWrapper} + ${
              fade ? styles.fadeIn : styles.fadeOut
            }`}
          >
            <div className={styles.feedbackIcon}>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            {allFeedbacks.slice(activePage * 1, (activePage + 1) * 1).map(feedback => (
              <div key={feedback.id} className={styles.feedback}>
                <div className={styles.feedbackText}>{feedback.text}</div>
                <div className={styles.clientWrapper}>
                  <div
                    className={styles.clientPhoto}
                    style={{
                      backgroundImage: `url("${process.env.PUBLIC_URL}/images/feedbacks/${feedback.name}.jpg")`,
                    }}
                  ></div>
                  <div className={styles.clientInfo}>
                    <p className={styles.clientName}>{feedback.clientName}</p>
                    <p className={styles.clientPosition}>{feedback.clientPosition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default Feedback;
