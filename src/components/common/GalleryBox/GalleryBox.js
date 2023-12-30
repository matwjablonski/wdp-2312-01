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

  const activeItems = useSelector(state => getProductByTags(state, activeTag));

  const [activeIndex] = useState(0);

  const activeElement = activeItems[activeIndex];

  return (
    <div className={styles.root}>
      <GalleryNav activeTag={activeTag} setActiveTag={setActiveTag} />
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
      <SliderBottom activeItems={activeItems} />
    </div>
  );
};

export default GalleryBox;
