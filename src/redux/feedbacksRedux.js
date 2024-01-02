/* selectors */
export const getAllFeedbacks = ({ feedbacks }) => feedbacks;

/* reducer */
const feedbacksReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default feedbacksReducer;
