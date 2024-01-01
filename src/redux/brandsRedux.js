/* selectors */
export const getAllBrands = ({ brands }) => brands;

/* reducer */
const brandsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default brandsReducer;
