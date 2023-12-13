import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  favorite,
  comparison,
  children,
  variant,
  noHover,
  noBackground,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  if (comparison) {
    classes.push(styles.active);
  }

  if (noBackground) {
    classes.push(styles.noBackground);
  }

  if (favorite) {
    classes.push(styles.active);
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  noBackground: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  comparison: PropTypes.bool,
  favorite: PropTypes.bool,
};

export default Button;
