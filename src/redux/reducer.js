// reducer.js
const initialState = {
  selectedSize: '', // Initial state
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_SIZE':
      console.log("ddd", action.payload);
      return {
        ...state,
        selectedSize: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
