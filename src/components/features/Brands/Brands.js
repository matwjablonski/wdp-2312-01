import styles from './Brands.module.scss';
import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getAllBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Swipeable from '../../Swipeable/Swipeable';

const Brands = () => {
  const allBrands = useSelector(getAllBrands);
  const [visibleStart, setVisibleStart] = useState(0);

  const getItemsPerPage = () => {
    if (window.innerWidth < 415) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 992) {
      return 4;
    } else {
      return 6;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollLeft = e => {
    e.preventDefault();
    const newStart = Math.max(visibleStart - itemsPerPage, 0);
    setVisibleStart(newStart);
  };

  const scrollRight = e => {
    e.preventDefault();
    const maxStartIndex = allBrands.length - itemsPerPage;
    const newStart = Math.min(visibleStart + itemsPerPage, maxStartIndex);
    setVisibleStart(newStart);
  };

  const leftSwipe = () => {
    const newStart = Math.max(visibleStart - itemsPerPage, 0);
    setVisibleStart(newStart);
  };

  const rightSwipe = e => {
    const maxStartIndex = allBrands.length - itemsPerPage;
    const newStart = Math.min(visibleStart + itemsPerPage, maxStartIndex);
    setVisibleStart(newStart);
  };

  return (
    <Swipeable leftAction={leftSwipe} rightAction={rightSwipe}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.brandsWrapper}>
            <Button
              variant='outline'
              className={styles.brandButton}
              onClick={scrollLeft}
            >
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </Button>
            {allBrands.slice(visibleStart, visibleStart + itemsPerPage).map(brand => (
              <div key={brand.id} className={styles.brand}>
                <div
                  className={styles.photoBrand}
                  style={{
                    backgroundImage: `url("${process.env.PUBLIC_URL}/images/brands/${brand.name}.jpg")`,
                  }}
                ></div>
              </div>
            ))}
            <Button
              variant='outline'
              className={styles.brandButton}
              onClick={scrollRight}
            >
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default Brands;
