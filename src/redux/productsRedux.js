/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getCompareProducts = ({ products }) =>
  products.filter(product => product.comparison === true);

export const getPromotedProducts = ({ products }) =>
  products.filter(product => product.promoted === true);

export const getProductByTags = ({ products }, tagId) =>
  products.filter(product => product?.tags.includes(tagId));

// actions
const createActionName = actionName => `app/product/${actionName}`;
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const ADD_PRODUCT_COMPARE = createActionName('ADD_PRODUCT_COMPARE');
const REMOVE_PRODUCT_COMPARE = createActionName('REMOVE_PRODUCT_COMPARE');
const ADD_PERSONAL_STARS = createActionName('ADD_PERSONAL_STARS');

// action creators
export const toggleFavorite = payload => ({
  type: TOGGLE_PRODUCT_FAVORITE,
  payload,
});

export const addToCompare = payload => ({
  type: ADD_PRODUCT_COMPARE,
  payload,
});

export const removeCompare = payload => ({
  type: REMOVE_PRODUCT_COMPARE,
  payload,
});

export const addPersonalStars = payload => ({
  type: ADD_PERSONAL_STARS,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    case ADD_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, comparison: true } : product
      );
    case REMOVE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, comparison: false } : product
      );
    case ADD_PERSONAL_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, personalStars: action.payload.personalStars }
          : product
      );
    default:
      return statePart;
  }
}
