import React, { useState } from 'react';
import styles from './SliderBottom.module.scss';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './ReactSlick.css';
import clsx from 'clsx';

const SliderBottom = ({ activeItems, setActiveIndex }) => {
  const [activeIndex, setActiveIndexLocal] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const handleActivePhoto = index => {
    setActiveIndex(index);
    setActiveIndexLocal(index);
  };

  return (
    <div className='gallerySlider'>
      <div className={styles.slider}>
        <Slider {...settings}>
          {activeItems.map((item, index) => (
            <div
              key={item.id}
              className={clsx(styles.productContainer, {
                [styles.inactive]: index !== activeIndex,
              })}
            >
              <img
                className={styles.product}
                key={item.id}
                src={`${process.env.PUBLIC_URL}/images/products/${item.id}.jpg`}
                alt='furniture'
                data-image={item.image}
                onClick={() => handleActivePhoto(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

SliderBottom.propTypes = {
  setActiveIndex: PropTypes.func,
  activeItems: PropTypes.arrayOf(PropTypes.object),
};
export default SliderBottom;
