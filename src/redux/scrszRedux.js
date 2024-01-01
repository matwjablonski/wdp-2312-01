/* selectors */
export const getScr = ({ screen }) => screen;

/* actions */
const createActionName = actionName => `app/screen/${actionName}`;
const SET_SCR = createActionName('SET_SCR');

/* action creator */
export const setScr = payload => ({ payload, type: SET_SCR });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_SCR:
      return action.payload;
    default:
      return statePart;
  }
}