/* selector */ 
export const getElements = ({ elements }) => elements;

/* action creator */
const createActionName = actionName => `app/elements/${actionName}`;

/* action types */
const SET_ELEMENTS = createActionName('SET_ELEMENTS');

/* action creators */
export const setElements = payload => ({payload, type: SET_ELEMENTS});


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_ELEMENTS: 
      return action.payload;
    default: 
      return statePart;
  }
}