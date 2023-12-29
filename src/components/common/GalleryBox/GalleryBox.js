import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProductByTags } from '../../../redux/productsRedux';
import { TAGS } from '../../../redux/initialState';
import styles from './GalleryBox.module.scss';
import GalleryNav from '../GalleryBox/GalleryNav/GalleryNav';
import ActionButtons from './ActionButtons/ActionButtons';
import Image from './Image/Image';
import Prices from './Prices/Prices';

const GalleryBox = () => {
  const [activeTag, setActiveTag] = useState(TAGS.FEATURED);

  const activeItems = useSelector(state => getProductByTags(state, activeTag));
  console.log('bytags:', activeItems);

  const [activeIndex, setActiveIndex] = useState(0);

  const activeElement = activeItems[activeIndex];

  return (
    <div className={styles.root}>
      <GalleryNav activeTag={activeTag} setActiveTag={setActiveTag} />
      <ActionButtons />
      <Image id={activeElement.id} />
      <Prices price={activeElement.price} oldPrice={activeElement.oldPrice} />
    </div>
  );
};

export default GalleryBox;
