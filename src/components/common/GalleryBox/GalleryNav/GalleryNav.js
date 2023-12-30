import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllTags } from '../../../../redux/tagsRedux';
import styles from './GalleryNav.module.scss';

const GalleryNav = ({ activeTag, setActiveTag }) => {
  const tags = useSelector(getAllTags);

  const handleClick = name => {
    setActiveTag(name);
  };

  return (
    <div className={styles.navi}>
      <ul className={styles.list}>
        {tags.map(tag => (
          <li key={tag.id} className={activeTag === tag.name ? styles.active : ''}>
            <a
              className={styles.navLink}
              href='#/'
              data-name={tag.name}
              onClick={() => handleClick(tag.name)}
            >
              {tag.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

GalleryNav.propTypes = {
  activeTag: PropTypes.string,
  setActiveTag: PropTypes.func,
  fade: PropTypes.bool,
  setFade: PropTypes.func,
};

export default GalleryNav;
