/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;
export const getTotalQuantity = ({ cart }) =>
  cart.products.reduce((sum, product) => sum + product.quantity, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const UPDATE_QUANTITY = createActionName('UPDATE_QUANTITY');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});
export const removeProduct = id => ({ type: REMOVE_PRODUCT, payload: id });

/* reducer */
export default function reducer(statePart = { products: [] }, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const existingProductIndex = statePart.products.findIndex(
        p => p.id === action.payload.id
      );

      if (existingProductIndex >= 0) {
        const updatedProducts = statePart.products.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, quantity: product.quantity + action.payload.quantity };
          }
          return product;
        });

        return { ...statePart, products: updatedProducts };
      } else {
        return { ...statePart, products: [...statePart.products, action.payload] };
      }
    }
    case UPDATE_QUANTITY: {
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    default:
      return statePart;
  }
}
