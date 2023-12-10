import React, { useState, useRef } from 'react';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const [startX, setStartX] = useState(null);
  const swipeableRef = useRef(null);

  const handleTouchStart = e => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = e => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > 50 && rightAction) {
      rightAction();
    } else if (deltaX < -50 && leftAction) {
      leftAction();
    }

    setStartX(null);
  };

  return (
    <div
      ref={swipeableRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ width: '100%', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

export default Swipeable;
