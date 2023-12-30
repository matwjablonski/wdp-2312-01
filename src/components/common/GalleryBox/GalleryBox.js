import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProductByTags } from '../../../redux/productsRedux';
import { TAGS } from '../../../redux/initialState';
import styles from './GalleryBox.module.scss';
import GalleryNav from '../GalleryBox/GalleryNav/GalleryNav';
import ActionButtons from './ActionButtons/ActionButtons';
import Image from './Image/Image';
import Prices from './Prices/Prices';
import RatingBox from './RatingBox/RatingBox';
import SliderBottom from './SliderBottom/SliderBottom';

const GalleryBox = () => {
  const [activeTag, setActiveTag] = useState(TAGS.FEATURED);

  const [fade, setFade] = useState(true);
  const activeItems = useSelector(state => getProductByTags(state, activeTag));

  const [activeIndex, setActiveIndex] = useState(0);

  const activeElement = activeItems[activeIndex];

  const handleTagClick = name => {
    setFade(false);
    setTimeout(() => {
      setActiveTag(name);
      setFade(true);
    }, 800);
  };

  return (
    <div className={styles.root}>
      <GalleryNav activeTag={activeTag} setActiveTag={handleTagClick} />
      <div
        className={`${styles.sliderContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}
      >
        <ActionButtons
          id={activeElement.id}
          favorite={activeElement.favorite}
          comparison={activeElement.comparison}
        />
        <Image id={activeElement.id} />
        <Prices price={activeElement.price} oldPrice={activeElement.oldPrice} />
        <RatingBox
          id={activeElement.id}
          name={activeElement.name}
          stars={activeElement.stars}
          personalStars={activeElement.personalStars}
        />
        <SliderBottom activeItems={activeItems} setActiveIndex={setActiveIndex} />
      </div>
    </div>
  );
};

export default GalleryBox;
